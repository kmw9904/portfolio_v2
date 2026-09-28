export default function Contact() {
  return (
    <section id="contact" className="contact-block" aria-labelledby="contact-title">
      <p className="eyebrow">Contact</p>
      <h2 id="contact-title">함께 일할 기회를 찾고 있습니다.</h2>
      <p>
        반응형 웹 구현, 기존 화면 수정, API 연동과 오류 확인이 필요한 작업에
        관심이 있습니다.
      </p>
      <div className="contact-links">
        <a className="button button-primary" href="mailto:kms990415@naver.com">
          이메일 보내기
        </a>
        <a
          className="button button-secondary"
          href="https://github.com/kmw9904"
          target="_blank"
          rel="noreferrer"
        >
          GitHub 보기
        </a>
        <a
          className="text-link"
          href="https://velog.io/@kms990415/posts"
          target="_blank"
          rel="noreferrer"
        >
          기술 기록
        </a>
      </div>
    </section>
  );
}