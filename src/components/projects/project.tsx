import { IdCard } from "lucide";
import Image from "next/image";
import Link from "next/link";

export default function Project({
  id,
  img,
  title,
  skills,
  github,
  live,
  address,
}: {
  id: number;
  img: string;
  title: string;
  skills: string[];
  github: string;
  live?: string;
  address?: string;
}) {
  return (
    <article className="flex flex-col justify-between h-full min-h-[500px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="relative w-full h-[300px] md:h-[500px] p-4 md:p-6">
        <div className="relative w-full h-full hover:scale-105 transition-transform duration-300">
          <Link href={`/project/${id}`}>
            <Image
              src={img}
              fill
              alt={title}
              priority
              className="object-contain rounded-xl"
            />
          </Link>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100 line-clamp-2">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4 mx-auto">
          {skills.map((skill, idx) => (
            <span
              className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300 dark:border-gray-600"
              key={idx}
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pb-5">
          <a
            href={github}
            className="text-sm bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-800 px-3 py-1 rounded-md"
          >
            Github
          </a>
          {live && (
            <a
              href={live}
              className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md"
            >
              라이브데모
            </a>
          )}
          {address && (
            <a
              href={address}
              className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md"
            >
              주소
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
