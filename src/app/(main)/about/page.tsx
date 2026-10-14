"use client";

import { useRouter } from "next/navigation";
import { certList } from "@/data/certData";

export default function AboutPage() {
  const router = useRouter();

  return (
    <section id="about" className="mb-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">소개</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 🎓 교육 및 활동 */}
        <article className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6 hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4">🎓 교육 및 활동</h3>
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

        {/* 🎫 자격증 */}
        <article className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6 hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4">🎫 자격증</h3>
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
