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
  title: "KMW Portfolio V2",
  description: "KMW's Portfolio",
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
