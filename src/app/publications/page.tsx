import type { Metadata } from "next";
import { publications, books } from "@/content/publications";
import { researchProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "논문·저서",
  description: "선애경 — 학술 논문 및 저서, 연구 프로젝트 목록",
};

export default function Publications() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl font-bold tracking-tight">논문</h1>
        <p className="muted mt-2 text-[13.5px]">
          게재 완료 논문 {publications.length}편 · 연도 역순 · APA 표기
        </p>
        <ul className="mt-6 space-y-5">
          {publications.map((p) => (
            <li key={p.title} className="border-b hairline pb-5">
              <div className="flex flex-wrap items-start gap-2">
                <span className="accent accent-bg rounded-full px-2 py-0.5 text-[11.5px] font-semibold">
                  {p.role}
                </span>
                <span className="muted text-[13px]">{p.year}</span>
              </div>
              <p className="mt-2 text-[14.5px] leading-7">
                {p.authors}. ({p.year}). {p.title}.{" "}
                <em className="font-medium">{p.journal}</em>, {p.volume},{" "}
                {p.pages}.
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold tracking-tight">저서</h2>
        <ul className="mt-4 space-y-3">
          {books.map((b) => (
            <li key={b.title} className="text-[14.5px] leading-7">
              <span className="accent accent-bg mr-2 rounded-full px-2 py-0.5 text-[11.5px] font-semibold">
                {b.role}
              </span>
              {b.authors}. ({b.year}). <em className="font-medium">{b.title}</em>.{" "}
              {b.publisher}.
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold tracking-tight">연구 프로젝트</h2>
        <ul className="mt-4 space-y-4">
          {researchProjects.map((pr) => (
            <li key={pr.title} className="rounded-lg border hairline p-4">
              <h3 className="text-[14.5px] font-semibold leading-6">
                {pr.title}
              </h3>
              <p className="muted mt-1 text-[13px]">
                {pr.role} · {pr.period} · {pr.org}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
