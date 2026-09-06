import type { Locale } from "@/lib/content";

export function SiteFooter({ locale, email, title }: { locale: Locale; email: string; title: string }) {
  return <footer className="site-footer" id="contact">
    <div className="contact-footer-main">
      <div className="shell contact-footer-layout">
        <div><span className="contact-footer-kicker">{locale === "zh" ? "保持联系" : "LET'S CONNECT"}</span><h2>{title}</h2></div>
        <div className="contact-footer-links">
          <a href={`mailto:${email}`}>
            <span className="contact-footer-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3.5 6.5h17v11h-17zM4 7l8 6 8-6" /></svg></span>
            <span><strong>Email</strong><small>{email}</small></span>
          </a>
        </div>
      </div>
    </div>
    <div className="shell footer-row">
      <span className="wordmark">Chelsea<span>.</span></span>
      <span>© 2026 Chelsea Zhao</span>
      <span>{locale === "zh" ? "保持好奇，继续动手。" : "Stay curious. Keep building."}</span>
      <a className="back-to-top" href="#top" aria-label={locale === "zh" ? "返回顶部" : "Back to top"}><span aria-hidden="true" /></a>
    </div>
  </footer>;
}
