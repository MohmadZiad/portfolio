import React from "react";
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
    description:
      "Building responsive UIs with React.js, Next.js, TypeScript, React Slick, and UI libraries like MUI and Joy UI. Focused on accessibility, performance, and smooth animations.",
  },
  {
    title: "Backend Development",
    icon: <FaServer />,
    description:
      "Developing scalable backend systems using Node.js and Express.js. Includes secure authentication (JWT, OAuth), REST APIs, role-based access, and session management.",
  },
  {
    title: "Database Architecture",
    icon: <FaDatabase />,
    description:
      "Designing efficient schemas and managing data with PostgreSQL, NeonDB, and MongoDB. Experienced with both relational and NoSQL systems using Mongoose & SQL clients.",
  },
  {
    title: "Real-Time Functionality",
    icon: <FaProjectDiagram />,
    description:
      "Implementing chat systems, instant notifications, and dynamic dashboards using Socket.IO and WebSockets for seamless real-time experiences.",
  },
  {
    title: "Authentication Systems",
    icon: <FaTools />,
    description:
      "Implementing secure sign-in flows using JWT, Google Login, Apple OAuth, and role-based access control across multiple user types.",
  },
  {
    title: "Responsive Design & UI/UX",
    icon: <FaMobileAlt />,
    description:
      "Crafting mobile-first, pixel-perfect layouts with grid systems and component libraries. Focused on usability, accessibility, and clean design.",
  },
  {
    title: "Dev Tools & Workflow",
    icon: <FaTools />,
    description:
      "Fluent with Git, GitHub, Postman, Trello, Draw.io, and MongoDB Compass. Experienced in team-based collaboration and agile development.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="services-title">🛠️ My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-heading">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
