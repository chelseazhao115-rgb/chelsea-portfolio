import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyCode } from "@/components/CopyCode";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { copy, projectCases, type Locale, type ProjectSlug } from "@/lib/content";

const locales: Locale[] = ["zh", "en"];
const slugs: ProjectSlug[] = ["rescue-ducks", "agora", "tencent-bootcamp", "portfolio"];
export function generateStaticParams() { return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug }))); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = projectCases[locale as Locale]?.[slug as ProjectSlug];
  return item ? { title: `${item.title} · Chelsea Zhao`, description: item.summary } : {};
}

export default async function CasePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug: rawSlug } = await params;
  if (!locales.includes(raw as Locale) || !slugs.includes(rawSlug as ProjectSlug)) notFound();
  const locale = raw as Locale;
  const slug = rawSlug as ProjectSlug;
  const item = projectCases[locale][slug];
  const t = copy[locale];
  const index = slugs.indexOf(slug);
  const nextSlug = slugs[(index + 1) % slugs.length];
  const nextItem = projectCases[locale][nextSlug];

  return <>
    <SiteHeader locale={locale} path={`/projects/${slug}`} />
    <main className="case-main">
      <section className={`case-hero case-${slug}`}>
        <div className="case-glow" aria-hidden="true" />
        <div className="shell">
          <div className="case-title hero-sequence">
            <Link className="back-link" href={`/${locale}`}>{t.back}</Link>
            <span className="case-status">{item.status}</span>
            <h1>{item.title}</h1>
            <p className="case-lead">{item.lead}</p>
            <p>{item.summary}</p>
            {item.live && <div className="case-actions"><a className="button button-primary" href={item.live} target="_blank" rel="noreferrer">{t.live}</a>{item.access && <div><span className="code-label">{t.code}</span><CopyCode code={item.access} hint={t.copyHint} /></div>}</div>}
          </div>
          <div className="case-shot"><Image src={item.image} alt={`${item.title} product interface`} fill priority sizes="(max-width: 900px) 94vw, 55vw" /></div>
        </div>
      </section>

      <section className="case-body shell">
        <aside data-reveal>
          <h2>{locale === "zh" ? "案例速览" : "Case at a glance"}</h2>
          {item.metrics.map(([value, label]) => <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </aside>
        <div className="case-sections">
          {item.sections.map(([title, body], sectionIndex) => <article key={title} data-reveal><span>{String(sectionIndex + 1).padStart(2, "0")}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}
        </div>
      </section>

      {item.gallery && <section className="case-gallery shell" data-reveal><h2>{locale === "zh" ? "过程证据" : "Process evidence"}</h2><div>{item.gallery.map((asset) => <figure key={asset.src}><Image src={asset.src} alt={asset.alt} fill sizes="(max-width: 700px) 92vw, 45vw" /></figure>)}</div></section>}

      <section className="next-case"><div className="shell"><span>{t.nextCase}</span><Link href={`/${locale}/projects/${nextSlug}`}>{nextItem.title}</Link></div></section>
    </main>
    <SiteFooter locale={locale} />
  </>;
}
