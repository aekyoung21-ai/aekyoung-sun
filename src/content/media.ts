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
    date: "2026.10.18",
    outlet: "한경 잡앤조이",
    title: "대학가 확산하는 AI 가이드라인, “과제 속 AI, ‘금지’보다 ‘기준’으로”",
    url: "https://magazine.hankyung.com/job-joy/article/202610188949d",
    note: "국내 31개 대학 생성형 AI 가이드라인 분석 인용",
  },
  {
    date: "2026.09.17",
    outlet: "아주경제",
    title: "“AI 교수법부터 융·복합까지”…한국교양기초교육원, ‘2026년 교·강사 온라인 플랫폼’ 오픈",
    url: "https://www.ajunews.com/view/20260917140649167",
    note: "강좌 「실제 연구 과정에서의 AI 활용」",
  },
  {
    date: "2026.08.28",
    outlet: "고대신문",
    title: "[특집] AI가 뒤흔든 대학교육, 과제 평가부터 대학 위기론까지",
    url: "https://www.kunews.ac.kr/news/articleView.html?idxno=51199",
    note: "AI 활용 자가점검표·과제 평가 방식 인터뷰",
  },
  {
    date: "2026.07.31",
    outlet: "한국대학신문",
    title: "영산대 교수학습개발원 “교수가 AI 잘써야 AI 교육 성공”",
    url: "https://news.unn.net/news/articleView.html?idxno=595419",
    note: "영산대 교원 워크숍 특강·실습",
  },
  {
    date: "2026.06.15",
    outlet: "The Argus",
    title: "The Transformation of Society in the Age of AI",
    url: "https://www.theargus.org/news/articleView.html?idxno=3280",
    note: "대학 AI 가이드라인의 실효성·책임 배분 인터뷰 (영문)",
  },
  {
    date: "2026.01.19",
    outlet: "쿠날 (유튜브)",
    title: "‘진정한 학습’을 위해 현명하게 AI 사용하는 법",
    url: "https://youtu.be/xvTRQSxZbso",
    note: "영상 인터뷰 · 「쿠날 : K-지식의 날개」 채널",
  },
  {
    date: "2025.06.18",
    outlet: "EBN",
    title: "자유기업원·좋은규제시민포럼, ‘미국 트럼프 행정부의 행정·교육개혁과 한국적 시사점’ 세미나 개최",
    url: "https://www.ebn.co.kr/news/articleView.html?idxno=1666996",
    note: "발표 「미국 교육부 폐지 구상 분석을 통한 한국 교육거버넌스 재구조화 방향」",
  },
  {
    date: "2025.06.11",
    outlet: "한국대학신문",
    title: "“한국 교육체계, 지방교육자치 강화·통합교육 거버넌스 구축 중요”",
    url: "https://news.unn.net/news/articleView.html?idxno=579913",
    note: "자유기업원 보고서 「미국 ‘교육부 폐지’ 구상 분석을 통한 한국 교육거버넌스 재구조화 방향」 보도",
  },
];
