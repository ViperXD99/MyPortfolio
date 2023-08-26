import React,{useEffect} from "react";
import { about } from "../constants";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const About = () => {
  //AOS used for card fadeup effect check their site for more details
    useEffect(()=>{
        AOS.init({duration:1200})
      })
  return (
    <div className="flex items-center justify-center bg-cover px-clamp-padding mx-auto p-2 mt-4">
      <div className="flex flex-col " data-aos="fade-up">
        <p className=" mt-2">{about.description}</p>
      </div>
    </div>
  );
};

export default About;
