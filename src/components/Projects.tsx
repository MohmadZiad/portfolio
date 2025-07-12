import React from "react";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  role: "Individual" | "Team";
  tech: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
  image: string;
  demoLink: string;
  codeLink: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "1.5rem",
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            objectPosition: "top",
            borderTopLeftRadius: "1.5rem",
            borderTopRightRadius: "1.5rem",
            filter: "brightness(0.97) contrast(1.03)",
            transition: "filter 0.3s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60px",
            background: "linear-gradient(to top, rgba(0,0,0,0.1), transparent)",
          }}
        />
      </div>

      <div style={{ padding: "2rem" }}>
        <h3
          style={{
            fontSize: "1.65rem",
            fontWeight: 800,
            marginBottom: "0.5rem",
            color: "#111827",
            letterSpacing: "-0.5px",
          }}
        >
          {project.title}
        </h3>

        <span
          style={{
            fontSize: "0.82rem",
            fontWeight: 600,
            color: project.role === "Individual" ? "#10b981" : "#3b82f6",
            background: project.role === "Individual" ? "#ecfdf5" : "#eff6ff",
            padding: "0.35rem 0.85rem",
            borderRadius: "999px",
            display: "inline-block",
            marginBottom: "0.9rem",
          }}
        >
          {project.role === "Individual" ? "👤 Individual Project" : "👥 Team Project"}
        </span>

        <p
          style={{
            color: "#4b5563",
            fontSize: "1rem",
            marginBottom: "1.4rem",
            lineHeight: 1.75,
          }}
        >
          {project.description}
        </p>

        {["frontend", "backend", "tools"].map((key) => (
          <div style={{ marginBottom: "0.8rem" }} key={key}>
            <strong style={{ fontSize: "0.9rem", color: "#374151", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              {key === "frontend" && <FaCode />}
              {key === "backend" && <FaServer />}
              {key === "tools" && <FaTools />}
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </strong>
            <div style={{ marginTop: "0.4rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.tech[key as keyof typeof project.tech].map((tech, i) => (
                <span
                  key={i}
                  style={{
                    background: "#e5e7eb",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "999px",
                    fontSize: "0.8rem",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "1.6rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#10b981",
              color: "#fff",
              padding: "0.6rem 1.3rem",
              borderRadius: "10px",
              fontSize: "0.92rem",
              textDecoration: "none",
              fontWeight: 600,
              transition: "background 0.3s ease",
            }}
          >
            🎮 Live Demo
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#111827",
              color: "#fff",
              padding: "0.6rem 1.3rem",
              borderRadius: "10px",
              fontSize: "0.92rem",
              textDecoration: "none",
              fontWeight: 600,
              transition: "background 0.3s ease",
            }}
          >
            💻 Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "🛒 MZ-Store E-commerce",
      description:
        "Role-based e-commerce solution with dashboards, product lifecycle management, role-specific features, and secure checkout.",
      role: "Individual",
      tech: {
        frontend: ["React.js", "Bootstrap", "React Slick"],
        backend: ["Node.js", "Express", "MongoDB"],
        tools: ["Trello", "Draw.io", "MongoDB Compass", "Git & GitHub"],
      },
      image: "/project-mzstore.png",
      demoLink: "https://drive.google.com/file/d/1LZcYvhuWPAs_ouXXk9ieLxXgzJfimG3S/view?usp=drive_link",
      codeLink: "https://github.com/C14-MohmadZiad/MERAKI_Academy_Project_4",
    },
    {
      title: "🥑 Avocado E-shop",
      description:
        "Scalable full-stack e-commerce platform with real-time chat, admin dashboard, PostgreSQL database, and a modern responsive UI.",
      role: "Team",
      tech: {
        frontend: ["Next.js", "TypeScript", "MUI (Joy UI)", "React Slick"],
        backend: ["Node.js", "Express", "PostgreSQL", "NeonDB"],
        tools: ["Postman", "Trello", "Draw.io", "Git & GitHub"],
      },
      image: "/project-avocado.png",
      demoLink: "https://drive.google.com/file/d/1ZNJS__NUawlsFbdRUF4Ndg_LGxpomtGL/view?usp=drive_link",
      codeLink: "https://github.com/MohmadZiad/MERAKI_Academy_Project_5_Ali",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "5rem 8%",
        background: "#f9fafb",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "2.8rem",
          fontWeight: 800,
          textAlign: "center",
          marginBottom: "3.5rem",
          color: "#111827",
        }}
      >
        🚀 My Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
