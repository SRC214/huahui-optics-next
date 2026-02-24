import Link from 'next/link';
import { categories, company, products } from '@/lib/site-data';

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <div className="brand">{company.shortName}</div>
          <nav>
            <a href="#products">产品中心</a>
            <a href="#about">关于我们</a>
            <a href="#contact">联系我们</a>
          </nav>
        </div>
      </header>

      <section className="hero container">
        <p className="eyebrow">始于 {company.founded} · 专业光学产品制造商</p>
        <h1>面向企业与机构的高质量光学产品解决方案</h1>
        <p className="lead">
          聚焦验光镜片箱、试镜架、光学镜片和放大镜四大产品线。页面采用 Next.js
          构建，支持更强 SEO 与产品页面索引。
        </p>
        <div className="actions">
          <a className="btn" href="#products">
            浏览产品
          </a>
          <a className="btn btn-ghost" href="#contact">
            获取报价
          </a>
        </div>
      </section>

      <section id="products" className="container section">
        <h2>产品中心</h2>
        <p className="muted">每个产品都有独立页面，便于搜索引擎抓取与关键词优化。</p>

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
              <h3>{product.name}</h3>
              <p>{product.summary}</p>
              <ul>
                {product.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={`/products/${product.slug}`}>查看产品详情 →</Link>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="container section">
        <h2>关于我们</h2>
        <p>
          {company.name}
          长期服务眼科机构、医院、教学与科研场景。我们持续优化光学工艺和质量体系，提供稳定、可持续合作的制造支持。
        </p>
      </section>

      <section id="contact" className="container section contact">
        <h2>联系我们</h2>
        <p>电话：{company.phone}</p>
        <p>手机：{company.mobile}</p>
        <p>邮箱：{company.email}</p>
        <p>地址：{company.address}</p>
      </section>
    </main>
  );
}
