import type { Metadata } from "next";
import { talks } from "@/content/talks";

export const metadata: Metadata = {
  title: "특강·발표",
  description: "선애경 — 특강·자문·발표 연대기 (생성형 AI 활용·윤리 중심)",
};

export default function Talks() {
  return (
    <div>
      <p className="accent text-[12px] font-bold uppercase tracking-[0.22em]">
        Talks · Consulting
      </p>
      <h1 className="mt-2 text-[30px] font-extrabold tracking-tight">
        특강 · 자문 · 발표
      </h1>
      <p className="muted mt-2 text-[13.5px]">
        생성형 AI 활용·윤리 중심 {talks.length}건 · 연대기 역순
      </p>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {talks.map((t) => (
          <li
            key={t.date + t.title}
            className="rounded-xl border hairline p-4 transition-shadow hover:shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="muted text-[12.5px] tabular-nums">{t.date}</span>
              <span className="accent accent-bg rounded-full px-2 py-0.5 text-[11px] font-semibold">
                {t.format}
              </span>
              {t.upcoming && (
                <span className="rounded-full border hairline px-2 py-0.5 text-[11px] font-medium">
                  예정
                </span>
              )}
            </div>
            <h2 className="mt-2 text-[14px] font-bold leading-[1.45]">
              {t.title}
            </h2>
            <p className="muted mt-1 text-[12.5px] leading-5">
              {t.host}
              {t.note ? ` · ${t.note}` : ""}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
