import {
  faReact,
  faVuejs,
  faJs,
  faPython,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faDatabase,
  faServer,
  faVial,
} from "@fortawesome/free-solid-svg-icons";
import Skill from "./skill";
import { SkillData } from "@/types";

export default function Skills() {
  const skills: SkillData[] = [
    { id: "python", skill: "Python", detail: "알고리즘·데이터 처리", icon: faPython, color: "text-blue-400" },
    { id: "javascript", skill: "JavaScript", detail: "웹 동작과 API 연동", icon: faJs, color: "text-yellow-500" },
    { id: "typescript", skill: "TypeScript", detail: "타입 기반 화면·데이터 구조", icon: faCode, color: "text-blue-500" },
    { id: "react", skill: "React", detail: "컴포넌트와 상태 처리", icon: faReact, color: "text-sky-500" },
    { id: "vue", skill: "Vue", detail: "금융상품 웹서비스 구현", icon: faVuejs, color: "text-green-500" },
    { id: "next", skill: "Next.js", detail: "화면·인증·기록 API", icon: faServer, color: "text-gray-700 dark:text-gray-200" },
    { id: "go", skill: "Go", detail: "운영 자동화와 배치", icon: faCode, color: "text-cyan-500" },
    { id: "backend", skill: "Django · Spring Boot", detail: "API 연동과 일부 백엔드 수정", icon: faServer, color: "text-emerald-600" },
    { id: "sql", skill: "SQL · PostgreSQL", detail: "관계형 데이터 설계·검증", icon: faDatabase, color: "text-indigo-500" },
    { id: "dynamodb", skill: "DynamoDB", detail: "단일 테이블·운영 데이터", icon: faDatabase, color: "text-amber-500" },
    { id: "aws", skill: "AWS", detail: "ECS·Lambda·로그·복구", icon: faAws, color: "text-orange-500" },
    { id: "testing", skill: "검증과 협업", detail: "GitHub·통합시험·장애 분석", icon: faVial, color: "text-purple-500" },
  ];

  return (
    <section id="skills" className="mb-16">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">기술</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          이름만 나열하지 않고 실제로 적용한 범위를 함께 적었습니다.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <Skill key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
}
