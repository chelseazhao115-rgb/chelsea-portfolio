export type Locale = "zh" | "en";

export const copy = {
  zh: {
    nav: [["作品", "#projects"], ["经历", "#experience"], ["教育", "#education"], ["关于", "#about"], ["联系", "#contact"]],
    heroEyebrow: "你好，我是 Chelsea · AI 教育产品经理候选人",
    heroTitle: "把真实的问题，\n做成愿意被使用的产品。",
    heroIntro: "我拥有持续的一线教学、数据分析与互联网协作经验。从真实学习场景中发现问题，通过 AI 快速构建、用户测试与数据验证，把想法变成可以体验和持续迭代的产品。",
    tags: ["教育用户洞察", "学习体验设计", "AI 快速构建", "数据与评测"],
    view: "查看作品", resume: "下载简历", contact: "联系我", resumeLabel: "AI 教育产品简历 · 中文",
    capabilityKicker: "HOW I WORK", capabilityTitle: "从学习问题出发，用证据靠近价值",
    capabilities: [
      ["01", "Understand Learners", "识别真实学习阻力", "结合课堂行为、错题、访谈与反馈，区分表层诉求和真实学习障碍，并明确产品边界。"],
      ["02", "Build with AI", "把假设做成产品", "定义 MVP 与关键学习循环，借助 AI 编程快速构建可体验产品，验证技术与交互可行性。"],
      ["03", "Validate Learning", "验证体验与学习价值", "通过用户测试、错误类型、行为数据和 AI 评测框架持续迭代，不把功能上线等同于学习有效。"],
    ],
    projectKicker: "SELECTED WORK", projectTitle: "从课堂洞察到可运行产品", projectIntro: "核心案例完整呈现问题、假设、MVP、测试与迭代；辅助项目补充产品方法和独立交付能力。",
    projects: [
      { slug: "rescue-ducks", eyebrow: "01 · LIVE PRODUCT", title: "Rescue Ducks", subtitle: "把雅思阅读中的同义替换训练，从孤立背词重新设计为语义关系游戏。", facts: ["30–40 名学生测试", "55 个学习关卡", "376 组语义词库"], cta: "查看完整案例", image: "/rescue-ducks-live.png" },
      { slug: "agora", eyebrow: "02 · AI LEARNING AGENT", title: "Agora", subtitle: "用六级渐进提示推动学生独立思考，并控制通用 AI 直接泄露答案的风险。", facts: ["六级提示体系", "四类错误识别", "三维效果评估"], cta: "查看产品思考", image: "/agora-live.png" },
    ],
    supportingKicker: "SUPPORTING PROJECTS", supportingTitle: "更多产品实践",
    supportingProjects: [
      ["腾讯产品经理创造营", "产品方法训练 · 2024.12–2025.01", "系统学习用户调研、需求拆解、产品架构、功能规划和生命周期管理，建立以用户需求为核心的产品工作框架。", ["需求挖掘", "产品迭代", "项目推进"]],
      ["个人网站／作品集", "AI 独立开发 · 2026.02–2026.03", "从招聘方快速识别岗位证据的需求出发，重组教育、数据、用户测试与0→1经历；独立完成中英双语信息架构、案例叙事、前端开发、响应式适配与部署。", ["需求定义", "双语信息架构", "上线部署"]],
    ],
    expKicker: "EXPERIENCE", expTitle: "教育、数据与互联网的一线经验",
    experiences: [
      ["优途雅思", "雅思教师 · 线上远程", "2025.11 — 至今", "持续访谈并服务不同基础的雅思学习者，分层拆解备考难点与学习行为，沉淀需求清单并落地试听方案；持续优化试听交付逻辑，试听转化成功率 90%+。"],
      ["Kalowave", "数据分析实习生 · 吉隆坡", "2026.03 — 2026.05", "使用 SQL 与 BI 工具搭建业务 KPI 看板，复盘成交总额和营收趋势；拆解用户行为路径与转化漏斗，并参与佣金核算、用户分层与电商运营效果追踪。"],
      ["新东方", "雅思／国际课程教师 · 兰州", "2024.11 — 2025.09", "教授雅思阅读、IG 数学和 AP 微积分，通过课堂行为、作业与错题识别学习卡点；设计诊断、分层提示、针对性练习与反馈复习闭环，曾帮助1名IG学生在10次课后由U提升至A。"],
      ["小红书", "商业／电商 HR 招聘实习生 · 上海", "2024.01 — 2024.04", "支持算法、产品与商业化团队招聘，完成100+面试组织；结合招聘漏斗和候选人数据识别关键招聘考量，积累互联网节奏与跨角色协作经验。"],
    ],
    eduKicker: "EDUCATION", eduTitle: "统计训练，让产品判断更有证据",
    education: [
      ["马来亚大学", "应用统计学 · 硕士", "2025.09 — 2027.06", "QS 56 · GPA 3.82/4.00", "R、Python、高级计量、时间序列分析、数据分析、统计学原理"],
      ["兰州大学", "管理学基地班 · 学士", "2020.09 — 2024.07", "985／双一流 · GPA 3.82/5.00", "博弈论、大数据与人工智能、数据挖掘与机器学习、线性代数、高等数学"],
    ],
    proofKicker: "SKILLS & RECOGNITION", proofTitle: "工具是手段，证据与交付是结果",
    skillGroups: [["数据与分析", "SQL · R · SPSS · Stata · Python · BI 可视化"], ["语言", "普通话二级甲等 · IELTS 7.0（阅读 8.5）· CET-6"], ["荣誉", "互联网+国铜 · 美赛 MCM H奖 · 6项国创／数学建模奖项 · 二等奖学金 · 优秀学生干部"]],
    aboutKicker: "BEYOND THE SCREEN", aboutTitle: "理性分析，也认真感受世界",
    aboutIntro: "教学训练我解释复杂问题，统计让我重视证据，产品则把观察、判断与行动连接起来。摄影、舞蹈和581小时志愿服务，也持续塑造我的审美、表达与共情。",
    aboutCards: [["摄影", "观察与构图", "留意容易被忽略的细节，也理解审美是信息与情绪的组织方式。"], ["舞蹈", "节奏与表达", "长期练习让我适应反馈、拆解动作，也更敏感于体验节奏。"], ["志愿服务", "581 小时", "靠近不同人的真实处境，并把共情转化为具体行动。"]],
    contactKicker: "LET’S CONNECT", contactTitle: "一起做点真正有用、也有人愿意用的东西。", email: "chelsea299@163.com", back: "返回首页", live: "打开产品", code: "试玩测试码", copyHint: "点击代码即可复制",
  },
  en: {
    nav: [["Work", "#projects"], ["Experience", "#experience"], ["Education", "#education"], ["About", "#about"], ["Contact", "#contact"]],
    heroEyebrow: "Hi, I’m Chelsea · AI Education Product Candidate",
    heroTitle: "Turning real problems into\nproducts people want to use.",
    heroIntro: "I bring frontline teaching, data analysis and internet-team experience. I find problems in real learning contexts, build quickly with AI, and use testing and evidence to turn ideas into products that can keep evolving.",
    tags: ["Learner Insight", "Learning Experience", "AI Prototyping", "Data & Evaluation"],
    view: "View my work", resume: "Download resume", contact: "Contact me", resumeLabel: "AI Education Resume · Chinese",
    capabilityKicker: "HOW I WORK", capabilityTitle: "Start with learning friction. Move with evidence.",
    capabilities: [["01", "Understand Learners", "Find the real friction", "Combine classroom behaviour, mistakes, interviews and feedback to separate surface requests from underlying learning barriers."], ["02", "Build with AI", "Make hypotheses tangible", "Scope the MVP and learning loop, then use AI coding to build testable products and expose technical and interaction risks."], ["03", "Validate Learning", "Test experience and value", "Use user tests, error patterns, behavioural data and AI evaluation—not feature delivery alone—to guide iteration."]],
    projectKicker: "SELECTED WORK", projectTitle: "From classroom insight to working product", projectIntro: "Core cases show the full chain from problem and hypothesis to MVP, testing and iteration; supporting work adds product-method and delivery evidence.",
    projects: [{ slug: "rescue-ducks", eyebrow: "01 · LIVE PRODUCT", title: "Rescue Ducks", subtitle: "Reframing IELTS paraphrase practice from isolated memorisation into a semantic-relationship game.", facts: ["30–40 student testers", "55 learning levels", "376 semantic groups"], cta: "Read case study", image: "/rescue-ducks-live.png" }, { slug: "agora", eyebrow: "02 · AI LEARNING AGENT", title: "Agora", subtitle: "A six-level Socratic hint system that advances independent thinking while controlling answer leakage.", facts: ["Six hint levels", "Four error categories", "Three evaluation dimensions"], cta: "Explore product thinking", image: "/agora-live.png" }],
    supportingKicker: "SUPPORTING PROJECTS", supportingTitle: "More product practice",
    supportingProjects: [["Tencent Product Manager Bootcamp", "Product methods · Dec 2024–Jan 2025", "Studied user research, requirement decomposition, product architecture, feature planning and lifecycle management, building a user-centred product workflow.", ["Discovery", "Iteration", "Delivery"]], ["Personal Portfolio", "AI-independent build · Feb–Mar 2026", "Reframed education, data, user testing and zero-to-one evidence around recruiter needs; independently delivered bilingual information architecture, case narratives, responsive development and deployment.", ["Product definition", "Bilingual IA", "Deployment"]]],
    expKicker: "EXPERIENCE", expTitle: "Grounded in education, data and internet work",
    experiences: [["UTU IELTS", "IELTS Teacher · Remote", "Nov 2025 — Present", "Interview and teach IELTS learners across ability levels, translating learning barriers into trial-lesson solutions and iterating the delivery flow; achieved 90%+ trial conversion."], ["Kalowave", "Data Analyst Intern · Kuala Lumpur", "Mar — May 2026", "Built KPI views with SQL and BI tools, reviewed GMV and revenue trends, analysed user journeys and conversion funnels, and supported commission, segmentation and e-commerce performance tracking."], ["New Oriental", "IELTS / International Curriculum Teacher · Lanzhou", "Nov 2024 — Sep 2025", "Diagnosed learning friction through classroom behaviour, homework and mistakes; designed diagnostic, scaffolded-hint, practice and review loops, helping one IG learner move from U to A after ten lessons."], ["Xiaohongshu", "Commercial / E-commerce Recruiting Intern · Shanghai", "Jan — Apr 2024", "Supported algorithm, product and commercial hiring and coordinated 100+ interviews; used funnel and candidate data to surface key hiring signals in a fast-moving internet team."]],
    eduKicker: "EDUCATION", eduTitle: "Statistical training for evidence-led product judgment",
    education: [["University of Malaya", "MSc Applied Statistics", "Sep 2025 — Jun 2027", "QS 56 · GPA 3.82/4.00", "R, Python, advanced econometrics, time-series analysis, data analysis and statistical principles"], ["Lanzhou University", "BSc Management", "Sep 2020 — Jul 2024", "Project 985 / Double First Class · GPA 3.82/5.00", "Game theory, big data and AI, data mining and machine learning, linear algebra and advanced mathematics"]],
    proofKicker: "SKILLS & RECOGNITION", proofTitle: "Tools support the work; evidence and delivery define it",
    skillGroups: [["Data & analytics", "SQL · R · SPSS · Stata · Python · BI visualisation"], ["Languages", "Mandarin · IELTS 7.0 (Reading 8.5) · CET-6"], ["Recognition", "Internet+ National Bronze · MCM Honorable Mention · 6 innovation/modelling awards · Scholarship · Outstanding Student Leader"]],
    aboutKicker: "BEYOND THE SCREEN", aboutTitle: "Analytical by training. Attentive by nature.",
    aboutIntro: "Teaching trained me to explain complexity, statistics taught me to respect evidence, and product work connects observation with action. Photography, dance and 581 hours of volunteering shape my aesthetics, expression and empathy.",
    aboutCards: [["Photography", "Observation & composition", "I notice easy-to-miss details and treat aesthetics as the organisation of information and emotion."], ["Dance", "Rhythm & expression", "Long-term practice made me comfortable with feedback, decomposition and the pacing of an experience."], ["Volunteering", "581 hours", "Service brought me closer to different realities and taught me to turn empathy into concrete action."]],
    contactKicker: "LET’S CONNECT", contactTitle: "Let’s build something useful—and genuinely worth using.", email: "chelsea299@163.com", back: "Back home", live: "Open live product", code: "Test access code", copyHint: "Click the code to copy",
  },
} as const;

export const projectCases = {
  zh: {
    "rescue-ducks": { status: "LIVE PRODUCT · 2026", title: "Rescue Ducks", lead: "把“孤立背词”重新设计成同义关系识别游戏。", summary: "雅思阅读7分以下的学生往往认识单词，却在题目中认不出同义替换。Rescue Ducks 用短回合配对、视觉分组与救援叙事，把注意力从单个词迁移到词与词之间的关系。", sections: [["问题与目标用户", "许多学生孤立记忆词义，做阅读题时却无法建立题干与原文之间的同义联系。目标用户是雅思阅读7分以下、词汇基础和信心差异较大的学生。"], ["产品假设", "如果把同义词关系放进轻量游戏循环，并用温暖的灯塔与救援叙事提供目标感，学生会更愿意练习关系识别。"], ["MVP 与边界", "第一版聚焦开始界面、词组与核心游戏循环；主动不做登录、排行榜、复杂地图、音乐和重特效，把开发集中在核心学习假设。"], ["30–40名学生测试", "测试暴露三类阻力：双击释义能力不可发现、开场引导没有说明目标、低基础学生连续选错后容易沮丧。"], ["反馈与迭代", "补充清晰引导，将同一组单词设为相同颜色作为视觉支架，并加入复习界面，让注意力回到语义关系。"], ["下一步验证", "继续观察完成率、首次卡点、求助率和复习回访，验证不同学科技能与场景是否改善持续练习，而非只增加新鲜感。"]], metrics: [["30–40", "名学生试玩"], ["55", "个学习关卡"], ["376", "组语义词库"]], image: "/rescue-ducks-live.png", live: "https://www.rescueducks.xyz", access: "rd-red-4q9v" },
    "agora": { status: "AI LEARNING AGENT · 2026", title: "Agora", lead: "让 AI 提示推动思考，而不是替学生完成思考。", summary: "面向家庭数学学习场景的苏格拉底式 Agent，围绕何时提示、提示到哪一步、如何识别错误以及怎样评估真实学习提升设计交互。", sections: [["家庭学习问题", "学生独立学习时常卡在局部步骤；通用AI又容易直接给答案，产品需要在及时帮助与保留思考之间建立边界。"], ["六级提示体系", "提示从概念理解、计算失误、解题步骤到列式书写逐级推进，让帮助程度可控制、可复盘。"], ["四类错误识别", "区分概念理解、计算失误、解题步骤和列式书写四类做题错误，再匹配相应引导。"], ["答案泄露控制", "摒弃直接给出标准答案，先判断学生能否独立完成下一步，再循序推进。"], ["多维效果评估", "围绕答案准确率、AI幻觉管控和实际学习提升效果三个维度校验模型能力。"], ["状态说明", "当前案例展示已完成的核心机制和评测设计，不把尚未验证的用户效果包装成结果。"]], metrics: [["6", "级提示"], ["4", "类错误"], ["3", "个评估维度"]], image: "/agora-live.png" },
  },
  en: {
    "rescue-ducks": { status: "LIVE PRODUCT · 2026", title: "Rescue Ducks", lead: "Reframing isolated vocabulary study as a synonym-recognition game.", summary: "IELTS learners below Band 7 may know individual words but miss paraphrases in reading questions. Rescue Ducks shifts attention from definitions to semantic relationships.", sections: [["Problem & audience", "Learners memorise definitions in isolation but fail to connect question wording with passage paraphrases."], ["Product hypothesis", "A lightweight matching loop and warm rescue narrative can make relational recognition more motivating."], ["MVP & scope", "The first release focused on the start screen, word groups and core loop; login, leaderboards, rich maps, music and heavy effects were deferred."], ["30–40 learner tests", "Testing exposed unclear onboarding, poor discoverability of meanings and discouragement among less confident learners."], ["Feedback into iteration", "I clarified onboarding, gave synonym groups a shared colour scaffold and added a review screen."], ["Next validation", "Track completion, first friction, help usage and review returns, then test whether new themes support sustained practice rather than novelty alone."]], metrics: [["30–40", "student testers"], ["55", "learning levels"], ["376", "semantic groups"]], image: "/rescue-ducks-live.png", live: "https://www.rescueducks.xyz", access: "rd-red-4q9v" },
    "agora": { status: "AI LEARNING AGENT · 2026", title: "Agora", lead: "Designing AI hints to advance thinking—not replace it.", summary: "A Socratic maths agent structured around when to help, how far a hint should go, how to recognise errors and how to evaluate genuine learning progress.", sections: [["The home-learning gap", "Students often get stuck without a teacher nearby, while general AI can reveal an answer too quickly."], ["Six-level hint system", "Hints move progressively across concept understanding, calculation, solution steps and equation writing."], ["Four error categories", "The system distinguishes conceptual, calculation, reasoning-step and written-equation errors."], ["Answer leakage control", "It avoids defaulting to a complete solution and first tests whether the learner can own the next step."], ["Multi-dimensional evaluation", "Model outputs are evaluated through answer accuracy, hallucination control and actual learning improvement."], ["Status", "The case presents implemented mechanisms and evaluation design, not unverified learner outcomes."]], metrics: [["6", "hint levels"], ["4", "error categories"], ["3", "evaluation dimensions"]], image: "/agora-live.png" },
  },
} as const;
