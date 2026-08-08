import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IntroExperience, ReplayIntro } from "@/components/IntroExperience";
import { AgoraMiniLab, EvidenceDeck, RescueMiniLab } from "@/components/ProjectLabDemos";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { copy, type Locale } from "@/lib/content";

const locales: Locale[] = ["zh", "en"];
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const en = locale === "en";
  return {
    title: en ? "Chelsea Zhao · Product Portfolio" : "Chelsea Zhao · AI产品作品集",
    description: en ? "Turning real problems into products people want to use." : "把真实的问题，做成愿意被使用的产品。",
    alternates: { languages: { "zh-CN": "/zh", en: "/en" } },
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const t = copy[locale];
  const zh = locale === "zh";

  return <>
    <IntroExperience locale={locale} />
    <SiteHeader locale={locale} />
    <main className="lab-home">
      <section className="hero lab-hero">
        <Image src="/hero-chelsea.png" alt={zh ? "Chelsea在湖边草地的自然人像" : "Chelsea in a bright lakeside meadow"} fill priority sizes="100vw" className="hero-image" />
        <div className="hero-wash" />
        <div className="hero-current" aria-hidden="true"><span /><span /><span /></div>
        <div className="shell hero-inner">
          <div className="hero-copy hero-sequence">
            <p className="hero-note">Chelsea Zhao · Product Explorer</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-intro">{t.heroIntro}</p>
            <div className="tag-row">{t.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="cta-row"><a className="button button-primary" href="#experiments">{t.view} <span>↘</span></a><a className="button button-light" href="/Chelsea_Zhao_Product_Manager_Resume_CN.pdf" download>{t.resume} ↓</a></div>
            <ReplayIntro locale={locale} />
          </div>
          <div className="hero-method" aria-label={zh ? "产品方法" : "Product method"}>
            {[zh ? "观察真实摩擦" : "Observe friction", zh ? "做出可用原型" : "Build the product", zh ? "用证据迭代" : "Validate with evidence"].map((item, i) => <div key={item}><span>0{i + 1}</span><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="method-studio section shell" id="capabilities" data-reveal>
        <header className="studio-head"><h2>{t.capabilityTitle}</h2><p>{zh ? "不是技能清单，是证据链。点击卡组，查看每项能力由哪些真实经历和产品证明。" : "Not a skill list, but an evidence chain. Open each deck to see the experience and products behind the capability."}</p></header>
        <EvidenceDeck locale={locale} />
      </section>

      <section className="experiment-zone" id="experiments">
        <div className="shell experiment-intro" data-reveal><h2>{t.projectTitle}</h2><p>{zh ? `两个问题，两个实验场。${t.projectIntro}` : `Two problems, two product experiments. ${t.projectIntro}`}</p></div>
        <article className="experiment rescue-world" data-reveal>
          <div className="shell experiment-grid">
            <div className="experiment-story"><span className="case-index">A · LIVE PRODUCT</span><h3>Rescue Ducks</h3><p>{t.projects[0].subtitle}</p><ul>{t.projects[0].facts.map((fact) => <li key={fact}>{fact}</li>)}</ul><Link className="experiment-link" href={`/${locale}/projects/rescue-ducks`}>{t.projects[0].cta}<span>↗</span></Link></div>
            <div className="experiment-device"><div className="device-window"><Image src="/rescue-ducks-live.png" alt="Rescue Ducks product interface" fill sizes="(max-width: 800px) 92vw, 55vw" /></div><RescueMiniLab locale={locale} /></div>
          </div>
        </article>
        <article className="experiment agora-world" data-reveal>
          <div className="shell experiment-grid">
            <div className="experiment-story"><span className="case-index">B · AI LEARNING AGENT</span><h3>Agora</h3><p>{t.projects[1].subtitle}</p><ul>{t.projects[1].facts.map((fact) => <li key={fact}>{fact}</li>)}</ul><Link className="experiment-link" href={`/${locale}/projects/agora`}>{t.projects[1].cta}<span>↗</span></Link></div>
            <div className="experiment-device"><div className="device-window"><Image src="/agora-live.png" alt="Agora product interface" fill sizes="(max-width: 800px) 92vw, 55vw" /></div><AgoraMiniLab locale={locale} /></div>
          </div>
        </article>
      </section>

      <section className="journey section" id="experience"><div className="shell">
        <header className="journey-head" data-reveal><h2>{t.expTitle}</h2><p>{zh ? "能力不是突然出现的。每段经历留下一个可迁移的产品能力，沿着路线看它们如何汇合。" : "Capability is accumulated. Each experience leaves a transferable product capability; follow how they converge."}</p></header>
        <div className="journey-route">
          <div className="route-line" aria-hidden="true" />
          {t.experiences.map(([company, role, date, body], i) => <article key={company} data-reveal className={i % 2 ? "route-right" : "route-left"}><div className="route-node"><span>{i + 1}</span></div><div className="route-copy"><time>{date}</time><h3>{company}</h3><strong>{role}</strong><p>{body}</p></div></article>)}
        </div>
      </div></section>

      <section className="proof-landscape section" id="education"><div className="shell" data-reveal>
        <div className="proof-title"><h2>{t.eduTitle}</h2></div>
        <div className="proof-layout">
          <div className="education-stack">{t.education.map(([school, degree, date, badge, courses], i) => <article key={school} style={{"--school": i} as CSSProperties}><time>{date}</time><h3>{school}</h3><p>{degree}</p><strong>{badge}</strong><small>{courses}</small></article>)}</div>
          <div className="proof-ledger">{t.skillGroups.map(([label, value]) => <p key={label}><strong>{label}</strong><span>{value}</span></p>)}</div>
        </div>
      </div></section>

      <section className="about section" id="about"><div className="shell about-grid" data-reveal>
        <div className="about-lead"><h2>{t.aboutTitle}</h2><p>{t.aboutIntro}</p><div className="about-path"><span>Teaching</span><i>→</i><span>Statistics</span><i>→</i><span>Product</span></div></div>
        <div className="about-scenes">{t.aboutCards.map(([title, kicker, body], i) => <article key={title}><span className="scene-number">0{i + 1}</span><p>{kicker}</p><h3>{title}</h3><small>{body}</small></article>)}</div>
      </div></section>

      <section className="contact section" id="contact"><div className="shell contact-inner" data-reveal><h2>{t.contactTitle}</h2><p>{zh ? "下一次产品讨论，从这里开始。" : "Start the next product conversation here."}</p><a className="email-link" href={`mailto:${t.email}`}>{t.email} ↗</a><div className="contact-links"><a href="https://www.rescueducks.xyz" target="_blank" rel="noreferrer">Rescue Ducks</a><Link href={`/${locale}/projects/agora`}>Agora</Link><a href="/Chelsea_Zhao_Product_Manager_Resume_CN.pdf" download>{t.resumeLabel}</a></div></div></section>
    </main>
    <SiteFooter locale={locale} />
  </>;
}
