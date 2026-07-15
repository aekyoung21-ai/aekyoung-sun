import type { Metadata } from "next";
import {
  courses,
  teachingHistory,
  teachingSupport,
  teachingAward,
} from "@/content/teaching";

export const metadata: Metadata = {
  title: "강의",
  description: "선애경 — 담당 과목과 학기별 교육 실적 (AI 결합 수업 설계)",
};

export default function Teaching() {
  return (
    <div className="space-y-14">
      <section>
        <p className="accent text-[12px] font-bold uppercase tracking-[0.3em]">
          Teaching
        </p>
        <h1 className="serif mt-3 text-[40px] font-black tracking-tight">
          강의
        </h1>
        <p className="muted mt-2 max-w-[720px] text-[14px] leading-6">
          전 주차에 AI 실습을 결합한 수업을 설계·운영합니다 — {teachingAward}
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {courses.map((c) => (
            <article key={c.name} className="border-t-2 rule pt-5">
              <h2 className="serif text-[24px] font-bold">{c.name}</h2>
              <p className="accent mt-1 text-[13px] font-bold uppercase tracking-wider">
                {c.level}
              </p>
              <p className="mt-4 text-[14.5px] leading-7">{c.desc}</p>
              <ul className="mt-4 space-y-2">
                {c.features.map((f) => (
                  <li
                    key={f}
                    className="muted flex gap-2.5 text-[13.5px] leading-6"
                  >
                    <span className="accent shrink-0 font-bold">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t-2 rule pt-6">
        <h2 className="serif text-[24px] font-bold tracking-tight">
          교육 실적{" "}
          <span className="muted text-[15px] font-normal">(2024~)</span>
        </h2>
        <ul className="mt-4">
          {teachingHistory.map((r) => (
            <li
              key={r.semester}
              className="grid grid-cols-1 items-baseline gap-x-8 gap-y-0.5 border-b hairline py-4 sm:grid-cols-[96px_minmax(0,1fr)_140px]"
            >
              <span className="serif text-[16px] font-bold tabular-nums">
                {r.semester}
              </span>
              <span className="text-[15px] font-semibold">{r.courses}</span>
              <span className="muted text-[14px] sm:justify-self-end">
                {r.org}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t-2 rule pt-6">
        <h2 className="serif text-[24px] font-bold tracking-tight">
          수업 혁신 지원
        </h2>
        <ul className="mt-4 space-y-2">
          {teachingSupport.map((s) => (
            <li key={s} className="flex gap-2.5 text-[14.5px] leading-7">
              <span className="accent shrink-0 font-bold">—</span>
              {s}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
