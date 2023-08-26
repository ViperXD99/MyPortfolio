import React from "react";
import profile from "../assets/profile.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import TypeWriterEffect from "./TypeWriterEffect";


const Hero = () => {
  const handleImageClick = () => {
    // Navigate to the desired web page
    window.location.href = "https://github.com/ViperXD99";
  };
  const handleImageClick2 = () => {
    // Navigate to the desired web page
    window.location.href =
      "https://www.linkedin.com/in/sandaru-perera-277668258/";
  };
  return (
    <div className="flex flex-col items-center md:flex-row px-clamp-padding mt-[4rem] md:mt-[8rem]  scroll-smooth ">
      <div className="flex flex-col md:min-w-[60rem]">
        <p className=" text-fluid-2 font-medium">Hello, I'm</p>
        <h1 className=" text-fluid-2 font-medium transition ease-in-out delay-150 hover:md:scale-125 duration-300 ... cursor-pointer">
          Sandaru Perera
        </h1>
        <TypeWriterEffect/>
        <div className="flex flex-row mt-line-margin gap-4">
          <button className="p-3 border border-black rounded-[40px]  transition ease-in-out delay-150 hover:md:scale-110 duration-300 ...">
            Download CV
          </button>
          <button className="p-3 border border-black rounded-[40px]  font-semibold bg-black text-white transition ease-in-out delay-150 hover:md:scale-110 duration-300 ...">
            Contact Info
          </button>
        </div>
        <div className="flex flex-row mt-2 gap-4">
          <div className=" rounded-full w-[2rem] h-[2rem] overflow-hidden object-cover cursor-pointer">
            <img
              src={linkedin}
              alt="Linkedin Icon"
              className="w-full h-full object-cover"
              onClick={handleImageClick2}
            />
          </div>
          <div className=" rounded-full w-[2rem] h-[2rem] overflow-hidden object-cover cursor-pointer">
            <img
              src={github}
              alt="Github Icon"
              className="w-full h-full object-cover"
              onClick={handleImageClick}
            />
          </div>
        </div>
      </div>
      <div className=" rounded-full w-[30rem] h-[30rem] overflow-hidden object-cover ml-navbar-item-margin">
        <img
          src={profile}
          alt="Sandaru"
          className="w-full h-full object-cover"
        />
      </div>
      
    </div>
  );
};

export default Hero;
