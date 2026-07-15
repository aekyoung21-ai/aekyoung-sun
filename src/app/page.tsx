import Link from "next/link";
import Section from "@/components/Section";
import TalkRow from "@/components/TalkRow";
import { profile } from "@/content/profile";
import { highlights } from "@/content/publications";
import { awards } from "@/content/awards";
import { talks } from "@/content/talks";
import { currentProjects } from "@/content/current";

/* ── 재사용 콘텐츠 블록 (데스크톱 섹션 + 모바일 아코디언 공용) ── */

function EducationList() {
  return (
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
  );
}

function CareerBlock() {
  return (
    <>
      {/* 핵심 직책 — 상단 강조 */}
      <div className="grid gap-4 sm:grid-cols-2">
        {profile.career
          .filter((c) => c.primary)
          .map((c) => (
            <div
              key={c.period + c.org}
              className="accent-bg rounded-xl border-l-4 p-5"
              style={{ borderColor: "var(--accent)" }}
            >
              <div className="serif accent text-[22px] font-bold leading-tight">
                {c.role}
              </div>
              <div className="mt-1 text-[15.5px] font-semibold">{c.org}</div>
              <div className="muted mt-1.5 text-[13px] tabular-nums">
                {c.period}
              </div>
            </div>
          ))}
      </div>
      {/* 나머지 경력 */}
      <ul className="mt-5">
        {profile.career
          .filter((c) => !c.primary)
          .map((c) => (
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
    </>
  );
}

function AwardsList() {
  return (
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
  );
}

function ContactBlock() {
  return (
    <div className="space-y-2">
      <a
        href={`mailto:${profile.email}`}
        className="serif accent block text-[22px] font-bold hover:opacity-70 sm:text-[24px]"
      >
        {profile.email}
      </a>
      <a
        href={`tel:${profile.phone}`}
        className="serif accent block text-[22px] font-bold tabular-nums hover:opacity-70 sm:text-[24px]"
      >
        {profile.phone}
      </a>
    </div>
  );
}

/* ── 모바일 전용: 아코디언·이동 버튼 ── */

function MobileAccordion({
  no,
  label,
  children,
}: {
  no: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group border-b-2 rule">
      <summary className="flex cursor-pointer list-none items-center justify-between py-4 [&::-webkit-details-marker]:hidden">
        <span className="flex items-baseline gap-3">
          <span className="muted text-[12px] tabular-nums">{no}</span>
          <span className="serif text-[18px] font-bold">{label}</span>
        </span>
        <span className="accent text-[20px] font-bold transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="pb-5">{children}</div>
    </details>
  );
}

function MobileLinkRow({
  no,
  label,
  href,
}: {
  no: string;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between border-b-2 rule py-4"
    >
      <span className="flex items-baseline gap-3">
        <span className="muted text-[12px] tabular-nums">{no}</span>
        <span className="serif text-[18px] font-bold">{label}</span>
      </span>
      <span className="accent text-[18px] font-bold">→</span>
    </Link>
  );
}

export default function Home() {
  const recentTalks = talks.slice(0, 6);
  const teaser = currentProjects.slice(0, 3);

  return (
    <div className="space-y-14 max-lg:space-y-10">
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

      {/* ── 01 About — 모바일·데스크톱 공통 노출 ── */}
      <Section no="01" kicker="About" title="소개">
        <div className="max-w-[720px] space-y-3 text-[16px] leading-8">
          {profile.aboutKo.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </Section>

      {/* ══ 모바일: 소개 아래는 항목 버튼(펼침/이동)만 ══ */}
      <nav className="border-t-2 rule lg:hidden" aria-label="바로가기">
        <MobileAccordion no="02" label="학력">
          <EducationList />
        </MobileAccordion>
        <MobileAccordion no="03" label="경력">
          <CareerBlock />
        </MobileAccordion>
        <MobileLinkRow no="04" label="논문·저서" href="/publications" />
        <MobileLinkRow no="05" label="프로젝트 (-ing)" href="/projects" />
        <MobileAccordion no="06" label="수상">
          <AwardsList />
        </MobileAccordion>
        <MobileLinkRow no="07" label="특강·발표" href="/talks" />
        <MobileLinkRow no="08" label="강의" href="/teaching" />
        <MobileAccordion no="09" label="연락처">
          <ContactBlock />
        </MobileAccordion>
      </nav>

      {/* ══ 데스크톱: 전체 섹션 노출 ══ */}
      <div className="hidden space-y-14 lg:block">
        <Section no="02" kicker="Education" title="학력">
          <EducationList />
        </Section>

        <Section no="03" kicker="Career" title="경력">
          <CareerBlock />
        </Section>

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

        <Section no="06" kicker="Awards" title="수상">
          <AwardsList />
        </Section>

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

        <Section no="08" kicker="Contact" title="연락처">
          <ContactBlock />
        </Section>
      </div>
    </div>
  );
}
