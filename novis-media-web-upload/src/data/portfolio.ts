export interface VideoItem {
  id: string;
  title: string;
  category: 'UGC Ad' | 'AI Ad';
  aspectRatio: '9:16' | '16:9';
  client: string;
  metric: string;
  hook: string;
  videoType: 'local' | 'youtube';
  src: string;
  youtubeId?: string;
  poster?: string;
  isPlaceholder?: boolean;
  slug?: string;
}

export const REAL_PORTFOLIO_ITEMS: VideoItem[] = [
  {
    id: 'pillow-problem-solution',
    title: 'UGC Demo — Ergonomic Pillow Problem-Solution',
    category: 'UGC Ad',
    aspectRatio: '9:16',
    client: 'Concept Demo — Health & Sleep Category',
    metric: 'Direct-response problem-solution hook',
    hook: 'If you wake up with neck stiffness, your pillow is actively ruining your posture.',
    videoType: 'youtube',
    src: 'https://youtube.com/shorts/NT3kKDdtXr0',
    youtubeId: 'NT3kKDdtXr0',
    poster: '/thumbnails/yt-pillow-demo.jpg',
    slug: 'ergonomic-pillow-ugc-concept',
  },
  {
    id: 'stop-scrolling-hook',
    title: 'UGC Hook Demo — Pattern Interrupt',
    category: 'UGC Ad',
    aspectRatio: '9:16',
    client: 'Demo / Spec Creative',
    metric: 'Sub-1s thumb-stop hook architecture',
    hook: 'STOP SCROLLING. This single mistake is costing you thousands every week.',
    videoType: 'youtube',
    src: 'https://youtube.com/shorts/6ZkDaIPB9Ho',
    youtubeId: '6ZkDaIPB9Ho',
    poster: '/thumbnails/yt-stop-scrolling.jpg',
    slug: 'pattern-interrupt-ugc-hook',
  },
  {
    id: 'skincare-routine-demo',
    title: 'UGC Demo — Skincare Routine Agitation',
    category: 'UGC Ad',
    aspectRatio: '9:16',
    client: 'Concept Demo — Skincare Category',
    metric: 'Shot in native 9:16 UGC creator style',
    hook: 'Stop buying 10-step routines when this one active ingredient actually works.',
    videoType: 'youtube',
    src: 'https://youtube.com/shorts/0U8DzgeOoDE',
    youtubeId: '0U8DzgeOoDE',
    poster: '/thumbnails/yt-minimalist.jpg',
    slug: 'skincare-routine-ugc-concept',
  },
  {
    id: 'haute-jewelry-spec',
    title: 'AI Ad Concept — Haute Jewelry Showcase',
    category: 'AI Ad',
    aspectRatio: '16:9',
    client: 'Concept Demo — Luxury Category',
    metric: 'Cinematic 16:9 generative AI spot',
    hook: 'Crafted with celestial light. The gold collection reimagined through AI motion.',
    videoType: 'youtube',
    src: 'https://youtu.be/J3yUmglE5Jo',
    youtubeId: 'J3yUmglE5Jo',
    poster: '/thumbnails/yt-jewelry.jpg',
    slug: 'haute-jewelry-ai-concept',
  },
  {
    id: 'coffee-taste-test-demo',
    title: 'UGC Demo — Specialty Cold Brew Ad',
    category: 'UGC Ad',
    aspectRatio: '9:16',
    client: 'Concept Demo — Coffee & Beverage',
    metric: 'Blind taste-test creator framework',
    hook: 'Can instant specialty coffee rival a fresh cafe brew? We put it to a blind taste test.',
    videoType: 'youtube',
    src: 'https://youtube.com/shorts/fezbEN5sd70',
    youtubeId: 'fezbEN5sd70',
    poster: '/thumbnails/yt-fezb.jpg',
    slug: 'coffee-taste-test-ugc-ad',
  },
  {
    id: 'coffee-morning-reel-demo',
    title: 'UGC Demo — Morning Routine Coffee Reel',
    category: 'UGC Ad',
    aspectRatio: '9:16',
    client: 'Concept Demo — Coffee & Beverage',
    metric: 'Native organic short-form pacing',
    hook: 'The single morning mistake 90% of iced coffee drinkers make before 9 AM.',
    videoType: 'youtube',
    src: 'https://youtube.com/shorts/hQptSlTYVw0',
    youtubeId: 'hQptSlTYVw0',
    poster: '/thumbnails/yt-hqpt.jpg',
    slug: 'coffee-morning-routine-reel',
  },
];

export const PLACEHOLDER_ITEMS: VideoItem[] = [
  {
    id: 'placeholder-1',
    title: 'DTC Beverage Brand — Viral Unboxing',
    category: 'UGC Ad',
    aspectRatio: '9:16',
    client: 'Reserved Cohort Slot',
    metric: 'Available Founding Partner Slot',
    hook: 'Creator unboxing and immediate taste test reaction.',
    videoType: 'local',
    src: '',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-2',
    title: 'Clean Beauty — Dermatologist Review',
    category: 'UGC Ad',
    aspectRatio: '9:16',
    client: 'Reserved Cohort Slot',
    metric: 'Available Founding Partner Slot',
    hook: 'Authority figure breakdown and clinical validation.',
    videoType: 'local',
    src: '',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-3',
    title: 'AI Footwear Commercial — Impossible Worlds',
    category: 'AI Ad',
    aspectRatio: '9:16',
    client: 'Reserved Cohort Slot',
    metric: 'Available Founding Partner Slot',
    hook: 'Surreal visual environments generated purely in AI.',
    videoType: 'local',
    src: '',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-4',
    title: 'Fintech App — POV Lifestyle Hook',
    category: 'UGC Ad',
    aspectRatio: '9:16',
    client: 'Reserved Cohort Slot',
    metric: 'Available Founding Partner Slot',
    hook: 'Relatable financial anxiety solved in 15 seconds.',
    videoType: 'local',
    src: '',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-5',
    title: 'Luxury Fragrance — Synthetic Macro Motion',
    category: 'AI Ad',
    aspectRatio: '9:16',
    client: 'Reserved Cohort Slot',
    metric: 'Available Founding Partner Slot',
    hook: 'Sensory liquid physics rendered with proprietary AI workflows.',
    videoType: 'local',
    src: '',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-6',
    title: 'Performance Apparel — Generative Motion',
    category: 'AI Ad',
    aspectRatio: '9:16',
    client: 'Reserved Cohort Slot',
    metric: 'Available Founding Partner Slot',
    hook: 'The future of technical apparel showcased in dynamic generative environments.',
    videoType: 'local',
    src: '',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-7',
    title: 'Home & Wellness — Problem-Solution Concept',
    category: 'UGC Ad',
    aspectRatio: '9:16',
    client: 'Reserved Cohort Slot',
    metric: 'Available Founding Partner Slot',
    hook: 'Direct-response home improvement before-and-after demonstration.',
    videoType: 'local',
    src: '',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-8',
    title: 'SaaS Mobile App — Screen Capture & POV',
    category: 'UGC Ad',
    aspectRatio: '9:16',
    client: 'Reserved Cohort Slot',
    metric: 'Available Founding Partner Slot',
    hook: 'High-speed workflow demonstration and user reaction.',
    videoType: 'local',
    src: '',
    isPlaceholder: true,
  },
];

export const ALL_PORTFOLIO_ITEMS = [...REAL_PORTFOLIO_ITEMS, ...PLACEHOLDER_ITEMS];

export const STATS_DATA = [
  { value: 'Founder-Led', label: 'On Every Project', sub: 'Direct creative oversight, zero account executive layers' },
  { value: '10–14 Days', label: 'Sprint Turnaround', sub: 'Rapid concepting, scripting, and final delivery' },
  { value: '100% Rights', label: 'Commercial Ownership', sub: 'Full raw files and perpetuity ad usage rights' },
  { value: 'Multi-Format', label: 'UGC, AI & Paid Media', sub: 'Engineered for Meta, Google & YouTube Shorts' },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover & Deconstruct',
    description: 'We audit your account, dissect customer objections, analyze competitors, and map out 10 distinct angle hypotheses with proven hook frameworks.',
    deliverables: ['Creative Audit & Angle Matrix', '10 Script Concepts', 'Creator Matching Matrix'],
  },
  {
    number: '02',
    title: 'Create & Synthesize',
    description: 'Our in-house production engine shoots native UGC and generates hyper-realistic AI variations. Every frame is engineered for retention, sound-on engagement, and brand credibility.',
    deliverables: ['Native 4K UGC & AI Footage', 'Dynamic Subtitles & Pacing', 'Multiple Hook Variations per Concept'],
  },
  {
    number: '03',
    title: 'Scale & Iterate',
    description: 'We launch variations, isolate winning hooks, cut cost-per-acquisition, and double down on scalable creative iterations so your ad spend never fatigues.',
    deliverables: ['Weekly Metric Performance Review', 'Fatigue-Proof Creative Refreshes', 'Landing Page Alignment Recommendations'],
  },
];

export const FAQS = [
  {
    question: 'How do you combine UGC with AI-generated video ads?',
    answer: 'We deploy both depending on what drives the highest engagement and lowest acquisition cost for your product. For personal care, health, and apparel, human UGC builds undeniable social proof and trust. For high-concept, luxury, or impossible product demos, AI lets us generate cinematic visual hooks in days with zero physical studio costs. In many winning campaigns, we fuse real UGC creator intros with hyper-polished AI macro product shots.',
  },
  {
    question: 'How fast will we receive our first creative batch?',
    answer: 'From the day your onboarding brief is finalized and products are logged, our standard delivery window is 10 to 14 business days. You receive full concept batches ready for Meta, TikTok, and YouTube Shorts testing, each cut with multiple hook variations.',
  },
  {
    question: 'Do we own the full licensing and usage rights to all videos?',
    answer: 'Yes, 100%. Once delivered, your brand holds full commercial usage rights in perpetuity. You can run them across paid social (Meta, TikTok, Shorts, Pinterest), organic feeds, landing page hero sections, and email marketing funnels.',
  },
  {
    question: 'How does working with a founder-led studio benefit my brand?',
    answer: 'Unlike legacy agencies where your account is handed off to junior coordinators after the pitch, at Novis Media you work directly with our founding creative team. Every script, hook, and iteration gets direct founder-level attention, rapid turnaround times, and complete transparency without agency bureaucracy.',
  },
  {
    question: 'What types of brands are a good fit to partner with Novis?',
    answer: 'We partner with DTC e-commerce brands, digital products, and creators who understand that creative testing is the single biggest lever in modern advertising algorithms.',
  },
];