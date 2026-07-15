import type { Metadata } from "next";
import { publications, books } from "@/content/publications";
import { researchProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "논문·저서",
  description: "선애경 — 학술 논문 및 저서, 연구 프로젝트 목록",
};

export default function Publications() {
  return (
    <div className="space-y-14">
      <section>
        <p className="accent text-[12px] font-bold uppercase tracking-[0.3em]">
          Publications
        </p>
        <h1 className="serif mt-3 text-[40px] font-black tracking-tight">
          논문 · 저서
        </h1>
        <p className="muted mt-2 text-[14px]">
          게재 완료 논문 {publications.length}편 + 저서 {books.length}권 · 연도
          역순 · APA 표기
        </p>

        <ul className="mt-8 border-t-2 rule">
          {publications.map((p) => (
            <li
              key={p.title}
              className="grid grid-cols-1 gap-x-8 gap-y-1 border-b hairline py-5 sm:grid-cols-[64px_minmax(0,1fr)_92px]"
            >
              <span className="serif text-[17px] font-bold tabular-nums">
                {p.year}
              </span>
              <p className="text-[15px] leading-7">
                {p.authors}. ({p.year}). <b>{p.title}</b>.{" "}
                <em className="font-medium">{p.journal}</em>, {p.volume},{" "}
                {p.pages}.
              </p>
              <span className="justify-self-start sm:justify-self-end">
                <span className="accent accent-bg rounded-full px-2.5 py-0.5 text-[11.5px] font-bold">
                  {p.role}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t-2 rule pt-6">
        <h2 className="serif text-[24px] font-bold tracking-tight">저서</h2>
        <ul className="mt-4">
          {books.map((b) => (
            <li
              key={b.title}
              className="grid grid-cols-1 gap-x-8 gap-y-1 border-b hairline py-5 sm:grid-cols-[64px_minmax(0,1fr)_92px]"
            >
              <span className="serif text-[17px] font-bold tabular-nums">
                {b.year}
              </span>
              <p className="text-[15px] leading-7">
                {b.authors}. ({b.year}). <b>{b.title}</b>. {b.publisher}.
              </p>
              <span className="justify-self-start sm:justify-self-end">
                <span className="accent accent-bg rounded-full px-2.5 py-0.5 text-[11.5px] font-bold">
                  {b.role}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t-2 rule pt-6">
        <h2 className="serif text-[24px] font-bold tracking-tight">
          연구 프로젝트
        </h2>
        <ul className="mt-4">
          {researchProjects.map((pr) => (
            <li
              key={pr.title}
              className="grid grid-cols-1 items-baseline gap-x-8 gap-y-1 border-b hairline py-4 sm:grid-cols-[170px_minmax(0,1fr)_220px]"
            >
              <span className="muted text-[13.5px] tabular-nums">
                {pr.period}
              </span>
              <p className="text-[14.5px] font-semibold leading-6">
                {pr.title}
                <span className="muted ml-2 font-normal">— {pr.role}</span>
              </p>
              <span className="muted text-[13.5px] sm:justify-self-end">
                {pr.org}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
