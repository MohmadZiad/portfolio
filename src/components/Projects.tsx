import React from "react";
import "./Projects.css";
import {
  FaGamepad,
  FaCode,
  FaUser,
  FaUsers,
  FaShoppingCart,
  FaSeedling,
} from "react-icons/fa";

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

const projects: Project[] = [
  {
    title: "MZ-Store E-commerce",
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
    title: "Avocado E-shop",
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

const Projects: React.FC = () => {
  return (
    <section className="project-showcase" id="projects">
      <h2 className="projects-title" data-aos="fade-up">
        <FaShoppingCart style={{ marginRight: "10px", color: "#10b981" }} />
        My Projects
      </h2>

      {projects.map((project, index) => (
        <div
          className={`project-row ${index % 2 !== 0 ? "reverse" : ""}`}
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 150}
        >
          <div className="project-image">
            <img src={project.image} alt={project.title} loading="lazy" />
          </div>

          <div className="project-details">
            <h3>
              {project.title.startsWith("Avocado") ? (
                <FaSeedling style={{ marginRight: "10px", color: "#65a30d" }} />
              ) : (
                <FaShoppingCart
                  style={{ marginRight: "10px", color: "#f97316" }}
                />
              )}
              {project.title}
            </h3>

            <span
              className={`project-role ${
                project.role === "Individual" ? "individual" : "team"
              }`}
            >
              {project.role === "Individual" ? (
                <>
                  <FaUser style={{ marginRight: "6px" }} />
                  Individual Project
                </>
              ) : (
                <>
                  <FaUsers style={{ marginRight: "6px" }} />
                  Team Project
                </>
              )}
            </span>

            <p>{project.description}</p>

            <div className="tech-stack">
              <p>
                <strong>Frontend:</strong> {project.tech.frontend.join(", ")}
              </p>
              <p>
                <strong>Backend:</strong> {project.tech.backend.join(", ")}
              </p>
              <p>
                <strong>Tools:</strong> {project.tech.tools.join(", ")}
              </p>
            </div>

            <div className="project-links">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGamepad style={{ marginRight: "8px" }} />
                Live Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCode style={{ marginRight: "8px" }} />
                Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
