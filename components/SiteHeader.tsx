import Link from "next/link";
import type { Locale } from "@/lib/content";
import { copy } from "@/lib/content";

export function SiteHeader({ locale, path = "", dark = false }: { locale: Locale; path?: string; dark?: boolean }) {
  const t = copy[locale];
  const other = locale === "zh" ? "en" : "zh";
  return <header className={`site-header${dark ? " site-header-dark" : ""}`}><div className="shell nav-wrap">
    <Link className="wordmark" href={`/${locale}`} aria-label="Chelsea home">Chelsea<span>.</span></Link>
    <nav aria-label="Primary navigation">{t.nav.map(([label, href]) => <Link key={href} href={`/${locale}${path ? "" : href}`}>{label}</Link>)}</nav>
    <div className="nav-actions"><Link className="locale" href={`/${other}${path}`}>{other.toUpperCase()}</Link><a className="button button-small button-ghost" href="/Chelsea_Zhao_Product_Manager_Resume_CN.pdf" download>{t.resume}</a></div>
  </div></header>;
}
