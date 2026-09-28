export default function Introduce() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <p className="eyebrow">Frontend developer and web publisher</p>
      <div className="hero-grid">
        <div>
          <h1 id="hero-title">
            디자인을 반응형 웹으로 구현하고
            <br />
            운영 오류까지 확인합니다.
          </h1>
        </div>
        <div className="hero-copy">
          <p>
            HTML과 CSS로 화면을 구성하고 JavaScript로 사용자 동작을
            연결합니다. API 연동 뒤에는 정상 화면뿐 아니라 빈 데이터와 오류
            흐름까지 점검합니다.
          </p>
          <div className="hero-actions" aria-label="주요 링크">
            <a className="button button-primary" href="#projects">
              대표 작업 보기
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
      </div>
    </section>
  );
}
