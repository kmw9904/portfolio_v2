import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ProjectData {
  id: number;
  img: string;
  title: string;
  skills: string[];
  github: string;
  live?: string;
  address?: string;
}

export interface IntroduceProjectData {
  id: number;
  img: string;
  title: string;
  skills: string[];
  github: string;
  live?: string;
  address?: string;
  subtitle: string[];
  about: string[][];
  introduce: string;
}

export interface SkillData {
  id: string; // ← 숫자가 아닌 slug(예: "react", "tailwind")
  skill: string; // 사용자에게 보여줄 이름
  icon: IconDefinition;
  color: string;
}
