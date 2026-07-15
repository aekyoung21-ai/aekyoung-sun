import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: {
    default: "선애경 SUN, Aekyoung — 고려대학교 공학교육혁신센터 연구교수",
    template: "%s | 선애경 SUN, Aekyoung",
  },
  description:
    "선애경 (교육학 박사, 고려대학교 공학교육혁신센터 연구교수) — AI in Education, 고등교육, 교육정책·거버넌스 연구자.",
  openGraph: {
    title: "선애경 SUN, Aekyoung",
    description:
      "교육학 박사 · 고려대학교 공학교육혁신센터 연구교수 — AI in Education · 고등교육 · 교육정책",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@latest/dist/web/static/pretendard.css"
        />
      </head>
      <body className="min-h-screen">
        <Nav />
        <div className="lg:pl-60">
          <main className="mx-auto max-w-3xl px-6 py-12 lg:px-12 lg:py-16">
            {children}
          </main>
          <footer className="border-t hairline">
            <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 text-[13px] muted lg:px-12">
              <span>© {new Date().getFullYear()} SUN, Aekyoung</span>
              <Link href="/en" className="hover:opacity-70">
                English
              </Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
