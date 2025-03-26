"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Aside from "./aside";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  return (
    <>
      <header className="sticky top-0 bg-opacity-90 backdrop-blur-lg">
        <nav className="container max-x-4xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">KMW</h1>
            <p className="text-yellow-400">✨내일이 더 빛나는 개발자</p>
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
            className="md:hidden p-2 text-gray-700 cursor-pointer dark:text-white"
          >
            <FontAwesomeIcon icon={faBars} />
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
