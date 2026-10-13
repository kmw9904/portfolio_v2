export default function Introduce() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-badge">Application developer · Data reliability</p>
        <h1 id="hero-title">
          업무를 코드로 옮기고,
          <br />
          오류의 원인까지 찾습니다.
        </h1>
        <p className="hero-description">
          웹 화면과 API, 데이터베이스를 연결해 서비스를 구현했습니다.
          기능이 작동하는 데서 멈추지 않고 데이터 정확성, 예외 흐름과 배포 뒤 로그를 확인합니다.
        </p>
        <div className="hero-actions" aria-label="주요 링크">
          <a className="button button-primary" href="#experience">
            주요 작업 보기
          </a>
          <a
            className="button button-secondary"
            href="https://github.com/kmw9904"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="응용 시스템 개발과 검증 항목">
        <div className="browser-bar" aria-hidden="true">
          <span></span><span></span><span></span>
          <p>portfolio.dev</p>
        </div>
        <div className="browser-content">
          <div className="visual-heading">
            <p>Reliable application development</p>
            <span>검증 기준 적용</span>
          </div>
          <div className="visual-flow" aria-hidden="true">
            <div><span>01</span><strong>업무 규칙</strong><small>요구사항 구조화</small></div>
            <i></i>
            <div><span>02</span><strong>Web · API</strong><small>기능과 데이터 연결</small></div>
            <i></i>
            <div><span>03</span><strong>DB · Test</strong><small>정합성과 예외 검증</small></div>
          </div>
          <div className="visual-score">
            <div><strong>800h</strong><span>소프트웨어 개발교육</span></div>
            <div><strong>RDB</strong><span>관계와 기록 설계</span></div>
            <div><strong>RCA</strong><span>로그 기반 장애 분석</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}