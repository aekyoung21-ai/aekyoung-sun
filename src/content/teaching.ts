// 강의 — 과목 소개 + 학기별 교육 실적 (2024~)
// ⚠️ 학생 정보·수강 인원·채점 내용 게재 금지. 과목 설계 특징만.

export interface Course {
  name: string;
  level: string;
  desc: string;
  features: string[];
}

export const courses: Course[] = [
  {
    name: "교육행정학",
    level: "고려대학교 학부",
    desc: "교육행정의 주요 개념·이론과 실제 사례를 통합적으로 학습하는 과목. 학교조직, 교육정책, 리더십, 거버넌스, 교사 전문성 개발 등을 발표와 토론 중심으로 다룬다.",
    features: [
      "전 주차 생성형 AI 실습 결합 수업 설계 — 학기 초 'AI를 현명하게 사용하는 법' 강의 포함",
      "생성형 AI 활용 자아성찰지(자기점검표)를 과제에 결합해 맹목적 AI 남용 방지",
    ],
  },
  {
    name: "교직실무",
    level: "고려대학교 학부 (교직과정)",
    desc: "예비교사가 학교 현장에서 마주할 실무를 다루는 과목. 학사·인사·복무, 학급경영, 학교회계 등을 사례 중심으로 학습한다.",
    features: [
      "'AI 브리프 비평' 과제 — AI가 만든 자료의 오류를 학생이 찾아내는 검증 훈련",
      "AI 초벌 평가와 교수자 확정을 결합한 채점 보조 체계 실험",
    ],
  },
];

export interface TeachingRecord {
  semester: string;
  courses: string;
  org: string;
}

// 학기별 교육 실적 (학기 역순)
export const teachingHistory: TeachingRecord[] = [
  { semester: "2026-1", courses: "교육행정학 · 교직실무(03)", org: "고려대학교" },
  { semester: "2025-2", courses: "교직실무(03)", org: "고려대학교" },
  { semester: "2025-1", courses: "교육행정학 · 교직실무(03)", org: "고려대학교" },
  { semester: "2024-2", courses: "교직실무(03)", org: "고려대학교" },
];

// 정규 과목 외 수업 혁신 지원
export const teachingSupport = [
  "공학재료학 PBL AI 모듈 (2025-1 · 2026-1) — 단계별 AI 도구 지도 특강, LLM 활용 기록보고서 평가 설계, 다중 AI 교차 채점 보조",
];

export const teachingAward =
  "고려대학교 AI 활용 우수수업사례 공모전 우수상 (2025.12)";
