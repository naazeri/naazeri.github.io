import '../styles/global.css';
import LayoutComponent from './LayoutComponent';

export const metadata = {
  title: 'Nazeriland',
  description: 'Portfolio of Reza Nazeri | رضا ناظری',
  authors: [{ name: 'Reza Nazeri', url: 'https://nazeriland.ir' }],
};

export default function RootLayout({ children }) {
  return <LayoutComponent>{children}</LayoutComponent>;
}
