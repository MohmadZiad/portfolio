import React from "react";
import {
  FaGamepad,
  FaCode,
  FaUser,
  FaUsers,
  FaShoppingCart,
  FaSeedling,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./Projects.css";

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

interface ProjectsProps {
  darkMode: boolean;
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

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  return (
    <section
      id="projects"
      className={`project-showcase ${darkMode ? "dark" : ""}`}
    >
      {/* Inner wrapper to control max-width and allow full bg coverage */}
      <div className="inner-wrapper">
        <h2 className="projects-title">
          <FaShoppingCart style={{ color: "#0fa68b" }} /> My Featured Projects &
          Products
        </h2>

        {projects.map((project, index) => {
          const isAvocado = project.title.includes("Avocado");
          const rowClass = `project-row ${
            isAvocado ? "avocado" : "mzstore"
          } ${project.role.toLowerCase()} ${index % 2 !== 0 ? "reverse" : ""}`;

          return (
            <motion.div
              key={index}
              className={rowClass}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  loading="lazy"
                />
              </div>

              <div className="project-details">
                <h3>
                  {isAvocado ? (
                    <FaSeedling className="icon-avocado" />
                  ) : (
                    <FaShoppingCart className="icon-mzstore" />
                  )}
                  {project.title}
                </h3>

                <span className={`project-role ${project.role.toLowerCase()}`}>
                  {project.role === "Individual" ? (
                    <>
                      <FaUser style={{ marginRight: "6px" }} /> Individual
                      Project
                    </>
                  ) : (
                    <>
                      <FaUsers style={{ marginRight: "6px" }} /> Team Project
                    </>
                  )}
                </span>

                <p>{project.description}</p>

                <div className="tech-stack">
                  <p>
                    <strong>Frontend:</strong>{" "}
                    {project.tech.frontend.join(", ")}
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
                    <FaGamepad style={{ marginRight: "8px" }} /> Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaCode style={{ marginRight: "8px" }} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
