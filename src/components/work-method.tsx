const methods = [
  {
    number: "01",
    title: "문제를 기준으로 바꿉니다",
    description:
      "요청을 바로 구현하기보다 정상과 예외, 데이터 출처와 사용자의 최종 판단 기준부터 정리합니다.",
    evidence: "상담 원문 대조 · API 요청과 응답표 · 데이터 관계 확인",
  },
  {
    number: "02",
    title: "구현 범위를 구분합니다",
    description:
      "혼자 구현한 부분과 팀 결과, 수정한 API와 연동한 기능을 나눠 설명합니다. 모르는 영역은 확인한 범위까지만 말합니다.",
    evidence: "개인 프로젝트 · 개인 2인 팀 · 업무 프로젝트 구분",
  },
  {
    number: "03",
    title: "배포 뒤 결과를 확인합니다",
    description:
      "화면이 열리는 데서 끝내지 않고 로그, 데이터 건수, 정상·빈 값·오류 흐름을 다시 확인합니다.",
    evidence: "빌드와 실행 화면 · 데이터 복구 내역 · 장애 로그",
  },
];

export default function WorkMethod() {
  return (
    <section id="method" className="mb-20" aria-labelledby="method-title">
      <div className="mb-7">
        <p className="text-sm font-semibold tracking-[0.2em] text-indigo-500">HOW I WORK</p>
        <h2 id="method-title" className="mt-2 text-3xl font-bold">제가 개발할 때 지키는 방식</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {methods.map((method) => (
          <article key={method.number} className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
            <p className="text-sm font-bold text-indigo-500">{method.number}</p>
            <h3 className="mt-3 text-xl font-bold">{method.title}</h3>
            <p className="mt-3 leading-7 text-gray-700 dark:text-gray-300">{method.description}</p>
            <p className="mt-5 border-t border-gray-200 pt-4 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
              {method.evidence}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
