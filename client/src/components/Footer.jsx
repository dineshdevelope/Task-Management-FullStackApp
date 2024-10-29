import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white p-4 flex flex-col sm:flex-row justify-between items-center mt-5">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>

        <a
          href="https://github.com/dineshdevelope/Task-Management-App"
          target="_blank"
          className="text-sm font-semibold text-pink-400 hover:text-pink-300 mt-2 sm:mt-0 "
        >
          Designed and developed by Dinesh S 💖
        </a>
      </footer>
    </div>
  );
};

export default Footer;
