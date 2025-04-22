// src/app/(main)/@modal/(.)skills/[id]/page.tsx
import Modal from "@/components/modal";
import { skillDetailData } from "@/data/skillDetailData";
import { notFound } from "next/navigation";
import { Loader2 } from "lucide-react";

export function generateStaticParams() {
  return Object.keys(skillDetailData).map((id) => ({ id }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Promise 로 래핑된 params 에 await
  const { id } = await params;
  const data = skillDetailData[id];
  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-lg text-gray-600 dark:text-gray-300">
        <Loader2 className="w-10 h-10 animate-spin" />
        <p>불러오는 중입니다...</p>
      </div>
    );
  }

  const iframeSrc = data.blogUrl || data.notionUrl;

  return (
    <Modal>
      <div className="w-full max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          {data.title}
        </h1>

        {data.blogUrl ? (
          <iframe
            src={data.blogUrl}
            className="w-full h-[600px] rounded-lg border"
          />
        ) : data.notionUrl ? (
          <div className="text-center">
            <a
              href={data.notionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              👉 Notion에서 보기
            </a>
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            해당 기술에 대한 링크가 아직 등록되지 않았습니다.
          </p>
        )}
      </div>
    </Modal>
  );
}
