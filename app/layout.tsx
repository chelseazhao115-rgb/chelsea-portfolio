import type { Metadata } from "next";
import { Fraunces, Noto_Sans_SC, Plus_Jakarta_Sans } from "next/font/google";
import { ExperienceMotion } from "@/components/ExperienceMotion";
import "./globals.css";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-en" });
const cn = Noto_Sans_SC({ subsets: ["latin"], variable: "--font-cn" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://chelsea-zhao-product.sites.openai.com"),
  title: "Chelsea Zhao · Product Portfolio",
  description: "Turning real problems into products people want to use.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Chelsea Zhao · Product Explorer", description: "Turning real problems into products people want to use.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Chelsea Zhao · Product Explorer", description: "Turning real problems into products people want to use.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className={`${sans.variable} ${cn.variable} ${display.variable}`}>
      <body><div hidden data-design-contract="44ea0f66">THESIS: product mechanisms become the navigation; refuse the resume-column template. OWN-WORLD: lakeside blue, warm paper, ink halftone, restrained green and violet, real interfaces. STORY: see the problem, touch the mechanism, verify the evidence, contact Chelsea. FIRST VIEWPORT: full lakeside portrait, editorial headline, three-step method instrument, primary work action. FORM: natural manga laboratory, user-pinned direction, seed 44ea0f66. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md.</div><ExperienceMotion />{children}</body>
    </html>
  );
}
