# Huahui Optics Next.js Website

基于 Next.js 16 + App Router 重建的企业官网版本，重点提升：

- 产品页面 SEO（每个产品独立路由 + 独立 metadata）
- 站点级 SEO（sitemap / robots / canonical / OpenGraph）
- 后续可扩展性（产品数据集中在 `src/lib/site-data.ts`）

## 本地开发

```bash
npm install
npm run dev
```

打开 http://localhost:3000

## 生产构建验证

```bash
npm run lint
npm run build
```

## 目录说明

- `src/app/page.tsx`：官网首页
- `src/app/products/[slug]/page.tsx`：产品详情页（静态生成）
- `src/lib/site-data.ts`：产品、分类、公司资料与 SEO 文案
- `src/app/sitemap.ts`：sitemap 自动生成
- `src/app/robots.ts`：robots 自动生成

## 上线前建议

1. 将 `company.domain` 改成真实域名
2. 替换真实产品图片
3. 增加中英文双语路由（如 `/en`）
4. 接入询盘表单后端（邮件或 CRM）
