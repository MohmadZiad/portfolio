import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";
import { Howl } from "howler";
// @ts-ignore
import annyang from "annyang";
import { useGesture } from "@use-gesture/react";
import Particles from "react-tsparticles";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Hero.css";

// ====== Sounds ======
const clickSound = new Howl({ src: ["/click.mp3"] });

interface HeroProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<HeroProps> = ({ darkMode, setDarkMode }) => {
  const [greeting, setGreeting] = useState("");
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState<boolean>(false);

  // ====== Greeting Based on Time and Location ======
  useEffect(() => {
    const hour = new Date().getHours();
    const baseGreeting =
      hour < 12
        ? "Good morning"
        : hour < 18
        ? "Good afternoon"
        : "Good evening";

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setGreeting(
          `${baseGreeting}, I'm Mohammad Ali from ${data.country_name}`
        );
      })
      .catch(() => {
        setGreeting(`${baseGreeting}, I'm Mohammad Ali`);
      });
  }, []);

  // ====== Apply Dark Mode Globally ======
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // ====== Voice Commands ======
  useEffect(() => {
    if (annyang) {
      annyang.addCommands({
        "scroll down": () => scrollToSection("projects"),
        "toggle theme": () => setDarkMode((prev) => !prev),
        "play sound": () => clickSound.play(),
      });
      annyang.start();
    }
  }, [setDarkMode]);

  // ====== Scroll Listener for Glass Navbar ======
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll(); // initial
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ====== Scrollspy Active Link ======
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        // Fix TypeScript error by asserting HTMLElement
        const top = (section as HTMLElement).offsetTop - 100;
        if (window.scrollY >= top) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ====== Scroll Helper ======
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // ====== Image Drag ======
  const imgRef = useRef<HTMLImageElement>(null);
  useGesture(
    {
      onDrag: ({ offset: [dx, dy] }) => {
        if (imgRef.current) {
          imgRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
        }
      },
    },
    { target: imgRef }
  );

  // ====== Custom Cursor ======
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 60 },
            size: { value: 2 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.3 },
            links: { enable: true, opacity: 0.1, distance: 150 },
          },
          detectRetina: true,
        }}
      />

      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />

      <motion.div
        className={`hero-root ${darkMode ? "dark" : ""}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <header className={`hero-header ${scrolled ? "scrolled" : ""}`}>
          <div className="logo">MOHAMMAD</div>
          <nav>
            {["services", "projects", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
          </nav>
        </header>

        <section className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="greeting">{greeting}</p>
            <h1 className="title">
              <Typewriter
                words={["Full-Stack Developer", "UI/UX Designer", "Freelancer"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </h1>
            <p className="subtitle">
              I turn ideas into fast, scalable, and elegant web solutions.
              MERAKI Academy graduate skilled in JavaScript, React.js, Node.js,
              MongoDB, and PostgreSQL.
            </p>
            <motion.button
              onClick={() => {
                clickSound.play();
                scrollToSection("projects");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta"
            >
              View my work
            </motion.button>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/mohmadali/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                href="https://github.com/MohmadZiad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
            <div className="skills-marquee">
              <span>React.js</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>Node.js</span>
              <span>Framer Motion</span>
            </div>
          </motion.div>

          <div className="hero-img-wrapper">
            <Tilt glareEnable glareMaxOpacity={0.2} scale={1.02}>
              <motion.img
                ref={imgRef}
                src="/photo-transparent.png"
                alt="Mohammad Ali"
                className="profile-img"
                draggable={false}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </Tilt>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Hero;
