import React, { useState, useEffect } from "react";
import { MapPin, Mail, Linkedin, Github, Copy, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [copiedField, setCopiedField] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("from_name") as HTMLInputElement)
      ?.value;
    const email = (form.elements.namedItem("from_email") as HTMLInputElement)
      ?.value;

    let valid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      toast.error("Name is required.");
      valid = false;
    } else {
      setNameError("");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Invalid email");
      toast.error("Invalid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!valid) return;

    setLoading(true);
    try {
      const result = await emailjs.sendForm(
        "service_hv48jma",
        "template_8l8iuih",
        form,
        "sDnkJ3fgWqDFoReP4"
      );
      if (result.status === 200) {
        toast.success("✅ Message sent!");
        form.reset();
        setNameError("");
        setEmailError("");
      } else {
        toast.error("❌ Failed to send message.");
      }
    } catch {
      toast.error("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.info("Copied to clipboard");
    setCopiedField(label);
    setTimeout(() => setCopiedField(""), 1500);
  };

  return (
    <section id="contact" className="contactBG">
      <ToastContainer position="top-center" autoClose={3000} limit={1} />
      <div className="contactContent">
        <div className="contactText" data-aos="fade-right">
          <h2 className="contactTitle">📬 Let’s Connect</h2>
          <p className="contactDescription">
            Whether you have a project in mind or just want to say hello — I’d
            love to hear from you.
            <br />
            Let’s build something amazing together.
          </p>

          <div className="contactInfoGrid">
            {[
              { Icon: MapPin, label: "Location", value: "Amman, Jordan" },
              {
                Icon: Mail,
                label: "Email",
                value: "mohmmadziad.ali@gmail.com",
                link: "mailto:mohmmadziad.ali@gmail.com",
              },
              {
                Icon: Linkedin,
                label: "LinkedIn",
                value: "linkedin.com/in/mohmadali",
                link: "https://www.linkedin.com/in/mohmadali",
              },
              {
                Icon: Github,
                label: "GitHub",
                value: "github.com/MohmadZiad",
                link: "https://github.com/MohmadZiad",
              },
            ].map(({ Icon, label, value, link }) => (
              <div className="infoItem" key={label}>
                <Icon className="infoIcon" size={20} />
                <div className="infoContent">
                  <p className="infoLabel">{label}</p>
                  {link ? (
                    <a
                      href={link}
                      className="infoLink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="infoText">{value}</p>
                  )}
                </div>
                <Copy
                  size={16}
                  className={`copyIcon ${
                    copiedField === label ? "active" : ""
                  }`}
                  onClick={() => handleCopy(value, label)}
                />
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={sendEmail} className="contactForm" data-aos="fade-left">
          <div className="formGroup">
            <input
              name="from_name"
              type="text"
              placeholder="Your Name"
              className={`inputField ${nameError ? "invalid" : ""}`}
              required
            />
            {nameError && <span className="errorText">{nameError}</span>}
          </div>

          <div className="formGroup">
            <input
              name="from_email"
              type="email"
              placeholder="Your Email"
              className={`inputField ${emailError ? "invalid" : ""}`}
              required
            />
            {emailError && <span className="errorText">{emailError}</span>}
          </div>

          <div className="formGroup">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="inputField"
              required
            />
          </div>

          <button type="submit" className="submitBtn" disabled={loading}>
            {loading ? (
              <div className="spinner" />
            ) : (
              <>
                <Send size={18} style={{ marginRight: 8 }} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
