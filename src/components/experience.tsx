const cases = [
  {
    number: "CASE 01",
    title: "고객상담 AI 품질 개선",
    problem: "같은 질문에 모순되거나 오래된 답변이 검색돼 담당자가 결과를 그대로 사용하기 어려웠습니다.",
    action:
      "질의응답 356건과 기준문서 60건을 대조하고, 모순과 중복을 구분했습니다. 확인된 자료만 정정하고 담당자가 채택한 답변을 품질 판단 근거로 다시 연결했습니다.",
    result: "근거가 확인된 35건 정정 · 답변 단위 품질 판정 데이터 4,446건 확보",
    tags: ["Go", "RAG", "DynamoDB", "AWS", "품질 검증"],
  },
  {
    number: "CASE 02",
    title: "수업 커리큘럼 데이터베이스",
    problem: "같은 수업 활동이 여러 커리큘럼의 다른 회기에 배치돼 단순한 회기 번호만으로는 정확히 찾기 어려웠습니다.",
    action:
      "원본값, 계산값과 사람이 확인한 값을 나누고 커리큘럼별 배치정보를 별도로 설계했습니다. 원본 변경 시 수정·삭제·재검증하는 절차도 함께 구성했습니다.",
    result: "19개 학습플랜 · 587개 회기 · 1,615개 활동을 2,381개 항목으로 구조화",
    tags: ["Python", "SQL", "DynamoDB", "데이터 모델링", "복구 검증"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mb-20" aria-labelledby="experience-title">
      <div className="mb-8 grid gap-4 md:grid-cols-[1fr_1.1fr] md:items-end">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-indigo-500">WORK EXPERIENCE</p>
          <h2 id="experience-title" className="mt-2 text-3xl font-bold">운영에서 검증한 개발 경험</h2>
        </div>
        <div className="rounded-xl bg-indigo-50 p-5 dark:bg-indigo-950/40">
          <p className="font-bold text-indigo-700 dark:text-indigo-200">주식회사 두부 · Project Operation팀 AX</p>
          <p className="mt-2 leading-7 text-gray-700 dark:text-gray-300">
            기존 서비스에 합류해 상담 AI, 수업 데이터와 운영 자동화를 다뤘습니다. 구현뿐 아니라 수정 근거와 복구 절차를 남기는 역할을 맡았습니다.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {cases.map((item) => (
          <article key={item.number} className="rounded-xl bg-gray-100 p-6 shadow-sm dark:bg-gray-800">
            <p className="text-sm font-bold text-indigo-500">{item.number}</p>
            <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
            <dl className="mt-5 space-y-4 text-sm leading-7">
              <div>
                <dt className="font-bold text-gray-900 dark:text-white">문제</dt>
                <dd className="text-gray-700 dark:text-gray-300">{item.problem}</dd>
              </div>
              <div>
                <dt className="font-bold text-gray-900 dark:text-white">행동</dt>
                <dd className="text-gray-700 dark:text-gray-300">{item.action}</dd>
              </div>
              <div>
                <dt className="font-bold text-gray-900 dark:text-white">확인한 결과</dt>
                <dd className="font-medium text-indigo-700 dark:text-indigo-200">{item.result}</dd>
              </div>
            </dl>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-white px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-200">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
