import Project from "./project";
import { ProjectData } from "@/types";
import projectData from "../../../public/mock/projects.json";

export default function Projects() {
  const projects = projectData as ProjectData[];

  return (
    <section id="projects" className="section-block projects-section" aria-labelledby="projects-title">
      <div className="section-heading section-heading-split">
        <div>
          <p className="eyebrow">Selected projects</p>
          <h2 id="projects-title">화면과 데이터가 함께 움직이는 서비스</h2>
        </div>
        <p className="section-description">
          인증과 기록, 예약과 결제, 조건별 조회처럼 여러 단계가 이어지는 기능을
          구현했습니다. 맡은 범위와 확인한 결과는 구분해 적었습니다.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project key={project.id} {...project} index={index + 1} />
        ))}
      </div>
    </section>
  );
}