import React from "react";
import {FaMailchimp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="border-t border-solid border-white/10 mt-16"
      id="contact"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8">
        <p className="text-white/50 text-sm">
          © {new Date().getFullYear()} Nitin Dubey. All rights reserved.
        </p>
        <div className="flex items-center gap-4 mr-2 bg-gray-600 p-2 rounded-lg">
          
          <a
            className="text-white hover:text-blue-400 transition-colors"
            href="#"
          >
            <span className="text-md text-red-500">
               @{" "}
            </span>
            <span className="text-md">
               ddubeynitin30@gmail.com
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
