import Script from 'next/script';
import '../styles/global.css';

export const metadata = {
  title: 'Nazeriland',
  description: 'Portfolio of Reza Nazeri | رضا ناظری',
  authors: [{ name: 'Reza Nazeri', url: 'https://nazeriland.ir' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}

        {/* Vendor JS Files */}
        <Script
          src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="assets/vendor/php-email-form/validate.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="assets/vendor/aos/aos.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="assets/vendor/swiper/swiper-bundle.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="assets/vendor/glightbox/js/glightbox.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="assets/vendor/isotope-layout/isotope.pkgd.min.js"
          strategy="beforeInteractive"
        ></Script>
        {/* <Script src="assets/js/main.js" strategy="beforeInteractive"></Script> */}
      </body>
    </html>
  );
}
