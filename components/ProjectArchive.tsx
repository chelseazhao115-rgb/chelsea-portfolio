import Image from "next/image";
import Link from "next/link";
import type { Locale, ProjectSummary } from "@/lib/content";

type ProjectArchiveProps = { locale: Locale; projects: ProjectSummary[] };

const labels = {
  zh: { completed: "Completed", working: "Working on", placeholder: "待补充", caseStudy: "查看案例", live: "打开产品", github: "GitHub", reserved: "内容待补充" },
  en: { completed: "Completed", working: "Working on", placeholder: "To add", caseStudy: "View case study", live: "Live", github: "GitHub", reserved: "Details to follow" },
} as const;

function ProjectVisual({ project }: { project: ProjectSummary }) {
  if (project.id === "spoken-english-collector") return <span className="spoken-cover" aria-hidden="true"><span className="spoken-cover-window"><small>Browser Extension · V1.0</small><strong>Spoken English<br />Collector</strong></span></span>;
  if (project.id === "tencent-bootcamp") return <span className="tencent-cover" aria-hidden="true"><small>Tencent 腾讯</small><strong>{project.title}</strong></span>;
  if (project.image) return <Image src={project.image} alt={`${project.title} project visual`} fill sizes="(max-width: 720px) 92vw, (max-width: 1100px) 46vw, 30vw" />;
  return <span className="builder-card-placeholder" aria-hidden="true"><strong>{project.category === "skill" ? "Skill" : project.title.slice(0, 2)}</strong></span>;
}

function ArrowIcon() {
  return <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M9 4l4 4-4 4" /></svg>;
}

export function ProjectArchive({ locale, projects }: ProjectArchiveProps) {
  const text = labels[locale];
  return <div className="builder-grid">
    {projects.map((project) => <article className="builder-card" data-category={project.category} data-status={project.status} data-reveal key={project.id}>
      <div className="builder-card-media"><ProjectVisual project={project} /></div>
      <div className="builder-card-copy">
        <div className="builder-card-meta"><span>{project.kind}</span><strong>{text[project.status]}</strong></div>
        <h3>{project.title}</h3>
        <p>{project.subtitle}</p>
        <div className="builder-card-actions">
          {project.caseSlug ? <Link href={`/${locale}/projects/${project.caseSlug}`}>{text.caseStudy}<ArrowIcon /></Link> : null}
          {project.github ? <a href={project.github} target="_blank" rel="noreferrer">{text.github}<ArrowIcon /></a> : null}
          {project.live ? <a href={project.live} target="_blank" rel="noreferrer">{text.live}<ArrowIcon /></a> : null}
          {!project.caseSlug && !project.github && !project.live ? <span>{text.reserved}</span> : null}
        </div>
      </div>
    </article>)}
  </div>;
}
