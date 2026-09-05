export type Locale = "zh" | "en";
export type ProjectSlug = "rescue-ducks" | "spoken-english-collector" | "agora" | "tencent-bootcamp" | "portfolio";

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
  highlight: string;
  facts: string[];
  stage?: string;
  live?: string;
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
  id: "photography" | "dance" | "volunteering";
  title: string;
  subtitle: string;
  body: string;
  action: string;
  backTitle: string;
  image?: string;
  imageAlt: string;
  placeholder: string;
  gallery?: { src: string; alt: string }[];
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
  capabilityEyebrow: string;
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
  aboutClose: string;
  previousPage: string;
  nextPage: string;
  pageLabel: string;
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
    nav: [["关于", "#capabilities"], ["作品", "#projects"], ["经历", "#experience"], ["背景", "#education"], ["联系", "#contact"]],
    heroEyebrow: "Product · AI · Data",
    heroTitle: "把真实的问题，\n做成愿意被使用的产品。",
    heroIntro: "我做过教学、数据分析和互联网招聘，也用 AI 独立做产品。我会先把问题和边界想清楚，再做出能用的版本，交给用户和数据检验。",
    tags: ["用户洞察", "产品设计", "AI 快速构建", "数据与实验"],
    view: "探索我的作品",
    resume: "下载简历",
    contact: "联系我",
    resumeLabel: "产品经理简历 · 中文",
    capabilityEyebrow: "About",
    capabilityTitle: "我习惯先看清问题，再动手做",
    capabilityIntro: "教学让我长期接触真实用户，统计训练让我习惯看证据。现在，我也会用 AI 把想法快速做出来，再根据使用反馈继续改。",
    capabilities: [
      { mark: "01", title: "用户洞察", subtitle: "Understand users", body: "我会先看用户在哪一步卡住，再判断表面的要求是不是问题本身。", evidence: "Rescue Ducks · 30–40 名目标用户试玩后调整引导和颜色提示" },
      { mark: "02", title: "产品设计", subtitle: "Shape the product", body: "先确定核心机制和 MVP，也把暂时不做的功能写清楚。", evidence: "Rescue Ducks · 学习循环与 MVP 取舍；Spoken English Collector · 双模式与候选表达层级" },
      { mark: "03", title: "AI 快速构建", subtitle: "Build with AI", body: "我用 AI 编程把想法做成可操作的版本，尽早发现交互和实现问题。", evidence: "独立完成 Rescue Ducks、Spoken English Collector 和这个中英双语网站" },
      { mark: "04", title: "数据与验证", subtitle: "Validate value", body: "我会结合用户反馈、行为路径、业务指标和测试结果决定下一步。", evidence: "Rescue Ducks · 用户反馈；Spoken English Collector · 59/59 自动化测试" },
    ],
    projectTitle: "我做过的项目",
    projectIntro: "前两个是我持续打磨的核心项目，后两个记录产品训练和独立开发。",
    projects: [
      { slug: "rescue-ducks", kind: "已上线 · 游戏化学习", title: "Rescue Ducks", subtitle: "一款练习雅思阅读同义替换的词汇游戏。", image: "/rescue-ducks-cover.jpg", highlight: "把孤立背词改成语义配对，并用救援循环完成练习。", facts: ["30–40 名学生试玩", "55 个关卡", "376 组词库"], live: "https://www.rescueducks.xyz", cta: "查看案例" },
      { slug: "spoken-english-collector", kind: "AI 英语学习工具 · Browser Extension", title: "Spoken English Collector", subtitle: "面向 YouTube 与英文网页学习场景的口语表达采集插件。", image: "/spoken-english-collector-cover", highlight: "把截图识别、候选筛选、本地收藏、搜索整理和导出复习连成一条本地学习链路。", facts: ["Target Lookup / Sentence Discovery", "V1.0 封版", "59/59 测试通过"], stage: "本地完整链路已实现", cta: "查看产品设计" },
      { slug: "tencent-bootcamp", kind: "产品训练", title: "腾讯产品经理创造营", subtitle: "入门版与进阶版产品训练。", image: "/tencent-pm-banner.png", highlight: "完成入门 29/29、进阶 32/32，共 61 项训练任务。", facts: [], cta: "查看学习记录" },
      { slug: "portfolio", kind: "独立开发", title: "个人网站／作品集", subtitle: "中英双语个人作品集。", image: "/hero-chelsea.png", highlight: "完成中英文路由、四个项目案例和响应式交付。", facts: [], cta: "查看构建过程" },
    ],
    experienceTitle: "我做过几种很不一样的工作",
    experienceIntro: "这些经历涉及教育、互联网招聘和数据分析。点击公司，可以查看工作内容和现场照片。",
    experienceHint: "悬停预览 · 点击展开",
    experiences: [
      { id: "xiaohongshu", brand: "小红书", company: "小红书", role: "商业／电商 HR 招聘实习生", date: "2024.01 — 2024.04", location: "上海，中国", capability: "互联网节奏与跨角色协作", summary: "支持算法、产品与商业化团队招聘，在快节奏互联网团队中理解不同角色的能力需求与协作方式。", actions: ["承接人才寻访、简历初筛、面试排期及 offer 跟进", "组织 100+ 场面试并维护招聘流程", "结合招聘漏斗与候选人背景数据识别关键考量"], evidence: ["100+ 场面试组织", "覆盖算法、产品与商业化岗位"], tags: ["漏斗分析", "跨团队协作", "互联网业务"], images: [{ src: "/rednote-1.jpg", alt: "Chelsea 在小红书办公空间" }, { src: "/rednote-2.jpg", alt: "Chelsea 与小红书品牌装置合影" }, { src: "/rednote-3.jpg", alt: "Chelsea 参加小红书人才发展活动" }], placeholder: "" },
      { id: "new-oriental", brand: "新东方", company: "新东方", role: "雅思／国际课程教师", date: "2024.11 — 2025.09", location: "兰州，中国", capability: "课堂观察与学习反馈", summary: "教授雅思阅读、IG 数学及 AP 微积分，通过课堂表现、作业和错题持续识别学习卡点。", actions: ["根据诊断结果安排分层提示、针对性练习和复习", "开发并本地化 IG 数学、词汇语法等课程内容", "依据错误类型与阶段表现持续调整教学方案"], evidence: ["帮助 1 名 IG 学生在 10 次课后由 U 提升至 A", "覆盖语言与数理课程"], tags: ["用户观察", "内容设计", "学习反馈"], images: [{ src: "/xdf-1.jpg", alt: "Chelsea 在新东方的教师工牌" }, { src: "/xdf-2.jpg", alt: "Chelsea 在课堂中讲解" }, { src: "/xdf-3.jpg", alt: "Chelsea 参与教学活动" }, { src: "/xdf-5.jpg", alt: "新东方教研工作现场" }], placeholder: "" },
      { id: "utu", brand: "UTU", company: "优途雅思", role: "雅思教师", date: "2025.11 — 至今", location: "线上远程", capability: "需求访谈与试听转化", summary: "持续接触不同基础的雅思考生，了解他们的学习难点，再据此设计和调整试听方案。", actions: ["访谈并分层拆解不同水平学员的备考难点", "整理用户需求并设计对应的试听教学方案", "根据反馈继续调整试听内容和沟通方式"], evidence: ["试听转化成功率 90%+", "持续一线服务雅思学习者"], tags: ["用户访谈", "方案设计", "转化优化"], images: [{ src: "/utu-1.jpg", alt: "Chelsea 在优途准备雅思听力课程" }, { src: "/utu-2.jpg", alt: "优途雅思课程准备现场" }], placeholder: "" },
      { id: "kalowave", brand: "KALO", company: "Kalowave", role: "数据分析实习生", date: "2026.03 — 2026.05", location: "吉隆坡，马来西亚", capability: "数据判断与商业指标", summary: "用 SQL 与 BI 工具连接业务指标、用户行为和运营决策，理解电商平台从成交到营收的关键链路。", actions: ["搭建业务 KPI 看板并复盘成交总额、营收趋势", "拆解用户行为路径与转化漏斗", "协助佣金核算、用户分层与运营效果追踪"], evidence: ["覆盖电商全链路数据", "输出业务决策支持结论"], tags: ["SQL", "BI", "转化漏斗"], images: [{ src: "/kalodata-team.jpg", alt: "Chelsea 与数据团队的办公室合影" }], placeholder: "" },
    ],
    educationTitle: "我学过管理，也在学统计",
    educationIntro: "两段教育经历放在这里。点击明信片可以查看专业、课程和成绩。",
    educationHint: "点击翻面",
    education: [
      { id: "um", school: "马来亚大学", degree: "应用统计学 · 硕士", date: "2025.09 — 2027.06", badge: "QS 56 · GPA 3.82/4.00", courses: "R、Python、高级计量、时间序列分析、数据分析、统计学原理", image: "/um-1.jpg", secondaryImage: "/um-2.jpg", imageAlt: "Chelsea 在马来亚大学校园" },
      { id: "lzu", school: "兰州大学", degree: "管理学基地班 · 学士", date: "2020.09 — 2024.07", badge: "985／双一流 · GPA 3.82/5.00", courses: "博弈论、大数据与人工智能、数据挖掘与机器学习、线性代数、高等数学", image: "/lzu.jpg", secondaryImage: "/lzu-5.jpg", imageAlt: "Chelsea 在兰州大学校园" },
    ],
    awardsTitle: "一些比赛和奖项",
    awardsIntro: "主要是创新创业和数学建模比赛，按时间排列。",
    awards: [
      { title: "中国大学生“互联网+”创新创业大赛全国铜奖", detail: "前 1%", date: "2024", pending: false },
      { title: "美国大学生数学建模竞赛荣誉奖（MCM）", detail: "前 25%", date: "2023", pending: false },
      { title: "MathorCup 高校数学建模挑战赛全国三等奖", detail: "前 25%", date: "2023", pending: false },
      { title: "亚太地区大学生数学建模竞赛全国三等奖（APMCM）", detail: "前 25%", date: "2022", pending: false },
      { title: "“认证杯”国际数学建模竞赛荣誉奖", detail: "前 15%", date: "2022", pending: false },
      { title: "校级二等奖学金及优秀学生干部", detail: "前 15%", date: "2021 & 2022", pending: false },
    ],
    proofTitle: "我常用的工具",
    skillGroups: [
      { label: "数据与分析", value: "SQL · R · SPSS · Stata · Python · BI 可视化" },
      { label: "语言", value: "普通话二级甲等 · IELTS 7.0（阅读 8.5）· CET-6" },
      { label: "产品实践", value: "用户研究 · 需求定义 · 优先级判断 · MVP · 用户测试 · AI 评测 · 数据复盘" },
    ],
    aboutTitle: "工作之外",
    aboutIntro: "我喜欢摄影和跳舞，也做过 581 小时志愿服务。这里只放一些生活里的记录。",
    aboutCards: [
      { id: "photography", title: "摄影", subtitle: "观察与构图", body: "我喜欢带着相机旅行，也会记录日常里容易错过的光线和细节。", action: "翻开摄影集", backTitle: "十页摄影手记", image: "/photography-01.jpg", imageAlt: "Chelsea 的摄影作品：花树下的人像", placeholder: "个人摄影作品", gallery: Array.from({ length: 10 }, (_, index) => ({ src: `/photography-${String(index + 2).padStart(2, "0")}.jpg`, alt: `Chelsea 摄影作品 ${index + 2}` })) },
      { id: "dance", title: "舞蹈", subtitle: "节奏与表达", body: "我一直喜欢跳舞。练习、记动作和跟上音乐，是工作之外很放松的时刻。", action: "观看舞蹈视频", backTitle: "舞蹈片段", imageAlt: "舞蹈照片待补充", placeholder: "舞蹈视频待补充" },
      { id: "volunteering", title: "志愿服务", subtitle: "581 小时", body: "大学期间累计完成 581 小时志愿服务，参与过校园活动和社区服务。", action: "查看服务档案", backTitle: "志愿服务记录", imageAlt: "志愿服务照片待补充", placeholder: "志愿服务图片与项目介绍待补充" },
    ],
    aboutClose: "返回卡片正面",
    previousPage: "上一页",
    nextPage: "下一页",
    pageLabel: "页",
    contactTitle: "如果你觉得我的项目或经历和你的团队有点契合，欢迎来聊聊。",
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
    nav: [["About", "#capabilities"], ["Work", "#projects"], ["Experience", "#experience"], ["Background", "#education"], ["Contact", "#contact"]],
    heroEyebrow: "Product · AI · Data",
    heroTitle: "Turning real problems into\nproducts people want to use.",
    heroIntro: "I bring frontline teaching, data analysis and internet-team experience. I find problems in real contexts, build quickly with AI, and use testing and evidence to turn ideas into products that can keep evolving.",
    tags: ["User insight", "Product design", "AI prototyping", "Data & experiments"],
    view: "Explore my work",
    resume: "Download resume",
    contact: "Contact me",
    resumeLabel: "Product manager resume · Chinese",
    capabilityEyebrow: "About",
    capabilityTitle: "Observe, build, validate",
    capabilityIntro: "Frontline education keeps me close to real users, statistics and data training keep decisions evidence-led, and AI helps me turn product judgement into experiences that can be tested and discussed.",
    capabilities: [
      { mark: "01", title: "User insight", subtitle: "Understand users", body: "Separate surface requests from real friction through behaviour, interviews and feedback, then define the audience and need boundary.", evidence: "Rescue Ducks · 30–40 target-user tests drove onboarding and colour-scaffold iterations" },
      { mark: "02", title: "Product design", subtitle: "Shape the product", body: "Define the core mechanism, MVP scope and explicit non-goals around a testable hypothesis.", evidence: "Rescue Ducks · learning-loop trade-offs; Spoken English Collector · two modes and candidate hierarchy" },
      { mark: "03", title: "AI prototyping", subtitle: "Build with AI", body: "Use AI coding to make ideas runnable so product decisions meet interaction and implementation constraints early.", evidence: "Independently built Rescue Ducks, Spoken English Collector and this bilingual portfolio" },
      { mark: "04", title: "Data & validation", subtitle: "Validate value", body: "Use user tests, behavioural journeys, business metrics and automated checks to decide what comes next.", evidence: "Rescue Ducks · real-user feedback; Spoken English Collector · 59/59 automated tests" },
    ],
    projectTitle: "Four attempts to turn ideas into something real",
    projectIntro: "See the problem and evidence first, then enter the full case. The first two are core products; the others document product method and independent delivery.",
    projects: [
      { slug: "rescue-ducks", kind: "Live · Gamified learning", title: "Rescue Ducks", subtitle: "A vocabulary game for practising IELTS Reading paraphrases.", image: "/rescue-ducks-cover.jpg", highlight: "Turns isolated memorisation into semantic matching inside a rescue loop.", facts: ["30–40 student testers", "55 levels", "376 semantic groups"], live: "https://www.rescueducks.xyz", cta: "View case" },
      { slug: "spoken-english-collector", kind: "AI English learning tool · Browser Extension", title: "Spoken English Collector", subtitle: "A speaking-expression collector for YouTube and English webpages.", image: "/spoken-english-collector-cover", highlight: "Connects region capture, AI candidate selection, local saving, search and HTML review exports in one local workflow.", facts: ["Target Lookup / Sentence Discovery", "V1.0 frozen", "59/59 tests passed"], stage: "Complete local workflow implemented", cta: "View product design" },
      { slug: "tencent-bootcamp", kind: "Product training", title: "Tencent PM Bootcamp", subtitle: "Foundation and advanced product training.", image: "/tencent-pm-banner.png", highlight: "Completed 29/29 foundation and 32/32 advanced tasks—61 in total.", facts: [], cta: "View learning record" },
      { slug: "portfolio", kind: "Independent build", title: "Personal portfolio", subtitle: "A bilingual personal product portfolio.", image: "/hero-chelsea.png", highlight: "Delivered bilingual routes, four project cases and a responsive experience.", facts: [], cta: "See the build process" },
    ],
    experienceTitle: "Four roles, one orbit of product capability",
    experienceIntro: "Company and role give the overview. Move closer to a node to see what that experience shaped.",
    experienceHint: "Hover to preview · click to open",
    experiences: [
      { id: "xiaohongshu", brand: "RED", company: "Xiaohongshu", role: "Commercial / E-commerce Recruiting Intern", date: "Jan — Apr 2024", location: "Shanghai, China", capability: "Internet pace & cross-functional context", summary: "Supported algorithm, product and commercial hiring while learning how different roles work together in a fast-moving internet team.", actions: ["Handled sourcing, screening, scheduling and offer follow-up", "Coordinated 100+ interviews", "Used funnel and candidate data to surface hiring signals"], evidence: ["100+ interviews coordinated", "Algorithm, product and commercial roles"], tags: ["Funnel analysis", "Cross-team work", "Internet business"], images: [{ src: "/rednote-1.jpg", alt: "Chelsea in the Xiaohongshu office" }, { src: "/rednote-2.jpg", alt: "Chelsea beside a Xiaohongshu installation" }, { src: "/rednote-3.jpg", alt: "Chelsea at a Xiaohongshu talent event" }], placeholder: "" },
      { id: "new-oriental", brand: "XDF", company: "New Oriental", role: "IELTS / International Curriculum Teacher", date: "Nov 2024 — Sep 2025", location: "Lanzhou, China", capability: "Learner insight & learning loops", summary: "Taught IELTS Reading, IG Maths and AP Calculus, using classroom behaviour, homework and mistakes to identify learning friction.", actions: ["Designed a diagnose–scaffold–practice–review loop", "Developed and localised IG Maths and language content", "Iterated teaching from error patterns and stage performance"], evidence: ["Helped one IG learner move from U to A after ten lessons", "Worked across language and maths courses"], tags: ["User insight", "Content product", "Learning outcomes"], images: [{ src: "/xdf-1.jpg", alt: "Chelsea’s New Oriental teacher badge" }, { src: "/xdf-2.jpg", alt: "Chelsea explaining in class" }, { src: "/xdf-3.jpg", alt: "Chelsea at a teaching activity" }, { src: "/xdf-5.jpg", alt: "A New Oriental teaching workshop" }], placeholder: "" },
      { id: "utu", brand: "UTU", company: "UTU IELTS", role: "IELTS Teacher", date: "Nov 2025 — Present", location: "Remote", capability: "User interviews & conversion validation", summary: "Work directly with IELTS learners across ability levels, turning learning friction into trial-lesson solutions and testing the delivery logic.", actions: ["Interview learners and segment their preparation friction", "Translate needs into trial-lesson plans", "Iterate delivery from feedback"], evidence: ["90%+ trial conversion", "Ongoing frontline contact with IELTS learners"], tags: ["User interviews", "Solution validation", "Conversion"], images: [{ src: "/utu-1.jpg", alt: "Chelsea preparing an IELTS Listening lesson at UTU" }, { src: "/utu-2.jpg", alt: "An UTU IELTS lesson preparation setup" }], placeholder: "" },
      { id: "kalowave", brand: "KALO", company: "Kalowave", role: "Data Analyst Intern", date: "Mar — May 2026", location: "Kuala Lumpur, Malaysia", capability: "Data judgment & commercial metrics", summary: "Connected business metrics, user behaviour and operating decisions with SQL and BI tools across an e-commerce journey.", actions: ["Built KPI views for GMV and revenue trends", "Mapped user journeys and conversion funnels", "Supported commission, segmentation and operations tracking"], evidence: ["Covered the e-commerce data journey", "Produced decision-support analysis"], tags: ["SQL", "BI", "Conversion funnels"], images: [{ src: "/kalodata-team.jpg", alt: "Chelsea with the data team in the office" }], placeholder: "" },
    ],
    educationTitle: "Two kinds of training: understand people, respect evidence",
    educationIntro: "Turn a postcard over to see the courses and foundations behind the work.",
    educationHint: "Click to flip",
    education: [
      { id: "um", school: "University of Malaya", degree: "MSc Applied Statistics", date: "Sep 2025 — Jun 2027", badge: "QS 56 · GPA 3.82/4.00", courses: "R, Python, advanced econometrics, time-series analysis, data analysis and statistical principles", image: "/um-1.jpg", secondaryImage: "/um-2.jpg", imageAlt: "Chelsea on the University of Malaya campus" },
      { id: "lzu", school: "Lanzhou University", degree: "BSc Management", date: "Sep 2020 — Jul 2024", badge: "Project 985 / Double First Class · GPA 3.82/5.00", courses: "Game theory, big data and AI, data mining and machine learning, linear algebra and advanced mathematics", image: "/lzu.jpg", secondaryImage: "/lzu-5.jpg", imageAlt: "Chelsea on the Lanzhou University campus" },
    ],
    awardsTitle: "Milestones left by sustained effort",
    awardsIntro: "Across entrepreneurship and mathematical modelling, these milestones reflect sustained analysis, collaboration and follow-through.",
    awards: [
      { title: "National Bronze Award · China College Students’ ‘Internet+’ Innovation and Entrepreneurship Competition", detail: "Top 1%", date: "2024", pending: false },
      { title: "Honorable Mention · Mathematical Contest in Modeling (MCM)", detail: "Top 25%", date: "2023", pending: false },
      { title: "National Third Prize · MathorCup University Mathematical Modelling Challenge", detail: "Top 25%", date: "2023", pending: false },
      { title: "National Third Prize · APMCM Mathematical Modelling Competition", detail: "Top 25%", date: "2022", pending: false },
      { title: "Honorable Award · ‘Certification Cup’ International Mathematical Modelling Competition", detail: "Top 15%", date: "2022", pending: false },
      { title: "University Second-class Scholarship & Outstanding Student Leader", detail: "Top 15%", date: "2021 & 2022", pending: false },
    ],
    proofTitle: "The toolkit I carry",
    skillGroups: [
      { label: "Data & analytics", value: "SQL · R · SPSS · Stata · Python · BI visualisation" },
      { label: "Languages", value: "Mandarin · IELTS 7.0 (Reading 8.5) · CET-6" },
      { label: "Product practice", value: "User research · Requirement definition · Prioritisation · MVP · User testing · AI evaluation · Data review" },
    ],
    aboutTitle: "Analytical by training. Attentive by nature.",
    aboutIntro: "Teaching trained me to explain complexity, statistics taught me to respect evidence, and product work connects observation with action. Photography, dance and 581 hours of volunteering shape my aesthetics, expression and empathy.",
    aboutCards: [
      { id: "photography", title: "Photography", subtitle: "Observation & composition", body: "I notice easy-to-miss light, places and moments, and keep them in photographs.", action: "Open photo book", backTitle: "A ten-page photo journal", image: "/photography-01.jpg", imageAlt: "Chelsea portrait beneath flowering trees", placeholder: "Photography work", gallery: Array.from({ length: 10 }, (_, index) => ({ src: `/photography-${String(index + 2).padStart(2, "0")}.jpg`, alt: `Chelsea photography work ${index + 2}` })) },
      { id: "dance", title: "Dance", subtitle: "Rhythm & expression", body: "Long-term practice made me comfortable with feedback, decomposition and the pacing of an experience.", action: "Watch dance video", backTitle: "Dance reel", imageAlt: "Dance photograph to add", placeholder: "Dance video to add" },
      { id: "volunteering", title: "Volunteering", subtitle: "581 hours", body: "Service brought me closer to different realities and taught me to turn empathy into concrete action.", action: "Open service notes", backTitle: "Volunteering field notes", imageAlt: "Volunteering photograph to add", placeholder: "Volunteering images and project notes to add" },
    ],
    aboutClose: "Return to card front",
    previousPage: "Previous",
    nextPage: "Next",
    pageLabel: "Page",
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
  gallery?: { src: string; alt: string; width: number; height: number }[];
  process?: {
    title: string;
    intro: string;
    conclusion: string;
    steps: {
      title: string;
      question: string;
      method: string;
      evidence: {
        label: string;
        status: "applied" | "framework";
        href?: `/${Locale}/projects/${ProjectSlug}`;
      }[];
    }[];
  };
};

export const projectCases: Record<Locale, Record<ProjectSlug, ProjectCase>> = {
  zh: {
    "rescue-ducks": { status: "已上线 · 2026", title: "Rescue Ducks", lead: "把“孤立背词”重新设计成同义关系识别游戏。", summary: "雅思阅读 7 分以下的学生往往认识单词，却在题目中认不出同义替换。Rescue Ducks 用短回合配对、视觉分组与救援叙事，把注意力从单个词迁移到词与词之间的关系。", sections: [["真实问题与目标用户", "目标用户是雅思阅读 7 分以下、词汇基础和信心差异较大的学生。课堂观察显示，孤立记忆词义无法自然迁移到题干与原文的同义替换识别，因此问题不只是“词汇量不足”，而是缺少对词间关系的练习。"], ["产品假设与价值", "如果把同义词关系放进短回合游戏，并用温暖的灯塔和救援叙事提供目标感，学生会更愿意持续练习关系识别，而不是机械重复单词释义。"], ["优先级与 MVP 边界", "第一版只做开始界面、词组和核心配对循环，用最短路径验证学习假设。登录、排行榜、复杂地图、音乐和重特效需要额外存储或制作成本，也不能直接验证核心价值，因此主动延后。"], ["30–40 名学生测试", "测试暴露三类真实阻力：双击查看释义的操作不可发现、开场引导没有说明目标、低基础学生连续选错后容易感到挫败。"], ["反馈如何进入迭代", "重新设计开场引导，把同一语义组设为相同颜色作为学习支架，并加入复习界面。每项改动都对应已观察到的使用阻力，而不是继续堆叠功能。"], ["下一步验证", "下一版本计划观察关卡完成率、首次卡点、释义求助率和复习回访，再判断是否扩展写作、口语与听力主题。不同场景 UI 仍属于计划，不作为已验证结果。"]], metrics: [["30–40", "名学生试玩"], ["55", "个学习关卡"], ["376", "组语义词库"]], image: "/rescue-ducks-cover.jpg", live: "https://www.rescueducks.xyz", access: "rd-red-4q9v" },
    "spoken-english-collector": { status: "AI 英语学习工具 · V1.0", title: "Spoken English Collector", lead: "把网页里稍纵即逝的地道表达，变成可以整理和复习的个人语料。", summary: "面向 YouTube 与英文网页学习场景的 Browser Extension，将“查词—理解—整理—复习”整合为一条本地学习链路。V1.0 已封版，59/59 项自动化测试通过。", sections: [["问题与使用场景", "学习者在视频或网页中遇到地道表达时，需要在截图、查词、笔记和复习工具之间反复切换，表达很容易在中途丢失。插件把处理动作留在当前浏览场景中。"], ["两种识别模式", "Target Lookup 处理用户明确圈选的词或短语；Sentence Discovery 从完整句子中发现值得积累的口语表达。两种模式对应“我知道要查什么”和“我还不知道什么值得学”两类任务。"], ["候选表达层级", "AI 返回 Primary 与 Secondary Candidates，让最相关表达先进入视线，同时保留可选项。每条候选包含中文释义、IPA、usage、场景标签与 Semantic Group，方便判断是否值得收藏。"], ["本地收藏与整理", "收藏内容写入 IndexedDB，在设备本地持久化；学习者可搜索、筛选和整理记录，不依赖账号系统。"], ["导出与复习", "提供 Smart、Full Notes 与 Compact Review 三种 HTML 导出：分别适合智能整理、完整笔记和紧凑复习，导出文件可离线打开。"], ["当前完成度", "区域截图与 OCR、AI 表达识别、候选筛选、本地收藏、搜索整理和 HTML 导出已组成完整链路。V1.0 已封版，59/59 项自动化测试通过；当前结果是功能与工程验证，不表述为用户学习效果。"]], metrics: [["2", "种识别模式"], ["3", "种导出格式"], ["59/59", "自动化测试通过"]], image: "/spoken-english-collector-cover" },
    agora: { status: "AI 学习 Agent · 2026", title: "Agora", lead: "让 AI 提示推动思考，而不是替学生完成思考。", summary: "面向家庭数学学习场景的苏格拉底式 Agent，围绕何时提示、提示到哪一步、如何识别错误以及怎样评估真实学习提升设计交互。", sections: [["问题与产品边界", "学生独立学习时常卡在局部步骤；通用 AI 又容易直接给出完整答案。产品边界不是“替学生解题”，而是在及时帮助与保留思考责任之间建立可控机制。"], ["核心机制取舍", "以六级渐进提示作为主链路，帮助从概念理解、计算检查、解题步骤推进到列式书写；不把更多内容和功能放在机制验证之前。"], ["错误识别与提示匹配", "将做题错误拆为概念理解、计算失误、解题步骤和列式书写四类，再决定提示从哪一级开始，避免所有问题使用同一种回答。"], ["答案泄露控制", "默认不输出完整标准答案，先判断学生是否能独立完成下一步，并控制每次提示的信息量，让“帮助程度”成为明确的产品参数。"], ["上线前评测框架", "围绕答案准确率、AI 幻觉管控和实际学习提升三个维度设计评测标准，用例应覆盖不同错误类型、提示级别与答案泄露风险。"], ["当前证据边界", "当前案例证明核心机制和评测框架已经形成，但尚无真实用户效果数据，因此不把学习提升、留存或商业结果写成成果。"]], metrics: [["6", "级提示"], ["4", "类错误"], ["3", "个评估维度"]], image: "/agora-live.png" },
    "tencent-bootcamp": {
      status: "产品方法训练 · 2024–2025",
      title: "腾讯产品经理创造营",
      lead: "把零散的产品理解，整理成一套可以反复使用的工作框架。",
      summary: "通过入门版与进阶版课程，系统训练从发现问题、定义需求和规划优先级，到设计交付、验证价值与运营迭代的产品全流程。",
      sections: [["为什么参加", "希望把教学、数据和互联网经历中的直觉，转化为能解释取舍、连接目标并指导落地的产品工作方法。"], ["需求不是功能清单", "先确认用户、场景和问题是否真实，再判断需求本质与产品边界；规划时同时考虑用户价值、业务目标、核心指标、实现成本和风险。"], ["从方案到交付", "训练覆盖产品定位、信息与功能架构、原型和需求表达，并建立对研发、测试、运营准备、上线检查与项目节奏的完整认知。"], ["上线不是终点", "上线后仍需结合反馈渠道、灰度验证、A/B Test、异常监控与数据复盘判断价值，再围绕北极星指标、生命周期和商业化持续迭代。"], ["任务完成", "完成入门版 29/29 项任务与进阶版 32/32 项任务，共 61/61 项，并将其中的需求边界、MVP 和验证方法用于后续独立项目。"], ["证据边界", "该案例证明系统学习与任务完成。研发协同、灰度发布、增长和商业化是已理解的课程框架，不描述为在腾讯真实业务中取得的成果。"]],
      metrics: [["61/61", "项任务完成"], ["29/29", "入门版"], ["32/32", "进阶版"]],
      image: "/tencent-pm-banner.png",
      process: {
        title: "从发现问题到持续经营的产品闭环",
        intro: "每一步都回答一个不同的问题。绿色标签指向已经在个人项目中实践的证据；蓝色标签表示完成了方法学习、仍等待真实业务检验。",
        conclusion: "产品经理的价值不只是提出功能，而是在用户价值、业务目标、实现成本和长期产品方向之间作出有依据的取舍，并推动方案完成验证闭环。",
        steps: [
          { title: "发现问题", question: "真实阻力发生在哪里？", method: "结合用户访谈、场景观察、行为数据与市场研究，区分表达出来的诉求和实际发生的问题。", evidence: [{ label: "Rescue Ducks · 学生测试", status: "applied", href: "/zh/projects/rescue-ducks" }] },
          { title: "定义需求", question: "谁在什么场景下需要什么？", method: "验证需求真实性，明确目标用户、核心场景、产品定位、需求本质与暂不解决的边界。", evidence: [{ label: "Rescue Ducks · MVP 边界", status: "applied", href: "/zh/projects/rescue-ducks" }, { label: "Spoken English Collector · 双模式边界", status: "applied", href: "/zh/projects/spoken-english-collector" }] },
          { title: "规划优先级", question: "为什么先做这件事？", method: "综合用户价值、业务价值、核心指标、实现成本与风险，确定版本目标和需求顺序。", evidence: [{ label: "个人网站 · 信息优先级", status: "applied", href: "/zh/projects/portfolio" }] },
          { title: "设计与交付", question: "如何把决策变成可交付方案？", method: "通过产品架构、交互与原型表达方案，并理解研发、测试、运营准备和上线检查的协作节点。", evidence: [{ label: "个人网站 · 独立交付", status: "applied", href: "/zh/projects/portfolio" }, { label: "跨团队交付 · 课程框架", status: "framework" }] },
          { title: "验证价值", question: "上线后如何判断是否有效？", method: "结合反馈、灰度验证、A/B Test、核心指标和异常监控，判断假设是否成立。", evidence: [{ label: "Rescue Ducks · 反馈迭代", status: "applied", href: "/zh/projects/rescue-ducks" }, { label: "Spoken English Collector · 自动化测试", status: "applied", href: "/zh/projects/spoken-english-collector" }, { label: "灰度与 A/B · 课程框架", status: "framework" }] },
          { title: "运营迭代", question: "如何让价值长期成立？", method: "围绕北极星指标、用户生命周期、增长、商业化和复盘机制持续调整产品。", evidence: [{ label: "数据运营与商业化 · 课程框架", status: "framework" }] },
        ],
      },
      gallery: [{ src: "/tencent-foundation.png", alt: "腾讯未来产品经理创造营入门版结课证书", width: 750, height: 1334 }, { src: "/tencent-advanced.png", alt: "腾讯未来产品经理创造营进阶版结课证书", width: 750, height: 1334 }],
    },
    portfolio: { status: "AI 独立开发 · 2026", title: "个人网站／作品集", lead: "用一个可运行的网站，重新回答“招聘方如何快速理解我”。", summary: "从职位匹配与证据识别出发，重组教育、数据、用户测试和 0→1 经历，独立完成中英双语信息架构、案例叙事、前端实现、响应式适配与部署。", sections: [["真实问题与用户任务", "招聘方需要快速判断岗位匹配度，一页简历却难以承载产品决策、迭代过程和个人表达；普通作品集又容易变成更长、更难扫描的简历。"], ["产品目标与成功标准", "让访客在 20–30 秒内看懂定位、核心项目和经历范围，同时能继续探索决策过程与真实证据。"], ["信息优先级与范围", "首屏保留通用产品经理定位，项目作为主证据，履历、教育、荣誉和 About 解释能力来源；首版不加入博客、登录、CMS、完整照片墙和未经核验的结果。"], ["双语信息架构", "中英文路由共享同一套类型化内容模型，语言切换保留当前页面上下文；四个项目拥有独立案例页，首页只承担快速识别。"], ["独立交付与质量检查", "使用 AI 编程完成需求梳理、页面原型、前端开发、键盘与触屏交互、响应式适配和私密部署，并通过生产构建与路由检查验证交付。"], ["反馈与持续迭代", "网站保留版本历史，根据真实观看反馈调整图片加载、信息密度、布局和交互。当前只陈述已完成的改动，不把视觉优化包装成招聘转化结果。"]], metrics: [["2", "种语言"], ["4", "个项目档案"], ["1", "套响应式体验"]], image: "/hero-chelsea.png" },
  },
  en: {
    "rescue-ducks": { status: "LIVE · 2026", title: "Rescue Ducks", lead: "Reframing isolated vocabulary study as a synonym-recognition game.", summary: "IELTS learners below Band 7 may know individual words but miss paraphrases in reading questions. Rescue Ducks shifts attention from definitions to semantic relationships.", sections: [["Real problem & audience", "The audience is IELTS Reading learners below Band 7 with different vocabulary foundations and confidence levels. Classroom observation suggested the problem was not only vocabulary size: isolated definitions did not transfer into recognising paraphrases between questions and passages."], ["Product hypothesis & value", "A short matching loop, warm lighthouse setting and rescue narrative could make semantic-relationship practice more purposeful and less repetitive."], ["Priorities & MVP boundary", "The first release focused on the start screen, word groups and core matching loop. Login, leaderboards, rich maps, music and heavy effects added cost without directly testing the learning hypothesis, so they were deliberately deferred."], ["30–40 learner tests", "Testing exposed three real barriers: the double-click definition action was undiscoverable, onboarding did not explain the goal, and repeated mistakes discouraged less confident learners."], ["Feedback into iteration", "I rewrote onboarding, gave words in the same semantic group a shared colour scaffold and added a review screen. Each change answered an observed barrier instead of adding unrelated features."], ["Next validation", "The next version would track level completion, first friction, definition-help usage and review returns before expanding to writing, speaking and listening themes. New visual worlds remain plans, not validated outcomes."]], metrics: [["30–40", "student testers"], ["55", "learning levels"], ["376", "semantic groups"]], image: "/rescue-ducks-cover.jpg", live: "https://www.rescueducks.xyz", access: "rd-red-4q9v" },
    "spoken-english-collector": { status: "AI ENGLISH LEARNING TOOL · V1.0", title: "Spoken English Collector", lead: "Turning fleeting expressions on the web into a personal collection that is easy to organise and revisit.", summary: "A browser extension for YouTube and English webpages that brings lookup, understanding, organisation and review into one local learning workflow. V1.0 is frozen and all 59 automated tests pass.", sections: [["Problem & context", "When learners notice a useful expression in a video or webpage, moving between capture, dictionary, notes and review tools creates friction and loses context. The extension keeps the workflow inside the browsing moment."], ["Two discovery modes", "Target Lookup handles a word or phrase the learner deliberately selects. Sentence Discovery scans a full sentence for spoken expressions worth collecting. The modes cover both known lookup intent and open-ended discovery."], ["Candidate hierarchy", "The AI response separates Primary and Secondary Candidates so the most relevant expression appears first without hiding alternatives. Each candidate can include a Chinese meaning, IPA, usage guidance, scene tags and a Semantic Group."], ["Local collection", "Saved expressions persist in IndexedDB on the device. Learners can search, filter and organise their library without an account system."], ["Export for review", "Smart, Full Notes and Compact Review HTML exports serve structured review, complete notes and quick revision. Each file can be opened offline."], ["Current completion", "Region capture and OCR, AI expression recognition, candidate selection, local saving, search and HTML export form the complete V1.0 workflow. All 59 automated tests pass; this is product and engineering validation, not a claim about learning outcomes."]], metrics: [["2", "discovery modes"], ["3", "HTML export formats"], ["59/59", "automated tests passed"]], image: "/spoken-english-collector-cover" },
    agora: { status: "AI LEARNING AGENT · 2026", title: "Agora", lead: "Designing AI hints to advance thinking—not replace it.", summary: "A Socratic maths agent structured around when to help, how far a hint should go, how to recognise errors and how to evaluate genuine learning progress.", sections: [["Problem & product boundary", "Students get stuck on local steps when learning alone, while general AI can reveal a complete answer too quickly. The boundary is not to solve on the learner’s behalf, but to provide timely help while preserving ownership of the reasoning."], ["Core mechanism choice", "The main path uses six progressive hint levels across concept understanding, calculation checks, solution steps and equation writing; additional content stays secondary to validating this mechanism."], ["Error recognition & response", "The design separates conceptual, calculation, reasoning-step and written-equation errors before selecting an entry point into the hint ladder."], ["Answer leakage control", "The agent does not default to a complete solution. It first tests whether the learner can own the next step and treats the amount of information in each hint as a product parameter."], ["Pre-release evaluation", "Evaluation is designed across answer accuracy, hallucination control and actual learning gain, with cases spanning error types, hint levels and answer-leakage risk."], ["Current evidence boundary", "The mechanism and evaluation framework are defined, but there is no verified learner-outcome dataset yet. Learning gains, retention and commercial impact are therefore not presented as results."]], metrics: [["6", "hint levels"], ["4", "error categories"], ["3", "evaluation dimensions"]], image: "/agora-live.png" },
    "tencent-bootcamp": {
      status: "PRODUCT METHODS · 2024–2025",
      title: "Tencent PM Bootcamp",
      lead: "Turning fragmented product intuition into a reusable working framework.",
      summary: "The foundation and advanced tracks covered the full loop from problem discovery, requirement definition and prioritisation to delivery, value validation and ongoing operations.",
      sections: [["Why I joined", "I wanted to translate intuition from teaching, data and internet work into a product method that explains trade-offs, connects goals and guides delivery."], ["Requirements are not a feature list", "The process begins by confirming the user, context and truth of the problem, then defining its essence and product boundary. Planning balances user value, business goals, core metrics, delivery cost and risk."], ["From solution to delivery", "Training covered positioning, information and feature architecture, prototypes and requirement communication, together with the roles of engineering, testing, operations preparation, release checks and project cadence."], ["Launch is not the finish line", "Feedback channels, staged release, A/B testing, anomaly monitoring and data review determine whether value was created; north-star metrics, lifecycle thinking and commercialisation then guide iteration."], ["Completion", "I completed 29/29 foundation tasks and 32/32 advanced tasks, or 61/61 in total, and applied requirement boundaries, MVP scoping and validation thinking in later independent projects."], ["Evidence boundary", "This case demonstrates structured learning and task completion. Cross-functional delivery, staged release, growth and commercialisation are learned frameworks—not claimed outcomes from Tencent’s live business."]],
      metrics: [["61/61", "tasks completed"], ["29/29", "foundation"], ["32/32", "advanced"]],
      image: "/tencent-pm-banner.png",
      process: {
        title: "The product loop, from discovery to sustained value",
        intro: "Each stage answers a different question. Green labels link to evidence already applied in personal projects; blue labels mark methods learned and still awaiting real business validation.",
        conclusion: "A product manager’s value is not simply proposing features. It is making evidence-based trade-offs across user value, business goals, delivery cost and long-term direction—and moving the solution through a complete validation loop.",
        steps: [
          { title: "Discover", question: "Where does the real friction occur?", method: "Combine interviews, contextual observation, behavioural data and market research to separate stated requests from the problem people actually experience.", evidence: [{ label: "Rescue Ducks · learner tests", status: "applied", href: "/en/projects/rescue-ducks" }] },
          { title: "Define", question: "Who needs what, and in which context?", method: "Validate the demand, then define the audience, core scenario, positioning, problem essence and explicit non-goals.", evidence: [{ label: "Rescue Ducks · MVP boundary", status: "applied", href: "/en/projects/rescue-ducks" }, { label: "Spoken English Collector · two-mode boundary", status: "applied", href: "/en/projects/spoken-english-collector" }] },
          { title: "Prioritise", question: "Why should this come first?", method: "Balance user value, business value, core metrics, delivery cost and risk to set the release goal and requirement order.", evidence: [{ label: "Portfolio · information priority", status: "applied", href: "/en/projects/portfolio" }] },
          { title: "Design & deliver", question: "How does a decision become a shippable solution?", method: "Express the solution through product architecture, interaction and prototypes, while understanding engineering, testing, operations readiness and release checks.", evidence: [{ label: "Portfolio · independent delivery", status: "applied", href: "/en/projects/portfolio" }, { label: "Cross-functional delivery · learned framework", status: "framework" }] },
          { title: "Validate", question: "How do we know the release worked?", method: "Use feedback, staged release, A/B tests, core metrics and anomaly monitoring to determine whether the hypothesis holds.", evidence: [{ label: "Rescue Ducks · feedback iteration", status: "applied", href: "/en/projects/rescue-ducks" }, { label: "Spoken English Collector · automated tests", status: "applied", href: "/en/projects/spoken-english-collector" }, { label: "Staged release & A/B · learned framework", status: "framework" }] },
          { title: "Operate & evolve", question: "How can value remain sustainable?", method: "Iterate around a north-star metric, user lifecycle, growth, commercialisation and regular review.", evidence: [{ label: "Data operations & commercialisation · learned framework", status: "framework" }] },
        ],
      },
      gallery: [{ src: "/tencent-foundation.png", alt: "Tencent Future Product Manager foundation certificate", width: 750, height: 1334 }, { src: "/tencent-advanced.png", alt: "Tencent Future Product Manager advanced certificate", width: 750, height: 1334 }],
    },
    portfolio: { status: "INDEPENDENT AI BUILD · 2026", title: "Personal portfolio", lead: "Using a working website to rethink how recruiters understand me.", summary: "Built from the need to recognise role-fit evidence quickly, the site reframes education, data, user testing and zero-to-one work through bilingual information architecture, case storytelling, responsive implementation and deployment.", sections: [["Real problem & user task", "Recruiters need to judge role fit quickly, but a one-page resume cannot carry product decisions, iteration and personal perspective; many portfolios simply become longer, harder-to-scan resumes."], ["Product goal & success criterion", "Help visitors recognise positioning, core projects and experience range within 20–30 seconds, then continue into decision process and real evidence."], ["Information priority & scope", "The hero keeps a general product-manager position, projects lead as evidence, and work, education, awards and About explain capability sources. The first version excludes a blog, login, CMS, a full photo wall and unverified outcomes."], ["Bilingual information architecture", "Chinese and English routes share one typed content model, and language switching preserves page context. Four projects have dedicated case pages while the homepage supports rapid scanning."], ["Independent delivery & quality checks", "AI coding supported requirement framing, prototyping, frontend implementation, keyboard and touch interactions, responsive adaptation and private deployment, verified through production builds and route checks."], ["Feedback & ongoing iteration", "Version history remains recoverable, and real viewing feedback guides image performance, information density, layout and interaction. Visual improvements are described as changes, not recruiter-conversion outcomes."]], metrics: [["2", "languages"], ["4", "project profiles"], ["1", "responsive experience"]], image: "/hero-chelsea.png" },
  },
};
