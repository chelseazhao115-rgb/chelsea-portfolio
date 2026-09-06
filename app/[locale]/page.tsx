import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { EducationPostcards, ExperienceOrbit, PersonalArchiveCards } from "@/components/InteractivePortfolio";
import { ProjectArchive } from "@/components/ProjectArchive";
import { ProductCapabilities } from "@/components/ProductCapabilities";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { copy, type Locale } from "@/lib/content";

const locales: Locale[] = ["zh", "en"];
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const en = locale === "en";
  return {
    title: en ? "Chelsea Zhao · Product Portfolio" : "Chelsea Zhao · 产品经理作品集",
    description: en ? "Turning real problems into products people want to use." : "把真实的问题，做成愿意被使用的产品。",
    alternates: { languages: { "zh-CN": "/zh", en: "/en" } },
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const t = copy[locale];

  return <>
    <SiteHeader locale={locale} />
    <main id="top">
      <section className="hero">
        <Image src="/hero-chelsea.png" alt={locale === "zh" ? "Chelsea 在湖边草地的自然人像" : "Chelsea in a bright lakeside meadow"} fill priority unoptimized sizes="100vw" className="hero-image" />
        <div className="hero-wash" />
        <div className="hero-compass" aria-hidden="true"><i /><i /><i /></div>
        <div className="shell hero-inner">
          <div className="hero-copy hero-sequence">
            <p className="hero-intro-label">{t.heroEyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-intro">{t.heroIntro}</p>
            <div className="cta-row">
              <a className="button button-primary" href="#projects">{t.view}</a>
              <a className="button button-light" href="/Chelsea_Zhao_Product_Manager_Resume_CN.pdf" download>{t.resume}</a>
              <a className="text-link" href={`mailto:${t.email}`}>{t.contact}</a>
            </div>
            <small>{t.resumeLabel}</small>
          </div>
        </div>
        <a className="scroll-cue" href="#capabilities"><span>{locale === "zh" ? "向下探索" : "Explore below"}</span><i aria-hidden="true" /></a>
      </section>

      <section className="section capability-section" id="capabilities" data-reveal>
        <div className="shell capability-layout">
          <div className="capability-intro">
            <span>{t.capabilityEyebrow}</span>
            <h2>{t.capabilityTitle}</h2>
            <p>{t.capabilityIntro}</p>
            <a className="text-link" href="#projects">{t.view}</a>
          </div>
          <ProductCapabilities items={t.capabilities} />
        </div>
      </section>

      <section className="section project-section" id="projects">
        <div className="shell">
          <div className="section-heading section-heading-wide" data-reveal>
            <h2>{t.projectTitle}</h2>
            <p>{t.projectIntro}</p>
          </div>
          <ProjectArchive locale={locale} projects={t.projects} />
        </div>
      </section>

      <section className="section experience-section shell" id="experience">
        <div className="section-heading section-heading-wide" data-reveal>
          <h2>{t.experienceTitle}</h2>
          <p>{t.experienceIntro}</p>
        </div>
        <div data-reveal>
          <ExperienceOrbit items={t.experiences} hint={t.experienceHint} labels={{ close: t.close, title: t.experiencePanelTitle, evidence: t.selectedEvidence, actions: t.actionsLabel, gallery: t.galleryLabel }} />
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="shell">
          <div className="section-heading section-heading-wide" data-reveal>
            <h2>{t.educationTitle}</h2>
            <p>{t.educationIntro}</p>
          </div>
          <div data-reveal><EducationPostcards items={t.education} hint={t.educationHint} /></div>

          <div className="awards-layout">
            <div className="awards-heading" data-reveal><h2>{t.awardsTitle}</h2><p>{t.awardsIntro}</p></div>
            <div className="honors-scroller">
              <div className="honors-timeline" data-reveal>
                {t.awards.map((award, index) => (
                  <article className="honor-item" data-pending={award.pending} key={award.title}>
                    <span className="honor-dot" aria-hidden="true" />
                    <time>{award.date}</time>
                    <h3>{award.title}</h3>
                    <p>{award.detail}</p>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="toolkit" data-reveal>
            <h2>{t.proofTitle}</h2>
            <div>{t.skillGroups.map((group) => <p key={group.label}><strong>{group.label}</strong><span>{group.value}</span></p>)}</div>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell">
          <div className="about-intro" data-reveal><h2>{t.aboutTitle}</h2><p>{t.aboutIntro}</p></div>
          <PersonalArchiveCards items={t.aboutCards} labels={{ close: t.aboutClose, previous: t.previousPage, next: t.nextPage, page: t.pageLabel }} />
        </div>
      </section>

    </main>
    <SiteFooter locale={locale} email={t.email} title={t.contactTitle} />
  </>;
}
