// 언론 보도·인터뷰 — 추가 시 배열 맨 앞에 객체 추가 (날짜 역순)

export interface MediaItem {
  date: string; // YYYY.MM.DD
  outlet: string;
  title: string;
  url: string;
  note?: string;
}

export const media: MediaItem[] = [
  {
    date: "2026.11.02",
    outlet: "한국강사신문",
    title: "자유기업원, 선애경 고려대 공학교육혁신센터 연구교수의 대학 적립금 운용·제도 개선 리포트 발간",
    url: "https://www.lecturernews.com/news/articleView.html?idxno=213050",
    note: "정책리포트 「대학 적립금 운용의 쟁점과 개선방향」 보도",
  },
  {
    date: "2026.08.28",
    outlet: "고대신문",
    title: "[특집] AI가 뒤흔든 대학교육, 과제 평가부터 대학 위기론까지",
    url: "https://www.kunews.ac.kr/news/articleView.html?idxno=51199",
    note: "AI 활용 자가점검표·과제 평가 방식 인터뷰",
  },
];
