import type { Metadata } from 'next';
import './globals.css';
import { company } from '@/lib/site-data';

export const metadata: Metadata = {
  metadataBase: new URL(company.domain),
  title: {
    default: `${company.shortName}｜精密验光与光学产品制造商`,
    template: `%s｜${company.shortName}`,
  },
  description:
    '华辉光学仪器专注验光镜片箱、试镜架、光学镜片与放大镜制造，支持多规格定制与稳定交付。',
  keywords: ['验光镜片箱', '试镜架', '光学镜片', '放大镜', '光学仪器厂家', '丹阳光学'],
  alternates: { canonical: '/' },
  openGraph: {
    title: `${company.shortName}｜精密验光与光学产品制造商`,
    description:
      '专业服务眼科机构、医院、教学与科研场景，提供可靠光学产品解决方案。',
    url: '/',
    siteName: company.shortName,
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
