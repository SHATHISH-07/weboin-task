"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ServiceSection = () => {
  const heroServices = [
    {
      id: "01",
      title: "UI/UX Design",
      desc: "Crafting intuitive and engaging user interfaces.",
      image: "/servicesImg/uiux.jpg",
    },
    {
      id: "02",
      title: "Web Design",
      desc: "Building robust, scalable digital solutions.",
      image: "/servicesImg/webdesign.jpg",
    },
    {
      id: "03",
      title: "Branding",
      desc: "Forging memorable and lasting brand identities.",
      image: "/servicesImg/branding.jpg",
    },
    {
      id: "04",
      title: "Marketing",
      desc: "Driving unprecedented growth and brand reach.",
      image: "/servicesImg/digitalmarketing.jpg",
    },
  ];

  const [activeService, setActiveService] = useState(0);

  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [showTitle, setShowTitle] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === titleRef.current && entry.isIntersecting) {
            setShowTitle(true);
          }
          if (entry.target === cardRef.current && entry.isIntersecting) {
            setShowCards(true);
          }
          if (entry.target === textRef.current && entry.isIntersecting) {
            setShowText(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (cardRef.current) observer.observe(cardRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  const sentence =
    "Ready to transform your business? Contact us for more information about our services and how we can help you achieve your goals.";

  const words = sentence.split(" ");

  return (
    <section id="services" className="w-full p-5 flex flex-col gap-8 md:gap-12">
      <div
        ref={titleRef}
        className={`transition-all duration-1000 ${
          showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h3 className="text-gray-500 uppercase tracking-widest text-xs md:text-sm font-bold mb-2">
          Our Services
        </h3>

        <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
          What we provide.
        </h2>
      </div>

      <div
        ref={cardRef}
        className={`w-full h-150 md:h-125 flex flex-col md:flex-row rounded-3xl shadow-2xl bg-black overflow-hidden transition-all duration-1000 ${
          showCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        {heroServices.map((service, index) => {
          const isActive = activeService === index;

          return (
            <div
              key={service.id}
              onClick={() => setActiveService(index)}
              onMouseEnter={() => setActiveService(index)}
              className={`relative flex flex-col justify-end p-6 md:p-8 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-gray-800 last:border-none group ${
                isActive ? "md:flex-3 flex-3" : "md:flex-1 flex-1"
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className={`object-cover transition-transform duration-1000 ease-out ${
                  isActive
                    ? "scale-105"
                    : "scale-100 grayscale group-hover:grayscale-0"
                }`}
              />

              <div
                className={`absolute inset-0 bg-linear-to-t transition-all duration-700 ${
                  isActive
                    ? "from-black/90 via-black/40 to-transparent"
                    : "from-black/90 via-black/70 to-black/30"
                }`}
              />

              <div
                className={`absolute top-6 left-6 font-mono text-sm md:text-base z-10 transition-colors duration-500 ${
                  isActive ? "text-white" : "text-gray-400"
                }`}
              >
                {service.id}
              </div>

              <div className="relative z-10 w-full flex flex-col gap-2">
                <h2
                  className={`font-black text-white whitespace-nowrap transition-all duration-700 ${
                    isActive
                      ? "text-3xl md:text-5xl lg:text-6xl"
                      : "text-xl md:text-2xl"
                  }`}
                >
                  {service.title}
                </h2>

                <div
                  className={`transition-all duration-700 overflow-hidden ${
                    isActive
                      ? "max-h-24 opacity-100 mt-2"
                      : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <p className="text-gray-300 text-sm md:text-base max-w-xs whitespace-normal">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* WORD BY WORD TEXT */}
      <div
        ref={textRef}
        className="mb-10 flex flex-col items-center justify-center px-4"
      >
        <div className="max-w-5xl text-center">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {words.map((word, i) => (
              <span
                key={i}
                className={`inline-block mr-2 transition-all duration-500 ${
                  showText
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {word}
              </span>
            ))}

            <span className="ml-2">
              <a href="#contact" className="text-primary underline">
                Get in touch
              </a>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
