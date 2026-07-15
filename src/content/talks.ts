// 특강·자문·발표 — 이력서 PDF(2026-07-08) "Lectures & Consulting" 18건과 1:1 대조
// 일자 불일치 시 이력서 PDF 표기를 따른다 (권위 소스)
// 추가 시: 배열 맨 앞에 객체 추가 (연대기 역순 정렬은 페이지에서 자동)

export type TalkFormat = "특강" | "자문" | "발표" | "강연" | "워크숍" | "연수";

export interface Talk {
  date: string; // YYYY.MM.DD
  title: string;
  host: string;
  format: TalkFormat;
  upcoming?: boolean;
  note?: string;
}

export const talks: Talk[] = [
  {
    date: "2026.07.28",
    title: "대학원생 교육역량 강화 프로그램 — AI 활용 학습",
    host: "고려대학교 BK21",
    format: "특강",
    upcoming: true,
  },
  {
    date: "2026.07.22",
    title: "교원 AI 역량강화 부트캠프",
    host: "영산대학교",
    format: "특강",
    upcoming: true,
  },
  {
    date: "2026.07.13",
    title: "연구에서의 AI 활용 (온라인 연수)",
    host: "한국교양기초교육원",
    format: "연수",
  },
  {
    date: "2026.07.01",
    title: "AI 시대의 대학 교육",
    host: "고려대학교 세종캠퍼스 교수세미나",
    format: "특강",
  },
  {
    date: "2026.04.20",
    title: "수업에 바로 쓰는 바이브코딩",
    host: "영산대학교 CTL",
    format: "특강",
    note: "녹화본 게시",
  },
  {
    date: "2026.03.26",
    title: "생성형 AI 활용 'Teaching Level Up' 워크숍",
    host: "고려대학교 CTL",
    format: "워크숍",
  },
  {
    date: "2026.02.20",
    title: "노트북LM 및 근거있는 AI 활용",
    host: "영산대학교",
    format: "특강",
    note: "녹화본 게시",
  },
  {
    date: "2026.02.11",
    title: "대학수업에서 의미 있는 AI 활용법",
    host: "한국엄마학자협회(KMSS)",
    format: "강연",
  },
  {
    date: "2026.02.09",
    title: "교수학습센터 LRS 단계별 도입 로드맵",
    host: "건국대학교 CTL",
    format: "자문",
  },
  {
    date: "2026.02.06",
    title: "동계 학술대회 세션 발표",
    host: "안암교육학회",
    format: "발표",
  },
  {
    date: "2026.01.23",
    title: "AI 윤리적 활용 자문 보고서",
    host: "건국대학교 CTL",
    format: "자문",
  },
  {
    date: "2026.01.21",
    title:
      "생성형 AI 시대, 진정한 배움이 일어나는 대학교육의 방향: AI 자가점검표를 통한 자기성찰의 효과",
    host: "고려대학교 제2회 AI 융합 콜로키움",
    format: "발표",
  },
  {
    date: "2025.12.19",
    title: "생성형AI 활용 및 윤리 가이드라인",
    host: "영산대학교",
    format: "특강",
    note: "녹화본 게시",
  },
  {
    date: "2025.11.12",
    title: "AI Tool 수업 활용 방안 연구",
    host: "건국대학교 CTL",
    format: "자문",
  },
  {
    date: "2025.09.26",
    title: "교육정책 연구에의 생성형 AI 활용 가능성 및 도전과제",
    host: "교육행정연구포럼",
    format: "발표",
  },
  {
    date: "2025.09.24",
    title: "대학 수업 및 연구에서의 AI 활용",
    host: "서울대학교 치과대학",
    format: "특강",
  },
  {
    date: "2025.08.21",
    title: "대학수업에서의 의미 있는 AI 활용과 성찰지 설계",
    host: "고려대학교 학부대학",
    format: "특강",
  },
  {
    date: "2025.04.25",
    title: "챗GPT의 현명한 활용과 논문작성 그리고 AI 정책의 미래",
    host: "연세대학교 행정대학원",
    format: "특강",
  },
];
