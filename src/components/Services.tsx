import React, { useState } from "react";
import {
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaServer,
  FaTools,
  FaProjectDiagram,
} from "react-icons/fa";
import "./Services.css";

// Interface for props to accept darkMode boolean
interface ServicesProps {
  darkMode: boolean;
}

// List of services with details and categories
const services = [
  {
    title: "Frontend Development",
    icon: <FaCode />,
    bullets: [
      "Built with React.js, TypeScript, MUI",
      "Accessibility-first approach",
      "Pixel-perfect UI animations",
    ],
    tag: "Frontend",
  },
  {
    title: "Backend Development",
    icon: <FaServer />,
    bullets: [
      "Node.js & Express.js APIs",
      "JWT & OAuth authentication",
      "Role-based access control",
    ],
    tag: "Backend",
  },
  {
    title: "Database Architecture",
    icon: <FaDatabase />,
    bullets: [
      "Schemas with PostgreSQL, NeonDB",
      "MongoDB & Mongoose",
      "SQL & NoSQL optimized",
    ],
    tag: "Backend",
  },
  {
    title: "Real-Time Functionality",
    icon: <FaProjectDiagram />,
    bullets: [
      "Chat & notifications with Socket.IO",
      "Live dashboards",
      "WebSocket integration",
    ],
    tag: "Tools",
  },
  {
    title: "Authentication Systems",
    icon: <FaTools />,
    bullets: [
      "Google, JWT, Apple OAuth",
      "Multi-role user flows",
      "Secure access layers",
    ],
    tag: "Tools",
  },
  {
    title: "Responsive Design & UI/UX",
    icon: <FaMobileAlt />,
    bullets: [
      "Mobile-first grids",
      "Component-driven layout",
      "Accessibility & usability focused",
    ],
    tag: "UI/UX",
  },
  {
    title: "Dev Tools & Workflow",
    icon: <FaTools />,
    bullets: [
      "Git, GitHub, Trello",
      "MongoDB Compass, Postman",
      "Agile & team-based tools",
    ],
    tag: "Tools",
  },
];

const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  // State to manage selected category filter
  const [filter, setFilter] = useState("All");

  // Filter services based on selected category
  const filteredServices =
    filter === "All" ? services : services.filter((s) => s.tag === filter);

  return (
    // Add dark mode class dynamically based on prop
    <section
      id="services"
      className={`services-section ${darkMode ? "dark" : ""}`}
    >
      <div className="services-content">
        {/* Header with title and filter tabs */}
        <div className="services-header">
          <h2 className="services-title">
            Development Services Built for the Modern Web
          </h2>

          <div className="filter-tabs">
            {["All", "Frontend", "Backend", "UI/UX", "Tools"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={filter === category ? "active" : ""}
                  aria-pressed={filter === category}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        {/* Services cards grid */}
        <div className="services-grid">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className="tag-badge">{service.tag}</span>
              <div className="service-icon-container">
                <div className="service-icon animated-icon">{service.icon}</div>
              </div>
              <h3 className="service-heading">{service.title}</h3>
              <ul className="service-bullets">
                {service.bullets.map((point, i) => (
                  <li key={i}>✅ {point}</li>
                ))}
              </ul>
              <button className="usecase-button">See Real Use Case →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
