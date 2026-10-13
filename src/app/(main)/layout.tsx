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
    "웹과 API, 데이터베이스 구현부터 데이터 정합성 검증과 장애 분석까지 정리한 응용 소프트웨어 개발 포트폴리오입니다.",
  openGraph: {
    title: "김명원 | 응용 소프트웨어 개발 포트폴리오",
    description:
      "업무 규칙을 시스템으로 옮기고 데이터와 운영 결과까지 확인하는 개발자 포트폴리오",
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
