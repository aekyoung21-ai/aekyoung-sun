import type { Metadata } from "next";
import { currentProjects } from "@/content/current";

export const metadata: Metadata = {
  title: "프로젝트 (-ing)",
  description: "선애경 — 지금 진행하고 있는 연구와 프로젝트",
};

export default function Projects() {
  return (
    <div>
      <p className="accent text-[12px] font-bold uppercase tracking-[0.22em]">
        Projects in Progress
      </p>
      <h1 className="mt-2 text-[30px] font-extrabold tracking-tight">
        프로젝트 <span className="accent">(-ing)</span>
      </h1>
      <p className="muted mt-2 text-[13.5px]">지금 하고 있는 일들 — 개요만 간단히.</p>

      <ul className="mt-8 space-y-4">
        {currentProjects.map((p) => (
          <li
            key={p.title}
            className="rounded-xl border hairline p-5 transition-shadow hover:shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-[16px] font-bold">{p.title}</h2>
              <span className="accent accent-bg rounded-full px-2.5 py-0.5 text-[11.5px] font-semibold">
                {p.status}
              </span>
            </div>
            <p className="mt-2 text-[14px] leading-7">{p.summary}</p>
            <p className="muted mt-2 text-[13px]">
              {p.role} · {p.since} ~
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
