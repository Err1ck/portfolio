import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Necesitarás crear este archivo

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-content">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Education</Link>
            <Link to="/">Skills</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
