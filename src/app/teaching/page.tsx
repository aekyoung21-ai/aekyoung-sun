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
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl font-bold tracking-tight">강의</h1>
        <p className="muted mt-2 text-[13.5px]">
          전 주차에 AI 실습을 결합한 수업을 설계·운영합니다 — {teachingAward}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {courses.map((c) => (
            <article key={c.name} className="rounded-lg border hairline p-5">
              <h2 className="text-[17px] font-semibold">{c.name}</h2>
              <p className="accent mt-0.5 text-[13px] font-medium">{c.level}</p>
              <p className="mt-3 text-[14px] leading-7">{c.desc}</p>
              <ul className="mt-3 space-y-1.5">
                {c.features.map((f) => (
                  <li key={f} className="muted flex gap-2 text-[13.5px] leading-6">
                    <span className="accent shrink-0">·</span>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold tracking-tight">
          교육 실적 <span className="muted text-[14px] font-normal">(2024~)</span>
        </h2>
        <table className="mt-4 w-full border-collapse text-[14.5px]">
          <thead>
            <tr className="border-b hairline text-left">
              <th className="py-2 pr-4 font-semibold">학기</th>
              <th className="py-2 pr-4 font-semibold">과목</th>
              <th className="py-2 font-semibold">기관</th>
            </tr>
          </thead>
          <tbody>
            {teachingHistory.map((r) => (
              <tr key={r.semester} className="border-b hairline">
                <td className="py-2.5 pr-4 tabular-nums">{r.semester}</td>
                <td className="py-2.5 pr-4">{r.courses}</td>
                <td className="muted py-2.5">{r.org}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-xl font-bold tracking-tight">수업 혁신 지원</h2>
        <ul className="mt-4 space-y-2">
          {teachingSupport.map((s) => (
            <li key={s} className="flex gap-2 text-[14.5px] leading-7">
              <span className="accent shrink-0">·</span>
              {s}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
