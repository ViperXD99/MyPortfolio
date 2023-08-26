import React, { useRef } from "react";

const Navbar = ({ aboutRef, experienceRef, projectsRef, contactRef }) => {

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="fixed top-0 left-0 right-0 flex flex-row py-4 backdrop-blur-sm text-18px-32px px-clamp-padding">
      <h1 className="font-medium md:mr-10 sticky left-4 whitespace-nowrap ">
        Sandaru Perera
      </h1>
      <nav className="md:ml-32 lg:ml-auto invisible lg:visible whitespace-nowrap ">
        {[
          ["About", aboutRef],
          ["Experience", experienceRef],
          ["Projects", projectsRef],
          ["Contact", contactRef],
        ].map(([title, ref]) => (
          <button
            key={title}
            onClick={() => scrollToRef(ref)}
            className="rounded-lg mx-navbar-item-margin text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 text-center"
          >
            {title}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
