"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ExperienceMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const header = document.querySelector<HTMLElement>(".site-header");
    const hero = document.querySelector<HTMLElement>(".hero");
    root.classList.add("motion-ready");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8%" });
    reveals.forEach((item) => observer.observe(item));

    let frame = 0;
    const updateScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        root.style.setProperty("--page-progress", `${max > 0 ? window.scrollY / max : 0}`);
        header?.toggleAttribute("data-scrolled", window.scrollY > 24);
      });
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    let pointerFrame = 0;
    const moveHero = (event: PointerEvent) => {
      if (!hero || reduced || event.pointerType === "touch") return;
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
        hero.style.setProperty("--pointer-x", x.toFixed(3));
        hero.style.setProperty("--pointer-y", y.toFixed(3));
      });
    };
    hero?.addEventListener("pointermove", moveHero);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScroll);
      hero?.removeEventListener("pointermove", moveHero);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(pointerFrame);
      root.classList.remove("motion-ready");
    };
  }, [pathname]);

  return <div className="reading-progress" aria-hidden="true"><span /></div>;
}
