function Footer() {
  const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "20px",
    position: "relative",
    bottom: "0",
    width: "100%",
    marginTop: "40px",
    boxSizing: "border-box",
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
