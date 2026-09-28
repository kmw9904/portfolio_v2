import Project from "./project";
import { ProjectData } from "@/types";
import projectData from "../../../public/mock/projects.json";

export default function Projects() {
  const projects = projectData as ProjectData[];

  return (
    <section id="projects" className="section-block" aria-labelledby="projects-title">
      <div className="section-heading section-heading-wide">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-title">대표 프로젝트</h2>
        </div>
        <p>
          화면 구현만 나열하지 않고 맡은 범위와 문제를 고친 기준을 함께
          기록했습니다.
        </p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={project.id} {...project} index={index + 1} />
        ))}
      </div>
    </section>
  );
}
