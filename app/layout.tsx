import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Link from "next/link";
import Mascot from "@/components/Mascot";
import "./globals.css";

const notoKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-kr",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nunnunanna.mirinae.app"),
  title: {
    default: "눈누난나 — 20초 눈 운동, 눈 건강 지킴이",
    template: "%s | 눈누난나",
  },
  description:
    "스마트폰에 지친 눈을 위한 20초 눈 스트레칭. 따라만 하면 되는 눈 운동 가이드와 20-20-20 리마인더로 눈 건강을 지켜요.",
  keywords: ["눈 운동", "눈 건강", "20-20-20", "눈 스트레칭", "눈 피로", "안구건조"],
  openGraph: {
    title: "눈누난나 — 20초 눈 운동, 눈 건강 지킴이",
    description:
      "스마트폰에 지친 눈, 딱 20초면 살아나요. 눈 운동 가이드 + 20-20-20 리마인더.",
    url: "https://nunnunanna.mirinae.app",
    siteName: "눈누난나",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoKr.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-20 border-b border-nn-blue-soft bg-white/90 backdrop-blur">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-3">
            <Link href="/" className="flex items-center gap-2">
              <Mascot size={34} legs={false} />
              <span className="text-lg font-black tracking-tight">눈누난나</span>
            </Link>
            <Link
              href="/exercise"
              className="rounded-full bg-nn-blue px-5 py-2 text-sm font-bold text-white transition hover:bg-nn-blue-deep"
            >
              눈 운동 하기
            </Link>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <footer className="border-t border-nn-blue-soft bg-nn-blue-soft/40">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-nn-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 미리내 ·{" "}
              <a href="https://mirinae.app" className="underline-offset-2 hover:underline">
                mirinae.app
              </a>
            </p>
            <nav className="flex gap-4">
              <Link href="/privacy" className="hover:text-nn-ink">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="hover:text-nn-ink">
                이용약관
              </Link>
              <span className="text-nn-blue-deep font-medium">iOS 앱 준비 중 🍎</span>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
