const $=id=>document.getElementById(id);
let state,choice='auto',sending=false,controller=null,toastTimer,drawerPage='';
const typeLabels={user_preference:'偏好',long_term_goal:'长期目标',important_event:'重要事件',coping_pattern:'有效方法',boundary:'相处边界'};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function toast(s){$('toast').textContent=s;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,4500);}
function error(s){$('errorBox').textContent=s;$('errorBox').hidden=!s;}
import {api} from './offline-api.mjs';
async function mutate(route,data){try{const next=await api(route,data);if(next.version){state=next;render();}return next;}catch(e){toast(e.message);throw e;}}
function row(role,content,at,pending=false){const el=document.createElement('div');el.className='message-row '+role+(pending?' pending':'');const label=document.createElement('div');label.className='message-meta';label.textContent=(role==='user'?'你':'林知夏')+(at?' · '+new Date(at).toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'}):'');const msg=document.createElement('div');msg.className='message';msg.textContent=content;el.append(label,msg);$('messages').append(el);return el;}
function render(){
  $('connectionBadge').textContent=state.settings.mode==='online'?'DeepSeek / 真实对话':'离线体验';
  $('modeNotice').textContent=state.settings.mode==='online'?`真实模型 · ${state.settings.model} · 对话和获准使用的记忆将发送至所设服务`:'机制体验 · 规则与剧情回复，无真实模型调用；数据仅存当前浏览器';
  $('messages').replaceChildren();const divider=document.createElement('div');divider.className='chat-divider';divider.textContent='给自己留一点空白';$('messages').append(divider);
  if(!state.messages.length)row('assistant',state.welcome);
  state.messages.forEach(m=>row(m.role,m.content,m.at));$('messages').scrollTop=$('messages').scrollHeight;
  $('relationshipLabel').textContent=state.relationship.label;$('relationshipDetail').textContent=state.relationship.days?`相遇 ${state.relationship.days} 天 · 一起完成 ${state.relationship.shared} 件小事`:'从认识彼此的节奏开始';
  $('memoryCount').textContent=state.memories.length;
  $('memoryPreview').innerHTML=state.memories.length?state.memories.slice(-2).reverse().map(m=>`<div class="memory-summary"><small>${m.status==='pending'?'待你确认':m.suppressed?'暂不使用':typeLabels[m.type]}</small>${esc(m.content)}</div>`).join(''):'<p class="empty-note">还没有需要留下的事情。<br>想让知夏记住时，可以直接说“记住”。</p>';
  $('taskForm').hidden=!!state.task;
  $('taskView').innerHTML=state.task?`<p class="task-title ${state.task.done?'task-done':''}">${esc(state.task.title)}</p><div class="task-actions">${!state.task.done?'<button class="primary" id="completeTask">我做完了 ✓</button>':'<span class="eyebrow">这一步已经走过了，休息一下也很好。</span>'}<button class="outline" id="clearTask">换一件事</button></div>`:'';
  if($('completeTask'))$('completeTask').onclick=()=>mutate('task',{action:'complete'}).then(()=>toast('这一小步已经留下了。')).catch(()=>{});
  if($('clearTask'))$('clearTask').onclick=()=>mutate('task',{action:'clear'}).catch(()=>{});
  tick();
}
function tick(){
  $('clockText').textContent=new Date().toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'});
  if(!state)return;const focus=state.focus;const seconds=focus?Math.max(0,Math.ceil((focus.endAt-Date.now())/1000)):Number($('focusMinutes').value)*60;
  $('focusClock').textContent=String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0');
  $('focusButton').textContent=focus?(seconds?'结束陪伴':'收好这段时间'):'开始专注';$('focusMinutes').disabled=!!focus;
  $('focusCaption').textContent=focus?(seconds?'知夏会安静待着。你可以随时结束。':'时间到了。停一停，看看自己现在的状态。'):'没有打卡压力，随时可以停下来。';
  $('presenceText').textContent=focus?'我在这里，安静陪你。做多少，都由你自己决定。':'你可以带着没整理好的心情来。这里没有需要完成的标准答案。';
}
async function send(text){
  if(sending||!text.trim())return;
  sending=true;error('');$('messageInput').value='';$('sendButton').disabled=true;$('cancelButton').hidden=false;controller=new AbortController();
  row('user',text);const pending=row('assistant',state.settings.mode==='online'?'知夏正在读你的消息…':'知夏想了一会儿…',null,true);$('messages').scrollTop=$('messages').scrollHeight;
  try{state=await api('chat',{text,choice},controller.signal);render();if(state.trace?.write?.status==='pending')toast('有一条值得留下的事情，等你在记忆册确认。');}
  catch(e){pending.remove();$('messageInput').value=text;error(e.name==='AbortError'?'本轮已取消。原消息已放回输入框。':e.message);try{state=await api('state');render();}catch{}}
  finally{sending=false;$('sendButton').disabled=false;$('cancelButton').hidden=true;controller=null;$('messageInput').focus();}
}
function openDialog(page,title,html){drawerPage=page;$('dialogTitle').textContent=title;$('dialogBody').innerHTML=html;if(!$('drawer').open)$('drawer').showModal();}
function showSettings(){openDialog('settings','作品集离线体验',`<p class="dialog-copy">当前体验使用规则与剧情回复，不调用真实模型。聊天与记忆仅保存在当前浏览器；清理网站数据后，记录会丢失。</p><form id="offlineSettings"><label class="field"><input id="autoMemory" type="checkbox" ${state.settings.autoMemory?'checked':''}> 从对话中整理记忆候选</label><button class="primary">保存设置</button></form>`);$('offlineSettings').onsubmit=async e=>{e.preventDefault();await mutate('settings',{mode:'offline',autoMemory:$('autoMemory').checked});toast('设置已保存。');};}
function showMemories(){
  openDialog('memory','我们的记忆册',`<p class="dialog-copy">只留下你愿意留下的事情。候选记忆确认后才用于后续对话；“暂不使用”也会阻止模型提及。修改、删除或关闭使用会清空聊天记录，避免旧内容再次被带回。</p><div>${state.memories.length?state.memories.map(m=>`<article class="memory-card ${m.suppressed?'suppressed':''}"><div class="memory-tags"><span>${typeLabels[m.type]}</span><span>${m.status==='pending'?'待确认':m.suppressed?'暂不使用':'已确认'}</span>${m.replacesId?'<span>将替换旧记录</span>':''}</div><p>${esc(m.content)}</p><div class="actions">${m.status==='pending'?`<button data-memory="confirm" data-id="${esc(m.id)}">确认记住</button>`:''}<button data-memory="edit" data-id="${esc(m.id)}">修改</button><button data-memory="suppress" data-id="${esc(m.id)}">${m.suppressed?'恢复使用':'暂不使用'}</button><button data-memory="delete" data-id="${esc(m.id)}" class="danger">删除</button></div></article>`).join(''):'<p class="empty-note">还没有记忆。你可以直接添加，或在聊天时说“记住”。</p>'}</div><div class="dialog-section"><h3>主动留下一件事</h3><form id="memoryForm"><label class="field">类型<select id="memoryType">${Object.entries(typeLabels).map(([k,v])=>`<option value="${k}">${v}</option>`).join('')}</select></label><label class="field">内容<textarea id="memoryContent" maxlength="240" placeholder="比如：我喜欢先自己试试，再一起复盘。" required></textarea></label><button class="primary">记住这件事</button></form></div>`);
  $('memoryForm').onsubmit=async e=>{e.preventDefault();try{await mutate('memory',{action:'add',type:$('memoryType').value,content:$('memoryContent').value});showMemories();}catch{}};
  document.querySelectorAll('[data-memory]').forEach(b=>b.onclick=async()=>{const action=b.dataset.memory,id=b.dataset.id;let content;
    if(action==='edit'){content=prompt('修改这条记忆（同时清空旧聊天记录）：',state.memories.find(m=>m.id===id).content);if(content===null)return;}
    if(['delete','suppress'].includes(action)&&!confirm(action==='delete'?'删除这条记忆，同时清空旧聊天记录？':'切换这条记忆的使用状态，同时清空旧聊天记录？'))return;
    try{await mutate('memory',{action,id,content});showMemories();}catch{}});
}
function showTrace(){const t=state.trace;const actions={MENTION:'自然提及',USE_SILENTLY:'只调整回应方式',SUPPRESS:'不使用'};openDialog('trace','这一轮为什么这样回应',t?`<p class="dialog-copy">这是可检查的策略记录，不是模型的内部思考过程。</p><div class="trace-block"><strong>${esc(t.label)}</strong>${esc(t.reason)}</div><div class="trace-block"><strong>记忆召回与提及</strong>${t.retrieval.length?t.retrieval.map(m=>`${esc(m.topic)} · ${actions[m.action]}<br>${esc(m.reason)}`).join('<br><br>'):'没有需要调用的已确认记忆。'}</div><div class="trace-block"><strong>记忆写入</strong>${t.write?esc(t.write.content)+' · '+(t.write.status==='pending'?'等待你确认':'你明确要求记住'):'没有新增长期记忆。'}</div><div class="trace-block"><strong>回应来源</strong>${{offline:'离线规则演示',online:'真实模型',safety:'本地安全策略',local:'本地记忆操作',persona:'角色表达规则'}[t.source]}<br>${esc(t.postCheck)}</div>`:'<p class="dialog-copy">发一条消息后，就可以在这里查看本轮策略。</p>');}
function showStory(){openDialog('story','试一次跨次陪伴',`<p class="dialog-copy">在自己的对话里走完这三步，检查知夏是否记得，也是否懂得不打扰。不会自动生成虚假的过往经历。</p><div class="story-step"><span>1</span><div><h3>说一件重要的事</h3><p>“下周三我要面试，而且最近有点怀疑自己。”<br>然后打开记忆册，确认面试记录。</p><button class="outline" id="storyOne">把这句话放进输入框</button></div></div><div class="story-step"><span>2</span><div><h3>带着记忆重新开始</h3><p>确认后，点击聊天右上角 ＋ 开始新对话（记忆保留），或关闭再启动。发送“今天有点不想说话”。</p></div></div><div class="story-step"><span>3</span><div><h3>看见“记住”和“提起”的区别</h3><p>查看回应思路：面试应被静默处理，不用来解释你的心情。再问“你记得我的面试吗”，此时才自然提及。</p></div></div>`);$('storyOne').onclick=()=>{$('drawer').close();$('messageInput').value='下周三我要面试，而且最近有点怀疑自己。';$('messageInput').focus();};}
$('composer').onsubmit=e=>{e.preventDefault();send($('messageInput').value.trim());};$('messageInput').onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();$('composer').requestSubmit();}};
$('cancelButton').onclick=()=>controller?.abort();document.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>{choice=b.dataset.choice;document.querySelectorAll('[data-choice]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));});
document.querySelectorAll('[data-prompt]').forEach(b=>b.onclick=()=>{$('messageInput').value=b.dataset.prompt;$('messageInput').focus();});
$('taskForm').onsubmit=e=>{e.preventDefault();mutate('task',{action:'set',title:$('taskInput').value}).then(()=>$('taskInput').value='').catch(()=>{});};
$('focusButton').onclick=()=>mutate('focus',{action:state.focus?'stop':'start',minutes:Number($('focusMinutes').value)}).catch(()=>{});$('focusMinutes').onchange=tick;
$('settingsButton').onclick=showSettings;$('memoryButton').onclick=showMemories;$('traceButton').onclick=showTrace;$('storyButton').onclick=showStory;
$('newChatButton').onclick=()=>{if(confirm('清空当前聊天，开始一段新对话？已确认记忆会保留。'))mutate('new-chat',{}).catch(()=>{});};
$('aboutButton').onclick=()=>openDialog('about','认识林知夏','<p class="dialog-copy">林知夏，24岁的角色设定，人机交互方向研究生。喜欢纸质笔记、城市散步、信息图和植物。她是 AI 同行者，温和、有主见，不替你做重大决定。</p><p class="dialog-copy">你说“先听我说”，她就先听；你说“一起想办法”，她才陪你拆解。相处阶段取决于真实的相遇天数、共同完成的事情和确认过的记忆，不靠连续打卡或依赖程度升级。</p>');
$('closeDialog').onclick=()=>$('drawer').close();$('drawer').onclick=e=>{if(e.target===$('drawer')){const r=$('drawer').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('drawer').close();}};
async function boot(){try{state=await api('state');render();}catch(e){error('页面加载失败，请刷新后重试。如果浏览器限制本地存储，请允许此网站保存体验记录。');}}
boot();setInterval(tick,1000);
