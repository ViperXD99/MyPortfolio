import React,{useEffect} from "react";
import { about } from "../constants";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const About = () => {
    useEffect(()=>{
        AOS.init({duration:1200})
      })
  return (
    <div className="flex items-center justify-center bg-cover max-w-screen-xl mx-auto p-2 mt-4">
      <div className="flex flex-col " data-aos="fade-up">
        <h1 className=" text-[#263238] font-bold text-xl">About Me</h1>
        <p className=" mt-2">{about.description}</p>
      </div>
    </div>
  );
};

export default About;
