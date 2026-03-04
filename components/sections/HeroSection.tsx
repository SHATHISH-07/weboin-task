"use client";

import { useState, useEffect, useRef } from "react";

const companies = [
  "Nexora",
  "Zentrix",
  "Velora",
  "Quantify",
  "NovaTech",
  "ByteForge",
  "Cloudora",
  "Syntrix",
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const passages = [
    <span key="1" className="block">
      <span className="block mb-6 md:mb-10 font-bold tracking-normal">
        We don&apos;t just build websites.
      </span>
      <span className="block">
        We craft immersive digital ecosystems designed to scale. Innovation
        meets execution.
      </span>
    </span>,
    <div
      key="2"
      className="relative w-full aspect-video md:h-112.5 bg-[#0a0a0a] rounded-3xl overflow-hidden group cursor-pointer shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-gray-800"
      onClick={togglePlay}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-neutral-800 via-black to-black opacity-80 group-hover:scale-110 transition-transform duration-1000 ease-out" />

      <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"
      >
        <source src="/HeroVideo.mp4" type="video/mp4" />
      </video>

      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isPlaying ? "opacity-0" : "opacity-100"}`}
      >
        <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-xl">
          <svg
            className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-black transition-colors duration-500 ml-2 md:ml-3"
            fill="currentColor"
            viewBox="0 0 30 20"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      <div
        className={`absolute bottom-6 left-6 md:bottom-10 md:left-10 overflow-hidden text-left transition-opacity duration-500 ${isPlaying ? "opacity-0" : "opacity-100"}`}
      >
        <h3 className="text-white text-2xl md:text-5xl font-bold translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500 ease-out">
          Watch Showreel
        </h3>
        <p className="text-xs md:text-lg mt-2 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-75">
          See how we build impactful digital experiences.
        </p>
      </div>
    </div>,
    "Ready to dominate your industry? Let's turn your vision into an undeniable reality. Contact us",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollPx = -top + windowHeight / 2;
      const scrollableHeight = height - windowHeight;

      let progress = scrollPx / scrollableHeight;

      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      if (progress < 0.3) {
        setActiveIndex(0);
      } else if (progress < 0.65) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen p-5 md:mt-10 flex flex-col gap-12">
      <div className="flex flex-col lg:flex-row lg:items-end gap-4 md:gap-8">
        <div className="text-6xl sm:text-9xl md:text-[12em] font-bold leading-none">
          WEBOIN
        </div>

        <div className="max-w-md pb-2 md:pb-6 text-left lg:text-right text-[#757575] font-bold">
          We deliver UI/UX design, web development, branding, and marketing to
          build impactful digital experiences.
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full border-y border-gray-300 py-2 gap-4 md:gap-8">
        <div className="relative flex flex-1 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee items-center pl-4 md:pl-10">
            {companies.map((company, index) => (
              <span
                key={index}
                className="mx-6 md:mx-10 text-2xl md:text-3xl font-bold text-gray-400"
              >
                {company}
              </span>
            ))}
          </div>

          <div
            className="flex whitespace-nowrap animate-marquee items-center pl-4 md:pl-10"
            aria-hidden="true"
          >
            {companies.map((company, index) => (
              <span
                key={`duplicate-${index}`}
                className="mx-6 md:mx-10 text-2xl md:text-3xl font-bold text-gray-400"
              >
                {company}
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0 pr-2 md:pr-8 text-right border-l border-gray-200 pl-4 md:pl-8">
          <div className="text-xl md:text-2xl font-black text-black">
            <span className="text-sm">★ ★ ★ ★ ☆ </span>4.9/5
          </div>
          <div className="text-xs md:text-sm font-semibold text-gray-500 mt-1">
            Trusted by 100+ businesses
          </div>
        </div>
      </div>

      <div ref={containerRef} className="relative w-full h-[250vh] mb-20">
        <div className="sticky top-24 md:top-25 w-full h-[60vh] md:h-[80vh] min-h-100 max-h-175 bg-black rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-6 md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-neutral-800/40 via-black to-black opacity-80 pointer-events-none" />

          {passages.map((content, index) => {
            const isActive = activeIndex === index;
            const isPast = index < activeIndex;

            let positionClasses =
              "opacity-0 translate-y-16 scale-95 pointer-events-none";

            if (isActive) {
              positionClasses =
                "opacity-100 translate-y-0 scale-100 pointer-events-auto delay-100";
            } else if (isPast) {
              positionClasses =
                "opacity-0 -translate-y-16 scale-105 pointer-events-none";
            }

            const firstPassageShift = index === 0 ? "-mt-16 md:-mt-24" : "";

            return (
              <div
                key={index}
                className={`absolute w-full max-w-7xl px-4 flex flex-col items-center justify-center text-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${positionClasses} ${firstPassageShift}`}
              >
                {typeof content === "string" ? (
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                    {content}
                  </h2>
                ) : (
                  <div className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight w-full flex items-center justify-center">
                    {content}
                  </div>
                )}

                {index === 2 && (
                  <button className="mt-8 md:mt-12 px-8 py-4 bg-white text-black text-lg md:text-xl font-bold rounded-full hover:scale-105 hover:bg-gray-200 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                    Get Started
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          flex-shrink: 0; 
        }
      `,
        }}
      />
    </div>
  );
};

export default HeroSection;
