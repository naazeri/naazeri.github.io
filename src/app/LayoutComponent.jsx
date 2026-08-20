'use client';

import Script from 'next/script';
import Link from 'next/link';
import LanguageSelect from '@/components/LanguageSelect';
import { getSiteData } from '@/lib/i18n/config';
import { sanitizedHtml } from '@/lib/sanitizeHtml';
import { useEffect } from 'react';
import { initLayoutScript, initPageScript } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function LayoutComponent({ locale, children }) {
  const pathname = usePathname();
  const siteData = getSiteData(locale);

  useEffect(() => initLayoutScript(), []);

  useEffect(() => initPageScript(), [pathname]);

  return (
    <>
        <header
          id="header"
          className="header d-flex align-items-center fixed-top"
        >
          <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
            <Link href={`/${locale}/`} className="logo d-flex align-items-center">
              <img
                src="/assets/img/nazeriland-white.webp"
                alt="Nazeriland logo"
                className="site-logo"
              />
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
              <LanguageSelect locale={locale} />
            </div>
          </div>
        </header>

        <main className="main">{children}</main>

        <footer
          id="footer"
          className="footer position-relative dark-background"
        >
          <div className="container">
            <h3 className="sitename">{siteData.footerData.title}</h3>

            <p
              dangerouslySetInnerHTML={sanitizedHtml(
                siteData.footerData.subtitle
              )}
            ></p>

            <div className="social-links d-flex justify-content-center">
              {siteData.aboutData.socials
                .filter((social) => social.showInFooter)
                .map((social, index) => (
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                    <i className={`bi bi-${social.headIcon}`}></i>
                  </a>
                ))}
            </div>

            <div className="container">
              <div
                className="copyright"
                dangerouslySetInnerHTML={sanitizedHtml(
                  siteData.footerData.copyright
                )}
              ></div>
              <div
                className="credits"
                dangerouslySetInnerHTML={sanitizedHtml(
                  siteData.footerData.credits
                )}
              ></div>
            </div>
          </div>
        </footer>

        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>

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
    </>
  );
}
