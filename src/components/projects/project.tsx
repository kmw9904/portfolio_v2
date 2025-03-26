import Image from "next/image";

export default function Project({
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
    <article className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg ">
      <div className="relative w-full h-[500px] p-6">
        <div className="relative w-full h-full hover:scale-105 transition-transform duration-300">
          <Image
            src={img}
            fill
            alt={title}
            className="object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, idx) => (
            <span
              className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300 dark:border-gray-600"
              key={idx}
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
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
