import React from "react";
import { FaCode, FaLink } from "react-icons/fa";

const Projects = () => {
  return (
    <div>
      <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">
        {"<"}Projects{" />"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col bg-white/5 rounded-xl overflow-hidden group">
          <div
            className="aspect-video bg-cover bg-center bg-[url('./assets/images/projectImg/lawyer-appointment-poster.jpeg')]"
            data-alt="Lawyer Appointment Booking System interface"
          />
          <div className="p-6 grow flex flex-col">
            <h3 className="text-white text-xl font-bold">
              Lawyer Appointment Booking System + AI
            </h3>
            <p className="text-white/70 text-sm mt-2 grow">
              A web application that allows users to book appointments with lawyers, built with React for the frontend and Node.js with Express.js for the backend. The system also integrates AI to provide personalized lawyer recommendations based on user preferences and case details.
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
            <div className="mt-6 flex justify-around items-center gap-4">
              <a
                className="text-white font-bold text-sm hover:text-blue-500 transition-colors"
                href="https://github.com/ddubeynitin/lawyer-appointment-booking-system" target="_blank"
              >
                {"<"}Code{"/>"}
              </a>
              <a
                className="text-white font-bold text-sm hover:text-blue-500 border border-white/30 rounded px-4 py-2 transition-colors"
                
              >
                <FaLink className="inline-block mr-1" />
                  Live Demo Soon..
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white/5 rounded-xl overflow-hidden group">
          <div
            className="aspect-video bg-cover bg-center bg-[url('./assets/images/projectImg/url-shortener-poster.png')]"
            data-alt="URL Shortener application interface"
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
            <div className="mt-6 flex justify-around items-center gap-4">
              <a
                className="text-white font-bold text-sm hover:text-blue-500 transition-colors"
                href="https://github.com/ddubeynitin/url-shortener.git" target="_blank"
              >
                {"<"}Code{"/>"}
              </a>
              <a
                className="text-white font-bold text-sm hover:text-blue-500 border border-white/30 rounded px-4 py-2 transition-colors"
                href="https://urly-short.vercel.app" target="_blank"
              >
                <FaLink className="inline-block mr-1" />
                  Live Demo
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
