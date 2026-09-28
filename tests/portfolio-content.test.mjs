import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (relativePath) =>
  fs.readFileSync(path.join(root, relativePath), "utf8");

test("hero copy is tailored to web publishing work", () => {
  const hero = read("src/components/introduce.tsx");
  assert.match(hero, /디자인을 반응형 웹으로 구현하고/);
  assert.doesNotMatch(hero, /성장을 멈추지 않는 개발자/);
  assert.doesNotMatch(hero, /profile\.jpg/);
});

test("main page provides a skip link and semantic portfolio sections", () => {
  const page = read("src/app/(main)/page.tsx");
  assert.match(page, /본문 바로가기/);
  assert.match(page, /id="main-content"/);
  assert.match(page, /Experience/);
});

test("metadata describes a frontend and web publishing portfolio", () => {
  const layout = read("src/app/(main)/layout.tsx");
  assert.match(layout, /웹퍼블리싱/);
  assert.match(layout, /openGraph/);
  assert.match(layout, /robots/);
});

test("featured projects are concise and role-relevant", () => {
  const projects = JSON.parse(read("public/mock/projects.json"));
  assert.equal(projects.length, 4);
  assert.deepEqual(
    projects.map((project) => project.id),
    [8, 9, 1, 10]
  );
  assert.equal(projects[0].title, "Boda 반응형 웹");
  assert.equal(projects[1].title, "ITPE Quiz 학습 서비스");
  assert.equal(projects[3].title, "PHP 기업 홈페이지 시연");
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
