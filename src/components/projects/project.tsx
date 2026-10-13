import Image from "next/image";
import Link from "next/link";

export default function Project({
  id,
  img,
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
  img?: string;
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
    <article className={`project-card project-card-${id}`}>
      <Link className="project-cover" href={`/project/${id}`} aria-label={`${title} 상세 보기`}>
        {img ? (
          <Image src={img} fill sizes="(max-width: 760px) 100vw, 50vw" alt={`${title} 대표 화면`} />
        ) : (
          <div className="project-mock" aria-hidden="true">
            <div className="mock-top"><span></span><span></span><span></span></div>
            <div className="mock-body">
              <p>{String(index).padStart(2, "0")}</p>
              <strong>{id === 8 ? "견적부터 결제까지" : "기록이 이어지는 학습"}</strong>
              <div><span></span><span></span><span></span></div>
            </div>
          </div>
        )}
      </Link>
      <div className="project-card-body">
        <div className="project-card-heading">
          <p>{String(index).padStart(2, "0")}</p>
          <h3><Link href={`/project/${id}`}>{title}</Link></h3>
        </div>
        <p className="project-summary">{summary}</p>
        <div className="tag-list" aria-label="사용 기술">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
        <dl className="project-facts">
          <div><dt>담당</dt><dd>{role}</dd></div>
          <div><dt>결과</dt><dd>{outcome}</dd></div>
        </dl>
        <div className="project-links">
          <Link href={`/project/${id}`}>자세히 보기</Link>
          {github && <a href={github} target="_blank" rel="noreferrer">{sourceLabel ?? "GitHub"}</a>}
          {live && <a href={live} target="_blank" rel="noreferrer">데모 보기</a>}
        </div>
      </div>
    </article>
  );
}