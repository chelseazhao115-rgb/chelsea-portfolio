import Image from "next/image";
import Link from "next/link";
import type { Locale, ProjectSummary } from "@/lib/content";

type ProjectArchiveProps = {
  locale: Locale;
  projects: ProjectSummary[];
};

const labels = {
  zh: { highlight: "关键设计", stage: "当前阶段", live: "试玩产品" },
  en: { highlight: "Key design", stage: "Current stage", live: "Try the product" },
} as const;

function ProjectVisual({ project, featured = false }: { project: ProjectSummary; featured?: boolean }) {
  if (project.slug === "spoken-english-collector") {
    return <span className="spoken-cover" aria-hidden="true">
      <span className="spoken-cover-window">
        <small>Browser Extension · V1.0</small>
        <strong>Spoken English<br />Collector</strong>
        <span className="spoken-cover-flow"><i>Capture</i><i>Understand</i><i>Collect</i><i>Review</i></span>
      </span>
    </span>;
  }
  if (project.slug === "tencent-bootcamp") {
    return <span className="tencent-cover" aria-hidden="true"><small>Tencent 腾讯</small><strong>{project.title}</strong><i>Foundation · Advanced</i></span>;
  }
  return <Image src={project.image} alt={`${project.title} ${featured ? "interface" : "project visual"}`} fill sizes={featured ? "(max-width: 720px) 94vw, 46vw" : "(max-width: 720px) 34vw, 18vw"} />;
}

function FeaturedProjectCard({ locale, project }: { locale: Locale; project: ProjectSummary }) {
  return (
    <article className="project-card project-card-featured" data-reveal>
      <Link className="project-card-media" href={`/${locale}/projects/${project.slug}`} aria-label={`${project.title} case study`}>
        <ProjectVisual project={project} featured />
      </Link>
      <div className="project-card-copy">
        <span className="project-status">{project.kind}</span>
        <h3>{project.title}</h3>
        <p className="project-description">{project.subtitle}</p>
        <p className="project-highlight"><small>{labels[locale].highlight}</small>{project.highlight}</p>
        <div className="project-proof">
          <span>{project.facts.join(" · ")}</span>
          {project.stage ? <strong><small>{labels[locale].stage}</small>{project.stage}</strong> : null}
        </div>
        <div className="project-actions">
          <Link href={`/${locale}/projects/${project.slug}`}>{project.cta}<i aria-hidden="true">→</i></Link>
          {project.live ? <a href={project.live} target="_blank" rel="noreferrer">{labels[locale].live}<i aria-hidden="true">↗</i></a> : null}
        </div>
      </div>
    </article>
  );
}

function SupportingProjectCard({ locale, project }: { locale: Locale; project: ProjectSummary }) {
  return (
    <article className="project-card project-card-supporting" data-project={project.slug} data-reveal>
      <Link className="project-supporting-media" href={`/${locale}/projects/${project.slug}`} aria-label={`${project.title} case study`}>
        <ProjectVisual project={project} />
      </Link>
      <div className="project-supporting-copy">
        <span className="project-status">{project.kind}</span>
        <h3>{project.title}</h3>
        <p>{project.highlight}</p>
        <Link href={`/${locale}/projects/${project.slug}`}>{project.cta}<i aria-hidden="true">→</i></Link>
      </div>
    </article>
  );
}

export function ProjectArchive({ locale, projects }: ProjectArchiveProps) {
  const featured = projects.slice(0, 2);
  const supporting = projects.slice(2);

  return (
    <div className="project-archive">
      <div className="project-featured-grid">
        {featured.map((project) => <FeaturedProjectCard key={project.slug} locale={locale} project={project} />)}
      </div>
      <div className="project-supporting-grid">
        {supporting.map((project) => <SupportingProjectCard key={project.slug} locale={locale} project={project} />)}
      </div>
    </div>
  );
}
