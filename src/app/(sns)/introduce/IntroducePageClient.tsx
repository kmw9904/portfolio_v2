"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHandsHelping,
  faSpa,
} from "@fortawesome/free-solid-svg-icons";

export default function IntroducePageClient() {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 font-sans">
      {/* ─── Cover & Profile ─── */}
      <div className="relative mb-20">
        <div className="h-48 bg-gradient-to-r from-indigo-300 to-indigo-500 rounded-lg shadow-inner animate-fade-in"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
          <Image
            src="/profile.jpg"
            width={180}
            height={180}
            alt="프로필"
            className="rounded-full border-4 border-white dark:border-gray-900 object-cover shadow-lg"
          />
        </div>
      </div>

      {/* ─── Tabs (FakeNav) ─── */}
      <nav className="mt-20 mb-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-sm sticky top-0 z-10">
        <ul className="flex space-x-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
          <li className="cursor-pointer hover:text-blue-600 transition">
            게시물
          </li>
        </ul>
      </nav>

      {/* ─── Layout ─── */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6">
        {/* Sidebar */}
        <aside className="space-y-6 hidden md:block">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
            <h3 className="font-semibold text-lg mb-2">기본 정보</h3>
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <p>단국대학교 정치외교학과 졸업</p>
              <p>Front‑end & Full‑stack Dev</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
            <h3 className="font-semibold text-lg mb-2">연락처</h3>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>Email:</strong> kms990415@example.com
              </li>
              <li>
                <strong>GitHub:</strong> github.com/kms990415
              </li>
              <li>
                <strong>Blog:</strong> velog.io/@kms990415
              </li>
            </ul>
          </div>
        </aside>

        {/* Feed */}
        <section className="space-y-6">
          {[
            {
              title: "장점 & 단점",
              icon: faStar,
              color: "text-yellow-400",
              date: "2025-04-21",
              content: (
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
                  <p className="leading-relaxed text-sm text-gray-700 dark:text-gray-300">
                    저의 첫 번째 장점은{" "}
                    <strong className="text-indigo-600">
                      “하고자 하는 바가 생기면, 반드시 실현시키려는 실행력”
                    </strong>
                    입니다.
                    <br />
                    군 전역 후, 저의 정치와 국제 관계에 관심은 가면 갈수록
                    높아져 가고 , 그것을 학문적으로 깊이 있게 배우고자 편입을
                    결심하였습니다.
                    <br />
                    독학으로 입시 전략을 세우고, 스스로 동기 부여하며 꾸준히
                    준비한 결과,{" "}
                    <strong>단국대학교 정치외교학과 편입에 성공</strong>할 수
                    있었습니다.
                    <br />
                    그 과정은 제게 명확한 목표를 향해 치열하게 달려갈 수 있다는
                    자신감을 심어주었고, 이는 지금의 개발자로서의 길에도 그대로
                    이어지고 있습니다.
                    <br />
                    비록 전공은 정치외교였지만, 학부 시절{" "}
                    <strong>‘인터넷 거버넌스’와 디지털 사회 구조</strong>에 대해
                    공부하며 기술의 중요성을 체감하였고, 그 경험을 바탕으로{" "}
                    <strong className="text-indigo-600">
                      ‘프로그래밍’이라는 새로운 목표
                    </strong>
                    를 발견하게 되었습니다.
                  </p>

                  <p>
                    반대로, 이러한 실행력을 뒷받침하기 위해{" "}
                    <strong className="text-rose-600">
                      “무엇을 원하는지 찾는 과정”에 많은 시간이 걸린다는 점
                    </strong>
                    은 저의 단점이기도 합니다. 하고 싶은 것이 없다면 오히려
                    정체되어 있는 기분을 받으며, 스스로에게 엄격한 기준을
                    들이대는 편입니다. 그러나 지금은 방향성을 분명히 찾았기에,
                    그 단점은 점차 극복되고 있습니다.
                  </p>

                  <p>
                    두 번째 장점은{" "}
                    <strong className="text-indigo-600">
                      “다양한 사람과의 소통 경험”
                    </strong>
                    입니다. 저는 19살 때부터 군 복무 시기를 제외하고 꾸준히
                    아르바이트를 병행해 왔습니다. 이마트 카트 정리, 편의점 운영,
                    물류센터 상하차, 카페 바리스타, 웨딩홀 보조, 버스 동전 정리,
                    CCTV 점검까지—
                    <strong className="text-blue-600">
                      거의 안 해본 일이 없을 정도로 사회적 경험이 풍부합니다.
                    </strong>
                  </p>

                  <p>
                    그렇게 다양한 환경에서 수많은 고객과 동료들을 만나며,{" "}
                    <strong>관계에서의 융통성과 공감력</strong>을
                    체득하였습니다. 오랜 기간 아르바이트를 하며 단 한 번의
                    트러블 없이 신뢰를 쌓았다는 점은, 제가{" "}
                    <strong className="text-green-600">
                      조직에 잘 융화되는 사람
                    </strong>
                    임을 방증합니다.
                  </p>
                </div>
              ),
              id: "strengths",
            },

            {
              title: "협업 경험 & 갈등 해결",
              icon: faHandsHelping,
              color: "text-green-500",
              date: "2025-04-10",
              content: (
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
                  <p>
                    저의 협업 경험은{" "}
                    <strong className="text-green-600">
                      정치외교학과라는 학문적 배경
                    </strong>
                    에서 비롯되었습니다. 학창 시절, 다양한 주제의 팀 발표와
                    토론, 질의응답 등을 통해 자연스럽게 다양한 의견을 듣고
                    조율하는 능력을 키울 수 있었습니다. 특히, 저는{" "}
                    <strong className="text-green-600">
                      “나의 의견이 항상 정답일 수는 없다”
                    </strong>
                    는 태도를 중요하게 생각하며,
                    <strong className="text-indigo-600">
                      상대의 관점을 열린 자세로 경청
                    </strong>
                    하는 협업 방식을 지향합니다.
                  </p>

                  <p>
                    SSAFY에서 진행한 팀 프로젝트에서도 여러 형태의 갈등을
                    경험했습니다. 개발 방식의 차이, 일정 조율 문제, 그리고 발표
                    당일 팀원의{" "}
                    <strong className="text-red-500">예상치 못한 부재</strong>{" "}
                    등 다양한 상황이 있었습니다. 하지만 그 안에서 저는{" "}
                    <strong>
                      정답을 고집하기보다, 더 나은 방향으로 의견을 조율하는 것이
                      진짜 협업
                    </strong>
                    이라고 느꼈습니다.
                  </p>

                  <p>
                    예를 들어 코드 스타일에 대한 충돌이 발생했을 때, 저는 제
                    방식을 주장하기보다는
                    <strong className="text-indigo-600">
                      상대의 코드 작성 의도를 이해하려 노력
                    </strong>
                    했습니다. 그렇게 서로의 스타일을 존중한 결과,{" "}
                    <strong className="text-green-600">
                      팀 전체가 이해할 수 있는 구조로 개선
                    </strong>
                    할 수 있었고, 오히려 프로젝트의 완성도는 더 높아졌습니다.
                  </p>

                  <p>
                    특히 기억에 남는 상황은 발표자가 갑자기 나타나지 않았을
                    때였습니다. 당황스러운 상황이었지만, 저는{" "}
                    <strong>지금까지 함께 노력해온 팀원에 대한 신뢰</strong>를
                    바탕으로 발표를 자처했습니다. 완벽하지는 않았지만, 준비해온
                    내용을 차분히 전달하며 프로젝트를 마무리했고, 결과적으로{" "}
                    <strong className="text-indigo-600">
                      팀의 유연성과 결속력
                    </strong>
                    을 다시금 확인하는 계기가 되었습니다.
                  </p>

                  <p>
                    저는 협업에서{" "}
                    <strong className="text-indigo-700">
                      다름을 인정하고, 그것을 더 나은 방향으로 전환하는 힘
                    </strong>
                    이 중요하다고 믿습니다. 정답을 찾는 과정이 아니라,{" "}
                    <strong className="text-green-600">
                      함께 더 좋은 결과를 만들어가는 과정
                    </strong>
                    이 협업의 본질이라 생각합니다.
                  </p>
                </div>
              ),
              id: "collab",
            },
            {
              title: "스트레스 관리 방법",
              icon: faSpa,
              color: "text-pink-400",
              date: "2025-03-28",
              content: (
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
                  <p>
                    저는{" "}
                    <strong className="text-green-600">
                      감정의 균형이 결국 집중력과 성과를 만든다
                    </strong>
                    고 믿기에, 스트레스 관리 또한 개발자로서 중요한 역량 중
                    하나라고 생각합니다.
                  </p>
                  <p>
                    최근 가장 효과적인 방법은{" "}
                    <strong className="text-indigo-600">
                      자전거를 타고 바람을 맞으며 한강을 달리는 것
                    </strong>
                    입니다. 실내에만 오래 머물다 보면 시야가 좁아지고 생각이
                    복잡해지는데, 자연과 마주하며 바람을 느끼는 그 순간만큼은
                    온전히 저 자신에게 집중할 수 있습니다.
                  </p>
                  <p>
                    <strong>좋아하는 음악</strong>을 듣거나,{" "}
                    <strong>사람과의 대화</strong>, 맛있는 음식을 함께 즐기는
                    시간도 큰 도움이 됩니다. 때로는 단 한 마디의 공감이나 웃음이
                    하루치의 피로를 녹여주곤 합니다.
                  </p>
                  <p>
                    그 외에도 가볍게 <strong>산책을 하거나 스트레칭</strong>을
                    통해 신체의 긴장을 풀고, 간단한 <strong>취미 활동</strong>을
                    통해 마음을 정돈하기도 합니다.
                  </p>
                  <p>
                    저에게 스트레스 관리란, 단순히 ‘풀기 위한 행동’이 아니라,
                    <strong className="text-green-600">
                      스스로를 더 잘 이해하고 지속 가능한 성장을 위한 장치
                    </strong>
                    라고 생각합니다.
                  </p>
                </div>
              ),
              id: "stress",
            },
          ].map((card) => (
            <article
              key={card.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:ring-2 hover:ring-indigo-300"
            >
              {/* 게시글 헤더 */}
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/profile.jpg"
                  alt="작성자"
                  width={40}
                  height={40}
                  className="rounded-full object-cover border"
                />
                <div>
                  <p className="font-semibold text-sm text-gray-800 dark:text-gray-100">
                    김명원
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {card.date}
                  </p>
                </div>
              </div>

              {/* 제목 */}
              <div className="flex items-center space-x-2 mb-2">
                <FontAwesomeIcon icon={card.icon} className={card.color} />
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {card.title}
                </h4>
              </div>

              {/* 내용 */}
              {card.content}

              {/* 게시글 하단 (좋아요/공유) */}
              <div className="mt-4 flex space-x-6 text-sm text-gray-500 dark:text-gray-400 border-t pt-3">
                <span
                  onClick={() =>
                    showToast("저의 글을 좋아하는 당신을 저도 좋아합니다 👍")
                  }
                  className="hover:text-blue-500 cursor-pointer"
                >
                  👍 좋아요
                </span>
                <span
                  onClick={() =>
                    showToast(
                      "저의 글을 공유까지 하는 당신을 저의 친구들에게 공유하고 싶습니다 👍"
                    )
                  }
                  className="hover:text-green-500 cursor-pointer"
                >
                  🔁 공유
                </span>
              </div>
            </article>
          ))}
        </section>
      </div>
      {toast && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 text-white px-6 py-3 rounded-full shadow-lg animate-fade-in-out text-sm text-center pointer-events-none">
          {toast}
        </div>
      )}
    </main>
  );
}
