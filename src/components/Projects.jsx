import React, { useEffect } from "react";
import { projects } from "../constants";
import AOS from "aos";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });
  return (
    <div className="max-container min-h-[60vh] flex box-border flex-col items-center justify-top md:py-14 + px-8 py-6 ">
      <p className="mt-4 mb-8 text-18px-48px font-medium" data-aos="fade-up">
        Latest 
        <span> </span>
        <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">Projects</span>
      </p>
      <div
        className="  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10 "
        data-aos="fade-up"
      >
        {projects.map((project) => (
          <div
            key={project.key}
            className=" flex flex-1 flex-col border border-gray-700 shadow-md shadow-slate-600 mt-4 rounded-xl overflow-hidden object-cover transition ease-in-out delay-150 hover:md:scale-110 hover:shadow-sky-500 duration-300 ... cursor-pointer"
          >
            <img
              className=" w-full h-auto object-fill "
              src={project.image}
            />
            <div className="p-4">
              <h1 className=" text-lg font-semibold text-slate-500 hover:text-sky-500">{project.title}</h1>
              <h1 className="py-4 text-sm text-gray-500">{project.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
