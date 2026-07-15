// 연구 프로젝트(완료·수행) — 이력서 PDF(2026-07-08) Project 8건 그대로 (/publications 하단 게재)

export interface ResearchProject {
  title: string;
  role: string;
  period: string;
  org: string;
}

export const researchProjects: ResearchProject[] = [
  {
    title: "AI 시대 미래형 현장 연계 교육과정 설계를 위한 실태 및 잠재 프로파일 분석 연구",
    role: "공동연구원",
    period: "2025.08 ~ 2025.10",
    org: "고려대학교 교육혁신팀",
  },
  {
    title: "서울시의회 교육위원회 감사 기능 강화 및 교육거버넌스 구축에 관한 연구",
    role: "공동연구원",
    period: "2025.06 ~ 2025.11",
    org: "서울시의회",
  },
  {
    title: "정책환경 변화에 따른 교육현안 진단 및 과제발굴",
    role: "공동연구원",
    period: "2025.03 ~ 2025.08",
    org: "교육부",
  },
  {
    title: "디지털 교육 규범 릴레이 포럼 운영 및 해설서 개발",
    role: "공동연구원",
    period: "2024.09 ~ 2024.12",
    org: "한국교육학술정보원(KERIS)",
  },
  {
    title: "교육분야 거버넌스 선진화 추진전략 마련 연구",
    role: "연구보조원",
    period: "2023.12 ~ 2024.07",
    org: "교육부",
  },
  {
    title: "스쿨인증제 진단 및 컨설팅 연구 용역",
    role: "연구보조원",
    period: "2018.11 ~ 2019.10",
    org: "과학기술연합대학원대학교",
  },
  {
    title: "학교업무정상화 안착 지원을 위한 학교 내 구성원들의 직무분석 연구 용역",
    role: "연구보조원",
    period: "2017.06 ~ 2018.04",
    org: "서울특별시교육연구정보원",
  },
  {
    title: "신입생 예비교육 발전방안 연구 용역",
    role: "연구보조원",
    period: "2017.01 ~ 2017.02",
    org: "과학기술연합대학원대학교",
  },
];
