// src/components/skills/skill.tsx
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/navigation";
import { skillDetailData } from "@/data/skillDetailData";

export default function Skill({
  id,
  color,
  icon,
  skill,
}: {
  id: string;
  color: string;
  icon: IconDefinition;
  skill: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    const detail = skillDetailData[id];
    // blogUrl 또는 notionUrl이 하나도 없으면
    if (!detail || (!detail.blogUrl && !detail.notionUrl)) {
      alert("아직 작성중입니다✍ 조금만 기다려주세요🧑"); // ← 알림만 띄우고 리다이렉트 안 함
      return;
    }
    // 있으면 모달 경로로 이동
    router.push(`/skills/${id}`, { scroll: false });
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 
                 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <FontAwesomeIcon className={`text-4xl ${color}`} icon={icon} />
      <h3 className="text-lg font-semibold mt-2">{skill}</h3>
    </button>
  );
}
