import Link from "next/link";
import Section from "@/components/Section";
import TalkRow from "@/components/TalkRow";
import { profile } from "@/content/profile";
import { highlights } from "@/content/publications";
import { awards } from "@/content/awards";
import { talks } from "@/content/talks";
import { currentProjects } from "@/content/current";

export default function Home() {
  const recentTalks = talks.slice(0, 6);
  const teaser = currentProjects.slice(0, 3);

  return (
    <div className="space-y-14">
      {/* ── 매거진 마스트헤드 ── */}
      <section className="pb-2">
        <div className="accent text-[12px] font-bold uppercase tracking-[0.3em]">
          Researcher · AI in Education
        </div>
        <h1 className="serif mt-4 text-[64px] font-black leading-[1.02] tracking-tight sm:text-[88px]">
          선애경
        </h1>
        <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="muted text-[19px] tracking-[0.08em]">
            SUN, Aekyoung
          </span>
          <span className="text-[16px] font-semibold">
            {profile.degree} · {profile.titleKo}
          </span>
        </div>
        <div className="accent-fill mt-7 h-[5px] w-24" />
        <p className="mt-5 text-[13.5px] font-bold uppercase tracking-[0.14em]">
          {profile.keywords.join("  /  ")}
        </p>
      </section>

      {/* 01 About */}
      <Section no="01" kicker="About" title="소개">
        <div className="max-w-[720px] space-y-3 text-[16px] leading-8">
          {profile.aboutKo.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </Section>

      {/* 02 Education */}
      <Section no="02" kicker="Education" title="학력">
        <ul>
          {profile.education.map((e) => (
            <li
              key={e.year}
              className="grid grid-cols-1 gap-x-6 gap-y-0.5 border-b hairline py-4 sm:grid-cols-[96px_minmax(0,1fr)]"
            >
              <span className="accent text-[13.5px] font-bold tabular-nums">
                {e.year}
              </span>
              <div>
                <p className="text-[15.5px] font-bold leading-6">{e.degree}</p>
                {e.note && (
                  <p className="muted mt-1 text-[13.5px] leading-6">{e.note}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* 03 Career */}
      <Section no="03" kicker="Career" title="경력">
        <ul>
          {profile.career.map((c) => (
            <li
              key={c.period + c.org}
              className="grid grid-cols-1 items-baseline gap-x-6 gap-y-0.5 border-b hairline py-3.5 sm:grid-cols-[190px_140px_minmax(0,1fr)]"
            >
              <span className="muted text-[13.5px] tabular-nums">
                {c.period}
              </span>
              <span className="text-[15px] font-extrabold">{c.role}</span>
              <span className="text-[15px]">{c.org}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 04 Selected Publications */}
      <Section no="04" kicker="Selected Publications" title="대표 논문">
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((p) => (
            <article key={p.title} className="border-t-2 rule pt-4">
              <div className="accent text-[12.5px] font-bold">
                {p.journal} · {p.year}
              </div>
              <h3 className="serif mt-2 text-[16.5px] font-bold leading-[1.5]">
                {p.title}
              </h3>
              <div className="muted mt-2 text-[12px] uppercase tracking-wider">
                {p.role}
              </div>
            </article>
          ))}
        </div>
        <Link
          href="/publications"
          className="accent mt-7 inline-block text-[14px] font-bold hover:opacity-70"
        >
          논문·저서 전체 보기 →
        </Link>
      </Section>

      {/* 05 Projects (-ing) */}
      <Section no="05" kicker="Projects" title="프로젝트 (-ing)">
        <ul className="grid gap-5 md:grid-cols-3">
          {teaser.map((p) => (
            <li key={p.title} className="border-t-2 rule pt-4">
              <span className="accent accent-bg rounded-full px-2.5 py-0.5 text-[11px] font-bold">
                {p.status}
              </span>
              <h3 className="serif mt-2.5 text-[16.5px] font-bold leading-[1.5]">
                {p.title}
              </h3>
              <p className="muted mt-2 text-[13px] leading-6">{p.summary}</p>
            </li>
          ))}
        </ul>
        <Link
          href="/projects"
          className="accent mt-7 inline-block text-[14px] font-bold hover:opacity-70"
        >
          전체 보기 →
        </Link>
      </Section>

      {/* 06 Awards */}
      <Section no="06" kicker="Awards" title="수상">
        <ul className="grid gap-x-10 gap-y-3 text-[14.5px] md:grid-cols-2">
          {awards.map((a) => (
            <li key={a.title} className="flex gap-4 border-b hairline pb-3">
              <span className="muted shrink-0 pt-0.5 text-[13px] tabular-nums">
                {a.date}
              </span>
              <span className="font-medium leading-6">{a.title}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 07 Recent Talks — 가로형 행 */}
      <Section no="07" kicker="Recent Talks" title="최근 특강·발표">
        <ul className="border-t hairline">
          {recentTalks.map((t) => (
            <TalkRow key={t.date + t.title} t={t} />
          ))}
        </ul>
        <Link
          href="/talks"
          className="accent mt-6 inline-block text-[14px] font-bold hover:opacity-70"
        >
          전체 보기 →
        </Link>
      </Section>

      {/* 08 Contact */}
      <Section no="08" kicker="Contact" title="연락처">
        <a
          href={`mailto:${profile.email}`}
          className="serif accent text-[24px] font-bold hover:opacity-70"
        >
          {profile.email}
        </a>
      </Section>
    </div>
  );
}
