"use client";

import { useState } from "react";
import Project from "./project";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectData } from "@/types";
import projectData from "../../../public/mock/projects.json";

export default function Projects() {
  const projects = projectData as ProjectData[];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="mb-30">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">프로젝트</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          프로젝트마다 맡은 범위와 확인 가능한 결과를 구분했습니다.
        </p>
      </div>

      <div className="relative z-0">
        <Project {...activeProject} />

        <div className="mt-5 flex items-center justify-center gap-3" aria-label="프로젝트 선택">
          <button
            type="button"
            onClick={() => move(-1)}
            className="rounded-full bg-white p-2 text-gray-700 shadow-md dark:bg-gray-800 dark:text-white"
            aria-label="이전 프로젝트"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {projects.map((project, index) => (
              <button
                type="button"
                key={project.id}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-7 bg-indigo-500"
                    : "w-2.5 bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`${project.title} 보기`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => move(1)}
            className="rounded-full bg-white p-2 text-gray-700 shadow-md dark:bg-gray-800 dark:text-white"
            aria-label="다음 프로젝트"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
