"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const projects = [
    {
      id: 1,
      title: "Aura E-Commerce",
      category: "Web Design",
      image: "/portfolioImg/ecommerce.jpg",
      span: "md:col-span-7",
      height: "h-[400px] md:h-[550px]",
    },
    {
      id: 2,
      title: "EcoBrand Identity",
      category: "Branding",
      image: "/portfolioImg/branding.jpg",
      span: "md:col-span-5",
      height: "h-[400px] md:h-[550px]",
    },
    {
      id: 3,
      title: "Fintech Revolution",
      category: "UI/UX & Web Development",
      image: "/portfolioImg/uiux.jpg",
      span: "md:col-span-4",
      height: "h-[350px] md:h-[450px]",
    },
    {
      id: 4,
      title: "Nexus SaaS",
      category: "UI/UX Design",
      image: "/portfolioImg/saas.jpg",
      span: "md:col-span-4",
      height: "h-[350px] md:h-[450px]",
    },
    {
      id: 5,
      title: "Lumina Marketing",
      category: "Digital Campaign",
      image: "/portfolioImg/marketing.jpg",
      span: "md:col-span-4",
      height: "h-[350px] md:h-[450px]",
    },
  ];

  const delays = [
    "delay-300",
    "delay-600",
    "delay-900",
    "delay-1200",
    "delay-1500",
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && sectionRef.current) {
          const elements =
            sectionRef.current.querySelectorAll(".animate-fade-up");

          elements.forEach((el: Element) => {
            el.classList.add("show");
          });

          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="w-full p-4 md:p-8 flex flex-col gap-8 md:gap-12 mt-10 scroll-mt-24"
    >
      {/* title and description */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-2 animate-fade-up">
        <div>
          <h3 className="text-gray-500 dark:text-gray-200 uppercase tracking-widest text-xs md:text-sm font-bold mb-2">
            Our Portfolio
          </h3>
          <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tight">
            Selected works.
          </h2>
        </div>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`relative w-full ${project.span} ${project.height} rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer animate-fade-up ${delays[index]}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <div className="flex items-end justify-between w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="text-[#d4c03f] text-xs md:text-sm font-semibold uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-[#d4c03f] text-2xl md:text-4xl font-bold leading-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500 shadow-xl">
                  →
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
