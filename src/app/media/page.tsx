import type { Metadata } from "next";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "언론보도",
  description: "선애경 — 언론 보도·인터뷰 (대학 AI 교육·고등교육 정책)",
};

export default function Media() {
  return (
    <div>
      <p className="accent text-[12px] font-bold uppercase tracking-[0.3em]">
        Media
      </p>
      <h1 className="serif mt-3 text-[40px] font-black tracking-tight">
        언론 · 보도
      </h1>

      <ul className="mt-8 border-t-2 rule">
        {media.map((m) => (
          <li
            key={m.url}
            className="grid grid-cols-1 items-baseline gap-x-6 gap-y-1 border-b hairline py-4 sm:grid-cols-[96px_200px_minmax(0,1fr)]"
          >
            <span className="muted text-[13px] tabular-nums">{m.date}</span>
            <span className="text-[15.5px] font-extrabold tracking-tight">
              {m.outlet}
            </span>
            <span className="text-[14.5px] font-medium leading-6">
              <a
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {m.title} ↗
              </a>
              {m.note ? <span className="muted block font-normal sm:inline"> · {m.note}</span> : ""}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
