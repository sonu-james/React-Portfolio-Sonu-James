"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  const projects = [
    {
      title: "ABDULWAHAB TRADING LLC ",
      image: "/images/1.png",
      desc: "Built the ABDULWAHAB TRADING LLC website using React and Tailwind CSS with a component-based architecture",
      link: "https://www.wahabintl.com/",
    },
    {
      title: "True Star Business Solutions",
      image: "/images/2.png",
      desc: "Developed a modern and responsive business website using React and Tailwind CSS.",
      link: "https://truestaroman.com/",
    },
    {
      title: "Grade Transition System",
      image: "/images/3.png",
      desc: " Project refers to a UI design approach to create a modern, interactive, and visually appealing user experience.",
      link: "https://gradetrasitionsystem.netlify.app/",
    },
    {
      title: "KTRAC",
      image: "/images/4.png",
      desc: "KTRAC is a cloud-based SaaS (Software as a Service) Fleet Management System developed for managing and monitoring KSRTC vehicle operations digitally.",
      link: "https://your-realestatecrm-link.com",
    },
     {
      title: "Student Chapter Platform",
      image: "/images/5.png",
      desc: "Student Chapter Platform is a web-based application designed to support students by providing online learning materials, internship opportunities, and assessment management in a single platform",
      link: "https://white-matrix-student-chapter-fronte.vercel.app/",
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
            <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 h-[450px] hover:border-[rgb(240,38,72)] transition duration-300 shadow-lg flex flex-col justify-between">

              <div>
                <div
                  className="h-60 rounded-xl mb-4 bg-cover bg-center relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center px-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 text-sm">
                  {project.desc}
                </p>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center px-4 py-2 rounded-xl border border-[rgb(240,38,72)] text-[rgb(240,38,72)] hover:bg-[rgb(240,38,72)] hover:text-white transition  w-1/2"
              >
                View Project
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}