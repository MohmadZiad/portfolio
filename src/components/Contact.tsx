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

  // Animate on scroll initialization
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Handle email form submission using EmailJS
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = (form.elements.namedItem("from_name") as HTMLInputElement)
      ?.value;
    const email = (form.elements.namedItem("from_email") as HTMLInputElement)
      ?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      ?.value;

    let valid = true;

    // Validate name
    if (!name.trim()) {
      setNameError("Name is required");
      toast.error("Name is required.");
      valid = false;
    } else {
      setNameError("");
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Invalid email");
      toast.error("Invalid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    // Validate message
    if (!message.trim()) {
      toast.error("Message is required.");
      valid = false;
    }

    if (!valid) return;

    setLoading(true);
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast.success("✅ Message sent!");
        form.reset();
        setNameError("");
        setEmailError("");
      } else {
        toast.error("❌ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      toast.error("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // Handle copying info fields (like email, location)
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.info(`${label} copied to clipboard`);
    setCopiedField(label);
    setTimeout(() => setCopiedField(""), 1500);
  };

  return (
    <section id="contact" className="contactBG">
      <ToastContainer position="top-center" autoClose={3000} limit={1} />
      <div className="contactContent">
        {/* Left text/info section */}
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
                  role="button"
                  tabIndex={0}
                  aria-label={`Copy ${label}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleCopy(value, label);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right side form section */}
        <form
          onSubmit={sendEmail}
          className="contactForm"
          data-aos="fade-left"
          noValidate
        >
          {/* Name field */}
          <div className="formGroup">
            <input
              name="from_name"
              type="text"
              placeholder="Your Name"
              className={`inputField ${nameError ? "invalid" : ""}`}
              aria-invalid={!!nameError}
              aria-describedby="name-error"
              required
            />
            {nameError && (
              <span className="errorText" id="name-error" aria-live="assertive">
                {nameError}
              </span>
            )}
          </div>

          {/* Email field */}
          <div className="formGroup">
            <input
              name="from_email"
              type="email"
              placeholder="Your Email"
              className={`inputField ${emailError ? "invalid" : ""}`}
              aria-invalid={!!emailError}
              aria-describedby="email-error"
              required
            />
            {emailError && (
              <span
                className="errorText"
                id="email-error"
                aria-live="assertive"
              >
                {emailError}
              </span>
            )}
          </div>

          {/* Message textarea */}
          <div className="formGroup">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="inputField"
              required
              aria-required="true"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="submitBtn"
            disabled={loading}
            aria-busy={loading}
            aria-disabled={loading}
          >
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
