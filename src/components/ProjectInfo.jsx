'use client';

export default function ProjectInfo({ project, categories }) {
  return (
    <div className="col-lg-4">
      <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
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
          <p
            dangerouslySetInnerHTML={{
              __html: project.description,
            }}
          />
        )}
      </div>
    </div>
  );
}
