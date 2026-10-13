export default function Contact() {
  return (
    <section id="contact" className="contact-block" aria-labelledby="contact-title">
      <p className="eyebrow">Contact</p>
      <h2 id="contact-title">정확성이 필요한 서비스를 개발하고 싶습니다.</h2>
      <p>
        의료진의 업무와 환자의 기록이 정확히 이어지는 병원정보시스템을 배우고,
        화면과 데이터, 운영 결과를 함께 확인하는 개발자로 성장하고 싶습니다.
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