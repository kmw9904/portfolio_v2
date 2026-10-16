const journey = [
  {
    step: "01",
    title: "사람과 제도의 관점에서 기술을 보았습니다",
    label: "정치외교학 전공 · EG@IG",
    description:
      "정치외교학을 공부하고 인터넷거버넌스 전문가그룹 EG@IG에서 글로벌 기술·정책 의제를 살폈습니다. 기능만 만드는 것이 아니라 이용자와 운영 기준까지 함께 봐야 한다는 관점을 얻었습니다.",
  },
  {
    step: "02",
    title: "생각을 실제 서비스로 옮기는 법을 배웠습니다",
    label: "SSAFY 12기 1학기 · 800시간",
    description:
      "Python, 웹, 데이터베이스와 생성형 AI를 집중적으로 학습했습니다. 금융상품 비교 웹서비스를 만들며 화면, API와 데이터 구조가 하나의 흐름으로 맞아야 한다는 점을 익혔습니다.",
  },
  {
    step: "03",
    title: "개발한 기능이 운영에서 버티는 조건을 배웠습니다",
    label: "주식회사 두부 · Project Operation팀 AX",
    description:
      "상담 AI, 수업 데이터베이스와 운영 자동화를 다뤘습니다. 원문과 로그로 오류를 좁히고 변경 전후의 데이터와 실제 사용 결과를 확인했습니다.",
  },
  {
    step: "04",
    title: "웹·API·데이터·운영을 연결하는 개발자로 확장했습니다",
    label: "개인 프로젝트 · 자격과 검증",
    description:
      "ITPE Quiz와 Boda를 통해 인증, 상태 관리, API 연동과 데이터 저장을 구현했습니다. 정보처리기사와 SQLD로 기초 지식을 정리하고 실행 결과로 구현 범위를 증명하고 있습니다.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="mb-20" aria-labelledby="journey-title">
      <div className="mb-8">
        <p className="text-sm font-semibold tracking-[0.2em] text-indigo-500">MY JOURNEY</p>
        <h2 id="journey-title" className="mt-2 text-3xl font-bold">학교에서 개발과 운영까지</h2>
        <p className="mt-3 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
          전공을 바꾼 사실보다, 사람과 제도를 보던 관점을 기술 구현과 운영 검증으로 어떻게 이어 왔는지 보여드립니다.
        </p>
      </div>

      <ol className="relative space-y-5 border-l border-indigo-200 pl-7 dark:border-indigo-900">
        {journey.map((item) => (
          <li key={item.step} className="relative rounded-xl bg-gray-100 p-6 shadow-sm dark:bg-gray-800">
            <span className="absolute -left-[2.65rem] top-6 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
              {item.step}
            </span>
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">{item.label}</p>
            <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
            <p className="mt-3 leading-7 text-gray-700 dark:text-gray-300">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
