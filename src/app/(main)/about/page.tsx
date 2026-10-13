const credentials = [
  "정보처리기사",
  "SQLD",
  "OPIc IH",
  "소프트웨어 개발 집중교육 1학기 800시간 이수",
];

const workingRules = [
  "업무 규칙을 화면, API와 데이터 구조에 같은 기준으로 반영합니다.",
  "정상 흐름과 함께 빈 값, 중복 요청과 권한 오류를 확인합니다.",
  "배포 뒤 로그와 실제 데이터를 대조하고 복구 근거를 남깁니다.",
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