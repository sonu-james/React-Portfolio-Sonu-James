"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  const projects = [
    {
      title: "Restaurant Website",
      image: "/images/1.png",
      desc: "Modern food ordering UI with responsive design.",
    },
    {
      title: "Travel Website",
      image: "/images/2.png",
      desc: "Tour booking website with animations.",
    },
    {
      title: "Portfolio",
      image: "/images/3.png",
      desc: "Personal portfolio with dark theme.",
    },
    {
      title: "Real Estate CRM",
      image: "/images/4.png",
      desc: "Zoho integrated property dashboard.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-4 max-w-6xl mx-auto"
    >
      <h2 className="text-center text-4xl mb-12 font-thin">
        <span className="text-[rgb(240,38,72)]">My</span> Projects
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 h-[380px] hover:border-[rgb(240,38,72)] transition duration-300 shadow-lg">

              <div
                className="h-60 rounded-xl mb-4 bg-cover bg-center relative overflow-hidden"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-400 text-sm">
                {project.desc}
              </p>

              <button className="mt-4 px-4 py-2 rounded-full border border-[rgb(240,38,72)] text-[rgb(240,38,72)] hover:bg-[rgb(240,38,72)] hover:text-white transition">
                View Project
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}