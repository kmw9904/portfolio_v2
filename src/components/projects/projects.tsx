"use client";

import { useEffect, useRef, useState } from "react";
import Project from "./project";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ProjectData } from "@/types";

export default function Projects() {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/mock/projects.json");

        if (!response.ok) {
          throw new Error("데이터를 불러오는데 실패했습니다.");
        }

        const data = await response.json();

        setProjects(data);
      } catch (err) {
        console.log("err");
      }
    };

    fetchProjects();
  }, []);

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="projects" className="mb-30">
      <h2 className="text-3xl font-bold mb-6">프로젝트</h2>
      <div className="relative z-0">
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
