import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hv48jma", // Service ID
        "template_8l8iuih", // Template ID
        e.currentTarget,
        "sDnkJ3fgWqDFoReP4" // Public Key (من EmailJS > Account > Public Key)
      )
      .then(
        () => toast.success("✅ Message sent successfully!"),
        () => toast.error("❌ Failed to send message. Please try again.")
      );

    e.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      style={{
        padding: "5rem 8%",
        background: "#f9fafb",
        color: "#111827",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <ToastContainer />
      <h2
        style={{
          fontSize: "2.8rem",
          fontWeight: 800,
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        📬 Let's Connect
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "#6b7280",
          fontSize: "1.1rem",
          maxWidth: 700,
          margin: "0 auto 3.5rem",
          lineHeight: 1.7,
        }}
      >
        Got a question, proposal, or just want to say hello?
        <br />
        I’m always open to new ideas and collaboration opportunities.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <form
          onSubmit={sendEmail}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            background: "#fff",
            padding: "2rem",
            borderRadius: "1rem",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          }}
        >
          <input
            name="from_name"
            type="text"
            placeholder="Your Name"
            required
            style={inputStyle}
          />

          <input
            name="from_email"
            type="email"
            placeholder="Your Email"
            required
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            style={{ ...inputStyle, resize: "vertical" }}
          />

          <button
            type="submit"
            style={{
              background: "#10b981",
              color: "#fff",
              padding: "0.9rem 2rem",
              borderRadius: 10,
              border: "none",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
          >
            Send Message
          </button>
        </form>

        {/* === CONTACT INFO === */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.8rem",
            justifyContent: "center",
          }}
        >
          <ContactInfo
            icon={<FaMapMarkerAlt color="#10b981" />}
            title="Location"
            value="Amman, Jordan"
          />
          <ContactInfo
            icon={<FaEnvelope color="#10b981" />}
            title="Email"
            value="mohmmadziad.ali@gmail.com"
            link="mailto:mohmmadziad.ali@gmail.com"
          />
          <ContactInfo
            icon={<FaLinkedin color="#10b981" />}
            title="LinkedIn"
            value="linkedin.com/in/mohmadali"
            link="https://www.linkedin.com/in/mohmadali"
          />
          <ContactInfo
            icon={<FaGithub color="#10b981" />}
            title="GitHub"
            value="github.com/MohmadZiad"
            link="https://github.com/MohmadZiad"
          />
        </div>
      </div>
    </section>
  );
};

const inputStyle: React.CSSProperties = {
  padding: "0.9rem 1.2rem",
  borderRadius: 10,
  border: "1px solid #d1d5db",
  fontSize: "1rem",
  outline: "none",
};

const ContactInfo: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}> = ({ icon, title, value, link }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <div style={{ fontSize: "1.5rem" }}>{icon}</div>
      <div>
        <p style={{ margin: 0, fontWeight: 600, fontSize: "0.95rem" }}>
          {title}
        </p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#374151",
              fontSize: "0.95rem",
              textDecoration: "none",
            }}
          >
            {value}
          </a>
        ) : (
          <p style={{ margin: 0, color: "#374151", fontSize: "0.95rem" }}>
            {value}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
