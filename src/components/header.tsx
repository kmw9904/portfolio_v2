import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="header-inner" aria-label="주요 메뉴">
        <Link className="wordmark" href="/" title="포트폴리오 홈">
          KMW
        </Link>
        <div className="nav-links">
          <a href="#experience">경력</a>
          <a href="#projects">프로젝트</a>
          <a href="#skills">기술</a>
          <a href="#contact">연락처</a>
        </div>
      </nav>
    </header>
  );
}
