"use client";

import { useState, useEffect } from "react";

const NavSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <nav className="sticky top-0 w-full z-50 flex items-center justify-between p-4 md:p-3 md:px-8 backdrop-blur-md bg-white/0 opacity-0 animate-fade-in-nav">
        <h1 className="relative z-50 text-2xl md:text-3xl font-extrabold transition-colors duration-300 ease-in-out">
          <a href="#home">Pixor</a>
        </h1>

        <button
          className={`relative z-50 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full shadow-md text-black transition-transform duration-700 ease-in-out border-none cursor-pointer focus:outline-none origin-center bg-white ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </nav>

      <div
        className={`fixed top-0 left-0 z-40 flex h-[100dvh] w-full flex-col items-center justify-center bg-[#f3f0f0] transition-transform duration-500 ease-in-out overscroll-none touch-none ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="p-0 text-center list-none">
          <li className="my-6">
            <a
              href="#home"
              onClick={toggleMenu}
              className="text-black text-4xl font-bold transition-colors duration-300 md:text-6xl hover:text-gray-600"
            >
              Home
            </a>
          </li>
          <li className="my-6">
            <a
              href="#services"
              onClick={toggleMenu}
              className="text-black text-3xl font-bold transition-colors duration-300 md:text-6xl hover:text-gray-600"
            >
              Services
            </a>
          </li>
          <li className="my-6">
            <a
              href="#portfolio"
              onClick={toggleMenu}
              className="text-black text-3xl font-bold transition-colors duration-300 md:text-6xl hover:text-gray-600"
            >
              Work
            </a>
          </li>
          <li className="my-6">
            <a
              href="#contact"
              onClick={toggleMenu}
              className="text-black text-3xl font-bold transition-colors duration-300 md:text-6xl hover:text-gray-600"
            >
              Contact
            </a>
          </li>
        </ul>
        <span className="text-black font-medium mt-8">&copy; {year} Pixor</span>
      </div>
    </>
  );
};

export default NavSection;
