// src/components/skills/skills.tsx
import {
  faReact,
  faVuejs,
  faJs,
  faCss3,
  faPython,
  faBootstrap,
  faNode,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faT,
  faN,
  faD,
  faBacon,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import Skill from "./skill";
import { SkillData } from "@/types";

export default function Skills() {
  const skills: SkillData[] = [
    { id: "python", skill: "Python", icon: faPython, color: "text-blue-400" },
    { id: "css3", skill: "CSS3", icon: faCss3, color: "text-blue-600" },
    {
      id: "javascript",
      skill: "JavaScript",
      icon: faJs,
      color: "text-yellow-500",
    },
    { id: "react", skill: "React", icon: faReact, color: "text-sky-500" },
    { id: "vue", skill: "Vue", icon: faVuejs, color: "text-green-500" },
    {
      id: "typescript",
      skill: "TypeScript",
      icon: faT,
      color: "text-blue-500",
    },
    { id: "next", skill: "Next.js", icon: faN, color: "text-black" },
    { id: "django", skill: "Django", icon: faD, color: "text-green-800" },
    { id: "node", skill: "Node.js", icon: faNode, color: "text-green-400" },
    {
      id: "tailwind",
      skill: "Tailwind CSS",
      icon: faBacon,
      color: "text-sky-300",
    },
    {
      id: "bootstrap",
      skill: "Bootstrap",
      icon: faBootstrap,
      color: "text-purple-500",
    },
    { id: "vercel", skill: "Vercel", icon: faServer, color: "text-black" },
    {
      id: "superbase",
      skill: "Superbase",
      icon: faServer,
      color: "text-emerald-800",
    },
    { id: "github", skill: "GitHub", icon: faGithub, color: "text-orange-500" },
  ];

  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold mb-6">기술</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((s) => (
          <Skill key={s.id} {...s} />
        ))}
      </div>
    </section>
  );
}
