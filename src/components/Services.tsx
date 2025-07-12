import React from "react";
import {
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaServer,
  FaTools,
  FaProjectDiagram,
} from "react-icons/fa";

interface Service {
  title: string;
  icon: JSX.Element;
  description: string;
}

const services: Service[] = [
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
    <section
      id="services"
      style={{
        padding: "5rem 8%",
        background: "#f3f4f6",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "2.6rem",
          fontWeight: 800,
          textAlign: "center",
          marginBottom: "3.5rem",
          color: "#111827",
        }}
      >
        🛠️ My Services
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
              padding: "2rem",
              borderRadius: "1.25rem",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0, 0, 0, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 16px rgba(0, 0, 0, 0.06)";
            }}
          >
            <div
              style={{
                fontSize: "2.2rem",
                color: "#10b981",
                marginBottom: "1rem",
              }}
            >
              {service.icon}
            </div>
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                marginBottom: "0.75rem",
                color: "#111827",
              }}
            >
              {service.title}
            </h3>
            <p style={{ color: "#4b5563", lineHeight: 1.6 }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
