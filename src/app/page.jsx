'use client';

import { siteData } from '@/lib/constants';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  // const [mobileNavToggle, setMobileNavToggle] = useState(false)
  // const mobileNavToggleBtn = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure the script is fully loaded before calling
      mainScript(); // Call the global function
      setIsLoading(false);
    }
  }, []);

  // const mobileNavToogle=()=> {
  //   document.querySelector('body')?.classList.toggle('mobile-nav-active');
  //   mobileNavToggleBtn.current?.classList.toggle('bi-list');
  //   mobileNavToggleBtn.classList.toggle('bi-x');
  // }

  return (
    <>
      {isLoading && <div id="preloader"></div>}

      <div className="index-page">
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
                <li>
                  <a href="#hero" className="active">
                    خانه
                  </a>
                </li>
                <li>
                  <a href="#about">درباره</a>
                </li>
                <li>
                  <a href="#services">سرویس</a>
                </li>
                <li>
                  <a href="#portfolio">نمونه کار</a>
                </li>
                <li>
                  <a href="/blog.html">بلاگ</a>
                </li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <div className="header-social-links">
              <a href="#" className="twitter">
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
              </a>
            </div>
          </div>
        </header>

        <main className="main">
          {/* Hero Section */}
          <section
            id={siteData.heroData.anchorId}
            className="hero section dark-background"
          >
            <img src="assets/img/background.webp" alt="" data-aos="fade-in" />

            <div
              className="container text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2>{siteData.heroData.title}</h2>
              <p>{siteData.heroData.subtitle}</p>
              <a href="#about" className="btn-scroll" title="Scroll Down">
                <i className="bi bi-chevron-down"></i>
              </a>
            </div>
          </section>
          {/* /Hero Section */}

          {/* About Section */}
          <section id={siteData.aboutData.anchorId} className="about section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
              <span className="description-title">
                {siteData.aboutData.title1}
              </span>
              <h2>{siteData.aboutData.title1}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: siteData.aboutData.subtitle1,
                }}
              ></p>
            </div>
            {/* End Section Title */}

            {/* About Content */}
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4 justify-content-center">
                {/* about image */}
                <div className="col-lg-4">
                  <img
                    src="assets/img/reza-nazeri.webp"
                    className="img-fluid"
                    alt=""
                  />
                </div>

                {/* about text */}
                <div className="col-lg-8 content">
                  <h2>{siteData.aboutData.title2}</h2>
                  <p
                    className="py-2 my-0"
                    dangerouslySetInnerHTML={{
                      __html: siteData.aboutData.subtitle2,
                    }}
                  ></p>

                  {/* about socials */}
                  <div className="row my-4">
                    {siteData.aboutData.socials.map((social, index) => (
                      <div
                        key={index}
                        className="col-lg-6 d-flex align-items-center about-social-item"
                      >
                        <i
                          className={`about-head-icon bi bi-${social.headIcon}`}
                        ></i>
                        <strong className="mx-2">{social.label}:</strong>
                        <a href={social.href}>
                          {social.text}
                          <i
                            className={`about-tail-icon mx-1 bi bi-${
                              social.tailIcon || 'box-arrow-up-left'
                            }`}
                          ></i>
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* about end description */}
                  <p
                    className="py-0 my-0"
                    dangerouslySetInnerHTML={{
                      __html: siteData.aboutData.description,
                    }}
                  ></p>
                  {/* <p className="pb-3 my-0">
                اگر به دنبال یک راه‌حل خلاقانه و کارآمد برای پروژه‌های وب خود
                هستید، خوشحال می‌شوم که همکاری کنیم!
              </p> */}
                </div>
              </div>
            </div>
          </section>
          {/* /About Section */}

          {/* Services Section */}
          <section
            id={siteData.serviceData.anchorId}
            className="services section"
          >
            {/* Titles */}
            <div className="container section-title" data-aos="fade-up">
              {/* title */}
              <span className="description-title">
                {siteData.serviceData.title}
              </span>
              <h2>{siteData.serviceData.title}</h2>

              {/* subtitle */}
              <p>{siteData.serviceData.subtitle}</p>
            </div>

            {/* service cards */}
            <div className="container">
              <div className="row gy-4">
                {/* Service card item */}
                {siteData.serviceData.services.map((service, index) => (
                  <div
                    key={index}
                    className="col-xl-3 col-md-6 d-flex"
                    data-aos="none"
                    data-aos-delay={200 + index * 100}
                  >
                    <div className="service-item position-relative">
                      <div className="icon">
                        <i className={`icon bi bi-${service.icon}`}></i>
                      </div>
                      <h4>
                        <a href="" className="stretched-link">
                          {service.title}
                        </a>
                      </h4>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* /Services Section */}

          {/* Portfolio Section */}
          <section
            id={siteData.portfolioData.anchorId}
            className="portfolio section"
          >
            {/* Titles */}
            <div className="container section-title" data-aos="fade-up">
              {/* title */}
              <span className="description-title">
                {siteData.portfolioData.title}
              </span>
              <h2>{siteData.portfolioData.title}</h2>

              {/* subtitle */}
              <p>{siteData.portfolioData.subtitle}</p>
            </div>

            <div className="container-fluid">
              <div
                className="isotope-layout"
                data-default-filter="*"
                data-layout="masonry"
                data-sort="original-order"
              >
                {/* Portfolio Filters */}
                <ul
                  className="portfolio-filters isotope-filters"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <li data-filter="*" className="filter-active">
                    همه
                  </li>
                  {siteData.portfolioData.categories.map((category) => (
                    <li
                      key={category.id}
                      data-filter={`.filter-${category.id}`}
                    >
                      {category.label}
                    </li>
                  ))}
                  {/* <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-product">Product</li>
                  <li data-filter=".filter-branding">Branding</li>
                  <li data-filter=".filter-books">Books</li> */}
                </ul>
                {/* End Portfolio Filters */}

                {/* Portfolio Container */}
                <div
                  className="row g-0 isotope-container"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {/* Portfolio Item */}
                  {siteData.portfolioData.projects
                    .sort((a, b) => a.order - b.order)
                    .map((project) => (
                      <div
                        key={project.id}
                        className={`col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item ${project.categories
                          .map((category) => `filter-${category}`)
                          .join(' ')}`}
                      >
                        <Link
                          href={`/project/${project.id}`}
                          title="See More Details"
                        >
                          <div className="portfolio-content h-100">
                            <img
                              src={`assets/img/portfolio/portfolio-${project.id}.webp`}
                              className="portfolio-image"
                              alt="portfolio image"
                            />
                          </div>
                          <h3 className="portfolio-title">{project.label}</h3>
                        </Link>
                      </div>
                    ))}
                </div>
                {/* End Portfolio Container */}
              </div>
            </div>
          </section>
          {/* /Portfolio Section */}

          {/* /Contact Section */}
        </main>

        <footer
          id="footer"
          className="footer position-relative dark-background"
        >
          <div className="container">
            {/* title */}
            <h3 className="sitename"></h3>
            {/* subtitle */}
            <p></p>
            <div className="social-links d-flex justify-content-center">
              <a href="https://instagram.com/re_nazeri">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://linkedin.com/in/rezanazeri">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://t.me/PyReza">
                <i className="bi bi-telegram"></i>
              </a>
              <a href="https://youtube.com/@naazeri">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="https://github.com/naazeri">
                <i className="bi bi-github"></i>
              </a>
            </div>
            {/* <div className="container">
          <div className="copyright">
            <span>Copyright</span>
            <strong className="px-1 sitename">Nazeriland</strong>
            <span>All Rights Reserved</span>
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">Nazeriland</a>
          </div>
        </div> */}
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
      </div>
    </>
  );
}

function mainScript() {
  'use strict';

  console.log('🚀 ~ mainScript ~ called');

  // Helper function to run a callback if loaded, or attach it to 'load'
  function runOnDocumentLoad(callback) {
    if (document.readyState === 'complete') {
      // If the page is already fully loaded, run the callback immediately
      callback();
    } else {
      // Otherwise, wait for the 'load' event
      window.addEventListener('load', callback, { once: true });
    }
  }

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (
      !selectHeader?.classList.contains('scroll-up-sticky') &&
      !selectHeader?.classList.contains('sticky-top') &&
      !selectHeader?.classList.contains('fixed-top')
    )
      return;
    window.scrollY > 100
      ? selectBody?.classList.add('scrolled')
      : selectBody?.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  runOnDocumentLoad(toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body')?.classList.toggle('mobile-nav-active');
    mobileNavToggleBtn?.classList.toggle('bi-list');
    mobileNavToggleBtn?.classList.toggle('bi-x');
  }
  mobileNavToggleBtn?.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach((navmenu) => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach((navmenu) => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add('active')
        : scrollTop.classList.remove('active');
    }
  }
  scrollTop?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  runOnDocumentLoad(toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 300,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }
  runOnDocumentLoad(aosInit);

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll('.init-swiper').forEach(function (swiperElement) {
      let config = JSON.parse(
        (
          swiperElement?.querySelector('.swiper-config')?.innerHTML ?? ''
        )?.trim()
      );

      if (swiperElement.classList.contains('swiper-tab')) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  runOnDocumentLoad(initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox',
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(
        isotopeItem.querySelector('.isotope-container'),
        {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        }
      );
    });

    isotopeItem
      .querySelectorAll('.isotope-filters li')
      .forEach(function (filters) {
        filters.addEventListener(
          'click',
          function () {
            isotopeItem
              ?.querySelector('.isotope-filters .filter-active')
              ?.classList.remove('filter-active');
            this.classList.add('filter-active');
            initIsotope.arrange({
              filter: this.getAttribute('data-filter'),
            });
            if (typeof aosInit === 'function') {
              aosInit();
            }
          },
          false
        );
      });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  runOnDocumentLoad(function () {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section?.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll('.navmenu a.active')
          .forEach((link) => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    });
  }
  runOnDocumentLoad(navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);
}
