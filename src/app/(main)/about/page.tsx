"use client";

import { useRouter } from "next/navigation";
import { certList } from "@/data/certData";

export default function AboutPage() {
  const router = useRouter();

  return (
    <section id="about" className="mb-16 px-4">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">교육·자격 근거</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">진로 전환과 기술 역량을 뒷받침하는 교육 및 자격입니다.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">교육 및 활동</h3>
          <ul className="space-y-2 text-gray-800 dark:text-gray-300 text-sm md:text-base">
            {certList.slice(0, 7).map((item) => (
              <li key={item.id}>
                <button
                  onClick={() =>
                    router.push(`/about/${item.id}`, { scroll: false })
                  }
                  className="block w-full text-left font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition-colors duration-200 break-keep cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </article>

        <article className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">보유 자격</h3>
          <ul className="space-y-2 text-gray-800 dark:text-gray-300 text-sm md:text-base">
            {certList.slice(7).map((item) => (
              <li key={item.id}>
                <button
                  onClick={() =>
                    router.push(`/about/${item.id}`, { scroll: false })
                  }
                  className="block w-full text-left font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition-colors duration-200 break-keep cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
