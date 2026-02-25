export type ProductCategory = {
  id: string;
  name: string;
  description: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory['id'];
  summary: string;
  featuredLine?: string;
  toneTag?: string;
  highlights: string[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  image?: string;
};

export type HomeCategoryFilter = {
  id: 'all' | ProductCategory['id'];
  name: string;
};

export const capabilityIcons = ['precision', 'material', 'quality', 'response'] as const;
export type CapabilityIcon = (typeof capabilityIcons)[number];

export type CapabilityItem = {
  id: string;
  title: string;
  desc: string;
  icon: CapabilityIcon;
};

export type NewsItem = {
  id: string;
  date: string;
  title: string;
  summary: string;
};

export type KnowledgeItem = {
  id: string;
  title: string;
  summary: string;
};

export const company = {
  name: '丹阳市华辉光学仪器有限公司',
  shortName: '华辉光学仪器',
  domain: 'https://www.huahuioptics.com',
  founded: '1976',
  phone: '0511-86578136',
  mobile: '13626262510',
  email: '88020440@qq.com',
  address: '江苏省丹阳市开发区金陵西路工业园',
};

export const categories: ProductCategory[] = [
  { id: 'trial-lens', name: '验光镜片箱', description: '标准与定制镜片组合，覆盖常规验光需求。' },
  { id: 'trial-frames', name: '试镜架', description: '多维调节结构，提升佩戴舒适与精准度。' },
  { id: 'optical-lens', name: '光学镜片', description: '平面、球面、柱面、棱镜等全系列。' },
  { id: 'magnifier', name: '放大镜', description: '手持、台式、头戴式等多场景应用。' },
];

export const homeCategoryFilters: HomeCategoryFilter[] = [
  { id: 'all', name: '全部' },
  ...categories.map((category) => ({ id: category.id, name: category.name })),
];

export const products: Product[] = [
  {
    id: 'jp-266',
    slug: 'jp-266-trial-lens-set',
    name: 'JP-266 验光镜片箱',
    category: 'trial-lens',
    summary: '适合大型机构，覆盖完整度数与滤光片组合。',
    featuredLine: '266 片专业组合，适配医院与教学高频验光流程。',
    toneTag: '医疗级稳定性',
    highlights: ['266片组合', '高精度研磨', '可选定制配置'],
    seoTitle: 'JP-266 验光镜片箱｜266片专业组合｜华辉光学仪器',
    seoDescription:
      'JP-266 验光镜片箱适用于医院、眼科机构与教学实验，提供266片专业镜片组合，支持定制配置与稳定交付。',
    keywords: ['JP-266 验光镜片箱', '266片验光镜片箱', '验光设备厂家'],
  },
  {
    id: 'jc-158',
    slug: 'jc-158-trial-lens-set',
    name: 'JC-158 验光镜片箱',
    category: 'trial-lens',
    summary: '轻量化配置，适用于中小型验光场景。',
    featuredLine: '兼顾便携与精度，适配门诊筛查及日常验光。',
    toneTag: '高频门诊适配',
    highlights: ['158片组合', '便携结构', '常规规格'],
    seoTitle: 'JC-158 验光镜片箱｜轻量化验光配置｜华辉光学仪器',
    seoDescription:
      'JC-158 验光镜片箱面向中小型验光应用，具备便携结构与稳定光学参数，适合筛查与日常验光场景。',
    keywords: ['JC-158 验光镜片箱', '便携验光镜片箱', '验光镜片箱厂家'],
  },
  {
    id: 'hh-368',
    slug: 'hh-368-trial-frame',
    name: 'HH-368 试镜架',
    category: 'trial-frames',
    summary: '专业型试镜架，多维度调节适配不同面型。',
    featuredLine: '多维精调结构，让复检和配镜流程更稳定。',
    toneTag: '多维精调',
    highlights: ['多维调节', '高强度材质', '舒适佩戴'],
    seoTitle: 'HH-368 试镜架｜专业多维调节试镜架｜华辉光学仪器',
    seoDescription:
      'HH-368 试镜架支持多维度精准调节，适配不同脸型与验光流程，兼顾稳定性与佩戴舒适度。',
    keywords: ['HH-368 试镜架', '专业试镜架', '验光试镜架厂家'],
  },
  {
    id: 'hh-128',
    slug: 'hh-128-half-frame-trial-frame',
    name: 'HH-128 半框试镜架',
    category: 'trial-frames',
    summary: '轻量设计，适合快速验光与筛查应用。',
    featuredLine: '轻量半框与双槽结构，适配快节奏筛查工位。',
    toneTag: '轻量半框',
    highlights: ['轻质合金', '双槽结构', '快速切换'],
    seoTitle: 'HH-128 半框试镜架｜轻量快速验光｜华辉光学仪器',
    seoDescription: 'HH-128 半框试镜架采用轻质合金与双槽结构，适用于高频验光与快速筛查场景。',
    keywords: ['HH-128 半框试镜架', '半框试镜架', '快速验光设备'],
  },
  {
    id: 'optical-flat',
    slug: 'optical-flat-lens-series',
    name: '平面镜片系列',
    category: 'optical-lens',
    summary: '稳定平整度与光学参数，支持多规格定制。',
    featuredLine: '高透过率与一致平整度，满足工业与科研批量应用。',
    toneTag: '参数一致性',
    highlights: ['高透光率', '多直径规格', '可定制'],
    seoTitle: '平面镜片系列｜高透光率光学镜片｜华辉光学仪器',
    seoDescription: '华辉平面镜片系列具备稳定平整度与高透光率，支持不同直径与参数定制，适用于多类光学应用。',
    keywords: ['平面镜片', '光学平面镜片', '光学镜片定制'],
  },
  {
    id: 'optical-prism',
    slug: 'optical-prism-series',
    name: '棱镜系列',
    category: 'optical-lens',
    summary: '适用于斜视矫正与视觉训练应用。',
    featuredLine: '高精度棱镜参数控制，支持训练与矫正场景。',
    toneTag: '训练矫正场景',
    highlights: ['高精度研磨', '多方向选择', '稳定参数'],
    seoTitle: '棱镜系列｜斜视矫正与视觉训练镜片｜华辉光学仪器',
    seoDescription: '棱镜系列支持斜视矫正和视觉训练应用，提供高精度研磨工艺和稳定参数表现。',
    keywords: ['棱镜镜片', '视觉训练镜片', '斜视矫正光学产品'],
  },
  {
    id: 'magnifier-hf-100',
    slug: 'hf-100l-led-magnifier',
    name: 'HF-100L LED 放大镜',
    category: 'magnifier',
    summary: '适合弱光环境，提供稳定清晰的观察体验。',
    featuredLine: '弱光增强照明与多倍率组合，提升细节识别效率。',
    toneTag: '弱光增强',
    highlights: ['LED照明', '多倍率选择', '耐用结构'],
    seoTitle: 'HF-100L LED 放大镜｜弱光清晰观察｜华辉光学仪器',
    seoDescription: 'HF-100L LED 放大镜适用于弱光精细观察，支持多倍率选择，结构耐用，适合工业与实验场景。',
    keywords: ['HF-100L 放大镜', 'LED 放大镜', '工业观察放大镜'],
  },
  {
    id: 'magnifier-hf-td',
    slug: 'hf-td-desktop-magnifier',
    name: 'HF-TD 台式放大镜',
    category: 'magnifier',
    summary: '台式支架设计，适合长时间精细观察。',
    featuredLine: '稳固台架与可调角结构，适合持续精检工位。',
    toneTag: '长时精检',
    highlights: ['可调角度', '稳固支架', '多场景适配'],
    seoTitle: 'HF-TD 台式放大镜｜稳固支架精细观察｜华辉光学仪器',
    seoDescription: 'HF-TD 台式放大镜采用稳固支架与可调结构，支持长时间精细观察，适用于检测与维修工位。',
    keywords: ['HF-TD 台式放大镜', '台式放大镜', '精细观察设备'],
  },
];

export const capabilityItems: CapabilityItem[] = [
  {
    id: 'precision',
    title: '精密工艺',
    desc: '高精度研磨与工序管控，保障镜片一致性。',
    icon: 'precision',
  },
  {
    id: 'material',
    title: '材料与结构优化',
    desc: '选用稳定光学材料，优化产品结构与耐用性。',
    icon: 'material',
  },
  {
    id: 'quality',
    title: '质量检测体系',
    desc: '多维检测流程，确保出厂品质与可靠性。',
    icon: 'quality',
  },
  {
    id: 'response',
    title: '快速协同响应',
    desc: '支持批量与小批量定制，阶段节点透明可追踪。',
    icon: 'response',
  },
];

export const newsItems: NewsItem[] = [
  {
    id: '2024-07',
    date: '2024.07',
    title: '验光产品线完成新一轮规格升级',
    summary: '覆盖医院与教学场景的核心型号已完成参数与交付策略更新。',
  },
  {
    id: '2024-05',
    date: '2024.05',
    title: '海外项目协同交付流程优化',
    summary: '资料输出、包装规范与节点对接机制完成标准化，提升跨境项目效率。',
  },
];

export const knowledgeItems: KnowledgeItem[] = [
  {
    id: 'lens-range',
    title: '镜片参数匹配方法',
    summary: '从度数范围、精度等级到应用场景，建立可执行的选型路径。',
  },
  {
    id: 'trial-frame',
    title: '试镜架调节关键点',
    summary: '通过结构调节顺序与标准动作，缩短验光流程并提升一致性。',
  },
  {
    id: 'materials',
    title: '光学材料选型逻辑',
    summary: '结合预算、耐用性和透过率目标，快速筛选最优材料组合。',
  },
];

export const productMap = new Map(products.map((product) => [product.slug, product]));
