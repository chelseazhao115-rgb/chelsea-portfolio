import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { CopyCode } from "@/components/CopyCode";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { copy, projectCases, type Locale, type ProjectSlug } from "@/lib/content";

const locales: Locale[] = ["zh", "en"];
const slugs: ProjectSlug[] = ["rescue-ducks", "spoken-english-collector", "tencent-bootcamp", "portfolio"];
export function generateStaticParams() { return locales.flatMap((locale) => [...slugs, "agora"].map((slug) => ({ locale, slug }))); }

function CaseVisual({ slug, item }: { slug: ProjectSlug; item: (typeof projectCases)[Locale][ProjectSlug] }) {
  if (slug === "spoken-english-collector") return <div className="case-shot case-shot-spoken" role="img" aria-label="Spoken English Collector product workflow">
    <div className="spoken-detail-visual">
      <span>Browser Extension · V1.0</span>
      <strong>Capture an expression.<br />Keep the context.</strong>
      <ol><li>Region capture + OCR</li><li>AI candidates</li><li>Local library</li><li>HTML review</li></ol>
    </div>
  </div>;
  if (slug === "tencent-bootcamp") return <div className="case-shot case-shot-tencent" role="img" aria-label="Tencent Product Manager Bootcamp">
    <div className="tencent-detail-visual"><span>Tencent 腾讯</span><strong>{item.title}</strong><small>Foundation · Advanced</small></div>
  </div>;
  return <div className="case-shot"><Image src={item.image} alt={`${item.title} product interface`} fill priority sizes="(max-width: 900px) 94vw, 55vw" style={slug === "rescue-ducks" ? { objectFit: "contain" } : undefined} /></div>;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = projectCases[locale as Locale]?.[slug as ProjectSlug];
  return item ? { title: `${item.title} · Chelsea Zhao`, description: item.summary } : {};
}

export default async function CasePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug: rawSlug } = await params;
  if (locales.includes(raw as Locale) && rawSlug === "agora") redirect(`/${raw}/projects/spoken-english-collector`);
  if (!locales.includes(raw as Locale) || !slugs.includes(rawSlug as ProjectSlug)) notFound();
  const locale = raw as Locale;
  const slug = rawSlug as ProjectSlug;
  const item = projectCases[locale][slug];
  const t = copy[locale];
  const index = slugs.indexOf(slug);
  const nextSlug = slugs[(index + 1) % slugs.length];
  const nextItem = projectCases[locale][nextSlug];

  return <>
    <SiteHeader locale={locale} path={`/projects/${slug}`} dark={slug === "tencent-bootcamp"} />
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
          <CaseVisual slug={slug} item={item} />
        </div>
      </section>

      {item.process && <section className="product-process shell" data-reveal aria-labelledby="product-process-title">
        <div className="product-process-heading">
          <h2 id="product-process-title">{item.process.title}</h2>
          <p>{item.process.intro}</p>
        </div>
        <ol className="product-process-track">
          {item.process.steps.map((step, stepIndex) => <li key={step.title}>
            <div className="process-stage">
              <span>{String(stepIndex + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
            </div>
            <strong>{step.question}</strong>
            <p>{step.method}</p>
            <div className="process-evidence" aria-label={locale === "zh" ? "对应证据" : "Related evidence"}>
              {step.evidence.map((evidence) => evidence.href
                ? <Link key={evidence.label} href={evidence.href} data-status={evidence.status}>{evidence.label}</Link>
                : <span key={evidence.label} data-status={evidence.status}>{evidence.label}</span>)}
            </div>
          </li>)}
        </ol>
        <p className="product-process-conclusion">{item.process.conclusion}</p>
      </section>}

      <section className="case-body shell">
        <aside data-reveal>
          <h2>{locale === "zh" ? "案例速览" : "Case at a glance"}</h2>
          {item.metrics.map(([value, label]) => <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </aside>
        <div className="case-sections">
          {item.sections.map(([title, body], sectionIndex) => <article key={title} data-reveal><span>{String(sectionIndex + 1).padStart(2, "0")}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}
        </div>
      </section>

      {item.gallery && <section className="case-gallery shell" data-reveal><h2>{locale === "zh" ? "过程证据" : "Process evidence"}</h2><div>{item.gallery.map((asset) => <figure key={asset.src}><Image src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} sizes="(max-width: 700px) 92vw, 45vw" /></figure>)}</div></section>}

      <section className="next-case"><div className="shell"><span>{t.nextCase}</span><Link href={`/${locale}/projects/${nextSlug}`}>{nextItem.title}</Link></div></section>
    </main>
    <SiteFooter locale={locale} />
  </>;
}
