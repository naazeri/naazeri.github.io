import LocaleHtmlAttributes from '@/components/LocaleHtmlAttributes';
import '@/styles/global.css';

export const metadata = {
  title: 'Nazeriland',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <LocaleHtmlAttributes />
        {children}
      </body>
    </html>
  );
}
