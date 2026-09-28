import Link from "next/link";

export default function Project({
  id,
  title,
  skills,
  summary,
  role,
  outcome,
  github,
  live,
  sourceLabel,
  index,
}: {
  id: number;
  title: string;
  skills: string[];
  summary: string;
  role: string;
  outcome: string;
  github?: string;
  live?: string;
  sourceLabel?: string;
  index: number;
}) {
  return (
    <article className="project-row">
      <p className="project-index" aria-hidden="true">
        {String(index).padStart(2, "0")}
      </p>
      <div className="project-body">
        <div className="project-title-row">
          <h3>{title}</h3>
          <div className="tag-list" aria-label="사용 기술">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
        <p className="project-summary">{summary}</p>
        <dl className="project-facts">
          <div>
            <dt>담당</dt>
            <dd>{role}</dd>
          </div>
          <div>
            <dt>확인한 결과</dt>
            <dd>{outcome}</dd>
          </div>
        </dl>
        <div className="project-links">
          <Link href={`/project/${id}`}>상세 보기</Link>
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              {sourceLabel ?? "GitHub"}
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer">
              데모 보기
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
