import { IntroduceProjectData } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const params_id = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/mock/project/${params_id.id}.json`
  );

  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }

  const project: IntroduceProjectData = await response.json();

  if (!project) {
    notFound();
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
