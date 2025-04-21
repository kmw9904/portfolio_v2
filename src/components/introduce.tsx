// src/components/introduce.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Introduce() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center mb-12">
      {/* 프로필 이미지 */}
      <div id="home" className="shrink-0 mb-6 md:mb-0 md:mr-10">
        <Image
          src="/profile.jpg"
          width={300}
          height={300}
          alt="프로필"
          className="rounded-full border-2 object-cover aspect-square"
        />
      </div>

      {/* 텍스트 */}
      <div className="text-container md:text-right max-w-xl">
        <h1 className="text-4xl font-bold mb-6">김명원</h1>
        <p>성장을 멈추지 않는 개발자</p>
        <p>
          단국대학교 정치외교학과를 졸업했지만
          <br />
          개발에 열정을 가지고 있는 개발자입니다.
        </p>
        <p>
          확장 가능한 웹 애플리케이션 구축에 전문성을 갖추고 있으며,
          <br />
          최신 JavaScript 프레임워크에 대한 지식을 보유하고 있습니다.
          <br />
          멈춰있지 않고 항상 새로운 도전과 학습을 매우 즐깁니다.
          <br />
          열심히 성장하며, 저의 역량을 펼칠 수 있는 장소를 찾고 있습니다.
        </p>

        <Link
          href="/introduce"
          className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 underline"
        >
          더 자세하게 알고 싶나요?
        </Link>
      </div>
    </section>
  );
}
