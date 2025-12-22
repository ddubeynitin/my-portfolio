import React from "react";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/Nitin_Dubey_Resume.pdf";

const About = () => {
  return (
    <div>
      <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">
        {"<"}About Me{" />"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
        <div className="md:col-span-2 w-full @container">
          <div className="w-full gap-1 overflow-hidden bg-background-dark @[480px]:gap-2 aspect-square rounded-xl flex">
            <div
              className="w-full bg-cover scale-150 bg-no-repeat aspect-auto rounded-xl flex-1 bg-[url('./assets/my-png-img.png')] "
              data-alt="A professional headshot of Nitin Dubey"
            />
            
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-white/80 text-base font-normal leading-relaxed">
            Hello! I'm a full-stack developer with a passion for building
            beautiful and functional web applications. With a background in
            computer science and a keen eye for design, I specialize in bringing
            ideas to life from concept to deployment. I thrive on solving
            complex problems and continuously learning new technologies to push
            the boundaries of what's possible on the web.
          </p>
          <p className="text-white/80 text-base font-normal leading-relaxed mt-4">
            Whether it's crafting seamless user interfaces with React or
            building robust backend APIs with Node.js, my goal is to create
            software that is not only efficient and scalable but also a delight
            to use.
          </p>

          <a href={resume} download target="_blank" rel="noopener noreferrer">
            <button className="w-50 h-15 text-white text-lg border-2  border-yellow-500 font-bold p-2 rounded-full flex gap-2 justify-center items-center mt-5 transition hover:bg-yellow-500 hover:border-0 hover:text-black">
              <FaDownload/> Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;