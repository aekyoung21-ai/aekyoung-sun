import type { Metadata } from "next";
import TalkRow from "@/components/TalkRow";
import { talks } from "@/content/talks";

export const metadata: Metadata = {
  title: "특강·발표",
  description: "선애경 — 특강·자문·발표 연대기 (생성형 AI 활용·윤리 중심)",
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
    </div>
  );
}
