// src/components/introduce.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Introduce() {
  return (
    <section className="flex w-full flex-col items-center justify-between mb-12 md:flex-row">
      {/* 프로필 이미지 */}
      <div id="home" className="mb-6 w-full max-w-[300px] shrink-0 md:mb-0 md:mr-10">
        <Image
          src="/profile.jpg"
          width={300}
          height={300}
          alt="프로필"
          className="rounded-full border-2 object-cover aspect-square"
        />
      </div>

      {/* 텍스트 */}
      <div className="text-container mx-auto w-full min-w-0 max-w-[320px] md:mx-0 md:max-w-xl md:text-right">
        <h1 className="text-4xl font-bold mb-4">김명원</h1>
        <p className="mb-4 break-all text-lg font-semibold leading-7 text-indigo-500 md:text-xl md:leading-8">
          웹·API·데이터·운영을 함께 보는
          <br />
          응용 소프트웨어 개발자
        </p>
        <p className="text-sm leading-7 text-gray-700 [word-break:break-all] dark:text-gray-300 md:text-base">
          단국대학교 정치외교학과를 졸업한 뒤 800시간의 소프트웨어 개발교육과
          프로젝트, AX 인턴을 거쳐 개발로 진로를 전환했습니다.
          {" "}
          화면 구현에 머물지 않고 API와 데이터베이스를 연결하며,
          배포 뒤에는 로그와 실제 데이터로 오류와 예외를 확인합니다.
        </p>

        <Link
          href="#projects"
          className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 underline"
        >
          프로젝트와 역할 보기
        </Link>
      </div>
    </section>
  );
}
