import Modal from "@/components/modal";
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
      <img src={data.image} alt={data.title} className="rounded mb-6" />
      <p className="whitespace-pre-line">{data.review}</p>
    </div>
  );
}
