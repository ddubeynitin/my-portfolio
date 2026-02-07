import React from "react";
import { FaNewspaper } from "react-icons/fa";
import resume from "../assets/Nitin_Dubey_Resume_updated.pdf";
import DrawOutlineButton from "./Button/DrawOutlineButton";
import { GrDocumentUser } from "react-icons/gr";


const About = () => {

  return (
    <div  >
      <h2 className="text-white font-barlow text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">
        {"<"}About Me{" />"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
        <div className="md:col-span-2 w-full @container">
          <div className="w-full gap-1 overflow-hidden bg-background-dark @[480px]:gap-2 aspect-square rounded-xl flex">
            <div
              className="w-full saturate-120 drop-shadow-2xl drop-shadow-black/50 bg-cover scale-100 bg-no-repeat aspect-auto rounded-xl flex-1 mask-b-from-70% mask-r-from-90% mask-l-from-90% mask-b-to-100% bg-[url('./assets/profile-img2.png')] "
              data-alt="A professional headshot of Nitin Dubey"
            />``
            
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col justify-center items-center w-full h-full">
          <p className="text-white/80 text-base font-barlow text-justify leading-relaxed">
            Hello! I'm a <span className="font-bold text-orange-500">Full-Stack Developer</span > with a passion for building
            beautiful and functional <span className="font-bold text-emerald-500">web applications</span>. With a background in
            computer science and a keen eye for design, I specialize in bringing
            ideas to life from concept to deployment. I thrive on solving
            complex problems and continuously learning new technologies to push
            the boundaries of what's possible on the web.
          </p>
          <p className="text-white/80 text-base font-barlow text-justify leading-relaxed mt-4">
            Whether it's crafting seamless user interfaces with <span className="font-bold text-sky-500">React</span> or
            building robust backend <span className="font-bold text-rose-500">APIs</span> with <span className="font-bold text-yellow-500">Node.js</span>, my goal is to create
            software that is not only efficient and scalable but also a delight
            to use.
          </p>

          <a href={resume} download target="_blank" rel="noopener noreferrer">
            <DrawOutlineButton> Download Resume <GrDocumentUser />
  </DrawOutlineButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;