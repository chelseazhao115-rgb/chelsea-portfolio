"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import type { Capability, Education, Experience } from "@/lib/content";

export function CapabilityDeck({ items }: { items: Capability[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="capability-deck">
      {items.map((item, index) => (
        <button
          type="button"
          className="capability-card"
          data-active={active === index}
          aria-expanded={active === index}
          onClick={() => setActive(index)}
          style={{ "--card-index": index } as CSSProperties}
          key={item.title}
        >
          <span className="capability-mark" aria-hidden="true">{item.mark}</span>
          <span className="capability-copy">
            <span className="capability-subtitle">{item.subtitle}</span>
            <strong>{item.title}</strong>
            <span className="capability-body">{item.body}</span>
            <span className="capability-evidence">{item.evidence}</span>
          </span>
        </button>
      ))}
    </div>
  );
}

type ExperienceLabels = {
  close: string;
  title: string;
  evidence: string;
  actions: string;
  gallery: string;
};

export function ExperienceOrbit({ items, hint, labels }: { items: Experience[]; hint: string; labels: ExperienceLabels }) {
  const [active, setActive] = useState<number | null>(null);
  const [preview, setPreview] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const item = active === null ? null : items[active];

  useEffect(() => {
    if (active === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dialog = dialogRef.current;
    const focusable = () => Array.from(dialog?.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])') ?? []);
    requestAnimationFrame(() => focusable()[0]?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key !== "Tab") return;
      const nodes = focusable();
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [active]);

  const moveStage = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    stage.style.setProperty("--orbit-x", `${((event.clientX - rect.left) / rect.width - 0.5) * 8}px`);
    stage.style.setProperty("--orbit-y", `${((event.clientY - rect.top) / rect.height - 0.5) * 8}px`);
  };

  const open = (index: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActive(index);
  };

  return (
    <>
      <div className="experience-stage" ref={stageRef} onPointerMove={moveStage} onPointerLeave={() => {
        stageRef.current?.style.setProperty("--orbit-x", "0px");
        stageRef.current?.style.setProperty("--orbit-y", "0px");
      }}>
        <div className="experience-center" aria-live="polite">
          <span>{items[preview].date}</span>
          <strong>{items[preview].capability}</strong>
          <small>{hint}</small>
        </div>
        <div className="career-ring" aria-hidden="true"><i /><i /><i /></div>
        <div className="experience-nodes">
          {items.map((entry, index) => (
            <button
              type="button"
              className={`experience-node experience-node-${index + 1}`}
              onPointerEnter={() => setPreview(index)}
              onFocus={() => setPreview(index)}
              onClick={(event) => open(index, event.currentTarget)}
              aria-label={`${entry.company}, ${entry.role}, ${entry.date}`}
              key={entry.id}
            >
              <span className="experience-brand">{entry.brand}</span>
              <span className="experience-node-copy"><strong>{entry.company}</strong><small>{entry.role}</small><time>{entry.date}</time></span>
            </button>
          ))}
        </div>
      </div>

      <div
        className="experience-backdrop"
        data-open={Boolean(item)}
        aria-hidden={!item}
        onPointerDown={(event) => { if (event.target === event.currentTarget) setActive(null); }}
      >
        {item && (
          <div className="experience-drawer" role="dialog" aria-modal="true" aria-labelledby="experience-drawer-title" ref={dialogRef}>
            <button type="button" className="drawer-close" onClick={() => setActive(null)} aria-label={labels.close}>
              <span aria-hidden="true" />
            </button>
            <div className="drawer-heading">
              <span className="drawer-brand">{item.brand}</span>
              <p>{labels.title}</p>
              <h2 id="experience-drawer-title">{item.company}</h2>
              <strong>{item.role}</strong>
              <span>{item.date} · {item.location}</span>
            </div>
            <p className="drawer-summary">{item.summary}</p>
            <section className="drawer-section">
              <h3>{labels.actions}</h3>
              <ul>{item.actions.map((action) => <li key={action}>{action}</li>)}</ul>
            </section>
            <section className="drawer-section drawer-evidence">
              <h3>{labels.evidence}</h3>
              <div>{item.evidence.map((value) => <strong key={value}>{value}</strong>)}</div>
            </section>
            <div className="drawer-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <section className="drawer-section">
              <h3>{labels.gallery}</h3>
              {item.images.length ? (
                <div className="drawer-gallery">{item.images.map((photo) => <figure key={photo.src}><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 88vw, 240px" /></figure>)}</div>
              ) : (
                <div className="asset-placeholder"><span>{item.brand}</span><p>{item.placeholder}</p></div>
              )}
            </section>
          </div>
        )}
      </div>
    </>
  );
}

export function EducationPostcards({ items, hint }: { items: Education[]; hint: string }) {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  return (
    <div className="postcard-grid">
      {items.map((item) => {
        const isFlipped = Boolean(flipped[item.id]);
        return (
          <button
            type="button"
            className="postcard"
            data-flipped={isFlipped}
            aria-pressed={isFlipped}
            onClick={() => setFlipped((current) => ({ ...current, [item.id]: !isFlipped }))}
            key={item.id}
          >
            <span className="postcard-inner">
              <span className="postcard-face postcard-front">
                {item.image ? <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 700px) 92vw, 48vw" /> : <span className="postcard-placeholder" aria-label={item.imageAlt}><i>UM</i><small>{item.imageAlt}</small></span>}
                {item.secondaryImage ? (
                  <span className="postcard-secondary" aria-hidden="true">
                    <Image src={item.secondaryImage} alt="" fill sizes="180px" />
                  </span>
                ) : null}
                <span className="postcard-shade" />
                <span className="postcard-caption"><small>{item.date}</small><strong>{item.school}</strong><em>{hint}</em></span>
              </span>
              <span className="postcard-face postcard-back">
                <span className="postcard-stamp">{item.id.toUpperCase()}</span>
                <small>{item.date}</small>
                <strong>{item.school}</strong>
                <span>{item.degree}</span>
                <b>{item.badge}</b>
                <p>{item.courses}</p>
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
