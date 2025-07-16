import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true, offset: 80 });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    // أضفت هنا class "dark" ديناميكيًا حسب حالة الـ darkMode
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <Hero darkMode={darkMode} setDarkMode={setDarkMode} />

      <Projects darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
