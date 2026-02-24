import Link from 'next/link';
import { categories, company, products } from '@/lib/site-data';

const metrics = [
  { value: '1976', label: '创立时间，持续深耕光学领域' },
  { value: '100+', label: '产品规格与组合能力' },
  { value: 'ISO流程', label: '严格质量控制与检测标准' },
  { value: '全球客户', label: '覆盖医疗、教学与科研场景' },
];

const capabilities = [
  { title: '精密工艺', desc: '高精度研磨与工序管控，保障镜片一致性。' },
  { title: '材料与结构优化', desc: '选用稳定光学材料，优化产品结构与耐用性。' },
  { title: '质量检测体系', desc: '多维检测流程，确保出厂品质与可靠性。' },
  { title: '快速响应', desc: '支持批量或小批量定制，快速对接交付需求。' },
];

const processSteps = [
  ['01', '需求沟通', '确认应用场景、规格与数量需求。'],
  ['02', '方案建议', '提供配置建议、材料与工艺说明。'],
  ['03', '生产执行', '严格质量控制与节点反馈。'],
  ['04', '交付支持', '持续跟进使用反馈与优化。'],
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home">{company.shortName}</a>
          <nav>
            <a href="#about">关于我们</a>
            <a href="#products">产品中心</a>
            <a href="#capabilities">能力优势</a>
            <a href="#news">资讯动态</a>
            <a href="#knowledge">产品知识</a>
            <a href="#contact">联系我们</a>
          </nav>
          <a className="btn btn-sm" href="#contact">获取报价</a>
        </div>
      </header>

      <section id="home" className="hero container">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">专业光学仪器制造商 · 始于 {company.founded}</p>
            <h1>以精密光学，支持更专业的验光体验</h1>
            <p className="lead">
              我们为眼科机构、医院与光学实验提供可靠的光学产品与器材解决方案，覆盖验光镜片箱、试镜架、光学镜片及放大镜等核心产品线。
            </p>
            <div className="actions">
              <a className="btn" href="#products">浏览产品</a>
              <a className="btn btn-ghost" href="#contact">联系我们</a>
            </div>
            <div className="hero-tags">
              {categories.map((c) => <span key={c.id}>{c.name}</span>)}
            </div>
          </div>
          <aside className="hero-panel">
            <h3>核心产品矩阵</h3>
            <p>完整覆盖验光及光学实验需求，支持定制规格与快速交付。</p>
            <div className="pill-grid">
              <span>医疗验光</span><span>教学实验</span><span>科研支持</span><span>OEM/ODM</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="metrics container">
        <div className="metrics-grid">
          {metrics.map((m) => (
            <article key={m.value}>
              <h3>{m.value}</h3>
              <p>{m.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section container">
        <div className="section-head"><h2>关于华辉光学</h2></div>
        <div className="about-grid">
          <div>
            <p>{company.name}专注验光设备与光学镜片制造，凭借多年精密研磨经验与完备检测流程，为客户提供稳定一致的产品品质。</p>
            <div className="about-points">
              <div><strong>精密制造</strong><span>先进研磨与装配流程</span></div>
              <div><strong>稳定品质</strong><span>全流程检测与抽检机制</span></div>
              <div><strong>协同服务</strong><span>需求评估与方案建议</span></div>
            </div>
          </div>
          <div className="about-panel">
            <h3>制造与服务覆盖</h3>
            <ul>
              <li>验光镜片箱与镜片组件</li>
              <li>试镜架与辅助验光器材</li>
              <li>光学镜片与特殊光学元件</li>
              <li>放大镜与精密观察设备</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="products" className="section container">
        <div className="section-head"><h2>产品中心</h2><p className="section-note">产品详情页支持独立 SEO 索引</p></div>
        <div className="category-grid">
          {categories.map((category) => (
            <article key={category.id} className="category-card"><h3>{category.name}</h3><p>{category.description}</p></article>
          ))}
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <p className="chip">{categories.find((c) => c.id === product.category)?.name}</p>
              <h3>{product.name}</h3>
              <p>{product.summary}</p>
              <ul>{product.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
              <Link href={`/products/${product.slug}`}>查看产品详情 →</Link>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section container">
        <div className="section-head"><h2>能力优势</h2></div>
        <div className="capability-grid">
          {capabilities.map((c) => <article key={c.title} className="capability-card"><h3>{c.title}</h3><p>{c.desc}</p></article>)}
        </div>
      </section>

      <section className="section container">
        <div className="section-head"><h2>合作流程</h2></div>
        <div className="process-grid">
          {processSteps.map(([num, t, d]) => <article key={num} className="process-step"><span>{num}</span><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </section>

      <section id="news" className="section container">
        <div className="updates-grid">
          <div><h2>资讯动态</h2><p>可展示展会信息、行业动态或公司公告。</p></div>
          <div className="updates-card">
            <div className="updates-item"><span>2026.02</span><h3>新品发布占位</h3><p>展示新品或技术升级内容。</p></div>
            <div className="updates-item"><span>2026.01</span><h3>展会活动占位</h3><p>发布参展信息或行业交流活动。</p></div>
          </div>
        </div>
      </section>

      <section id="knowledge" className="section container">
        <div className="section-head"><h2>产品知识</h2></div>
        <div className="knowledge-grid">
          <article><h3>镜片度数与适配</h3><p>介绍度数范围、标准与应用场景。</p></article>
          <article><h3>试镜架调节技巧</h3><p>调节方式与使用注意事项。</p></article>
          <article><h3>光学镜片材料选择</h3><p>材料差异与建议使用场景。</p></article>
        </div>
      </section>

      <section id="contact" className="section container">
        <div className="contact-grid">
          <div className="contact-box">
            <h2>联系我们</h2>
            <p>电话：{company.phone}</p><p>手机：{company.mobile}</p><p>邮箱：{company.email}</p><p>地址：{company.address}</p>
          </div>
          <div className="contact-box emphasis">
            <h3>获取产品目录与报价</h3>
            <p>告诉我们应用场景、参数和数量，我们会给出更合适的配置建议。</p>
            <a className="btn" href={`mailto:${company.email}`}>发送需求邮件</a>
          </div>
        </div>
      </section>
    </main>
  );
}
