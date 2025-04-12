'use client';

import Script from 'next/script';
import Link from 'next/link';
import '../styles/global.css';
import { siteData } from '@/lib/constants';
import { useEffect } from 'react';
import { mainScript } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function LayoutComponent({ children }) {
  const pathname = usePathname(); // Get current pathname

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure the script is fully loaded before calling
      mainScript(); // Call the global function
      // setIsLoading(false);
    }
  }, [pathname]);

  return (
    <html lang="fa" dir="rtl">
      <body>
        <header
          id="header"
          className="header d-flex align-items-center fixed-top"
        >
          <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
            <Link href="/" className="logo d-flex align-items-center">
              {/* Uncomment the line below if you also wish to use an image logo */}
              <img src="/assets/img/nazeriland-white-circle.png" alt="" />
              {/* <h1 className="sitename">Nazeriland</h1> */}
            </Link>

            <nav id="navmenu" className="navmenu">
              <ul>
                {siteData.navData.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <div className="header-social-links">
              {/* <a href="#" className="twitter">
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a href="#" className="facebook">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#" className="instagram">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="#" className="linkedin">
                        <i className="bi bi-linkedin"></i>
                      </a> */}
            </div>
          </div>
        </header>

        <main className="main">{children}</main>

        <footer
          id="footer"
          className="footer position-relative dark-background"
        >
          <div className="container">
            {/* title */}
            <h3 className="sitename">{siteData.footerData.title}</h3>

            {/* subtitle */}
            <p
              dangerouslySetInnerHTML={{
                __html: siteData.footerData.subtitle,
              }}
            ></p>

            {/* social links */}
            <div className="social-links d-flex justify-content-center">
              {siteData.aboutData.socials
                .filter((social) => social.showInFooter)
                .map((social, index) => (
                  <a key={index} href={social.href} target="_blank">
                    <i className={`bi bi-${social.headIcon}`}></i>
                  </a>
                ))}
            </div>

            {/* copyright */}
            <div className="container">
              <div
                className="copyright"
                dangerouslySetInnerHTML={{
                  __html: siteData.footerData.copyright,
                }}
              ></div>
              <div
                className="credits"
                dangerouslySetInnerHTML={{
                  __html: siteData.footerData.credits,
                }}
              ></div>
            </div>
          </div>
        </footer>

        {/* Scroll Top */}
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>

        {/* Vendor JS Files */}
        <Script
          src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/vendor/php-email-form/validate.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/vendor/aos/aos.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/vendor/swiper/swiper-bundle.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/vendor/glightbox/js/glightbox.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"
          strategy="beforeInteractive"
        ></Script>
        {/* <Script src="/assets/js/main.js" strategy="beforeInteractive"></Script> */}
      </body>
    </html>
  );
}
