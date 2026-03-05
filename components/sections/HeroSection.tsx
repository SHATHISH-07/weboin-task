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

  const sentence1 = "We don't just build websites.";
  const sentence2 =
    "We craft immersive digital ecosystems designed to scale. Innovation meets execution.";
  const sentence3 = "Ready to dominate your industry?";

  const words1 = sentence1.split(" ");
  const words2 = sentence2.split(" ");
  const words3 = sentence3.split(" ");

  const passages = [
    <span key="1" className="block w-full">
      <span className="block mb-6 md:mb-10 bg-black rounded-2xl text-white font-bold tracking-normal p-3 md:p-4 w-fit mx-auto text-base sm:text-3xl md:text-6xl">
        {words1.map((word, i) => (
          <span
            key={i}
            className={`inline-block mr-2 transition-all duration-500 ${
              activeIndex === 0
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {word}
          </span>
        ))}
      </span>

      <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
        {words2.map((word, i) => (
          <span
            key={i}
            className={`inline-block mr-2 transition-all duration-500 ${
              activeIndex === 0
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {word}
          </span>
        ))}
      </span>
    </span>,
    <div
      key="2"
      className="relative w-full aspect-video md:h-150 bg-[#0a0a0a] rounded-3xl overflow-hidden group cursor-pointer "
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
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-xl">
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white group-hover:text-black transition-colors duration-500 ml-2 md:ml-3"
            fill="currentColor"
            viewBox="0 0 30 20"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      <div
        className={`absolute hidden md:block bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 overflow-hidden text-left transition-opacity duration-500  ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
      >
        <h3 className="text-white text-xl sm:text-2xl md:text-5xl font-bold translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500 ease-out">
          Watch Showreel
        </h3>
        <p className="text-xs sm:text-sm md:text-lg mt-1 md:mt-2 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-75 text-white">
          See how we build impactful digital experiences.
        </p>
      </div>
    </div>,
    <div
      key="3"
      className="relative w-full h-full min-h-200 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-center rounded-3xl overflow-hidden hero-bg-svg-p-2 "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-white/40 via-gray-300/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6 max-w-4xl py-6">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-black leading-tight tracking-tight">
          {words3.map((word, i) => (
            <span
              key={i}
              className={`inline-block mr-2 transition-all duration-500 ${
                activeIndex === 2
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {word}
            </span>
          ))}
        </h2>

        <p className="text-sm sm:text-base md:text-2xl text-gray-700 font-medium max-w-2xl">
          Let&apos;s turn your vision into an undeniable reality. Contact us
          today to start your journey with Weboin.
        </p>

        <button className="mt-4 md:mt-8 px-6 py-3 md:px-8 md:py-4 bg-black text-white text-sm md:text-lg font-bold rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-xl pointer-events-auto">
          Get Started
          <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
      </div>
    </div>,
  ];

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const handleScroll = () => {
      if (!containerRef.current || isMobile) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollPx = -top + windowHeight / 2;
      const scrollableHeight = height - windowHeight;

      let progress = scrollPx / scrollableHeight;

      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      if (progress < 0.33) {
        setActiveIndex(0);
      } else if (progress < 0.66) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    if (!isMobile) handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="home"
      className="min-h-screen p-4 sm:p-5 md:mt-10 flex flex-col gap-10 md:gap-12"
    >
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 md:gap-8">
        <div className="text-5xl sm:text-7xl md:text-9xl lg:text-[15em] font-bold leading-none opacity-0 animate-fade-in-hero-txt tracking-tighter">
          WEBOIN
        </div>

        <div className="max-w-xs sm:max-w-sm md:max-w-md pb-2 md:pb-6 text-left lg:text-right text-[#757575] font-bold opacity-0 animate-fade-in-hero-para text-sm md:text-base">
          We deliver UI/UX design, web development, branding, and marketing to
          build impactful digital experiences.
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full border-y border-gray-300 py-2 gap-4 md:gap-8 opacity-0 animate-fade-in-marquee x">
        <div className="relative flex flex-1 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee items-center pl-4 md:pl-10">
            {companies.map((company, index) => (
              <span
                key={index}
                className="mx-4 sm:mx-6 md:mx-10 text-xl sm:text-2xl md:text-3xl font-bold text-gray-400"
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
                className="mx-4 sm:mx-6 md:mx-10 text-xl sm:text-2xl md:text-3xl font-bold text-gray-400"
              >
                {company}
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0 pr-2 md:pr-8 text-right border-l border-gray-200 pl-4 md:pl-8">
          <div className="text-lg sm:text-xl md:text-2xl font-black text-black">
            <span className="text-xs sm:text-sm">★ ★ ★ ★ ☆ </span>4.9/5
          </div>
          <div className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-500 mt-1">
            Trusted by 100+ businesses
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative w-full md:h-[300vh] mb-10 opacity-0 animate-fade-in-reel"
      >
        <div className="md:sticky top-20 md:top-24 w-full h-auto md:h-[80vh] min-h-100  rounded-4xl md:rounded-3xl overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-neutral-800/40 via-black to-black opacity-80 pointer-events-none hidden md:block" />

          <div className="hidden md:flex absolute inset-0 items-center justify-center">
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

              const firstPassageShift = index === 0 ? "lg:-mt-24" : "";

              return (
                <div
                  key={index}
                  className={`absolute w-full max-w-7xl px-4 flex flex-col items-center justify-center text-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${positionClasses} ${firstPassageShift}`}
                >
                  {typeof content === "string" ? (
                    <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                      {content}
                    </h2>
                  ) : (
                    <div className="w-full flex items-center justify-center">
                      {content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="md:hidden relative w-full flex flex-col items-center justify-center text-center py-10 px-4 z-10">
            {/* Eyebrow Pill */}
            <div className="mb-6 bg-black rounded-2xl text-white font-bold tracking-normal p-3 px-5 w-fit mx-auto text-sm sm:text-base">
              We don&apos;t just build websites.
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">
              We craft immersive digital ecosystems designed to scale.
              Innovation meets execution.
            </h2>

            {/* Call to Action Button */}
            <div className="mt-8 sm:mt-10">
              <a
                href="#service"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-sm sm:text-base font-bold rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.1)]"
              >
                View Work
              </a>
            </div>
          </div>
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
