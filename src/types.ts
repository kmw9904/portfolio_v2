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
  id: number;
  skill: string;
  icon: IconDefinition;
  color: string;
}
