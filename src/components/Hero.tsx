import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";
import { Howl } from "howler";
// @ts-ignore
import annyang from "annyang";
import { useGesture } from "@use-gesture/react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Hero.css";

const clickSound = new Howl({ src: ["/click.mp3"] });

const Hero = () => {
  // Theme Toggle
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  // Voice Commands
  useEffect(() => {
    if (annyang) {
      annyang.addCommands({
        "scroll down": () => scrollToSection("projects"),
        "toggle theme": () => setDarkMode((prev) => !prev),
        "play sound": () => clickSound.play(),
      });
      annyang.start();
    }
  }, []);

  // Time-based Greeting
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  // Drag Gesture for image
  const imgRef = useRef(null);
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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Custom Cursor
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
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-root"
      >
        <header>
          <div className="logo" aria-label="Logo">
            MOHAMMAD
          </div>
          <nav>
            {["services", "projects", "contact"].map((id) => (
              <a key={id} href={`#${id}`}>
                {id[0].toUpperCase() + id.slice(1)}
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

        <section>
          <motion.div
            className="text-content"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="greeting">{greeting}, I'm Mohammad Ali</p>
            <h1 className="title">
              <Typewriter
                words={["Full-Stack Developer", "UI/UX Designer", "Freelancer"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
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
              {["linkedin", "github", "twitter", "youtube"].map((platform) => (
                <a
                  key={platform}
                  href={
                    platform === "linkedin"
                      ? "https://linkedin.com/in/mohmadali"
                      : platform === "github"
                      ? "https://github.com/MohmadZiad"
                      : platform === "twitter"
                      ? "https://twitter.com"
                      : "https://youtube.com"
                  }
                  aria-label={platform}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className={`fab fa-${platform}`} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Animated background blob */}
          <motion.div
            className="blob"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />

          <Tilt
            glareEnable
            glareMaxOpacity={0.2}
            scale={1.02}
            transitionSpeed={400}
          >
            <motion.img
              ref={imgRef}
              src="/photo.jpg"
              alt="Photo of Mohammad Ali"
              className="profile-img"
              whileHover={{ scale: 1.02 }}
              draggable={false}
            />
          </Tilt>
        </section>
      </motion.div>
    </>
  );
};

export default Hero;
