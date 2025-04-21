// src/app/(main)/@modal/(.)skills/[id]/page.tsx
import Modal from "@/components/modal";
import { skillDetailData } from "@/data/skillDetailData";
import { notFound } from "next/navigation";

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
  if (!data) return notFound();

  const iframeSrc = data.blogUrl || data.notionUrl;

  return (
    <Modal>
      <div className="w-full max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          {data.title}
        </h1>
        {iframeSrc ? (
          <iframe
            src={iframeSrc}
            className="w-full h-[600px] rounded-lg border"
          />
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            해당 기술에 대한 링크가 아직 등록되지 않았습니다.
          </p>
        )}
      </div>
    </Modal>
  );
}
