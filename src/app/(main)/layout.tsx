import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ReactNode } from "react";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "김명원 | 프론트엔드 개발·웹퍼블리싱 포트폴리오",
  description:
    "반응형 웹 구현, API 연동, 오류 흐름 검증과 유지보수 사례를 정리한 프론트엔드 개발·웹퍼블리싱 포트폴리오입니다.",
  openGraph: {
    title: "김명원 | 프론트엔드 개발·웹퍼블리싱 포트폴리오",
    description:
      "반응형 화면 구현부터 API 연동과 운영 검증까지 이어가는 개발자 포트폴리오",
    type: "website",
    locale: "ko_KR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning className="scroll-smooth">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Header />
          {children}
          <Footer />
          {modal}
          <div id="modal-root"></div>
        </ThemeProvider>
      </body>
    </html>
  );
}
