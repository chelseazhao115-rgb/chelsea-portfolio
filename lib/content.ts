export type Locale = "zh" | "en";
export type ProjectSlug = "rescue-ducks" | "agora" | "tencent-bootcamp" | "portfolio";

export type Capability = {
  mark: string;
  title: string;
  subtitle: string;
  body: string;
  evidence: string;
};

export type ProjectSummary = {
  slug: ProjectSlug;
  kind: string;
  title: string;
  subtitle: string;
  image: string;
  preview: [string, string, string];
  facts: string[];
  cta: string;
};

export type Experience = {
  id: "xiaohongshu" | "new-oriental" | "utu" | "kalowave";
  brand: string;
  company: string;
  role: string;
  date: string;
  location: string;
  capability: string;
  summary: string;
  actions: string[];
  evidence: string[];
  tags: string[];
  images: { src: string; alt: string }[];
  placeholder: string;
};

export type Education = {
  id: "um" | "lzu";
  school: string;
  degree: string;
  date: string;
  badge: string;
  courses: string;
  image?: string;
  secondaryImage?: string;
  imageAlt: string;
};

export type Award = {
  title: string;
  detail: string;
  date: string;
  pending: boolean;
};

export type AboutCard = {
  title: string;
  subtitle: string;
  body: string;
  image?: string;
  imageAlt: string;
  placeholder: string;
};

type PageCopy = {
  nav: [string, string][];
  heroEyebrow: string;
  heroTitle: string;
  heroIntro: string;
  tags: string[];
  view: string;
  resume: string;
  contact: string;
  resumeLabel: string;
  capabilityTitle: string;
  capabilityIntro: string;
  capabilities: Capability[];
  projectTitle: string;
  projectIntro: string;
  projects: ProjectSummary[];
  experienceTitle: string;
  experienceIntro: string;
  experienceHint: string;
  experiences: Experience[];
  educationTitle: string;
  educationIntro: string;
  educationHint: string;
  education: Education[];
  awardsTitle: string;
  awardsIntro: string;
  awards: Award[];
  proofTitle: string;
  skillGroups: { label: string; value: string }[];
  aboutTitle: string;
  aboutIntro: string;
  aboutCards: AboutCard[];
  contactTitle: string;
  email: string;
  back: string;
  live: string;
  code: string;
  copyHint: string;
  close: string;
  experiencePanelTitle: string;
  selectedEvidence: string;
  actionsLabel: string;
  galleryLabel: string;
  nextCase: string;
};

export const copy: Record<Locale, PageCopy> = {
  zh: {
    nav: [["作品", "#projects"], ["经历", "#experience"], ["教育与荣誉", "#education"], ["关于", "#about"], ["联系", "#contact"]],
    heroEyebrow: "你好，我是 Chelsea · 产品经理候选人",
    heroTitle: "把真实的问题，\n做成愿意被使用的产品。",
    heroIntro: "我拥有持续的一线教学、数据分析与互联网协作经验。从真实场景中发现问题，通过 AI 快速构建、用户测试与数据验证，把想法变成可以体验和持续迭代的产品。",
    tags: ["用户洞察", "产品设计", "AI 快速构建", "数据与实验"],
    view: "探索我的作品",
    resume: "下载简历",
    contact: "联系我",
    resumeLabel: "产品经理简历 · 中文",
    capabilityTitle: "我如何把一个模糊问题推进到可验证的产品",
    capabilityIntro: "点开一张能力卡，查看它如何落到真实经历与产品证据中。",
    capabilities: [
      { mark: "U", title: "用户洞察", subtitle: "Understand users", body: "从课堂行为、错题、访谈与反馈中区分表层诉求和真实阻力，并明确需求边界。", evidence: "一线教学访谈、30–40 名学生测试、招聘漏斗分析" },
      { mark: "P", title: "产品设计", subtitle: "Shape the product", body: "把问题拆成目标用户、核心循环、MVP 与暂不实现的边界，让功能围绕一个明确假设工作。", evidence: "Rescue Ducks 学习循环、Agora 六级提示体系" },
      { mark: "AI", title: "AI 快速构建", subtitle: "Build with AI", body: "用 AI 编程工具把想法做成可运行产品，通过真实交互暴露技术与体验问题。", evidence: "两款可体验产品与中英双语作品集" },
      { mark: "D", title: "数据与实验", subtitle: "Validate value", body: "用用户反馈、行为路径、转化漏斗与评测框架判断下一步，而不是把上线等同于成功。", evidence: "KPI 看板、90%+ 试听转化、AI 三维评测" },
    ],
    projectTitle: "不是作品陈列，而是四次把想法做实的过程",
    projectIntro: "先看问题与证据，再进入完整案例。前两个是核心产品，后两个记录产品方法与独立交付。",
    projects: [
      { slug: "rescue-ducks", kind: "已上线 · 游戏化学习", title: "Rescue Ducks", subtitle: "把雅思阅读中的同义替换训练，从孤立背词重新设计为语义关系游戏。", image: "/rescue-ducks-live.png", preview: ["孤立背词无法迁移到做题", "构建语义配对与救援循环", "30–40 名学生多轮测试"], facts: ["55 个学习关卡", "376 组语义词库"], cta: "进入完整案例" },
      { slug: "agora", kind: "AI 学习 Agent", title: "Agora", subtitle: "用六级渐进提示推动学生独立思考，同时控制通用 AI 直接泄露答案。", image: "/agora-live.png", preview: ["家庭学习缺少及时引导", "设计六级苏格拉底式提示", "建立三维 AI 评测框架"], facts: ["6 级提示", "4 类错误"], cta: "查看产品机制" },
      { slug: "tencent-bootcamp", kind: "产品方法训练", title: "腾讯产品经理创造营", subtitle: "系统完成从用户调研、需求拆解到产品架构与生命周期管理的产品训练。", image: "/tencent-pm.jpg", preview: ["补全产品方法体系", "完成入门与进阶任务", "61 / 61 项任务完成"], facts: ["入门 29/29", "进阶 32/32"], cta: "查看学习档案" },
      { slug: "portfolio", kind: "AI 独立开发", title: "个人网站／作品集", subtitle: "从招聘方快速识别岗位证据的需求出发，独立完成双语信息架构、设计、开发与部署。", image: "/hero-chelsea.png", preview: ["简历难以承载完整过程", "重组经历与案例证据", "完成双语响应式交付"], facts: ["4 个项目档案", "中英双语"], cta: "查看构建过程" },
    ],
    experienceTitle: "四段经历，形成一条产品能力轨道",
    experienceIntro: "公司与岗位先给你全貌；靠近一个节点，看看这段经历留下了什么能力。",
    experienceHint: "悬停预览 · 点击展开",
    experiences: [
      { id: "xiaohongshu", brand: "小红书", company: "小红书", role: "商业／电商 HR 招聘实习生", date: "2024.01 — 2024.04", location: "上海，中国", capability: "互联网节奏与跨角色协作", summary: "支持算法、产品与商业化团队招聘，在快节奏互联网团队中理解不同角色的能力需求与协作方式。", actions: ["承接人才寻访、简历初筛、面试排期及 offer 跟进", "组织 100+ 场面试并维护招聘流程", "结合招聘漏斗与候选人背景数据识别关键考量"], evidence: ["100+ 场面试组织", "覆盖算法、产品与商业化岗位"], tags: ["漏斗分析", "跨团队协作", "互联网业务"], images: [], placeholder: "工作照片／可公开材料待补充" },
      { id: "new-oriental", brand: "新东方", company: "新东方", role: "雅思／国际课程教师", date: "2024.11 — 2025.09", location: "兰州，中国", capability: "教育用户洞察与学习闭环", summary: "教授雅思阅读、IG 数学及 AP 微积分，通过真实课堂行为、作业与错题持续识别学习卡点。", actions: ["设计“诊断—分层提示—针对性练习—反馈复习”闭环", "开发并本地化 IG 数学、词汇语法等课程内容", "依据错误类型与阶段表现持续调整教学方案"], evidence: ["帮助 1 名 IG 学生在 10 次课后由 U 提升至 A", "覆盖语言与数理课程"], tags: ["用户洞察", "内容产品", "学习效果"], images: [{ src: "/xdf-1.jpg", alt: "Chelsea 在新东方的教师工牌" }, { src: "/xdf-2.jpg", alt: "Chelsea 在课堂中讲解" }, { src: "/xdf-3.jpg", alt: "Chelsea 参与教学活动" }], placeholder: "" },
      { id: "utu", brand: "UTU", company: "优途雅思", role: "雅思教师", date: "2025.11 — 至今", location: "线上远程", capability: "需求访谈与转化验证", summary: "持续对接不同基础的雅思备考用户，把学习难点与行为痛点转化为试听方案并验证交付逻辑。", actions: ["访谈并分层拆解不同水平学员的备考难点", "沉淀用户需求清单并落地试听教学方案", "根据反馈持续优化试听交付逻辑"], evidence: ["试听转化成功率 90%+", "持续一线服务雅思学习者"], tags: ["用户访谈", "方案验证", "转化优化"], images: [], placeholder: "线上教学照片／课件待补充" },
      { id: "kalowave", brand: "KALO", company: "Kalowave", role: "数据分析实习生", date: "2026.03 — 2026.05", location: "吉隆坡，马来西亚", capability: "数据判断与商业指标", summary: "用 SQL 与 BI 工具连接业务指标、用户行为和运营决策，理解电商平台从成交到营收的关键链路。", actions: ["搭建业务 KPI 看板并复盘成交总额、营收趋势", "拆解用户行为路径与转化漏斗", "协助佣金核算、用户分层与运营效果追踪"], evidence: ["覆盖电商全链路数据", "输出业务决策支持结论"], tags: ["SQL", "BI", "转化漏斗"], images: [], placeholder: "工作照片／脱敏看板待补充" },
    ],
    educationTitle: "两种训练方式，让判断既理解人也尊重数据",
    educationIntro: "点击明信片翻面，查看课程与能力基础。",
    educationHint: "点击翻面",
    education: [
      { id: "um", school: "马来亚大学", degree: "应用统计学 · 硕士", date: "2025.09 — 2027.06", badge: "QS 56 · GPA 3.82/4.00", courses: "R、Python、高级计量、时间序列分析、数据分析、统计学原理", imageAlt: "马来亚大学照片待补充" },
      { id: "lzu", school: "兰州大学", degree: "管理学基地班 · 学士", date: "2020.09 — 2024.07", badge: "985／双一流 · GPA 3.82/5.00", courses: "博弈论、大数据与人工智能、数据挖掘与机器学习、线性代数、高等数学", image: "/lzu.jpg", secondaryImage: "/lzu-2.jpg", imageAlt: "Chelsea 在兰州大学校园" },
    ],
    awardsTitle: "荣誉不是终点，而是持续投入留下的坐标",
    awardsIntro: "当前先保留已确认的荣誉类别；具体获奖年份与其余四项名称将在公开前补齐。",
    awards: [
      { title: "互联网+ 全国铜奖", detail: "国创／数学建模相关奖项之一", date: "年份待补充", pending: true },
      { title: "美国大学生数学建模竞赛 H 奖", detail: "MCM Honorable Mention", date: "年份待补充", pending: true },
      { title: "其余 4 项国创／数学建模奖项", detail: "具体奖项名称待补充", date: "资料待补充", pending: true },
      { title: "二等学业奖学金", detail: "兰州大学学习阶段", date: "年份待补充", pending: true },
      { title: "优秀学生干部", detail: "组织协作与公共服务经历", date: "年份待补充", pending: true },
    ],
    proofTitle: "随身携带的工具箱",
    skillGroups: [
      { label: "数据与分析", value: "SQL · R · SPSS · Stata · Python · BI 可视化" },
      { label: "语言", value: "普通话二级甲等 · IELTS 7.0（阅读 8.5）· CET-6" },
      { label: "产品实践", value: "需求挖掘 · MVP · 用户测试 · AI 评测 · 响应式交付" },
    ],
    aboutTitle: "理性分析，也认真感受世界",
    aboutIntro: "教学训练我解释复杂问题，统计让我重视证据，产品则把观察、判断与行动连接起来。摄影、舞蹈和 581 小时志愿服务，也持续塑造我的审美、表达与共情。",
    aboutCards: [
      { title: "摄影", subtitle: "观察与构图", body: "留意容易被忽略的细节，也理解审美是信息与情绪的组织方式。", image: "/life-1.jpg", imageAlt: "Chelsea 在春日花树下", placeholder: "" },
      { title: "舞蹈", subtitle: "节奏与表达", body: "长期练习让我适应反馈、拆解动作，也更敏感于体验节奏。", imageAlt: "舞蹈照片待补充", placeholder: "舞蹈照片待补充" },
      { title: "志愿服务", subtitle: "581 小时", body: "靠近不同人的真实处境，并把共情转化为具体行动。", imageAlt: "志愿服务照片待补充", placeholder: "志愿服务照片待补充" },
    ],
    contactTitle: "如果你也在寻找真实问题背后的产品机会，我们聊聊。",
    email: "chelsea299@163.com",
    back: "返回首页",
    live: "打开产品",
    code: "试玩测试码",
    copyHint: "点击代码即可复制",
    close: "关闭经历详情",
    experiencePanelTitle: "经历详情",
    selectedEvidence: "结果与证据",
    actionsLabel: "我做了什么",
    galleryLabel: "现场记录",
    nextCase: "继续探索",
  },
  en: {
    nav: [["Work", "#projects"], ["Experience", "#experience"], ["Education & awards", "#education"], ["About", "#about"], ["Contact", "#contact"]],
    heroEyebrow: "Hi, I’m Chelsea · Product manager candidate",
    heroTitle: "Turning real problems into\nproducts people want to use.",
    heroIntro: "I bring frontline teaching, data analysis and internet-team experience. I find problems in real contexts, build quickly with AI, and use testing and evidence to turn ideas into products that can keep evolving.",
    tags: ["User insight", "Product design", "AI prototyping", "Data & experiments"],
    view: "Explore my work",
    resume: "Download resume",
    contact: "Contact me",
    resumeLabel: "Product manager resume · Chinese",
    capabilityTitle: "How I move a fuzzy problem toward a testable product",
    capabilityIntro: "Open a capability card to see the experiences and product evidence behind it.",
    capabilities: [
      { mark: "U", title: "User insight", subtitle: "Understand users", body: "Separate surface requests from real friction through behaviour, mistakes, interviews and feedback, then define the boundary.", evidence: "Frontline teaching interviews, 30–40 learner tests, hiring-funnel analysis" },
      { mark: "P", title: "Product design", subtitle: "Shape the product", body: "Turn a problem into an audience, core loop, MVP and explicit non-goals so each feature serves one hypothesis.", evidence: "Rescue Ducks learning loop and Agora’s six-level hint system" },
      { mark: "AI", title: "AI prototyping", subtitle: "Build with AI", body: "Use AI coding tools to make ideas runnable and expose technical and interaction risks through real use.", evidence: "Two testable products and a bilingual portfolio" },
      { mark: "D", title: "Data & experiments", subtitle: "Validate value", body: "Use feedback, journeys, funnels and evaluation frameworks to decide what comes next—not feature delivery alone.", evidence: "KPI views, 90%+ trial conversion and three-part AI evaluation" },
    ],
    projectTitle: "Four attempts to turn ideas into something real",
    projectIntro: "See the problem and evidence first, then enter the full case. The first two are core products; the others document product method and independent delivery.",
    projects: [
      { slug: "rescue-ducks", kind: "Live · Gamified learning", title: "Rescue Ducks", subtitle: "Reframing IELTS paraphrase practice from isolated memorisation into a semantic-relationship game.", image: "/rescue-ducks-live.png", preview: ["Isolated words fail to transfer", "Built a semantic rescue loop", "Tested with 30–40 learners"], facts: ["55 learning levels", "376 semantic groups"], cta: "Enter the full case" },
      { slug: "agora", kind: "AI learning agent", title: "Agora", subtitle: "A six-level Socratic hint system that advances independent thinking while controlling answer leakage.", image: "/agora-live.png", preview: ["Home learning lacks timely guidance", "Designed six progressive hint levels", "Defined a three-part evaluation"], facts: ["6 hint levels", "4 error types"], cta: "Explore the mechanism" },
      { slug: "tencent-bootcamp", kind: "Product methods", title: "Tencent PM Bootcamp", subtitle: "Structured practice across user research, requirement decomposition, product architecture and lifecycle management.", image: "/tencent-pm.jpg", preview: ["Filled gaps in product method", "Completed foundation and advanced tracks", "Finished 61 / 61 tasks"], facts: ["Foundation 29/29", "Advanced 32/32"], cta: "Open learning record" },
      { slug: "portfolio", kind: "Independent AI build", title: "Personal portfolio", subtitle: "A bilingual product narrative independently shaped, designed, built responsively and deployed around recruiter needs.", image: "/hero-chelsea.png", preview: ["A resume cannot carry the process", "Reframed experience as evidence", "Delivered a bilingual responsive site"], facts: ["4 project profiles", "2 languages"], cta: "See the build process" },
    ],
    experienceTitle: "Four roles, one orbit of product capability",
    experienceIntro: "Company and role give the overview. Move closer to a node to see what that experience shaped.",
    experienceHint: "Hover to preview · click to open",
    experiences: [
      { id: "xiaohongshu", brand: "RED", company: "Xiaohongshu", role: "Commercial / E-commerce Recruiting Intern", date: "Jan — Apr 2024", location: "Shanghai, China", capability: "Internet pace & cross-functional context", summary: "Supported algorithm, product and commercial hiring while learning how different roles work together in a fast-moving internet team.", actions: ["Handled sourcing, screening, scheduling and offer follow-up", "Coordinated 100+ interviews", "Used funnel and candidate data to surface hiring signals"], evidence: ["100+ interviews coordinated", "Algorithm, product and commercial roles"], tags: ["Funnel analysis", "Cross-team work", "Internet business"], images: [], placeholder: "Work photo or public artifact to add" },
      { id: "new-oriental", brand: "XDF", company: "New Oriental", role: "IELTS / International Curriculum Teacher", date: "Nov 2024 — Sep 2025", location: "Lanzhou, China", capability: "Learner insight & learning loops", summary: "Taught IELTS Reading, IG Maths and AP Calculus, using classroom behaviour, homework and mistakes to identify learning friction.", actions: ["Designed a diagnose–scaffold–practice–review loop", "Developed and localised IG Maths and language content", "Iterated teaching from error patterns and stage performance"], evidence: ["Helped one IG learner move from U to A after ten lessons", "Worked across language and maths courses"], tags: ["User insight", "Content product", "Learning outcomes"], images: [{ src: "/xdf-1.jpg", alt: "Chelsea’s New Oriental teacher badge" }, { src: "/xdf-2.jpg", alt: "Chelsea explaining in class" }, { src: "/xdf-3.jpg", alt: "Chelsea at a teaching activity" }], placeholder: "" },
      { id: "utu", brand: "UTU", company: "UTU IELTS", role: "IELTS Teacher", date: "Nov 2025 — Present", location: "Remote", capability: "User interviews & conversion validation", summary: "Work directly with IELTS learners across ability levels, turning learning friction into trial-lesson solutions and testing the delivery logic.", actions: ["Interview learners and segment their preparation friction", "Translate needs into trial-lesson plans", "Iterate delivery from feedback"], evidence: ["90%+ trial conversion", "Ongoing frontline contact with IELTS learners"], tags: ["User interviews", "Solution validation", "Conversion"], images: [], placeholder: "Online teaching photo or course material to add" },
      { id: "kalowave", brand: "KALO", company: "Kalowave", role: "Data Analyst Intern", date: "Mar — May 2026", location: "Kuala Lumpur, Malaysia", capability: "Data judgment & commercial metrics", summary: "Connected business metrics, user behaviour and operating decisions with SQL and BI tools across an e-commerce journey.", actions: ["Built KPI views for GMV and revenue trends", "Mapped user journeys and conversion funnels", "Supported commission, segmentation and operations tracking"], evidence: ["Covered the e-commerce data journey", "Produced decision-support analysis"], tags: ["SQL", "BI", "Conversion funnels"], images: [], placeholder: "Work photo or anonymised dashboard to add" },
    ],
    educationTitle: "Two kinds of training: understand people, respect evidence",
    educationIntro: "Turn a postcard over to see the courses and foundations behind the work.",
    educationHint: "Click to flip",
    education: [
      { id: "um", school: "University of Malaya", degree: "MSc Applied Statistics", date: "Sep 2025 — Jun 2027", badge: "QS 56 · GPA 3.82/4.00", courses: "R, Python, advanced econometrics, time-series analysis, data analysis and statistical principles", imageAlt: "University of Malaya photo to add" },
      { id: "lzu", school: "Lanzhou University", degree: "BSc Management", date: "Sep 2020 — Jul 2024", badge: "Project 985 / Double First Class · GPA 3.82/5.00", courses: "Game theory, big data and AI, data mining and machine learning, linear algebra and advanced mathematics", image: "/lzu.jpg", secondaryImage: "/lzu-2.jpg", imageAlt: "Chelsea on the Lanzhou University campus" },
    ],
    awardsTitle: "Milestones left by sustained effort",
    awardsIntro: "Confirmed categories are shown now; exact years and the remaining four award names will be completed before public release.",
    awards: [
      { title: "Internet+ National Bronze", detail: "One of six innovation / modelling awards", date: "Year to add", pending: true },
      { title: "MCM Honorable Mention", detail: "Mathematical Contest in Modeling", date: "Year to add", pending: true },
      { title: "Four further innovation / modelling awards", detail: "Exact award names to add", date: "Details to add", pending: true },
      { title: "Second-class academic scholarship", detail: "Lanzhou University", date: "Year to add", pending: true },
      { title: "Outstanding Student Leader", detail: "Organisation and public service", date: "Year to add", pending: true },
    ],
    proofTitle: "The toolkit I carry",
    skillGroups: [
      { label: "Data & analytics", value: "SQL · R · SPSS · Stata · Python · BI visualisation" },
      { label: "Languages", value: "Mandarin · IELTS 7.0 (Reading 8.5) · CET-6" },
      { label: "Product practice", value: "Discovery · MVP · User testing · AI evaluation · Responsive delivery" },
    ],
    aboutTitle: "Analytical by training. Attentive by nature.",
    aboutIntro: "Teaching trained me to explain complexity, statistics taught me to respect evidence, and product work connects observation with action. Photography, dance and 581 hours of volunteering shape my aesthetics, expression and empathy.",
    aboutCards: [
      { title: "Photography", subtitle: "Observation & composition", body: "I notice easy-to-miss details and treat aesthetics as the organisation of information and emotion.", image: "/life-1.jpg", imageAlt: "Chelsea beneath spring blossoms", placeholder: "" },
      { title: "Dance", subtitle: "Rhythm & expression", body: "Long-term practice made me comfortable with feedback, decomposition and the pacing of an experience.", imageAlt: "Dance photograph to add", placeholder: "Dance photograph to add" },
      { title: "Volunteering", subtitle: "581 hours", body: "Service brought me closer to different realities and taught me to turn empathy into concrete action.", imageAlt: "Volunteering photograph to add", placeholder: "Volunteering photograph to add" },
    ],
    contactTitle: "If you are looking for product opportunities hidden inside real problems, let’s talk.",
    email: "chelsea299@163.com",
    back: "Back home",
    live: "Open live product",
    code: "Test access code",
    copyHint: "Click the code to copy",
    close: "Close experience details",
    experiencePanelTitle: "Experience details",
    selectedEvidence: "Results & evidence",
    actionsLabel: "What I did",
    galleryLabel: "Field notes",
    nextCase: "Keep exploring",
  },
};

export type ProjectCase = {
  status: string;
  title: string;
  lead: string;
  summary: string;
  sections: [string, string][];
  metrics: [string, string][];
  image: string;
  live?: string;
  access?: string;
  gallery?: { src: string; alt: string }[];
};

export const projectCases: Record<Locale, Record<ProjectSlug, ProjectCase>> = {
  zh: {
    "rescue-ducks": { status: "已上线 · 2026", title: "Rescue Ducks", lead: "把“孤立背词”重新设计成同义关系识别游戏。", summary: "雅思阅读 7 分以下的学生往往认识单词，却在题目中认不出同义替换。Rescue Ducks 用短回合配对、视觉分组与救援叙事，把注意力从单个词迁移到词与词之间的关系。", sections: [["问题与目标用户", "许多学生孤立记忆词义，做阅读题时却无法建立题干与原文之间的同义联系。目标用户是雅思阅读 7 分以下、词汇基础和信心差异较大的学生。"], ["产品假设", "如果把同义词关系放进轻量游戏循环，并用温暖的灯塔与救援叙事提供目标感，学生会更愿意练习关系识别。"], ["MVP 与边界", "第一版聚焦开始界面、词组与核心游戏循环；主动不做登录、排行榜、复杂地图、音乐和重特效，把开发集中在核心学习假设。"], ["30–40 名学生测试", "测试暴露三类阻力：双击释义能力不可发现、开场引导没有说明目标、低基础学生连续选错后容易沮丧。"], ["反馈与迭代", "补充清晰引导，将同一组单词设为相同颜色作为视觉支架，并加入复习界面，让注意力回到语义关系。"], ["下一步验证", "继续观察完成率、首次卡点、求助率和复习回访，验证不同学科技能与场景是否改善持续练习，而非只增加新鲜感。"]], metrics: [["30–40", "名学生试玩"], ["55", "个学习关卡"], ["376", "组语义词库"]], image: "/rescue-ducks-live.png", live: "https://www.rescueducks.xyz", access: "rd-red-4q9v" },
    agora: { status: "AI 学习 Agent · 2026", title: "Agora", lead: "让 AI 提示推动思考，而不是替学生完成思考。", summary: "面向家庭数学学习场景的苏格拉底式 Agent，围绕何时提示、提示到哪一步、如何识别错误以及怎样评估真实学习提升设计交互。", sections: [["家庭学习问题", "学生独立学习时常卡在局部步骤；通用 AI 又容易直接给答案，产品需要在及时帮助与保留思考之间建立边界。"], ["六级提示体系", "提示从概念理解、计算失误、解题步骤到列式书写逐级推进，让帮助程度可控制、可复盘。"], ["四类错误识别", "区分概念理解、计算失误、解题步骤和列式书写四类做题错误，再匹配相应引导。"], ["答案泄露控制", "摒弃直接给出标准答案，先判断学生能否独立完成下一步，再循序推进。"], ["多维效果评估", "围绕答案准确率、AI 幻觉管控和实际学习提升效果三个维度校验模型能力。"], ["状态说明", "当前案例展示已完成的核心机制和评测设计，不把尚未验证的用户效果包装成结果。"]], metrics: [["6", "级提示"], ["4", "类错误"], ["3", "个评估维度"]], image: "/agora-live.png" },
    "tencent-bootcamp": { status: "产品方法训练 · 2024–2025", title: "腾讯产品经理创造营", lead: "把零散的产品理解，整理成一套可以反复使用的工作框架。", summary: "通过入门版与进阶版课程，系统练习用户调研、需求拆解、产品架构、功能规划、生命周期管理和项目推进。", sections: [["为什么参加", "希望把教学、数据和互联网经历中的直觉，转化为更系统的产品语言与工作方法。"], ["训练范围", "学习从用户研究到需求定义、产品架构、功能规划与生命周期管理的完整流程。"], ["任务完成", "完成入门版 29/29 项任务与进阶版 32/32 项任务，共 61/61 项。"], ["形成的方法", "建立以用户需求为起点、以验证和迭代推进的产品工作框架，并把它用于后续独立项目。"], ["证据边界", "该项目证明系统学习与任务完成，不将课程训练描述为真实公司产品业绩。"]], metrics: [["61/61", "项任务完成"], ["29/29", "入门版"], ["32/32", "进阶版"]], image: "/tencent-pm.jpg", gallery: [{ src: "/tencent-foundation.png", alt: "腾讯未来产品经理创造营入门版结课证书" }, { src: "/tencent-advanced.png", alt: "腾讯未来产品经理创造营进阶版结课证书" }] },
    portfolio: { status: "AI 独立开发 · 2026", title: "个人网站／作品集", lead: "用一个可运行的网站，重新回答“招聘方如何快速理解我”。", summary: "从职位匹配与证据识别出发，重组教育、数据、用户测试和 0→1 经历，独立完成中英双语信息架构、案例叙事、前端实现、响应式适配与部署。", sections: [["真实问题", "一页简历能快速筛选，却很难承载产品决策、迭代过程和个人表达；普通作品集又容易变成更长的简历。"], ["产品目标", "让招聘方在 20–30 秒内看懂定位和最强证据，同时允许对项目、经历和个人侧面继续探索。"], ["信息架构", "以项目为主证据，以履历、教育、荣誉和 About 补足能力来源；中英文内容共享同一套类型化数据。"], ["独立交付", "使用 AI 编程完成需求定义、页面原型、前端开发、可访问性交互、响应式适配与私密部署。"], ["迭代原则", "网站本身也是产品：保留版本历史，根据真实观看反馈调整信息密度、布局和交互，而不把视觉变化包装成用户效果。"]], metrics: [["2", "种语言"], ["4", "个项目档案"], ["1", "套响应式体验"]], image: "/hero-chelsea.png" },
  },
  en: {
    "rescue-ducks": { status: "LIVE · 2026", title: "Rescue Ducks", lead: "Reframing isolated vocabulary study as a synonym-recognition game.", summary: "IELTS learners below Band 7 may know individual words but miss paraphrases in reading questions. Rescue Ducks shifts attention from definitions to semantic relationships.", sections: [["Problem & audience", "Learners memorise definitions in isolation but fail to connect question wording with passage paraphrases."], ["Product hypothesis", "A lightweight matching loop and warm rescue narrative can make relational recognition more motivating."], ["MVP & scope", "The first release focused on the start screen, word groups and core loop; login, leaderboards, rich maps, music and heavy effects were deferred."], ["30–40 learner tests", "Testing exposed unclear onboarding, poor discoverability of meanings and discouragement among less confident learners."], ["Feedback into iteration", "I clarified onboarding, gave synonym groups a shared colour scaffold and added a review screen."], ["Next validation", "Track completion, first friction, help usage and review returns, then test whether new themes support sustained practice rather than novelty alone."]], metrics: [["30–40", "student testers"], ["55", "learning levels"], ["376", "semantic groups"]], image: "/rescue-ducks-live.png", live: "https://www.rescueducks.xyz", access: "rd-red-4q9v" },
    agora: { status: "AI LEARNING AGENT · 2026", title: "Agora", lead: "Designing AI hints to advance thinking—not replace it.", summary: "A Socratic maths agent structured around when to help, how far a hint should go, how to recognise errors and how to evaluate genuine learning progress.", sections: [["The home-learning gap", "Students often get stuck without a teacher nearby, while general AI can reveal an answer too quickly."], ["Six-level hint system", "Hints move progressively across concept understanding, calculation, solution steps and equation writing."], ["Four error categories", "The system distinguishes conceptual, calculation, reasoning-step and written-equation errors."], ["Answer leakage control", "It avoids defaulting to a complete solution and first tests whether the learner can own the next step."], ["Multi-dimensional evaluation", "Model outputs are evaluated through answer accuracy, hallucination control and actual learning improvement."], ["Status", "The case presents implemented mechanisms and evaluation design, not unverified learner outcomes."]], metrics: [["6", "hint levels"], ["4", "error categories"], ["3", "evaluation dimensions"]], image: "/agora-live.png" },
    "tencent-bootcamp": { status: "PRODUCT METHODS · 2024–2025", title: "Tencent PM Bootcamp", lead: "Turning fragmented product intuition into a reusable working framework.", summary: "The foundation and advanced tracks covered user research, requirement decomposition, product architecture, feature planning, lifecycle management and delivery.", sections: [["Why I joined", "I wanted to translate intuition from teaching, data and internet work into a more systematic product language."], ["Training scope", "The programme covered the path from discovery and requirement definition to architecture, planning and lifecycle management."], ["Completion", "I completed 29/29 foundation tasks and 32/32 advanced tasks, or 61/61 in total."], ["What remained", "A user-led, validation-oriented product framework that I then applied to independent projects."], ["Evidence boundary", "This case demonstrates structured learning and task completion, not product performance inside Tencent."]], metrics: [["61/61", "tasks completed"], ["29/29", "foundation"], ["32/32", "advanced"]], image: "/tencent-pm.jpg", gallery: [{ src: "/tencent-foundation.png", alt: "Tencent Future Product Manager foundation certificate" }, { src: "/tencent-advanced.png", alt: "Tencent Future Product Manager advanced certificate" }] },
    portfolio: { status: "INDEPENDENT AI BUILD · 2026", title: "Personal portfolio", lead: "Using a working website to rethink how recruiters understand me.", summary: "Built from the need to recognise role-fit evidence quickly, the site reframes education, data, user testing and zero-to-one work through bilingual information architecture, case storytelling, responsive implementation and deployment.", sections: [["The real problem", "A one-page resume scans quickly but cannot carry product decisions and iteration; many portfolios simply become longer resumes."], ["Product goal", "Help a recruiter recognise positioning and strongest evidence within 20–30 seconds, then explore projects, roles and personal perspective."], ["Information architecture", "Projects lead as evidence, while work, education, awards and About explain where the capability came from. Both languages share typed content."], ["Independent delivery", "AI coding supported requirement definition, prototyping, frontend implementation, accessible interactions, responsive adaptation and private deployment."], ["Iteration principle", "The portfolio is itself a product: versions remain recoverable and feedback changes hierarchy and interaction without being presented as user outcome."]], metrics: [["2", "languages"], ["4", "project profiles"], ["1", "responsive experience"]], image: "/hero-chelsea.png" },
  },
};
