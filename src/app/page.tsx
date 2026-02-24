import Link from 'next/link';
import { categories, company, products } from '@/lib/site-data';

const metrics = [
  { value: '1976', label: '创立时间，持续深耕光学领域' },
  { value: '100+', label: '产品规格与组合能力' },
  { value: 'ISO流程', label: '严格质量控制与检测标准' },
  { value: '全球客户', label: '覆盖医疗、教学与科研场景' },
];

const capabilities = [
  {
    title: '精密工艺',
    desc: '高精度研磨与工序管控，保障镜片一致性与长期稳定性。',
  },
  {
    title: '材料与结构优化',
    desc: '选用稳定光学材料，持续优化结构细节与耐用表现。',
  },
  {
    title: '质量检测体系',
    desc: '多维检测流程，关键参数逐项核验，确保出厂可靠。',
  },
  {
    title: '快速响应',
    desc: '支持批量与小批量定制，快速对接客户交付节奏。',
  },
];

const processSteps = [
  ['01', '需求沟通', '确认应用场景、规格参数与数量。'],
  ['02', '方案建议', '输出配置建议与材料工艺说明。'],
  ['03', '生产执行', '按质量控制节点推进并同步进度。'],
  ['04', '交付支持', '跟进反馈并持续优化配套方案。'],
];

function ProductThumb({ name }: { name: string }) {
  return (
    <div className="product-thumb" aria-hidden="true">
      <div className="product-thumb-ring" />
      <span>{name}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home">
            {company.shortName}
          </a>
          <nav className="nav">
            <a href="#about">关于我们</a>
            <a href="#products">产品中心</a>
            <a href="#capabilities">能力优势</a>
            <a href="#process">合作流程</a>
            <a href="#news">资讯动态</a>
            <a href="#knowledge">产品知识</a>
            <a href="#contact">联系我们</a>
          </nav>
          <a className="btn btn-small" href="#contact">
            获取报价
          </a>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-main">
            <p className="eyebrow">专业光学仪器制造商 · 始于 {company.founded}</p>
            <h1>以精密光学，支持更专业的验光体验</h1>
            <p className="lead">
              面向眼科机构、医院、教学实验与科研场景，提供验光镜片箱、试镜架、光学镜片与放大镜等产品方案，并支持定制化交付。
            </p>
            <div className="hero-actions">
              <a className="btn" href="#products">
                浏览产品
              </a>
              <a className="btn btn-ghost" href="#contact">
                联系我们
              </a>
            </div>
            <div className="hero-tags">
              {categories.map((c) => (
                <span key={c.id}>{c.name}</span>
              ))}
            </div>
          </div>

          <aside className="hero-panel">
            <h3>核心产品矩阵</h3>
            <p>完整覆盖验光及光学实验需求，支持规格扩展与稳定供货。</p>
            <div className="pill-grid">
              <span>医疗验光</span>
              <span>教学实验</span>
              <span>科研支持</span>
              <span>OEM/ODM</span>
            </div>
            <div className="hero-kpi-grid">
              <div>
                <strong>40+</strong>
                <small>年行业沉淀</small>
              </div>
              <div>
                <strong>100+</strong>
                <small>规格组合</small>
              </div>
              <div>
                <strong>7-14天</strong>
                <small>典型交付周期</small>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="metrics">
        <div className="container metrics-grid">
          {metrics.map((m) => (
            <article key={m.value}>
              <h3>{m.value}</h3>
              <p>{m.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about-grid">
          <div>
            <div className="section-head">
              <h2>关于华辉光学</h2>
            </div>
            <p>
              {company.name}
              专注验光设备与光学镜片制造，依托多年精密研磨经验与标准化检测流程，持续为客户提供稳定一致的产品品质。
            </p>
            <p>
              我们以需求驱动为核心，持续优化结构设计与材料选择，支持多规格与定制化开发，帮助客户提升工作效率与使用体验。
            </p>
            <div className="about-points">
              <div>
                <strong>精密制造</strong>
                <span>先进研磨与装配流程</span>
              </div>
              <div>
                <strong>稳定品质</strong>
                <span>全流程检测与抽检机制</span>
              </div>
              <div>
                <strong>协同服务</strong>
                <span>需求评估与方案建议</span>
              </div>
            </div>
          </div>
          <aside className="about-panel">
            <h3>制造与服务覆盖</h3>
            <ul>
              <li>验光镜片箱与镜片组件</li>
              <li>试镜架与辅助验光器材</li>
              <li>光学镜片与特殊光学元件</li>
              <li>放大镜与精密观察设备</li>
            </ul>
            <a href="#contact" className="text-link">
              获取产品目录 →
            </a>
          </aside>
        </div>
      </section>

      <section id="products" className="section">
        <div className="container">
          <div className="section-head between">
            <div>
              <h2>产品中心</h2>
              <p>按产品类目结构化展示，支持扩展为多语种与多市场 SEO 页面。</p>
            </div>
            <p className="section-note">产品详情页已独立可索引</p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <article key={category.id} className="category-card">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </article>
            ))}
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <ProductThumb name={product.name} />
                <p className="chip">{categories.find((c) => c.id === product.category)?.name}</p>
                <h3>{product.name}</h3>
                <p className="summary">{product.summary}</p>
                <ul>
                  {product.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href={`/products/${product.slug}`}>查看产品详情 →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="section">
        <div className="container">
          <div className="section-head">
            <h2>能力优势</h2>
          </div>
          <div className="capability-grid">
            {capabilities.map((c) => (
              <article key={c.title} className="capability-card">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section">
        <div className="container">
          <div className="section-head">
            <h2>合作流程</h2>
          </div>
          <div className="process-grid">
            {processSteps.map(([no, title, desc]) => (
              <article key={no} className="process-step">
                <span>{no}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="section">
        <div className="container updates-grid">
          <div>
            <div className="section-head">
              <h2>资讯动态</h2>
            </div>
            <p>可展示新品发布、展会活动、行业趋势与公司公告。</p>
          </div>
          <div className="updates-card">
            <article className="updates-item">
              <span>2026.02</span>
              <h3>新品发布占位</h3>
              <p>在这里展示新品参数与应用升级内容。</p>
            </article>
            <article className="updates-item">
              <span>2026.01</span>
              <h3>展会活动占位</h3>
              <p>在这里展示参展计划与现场交流活动信息。</p>
            </article>
          </div>
        </div>
      </section>

      <section id="knowledge" className="section">
        <div className="container">
          <div className="section-head">
            <h2>产品知识</h2>
          </div>
          <div className="knowledge-grid">
            <article>
              <h3>镜片度数与适配</h3>
              <p>介绍度数范围、标准与应用场景建议。</p>
            </article>
            <article>
              <h3>试镜架调节技巧</h3>
              <p>沉淀调节方式与使用注意事项，提升验光效率。</p>
            </article>
            <article>
              <h3>光学镜片材料选择</h3>
              <p>说明不同材料差异与典型应用环境。</p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container contact-grid">
          <div className="contact-box">
            <h2>联系我们</h2>
            <div className="contact-list">
              <p>
                <span>电话</span>
                <strong>{company.phone}</strong>
              </p>
              <p>
                <span>手机</span>
                <strong>{company.mobile}</strong>
              </p>
              <p>
                <span>邮箱</span>
                <strong>{company.email}</strong>
              </p>
              <p>
                <span>地址</span>
                <strong>{company.address}</strong>
              </p>
            </div>
          </div>
          <div className="contact-box emphasis">
            <h3>获取产品目录与报价</h3>
            <p>告诉我们应用场景、规格参数和数量，我们会给出更合适的配置建议。</p>
            <a className="btn" href={`mailto:${company.email}`}>
              发送需求邮件
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
