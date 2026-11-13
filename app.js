const projects=[
  {
    "id": "lab",
    "filter": "insight",
    "num": "01",
    "featured": true,
    "kicker": [
      "需求洞察 / 最近的探索",
      "DEMAND INSIGHT / RECENT EXPLORATION"
    ],
    "title": [
      "不买账实验室",
      "Lost Demand Lab"
    ],
    "desc": [
      "从咖啡品牌增长咨询中的真实观察出发：消费者说了什么、为什么没买、品牌又该先改变哪一步？把零散表达转化为可验证的增长实验。",
      "Born from coffee-brand growth consulting: what do consumers say, why don’t they buy, and what should a brand change first? Turn scattered expressions into testable growth experiments."
    ],
    "tags": [
      "Consumer insight",
      "Research hypotheses",
      "Growth experiments"
    ],
    "url": "https://chrisghubhub.github.io/lost-demand-lab/",
    "cta": [
      "进入实验室 ↗",
      "Enter the lab ↗"
    ],
    "note": [
      "交互原型 · 使用合成数据演示研究与实验流程",
      "Interactive prototype · Synthetic data illustrates research and experimentation"
    ],
    "flow": [
      [
        "购买阻力地图",
        "沉默解码器",
        "增长实验室"
      ],
      [
        "Friction map",
        "Silent-group decoder",
        "Growth experiments"
      ]
    ],
    "boundary": [
      "群组与评论均为合成演示数据；匹配分、搜索关联分为预设模拟指标。情景测算不是实际实验成效。",
      "Groups and comments are synthetic. Matching and search scores are preset demonstration values. Scenario calculations are not measured experiment outcomes."
    ],
    "chapters": [
      [
        [
          "起点：咨询项目中读过的那些评论",
          "参与咖啡品牌增长咨询时，我曾借助小红书内容与评论理解消费场景。大量笔记和评论需要人工阅读，同一个问题可能有很多说法，还要判断语境、群体差异与代表性。那段经历留下了一个问题：能不能让这些零散表达更快进入业务决策，而不只停留在调研材料里？"
        ],
        [
          "The origin: reading comments during consulting work",
          "During a coffee-brand growth consulting project, I used Xiaohongshu posts and comments to understand consumption contexts. Manual reading meant interpreting varied wording, context, group differences and representativeness. It left me asking whether these scattered expressions could reach business decisions faster, instead of remaining research material."
        ]
      ],
      [
        [
          "从词频，走向尚未满足的购买条件",
          "「找不到人凑单」「三杯喝不完」「能否分开付款」措辞不同，却可能指向同一种协调门槛。LLM 的切入价值，在于保留语境与原文证据，把多种说法归纳为值得行动的商业问题。Demo 用「买三杯赠杯」的合成案例，把这条路径具体化；真实的是项目经历，演示中的评论和经营数值则是合成的。"
        ],
        [
          "From word frequency to unmet purchase conditions",
          "“No one to share an order with,” “I can’t drink three cups” and “Can we pay separately?” can point to a shared coordination barrier. The intended role of an LLM is to retain context and source evidence while grouping varied expressions into actionable problems. A synthetic buy-three-get-a-cup scenario makes the workflow concrete; the consulting experience is real, while comments and operating figures are simulated."
        ]
      ],
      [
        [
          "沉默的人，不应被 AI 假装读懂",
          "浏览、加购与未支付能告诉品牌流失发生在哪里，却不直接说明原因；留下评论的人也不代表所有未购买者。我把已表达的阻力、相似消费场景与搜索疑虑作为交叉线索，提出群组级假设。再用消费者研究、增长、运营、数据、财务与实验评审六种视角质询它，决定先做哪个小实验。"
        ],
        [
          "AI should not pretend to read silent consumers’ minds",
          "Views, carts and unpaid orders locate friction without proving its cause; commenters do not represent every non-buyer. Expressed barriers, comparable contexts and search questions inform group-level hypotheses. Six perspectives—consumer research, growth, operations, data, finance and experiment review—challenge them before a small test is chosen."
        ]
      ],
      [
        [
          "先找靶，再做枪",
          "与 BrowserKitten 的技术先行不同，这次我先确定需要改善的决策：品牌下一步该验证什么。AI 的价值不在于输出更多洞察，而在于帮助业务方更快选择值得验证的假设。成功标准也不只是成交变多，还包括净增量、贡献毛利与履约体验，避免用补贴买到原本就会发生的订单。"
        ],
        [
          "Define the target before building the solution",
          "Unlike the technology-first BrowserKitten venture, this project begins with a decision to improve: what should a brand test next? AI should help select a worthwhile hypothesis, not merely produce more insights. Success would mean incremental orders, contribution margin and sound fulfillment, rather than subsidizing purchases that would have happened anyway."
        ]
      ]
    ],
    "image": "lab.png",
    "visual": "lab"
  },
  {
    "id": "browser",
    "filter": "decision",
    "num": "02",
    "image": "browser.png",
    "visual": "browser",
    "kicker": [
      "浏览器 AGENT / 首次商业化尝试",
      "BROWSER AGENT / FIRST COMMERCIALIZATION ATTEMPT"
    ],
    "title": [
      "BrowserKitten",
      "BrowserKitten"
    ],
    "desc": [
      "围绕电商竞品追踪，让 Agent 在浏览器里采集商品图文、整理报告与创作素材。我们的首次商业化尝试，也让我直面技术优势与获客效率之间的距离。",
      "An in-browser agent for e-commerce competitor tracking, collecting product images and copy for reports and creative work. Our first commercialization attempt exposed the distance between technical advantage and efficient acquisition."
    ],
    "tags": [
      "Chrome MV3",
      "Browser as runtime",
      "Local workspace"
    ],
    "url": "https://github.com/Player-YN/BrowserKitten#quick-start",
    "cta": [
      "安装并体验扩展 ↗",
      "Install the extension ↗"
    ],
    "note": [
      "浏览器扩展 · 安装后配置模型服务即可体验",
      "Browser extension · Install and configure model services"
    ],
    "flow": [
      [
        "浏览店铺与商品",
        "采集图文信息",
        "报告与创作产物"
      ],
      [
        "Browse stores & products",
        "Collect images & copy",
        "Reports & creative outputs"
      ]
    ],
    "boundary": [
      "侧边栏预览展示实际界面；示例任务尚未发送。运行与本地跟进依赖浏览器保持运行及所配置的模型服务。",
      "The preview shows the actual side panel with an unsent example task. Execution and local follow-ups require the browser to remain running and model services to be configured."
    ],
    "featured": true,
    "chapters": [
      [
        [
          "第一次商业化：先被技术路线吸引",
          "这是我和合伙人第一次尝试商业化的产品。起初我们先问：Agent 能不能直接运行在用户已经使用的浏览器中？与依赖外部运行环境、以截图识别为主的方案相比，我们希望复用登录态与页面信息，通过侧边栏把 Agent 放进已有工作流，而非让用户再搭建一套环境。"
        ],
        [
          "Our first venture started with an architecture",
          "This was the first product my partner and I tried to commercialize. We began by asking whether an agent could run inside the browser people already use. Compared with external runtimes relying primarily on screenshot interpretation, we wanted to reuse signed-in sessions and page information, placing the agent in an existing workflow through a side panel."
        ]
      ],
      [
        [
          "逐渐明确的场景：电商竞品追踪",
          "浏览各大电商平台的店铺与商品，批量收集图片和文案，再整理成报告或新的创作素材，是高度依赖浏览器的工作。这里的技术选择才有了具体落点：从页面结构读取文本、图片地址等可直接获取的信息，有机会减少反复截图与视觉识别的开销、提高采集的准确性；侧边栏也让浏览与委托任务可以并行。"
        ],
        [
          "A concrete use case: e-commerce competitor tracking",
          "Reviewing stores and products across e-commerce platforms, collecting images and copy in batches, and turning them into reports or creative materials is browser-intensive work. Reading available text and image URLs from page structure can reduce repeated screenshot interpretation and improve collection accuracy. A side panel lets browsing and delegation sit together."
        ]
      ],
      [
        [
          "技术适配，不等于获客已经成立",
          "电商追踪让需求更清楚，但它并没有自动带来可控的投放 ROI。投放标签并不总能准确找到需要这类能力的人，平台推荐也不总能稳定触达目标用户。这不是单一原因的证明，却让我看见：一个架构能支持多少任务，与谁会持续使用、为什么付费、如何触达，是不同的问题。"
        ],
        [
          "Workflow fit does not establish acquisition economics",
          "Competitor tracking clarified a need, but did not automatically make advertising ROI predictable. Targeting labels did not consistently find people needing these capabilities, and platform recommendations were not always dependable. This does not prove a single cause; it showed me that supported tasks, recurring use, willingness to pay and distribution are separate questions."
        ]
      ],
      [
        [
          "带到下一个项目的方法",
          "我把这段经历概括为「先做枪，再找靶」。之后做不买账实验室，我先回到咨询经历中的业务痛点，再选择 AI 的介入方式。技术优势要成立为产品优势，还需要接上明确的使用场景、购买理由与触达路径。"
        ],
        [
          "What I carried into the next project",
          "I think of this as building a solution before defining its target. With Lost Demand Lab, I returned to a business problem from consulting before choosing how AI should intervene. A technical advantage becomes a product advantage only when it connects with a use case, a reason to buy and a way to reach users."
        ]
      ]
    ]
  },
  {
    "id": "atlas",
    "filter": "companion",
    "num": "03",
    "image": "cat.png",
    "visual": "cat",
    "kicker": [
      "AI 桌宠 / 陪伴产品主线",
      "AI DESKTOP COMPANION / CORE COMPANIONSHIP PROJECT"
    ],
    "title": [
      "Live2D 桌宠 · 有记忆的数字伙伴",
      "Live2D Companions · A Presence That Remembers"
    ],
    "desc": [
      "从 MemGPT 的长期记忆管理与早年 QQ 桌宠获得启发：当一个数字伙伴还能记得数天、数月前你随口说过的小事，日常陪伴会怎样改变？",
      "Inspired by MemGPT and early QQ desktop pets: what changes when a digital companion can retain the small things you mentioned days or months earlier?"
    ],
    "tags": [
      "Character design",
      "Companion research",
      "Live2D direction"
    ],
    "cta": [
      "查看项目细节 · GitHub ↗",
      "Project details · GitHub ↗"
    ],
    "note": [
      "10 位角色设计 · 桌面陪伴产品探索",
      "10 character concepts · Desktop companionship exploration"
    ],
    "flow": [
      [
        "长期记忆",
        "桌面存在感",
        "差异化角色关系"
      ],
      [
        "Long-term memory",
        "Desktop presence",
        "Distinct relationships"
      ]
    ],
    "boundary": [
      "本展区展示角色原画、关系设定与交互构想。",
      "This collection presents character concept art, relationship design and interaction concepts."
    ],
    "chapters": [
      [
        [
          "把长期记忆，变成日常陪伴的连续感",
          "我希望它进入高频、日常的桌面使用，而不只在新鲜时聊几次。MemGPT 的长期 Agent 记忆管理给了我技术启发，QQ 桌宠则提供了存在形式的想象。最大的投入方向，是让角色能够延续过去的经历：一家你说好吃的餐厅、一件你曾经提过的小事，不应随着对话窗口关闭而消失。"
        ],
        [
          "Turn long-term memory into everyday continuity",
          "I wanted frequent, everyday desktop companionship rather than a few novelty conversations. MemGPT inspired the memory-management direction, while QQ pets suggested a form of presence. The central technical focus was continuity: a restaurant you enjoyed or a small event you mentioned should not disappear with the conversation window."
        ]
      ],
      [
        [
          "活人感，来自共同经历仍然存在",
          "数天甚至数月后，小事仍能在合适的语境中被记起，是我希望做出的核心体验。它的价值不只是「知道我的资料」，而是让人感到之前的互动有延续。这是产品要验证的体验目标；记住之后如何得体地回应，则由角色关系与记忆使用策略共同决定。"
        ],
        [
          "A sense of presence through shared history",
          "The intended experience is a small detail resurfacing appropriately days or months later. The value goes beyond a stored profile: earlier interactions should continue to matter. This is an experience goal to validate, with character relationships and memory-use policies shaping how recollection is expressed."
        ]
      ],
      [
        [
          "十种角色，探索不同的陪伴期待",
          "我没有把所有需求装进同一个人格。技术搭档、游戏队友、剧情守护者、黑猫室友与云狐等十位角色，分别探索不同关系里的主动程度、情绪回应与共同活动。产品形态是桌面数字伙伴；林知夏的自习室另用于验证记忆与回应机制，不代表主线最终界面。"
        ],
        [
          "Ten characters, different companionship expectations",
          "Rather than putting every need into one persona, ten characters explore distinct relationships: technical partner, gaming companion, story guardian, cat roommate and cloud fox among them. Each implies different initiative, emotional responses and shared activity. The main concept is a desktop companion; Lin Zhixia’s study room separately tests memory and response mechanisms."
        ]
      ],
      [
        [
          "暂停商业化：重新评估情绪价值的实现路径",
          "情绪价值是我对这个产品商业化的核心判断。2026 年夏季拟人化互动服务新规施行，让我重新评估角色亲密感、情绪互动与持续运营的责任。在预期体验、团队投入和风险之间权衡后，我决定暂不推进商业化。对我而言，这次探索也意味着学会判断：一个想做的产品，是否值得在当前条件下继续投入。"
        ],
        [
          "Pausing commercialization: reassessing emotional value",
          "Emotional value was central to my commercialization thesis. The introduction of new anthropomorphic-interaction rules in summer 2026 prompted me to reassess intimacy, emotional interaction and ongoing operating responsibilities. Balancing the intended experience, team investment and risk, I paused commercialization. The project also taught me to decide whether a desired product merits further investment under current conditions."
        ]
      ]
    ],
    "policy": [
      "政策背景：《人工智能拟人化互动服务管理暂行办法》自 2026 年 7 月 15 日施行；第十四条涉及未成年人虚拟亲密关系服务，第八、十条涉及依赖与情感边界。",
      "Policy context: the Interim Measures for Anthropomorphic AI Interaction Services took effect on 15 July 2026. Article 14 addresses virtual intimate relationships for minors; Articles 8 and 10 address dependency and emotional boundaries. "
    ],
    "url": "https://github.com/chrisghubhub/ai-product-portfolio/tree/main/projects/companion-atlas"
  },
  {
    "id": "lin",
    "filter": "companion",
    "num": "04",
    "image": "lin-ui.png",
    "visual": "lin",
    "kicker": [
      "桌宠衍生支线 / 记忆与回应机制验证",
      "COMPANION SPIN-OFF / MEMORY & RESPONSE PROTOTYPE"
    ],
    "title": [
      "林知夏 · 桌宠衍生 Demo",
      "Lin Zhixia · Companion Spin-off"
    ],
    "desc": [
      "被记住，不等于被反复提起。一个从桌宠角色延伸的陪伴界面，探索稳定人格、可控记忆，以及恰到好处的回应。",
      "Being remembered should not mean being reminded all the time. A companion interface exploring a consistent persona, controllable memory, and appropriate responses."
    ],
    "tags": [
      "Memory control",
      "Response policy",
      "Character continuity"
    ],
    "url": "demos/lin-zhixia/",
    "cta": [
      "体验陪伴 Demo →",
      "Try the companion →"
    ],
    "note": [
      "陪伴机制实验 · 可体验记忆确认与回应策略",
      "Companionship experiment · Try memory confirmation and response policies"
    ],
    "flow": [
      [
        "说一件重要的事",
        "确认记忆",
        "开启新对话再体验"
      ],
      [
        "Share something important",
        "Confirm a memory",
        "Start a new chat"
      ]
    ],
    "boundary": [
      "当前体验使用规则与剧情回复，演示记忆机制，不调用真实模型；记录仅保存在当前浏览器。",
      "This experience uses rules and scripted replies to demonstrate memory mechanisms, without live model calls. Records stay in this browser."
    ],
    "chapters": [
      [
        [
          "把一个问题单独拿出来做实验",
          "林知夏从桌宠的人物档案中延伸而来。我将「什么值得记住、什么时候应该提起」单独做成自习室 Demo，以便观察记忆控制与回应策略。它是一条围绕陪伴机制的实验支线，而非桌宠主线的最终产品界面。"
        ],
        [
          "Isolating one question for an experiment",
          "Lin Zhixia grew out of the desktop companion character designs. The study-room demo isolates what to remember and when to mention it, making memory controls and response policies observable. It is a mechanism-focused spin-off, not the final interface of the desktop companion."
        ]
      ],
      [
        [
          "记住，不代表随时可以提起",
          "信息相关性与关系中的得体是两回事。一个角色即使记得用户的面试，也不应该在用户只想被倾听时不断追问进度。这个 Demo 将记忆写入、召回与提及分开，并让用户拥有确认、修改与限制使用的权利。"
        ],
        [
          "Remembering is not permission to mention",
          "Information relevance and relational appropriateness are different. Remembering an interview does not justify repeatedly asking about it when someone only wants to be heard. The demo separates writing, retrieval and mention, and gives users control over confirmation, editing and use."
        ]
      ]
    ]
  },
  {
    "id": "trade",
    "filter": "decision",
    "num": "05",
    "image": "trade.png",
    "visual": "trade",
    "kicker": [
      "AI-NATIVE / 对工作方式的激进探索",
      "AI-NATIVE / A RADICAL WORKFLOW EXPLORATION"
    ],
    "title": [
      "Chris Trade",
      "Chris Trade"
    ],
    "desc": [
      "如果只用一个对话框，甚至一句话，就能组织研究、比较与交易准备，传统交易软件的操作门槛还需要存在吗？一次以意图重构工作流的激进探索。",
      "If one conversation could organize research, comparison and trade preparation, how much of a traditional trading app would still need manual operation? A radical exploration of intent-driven work."
    ],
    "tags": [
      "Chat as control",
      "Observable decisions",
      "Undo & confirmation"
    ],
    "url": "https://chrisghubhub.github.io/chris-trade/",
    "cta": [
      "打开交易工作区 ↗",
      "Open the workspace ↗"
    ],
    "note": [
      "概念 Demo · 预设行情与分析 · 仅模拟订单",
      "Concept demo · Preset market data & analysis · Simulated orders only"
    ],
    "flow": [
      [
        "表达意图",
        "检查分析与策略",
        "确认模拟订单"
      ],
      [
        "Express intent",
        "Inspect analysis & policy",
        "Confirm a simulated order"
      ]
    ],
    "boundary": [
      "概念 Demo，目前以文字交互为主，使用预设行情、分析与模拟订单；语音是交互设想，不代表已实现语音交易。",
      "A concept demo using text interaction, preset market data and analysis, and simulated orders. Voice is part of the interaction vision, not implemented voice trading."
    ],
    "chapters": [
      [
        [
          "想推翻的，是高频手工操作这个默认前提",
          "传统交易软件把大量工作交给用户：找入口、切页面、读不同位置的信息，再反复点击与输入。信息越多，操作与理解成本也越高。我想探索的不是给这些页面多加一个助手，而是用户能否只表达目标，就让系统组织大部分操作。"
        ],
        [
          "Questioning the default of constant manual operation",
          "Traditional trading software asks users to find controls, switch views, read scattered information and repeatedly click and type. More information often creates more operating and interpretation work. I wanted to explore whether expressing a goal could let the system organize most actions."
        ]
      ],
      [
        [
          "对话，能否成为整个工作过程的入口？",
          "我的设想是一个对话框，进一步可以是语音，让用户完成大部分研究、比较与交易准备。就像今天人们可以通过与编程 Agent 对话迭代软件，而不必先掌握每一种编程语言，我想把类似的变化带到其他工作流程：先表达想完成什么，再由系统安排工具、信息与步骤。"
        ],
        [
          "Could conversation become the entry to the whole process?",
          "The vision is one conversation—potentially voice—for most research, comparison and trade preparation. People can now iterate software through conversation with coding agents without mastering each programming language. I wanted to explore the same shift elsewhere: express the desired outcome, then let the system arrange tools, information and steps."
        ]
      ],
      [
        [
          "AI-native，改变的是人与软件的分工",
          "Agent 办公和 Agent Commerce 给我的启发是，生产方式可能从「人操作软件」走向「人表达目标，系统组织执行」。Chris Trade 用交易工作区来检验这一交互假设：Chat 驱动视图与任务，证据、策略和订单草稿仍然可见，关键动作保留确认。界面服务于目标，而不再要求人记住整套操作路径。"
        ],
        [
          "AI-native changes the division of work",
          "Agent-based office work and commerce suggest a shift from operating software to expressing goals and letting systems organize execution. Chris Trade explores that interaction through chat-driven views and tasks, visible evidence, policies and order drafts, and confirmation for consequential actions. The interface should serve the goal rather than demand memorized navigation."
        ]
      ]
    ]
  }
];

let lang=localStorage.getItem('portfolio-lang')==='en'?'en':'zh',filter='all';const t=a=>a[lang==='zh'?0:1];const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function labArt(){return `<div class="lab-art"><div class="lab-head"><b>${t(['不买账实验室','Lost Demand Lab'])}</b><span>RESEARCH → EXPERIMENT</span></div><div class="lab-grid"><div><h4>${t(['购买阻力地图','Purchase friction'])}</h4><div class="bars"><div class="bar">${t(['价格门槛','Price'])}<i style="width:78%"></i></div><div class="bar">${t(['信任缺口','Trust'])}<i style="width:58%;background:#a5b985"></i></div><div class="bar">${t(['使用场景','Context'])}<i style="width:39%;background:#c3d3a6"></i></div></div></div><div class="lab-card"><strong>${t(['他们没说出口的需求','What goes unsaid'])}</strong>${t(['消费表达 → 研究假设<br>模拟信号 → 最小实验','Expressions → Hypotheses<br>Signals → Small experiments'])}</div></div><div class="lab-bottom"><span>01 / MAP</span><span>02 / DECODE</span><span>03 / TEST</span></div></div>`}
function visualContent(p){if(p.id==='atlas')return '<div class="character-triptych"><img src="assets/characters/8.png" alt="煤球 / Meiqiu" loading="lazy"><img src="assets/characters/9.png" alt="阿雾 / Awu" loading="lazy"><img src="assets/characters/10.png" alt="零号 / Unit Zero" loading="lazy"></div>';if(p.id==='browser')return '<div class="browser-composition"><span class="stage-word">IN YOUR<br>BROWSER.</span><img src="assets/browser.png" alt="BrowserKitten side panel" loading="lazy"><div class="stage-flow"><span>'+t(['商品图文','Product content'])+'</span><i>↗</i><span>'+t(['研究报告','Research outputs'])+'</span></div></div>';return '<div class="screen-frame"><div class="window-bar"><i></i><i></i><i></i><span>'+p.id.toUpperCase()+' / PRODUCT PREVIEW</span></div><img src="assets/'+p.image+'" alt="'+esc(t(p.title))+'" loading="lazy"></div>';}
function render(){document.documentElement.lang=lang==='zh'?'zh-CN':'en';document.querySelectorAll('[data-zh]').forEach(el=>el.innerHTML=el.dataset[lang]);document.getElementById('language').textContent=lang==='zh'?'EN / 中文':'中文 / EN';document.getElementById('projects').innerHTML=projects.filter(p=>filter==='all'||p.filter===filter).map(p=>`<article class="project ${p.featured?'featured':''}" id="${p.id}"><a href="${p.id==='atlas'?'#atlas':p.url||'#'+p.id}" ${p.id==='atlas'?'data-story="atlas"':p.url?'target="_blank" rel="noopener"':'data-story="'+p.id+'"'} class="visual ${p.visual||''}" aria-label="${esc(t(p.title))}"><span class="project-index">${p.num}<small>/ SELECTED WORK</small></span>${visualContent(p)}<span class="preview-label">${p.id==='atlas'?t(['角色设计预览','CHARACTER CONCEPTS']):t(['实际界面预览','ACTUAL INTERFACE'])}<span>↗</span></span></a><div class="project-content"><span class="kicker">${t(p.kicker)}</span><h3>${t(p.title)}</h3><p>${t(p.desc)}</p><div class="tags">${p.tags.map(x=>'<span>'+x+'</span>').join('')}</div><div class="actions">${p.id==='atlas'?'<button class="primary" data-story="atlas">'+t(['产品与角色构想 +','Product & characters +'])+'</button><a class="text-link" href="'+p.url+'" target="_blank" rel="noopener">'+t(p.cta)+'</a>':(p.url?'<a class="primary" href="'+p.url+'" target="_blank" rel="noopener">'+t(p.cta)+'</a>':'<button class="primary" data-story="'+p.id+'">'+t(p.cta)+'</button>')+'<button class="text-link" data-story="'+p.id+'">'+t(['项目故事 +','Project story +'])+'</button>'}</div><p class="note">${t(p.note)}</p></div></article>`).join('');}
const characters=[["沈岚","Shen Lan","成熟技术搭档","Technical partner","让解决问题与情绪支持在同一段关系里共存。","Explore technical collaboration alongside emotional support."],["林知夏","Lin Zhixia","知性同行者","Thoughtful peer","低压相处、共同成长，记住重要的，也懂得不打扰。","Low-pressure companionship, shared growth and appropriate memory."],["唐小满","Tang Xiaoman","元气游戏队友","Gaming companion","用共同游戏和即时反馈建立日常互动，而非要求持续聊天。","Build everyday interaction through shared play and responsive feedback."],["顾承川","Gu Chengchuan","克制可靠的伙伴","Composed partner","探索能力感与平等边界如何同时存在。","Explore competence without sacrificing equal footing and boundaries."],["陆野","Lu Ye","直率行动派","Direct, action-oriented partner","通过主动表达与一起行动形成关系张力。","Explore connection through direct expression and shared action."],["夏川","Xia Chuan","温柔的日常伙伴","Gentle everyday companion","以小事中的正向关注，探索日常陪伴的节奏。","Explore the rhythm of companionship through small, positive moments."],["谢临渊","Xie Linyuan","共历故事的守护者","Story-driven guardian","让世界观与共同经历推动关系，而非只增加好感数值。","Let shared story and world-building shape a relationship beyond affinity scores."],["煤球","Meiqiu","毒舌黑猫室友","Sharp-tongued cat roommate","把桌面当领地，用幽默提醒工作，也提醒休息。","A cat that treats the desktop as its territory, prompting work and rest with humor."],["阿雾","Awu","治愈系云狐","Cloud-fox companion","探索非人形伙伴的照料、收集与成长体验。","Explore care, collecting and growth with a non-human companion."],["零号","Unit Zero","极客实验搭档","Geek experiment partner","让功能协作成为与数字生命建立关系的入口。","Use practical collaboration as an entry point to a digital-life relationship."]];
function characterGallery(){return '<h3>'+t(['十种角色，十种关系假设','Ten characters, ten relationship hypotheses'])+'</h3><p>'+t(['角色原画与关系构想；不同人物的外貌、性格与互动节奏共同服务于各自的陪伴关系。','Concept art and relationship designs; appearance, personality and interaction rhythms serve distinct companionship hypotheses.'])+'</p><div class="character-grid">'+characters.map((c,i)=>'<article class="character-card"><img src="assets/characters/'+(i+1)+'.png" alt="'+esc(c[0])+'" loading="lazy"><div><h4>'+esc(c[lang==='zh'?0:1])+'</h4><small>'+esc(c[lang==='zh'?2:3])+'</small><p>'+esc(c[lang==='zh'?4:5])+'</p></div></article>').join('')+'</div>';}
function story(id){const p=projects.find(p=>p.id===id);document.getElementById('story-body').innerHTML=`<span class="eyebrow">${p.num} / PRODUCT EXPLORATION</span><h2>${t(p.title)}</h2>${p.chapters.map(c=>{const pair=t(c);return '<section class="story-chapter"><h3>'+esc(pair[0])+'</h3><p>'+esc(pair[1])+'</p></section>';}).join('')}${p.id==='atlas'?characterGallery():''}${p.policy?'<p class="policy-note">'+esc(t(p.policy))+' <a href="https://www.cac.gov.cn/2026-04/10/c_1777558395078289.htm" target="_blank" rel="noopener">'+t(['政策原文 ↗','Policy source ↗'])+'</a></p>':''}<div class="experience-note"><h3>${t(['关于这次体验','About this experience'])}</h3><p>${t(p.boundary)}</p></div><div class="links">${p.url?'<a class="primary" href="'+p.url+'" target="_blank" rel="noopener">'+t(p.cta)+'</a>':''}</div>`;document.getElementById('story').showModal();}
document.getElementById('language').onclick=()=>{lang=lang==='zh'?'en':'zh';localStorage.setItem('portfolio-lang',lang);render();};document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('active',x===b));render();});document.addEventListener('click',e=>{const b=e.target.closest('[data-story]');if(b){e.preventDefault();story(b.dataset.story);}});document.getElementById('close').onclick=()=>document.getElementById('story').close();document.getElementById('story').addEventListener('click',e=>{if(e.target===e.currentTarget){const r=e.currentTarget.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.currentTarget.close();}});render();
