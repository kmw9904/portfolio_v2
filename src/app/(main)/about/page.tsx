const credentials = [
  "정보처리기사",
  "SQLD",
  "OPIc IH",
  "소프트웨어 개발 집중교육 1학기 800시간 이수",
];

const workingRules = [
  "화면과 API가 만나는 요청·응답 규격을 먼저 맞춥니다.",
  "정상 화면과 함께 빈 데이터와 오류 흐름을 확인합니다.",
  "배포가 끝난 뒤 로그와 실제 데이터로 동작을 다시 봅니다.",
];

export default function AboutPage() {
  return (
    <section id="about" className="section-block" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow">Profile</p>
        <h2 id="about-title">기본 정보</h2>
      </div>
      <div className="profile-grid">
        <article>
          <h3>교육과 자격</h3>
          <ul className="plain-list">
            {credentials.map((credential) => (
              <li key={credential}>{credential}</li>
            ))}
          </ul>
        </article>
        <article>
          <h3>작업 기준</h3>
          <ul className="plain-list">
            {workingRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}