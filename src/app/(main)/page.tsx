import About from "@/app/(main)/about/page";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Introduce from "@/components/introduce";
import Journey from "@/components/journey";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import WorkMethod from "@/components/work-method";

export default function Home() {
  return (
    <main className="container max-w-4xl mx-auto px-6 py-12">
      <Introduce />
      <Journey />
      <Experience />
      <WorkMethod />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
