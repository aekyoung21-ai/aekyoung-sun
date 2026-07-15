"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const items = [
  { href: "/", label: "홈", no: "01" },
  { href: "/publications", label: "논문·저서", no: "02" },
  { href: "/projects", label: "프로젝트", no: "03" },
  { href: "/talks", label: "특강·발표", no: "04" },
  { href: "/teaching", label: "강의", no: "05" },
  { href: "/en", label: "English", no: "06" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── 데스크톱: 좌측 고정 사이드바 ── */}
      <aside
        className="fixed inset-y-0 left-0 z-40 hidden w-60 flex-col justify-between border-r hairline px-7 py-10 lg:flex"
        style={{ background: "var(--background)" }}
      >
        <div>
          <Link href="/" className="block">
            <div className="serif text-[28px] font-black leading-tight tracking-tight">
              선애경
            </div>
            <div className="muted mt-0.5 text-[12.5px] tracking-[0.12em]">
              SUN, Aekyoung
            </div>
          </Link>

          <nav className="mt-12">
            <ul className="space-y-1">
              {items.map((it) => {
                const active = isActive(pathname, it.href);
                return (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className={`group flex items-baseline gap-3 rounded-md px-3 py-2.5 text-[15px] transition-colors ${
                        active
                          ? "accent accent-bg font-bold"
                          : "hover:opacity-60"
                      }`}
                    >
                      <span
                        className={`text-[11px] tabular-nums ${
                          active ? "accent" : "muted"
                        }`}
                      >
                        {it.no}
                      </span>
                      {it.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="muted text-[12px] leading-5">
          교육학 박사
          <br />
          고려대학교 공학교육혁신센터
          <br />
          <a href="mailto:aekyoung21@korea.ac.kr" className="accent">
            aekyoung21@korea.ac.kr
          </a>
        </div>
      </aside>

      {/* ── 모바일: 상단 바 + 오버레이 메뉴 ── */}
      <header
        className="sticky top-0 z-50 border-b hairline lg:hidden"
        style={{ background: "var(--background)" }}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <Link href="/" className="text-[16px] font-extrabold tracking-tight">
            선애경{" "}
            <span className="muted text-[12px] font-normal">SUN, Aekyoung</span>
          </Link>
          <button
            aria-label="메뉴"
            className="p-1"
            onClick={() => setOpen(!open)}
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          </button>
        </div>
        {open && (
          <nav className="border-t hairline px-5 py-2">
            <ul>
              {items.map((it) => (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-baseline gap-3 py-3 text-[15px] ${
                      isActive(pathname, it.href) ? "accent font-bold" : ""
                    }`}
                  >
                    <span className="muted text-[11px] tabular-nums">
                      {it.no}
                    </span>
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
