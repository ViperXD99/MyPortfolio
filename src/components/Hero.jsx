import React, { useEffect } from "react";
import { about } from "../constants";
import AOS from "aos";
import profile from "../assets/profile.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import TypeWriterEffect from "./TypeWriterEffect";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });
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
    <div className="flex flex-col justify-center items-center  md:flex-row  max-container h-screen  scroll-smooth  ">
      <div className="flex-grow order-2 md:order-1 text-center md:text-left md:min-w-[35rem]">
        <p className=" text-fluid-2 font-medium " data-aos="fade-right">
          Hello, I'm
        </p>
        <h1
          className=" text-fluid-2 font-medium transition ease-in-out delay-150 hover:md:scale-125 duration-300 ... cursor-pointer "
          data-aos="fade-right"
        >
          Sandaru Perera
        </h1>
        <TypeWriterEffect />
        <div className="flex flex-row mt-line-margin gap-4 justify-center md:justify-start ">
          <button
            className="p-3 border border-slate-100 rounded-[40px] hover:text-sky-500 hover:border-sky-500"
            data-aos="fade-right"
          >
            Download CV
          </button>
          <button
            className="p-3 border border-black rounded-[40px]  font-semibold bg-black text-white hover:text-sky-500"
            data-aos="fade-left"
          >
            Contact Info
          </button>
        </div>
        <div className="flex flex-row mt-line-margin gap-4 justify-center md:justify-start + ml-4">
          <div
            className=" rounded-full w-[2rem] h-[2rem] overflow-hidden object-cover cursor-pointer"
            data-aos="fade-up"
          >
            <img
              src={linkedin}
              alt="Linkedin Icon"
              className="w-full h-full object-cover"
              onClick={handleImageClick2}
            />
          </div>
          <div
            className=" rounded-full w-[2rem] h-[2rem] overflow-hidden object-cover cursor-pointer"
            data-aos="fade-up"
          >
            <img
              src={github}
              alt="Github Icon"
              className="w-full h-full object-cover"
              onClick={handleImageClick}
            />
          </div>
        </div>
        <div className="mt-10 w-text-box" data-aos="fade-up">
          <p>{about.description}</p>
        </div>
      </div>

      <div
        className=" rounded-full w-[10rem] h-[10rem] md:w-pro-pic-width md:h-pro-pic-height overflow-hidden object-cover ml-navbar-item-margin md:mr-10 flex-shrink order-1 md:order-2"
        data-aos="fade-left"
      >
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
