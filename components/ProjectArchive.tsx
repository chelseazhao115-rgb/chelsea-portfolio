"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type PointerEvent } from "react";
import type { Locale, ProjectSummary } from "@/lib/content";

type ProjectArchiveProps = {
  locale: Locale;
  projects: ProjectSummary[];
};

const labels = {
  zh: ["问题", "行动", "证据"],
  en: ["Problem", "Action", "Evidence"],
} as const;

function ProjectCard({ locale, project, index }: { locale: Locale; project: ProjectSummary; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const frameRef = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  const resetCard = () => {
    const card = cardRef.current;
    if (!card) return;
    cancelAnimationFrame(frameRef.current);
    card.removeAttribute("data-pointer-active");
    card.style.setProperty("--card-rx", "0deg");
    card.style.setProperty("--card-ry", "0deg");
    card.style.setProperty("--card-x", "50%");
    card.style.setProperty("--card-y", "50%");
    card.style.setProperty("--media-x", "0px");
    card.style.setProperty("--media-y", "0px");
  };

  const moveCard = (event: PointerEvent<HTMLAnchorElement>) => {
    if (
      event.pointerType === "touch" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));

    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      card.dataset.pointerActive = "true";
      card.style.setProperty("--card-rx", `${((0.5 - y) * 3.2).toFixed(2)}deg`);
      card.style.setProperty("--card-ry", `${((x - 0.5) * 4.2).toFixed(2)}deg`);
      card.style.setProperty("--card-x", `${(x * 100).toFixed(1)}%`);
      card.style.setProperty("--card-y", `${(y * 100).toFixed(1)}%`);
      card.style.setProperty("--media-x", `${((x - 0.5) * -7).toFixed(1)}px`);
      card.style.setProperty("--media-y", `${((y - 0.5) * -5).toFixed(1)}px`);
    });
  };

  return (
    <Link
      ref={cardRef}
      className={`archive-card ${index < 2 ? "archive-card-featured" : "archive-card-compact"}`}
      href={`/${locale}/projects/${project.slug}`}
      onPointerMove={moveCard}
      onPointerLeave={resetCard}
      onBlur={resetCard}
      data-reveal
    >
      <div className="archive-media">
        <Image
          src={project.image}
          alt={`${project.title} interface`}
          fill
          sizes={index < 2 ? "(max-width: 900px) 94vw, 52vw" : "(max-width: 700px) 94vw, 42vw"}
        />
      </div>
      <div className="archive-copy">
        <span className="archive-kind">{project.kind}</span>
        <h3>{project.title}</h3>
        <p>{project.subtitle}</p>
        <div className="archive-preview" aria-label={locale === "zh" ? "问题、行动与证据" : "Problem, action and evidence"}>
          {project.preview.map((value, itemIndex) => (
            <span key={value}><small>{labels[locale][itemIndex]}</small>{value}</span>
          ))}
        </div>
        <div className="archive-footer"><span>{project.facts.join(" · ")}</span><strong>{project.cta}</strong></div>
      </div>
    </Link>
  );
}

export function ProjectArchive({ locale, projects }: ProjectArchiveProps) {
  return (
    <div className="project-archive">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} locale={locale} project={project} index={index} />
      ))}
    </div>
  );
}
