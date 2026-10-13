const skillGroups = [
  {
    title: "응용 소프트웨어",
    skills: ["Python", "JavaScript", "TypeScript", "React", "Vue", "Next.js"],
  },
  {
    title: "API와 데이터베이스",
    skills: ["REST API", "Django", "Spring Boot API", "PostgreSQL", "MySQL", "DynamoDB", "SQL"],
  },
  {
    title: "품질과 신뢰성",
    skills: ["요구사항 정리", "데이터 정합성 검증", "통합 시나리오 시험", "로그 분석", "장애 원인 분석", "복구 확인"],
  },
  {
    title: "협업과 운영",
    skills: ["Git", "GitHub", "API 규격 조율", "AWS", "배포", "롤백", "운영 데이터 점검"],
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
        Spring Boot는 팀 프로젝트에서 API 연동과 일부 백엔드 수정에 사용했습니다.
        백엔드 전체를 단독 구축한 것으로 표시하지 않았습니다.
      </p>
    </section>
  );
}