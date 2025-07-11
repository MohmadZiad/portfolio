import React from "react";

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
      demoLink:
        "https://drive.google.com/file/d/1LZcYvhuWPAs_ouXXk9ieLxXgzJfimG3S/view?usp=drive_link",
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
      demoLink:
        "https://drive.google.com/file/d/1ZNJS__NUawlsFbdRUF4Ndg_LGxpomtGL/view?usp=drive_link",
      codeLink: "https://github.com/MohmadZiad/MERAKI_Academy_Project_5_Ali",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "5rem 8%",
        background: "#f9fafb",
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
          <div
            key={index}
            style={{
              background: "#ffffff",
              borderRadius: "1.2rem",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderTopLeftRadius: "1.2rem",
                borderTopRightRadius: "1.2rem",
                filter: "brightness(0.96) contrast(1.05)",
              }}
            />
            <div style={{ padding: "1.8rem" }}>
              <h3
                style={{
                  fontSize: "1.7rem",
                  fontWeight: 800,
                  marginBottom: "0.6rem",
                  color: "#111827",
                }}
              >
                {project.title}
              </h3>

              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#10b981",
                  background: "#ecfdf5",
                  padding: "0.3rem 0.75rem",
                  borderRadius: "999px",
                  display: "inline-block",
                  marginBottom: "0.7rem",
                }}
              >
                {project.role === "Individual"
                  ? "👤 Individual Project"
                  : "👥 Team Project"}
              </span>

              <p
                style={{
                  color: "#4b5563",
                  fontSize: "1rem",
                  marginBottom: "1.2rem",
                  lineHeight: 1.75,
                }}
              >
                {project.description}
              </p>

              {/* Frontend */}
              {project.tech.frontend.length > 0 && (
                <div style={{ marginBottom: "0.7rem" }}>
                  <strong style={{ fontSize: "0.85rem", color: "#374151" }}>
                    🎨 Frontend:
                  </strong>{" "}
                  {project.tech.frontend.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        background: "#e5e7eb",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "999px",
                        fontSize: "0.8rem",
                        marginRight: "0.5rem",
                        display: "inline-block",
                        marginTop: "0.4rem",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Backend */}
              {project.tech.backend.length > 0 && (
                <div style={{ marginBottom: "0.7rem" }}>
                  <strong style={{ fontSize: "0.85rem", color: "#374151" }}>
                    🛠️ Backend:
                  </strong>{" "}
                  {project.tech.backend.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        background: "#e5e7eb",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "999px",
                        fontSize: "0.8rem",
                        marginRight: "0.5rem",
                        display: "inline-block",
                        marginTop: "0.4rem",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Tools */}
              {project.tech.tools.length > 0 && (
                <div style={{ marginBottom: "1.2rem" }}>
                  <strong style={{ fontSize: "0.85rem", color: "#374151" }}>
                    🧰 Tools:
                  </strong>{" "}
                  {project.tech.tools.map((tool, i) => (
                    <span
                      key={i}
                      style={{
                        background: "#e5e7eb",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "999px",
                        fontSize: "0.8rem",
                        marginRight: "0.5rem",
                        display: "inline-block",
                        marginTop: "0.4rem",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginTop: "1.2rem",
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
                    padding: "0.5rem 1.2rem",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    fontWeight: 600,
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
                    padding: "0.5rem 1.2rem",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  💻 Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
