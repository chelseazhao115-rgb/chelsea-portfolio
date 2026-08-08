import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyCode } from "@/components/CopyCode";
import { CaseMechanism } from "@/components/CaseMechanism";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { copy, projectCases, type Locale } from "@/lib/content";

type Slug = "rescue-ducks" | "agora";
const locales: Locale[] = ["zh", "en"]; const slugs: Slug[] = ["rescue-ducks", "agora"];
export function generateStaticParams() { return locales.flatMap(locale => slugs.map(slug => ({locale,slug}))); }
export async function generateMetadata({params}:{params:Promise<{locale:string;slug:string}>}):Promise<Metadata>{ const {locale,slug}=await params; const item=projectCases[locale as Locale]?.[slug as Slug]; return item ? {title:`${item.title} · Chelsea Zhao`,description:item.summary} : {}; }

export default async function CasePage({params}:{params:Promise<{locale:string;slug:string}>}){
  const {locale:raw,slug:rawSlug}=await params; if(!locales.includes(raw as Locale)||!slugs.includes(rawSlug as Slug)) notFound(); const locale=raw as Locale; const slug=rawSlug as Slug; const item=projectCases[locale][slug]; const t=copy[locale]; const isRescue=slug==="rescue-ducks";
  return <><SiteHeader locale={locale} path={`/projects/${slug}`}/><main className="case-main">
    <section className={`case-hero ${isRescue?"case-purple":"case-blue"}`}><div className="case-glow" aria-hidden="true"/><div className="shell"><Link className="back-link" href={`/${locale}`}>← {t.back}</Link><div className="case-title hero-sequence"><p className="eyebrow">{item.status}</p><h1>{item.title}</h1><p className="case-lead">{item.lead}</p><p>{item.summary}</p>{"live" in item&&<div className="case-actions"><a className="button button-primary" href={item.live} target="_blank" rel="noreferrer">{t.live} ↗</a><div><span className="code-label">{t.code}</span><CopyCode code={item.access} hint={t.copyHint}/></div></div>}</div><div className="case-shot"><Image src={item.image} alt={`${item.title} product interface`} fill priority sizes="(max-width: 900px) 94vw, 55vw"/></div></div></section>
    <div className="shell"><CaseMechanism locale={locale} slug={slug}/></div>
    <section className="case-body shell"><aside data-reveal><p className="eyebrow">{locale==="zh"?"CASE AT A GLANCE":"CASE AT A GLANCE"}</p>{item.metrics.map(([value,label])=><div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>)}</aside><div className="case-sections">{item.sections.map(([title,body],i)=><article key={title} data-reveal><span>0{i+1}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}</div></section>
    <section className="next-case"><div className="shell"><p className="eyebrow">{locale==="zh"?"NEXT CASE":"NEXT CASE"}</p><Link href={`/${locale}/projects/${isRescue?"agora":"rescue-ducks"}`}>{isRescue?"Agora":"Rescue Ducks"} <span>→</span></Link></div></section>
  </main><SiteFooter locale={locale}/></>;
}
