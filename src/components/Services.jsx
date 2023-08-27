import React ,{useEffect} from "react";
import { services } from "../constants";
import AOS from "aos";

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
      });
  return (
    <section
      id="services"
      className="max-container flex box-border flex-col items-center justify-top md:py-14 py-6 mb-6 md:mb-0  bg-slate-900 md:h-[50vh]  "
    >
      <div className="text-18px-48px font-black">
        <p data-aos="fade-up">
          My
          <span> </span>
          <span className=" animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">Services</span>
        </p>
      </div>
      <div
        className="  grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10 mt:2 md:mt-10 + px-6 "
        data-aos="fade-up"
      >
        {services.map((service) => (
          <div
            key={service.key}
            className=" flex flex-1 mx-6 md:mx-0 flex-col p-4 border border-gray-500 bg-slate-900 mt-4 rounded-xl transition ease-in-out delay-150 hover:md:scale-110 hover:border-sky-500 duration-300 ... cursor-pointer "
          >
            <p className="text-2xl animate-text bg-gradient-to-r from-slate-600 via-slate-400 to-sky-500  bg-clip-text text-transparent font-black text-center">{service.title}</p>
            <p className="text-lg text-gray-500 mt-4 px-4 text-justify">{service.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
