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
  title: "김명원 | 응용 소프트웨어 개발 포트폴리오",
  description:
    "웹, API, 데이터베이스 구현과 AI 서비스 운영·검증 경험을 정리한 개발 포트폴리오입니다.",
  openGraph: {
    title: "김명원 | 응용 소프트웨어 개발 포트폴리오",
    description:
      "화면 구현부터 데이터 검증과 운영 장애 대응까지 이어가는 개발자 포트폴리오",
    type: "website",
    locale: "ko_KR",
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
      <body className="dark:bg-gray-900 dark:text-white bg-white text-black min-h-screen transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
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
