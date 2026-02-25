import Image from 'next/image';
import Link from 'next/link';
import ProductFilterGrid from '@/components/home/product-filter-grid';
import { capabilityItems, categories, company, newsItems, products } from '@/lib/site-data';

const heroTags = ['验光镜片箱', '试镜架', '光学镜片', '放大镜'];

const proofItems = [
  ['40+ 年', '制造沉淀', '长期光学工艺经验'],
  ['7-14 天', '常规交付', '节点透明，排期可追踪'],
  ['ISO 流程', '质检体系', '关键参数多轮复核'],
  ['OEM / ODM', '协同支持', '兼容阶段性扩单与定制'],
] as const;

const metrics = [
  { value: '1976', label: '创立年份', note: '持续深耕光学制造' },
  { value: '100+', label: '规格组合', note: '覆盖医疗、教学和工业应用' },
  { value: '99.5%', label: '批次稳定性', note: '关键参数多轮检测复核' },
  { value: '48h', label: '方案响应', note: '需求明确后快速反馈配置建议' },
];

const processSteps = [
  ['01', '需求定义', '确认场景、参数范围与交付节点，形成可执行需求清单。'],
  ['02', '方案确认', '输出配置建议、样品路径和风险边界，确保采购决策可控。'],
  ['03', '制造与质检', '按标准工艺推进，关键工序留痕并进行多轮参数复核。'],
  ['04', '交付与优化', '完成交付并复盘使用反馈，为下一阶段协同提供依据。'],
] as const;

const faqs = [
  {
    q: '是否支持小批量试单或打样？',
    a: '支持。可根据应用场景先做小批量验证，再逐步扩大采购规模。',
  },
  {
    q: '定制产品如何评估交期？',
    a: '我们会基于规格复杂度、数量与工艺路径给出明确排期，并同步关键节点。',
  },
  {
    q: '是否可提供产品目录和参数建议？',
    a: '可以。提供用途、预算区间与交付目标后，我们将给出匹配型号与配置建议。',
  },
  {
    q: '是否可面向海外市场供货？',
    a: '支持。可配合多语言资料输出与出口包装要求，便于海外项目落地。',
  },
];

function CapabilityGlyph({ icon }: { icon: (typeof capabilityItems)[number]['icon'] }) {
  if (icon === 'precision') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16M4 12h16M4 17h10" />
      </svg>
    );
  }

  if (icon === 'material') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" />
      </svg>
    );
  }

  if (icon === 'quality') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 12l4 4L19 6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 12h18M12 3v18" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        跳到主要内容
      </a>

      <header className="site-header" id="home">
        <div className="container header-inner">
          <a className="logo" href="#home" aria-label={`${company.shortName} 首页`}>
            <Image src="/brand/new-logo.svg" alt={`${company.shortName} logo`} className="logo-mark" width={220} height={72} priority />
          </a>

          <nav className="nav" aria-label="主导航">
            <a href="#products">产品中心</a>
            <a href="#capabilities">能力优势</a>
            <a href="#about">关于我们</a>
            <a href="#process">合作流程</a>
            <a href="#news">资讯动态</a>
            <a href="#faq">常见问题</a>
            <a href="#contact">联系我们</a>
          </nav>

          <div className="header-actions">
            <a className="btn btn-ghost" href="#contact">
              获取报价
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero hero-premium">
          <div className="container hero-grid">
            <div className="hero-copy fade-up">
              <p className="kicker">精密光学制造伙伴 · SINCE {company.founded}</p>
              <h1 className="display-title">用可追溯的参数体系，交付更稳定的验光与光学产品</h1>
              <p className="lead lead-strong">
                面向医疗、教学、科研与工业观察场景，华辉以一致化工艺和透明交付机制，
                让每一次采购都具备长期协同价值。
              </p>

              <div className="hero-actions">
                <a className="btn" href="#products">
                  浏览产品矩阵
                </a>
                <a className="btn btn-ghost" href="#contact">
                  获取目录与方案
                </a>
              </div>

              <div className="hero-tags">
                {heroTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="hero-stage fade-scale">
              <article className="glass-card highlight-border float-soft">
                <p className="kicker">核心承诺</p>
                <h3 className="card-title">覆盖全流程的品质与交付管理</h3>
                <p>从镜片研磨、装配到出厂复核，关键参数全程留痕，确保批次稳定与交付可预期。</p>
              </article>

              <div className="proof-strip">
                {proofItems.map(([value, label, detail]) => (
                  <article key={value} className="proof-item fade-up">
                    <strong>{value}</strong>
                    <span>{label}</span>
                    <small>{detail}</small>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="metrics">
          <div className="container metrics-grid stagger-in">
            {metrics.map((metric, index) => (
              <article key={metric.value} className="metric-card fade-up" style={{ animationDelay: `${index * 80}ms` }}>
                <p className="kicker">{metric.label}</p>
                <h3>{metric.value}</h3>
                <p>{metric.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="products" className="section products">
          <div className="container">
            <div className="section-head" data-animate="line">
              <div>
                <p className="kicker">核心业务</p>
                <h2 className="section-title">产品中心</h2>
                <p className="section-summary">按产品结构与应用场景快速定位型号，支持参数化定制与扩展协作。</p>
              </div>
              <p className="section-note">支持 OEM / ODM 与阶段性扩单</p>
            </div>

            <div className="category-grid stagger-in">
              {categories.map((category, index) => (
                <article key={category.id} className="category-card fade-scale" style={{ animationDelay: `${index * 80}ms` }}>
                  <h3 className="card-title">{category.name}</h3>
                  <p>{category.description}</p>
                </article>
              ))}
            </div>

            <ProductFilterGrid categories={categories} products={products} />
          </div>
        </section>

        <section id="capabilities" className="section section-soft">
          <div className="container">
            <div className="section-head" data-animate="line">
              <div>
                <p className="kicker">制造能力</p>
                <h2 className="section-title">让品质与效率同时可控</h2>
                <p className="section-summary">围绕“参数稳定、节点明确、沟通高效”构建可持续合作体验。</p>
              </div>
            </div>

            <div className="capability-grid stagger-in">
              {capabilityItems.map((item, index) => (
                <article key={item.id} className="capability-card fade-up" style={{ animationDelay: `${index * 80}ms` }}>
                  <div className="capability-icon">
                    <CapabilityGlyph icon={item.icon} />
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container about-shell">
            <div className="about-intro fade-up">
              <p className="kicker">品牌信任</p>
              <h2 className="section-title">关于华辉光学</h2>
              <p className="lead-strong">
                {company.name}
                坚持“参数可靠、交付可靠、服务可靠”的经营标准，以长期协同视角服务客户。
              </p>
              <p>我们以需求驱动推进产品配置与材料路径优化，帮助客户在预算、精度和交付之间做出更优决策。</p>
            </div>

            <div className="about-layout stagger-in">
              <div className="about-pillar">
                <article className="about-card fade-up" style={{ animationDelay: '0ms' }}>
                  <span className="about-index">01</span>
                  <h3 className="card-title">工艺稳定</h3>
                  <p>标准化流程 + 关键工序复核</p>
                </article>
                <article className="about-card fade-up" style={{ animationDelay: '80ms' }}>
                  <span className="about-index">02</span>
                  <h3 className="card-title">参数可追溯</h3>
                  <p>批次参数记录与抽检机制并行</p>
                </article>
                <article className="about-card fade-up" style={{ animationDelay: '160ms' }}>
                  <span className="about-index">03</span>
                  <h3 className="card-title">协同响应快</h3>
                  <p>需求明确后快速输出方案与排期</p>
                </article>
              </div>
              <article className="about-card about-card-coverage fade-scale" style={{ animationDelay: '240ms' }}>
                <p className="kicker">服务覆盖</p>
                <h3 className="card-title">制造与交付支持范围</h3>
                <div className="coverage-content">
                  <ul className="coverage-list">
                    <li>验光镜片箱与镜片组件</li>
                    <li>试镜架与辅助验光器材</li>
                    <li>光学镜片与特殊光学元件</li>
                    <li>放大镜与精密观察设备</li>
                  </ul>
                  <div className="coverage-cta">
                    <p>支持参数化定制与多产品协同采购。</p>
                    <a className="text-link" href="#contact">
                      获取产品目录 →
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="process" className="section section-soft">
          <div className="container">
            <div className="section-head" data-animate="line">
              <div>
                <p className="kicker">合作方法</p>
                <h2 className="section-title">从需求到交付的可执行路径</h2>
                <p className="section-summary">流程节点清晰、责任边界明确，确保项目按计划推进。</p>
              </div>
            </div>

            <div className="process-grid stagger-in">
              {processSteps.map(([no, title, desc], index) => (
                <article key={no} className="process-step fade-up" style={{ animationDelay: `${index * 80}ms` }}>
                  <span>{no}</span>
                  <h3 className="card-title">{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="news" className="section updates">
          <div className="container updates-grid">
            <div className="fade-up">
              <p className="kicker">专业动态</p>
              <h2 className="section-title">资讯更新</h2>
              <p className="section-summary">同步产品线升级、项目交付优化与市场协同信息。</p>
              <a className="text-link" href="#contact">
                订阅更新 →
              </a>
            </div>

            <div className="updates-card stagger-in">
              {newsItems.map((item, index) => (
                <article key={item.id} className="updates-item fade-up" style={{ animationDelay: `${index * 80}ms` }}>
                  <span>{item.date}</span>
                  <h3 className="card-title">{item.title}</h3>
                  <p>{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section section-soft">
          <div className="container">
            <div className="section-head" data-animate="line">
              <div>
                <p className="kicker">采购顾虑</p>
                <h2 className="section-title">常见问题</h2>
                <p className="section-summary">围绕交期、定制和协作方式，提前回答高频疑问。</p>
              </div>
            </div>

            <div className="faq-grid stagger-in">
              {faqs.map((item, index) => (
                <article key={item.q} className="faq-card fade-up" style={{ animationDelay: `${index * 80}ms` }}>
                  <h3 className="card-title">{item.q}</h3>
                  <p>{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div className="fade-up">
              <p className="kicker">合作入口</p>
              <h2 className="section-title">联系我们</h2>
              <p className="lead-strong">欢迎提交应用场景、目标参数与数量计划，我们将在 1 个工作日内反馈建议方案。</p>

              <div className="contact-list">
                <div>
                  <span>电话</span>
                  <strong>{company.phone}</strong>
                </div>
                <div>
                  <span>手机</span>
                  <strong>{company.mobile}</strong>
                </div>
                <div>
                  <span>邮箱</span>
                  <strong>{company.email}</strong>
                </div>
                <div>
                  <span>地址</span>
                  <strong>{company.address}</strong>
                </div>
              </div>
            </div>

            <form className="contact-form fade-scale" action="#" method="post">
              <div className="field">
                <label htmlFor="name">姓名</label>
                <input id="name" name="name" type="text" placeholder="请输入姓名" required />
              </div>
              <div className="field">
                <label htmlFor="org">公司/机构</label>
                <input id="org" name="org" type="text" placeholder="机构名称" />
              </div>
              <div className="field">
                <label htmlFor="email">邮箱</label>
                <input id="email" name="email" type="email" placeholder="name@example.com" required />
              </div>
              <div className="field">
                <label htmlFor="message">需求说明</label>
                <textarea id="message" name="message" placeholder="请描述产品需求、数量与交期" rows={4} required />
              </div>
              <button className="btn" type="submit">
                提交咨询
              </button>
              <p className="form-note">提交后我们会尽快与您联系。也可直接发邮件至 {company.email}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-col">
            <h3>{company.shortName}</h3>
            <p>专注光学产品与验光设备制造，为长期协同客户提供稳定可靠的制造支持。</p>
          </div>
          <div className="footer-col">
            <h4>快速导航</h4>
            <a href="#products">产品中心</a>
            <a href="#capabilities">能力优势</a>
            <a href="#news">资讯动态</a>
            <a href="#contact">联系我们</a>
          </div>
          <div className="footer-col">
            <h4>服务支持</h4>
            <Link href="/products/jp-266-trial-lens-set">产品示例页</Link>
            <a href="#knowledge">知识库</a>
            <a href={`mailto:${company.email}`}>商务邮箱</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {company.name} 版权所有
          </p>
        </div>
      </footer>
    </>
  );
}
