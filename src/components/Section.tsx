// 매거진형 섹션 — 굵은 상단 룰 + 좌측 대형 번호/라벨 + 우측 콘텐츠 (확장형 2단)
export default function Section({
  no,
  kicker,
  title,
  children,
}: {
  no: string;
  kicker: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t-2 rule pt-7">
      <div className="grid gap-6 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-12">
        <div>
          <div className="serif text-[52px] font-black leading-none tracking-tight opacity-15">
            {no}
          </div>
          <div className="accent mt-2 text-[11.5px] font-bold uppercase tracking-[0.28em]">
            {kicker}
          </div>
          {title && (
            <h2 className="serif mt-1.5 text-[24px] font-bold tracking-tight">
              {title}
            </h2>
          )}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
