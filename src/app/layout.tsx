import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "cup+ | 매칭 매니저를 위한 프리미엄 플랫폼",
  description:
    "커플매니저끼리 회원 프로필을 공유하고, 실시간으로 매칭을 성사시키는 전문 매칭 플랫폼. 프로필 마켓, 실시간 채팅, CRM까지.",
  keywords: [
    "커플매니저",
    "결혼정보회사",
    "매칭앱",
    "cupplus",
    "결혼중개",
    "프로필매칭",
  ],
  openGraph: {
    title: "cup+ | 매칭의 새로운 기준",
    description: "전문 커플매니저를 위한 프리미엄 매칭 플랫폼",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
