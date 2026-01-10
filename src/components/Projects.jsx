import React from "react";
import { FaCode } from "react-icons/fa";

const Projects = () => {
  return (
    <div>
      <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">
        {"<"}Projects{" />"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col bg-white/5 rounded-xl overflow-hidden group">
          <div
            className="aspect-video bg-cover bg-center bg-[url('./assets/url-shortener-poster.png')]"
            data-alt="Real-time chat application interface"
          />
          <div className="p-6 grow flex flex-col">
            <h3 className="text-white text-xl font-bold">
              URL Shortener
            </h3>
            <p className="text-white/70 text-sm mt-2 grow">
              A URL shortening service that allows users to create and manage
              shortened links, built with React for the frontend and Node.js with
              Express.js for the backend.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs font-bold text-white text-shadow-2xs text-shadow-black bg-cyan-600 px-2 py-1 rounded-full">
                React
              </span>
              <span className="text-xs font-bold text-white text-shadow-2xs text-shadow-black bg-purple-600 px-2 py-1 rounded-full">
                Tailwind Css
              </span>
              <span className="text-xs font-bold text-white text-shadow-2xs text-shadow-black bg-yellow-600 px-2 py-1 rounded-full">
                Express.js
              </span>
              <span className="text-xs font-bold text-white text-shadow-2xs text-shadow-black bg-green-600 px-2 py-1 rounded-full">
                Node.js
              </span>
              <span className="text-xs font-bold text-white text-shadow-2xs text-shadow-black bg-emerald-600 px-2 py-1 rounded-full">
                MongoDB
              </span>
            </div>
            <div className="mt-6">
              <a
                className="text-white font-bold text-sm hover:text-blue-500 transition-colors"
                href="https://github.com/ddubeynitin/url-shortener.git" target="_blank"
              >
                {"<"}View{"/>"}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white/5 rounded-xl overflow-hidden group">
          <div
            className="aspect-video bg-cover bg-center bg-[url('./assets/tic-tac-toe-img.jpg')]"
            data-alt="Tic-Tac-Toe game board"
          />
          <div className="p-6 grow flex flex-col">
            <h3 className="text-white text-xl font-bold">
              Tic-Tac-Toe
            </h3>
            <p className="text-white/70 text-sm mt-2 grow">
              A classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript,
              featuring a responsive design and an intuitive user interface for
              an engaging gaming experience.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs font-bold text-white bg-orange-600 text-shadow-2xs text-shadow-black px-2 py-1 rounded-full">
                HTML
              </span>
              <span className="text-xs font-bold text-white bg-blue-600 text-shadow-2xs text-shadow-black px-2 py-1 rounded-full">
                CSS
              </span>
              <span className="text-xs font-bold text-white bg-yellow-500 text-shadow-2xs text-shadow-black px-2 py-1 rounded-full">
                JavaScript
              </span>
            </div>
            <div className="mt-6">
              <a
                className="text-white font-bold text-sm hover:text-blue-500 transition-colors "
                href="https://github.com/ddubeynitin/Tic-Tac-Toe.git" target="_blank"
              >
                {"<"}View{"/>"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
