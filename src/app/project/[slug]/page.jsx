import { siteData } from '@/lib/constants';
import Breadcrumbs from '@/components/Breadcrumbs';
import sanitizeHtml from 'sanitize-html';

// Generate static params for static export
export async function generateStaticParams() {
  return siteData.portfolioData.projects.map((item) => ({
    slug: item.id.toString(),
  }));
}

// Generate metadata for dynamic title
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = siteData.portfolioData.projects.find(
    (item) => item.id === parseInt(slug)
  );

  return {
    title: `جزئیات پروژه ${project?.title}`,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const project = siteData.portfolioData.projects.find(
    (item) => item.id === parseInt(slug)
  );
  const categories = project.categories
    ?.map(
      (catId) =>
        siteData.portfolioData.categories.find((cat) => cat.id === catId)?.label
    )
    .join(' - ');

  return (
    <>
      {/* Page Title */}
      <div className="page-title dark-background">
        <div className="container position-relative">
          <h1>{project.title}</h1>
          {categories && <p>{categories}</p>}
          <Breadcrumbs items={['جزئیات پروژه']} />
        </div>
      </div>

      {/* Portfolio Details Section */}
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* slider images (gallery) */}
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper init-swiper">
                <div className="swiper-wrapper align-items-center">
                  {project.gallery.map((image, index) => (
                    <div className="swiper-slide" key={index}>
                      <a
                        href={image}
                        className="glightbox"
                        data-gallery="portfolio-gallery"
                      >
                        <img
                          src={image}
                          alt={`image of ${project.title} project`}
                          className="swiper-image"
                        />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            {/* Project Info */}
            <div className="col-lg-4">
              <div
                className="portfolio-info"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>اطلاعات پروژه</h3>
                <ul>
                  {categories && (
                    <li>
                      <strong>دسته بندی</strong>: {categories}
                    </li>
                  )}
                  {project.client && (
                    <li>
                      <strong>کارفرما</strong>: {project.client}
                    </li>
                  )}
                  {project.date && (
                    <li>
                      <strong>تاریخ شروع پروژه</strong>: {project.date}
                    </li>
                  )}
                  {project.url && (
                    <li>
                      <strong>آدرس پروژه</strong>:{' '}
                      <a href={project.url} target="_blank">
                        مشاهده
                      </a>
                    </li>
                  )}
                </ul>
              </div>
              <div
                className="portfolio-description"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2>{project.title}</h2>
                {project.description && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(project.description),
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
