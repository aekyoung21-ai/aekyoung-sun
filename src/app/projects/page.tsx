import type { Metadata } from "next";
import { currentProjects } from "@/content/current";

export const metadata: Metadata = {
  title: "프로젝트 (-ing)",
  description: "선애경 — 지금 진행하고 있는 연구와 프로젝트",
};

export default function Projects() {
  return (
    <div>
      <p className="accent text-[12px] font-bold uppercase tracking-[0.3em]">
        Projects in Progress
      </p>
      <h1 className="serif mt-3 text-[40px] font-black tracking-tight">
        프로젝트 <span className="accent">(-ing)</span>
      </h1>
      <p className="muted mt-2 text-[14px]">지금 하고 있는 일들 — 개요만 간단히.</p>

      <ul className="mt-8 space-y-8">
        {currentProjects.map((p, i) => (
          <li
            key={p.title}
            className="grid grid-cols-1 gap-4 border-t-2 rule pt-5 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-12"
          >
            <div>
              <div className="serif text-[40px] font-black leading-none opacity-15">
                {String(i + 1).padStart(2, "0")}
              </div>
              <span className="accent accent-bg mt-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold">
                {p.status}
              </span>
            </div>
            <div>
              <h2 className="serif text-[22px] font-bold leading-snug">
                {p.title}
              </h2>
              <p className="mt-3 max-w-[720px] text-[15px] leading-8">
                {p.summary}
              </p>
              <p className="muted mt-3 text-[13px] uppercase tracking-wider">
                {p.role} · {p.since} ~
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
