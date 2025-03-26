"use client";

import { useRef } from "react";
import Project from "./project";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

type Project = {
  id: number;
  img: string;
  title: string;
  skills: string[];
  github: string;
  live?: string;
  address?: string;
};

let id = 0;
export default function Projects() {
  const projects: Project[] = [
    {
      id: id++,
      img: "/project1.png",
      title: "대출 정보 제공 플랫폼",
      skills: ["Vue", "JavaScript", "CSS3", "Django", "BootStrap"],
      github: "https://github.com/kmw9904/projects",
    },
    {
      id: id++,
      img: "/project2.png",
      title: "Lean Cansvas",
      skills: ["React", "JavaScript", "Tailwind-CSS", "Vercel"],
      github: "https://github.com/kmw9904/lean-canvas",
      live: "https://lean-canvas-rouge.vercel.app/",
    },
    {
      id: id++,
      img: "/project3.png",
      title: "JavaScript와 TailwindCSS를 사용한 포트폴리오",
      skills: ["JavaScript", "Html5", "Tailwind-CSS", "Github-pages"],
      github: "https://github.com/kmw9904/portfolio",
      live: "https://kmw9904.github.io/portfolio/",
    },
    {
      id: id++,
      img: "/project4.png",
      title: "admin 사이트",
      skills: ["JavaScript", "Html5", "Tailwind-CSS", "Github-pages"],
      github: "https://github.com/kmw9904/admin-template",
      live: "https://kmw9904.github.io/admin-template/",
    },
    {
      id: id++,
      img: "/project5.png",
      title: "크롬 확장프로그램 TI와 소개 사이트",
      skills: ["JavaScript", "Html5", "Tailwind-CSS", "Vercel"],
      github: "https://github.com/kmw9904/TailwindCSS-Inspector",
      live: "https://tailwind-css-inspector.vercel.app/",
      address:
        "https://chromewebstore.google.com/detail/tailwind-css-inspector/mgmfijpcneljhcfbpkhaekgpaejgblkl?pli=1",
    },
    {
      id: id++,
      img: "/project6.png",
      title: "Next Page Router를 사용한 북페이지",
      skills: ["Next", "React", "JavaScript", "CSS", "Html5", "Vercel"],
      github: "https://github.com/kmw9904/learnNextjs/tree/main/section02",
      live: "https://onebite-books-page-ochre-psi.vercel.app/",
    },
    {
      id: id++,
      img: "/project7.png",
      title: "Next App Router를 사용한 북페이지",
      skills: ["Next", "React", "JavaScript", "CSS", "Html5", "Vercel"],
      github: "https://github.com/kmw9904/learnNextjs/tree/main/section03",
      live: "https://mw-books-app.vercel.app/",
    },
  ];

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="projects" className="mb-30">
      <h2 className="text-3xl font-bold mb-6">프로젝트</h2>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{ clickable: true }}
          className="rounded-lg"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <Project {...project} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 flex items-center gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-white dark:bg-gray-800 text-gray-700 dark:text-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="cursor-pointer w-5 h-5" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-white dark:bg-gray-800 text-gray-700 dark:text-white p-2 rounded-full shadow-md"
          >
            <ChevronRight className="cursor-pointer w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
