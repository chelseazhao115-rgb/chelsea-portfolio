"use client";

import Image from "next/image";
import { ExperienceGallery } from "./ExperienceGallery";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import type { AboutCard, Education, Experience } from "@/lib/content";

type ExperienceLabels = {
  close: string;
  title: string;
  evidence: string;
  actions: string;
  gallery: string;
};

const experienceDrawerLogos: Record<Experience["id"], string> = {
  xiaohongshu: "/career-logo-xiaohongshu.png",
  "new-oriental": "/logo-new-oriental.png",
  utu: "/logo-utu.png",
  kalowave: "/logo-kalodata.png",
};

const experienceCompactLogos: Record<Experience["id"], string> = {
  xiaohongshu: "/career-logo-xiaohongshu.png",
  "new-oriental": "/career-logo-new-oriental.png",
  utu: "/career-logo-utu-symbol.png",
  kalowave: "/career-logo-kalodata-symbol.png",
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
              <span className="experience-brand"><Image src={experienceCompactLogos[entry.id]} alt={`${entry.company} logo`} fill unoptimized sizes="64px" /></span>
              <span className="experience-node-copy"><strong>{entry.company}</strong><small>{entry.role}</small><time>{entry.date}</time></span>
            </button>
          ))}
        </div>
      </div>

      <div
        className="experience-backdrop"
        data-open={Boolean(item)}
        aria-hidden={!item}
      >
        {item ? <button className="experience-modal-dismiss" type="button" tabIndex={-1} aria-label={labels.close} onClick={() => setActive(null)} /> : null}
        {item && (
          <div className="experience-drawer" role="dialog" aria-modal="true" aria-labelledby="experience-drawer-title" ref={dialogRef}>
            <button type="button" className="drawer-close" onClick={() => setActive(null)} aria-label={labels.close}>
              <span aria-hidden="true" />
            </button>
            <div className="drawer-heading">
              <span className={`drawer-brand drawer-brand-${item.id}`}><Image src={experienceDrawerLogos[item.id]} alt={`${item.company} logo`} fill unoptimized sizes="240px" /></span>
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
                <ExperienceGallery key={item.id} images={item.images} hero={item.id !== "new-oriental" && item.id !== "utu"} />
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
                <span className="postcard-photo">
                  {item.image ? <Image src={item.image} alt={item.imageAlt} fill unoptimized sizes="(max-width: 700px) 62vw, 360px" loading="lazy" decoding="async" /> : <span className="postcard-placeholder" aria-label={item.imageAlt}><i>UM</i><small>{item.imageAlt}</small></span>}
                </span>
                <span className="postcard-details">
                  {item.secondaryImage ? (
                    <span className="postcard-secondary" aria-hidden="true">
                      <Image src={item.secondaryImage} alt="" fill unoptimized sizes="(max-width: 700px) 110px, 220px" loading="lazy" decoding="async" />
                    </span>
                  ) : null}
                  <span className="postcard-caption"><small>{item.date}</small><strong>{item.school}</strong><em>{hint}</em></span>
                </span>
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

type PersonalArchiveLabels = {
  close: string;
  previous: string;
  next: string;
  page: string;
};

export function PersonalArchiveCards({ items, labels }: { items: AboutCard[]; labels: PersonalArchiveLabels }) {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const [photoPage, setPhotoPage] = useState(0);
  const [photoTurn, setPhotoTurn] = useState<{ from: number; to: number; direction: "next" | "previous" } | null>(null);

  const setCardFlipped = (id: AboutCard["id"], value: boolean) => {
    setFlipped((current) => ({ ...current, [id]: value }));
  };

  const turnPhoto = (to: number) => {
    if (photoTurn || to === photoPage) return;
    setPhotoTurn({ from: photoPage, to, direction: to > photoPage ? "next" : "previous" });
  };

  return (
    <div className="personal-archive-grid">
      {items.map((card) => {
        const isFlipped = Boolean(flipped[card.id]);
        const pageCount = card.gallery?.length ?? 0;
        if (card.id === "photography") {
          const endPage = pageCount + 1;
          const basePage = photoTurn ? (photoTurn.direction === "next" ? photoTurn.to : photoTurn.from) : photoPage;
          const turningPage = photoTurn ? (photoTurn.direction === "next" ? photoTurn.from : photoTurn.to) : null;
          const renderPage = (page: number, className: string) => {
            const photo = page === 0 ? (card.image ? { src: card.image, alt: card.imageAlt } : null) : card.gallery?.[page - 1];
            return (
              <div className={className} data-cover={page === 0} data-rotate={page === 1} data-end={page === endPage}>
                {photo ? <Image src={photo.src} alt={photo.alt} fill unoptimized sizes="(max-width: 700px) 92vw, 31vw" loading="lazy" decoding="async" /> : null}
                {page === 0 ? <h3>{card.title}</h3> : null}
                {page === endPage ? <p>To be continued.</p> : null}
              </div>
            );
          };

          return (
            <article className="personal-card photo-album-card" data-open={photoPage > 0 || Boolean(photoTurn)} data-reveal key={card.id}>
              <div className="photo-album-stage">
                {renderPage(basePage, "photo-album-page photo-album-base")}
                {turningPage !== null ? (
                  <div
                    className={`photo-album-turn photo-album-turn-${photoTurn?.direction}`}
                    onAnimationEnd={() => {
                      if (!photoTurn) return;
                      setPhotoPage(photoTurn.to);
                      setPhotoTurn(null);
                    }}
                  >
                    {renderPage(turningPage, "photo-album-page")}
                  </div>
                ) : null}
                {photoPage === 0 && !photoTurn ? <button type="button" className="photo-album-open" onClick={() => turnPhoto(1)} aria-label={card.action}><span>{card.action}</span></button> : null}
                {photoPage > 0 || photoTurn ? (
                  <>
                    <button type="button" className="photo-album-close" onClick={() => turnPhoto(0)} disabled={Boolean(photoTurn)} aria-label={labels.close}><span aria-hidden="true" /></button>
                    {photoPage > 1 ? <button type="button" className="photo-album-nav photo-album-nav-previous" onClick={() => turnPhoto(photoPage - 1)} disabled={Boolean(photoTurn)} aria-label={labels.previous}><span aria-hidden="true" /></button> : null}
                    {photoPage < endPage ? <button type="button" className="photo-album-nav photo-album-nav-next" onClick={() => turnPhoto(photoPage + 1)} disabled={Boolean(photoTurn)} aria-label={labels.next}><span aria-hidden="true" /></button> : null}
                  </>
                ) : null}
              </div>
            </article>
          );
        }
        return (
          <article className="personal-card" data-flipped={isFlipped} data-kind={card.id} data-reveal key={card.id}>
            <div className="personal-card-inner">
              <section className="personal-face personal-front" aria-hidden={isFlipped}>
                <div className="personal-photo">
                  {card.image ? (
                    <Image src={card.image} alt={card.imageAlt} fill unoptimized sizes="(max-width: 700px) 92vw, 31vw" loading="lazy" decoding="async" />
                  ) : (
                    <div className="personal-front-placeholder" aria-label={card.imageAlt}>
                      <span>{card.title}</span>
                      <i aria-hidden="true" />
                      <small>{card.subtitle}</small>
                    </div>
                  )}
                  <span className="personal-wash" />
                </div>
                <div className="personal-copy">
                  <span>{card.subtitle}</span>
                  <h3>{card.title}</h3>
                </div>
                <button className="personal-cover-action" type="button" onClick={() => setCardFlipped(card.id, true)} tabIndex={isFlipped ? -1 : 0} aria-label={card.action}>
                  <span>{card.action}</span>
                </button>
              </section>

              <section className="personal-face personal-back" aria-hidden={!isFlipped}>
                <div className="personal-back-head">
                  <div><span>{card.subtitle}</span><h3>{card.backTitle}</h3></div>
                  <button type="button" onClick={() => setCardFlipped(card.id, false)} tabIndex={isFlipped ? 0 : -1}>{labels.close}</button>
                </div>

                {card.id === "dance" ? (
                  <div className="dance-video-placeholder" role="img" aria-label={card.placeholder}>
                    <i aria-hidden="true" />
                    <strong>{card.placeholder}</strong>
                    <span>9:16</span>
                  </div>
                ) : null}

                {card.id === "volunteering" ? (
                  <div className="volunteer-record" aria-label={card.placeholder}>
                    <div className="volunteer-image-placeholder"><span>{card.placeholder}</span></div>
                    <div className="volunteer-copy-placeholder"><strong>{card.placeholder}</strong><i /><i /><i /><i /></div>
                  </div>
                ) : null}
              </section>
            </div>
          </article>
        );
      })}
    </div>
  );
}
