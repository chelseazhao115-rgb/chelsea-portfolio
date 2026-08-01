import type { Locale } from "@/lib/content";

export function SiteFooter({ locale }: { locale: Locale }) {
  return <footer><div className="shell footer-row"><span className="wordmark">Chelsea<span>.</span></span><span>© 2026 Chelsea Zhao · {locale === "zh" ? "持续好奇，持续验证。" : "Stay curious. Keep validating."}</span></div></footer>;
}
