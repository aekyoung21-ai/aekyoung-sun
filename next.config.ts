import type { NextConfig } from "next";

// 전 페이지 정적 생성(SSG)이므로 static export 사용 — Vercel·GitHub Pages 모두 호환
// GH_PAGES=1 빌드 시에만 /aekyoung-sun 서브패스 적용 (GitHub Pages 프로젝트 페이지용)
const isGhPages = process.env.GH_PAGES === "1";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGhPages ? "/aekyoung-sun" : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
