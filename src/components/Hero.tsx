import React from "react";

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
            style={{
              color: "#111827",
              textDecoration: "none",
              transition: "0.2s",
            }}
          >
            Services
          </a>
          <a
            href="#projects"
            style={{
              color: "#111827",
              textDecoration: "none",
              transition: "0.2s",
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            style={{
              color: "#111827",
              textDecoration: "none",
              transition: "0.2s",
            }}
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
        {/* === LEFT CONTENT === */}
        <div>
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
            I'm a web developer with 6 months of hands-on experience in
            full-stack development from MERAKI Academy. Skilled in JavaScript
            (ES6+), React.js, Node.js, MongoDB, and PostgreSQL. I enjoy building
            responsive web apps, integrating REST APIs, and working with both
            SQL and NoSQL databases.
          </p>
          <button
            onClick={() => {
              const section = document.getElementById("projects");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
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
          </button>

          {/* === Social Media Icons === */}
          <div style={{ display: "flex", gap: "1.2rem", marginTop: "2rem" }}>
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
          </div>
        </div>
{/* === IMAGE === */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <img
    src="/photo.jpg" 
    alt="Mohammad Ali"
    style={{
      width: 360,
      height: "auto",
    }}
  />
</div>

      </section>
    </div>
  );
};

export default Hero;
