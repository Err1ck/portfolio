import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <Header />
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
