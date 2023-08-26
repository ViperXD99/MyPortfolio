import React, { useRef , useEffect } from "react";
import { Navbar, Hero, About } from "./components";


const App = () => {


  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main className="m-4 relative">
      <Navbar
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <section className="">
        <Hero />
      </section>
      <section ref={aboutRef}>
       <About/>
      </section>
      <section ref={experienceRef} className="py-20">
        <p>experienceRef</p>
      </section>
      <section ref={projectsRef} className="py-20">
        <p>projectsRef</p>
      </section>
      <section ref={contactRef} className="py-20">
        <p>contactRef</p>
      </section>
    </main>
  );
};

export default App;
