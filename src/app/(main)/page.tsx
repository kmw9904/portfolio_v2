import About from "@/app/(main)/about/page";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Introduce from "@/components/introduce";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        본문 바로가기
      </a>
      <main id="main-content" className="site-shell">
        <Introduce />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </>
  );
}
