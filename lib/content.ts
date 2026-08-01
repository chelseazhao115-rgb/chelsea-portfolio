export type Locale = "zh" | "en";

export const copy = {
  zh: {
    nav: [
      ["作品", "#projects"], ["经历", "#experience"], ["关于", "#about"], ["联系", "#contact"],
    ],
    heroEyebrow: "你好，我是 Chelsea · 产品经理候选人",
    heroTitle: "把真实的问题，\n做成愿意被使用的产品。",
    heroIntro: "我关注用户体验、数据验证与 AI 落地。从真实场景中发现问题，通过快速构建和用户测试，把想法变成可以体验、验证和持续迭代的产品。",
    tags: ["用户洞察", "产品设计", "AI 快速构建", "数据与实验"],
    view: "查看作品", resume: "下载简历", contact: "联系我", resumeLabel: "产品经理简历 · 中文",
    capabilityKicker: "HOW I WORK", capabilityTitle: "从问题出发，用验证靠近价值",
    capabilities: [
      ["01", "Understand Users", "发现真实需求", "从用户行为、使用情境与反馈中拆解问题，判断需求是否真实，并明确边界。"],
      ["02", "Build Products", "把想法做成产品", "定义 MVP、设计关键路径，借助 AI 快速构建可体验原型，验证技术与体验可行性。"],
      ["03", "Validate Value", "用证据持续迭代", "通过用户测试、漏斗数据与实验定位阻力，让每一次迭代都有依据。"],
    ],
    projectKicker: "SELECTED WORK", projectTitle: "把判断力放进真实产品里", projectIntro: "两个 0→1 项目，分别验证游戏化学习体验与 AI Agent 的落地方式。",
    projects: [
      { slug: "rescue-ducks", eyebrow: "01 · LIVE PRODUCT", title: "Rescue Ducks", subtitle: "让学生练习识别雅思阅读中的同义替换，而不是孤立背词。", facts: ["30–40 名学生测试", "同义词游戏化训练", "真实线上产品"], cta: "查看完整案例", image: "/rescue-ducks-live.png" },
      { slug: "agora", eyebrow: "02 · CURRENTLY BUILDING", title: "Agora", subtitle: "面向家庭学习场景的苏格拉底式数学 Agent，让提示推动思考，而不是直接泄露答案。", facts: ["六级提示机制", "错误类型识别", "学习证据与智能练习"], cta: "查看产品思考", image: "/agora-live.png" },
    ],
    sideTitle: "公益摄影平台", sideBody: "与 15 人团队搭建公益摄影服务，从招募、内容传播到服务交付；累计曝光 6,000+，服务 248+ 人次。", sideTag: "辅助案例 · 运营与服务设计",
    expKicker: "EXPERIENCE", expTitle: "数据、教育与互联网的一线经验",
    experiences: [
      ["Kalowave", "数据分析实习生", "2026.04 — 2026.06", "用 Athena SQL 与 Metabase 分析 GMV、收入、佣金、转化和用户分层，把业务问题转成可追踪指标。"],
      ["新东方", "国际课程教师", "2024.11 — 2025.09", "在雅思阅读、IG 数学与 AP 微积分中理解学习阻力，设计本地化内容与反馈路径；曾帮助一名 IG 学生在 10 次课后从 U 提升至 A。"],
      ["小红书", "商业／电商招聘实习生", "2024.01 — 2024.04", "在高节奏互联网环境中支持 10+ 岗位、100+ 面试，跟踪招聘漏斗并协同业务与候选人。"],
    ],
    aboutKicker: "BEYOND THE SCREEN", aboutTitle: "理性分析，也认真感受世界",
    aboutIntro: "教学训练了我解释复杂问题，统计让我重视证据，产品工作则把观察、判断与行动连接起来。生活里的兴趣，也持续影响我做产品的方式。",
    aboutCards: [
      ["摄影", "观察与构图", "留意容易被忽略的细节，也理解审美不是装饰，而是信息与情绪的组织方式。"],
      ["舞蹈", "节奏与表达", "长期练习让我适应反馈、拆解动作，也更敏感于体验中的节奏与张力。"],
      ["志愿服务", "581 小时", "服务经历让我靠近不同人的真实处境，把共情转化为具体行动。"],
    ],
    contactKicker: "LET’S CONNECT", contactTitle: "一起做点真正有用、也有人愿意用的东西。", email: "chelsea299@163.com", back: "返回首页", live: "打开产品", code: "试玩测试码", copyHint: "点击代码即可复制",
  },
  en: {
    nav: [["Work", "#projects"], ["Experience", "#experience"], ["About", "#about"], ["Contact", "#contact"]],
    heroEyebrow: "Hi, I’m Chelsea · Product Manager Candidate",
    heroTitle: "Turning real problems into\nproducts people want to use.",
    heroIntro: "I focus on user experience, evidence-led validation and practical AI. I find problems in real contexts, build quickly, and turn user feedback into products that can keep evolving.",
    tags: ["User Insight", "Product Design", "AI Prototyping", "Data & Experiments"],
    view: "View my work", resume: "Download resume", contact: "Contact me", resumeLabel: "Resume · Chinese",
    capabilityKicker: "HOW I WORK", capabilityTitle: "Start with the problem. Move with evidence.",
    capabilities: [
      ["01", "Understand Users", "Find the real need", "Read behavior, context and feedback to test whether a need is real—and define where it begins and ends."],
      ["02", "Build Products", "Make ideas tangible", "Scope the MVP, design the key flow, and use AI to build testable products that reveal technical and experience risks."],
      ["03", "Validate Value", "Learn through evidence", "Use interviews, usability tests, funnels and experiments to locate friction and make each iteration intentional."],
    ],
    projectKicker: "SELECTED WORK", projectTitle: "Product judgment, made tangible", projectIntro: "Two zero-to-one products exploring gamified learning and an AI learning agent.",
    projects: [
      { slug: "rescue-ducks", eyebrow: "01 · LIVE PRODUCT", title: "Rescue Ducks", subtitle: "A game that helps IELTS learners recognise synonym relationships instead of memorising words in isolation.", facts: ["Tested with 30–40 students", "Gamified synonym practice", "Live web product"], cta: "Read case study", image: "/rescue-ducks-live.png" },
      { slug: "agora", eyebrow: "02 · CURRENTLY BUILDING", title: "Agora", subtitle: "A Socratic maths agent for home learning—designed to prompt thinking without leaking the answer.", facts: ["Six-level hint system", "Misconception detection", "Learning evidence & practice"], cta: "Explore the product thinking", image: "/agora-live.png" },
    ],
    sideTitle: "Public-interest Photography Platform", sideBody: "Worked with a 15-person team across recruitment, content distribution and service delivery; reached 6,000+ impressions and served 248+ participants.", sideTag: "Supporting case · Operations & service design",
    expKicker: "EXPERIENCE", expTitle: "Grounded in data, education and internet work",
    experiences: [
      ["Kalowave", "Data Analyst Intern", "Apr — Jun 2026", "Used Athena SQL and Metabase to analyse GMV, revenue, commission, conversion and user segments, translating business questions into trackable metrics."],
      ["New Oriental", "International Curriculum Teacher", "Nov 2024 — Sep 2025", "Designed localised content and feedback paths across IELTS Reading, IG Maths and AP Calculus; helped one IG learner move from U to A after ten lessons."],
      ["Xiaohongshu", "Commercial / E-commerce Recruiting Intern", "Jan — Apr 2024", "Supported 10+ roles and 100+ interviews in a fast-moving internet team, tracked the hiring funnel and coordinated across stakeholders."],
    ],
    aboutKicker: "BEYOND THE SCREEN", aboutTitle: "Analytical by training. Attentive by nature.",
    aboutIntro: "Teaching trained me to explain complexity, statistics taught me to respect evidence, and product work connects observation with action. What I do beyond work shapes that practice too.",
    aboutCards: [["Photography", "Observation & composition", "I notice easy-to-miss details and treat aesthetics as the organisation of information and emotion."], ["Dance", "Rhythm & expression", "Long-term practice has made me comfortable with feedback, decomposition and the pacing of an experience."], ["Volunteering", "581 hours", "Service brought me closer to different realities and taught me to turn empathy into concrete action."]],
    contactKicker: "LET’S CONNECT", contactTitle: "Let’s build something useful—and genuinely worth using.", email: "chelsea299@163.com", back: "Back home", live: "Open live product", code: "Test access code", copyHint: "Click the code to copy",
  },
} as const;

export const projectCases = {
  zh: {
    "rescue-ducks": { status: "LIVE PRODUCT · 2026", title: "Rescue Ducks", lead: "把“孤立背词”重新设计成同义关系识别游戏。", summary: "雅思阅读 7 分以下的学生往往认识单词，却在题目中认不出同义替换。Rescue Ducks 用短回合配对、视觉分组与救援叙事，把注意力从单个词迁移到词与词之间的关系。", sections: [["问题与目标用户", "许多学生孤立记忆词义，做阅读题时却无法建立题干与原文之间的同义联系。目标用户是雅思阅读 7 分以下、词汇基础和信心差异较大的学生。"], ["产品假设", "如果把同义词关系放进轻量游戏循环，并用温暖的灯塔与救援叙事提供目标感，学生会更愿意练习关系识别，而不只是机械背词。"], ["MVP 与游戏循环", "第一版只做开始界面、词组与核心游戏：观察浮动词语，匹配同义组，双击查看中文释义；匹配后让鸭子向灯塔前进。主动不做登录、排行榜、复杂地图、音乐和重特效，把开发集中在核心学习循环。"], ["30–40 名学生测试", "试玩暴露了三类阻力：学生不知道双击可看释义；开场引导没有说明目标；基础较弱的学生连续选错后容易沮丧。"], ["从反馈到迭代", "我补充了更清晰的引导，把同一组单词设为相同颜色，为低基础学生增加视觉支架，并加入单词复习界面。颜色不是直接给答案，而是降低无效挫败，让注意力回到语义关系。"], ["下一步验证", "继续观察完成率、首次卡点、求助率和复习回访；再验证阅读／听力／口语／写作主题与热带、北极、火山等场景，是否能提升持续练习，而不是只增加视觉新鲜感。"]], metrics: [["30–40", "名学生试玩"], ["55", "个关卡"], ["376", "个语义词组"]], image: "/rescue-ducks-live.png", live: "https://www.rescueducks.xyz", access: "rd-red-4q9v" },
    "agora": { status: "CURRENTLY BUILDING · 2026", title: "Agora", lead: "让 AI 提示推动思考，而不是替学生完成思考。", summary: "面向家庭数学学习场景的苏格拉底式 Agent。它围绕“何时提示、提示到哪一步、如何识别错误、怎样留下学习证据”设计交互，而不把聊天能力直接等同于教学效果。", sections: [["家庭学习问题", "学生独立学习时常卡在一个局部步骤：没有教师在旁，通用 AI 又容易直接给答案。产品需要在及时帮助与保留思考之间找到边界。"], ["六级提示机制", "提示从确认题意、回忆概念、定位步骤逐级推进；只有在学生继续请求并明确需要时才靠近解法。层级让帮助程度可控制、可复盘。"], ["错误识别", "系统区分概念误解、运算失误、步骤遗漏与表达不清，再选择对应提问方式，避免所有错误都得到同一种泛化回复。"], ["答案泄露控制", "在获得学生明确同意前不直接展示完整答案。重点不是永久隐藏答案，而是先判断学生还有没有能够独立完成的下一步。"], ["智能练习与学习证据", "把对话中的卡点、提示层级与错误类型沉淀成练习依据，帮助后续练习更贴近真实薄弱点，也让学习过程可被回看。"], ["AI 评测框架", "用正确性、提示适切性、答案泄露、错误识别与学习推进五个维度检查输出。当前展示的是已实现机制与评测设计，不把尚未发生的用户效果写成结果。"]], metrics: [["6", "级提示"], ["4", "类错误识别"], ["5", "个评测维度"]], image: "/agora-live.png" },
  },
  en: {
    "rescue-ducks": { status: "LIVE PRODUCT · 2026", title: "Rescue Ducks", lead: "Reframing isolated vocabulary study as a synonym-recognition game.", summary: "IELTS learners below Band 7 may know individual words but miss paraphrases in reading questions. Rescue Ducks uses short matching rounds, visual grouping and a rescue narrative to move attention from definitions to relationships.", sections: [["Problem & audience", "Many learners memorise definitions in isolation, then fail to connect the wording of a question with a paraphrase in the passage. The core audience is IELTS Reading learners below Band 7, with varied vocabulary confidence."], ["Product hypothesis", "If synonym relationships sit inside a lightweight game loop, and a warm lighthouse rescue story supplies purpose, learners may practise relational recognition more willingly than through mechanical memorisation."], ["MVP & game loop", "The first version focused on the start screen, word groups and core loop: scan floating words, match synonym groups, and double-click for Chinese meanings while rescuing ducks toward the lighthouse. Login, leaderboards, rich maps, music and heavy effects were intentionally deferred."], ["Testing with 30–40 learners", "Testing exposed three frictions: learners did not discover the double-click meaning check; the opening guidance did not explain the goal; and less confident learners became discouraged after repeated misses."], ["Feedback into iteration", "I clarified onboarding, gave words from the same group the same colour, and added a review screen. Colour works as a learning scaffold: it reduces unproductive frustration while keeping attention on semantic relationships."], ["Next validation", "Track completion, first friction, help usage and review returns; then test whether skill-specific themes and tropical, arctic or volcanic worlds improve sustained practice—not merely novelty."]], metrics: [["30–40", "student testers"], ["55", "levels"], ["376", "semantic groups"]], image: "/rescue-ducks-live.png", live: "https://www.rescueducks.xyz", access: "rd-red-4q9v" },
    "agora": { status: "CURRENTLY BUILDING · 2026", title: "Agora", lead: "Designing AI hints to advance thinking—not replace it.", summary: "A Socratic maths agent for home learning, structured around when to help, how far a hint should go, how to recognise mistakes and how to preserve learning evidence.", sections: [["The home-learning gap", "Students often get stuck on one local step without a teacher nearby, while general AI can reveal the answer too quickly. The product must balance timely help with ownership of the reasoning."], ["Six-level hint system", "Hints progress from clarifying the problem and recalling a concept to locating the next step. They approach a solution only as the learner continues to request help, making assistance controllable and reviewable."], ["Misconception detection", "The system distinguishes conceptual misunderstandings, calculation slips, omitted steps and unclear expression, then adapts the prompt instead of replying to every error with generic advice."], ["Answer leakage control", "A complete answer is not shown before explicit learner consent. The goal is not to hide answers forever, but first test whether the learner can still own the next step."], ["Practice & learning evidence", "Conversation signals—friction points, hint level and mistake type—become inputs for more relevant practice and a reviewable learning trail."], ["AI evaluation framework", "Outputs are reviewed across correctness, hint appropriateness, answer leakage, misconception recognition and learning progression. This case presents implemented mechanisms and evaluation design, not unverified user outcomes."]], metrics: [["6", "hint levels"], ["4", "error categories"], ["5", "evaluation dimensions"]], image: "/agora-live.png" },
  },
} as const;
