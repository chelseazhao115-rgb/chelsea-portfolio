import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CapabilityDeck, EducationPostcards, ExperienceOrbit } from "@/components/InteractivePortfolio";
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
    <main>
      <section className="hero">
        <Image src="/hero-chelsea.png" alt={locale === "zh" ? "Chelsea 在湖边草地的自然人像" : "Chelsea in a bright lakeside meadow"} fill priority sizes="100vw" className="hero-image" />
        <div className="hero-wash" />
        <div className="hero-compass" aria-hidden="true"><i /><i /><i /></div>
        <div className="shell hero-inner">
          <div className="hero-copy hero-sequence">
            <p className="hero-intro-label">{t.heroEyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-intro">{t.heroIntro}</p>
            <div className="tag-row">{t.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="cta-row">
              <a className="button button-primary" href="#projects">{t.view}<span aria-hidden="true">↘</span></a>
              <a className="button button-light" href="/Chelsea_Zhao_Product_Manager_Resume_CN.pdf" download>{t.resume}<span aria-hidden="true">↓</span></a>
              <a className="text-link" href={`mailto:${t.email}`}>{t.contact}<span aria-hidden="true">↗</span></a>
            </div>
            <small>{t.resumeLabel}</small>
          </div>
        </div>
        <a className="scroll-cue" href="#capabilities"><span>{locale === "zh" ? "向下探索" : "Explore below"}</span><i aria-hidden="true" /></a>
      </section>

      <section className="section capability-section shell" id="capabilities" data-reveal>
        <div className="section-heading">
          <h2>{t.capabilityTitle}</h2>
          <p>{t.capabilityIntro}</p>
        </div>
        <CapabilityDeck items={t.capabilities} />
      </section>

      <section className="section project-section" id="projects">
        <div className="shell">
          <div className="section-heading section-heading-wide" data-reveal>
            <h2>{t.projectTitle}</h2>
            <p>{t.projectIntro}</p>
          </div>
          <div className="project-archive">
            {t.projects.map((project, index) => (
              <Link className={`archive-card ${index < 2 ? "archive-card-featured" : "archive-card-compact"}`} href={`/${locale}/projects/${project.slug}`} key={project.slug} data-reveal>
                <div className="archive-media"><Image src={project.image} alt={`${project.title} interface`} fill sizes={index < 2 ? "(max-width: 900px) 94vw, 52vw" : "(max-width: 700px) 94vw, 42vw"} /></div>
                <div className="archive-copy">
                  <span className="archive-kind">{project.kind}</span>
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                  <div className="archive-preview" aria-label={locale === "zh" ? "问题、行动与证据" : "Problem, action and evidence"}>
                    {project.preview.map((value, itemIndex) => <span key={value}><small>{locale === "zh" ? ["问题", "行动", "证据"][itemIndex] : ["Problem", "Action", "Evidence"][itemIndex]}</small>{value}</span>)}
                  </div>
                  <div className="archive-footer"><span>{project.facts.join(" · ")}</span><strong>{project.cta}<i aria-hidden="true">→</i></strong></div>
                </div>
              </Link>
            ))}
          </div>
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

          <div className="toolkit" data-reveal>
            <h2>{t.proofTitle}</h2>
            <div>{t.skillGroups.map((group) => <p key={group.label}><strong>{group.label}</strong><span>{group.value}</span></p>)}</div>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell">
          <div className="about-intro" data-reveal><h2>{t.aboutTitle}</h2><p>{t.aboutIntro}</p></div>
          <div className="developing-grid">
            {t.aboutCards.map((card) => (
              <article className="developing-card" key={card.title} data-reveal>
                <div className="developing-photo">
                  {card.image ? <Image src={card.image} alt={card.imageAlt} fill sizes="(max-width: 700px) 92vw, 31vw" /> : <div className="developing-placeholder" aria-label={card.imageAlt}><span>{card.title}</span><small>{card.placeholder}</small></div>}
                  <span className="developing-wash" />
                </div>
                <div><span>{card.subtitle}</span><h3>{card.title}</h3><p>{card.body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="shell contact-inner">
          <h2>{t.contactTitle}</h2>
          <a className="email-link" href={`mailto:${t.email}`}>{t.email}<span aria-hidden="true">↗</span></a>
          <div className="contact-links"><a href="https://www.rescueducks.xyz" target="_blank" rel="noreferrer">Rescue Ducks</a><Link href={`/${locale}/projects/agora`}>Agora</Link><a href="/Chelsea_Zhao_Product_Manager_Resume_CN.pdf" download>{t.resumeLabel}</a></div>
        </div>
      </section>
    </main>
    <SiteFooter locale={locale} />
  </>;
}
