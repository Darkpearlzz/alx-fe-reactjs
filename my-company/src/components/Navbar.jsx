import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    backgroundColor: "#333",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.1em",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  };

  const hoverStyle = {
    color: "#d400ffff",
  };

  return (
    <nav style={navStyle}>
      <Link
        to="/"
        style={linkStyle}
        onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
        onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={linkStyle}
        onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
        onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
      >
        About
      </Link>
      <Link
        to="/services"
        style={linkStyle}
        onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
        onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={linkStyle}
        onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
        onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
