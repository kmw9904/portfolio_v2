"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Aside from "./aside";
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  return (
    <>
      <header className="sticky top-0 bg-opacity-90 backdrop-blur-lg z-50">
        <nav className="container mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-6">
          <div className="flex items-center space-x-4">
            <Link href={"/"}>
              <h1 className="text-2xl font-bold">KMW</h1>
            </Link>
            <p className="hidden sm:block text-sm text-indigo-500 dark:text-indigo-300">
              응용 소프트웨어 개발자
            </p>
          </div>

          <div className="hidden md:flex items-center gap-x-6">
            <a href="#home" className="hover:text-blue-500 transition-colors">
              홈
            </a>
            <a href="#about" className="hover:text-blue-500 transition-colors">
              소개
            </a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">
              기술
            </a>
            <a
              href="#projects"
              className="hover:text-blue-500 transition-colors"
            >
              프로젝트
            </a>
            <a
              href="#contact"
              className="hover:text-blue-500 transition-colors"
            >
              연락처
            </a>
            <button
              className="cursor-pointer"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <FontAwesomeIcon
                icon={theme === "light" ? faSun : faMoon}
                className="focus:outline-none focus:ring focus:ring-blue-500 text-yellow-400"
              />
            </button>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-md border border-gray-300 dark:border-gray-600 md:hidden"
            aria-label="메뉴 열기"
            aria-expanded={isOpen}
          >
            <span className="h-0.5 w-5 bg-gray-800 dark:bg-white"></span>
            <span className="h-0.5 w-5 bg-gray-800 dark:bg-white"></span>
            <span className="h-0.5 w-5 bg-gray-800 dark:bg-white"></span>
          </button>
        </nav>
      </header>
      <Aside
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        theme={theme as "light" | "dark" | "system" | undefined}
        setTheme={setTheme}
      />
    </>
  );
}
