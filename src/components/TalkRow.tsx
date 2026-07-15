import type { Talk } from "@/content/talks";

// 특강·자문 가로형 행 — 한 줄에 하나, 기관(대학)이 가장 잘 보이게
export default function TalkRow({ t }: { t: Talk }) {
  return (
    <li className="grid grid-cols-1 items-baseline gap-x-6 gap-y-1 border-b hairline py-4 sm:grid-cols-[96px_250px_minmax(0,1fr)_auto]">
      <span className="muted text-[13px] tabular-nums">{t.date}</span>
      <span className="text-[15.5px] font-extrabold tracking-tight">
        {t.host}
      </span>
      <span className="muted text-[14px] leading-6">
        {t.title}
        {t.note ? ` · ${t.note}` : ""}
      </span>
      <span className="flex items-center gap-1.5 justify-self-start sm:justify-self-end">
        <span className="accent accent-bg rounded-full px-2.5 py-0.5 text-[11px] font-bold">
          {t.format}
        </span>
        {t.upcoming && (
          <span className="accent-fill rounded-full px-2.5 py-0.5 text-[11px] font-bold">
            예정
          </span>
        )}
      </span>
    </li>
  );
}
