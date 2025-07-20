// src/pages/About.jsx
function About() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#333", fontSize: "2em" }}>About Us</h1>
      <p style={{ color: "#555", lineHeight: "1.6" }}>
        Our company has been providing top-notch services since 1990. We
        specialize in various fields including technology, marketing, and
        consultancy. Our mission is to empower businesses with innovative
        solutions and exceptional support, fostering long-term partnerships and
        sustainable growth.
      </p>
      <p style={{ color: "#555", lineHeight: "1.6" }}>
        We pride ourselves on our team of highly skilled professionals who are
        passionate about their work and committed to achieving client success.
      </p>
      <img
        src="https://via.placeholder.com/600x300?text=About+Our+Team"
        alt="About Our Team"
        style={{
          maxWidth: "100%",
          height: "auto",
          marginTop: "20px",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}

export default About;
