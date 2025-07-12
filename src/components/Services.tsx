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

const Services: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const filteredServices =
    filter === "All" ? services : services.filter((s) => s.tag === filter);

  return (
    <section id="services" className="services-section">
      <div className="services-content">
        <div className="services-header">
          <h2 className="services-title">Development Services Built for the Modern Web</h2>
          <div className="filter-tabs">
            {["All", "Frontend", "Backend", "UI/UX", "Tools"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={filter === category ? "active" : ""}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

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
