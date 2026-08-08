import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { copy, type Locale } from "@/lib/content";

const locales: Locale[] = ["zh", "en"];
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const en = locale === "en";
  return {
    title: en ? "Chelsea Zhao · AI Education Product" : "Chelsea Zhao · AI 教育产品作品集",
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
        <div className="hero-orbit" aria-hidden="true">
          <span className="orbit-line" />
          {(locale === "zh" ? ["观察", "假设", "构建", "验证"] : ["Observe", "Hypothesize", "Build", "Validate"]).map((label, i) => <span className={`orbit-node orbit-node-${i + 1}`} key={label}><i />{label}</span>)}
        </div>
        <div className="shell hero-inner"><div className="hero-copy hero-sequence">
          <p className="eyebrow">{t.heroEyebrow}</p><h1>{t.heroTitle}</h1><p className="hero-intro">{t.heroIntro}</p>
          <div className="tag-row">{t.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className="cta-row"><a className="button button-primary" href="#projects">{t.view} <span>↘</span></a><a className="button button-light" href="/Chelsea_Zhao_Product_Manager_Resume_CN.pdf" download>{t.resume} ↓</a><a className="text-link" href={`mailto:${t.email}`}>{t.contact} ↗</a></div>
          <small>{t.resumeLabel}</small>
        </div></div>
      </section>

      <section className="section shell" id="capabilities" data-reveal>
        <div className="section-head"><div><p className="eyebrow">{t.capabilityKicker}</p><h2>{t.capabilityTitle}</h2></div></div>
        <div className="cap-grid product-loop">{t.capabilities.map(([num, enTitle, title, body], i) => <article className="cap-card" key={num} style={{"--step": i} as CSSProperties}><span className="cap-num">{num}</span><p className="micro">{enTitle}</p><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="section section-tint" id="projects"><div className="shell" data-reveal>
        <div className="section-head"><div><p className="eyebrow">{t.projectKicker}</p><h2>{t.projectTitle}</h2></div><p>{t.projectIntro}</p></div>
        <div className="projects-grid">{t.projects.map((project, i) => <article className={`project-card project-${i + 1}`} key={project.slug} data-reveal>
          <div className="project-media"><Image src={project.image} alt={`${project.title} interface`} fill sizes="(max-width: 800px) 100vw, 55vw" /></div>
          <div className="project-copy"><p className="eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.subtitle}</p><ul>{project.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul><Link className="button button-ghost" href={`/${locale}/projects/${project.slug}`}>{project.cta} →</Link></div>
        </article>)}</div>
        <div className="supporting-head"><p className="eyebrow">{t.supportingKicker}</p><h3>{t.supportingTitle}</h3></div>
        <div className="supporting-grid">{t.supportingProjects.map(([title, meta, body, tags]) => <article key={title}><p className="micro">{meta}</p><h3>{title}</h3><p>{body}</p><div className="mini-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </div></section>

      <section className="section shell" id="experience" data-reveal>
        <div className="section-head"><div><p className="eyebrow">{t.expKicker}</p><h2>{t.expTitle}</h2></div></div>
        <div className="timeline">{t.experiences.map(([company, role, date, body], i) => <article key={company}><div className="timeline-mark">0{i + 1}</div><div><p className="micro">{date}</p><h3>{company}</h3><p className="role">{role}</p><p>{body}</p></div></article>)}</div>
      </section>

      <section className="section education-section" id="education"><div className="shell" data-reveal>
        <div className="section-head"><div><p className="eyebrow">{t.eduKicker}</p><h2>{t.eduTitle}</h2></div></div>
        <div className="education-grid">{t.education.map(([school, degree, date, badge, courses]) => <article key={school}><p className="micro">{date}</p><h3>{school}</h3><p className="role">{degree}</p><strong>{badge}</strong><p>{courses}</p></article>)}</div>
        <div className="proof-block"><div><p className="eyebrow">{t.proofKicker}</p><h3>{t.proofTitle}</h3></div><div className="proof-list">{t.skillGroups.map(([label, value]) => <p key={label}><strong>{label}</strong><span>{value}</span></p>)}</div></div>
      </div></section>

      <section className="section about" id="about"><div className="shell about-grid" data-reveal>
        <div className="about-lead"><p className="eyebrow">{t.aboutKicker}</p><h2>{t.aboutTitle}</h2><p>{t.aboutIntro}</p><div className="about-path"><span>Teaching</span><i>→</i><span>Statistics</span><i>→</i><span>Product</span></div></div>
        <div className="about-cards">{t.aboutCards.map(([title, kicker, body], i) => <article key={title}><span className="life-icon">{["◫", "⌁", "♡"][i]}</span><p className="micro">{kicker}</p><h3>{title}</h3><p>{body}</p></article>)}</div>
      </div></section>

      <section className="contact section" id="contact"><div className="shell contact-inner"><p className="eyebrow">{t.contactKicker}</p><h2>{t.contactTitle}</h2><a className="email-link" href={`mailto:${t.email}`}>{t.email} ↗</a><div className="contact-links"><a href="https://www.rescueducks.xyz" target="_blank" rel="noreferrer">Rescue Ducks</a><Link href={`/${locale}/projects/agora`}>Agora</Link><a href="/Chelsea_Zhao_Product_Manager_Resume_CN.pdf" download>{t.resumeLabel}</a></div></div></section>
    </main>
    <SiteFooter locale={locale} />
  </>;
}
