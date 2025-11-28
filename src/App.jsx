import { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Contact from "./components/Contact/Contact.jsx";
import styles from "./styles/App.module.css";

const SECTION_IDS = ["hero", "about", "skills", "projects", "experience", "contact"];

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY;
    let currentId = "hero";

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const offsetTop = el.offsetTop;
        if (scrollPosition >= offsetTop - 120) {
          currentId = id;
        }
      }
    });

    setActiveSection(currentId);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveSection);
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [updateActiveSection]);

  return (
    <div className={styles.app}>
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      <main>
        <section id="hero" className={styles.section}>
          <Hero onCtaClick={() => handleNavClick("projects")} />
        </section>
        <section id="about" className={styles.section}>
          <About />
        </section>
        <section id="skills" className={styles.section}>
          <Skills />
        </section>
        <section id="projects" className={styles.section}>
          <Projects />
        </section>
        <section id="experience" className={styles.section}>
          <Experience />
        </section>
        <section id="contact" className={styles.section}>
          <Contact />
        </section>
      </main>
      <footer className={styles.footer}>
        <span>© John Doe. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;


