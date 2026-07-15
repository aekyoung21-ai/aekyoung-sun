import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "English",
  description:
    "SUN, Aekyoung — Research Professor, Innovation Center for Engineering Education, Korea University",
};

const selectedPubs = [
  "Sun, A. (2026). Exploring the ethical framework of generative AI guidelines in Korean universities. Hanguk Gyoyukhak Yeongu [The Korea Educational Review], 32(1), 1-33. [in Korean]",
  "Sun, A. (2025). The potential and challenges of using generative AI in education policy research. Gyoyuk Haengjeonghak Yeongu [Korean Journal of Educational Administration], 43(5), 1-33. [in Korean]",
  "Sun, A., Cho, S., Lee, Y., & Shin, H. (2025). Analysis of factors influencing digital literacy in K-12 and policy scenario derivation: Combining multilevel models with generative AI. Gyoyuk Haengjeonghak Yeongu [Korean Journal of Educational Administration], 43(1), 419-454. [in Korean]",
  "Sun, A., Park, S., Kang, J., Lee, M., Hong, G., & Shin, H. (2023). An analysis of the Green Smart School policy using Cooper's multidimensional framework. Hanguk Gyoyukhak Yeongu [The Korea Educational Review], 29(4), 129-175. [in Korean]",
];

export default function En() {
  return (
    <div className="space-y-10">
      <section>
        <p className="accent text-[12px] font-bold uppercase tracking-[0.3em]">
          Researcher · AI in Education
        </p>
        <h1 className="serif mt-3 text-[44px] font-black tracking-tight">
          {profile.nameEn}{" "}
          <span className="muted text-xl font-normal">선애경</span>
        </h1>
        <p className="mt-3 text-[15px]">Ph.D. in Education · {profile.titleEn}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {profile.keywordsEn.map((k) => (
            <span
              key={k}
              className="accent accent-bg rounded-full px-3 py-1 text-[13px] font-medium"
            >
              {k}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="accent mb-3 text-sm font-bold uppercase tracking-widest">
          About
        </h2>
        <p className="text-[15px] leading-7">{profile.aboutEn}</p>
      </section>

      <section>
        <h2 className="accent mb-3 text-sm font-bold uppercase tracking-widest">
          Selected Publications
        </h2>
        <ul className="space-y-3 text-[14px] leading-7">
          {selectedPubs.map((p) => (
            <li key={p} className="border-b hairline pb-3">
              {p}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="accent mb-3 text-sm font-bold uppercase tracking-widest">
          Contact
        </h2>
        <p className="text-[15px]">
          <a href={`mailto:${profile.email}`} className="accent font-medium">
            {profile.email}
          </a>
        </p>
      </section>

      <p className="text-[14px]">
        <Link href="/" className="accent font-medium hover:opacity-70">
          ← 한국어 페이지로
        </Link>
      </p>
    </div>
  );
}
