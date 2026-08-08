import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "조태욱 · 중일투더맥스 | 영어교육과 AI 교육 혁신",
  description:
    "학생들의 질문과 세상의 문제를 AI와 함께 풀어가는 영어교사 조태욱, 중일투더맥스의 교육 포트폴리오입니다.",
  applicationName: "중일투더맥스",
  keywords: [
    "조태욱",
    "중일투더맥스",
    "중일고등학교",
    "영어교육",
    "AI교육",
    "교육혁신",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "조태욱 · 중일투더맥스",
    description: "도전, 성장, 나눔으로 내일의 교실을 만듭니다. Jump Higher.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
