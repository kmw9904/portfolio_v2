import Image from "next/image";
import { certData } from "@/data/certData";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = certData[id];

  if (!data) return notFound();

  return (
    <div className="max-w-xl mx-auto py-16 px-6">
      <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{data.period}</p>
      {/* ✅ 이미지 크기 통일 + 비율 유지 */}
      <div className="w-full aspect-[3/2] relative rounded overflow-hidden mb-6">
        <Image
          src={data.image as string}
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>
      <p className="whitespace-pre-line">{data.review}</p>
    </div>
  );
}
