// 매거진형 섹션 헤더 — kicker(작은 크림슨 라벨) + 큰 제목 + 헤어라인
export default function Section({
  kicker,
  title,
  children,
  className = "",
}: {
  kicker: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`pt-2 ${className}`}>
      <div className="mb-6 border-b hairline pb-3">
        <div className="accent text-[12px] font-bold uppercase tracking-[0.22em]">
          {kicker}
        </div>
        {title && (
          <h2 className="mt-1.5 text-[26px] font-extrabold tracking-tight">
            {title}
          </h2>
        )}
      </div>
      {children}
    </section>
  );
}
