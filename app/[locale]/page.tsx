import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { copy, type Locale } from "@/lib/content";

const locales: Locale[] = ["zh", "en"];
export function generateStaticParams() { return locales.map(locale => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{locale: string}> }): Promise<Metadata> {
  const { locale } = await params; const en = locale === "en";
  return { title: en ? "Chelsea Zhao · Product Manager" : "Chelsea Zhao · 产品经理作品集", description: en ? "Turning real problems into products people want to use." : "把真实的问题，做成愿意被使用的产品。", alternates: { languages: { "zh-CN": "/zh", en: "/en" } } };
}

export default async function Home({ params }: { params: Promise<{locale: string}> }) {
  const { locale: raw } = await params; if (!locales.includes(raw as Locale)) notFound(); const locale = raw as Locale; const t = copy[locale];
  return <>
    <SiteHeader locale={locale}/>
    <main>
      <section className="hero"><Image src="/hero-chelsea.png" alt={locale === "zh" ? "Chelsea 在湖边草地的自然人像" : "Chelsea in a bright lakeside meadow"} fill priority sizes="100vw" className="hero-image"/><div className="hero-wash"/><div className="shell hero-inner"><div className="hero-copy reveal"><p className="eyebrow">{t.heroEyebrow}</p><h1>{t.heroTitle}</h1><p className="hero-intro">{t.heroIntro}</p><div className="tag-row">{t.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="cta-row"><a className="button button-primary" href="#projects">{t.view} <span>↘</span></a><a className="button button-light" href="/Chelsea_Zhao_Product_Manager_Resume_CN.pdf" download>{t.resume} ↓</a><a className="text-link" href={`mailto:${t.email}`}>{t.contact} ↗</a></div><small>{t.resumeLabel}</small></div></div></section>
      <section className="section shell" id="capabilities"><div className="section-head"><div><p className="eyebrow">{t.capabilityKicker}</p><h2>{t.capabilityTitle}</h2></div></div><div className="cap-grid">{t.capabilities.map(([num,enTitle,title,body]) => <article className="cap-card" key={num}><span className="cap-num">{num}</span><p className="micro">{enTitle}</p><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section className="section section-tint" id="projects"><div className="shell"><div className="section-head"><div><p className="eyebrow">{t.projectKicker}</p><h2>{t.projectTitle}</h2></div><p>{t.projectIntro}</p></div><div className="projects-grid">{t.projects.map((project, i) => <article className={`project-card project-${i+1}`} key={project.slug}><div className="project-media"><Image src={project.image} alt={`${project.title} interface`} fill sizes="(max-width: 800px) 100vw, 55vw"/></div><div className="project-copy"><p className="eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.subtitle}</p><ul>{project.facts.map(f => <li key={f}>{f}</li>)}</ul><Link className="button button-ghost" href={`/${locale}/projects/${project.slug}`}>{project.cta} →</Link></div></article>)}<article className="side-case"><p className="eyebrow">{t.sideTag}</p><h3>{t.sideTitle}</h3><p>{t.sideBody}</p><div className="side-visual" aria-hidden="true"><span>6K+</span><span>248+</span><span>15</span></div></article></div></div></section>
      <section className="section shell" id="experience"><div className="section-head"><div><p className="eyebrow">{t.expKicker}</p><h2>{t.expTitle}</h2></div></div><div className="timeline">{t.experiences.map(([company,role,date,body], i) => <article key={company}><div className="timeline-mark">0{i+1}</div><div><p className="micro">{date}</p><h3>{company}</h3><p className="role">{role}</p><p>{body}</p></div></article>)}</div></section>
      <section className="section about" id="about"><div className="shell about-grid"><div className="about-lead"><p className="eyebrow">{t.aboutKicker}</p><h2>{t.aboutTitle}</h2><p>{t.aboutIntro}</p><div className="about-path"><span>Teaching</span><i>→</i><span>Statistics</span><i>→</i><span>Product</span></div></div><div className="about-cards">{t.aboutCards.map(([title,kicker,body],i) => <article key={title}><span className="life-icon">{["◫","⌁","♡"][i]}</span><p className="micro">{kicker}</p><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <section className="contact section" id="contact"><div className="shell contact-inner"><p className="eyebrow">{t.contactKicker}</p><h2>{t.contactTitle}</h2><a className="email-link" href={`mailto:${t.email}`}>{t.email} ↗</a><div className="contact-links"><a href="https://www.rescueducks.xyz" target="_blank" rel="noreferrer">Rescue Ducks</a><Link href={`/${locale}/projects/agora`}>Agora</Link><a href="/Chelsea_Zhao_Product_Manager_Resume_CN.pdf" download>{t.resumeLabel}</a></div></div></section>
    </main><SiteFooter locale={locale}/>
  </>;
}
