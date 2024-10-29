import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="bg-blue-600 text-white p-4 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">Task Management App</h1>
        <nav>
          <Link to={"/"}>
            <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded mr-4 hover:bg-gray-200">
              Home
            </button>
          </Link>
          <Link to={"/read"}>
            <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-200">
              My Task
            </button>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
