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
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type Skill = {
  id: number;
  skill: string;
  icon: IconDefinition;
  color: string;
};

export default function Skills() {
  let id = 0;
  const skills: Skill[] = [
    {
      id: id++,
      skill: "Python",
      icon: faPython,
      color: "text-blue-400",
    },
    {
      id: id++,
      skill: "CSS3",
      icon: faCss3,
      color: "text-blue-600",
    },
    {
      id: id++,
      skill: "JavaScript",
      icon: faJs,
      color: "text-yellow-500",
    },
    {
      id: id++,
      skill: "React",
      icon: faReact,
      color: "text-sky-500",
    },
    {
      id: id++,
      skill: "Vue",
      icon: faVuejs,
      color: "text-green-500",
    },
    {
      id: id++,
      skill: "TypeScript",
      icon: faT,
      color: "text-blue-500",
    },
    {
      id: id++,
      skill: "Next",
      icon: faN,
      color: "text-black-500",
    },
    {
      id: id++,
      skill: "Django",
      icon: faD,
      color: "text-green-800",
    },
    {
      id: id++,
      skill: "Node",
      icon: faNode,
      color: "text-green-400",
    },
    {
      id: id++,
      skill: "TailwindCss",
      icon: faBacon,
      color: "text-sky-300",
    },
    {
      id: id++,
      skill: "BootStrap",
      icon: faBootstrap,
      color: "text-purple-500",
    },
    {
      id: id++,
      skill: "Vercel",
      icon: faServer,
      color: "text-black-500",
    },
    {
      id: id++,
      skill: "Superbase",
      icon: faServer,
      color: "text-emerald-800",
    },
    {
      id: id++,
      skill: "Github",
      icon: faGithub,
      color: "text-orange-500",
    },
  ];
  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold mb-6 ">기술</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((s) => (
          <Skill key={s.id} {...s} />
        ))}
      </div>
    </section>
  );
}
