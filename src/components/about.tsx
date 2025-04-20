export default function About() {
  return (
    <section id="about" className="mb-16">
      <h2 className="text-3xl font-bold mb-6">소개</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4">🎓 교육 및 활동</h3>
          <ul className="text-gray-800 dark:text-gray-300 leading-relaxed">
            <li>🏫 2023 EG@IG (인터넷거버넌스 전문가그룹) 1th 수료</li>
            <li>🏫 2024 삼성 청년 SW 아카데미 12th 1학기 수료</li>
            <li>📖 2024 inflearn React 강의 수료</li>
            <li>📖 2025 inflearn Tailwind-CSS 강의 수료</li>
            <li>📖 2025 inflearn TypeScript 강의 수료</li>
            <li>📖 2025 inflearn Next.js 강의 수료</li>
            <li>📖 2025 CodingApple Node.js 강의 수강</li>
          </ul>
        </article>
        <article className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4">🎫 자격증</h3>
          <ul className="text-gray-800 dark:text-gray-300 leading-relaxed">
            <li>🛠️ 2025 정보처리기사 2월 필기 합격 / 실기 준비 중</li>
            <li>🛠️ 2025 Sqld</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
