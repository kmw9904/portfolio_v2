import About from "@/app/about/page";
import Contact from "@/components/contact";
import Introduce from "@/components/introduce";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <main className="container max-w-4xl mx-auto px-6 py-12">
      <Introduce />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
