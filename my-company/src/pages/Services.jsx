// src/pages/Services.jsx
function Services() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#333", fontSize: "2em" }}>Our Services</h1>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li style={{ marginBottom: "10px", color: "#555" }}>
          <strong>Technology Consulting:</strong> Expert advice and
          implementation for your IT infrastructure and software needs.
        </li>
        <li style={{ marginBottom: "10px", color: "#555" }}>
          <strong>Market Analysis:</strong> Comprehensive research and insights
          to help you understand your market and competitors.
        </li>
        <li style={{ marginBottom: "10px", color: "#555" }}>
          <strong>Product Development:</strong> From concept to launch, we
          assist in developing innovative and market-ready products.
        </li>
        <li style={{ marginBottom: "10px", color: "#555" }}>
          <strong>Digital Marketing:</strong> Strategies and execution to boost
          your online presence and reach your target audience.
        </li>
      </ul>
    </div>
  );
}

export default Services;
