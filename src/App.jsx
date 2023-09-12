import React, { useRef , useEffect } from "react";
import { Navbar, Hero, Projects, Services, ContactMe } from "./components";


const App = () => {


  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main className="relative px-4">
      <Navbar
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <section ref={aboutRef}>
        <Hero />
      </section>
      <section ref={servicesRef} className="bg-slate-900">
        <Services/>
      </section>
      <section ref={projectsRef} className="bg-slate-900 mt-6">
        <Projects/>
      </section>
      <section ref={contactRef} className="bg-slate-900 mt-6">
        <ContactMe />
      </section>
    </main>
  );
};

export default App;
