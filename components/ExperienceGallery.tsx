"use client";

type Photo = { src: string; alt: string };

// Focal points preserve faces and evidence inside the shared crop frames.
const evidencePositions: Record<string, string> = {
  "/rednote-1.jpg": "50% 58%",
  "/rednote-2.jpg": "50% 76%",
  "/xdf-1.jpg": "50% 72%",
  "/xdf-2.jpg": "50% 38%",
  "/utu-1.jpg": "50% 42%",
  "/utu-2.jpg": "50% 42%",
};

/** Consistent evidence frames; each link opens the uncropped original. */
export function ExperienceGallery({ images, hero = true }: { images: Photo[]; hero?: boolean }) {
  return <div className="drawer-gallery">{images.map((photo, index) => (
    <figure className="drawer-gallery-photo" data-hero={hero && index === 0} key={photo.src}>
      <a href={photo.src} target="_blank" rel="noopener noreferrer">
        <img src={photo.src} alt={photo.alt} decoding="async"
          style={{ objectPosition: evidencePositions[photo.src] ?? "50% 50%" }} />
      </a>
    </figure>
  ))}</div>;
}

