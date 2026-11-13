import {initialState,welcome,plan,offlineReply,modelMessages,checkedReply,memoryCandidate,upsertMemory,confirmMemory,memoryCommand,resetContext,relationship,types,isSensitive,classify,identityReply,identityIntent} from './core.mjs';
const randomUUID=()=>crypto.randomUUID();let state;try{state=JSON.parse(localStorage.getItem('portfolio-zhixia-v1'));}catch{}if(!state||state.version!==2)state=initialState();state.settings.mode='offline';const token='',apiKey='',character='';function snapshot(){return structuredClone({...state,relationship:relationship(state),hasKey:false,token,welcome});}async function save(){localStorage.setItem('portfolio-zhixia-v1',JSON.stringify(state));}function addMessage(role,content){state.messages.push({id:randomUUID(),role,content,at:new Date().toISOString()});}function textValue(v,max=2000){if(typeof v!=='string'||!v.trim()||v.length>max)throw Error('请输入有效内容');return v.trim();}function json(res,status,value){if(status>=400)throw Error(value.error);return value;}function endpoint(){throw Error('此在线作品集仅提供离线机制体验；真实模型连接请使用本地版本。');}function validateImport(){throw Error('请在本地版本导入备份。');}async function generate(){throw Error('此版本未连接真实模型，请使用离线体验。');}export async function api(name,b={}){const route='/api/'+name,res={};let committed=false;const controller=new AbortController();if(name==='state')return snapshot();if(name==='export')return {version:2,messages:state.messages,memories:state.memories};if(name==='shutdown')throw Error('关闭浏览器标签页即可。');if(name==='settings'){if(b.mode!=='offline')throw Error('在线作品集仅支持离线体验；真实模型请使用本地版本。');state.settings.autoMemory=b.autoMemory!==false;await save();return snapshot();}
    if(route==='/api/chat'){
      const text=textValue(b.text),choice=['auto','listen','solve'].includes(b.choice)?b.choice:'auto';
      const today=new Date().toLocaleDateString('en-CA');if(!state.visits.includes(today))state.visits.push(today);
      const command=classify(text)==='high_risk'?null:memoryCommand(state,text);
      const p=plan(state,text,choice);let reply,source='offline';
      if(command){reply=command;source='local';}
      else if(p.mode==='high_risk'){reply=offlineReply(state,text,p);source='safety';}
      else if(identityIntent(text)) {
        reply=identityReply(text);source='persona';
        if(/底层模型|什么模型|哪个模型|用的.*模型|what model/i.test(text))reply=state.settings.mode==='online'?`这个自习室当前连接的是 ${state.settings.model}。和你说话的角色是林知夏，叫我知夏就好。`:'现在是离线体验，还没有连接真实模型。你可以在连接设置里开启，和你说话的角色仍然是林知夏。';
      }
      else if(state.settings.mode==='online') {const result=await generate(modelMessages(state,text,p,character),controller.signal);reply=result.text;source=result.blocked?'safety':result.personaFallback?'persona':'online';}
      else reply=offlineReply(state,text,p);
      if(controller.signal.aborted)throw new Error('本轮已取消');
      addMessage('user',text);const sourceId=state.messages.at(-1).id;
      let candidate=null;if(!command&&p.mode!=='high_risk'&&state.settings.autoMemory){candidate=memoryCandidate(text,sourceId);if(candidate){if(state.memories.length>=500)throw new Error('记忆册已满，请整理后再试');upsertMemory(state,candidate);}}
      addMessage('assistant',reply);state.trace={...p,source,write:candidate?{status:candidate.status,content:candidate.content}:null,at:new Date().toISOString(),postCheck:source==='safety'?'安全策略已介入':'已进行本地规则检查（非完整安全审核）'};
      await save();committed=true;
      return json(res,200,snapshot());
    }
    if(route==='/api/settings'){
      if(!['online','offline'].includes(b.mode))throw new Error('请选择有效的对话模式');
      const baseUrl=typeof b.baseUrl==='string'?b.baseUrl.trim():'';if(baseUrl)endpoint(baseUrl);
      if(b.mode==='online'&&(!baseUrl||!b.model?.trim()))throw new Error('真实对话需要接口地址和模型名');
      state.settings={mode:b.mode,baseUrl,model:typeof b.model==='string'?b.model.trim().slice(0,200):'',autoMemory:b.autoMemory!==false};
      if(b.clearKey)apiKey='';else if(typeof b.apiKey==='string'&&b.apiKey.trim())apiKey=b.apiKey.trim();
    }else if(route==='/api/test-connection'){
      const result=await generate([{role:'user',content:'请只回复“连接成功”。'}],controller.signal);committed=true;return json(res,200,{ok:true,message:result.text});
    }else if(route==='/api/memory'){
      if(b.action==='add'){
        const content=textValue(b.content,240);if(isSensitive(content))throw new Error('这类敏感信息不进入 Demo 记忆册');
        if(state.memories.length>=500)throw new Error('记忆册已满');
        const type=types[b.type]?b.type:'user_preference';
        upsertMemory(state,{id:randomUUID(),type,topic:content.slice(0,24),content,status:'confirmed',suppressed:false,confidence:1,sourceId:null,sensitivity:'normal',createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),expiresAt:type==='important_event'?new Date(Date.now()+30*86400000).toISOString():null});
      }else{
        const m=state.memories.find(m=>m.id===b.id);if(!m)throw new Error('记忆不存在，可能已被修改');
        if(b.action==='confirm')confirmMemory(state,b.id);
        else if(b.action==='delete'){state.memories=state.memories.filter(m=>m.id!==b.id);state.messages=[];resetContext(state);}
        else if(b.action==='suppress'){m.suppressed=!m.suppressed;state.messages=[];resetContext(state);}
        else if(b.action==='edit'){const content=textValue(b.content,240);if(isSensitive(content))throw new Error('这类敏感信息不进入 Demo 记忆册');m.content=content;m.updatedAt=new Date().toISOString();m.expiresAt=m.type==='important_event'?new Date(Date.now()+30*86400000).toISOString():null;confirmMemory(state,m.id);state.messages=[];resetContext(state);}
        else throw new Error('不支持的记忆操作');
      }
    }else if(route==='/api/task'){
      if(b.action==='set')state.task={id:randomUUID(),title:textValue(b.title,120),done:false,createdAt:new Date().toISOString()};
      else if(b.action==='complete'&&state.task&&!state.task.done){state.task.done=true;state.completedTasks++;state.focus=null;}
      else if(b.action==='clear'){state.task=null;state.focus=null;}
      else throw new Error('请先设定一件事');
    }else if(route==='/api/focus'){
      if(b.action==='start'){const minutes=Number(b.minutes);if(![5,15,25].includes(minutes))throw new Error('请选择5、15或25分钟');state.focus={endAt:Date.now()+minutes*60000,minutes};}
      else state.focus=null;
    }else if(route==='/api/new-chat'){state.messages=[];resetContext(state);}
    else if(route==='/api/reset'){const settings=state.settings;state=initialState();state.settings=settings;}
    else if(route==='/api/import'){const settings=state.settings;state=validateImport(b.data);state.settings=settings;}
    else if(route==='/api/shutdown'){await save();committed=true;json(res,200,{ok:true});setTimeout(()=>server.close(()=>process.exit(0)),100);return;}
    else {json(res,404,{error:'入口不存在'});return;}
    await save();committed=true;return json(res,200,snapshot());

}
