import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (relativePath) =>
  fs.readFileSync(path.join(root, relativePath), "utf8");

test("hero copy is tailored to reliable application development", () => {
  const hero = read("src/components/introduce.tsx");
  assert.match(hero, /업무를 코드로 옮기고/);
  assert.match(hero, /데이터 정확성/);
  assert.doesNotMatch(hero, /성장을 멈추지 않는 개발자/);
  assert.doesNotMatch(hero, /profile\.jpg/);
  assert.match(hero, /hero-visual/);
});

test("main page provides a skip link and semantic portfolio sections", () => {
  const page = read("src/app/(main)/page.tsx");
  assert.match(page, /본문 바로가기/);
  assert.match(page, /id="main-content"/);
  assert.match(page, /Experience/);
});

test("Dubu experience shows verified RAG and curriculum index work", () => {
  const experience = read("src/components/experience.tsx");
  assert.match(experience, /상담 AI/);
  assert.match(experience, /56\.3%/);
  assert.match(experience, /78\.2%/);
  assert.match(experience, /2,381/);
  assert.match(experience, /1,615/);
  assert.match(experience, /587/);
});

test("visual system uses a soft blue card-based layout", () => {
  const css = read("src/app/(main)/globals.css").toLowerCase();
  assert.match(css, /#3182f6/);
  assert.match(css, /#f2f4f6/);
  assert.match(css, /\.case-study-grid/);
  assert.match(css, /border-radius: 28px/);
});

test("metadata describes an application development portfolio", () => {
  const layout = read("src/app/(main)/layout.tsx");
  assert.match(layout, /응용 소프트웨어 개발/);
  assert.match(layout, /openGraph/);
  assert.match(layout, /robots/);
});

test("featured projects are concise and role-relevant", () => {
  const projects = JSON.parse(read("public/mock/projects.json"));
  assert.equal(projects.length, 3);
  assert.deepEqual(
    projects.map((project) => project.id),
    [9, 8, 1]
  );
  assert.equal(projects[0].title, "ITPE Quiz 학습 서비스");
  assert.equal(projects[1].title, "Boda 견적·예약 통합 플랫폼");
  assert.equal(projects[2].title, "금융상품 비교 웹서비스");
});

test("portfolio no longer claims stale certifications or misspelled skills", () => {
  const sourceFiles = [
    "src/components/about.tsx",
    "src/app/(main)/about/page.tsx",
    "src/components/skills/skills.tsx",
  ].map(read);
  const combined = sourceFiles.join("\n");
  assert.doesNotMatch(combined, /필기 합격|실기 준비 중|Superbase/);
  assert.match(combined, /정보처리기사/);
  assert.match(combined, /SQLD/);
});

test("PHP publishing demo includes semantic, SEO and accessibility basics", () => {
  const php = read("demos/company-site/index.php");
  const css = read("demos/company-site/assets/styles.css");
  const js = read("demos/company-site/assets/site.js");
  assert.match(php, /lang="ko"/);
  assert.match(php, /name="description"/);
  assert.match(php, /class="skip-link"/);
  assert.match(php, /<main id="main-content">/);
  assert.match(php, /jquery/i);
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(js, /aria-expanded/);
});
