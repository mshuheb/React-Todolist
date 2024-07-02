import React from "react";

const Footer = () => {
  let footerStyle = {
    position: "fixed", 
    bottom: 0, 
    width: "100%",
    backgroundColor: "#053B50",
    borderRadius: "25px",
    padding: "10px 0", 
    color: "#ffffff", 
    textAlign: "center", 
  };
  return (
    <footer>
      <div className="text-light py-3" style={footerStyle}>
        <p className="text-center">Copyright &copy; MohammedShuheb</p>
      </div>
    </footer>
  );
};

export default Footer;
