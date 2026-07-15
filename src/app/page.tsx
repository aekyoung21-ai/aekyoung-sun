import Link from "next/link";
import Section from "@/components/Section";
import { profile } from "@/content/profile";
import { highlights } from "@/content/publications";
import { awards } from "@/content/awards";
import { talks } from "@/content/talks";
import { currentProjects } from "@/content/current";

export default function Home() {
  const recentTalks = talks.slice(0, 6);
  const teaser = currentProjects.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* ── Hero ── */}
      <section>
        <p className="accent text-[13px] font-bold uppercase tracking-[0.22em]">
          Researcher · AI in Education
        </p>
        <h1 className="mt-3 text-[44px] font-extrabold leading-[1.1] tracking-tight sm:text-[56px]">
          선애경
        </h1>
        <p className="muted mt-1 text-[18px] tracking-wide">SUN, Aekyoung</p>
        <p className="mt-5 text-[16px] font-medium">
          {profile.degree} · {profile.titleKo}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {profile.keywords.map((k) => (
            <span
              key={k}
              className="accent accent-bg rounded-full px-3.5 py-1.5 text-[13.5px] font-semibold"
            >
              {k}
            </span>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <Section kicker="01 — About">
        <div className="space-y-2.5 text-[15.5px] leading-8">
          {profile.aboutKo.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </Section>

      {/* ── Education ── */}
      <Section kicker="02 — Education" title="학력">
        <ul className="space-y-4">
          {profile.education.map((e) => (
            <li key={e.year} className="flex gap-5">
              <span className="accent shrink-0 pt-0.5 text-[13.5px] font-bold tabular-nums">
                {e.year}
              </span>
              <div>
                <p className="text-[15px] font-semibold leading-6">{e.degree}</p>
                {e.note && (
                  <p className="muted mt-0.5 text-[13.5px] leading-6">{e.note}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Career ── */}
      <Section kicker="03 — Career" title="경력">
        <ul className="divide-y hairline">
          {profile.career.map((c) => (
            <li key={c.period + c.org} className="flex flex-wrap gap-x-5 gap-y-1 py-3">
              <span className="muted w-44 shrink-0 text-[13.5px] tabular-nums">
                {c.period}
              </span>
              <span className="text-[14.5px] font-semibold">{c.role}</span>
              <span className="text-[14.5px]">{c.org}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Selected Publications ── */}
      <Section kicker="04 — Selected Publications" title="대표 논문">
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((p) => (
            <article
              key={p.title}
              className="rounded-xl border hairline p-5 transition-shadow hover:shadow-sm"
            >
              <div className="accent text-[12px] font-bold">
                {p.journal} · {p.year}
              </div>
              <h3 className="mt-2 text-[14.5px] font-bold leading-6">
                {p.title}
              </h3>
              <div className="muted mt-2 text-[12px]">{p.role}</div>
            </article>
          ))}
        </div>
        <Link
          href="/publications"
          className="accent mt-5 inline-block text-[14px] font-bold hover:opacity-70"
        >
          논문·저서 전체 보기 →
        </Link>
      </Section>

      {/* ── Projects (-ing) ── */}
      <Section kicker="05 — Projects" title="프로젝트 (-ing)">
        <ul className="space-y-4">
          {teaser.map((p) => (
            <li key={p.title} className="rounded-xl border hairline p-5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-[15.5px] font-bold">{p.title}</h3>
                <span className="accent accent-bg rounded-full px-2.5 py-0.5 text-[11.5px] font-semibold">
                  {p.status}
                </span>
              </div>
              <p className="muted mt-1.5 text-[13.5px] leading-6">{p.summary}</p>
            </li>
          ))}
        </ul>
        <Link
          href="/projects"
          className="accent mt-5 inline-block text-[14px] font-bold hover:opacity-70"
        >
          전체 보기 →
        </Link>
      </Section>

      {/* ── Awards ── */}
      <Section kicker="06 — Awards" title="수상">
        <ul className="grid gap-x-8 gap-y-2.5 text-[14.5px] sm:grid-cols-2">
          {awards.map((a) => (
            <li key={a.title} className="flex gap-3">
              <span className="muted shrink-0 tabular-nums text-[13px] pt-0.5">
                {a.date}
              </span>
              <span className="leading-6">{a.title}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Recent Talks ── */}
      <Section kicker="07 — Recent Talks" title="최근 특강·발표">
        <ul className="grid gap-3 sm:grid-cols-2">
          {recentTalks.map((t) => (
            <li key={t.date + t.title} className="rounded-xl border hairline p-4">
              <div className="flex items-center gap-2">
                <span className="muted text-[12.5px] tabular-nums">{t.date}</span>
                {t.upcoming && (
                  <span className="accent accent-bg rounded-full px-2 py-0.5 text-[11px] font-semibold">
                    예정
                  </span>
                )}
              </div>
              <p className="mt-1.5 text-[13.5px] font-semibold leading-5">
                {t.host}
              </p>
              <p className="muted mt-0.5 text-[13px] leading-5">{t.title}</p>
            </li>
          ))}
        </ul>
        <Link
          href="/talks"
          className="accent mt-5 inline-block text-[14px] font-bold hover:opacity-70"
        >
          전체 보기 →
        </Link>
      </Section>

      {/* ── Contact ── */}
      <Section kicker="08 — Contact">
        <a
          href={`mailto:${profile.email}`}
          className="accent text-[17px] font-bold hover:opacity-70"
        >
          {profile.email}
        </a>
      </Section>
    </div>
  );
}
