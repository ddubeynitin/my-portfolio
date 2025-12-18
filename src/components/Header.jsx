import { React, useState } from "react";
import {
  FaCode,
  FaFile,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaList,
  FaUser,
  FaPhone,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-solid border-white/10 bg-background-dark/80 px-4 sm:px-10 py-3 backdrop-blur-sm">
      <div className="flex justify-around items-center">
        <div className="flex items-center gap-4 text-white">
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] animate-pulse text-blue-500 cursor-pointer">
            {"<"}Nitin Dubey{" />"}
          </h2>
        </div>
        <div className="hidden md:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a
              className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
              href="#"
            >
              Home( )
            </a>
            <a
              className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
              href="#about"
            >
              About( )
            </a>
            <a
              className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
              href="#skills"
            >
              Skills( )
            </a>
            <a
              className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
              href="#projects"
            >
              Projects( )
            </a>
            <a
              className="text-white/80 hover:text-white transition-colors text-sm font-medium leading-normal"
              href="#contact"
            >
              Contact( )
            </a>
          </div>
          <div className="flex gap-2">
            <a
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-white/10 hover:bg-white/20 text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 transition-colors"
              href="https://github.com/ddubeynitin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-xl">
                <FaGithub />
              </span>
            </a>
            <a
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-white/10 hover:bg-white/20 text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 transition-colors"
              href="https://www.linkedin.com/in/nitin-dubey-1a862a282"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-xl">
                <FaLinkedin className="text-blue-500" />
              </span>
            </a>
            <a
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-white/10 hover:bg-white/20 text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 transition-colors"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-xl">
                <FaInstagram className="text-pink-700" />
              </span>
            </a>
          </div>
        </div>
        <button
          className="md:hidden flex items-center justify-center rounded-lg h-10  p-2 bg-white/10 text-blue-500"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <FaList />
        </button>
      </div>
      <div>
        {isMenuOpen && (
          <div className="md:hidden flex w-full text-white font-bold border border-white/10 rounded-lg p-4 space-y-4 mt-2">
            <ul>
              <li>
                <a
                  href="#home"
                  className="flex justify-center items-center gap-2 p-2 hover:text-white hover:bg-blue-500 hover:rounded-md"
                >
                  <FaHome /> Home( )
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="flex justify-center items-center gap-2 p-2 hover:text-white hover:bg-blue-500 hover:rounded-md"
                >
                  <FaUser /> About( )
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="flex justify-center items-center gap-2 p-2 hover:text-white hover:bg-blue-500 hover:rounded-md"
                >
                  <FaCode /> Skills( )
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="flex justify-center items-center gap-2 p-2 hover:text-white hover:bg-blue-500 hover:rounded-md"
                >
                  <FaFile /> Projects( )
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex justify-center items-center gap-2 p-2 hover:text-white hover:bg-blue-500 hover:rounded-md"
                >
                  <FaPhone /> Contact( )
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
