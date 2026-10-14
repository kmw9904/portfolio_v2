import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (relativePath) =>
  fs.readFileSync(path.join(root, relativePath), "utf8");

test("original dark portfolio structure is preserved", () => {
  const page = read("src/app/(main)/page.tsx");
  const layout = read("src/app/(main)/layout.tsx");
  const introduce = read("src/components/introduce.tsx");

  assert.match(page, /<Introduce \/>/);
  assert.match(page, /<About \/>/);
  assert.match(page, /<Skills \/>/);
  assert.match(page, /<Projects \/>/);
  assert.match(page, /<Contact \/>/);
  assert.match(layout, /defaultTheme="dark"/);
  assert.match(introduce, /profile\.jpg/);
});

test("hero copy shows the agreed reusable developer identity", () => {
  const hero = read("src/components/introduce.tsx");
  assert.match(hero, /웹·API·데이터·운영을 함께 보는/);
  assert.match(hero, /응용 소프트웨어 개발자/);
  assert.match(hero, /단국대학교 정치외교학과/);
  assert.doesNotMatch(hero, /성장을 멈추지 않는 개발자|열심히 성장|최신 JavaScript 프레임워크/);
});

test("education and credentials are current without year labels", () => {
  const data = read("src/data/certData.ts");
  assert.match(data, /삼성청년SW아카데미 12기 1학기 코딩집중과정/);
  assert.match(data, /정보처리기사 취득/);
  assert.match(data, /SQL 개발자 자격 취득/);
  assert.doesNotMatch(data, /2022|2023|2024|2025|2026|필기 합격|실기 준비 중|진행 중/);
});

test("skills reflect verified development and operations work", () => {
  const skills = read("src/components/skills/skills.tsx");
  assert.match(skills, /Go/);
  assert.match(skills, /SQL · PostgreSQL/);
  assert.match(skills, /DynamoDB/);
  assert.match(skills, /AWS/);
  assert.match(skills, /검증과 협업/);
  assert.doesNotMatch(skills, /Superbase/);
});

test("five verified projects are featured with role and outcome", () => {
  const projects = JSON.parse(read("public/mock/projects.json"));
  assert.equal(projects.length, 5);
  assert.deepEqual(projects.map((project) => project.id), [11, 12, 9, 8, 1]);
  for (const project of projects) {
    assert.ok(project.title);
    assert.ok(project.summary);
    assert.ok(project.role);
    assert.ok(project.outcome);
    assert.ok(Array.isArray(project.skills) && project.skills.length > 0);
    assert.ok(fs.existsSync(path.join(root, `public/mock/project/${project.id}.json`)));
  }
});

test("project carousel stays manual for readability", () => {
  const projects = read("src/components/projects/projects.tsx");
  assert.doesNotMatch(projects, /Autoplay|autoplay=|swiper/);
  assert.match(projects, /이전 프로젝트/);
  assert.match(projects, /다음 프로젝트/);
  assert.match(projects, /setActiveIndex/);
});

test("footer and visible main content have no stale year labels", () => {
  const footer = read("src/components/footer.tsx");
  const visible = [
    "src/components/header.tsx",
    "src/components/introduce.tsx",
    "src/app/(main)/about/page.tsx",
    "src/components/skills/skills.tsx",
    "src/components/projects/projects.tsx",
    "src/components/contact.tsx",
    "src/components/footer.tsx",
  ].map(read).join("\n");

  assert.doesNotMatch(footer, /20\d{2}/);
  assert.doesNotMatch(visible, /20\d{2}|필기 합격|실기 준비 중|내일이 더 빛나는/);
});

test("metadata describes an application development portfolio", () => {
  const layout = read("src/app/(main)/layout.tsx");
  assert.match(layout, /응용 소프트웨어 개발 포트폴리오/);
  assert.match(layout, /openGraph/);
});
