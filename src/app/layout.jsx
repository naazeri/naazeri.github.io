import { siteData } from '@/lib/constants';
import '../styles/global.css';
import LayoutComponent from './LayoutComponent';

export const metadata = {
  title: siteData.siteConfig.title,
  description: siteData.siteConfig.description,
  authors: [{ name: siteData.siteConfig.author, url: siteData.siteConfig.url }],
};

export default function RootLayout({ children }) {
  return <LayoutComponent>{children}</LayoutComponent>;
}
