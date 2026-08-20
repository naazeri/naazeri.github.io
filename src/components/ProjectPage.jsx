import Breadcrumbs from '@/components/Breadcrumbs';
import { getSiteData } from '@/lib/i18n/config';
import { sanitizedHtml } from '@/lib/sanitizeHtml';

export default function ProjectPage({ locale, project }) {
  const siteData = getSiteData(locale);

  const categories = project.categories
    ?.map(
      (catId) =>
        siteData.portfolioData.categories.find((cat) => cat.id === catId)?.label
    )
    .join(' - ');

  return (
    <>
      <div className="page-title dark-background">
        <div className="container position-relative">
          <h1>{project.title}</h1>
          {categories && <p>{categories}</p>}
          <Breadcrumbs
            homeHref={`/${locale}/`}
            homeLabel={siteData.ui.home}
            items={[siteData.ui.projectDetails]}
          />
        </div>
      </div>

      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
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

            <div className="col-lg-4">
              <div
                className="portfolio-info"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>{siteData.ui.projectInfo}</h3>
                <ul>
                  {categories && (
                    <li>
                      <strong>{siteData.ui.category}</strong>: {categories}
                    </li>
                  )}
                  {project.client && (
                    <li>
                      <strong>{siteData.ui.client}</strong>: {project.client}
                    </li>
                  )}
                  {project.date && (
                    <li>
                      <strong>{siteData.ui.projectDate}</strong>: {project.date}
                    </li>
                  )}
                  {project.url && (
                    <li>
                      <strong>{siteData.ui.projectUrl}</strong>:{' '}
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {siteData.ui.view}
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
                    dangerouslySetInnerHTML={sanitizedHtml(
                      project.description
                    )}
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
