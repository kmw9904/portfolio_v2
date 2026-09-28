const highlights = [
  "고객상담 AI와 업무 자동화 기능 개발",
  "Go와 Python 기반 API 연동 및 배치 개선",
  "AWS 환경의 배포 확인과 장애 원인 추적",
  "기준 문서와 운영 데이터의 정합성 검증",
];

export default function Experience() {
  return (
    <section id="experience" className="section-block" aria-labelledby="experience-title">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2 id="experience-title">운영 문제를 코드로 옮긴 경력</h2>
      </div>
      <article className="experience-row">
        <div className="experience-meta">
          <p className="period">2026.06 - 2026.07</p>
          <p>주식회사 두부</p>
          <p>Project Operation팀 AX 인턴</p>
        </div>
        <div>
          <p className="experience-summary">
            상담 누락과 반복 확인 업무를 분석하고, API 연동과 자동화 기능으로
            바꿨습니다. 배포 뒤에는 로그와 실제 데이터를 대조해 동작 여부를
            확인했습니다.
          </p>
          <ul className="plain-list">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
