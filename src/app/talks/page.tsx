import type { Metadata } from "next";
import TalkRow from "@/components/TalkRow";
import { talks } from "@/content/talks";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "특강·발표",
  description: "선애경 — 특강·자문·발표 연대기와 언론 보도 (생성형 AI 활용·윤리 중심)",
};

export default function Talks() {
  return (
    <div>
      <p className="accent text-[12px] font-bold uppercase tracking-[0.3em]">
        Talks · Consulting
      </p>
      <h1 className="serif mt-3 text-[40px] font-black tracking-tight">
        특강 · 자문 · 발표
      </h1>

      <ul className="mt-8 border-t-2 rule">
        {talks.map((t) => (
          <TalkRow key={t.date + t.title} t={t} />
        ))}
      </ul>

      <p className="accent mt-16 text-[12px] font-bold uppercase tracking-[0.3em]">
        Media
      </p>
      <h2 className="serif mt-3 text-[28px] font-black tracking-tight">
        언론 · 보도
      </h2>
      <ul className="mt-6 border-t-2 rule">
        {media.map((m) => (
          <li
            key={m.url}
            className="grid grid-cols-1 items-baseline gap-x-6 gap-y-1 border-b hairline py-4 sm:grid-cols-[96px_250px_minmax(0,1fr)]"
          >
            <span className="muted text-[13px] tabular-nums">{m.date}</span>
            <span className="text-[15.5px] font-extrabold tracking-tight">
              {m.outlet}
            </span>
            <span className="text-[14.5px] font-medium leading-6">
              <a href={m.url} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                {m.title} ↗
              </a>
              {m.note ? <span className="muted font-normal"> · {m.note}</span> : ""}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
