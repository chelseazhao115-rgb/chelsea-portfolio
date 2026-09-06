"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type WheelEvent } from "react";
import type { Locale, ProjectSummary } from "@/lib/content";

type ProjectArchiveProps = { locale: Locale; projects: ProjectSummary[] };

const labels = {
  zh: { completed: "Completed", working: "Working on", placeholder: "待补充", caseStudy: "查看案例", live: "打开产品", github: "GitHub", previous: "向左浏览", next: "向右浏览" },
  en: { completed: "Completed", working: "Working on", placeholder: "To add", caseStudy: "View case study", live: "Live product", github: "GitHub", previous: "Scroll left", next: "Scroll right" },
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
  const visibleProjects = projects.filter((project) => project.status !== "placeholder");
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncControls = () => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 2);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 2);
  };

  useEffect(() => {
    syncControls();
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(syncControls);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * Math.min(track.clientWidth * .78, 660), behavior: "smooth" });
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;
    event.preventDefault();
    track.scrollLeft += event.deltaY;
  };

  return <div className="builder-shelf">
    <div className="builder-shelf-controls" aria-label={locale === "zh" ? "项目浏览控制" : "Project shelf controls"}>
      <button type="button" onClick={() => move(-1)} disabled={atStart} aria-label={text.previous}><ArrowIcon /></button>
      <button type="button" onClick={() => move(1)} disabled={atEnd} aria-label={text.next}><ArrowIcon /></button>
    </div>
    <div className="builder-track" ref={trackRef} onScroll={syncControls} onWheel={handleWheel} tabIndex={0} aria-label={locale === "zh" ? "横向浏览产品项目" : "Browse projects horizontally"}>
      {visibleProjects.map((project) => <article className="builder-card" data-category={project.category} data-status={project.status} key={project.id}>
        <div className="builder-card-media"><ProjectVisual project={project} /></div>
        <div className="builder-card-copy">
          <div className="builder-card-meta"><span>{project.kind}</span><strong>{text[project.status]}</strong></div>
          <h3>{project.title}</h3>
          <div className="builder-card-actions">
            {project.caseSlug ? <Link href={`/${locale}/projects/${project.caseSlug}`}>{text.caseStudy}<ArrowIcon /></Link> : null}
            {project.github ? <a className="builder-icon-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} ${text.github}`} title={text.github}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.3 3.5 6.5 6.8 7A4.8 4.8 0 0 0 8 18v4M8 19c-3 .9-3-1.5-4-2" /></svg></a> : null}
            {project.live ? <a className="builder-icon-link" href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} ${text.live}`} title={text.live}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h7v7M10 14 21 3M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6" /></svg></a> : null}
          </div>
        </div>
      </article>)}
    </div>
  </div>;
}
