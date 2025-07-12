import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Hero = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#111827",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ===== HEADER ===== */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 8%",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          background: "#ffffff",
          zIndex: 100,
        }}
      >
        <div
          style={{
            fontSize: "2rem",
            fontWeight: 900,
            color: "#10b981",
            letterSpacing: 1,
          }}
        >
          MOHAMMAD
        </div>
        <nav style={{ display: "flex", gap: "2.5rem", fontWeight: 500 }}>
          <a
            href="#services"
            style={{ color: "#111827", textDecoration: "none" }}
          >
            Services
          </a>
          <a
            href="#projects"
            style={{ color: "#111827", textDecoration: "none" }}
          >
            Projects
          </a>
          <a
            href="#contact"
            style={{ color: "#111827", textDecoration: "none" }}
          >
            Contact
          </a>
        </nav>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          padding: "4rem 8%",
          gap: "2rem",
        }}
      >
        {/* === LEFT TEXT === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p style={{ color: "#6b7280", fontSize: "1.2rem" }}>
            Hello, I'm Mohammad Ali
          </p>
          <h1
            style={{
              fontSize: "3.2rem",
              fontWeight: 800,
              margin: "1rem 0",
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            Full-Stack Developer
          </h1>
          <p
            style={{
              color: "#374151",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: 520,
            }}
          >
            I'm a web developer with 6 months of hands-on experience from MERAKI
            Academy. Skilled in JavaScript (ES6+), React.js, Node.js, MongoDB,
            and PostgreSQL.
          </p>

          <motion.button
            onClick={() => {
              const section = document.getElementById("projects");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              padding: "0.75rem 2rem",
              background: "#10b981",
              border: "none",
              borderRadius: 10,
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.1rem",
              marginTop: "2rem",
              boxShadow: "0 4px 14px rgba(16, 185, 129, 0.3)",
              cursor: "pointer",
            }}
          >
            View my work
          </motion.button>

          {/* === Social Icons === */}
          <motion.div
            style={{ display: "flex", gap: "1.2rem", marginTop: "2rem" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              ["linkedin", "https://www.linkedin.com/in/mohmadali/"],
              ["github", "https://github.com/MohmadZiad"],
              ["twitter", "https://twitter.com"],
              ["youtube", "https://youtube.com"],
            ].map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#111827", fontSize: "1.8rem" }}
              >
                <i className={`fab fa-${platform}`}></i>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* === RIGHT IMAGE === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/photo.jpg"
            alt="Mohammad Ali"
            style={{ width: 360, height: "auto" }}
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
