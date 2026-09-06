"use client";

import { useState, type CSSProperties } from "react";

type Photo = { src: string; alt: string };

function EditorialPhoto({ photo, hero }: { photo: Photo; hero: boolean }) {
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);
  const measure = (image: HTMLImageElement) => {
    if (!image.naturalWidth || !image.naturalHeight) return;
    setDimensions((previous) => previous?.width === image.naturalWidth && previous.height === image.naturalHeight
      ? previous : { width: image.naturalWidth, height: image.naturalHeight });
  };
  const ratio = dimensions ? dimensions.width / dimensions.height : null;
  const shape = ratio === null ? "pending" : ratio >= 1.35 ? "landscape" : ratio >= 0.8 ? "regular" : "portrait";

  return (
    <figure className="drawer-gallery-photo" data-shape={shape} data-hero={hero}
      style={dimensions ? { "--photo-ratio": ratio, "--photo-width": `${dimensions.width}px` } as CSSProperties : undefined}>
      <img src={photo.src} alt={photo.alt} decoding="async"
        ref={(image) => { if (image?.complete) measure(image); }}
        onLoad={(event) => measure(event.currentTarget)} />
    </figure>
  );
}

/** Ordered rows, with intrinsic image sizing rather than equal-height crops. */
export function ExperienceGallery({ images }: { images: Photo[] }) {
  return <div className="drawer-gallery">{images.map((photo, index) => (
    <EditorialPhoto key={photo.src} photo={photo} hero={index === 0} />
  ))}</div>;
}
