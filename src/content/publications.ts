// 논문·저서 — 이력서 PDF(2026-07-08)와 1:1 대조 완료 (14편 + 저서 1권)
// ⚠️ 절대규칙: 게재 완료된 논문만. 심사중·투고중·작성중 절대 추가 금지.
// 논문 추가 시: 아래 배열 맨 앞에 객체 추가 → npm run build → 재배포

export type Role = "단독저자" | "제1저자" | "교신저자" | "공동저자";

export interface Publication {
  authors: string;
  year: number;
  title: string;
  journal: string;
  volume: string;
  pages: string;
  role: Role;
}

export const publications: Publication[] = [
  {
    authors: "선애경",
    year: 2026,
    title: "국내 대학 생성형AI 가이드라인의 윤리적 프레임워크 탐색",
    journal: "한국교육학연구",
    volume: "32(1)",
    pages: "1-33",
    role: "단독저자",
  },
  {
    authors: "신현석, 윤혜원, 선애경, 신은영",
    year: 2026,
    title: "5·31 교육개혁의 역사적 제도주의 분석",
    journal: "한국교육학연구",
    volume: "32(1)",
    pages: "35-71",
    role: "공동저자",
  },
  {
    authors: "선애경",
    year: 2025,
    title: "교육정책 연구에의 생성형AI 활용 가능성 및 도전과제",
    journal: "교육행정학연구",
    volume: "43(5)",
    pages: "1-33",
    role: "단독저자",
  },
  {
    authors: "선애경, 조성빈, 이연우, 신현범",
    year: 2025,
    title:
      "초·중등 디지털 리터러시 영향요인 분석과 정책 시나리오 도출 - 다층모형과 생성형AI 결합을 통한 분석",
    journal: "교육행정학연구",
    volume: "43(1)",
    pages: "419-454",
    role: "제1저자",
  },
  {
    authors: "신현석, 선애경, 정용주",
    year: 2025,
    title: "한국교육학의 분화와 제주교육학 등장의 의미 탐색",
    journal: "교육학연구",
    volume: "63(1)",
    pages: "353-389",
    role: "공동저자",
  },
  {
    authors: "선애경, 박상원, 강지원, 이명서, 홍가은, 신현석",
    year: 2023,
    title: "Cooper의 다차원 모형을 통한 그린스마트스쿨 정책 분석: 사전기획단계를 중심으로",
    journal: "한국교육학연구",
    volume: "29(4)",
    pages: "129-175",
    role: "제1저자",
  },
  {
    authors: "신현석, 박수아, 선애경",
    year: 2023,
    title: "미국 교육정치학의 연구동향(II): 학문적 도약과 정착 시기의 주제 분석을 중심으로",
    journal: "교육정치학연구",
    volume: "30(3)",
    pages: "147-186",
    role: "공동저자",
  },
  {
    authors: "선애경, 윤지희",
    year: 2022,
    title:
      "한국의 그린스마트 미래학교와 미국의 Future Ready School의 비교 연구: 정책 목표와 수단을 중심으로",
    journal: "교육문제연구",
    volume: "35(3)",
    pages: "133-175",
    role: "제1저자",
  },
  {
    authors: "선애경",
    year: 2022,
    title: "일반고 고등학생 진로성숙도 영향요인에 대한 다층모형 분석",
    journal: "교육문제연구",
    volume: "35(2)",
    pages: "139-166",
    role: "단독저자",
  },
  {
    authors: "신현석, 안희진, 선애경, 신범철, 양윤정",
    year: 2022,
    title: "중학교 자유학년(기)제의 패러독스 현상 분석: Stone의 '인과관계'를 중심으로",
    journal: "교육정치학연구",
    volume: "29(4)",
    pages: "139-174",
    role: "공동저자",
  },
  {
    authors: "신현석, 선애경, 박수아, 박유민",
    year: 2022,
    title: "교육행정에서의 생태학적 접근: 교육조직과 교육정책연구에의 적용 가능성 탐색",
    journal: "교육행정학연구",
    volume: "40(4)",
    pages: "137-175",
    role: "교신저자",
  },
  {
    authors: "신현석, 선애경",
    year: 2021,
    title: "미래교육정책의 패러독스: Stone의 '상징' 패러독스를 중심으로",
    journal: "한국교육학연구",
    volume: "27(2)",
    pages: "95-133",
    role: "교신저자",
  },
  {
    authors: "신현석, 선애경",
    year: 2019,
    title: "대학 산학협력정책의 경로의존성 분석",
    journal: "한국교육학연구",
    volume: "25(4)",
    pages: "137-167",
    role: "교신저자",
  },
  {
    authors: "선애경, 박준회, 김동현, 변기용, 장정현",
    year: 2017,
    title:
      "교육정책 변동과정 분석에서 ACF의 유용성과 한계: 옹호연합, 신념체계, 정책지향적 학습을 중심으로",
    journal: "교육정치학연구",
    volume: "24(3)",
    pages: "27-52",
    role: "제1저자",
  },
];

export interface Book {
  authors: string;
  year: number;
  title: string;
  publisher: string;
  role: string;
}

export const books: Book[] = [
  {
    authors: "신현석 외",
    year: 2023,
    title: "한국 교육정책의 패러독스 연구와 실제",
    publisher: "박영스토리",
    role: "공동저자",
  },
];

// 홈 Highlights에 노출할 대표논문 3편 (단독/제1저자 위주)
export const highlights = [publications[0], publications[2], publications[3]];
