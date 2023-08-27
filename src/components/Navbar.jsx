import React, { useRef } from "react";

const Navbar = ({ aboutRef, servicesRef, projectsRef, contactRef }) => {
  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="fixed top-0 left-0 right-0 bg-slate-900">
      <div className=" flex flex-row  text-18px-32px  items-center max-container">
        <h1 className="font-medium md:mr-10 sticky left-4 whitespace-nowrap text-sky-500">
          Sandaru Perera
        </h1>
        <nav className="md:ml-32 lg:ml-auto invisible lg:visible whitespace-nowrap ">
          {[
            ["About", aboutRef],
            ["Services", servicesRef],
            ["Projects", projectsRef],
            ["Contact", contactRef],
          ].map(([title, ref]) => (
            <button
              key={title}
              onClick={() => scrollToRef(ref)}
              className=" text-[18px] rounded-lg mx-navbar-item-margin font-medium hover:text-sky-500 text-center p-4"
            >
              {title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
