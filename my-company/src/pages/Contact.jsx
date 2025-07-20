import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#333", fontSize: "2em", textAlign: "center" }}>
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            display: "block",
            width: "calc(100% - 20px)",
            padding: "10px",
            margin: "10px auto",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            display: "block",
            width: "calc(100% - 20px)",
            padding: "10px",
            margin: "10px auto",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{
            display: "block",
            width: "calc(100% - 20px)",
            padding: "10px",
            margin: "10px auto",
            borderRadius: "4px",
            border: "1px solid #ccc",
            minHeight: "100px",
          }}
          required
        />
        <button
          type="submit"
          style={{
            display: "block",
            width: "calc(100% - 20px)",
            padding: "10px",
            margin: "20px auto 0",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1em",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
