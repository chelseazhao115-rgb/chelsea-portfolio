import type { Metadata } from "next";
import { Noto_Sans_SC, Plus_Jakarta_Sans } from "next/font/google";
import { ExperienceMotion } from "@/components/ExperienceMotion";
import "./globals.css";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-en" });
const cn = Noto_Sans_SC({ subsets: ["latin"], variable: "--font-cn" });

export const metadata: Metadata = {
  metadataBase: new URL("https://chelsea-zhao-product.sites.openai.com"),
  title: "Chelsea Zhao · Product Portfolio",
  description: "Turning real problems into products people want to use.",
  icons: { icon: "/favicon.svg" },
  openGraph: { images: ["/og-card.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className={`${sans.variable} ${cn.variable}`}>
      <body><ExperienceMotion />{children}</body>
    </html>
  );
}
