import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/">Linkedin</Link>
        <Link to="/">Github</Link>
      </div>
    </footer>
  );
};

export default Footer;
