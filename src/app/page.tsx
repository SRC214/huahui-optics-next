import Link from 'next/link';
import { categories, company, products } from '@/lib/site-data';

const capabilityList = [
  {
    title: '精密工艺体系',
    desc: '从研磨、装配到检测全链路标准化，确保批次一致性和参数稳定。',
  },
  {
    title: '灵活定制能力',
    desc: '支持不同规格和应用场景的快速打样与小批量到批量生产。',
  },
  {
    title: '长期协作交付',
    desc: '面向医院、眼科机构、教学实验与外贸客户建立持续供货机制。',
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home">
            {company.shortName}
          </a>
          <nav>
            <a href="#products">产品中心</a>
            <a href="#capabilities">能力优势</a>
            <a href="#about">关于我们</a>
            <a href="#contact">联系我们</a>
          </nav>
          <a className="btn btn-sm" href="#contact">
            获取报价
          </a>
        </div>
      </header>

      <section id="home" className="hero-shell">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">始于 {company.founded} · 专业光学仪器制造商</p>
            <h1>精密光学产品方案，服务专业验光与医疗场景</h1>
            <p className="lead">
              面向企业与机构客户，提供验光镜片箱、试镜架、光学镜片与放大镜的产品组合与定制支持。网站采用
              Next.js 构建，兼顾品牌展示与产品 SEO 增长。
            </p>
            <div className="actions">
              <a className="btn" href="#products">
                浏览产品
              </a>
              <a className="btn btn-ghost" href="#about">
                了解能力
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <h3>核心产品矩阵</h3>
            <ul>
              {categories.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
            <div className="hero-kpi">
              <div>
                <strong>40+</strong>
                <span>年行业沉淀</span>
              </div>
              <div>
                <strong>100+</strong>
                <span>产品规格组合</span>
              </div>
              <div>
                <strong>7-14天</strong>
                <span>典型交付周期</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="products" className="container section">
        <div className="section-head">
          <div>
            <p className="section-kicker">Products</p>
            <h2>产品中心</h2>
            <p className="muted">每个产品独立详情页，支持关键词投放与搜索引擎精准收录。</p>
          </div>
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
              <p className="chip">{categories.find((c) => c.id === product.category)?.name}</p>
              <h3>{product.name}</h3>
              <p>{product.summary}</p>
              <ul>
                {product.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={`/products/${product.slug}`}>查看产品详情</Link>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section soft-bg">
        <div className="container capability-grid">
          {capabilityList.map((item) => (
            <article key={item.title} className="capability-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="container section about-grid">
        <div>
          <p className="section-kicker">About</p>
          <h2>关于华辉光学</h2>
          <p>
            {company.name}
            长期深耕验光与光学产品制造，持续优化工艺、材料与质控流程，帮助客户在实际使用中获得稳定、可重复的性能体验。
          </p>
        </div>
        <div className="about-panel">
          <h3>服务覆盖</h3>
          <ul>
            <li>眼科机构与医院验光场景</li>
            <li>教学与科研实验配套</li>
            <li>OEM/ODM 批量合作</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="container section contact-grid">
        <div className="contact-box">
          <h2>联系我们</h2>
          <p>电话：{company.phone}</p>
          <p>手机：{company.mobile}</p>
          <p>邮箱：{company.email}</p>
          <p>地址：{company.address}</p>
        </div>
        <div className="contact-box emphasis">
          <h3>获取产品目录与报价</h3>
          <p>告诉我们应用场景、参数和数量，我们会给出更合适的配置建议。</p>
          <a className="btn" href={`mailto:${company.email}`}>
            发送需求邮件
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {company.name} · All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
