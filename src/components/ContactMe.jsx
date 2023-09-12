import React from "react";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";
import copyright from "../assets/copyright.png";
import { contactOptions } from "../constants";

const ContactMe = () => {
  const contactViaEmail = () => {
    window.location.href = `mailto:${contactOptions.email}`;
  };
  const contactViaLinkedIn = () => {
    window.location.href = contactOptions.linkedIn;
  };
  return (
    <div className="flex flex-col justify-top items-center text-center max-container py-6 px-4 h-auto scroll-smooth ">
      <p className="text-18px-48px animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
        Get in Touch
      </p>
      <p>I'd love to hear from you.</p>
      <p>
        Got a project you would like me to work on? Or how about just a friendly
        chat?
      </p>
      <div className="flex flex-col md:flex-row gap-10 items-start mt-6">
        <div className="flex flex-row items-center  space-x-3">
          <button
            className="border border-slate-50 border-x-4 border-y-4 rounded-full w-[3rem] h-[3rem] p-1"
            onClick={contactViaEmail}
          >
            <img
              src={mail}
              alt="Linkedin Icon"
              className="w-full h-full object-cover"
            />
          </button>
          <p className=" cursor-pointer" onClick={contactViaEmail}>
            sandaruxd99@gmail.com
          </p>
        </div>
        <div className="flex flex-row items-center space-x-3">
        <button
          className="rounded-full w-[3rem] h-[3rem] p-1 bg-white"
          onClick={contactViaLinkedIn}
        >
          <img
            src={linkedin}
            alt="Linkedin Icon"
            className="w-full h-full object-cover"
          />
        </button>
        <p className=" cursor-pointer" onClick={contactViaEmail}>
          Sandaru Perera
        </p>
        </div>
        
      </div>
      <p className="flex flex-row text-[12px] font-thin mt-28">
        Copyright
        <span>
          <img
            src={copyright}
            alt="Copyright Icon"
            className="w-[14px] h-[14px]] object-cover"
          />
        </span>
        2023 Sandaru Perera, All Rights Reserved
      </p>
    </div>
  );
};

export default ContactMe;
