export const metadata = {
  title: 'Nazeriland',
};

export default function RedirectLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
