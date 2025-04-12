import { siteData } from '@/lib/constants';
import Link from 'next/link';

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [mobileNavToggle, setMobileNavToggle] = useState(false)
  // const mobileNavToggleBtn = useRef(null);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     // Ensure the script is fully loaded before calling
  //     mainScript(); // Call the global function
  //     setIsLoading(false);
  //   }
  // }, []);

  // const mobileNavToogle=()=> {
  //   document.querySelector('body')?.classList.toggle('mobile-nav-active');
  //   mobileNavToggleBtn.current?.classList.toggle('bi-list');
  //   mobileNavToggleBtn.classList.toggle('bi-x');
  // }

  return (
    <>
      {/* {isLoading && <div id="preloader"></div>} */}

      {/* Hero Section */}
      <section
        id={siteData.heroData.anchorId}
        className="hero section dark-background"
      >
        <img src="/assets/img/background.webp" alt="" data-aos="fade-in" />

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
          <span className="description-title">{siteData.aboutData.title1}</span>
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
                src="/assets/img/reza-nazeri.webp"
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
                    <a href={social.href} target="_blank">
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
      <section id={siteData.serviceData.anchorId} className="services section">
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
                    {service.href ? (
                      <Link href={service.href} className="stretched-link">
                        {service.title}
                      </Link>
                    ) : (
                      service.title
                    )}
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
                <li key={category.id} data-filter={`.filter-${category.id}`}>
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
                    <Link href={`/project/${project.id}`} title="مشاهده جزئیات">
                      <div className="portfolio-content h-100">
                        <img
                          src={project.image}
                          className="portfolio-image"
                          alt="portfolio image"
                        />
                      </div>
                      <h3 className="portfolio-title">{project.title}</h3>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* add <br /> for spacing to nav highlight for 'portfolio' works */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
