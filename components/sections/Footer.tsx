const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a0a0a] dark:bg-white text-white dark:text-black py-2 px-5 md:px-10 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-3xl font-black tracking-tighter">
          Pixor
          <span className="text-gray-500 text-lg font-normal align-top ml-1">
            ®
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium text-gray-400 dark:text-gray-800">
          <a
            href="#home"
            className="hover:text-white dark:hover:text-gray-700 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:text-white dark:hover:text-gray-700 transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="hover:text-white dark:hover:text-gray-700 transition-colors duration-300"
          >
            Work
          </a>
          <a
            href="#contact"
            className="hover:text-white dark:hover:text-gray-700 transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        <div className="text-xs md:text-sm text-gray-600 font-medium">
          &copy; {currentYear} Pixor. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
