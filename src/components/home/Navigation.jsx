import React, { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-50 border-b-2 border-b-gray-100 px-4 sm:px-10 py-4 relative z-50">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            src="/images/ftc_svg_logo.svg"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-md">
          <ul className="flex items-center gap-6 text-md sm:capitalize">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Strategy</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li className="hidden md:block">
              <a href="#">Sponsor Child</a>
            </li>
            <li className="hidden md:block">
              <button className="bg-sky-600/80 hover:bg-sky-700 text-white px-4 py-2 rounded-md transition text-xs">
                Donate
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-sky-600/80 transition duration-300 focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu - Smooth Slide from Right */}
      <div
        className={`md:hidden fixed top-[100px] right-0 w-full h-[calc(100vh-72px)] bg-gray-100 z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <ul className="flex flex-col items-center gap-6 text-md pt-10 uppercase">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Strategy</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li className="md:hidden">
            <a href="#">Sponsor Child</a>
          </li>
          <li className="md:hidden">
            <button className="bg-sky-600/80 hover:bg-sky-700 text-white px-4 py-2 rounded-md transition text-xs">
              Donate
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;