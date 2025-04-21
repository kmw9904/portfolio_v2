"use client";

import { IntroduceProjectData } from "@/types";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Loader2 } from "lucide-react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [project, setProject] = useState<IntroduceProjectData>();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/mock/project/${id}.json`);

        if (!response.ok) {
          throw new Error("프로젝트가 없습니다.");
        }

        const data = await response.json();

        setProject(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProject();
  }, [id]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-lg text-gray-600 dark:text-gray-300">
        <Loader2 className="w-10 h-10 animate-spin" />
        <p>불러오는 중입니다...</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center mt-12 mb-16 px-4">
      {/* ✅ 프로젝트 제목 */}
      <h1 className="text-4xl font-bold mb-8">{project.title}</h1>

      {/* ✅ 대표 이미지 */}
      <Image
        src={project.img}
        width={600}
        height={300}
        alt={project.title}
        className="object-cover rounded-xl mb-8"
      />

      {/* ✅ 소개 마크다운 (introduce) */}
      <div className="prose dark:prose-invert max-w-2xl mb-12">
        <ReactMarkdown>{project.introduce}</ReactMarkdown>
      </div>

      {/* ✅ 기술 스택 */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.skills.map((skill, i) => (
          <span
            key={i}
            className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-md text-gray-700 dark:text-gray-200"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* ✅ 프로젝트 관련 링크 (깃허브, 라이브, 확장앱 등) */}
      <div className="flex flex-wrap gap-4 mb-12">
        <a
          href={project.github}
          target="_blank"
          className="bg-gray-800 text-white dark:bg-white dark:text-gray-900 px-4 py-2 rounded-md hover:opacity-80 transition"
        >
          GitHub 저장소
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition"
          >
            라이브 데모
          </a>
        )}
        {project.address && (
          <a
            href={project.address}
            target="_blank"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition"
          >
            링크 이동
          </a>
        )}
      </div>

      {/* ✅ subtitle + about 리스트 출력 */}
      <div className="max-w-3xl w-full space-y-6">
        {project.subtitle.map((title, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {project.about[index].map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
