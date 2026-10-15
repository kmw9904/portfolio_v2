import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, ExternalLink } from "lucide-react";

export default function Project({
  id,
  img,
  title,
  skills,
  summary,
  role,
  outcome,
  evidence,
  github,
  live,
  address,
}: {
  id: number;
  img?: string;
  title: string;
  skills: string[];
  summary: string;
  role: string;
  outcome: string;
  evidence: string;
  github?: string;
  live?: string;
  address?: string;
}) {
  const visualFlow: Record<number, string> = {
    11: "검색 → 근거 검증 → 품질 측정",
    12: "원본 분석 → 구조화 → 복구 검증",
    9: "기록 → 인증 → 동기화",
    8: "견적 → 예약 → 결제",
  };

  return (
    <article className="grid min-h-[520px] overflow-hidden rounded-lg bg-gray-100 shadow-lg dark:bg-gray-800 md:grid-cols-[0.9fr_1.1fr]">
      <Link
        href={`/project/${id}`}
        className="relative flex min-h-64 items-center justify-center bg-gradient-to-br from-indigo-100 to-gray-200 p-6 dark:from-gray-900 dark:to-slate-950"
        aria-label={`${title} 상세 보기`}
      >
        {img ? (
          <div className="relative h-full min-h-60 w-full transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src={img}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              alt={`${title} 실제 실행 화면`}
              className="object-contain rounded-xl"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center text-center text-gray-600 dark:text-gray-300">
            <span className="mb-5 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold tracking-widest text-indigo-600 dark:bg-white/10 dark:text-indigo-300">
              WORK PROJECT
            </span>
            <BriefcaseBusiness className="h-14 w-14 text-indigo-500" />
            <p className="mt-5 max-w-xs text-xl font-semibold leading-8">{title}</p>
            <p className="mt-3 text-sm font-medium text-indigo-600 dark:text-indigo-300">
              {visualFlow[id] ?? "화면 → API → 데이터"}
            </p>
            <p className="mt-2 text-sm">업무 프로젝트는 내부 코드를 공개하지 않습니다.</p>
          </div>
        )}
      </Link>

      <div className="flex flex-col justify-center p-6 md:p-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-4 leading-7 text-gray-700 dark:text-gray-300">{summary}</p>

        <dl className="mt-5 space-y-3 text-sm">
          <div>
            <dt className="font-semibold text-indigo-600 dark:text-indigo-300">담당</dt>
            <dd className="mt-1 text-gray-700 dark:text-gray-300">{role}</dd>
          </div>
          <div>
            <dt className="font-semibold text-indigo-600 dark:text-indigo-300">확인한 결과</dt>
            <dd className="mt-1 text-gray-700 dark:text-gray-300">{outcome}</dd>
          </div>
          <div>
            <dt className="font-semibold text-indigo-600 dark:text-indigo-300">검증 근거</dt>
            <dd className="mt-1 text-gray-700 dark:text-gray-300">{evidence}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              className="rounded-md bg-gray-200 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-200"
              key={skill}
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={`/project/${id}`} className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white">
            상세 보기
          </Link>
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-1 rounded-md bg-gray-800 px-4 py-2 text-sm text-white dark:bg-gray-200 dark:text-gray-900">
              GitHub <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white">
              라이브 데모
            </a>
          )}
          {address && (
            <a href={address} target="_blank" rel="noreferrer" className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white">
              배포 페이지
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
