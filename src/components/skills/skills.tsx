const skillGroups = [
  {
    title: "웹퍼블리싱",
    skills: ["HTML5", "CSS", "반응형 레이아웃", "시맨틱 마크업", "웹 접근성 점검"],
  },
  {
    title: "프론트엔드",
    skills: ["JavaScript", "TypeScript", "React", "Vue", "Next.js", "상태 처리"],
  },
  {
    title: "연동과 데이터",
    skills: ["REST API", "PostgreSQL", "MySQL", "Django", "Spring Boot API"],
  },
  {
    title: "검증과 운영",
    skills: ["Git", "브라우저 개발자 도구", "Lighthouse", "오류 흐름 점검", "배포 로그 확인"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-block" aria-labelledby="skills-title">
      <div className="section-heading">
        <p className="eyebrow">Capabilities</p>
        <h2 id="skills-title">사용 기술과 확인 기준</h2>
      </div>
      <div className="skills-table">
        {skillGroups.map((group) => (
          <article key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.skills.join(" · ")}</p>
          </article>
        ))}
      </div>
      <p className="skills-note">
        PHP와 jQuery는 아래 기업 홈페이지 시연물에 적용했습니다. 그누보드는 별도
        실행 검증 전이므로 사용 기술에 포함하지 않았습니다.
      </p>
    </section>
  );
}