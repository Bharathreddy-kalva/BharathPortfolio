import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Leadership from "./components/Leadership";
import Footer from "./components/Footer";
import "./styles/App.css";
import ProfilePic from "../src/assets/images/profile-pic.jpeg";
import BackgroundImage from "../src/assets/images/background.jpg"; // Add the background image here
import BackgroundImage2 from "../src/assets/images/programmingBackground.jpg"; // Add the background image here


function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const starsContainer = document.querySelector(".stars");
    const totalStars = 200; // Adjust for density
    for (let i = 0; i < totalStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      star.style.transform = `translateZ(${Math.random() * 1000}px)`;
      starsContainer.appendChild(star);
    }
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "education":
        return <Education />;
      case "leadership":
        return <Leadership />;
      default:
        return (
          <div className="home-section">
            <h1 className="home-title">Bharath Reddy Kalva</h1>
            <h2 className="home-subtitle">Software Engineer</h2>
            <div className="navbar-profile">
              <img src={ProfilePic} alt="Profile" className="profile-pic" />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <div className="background">
        <img src={BackgroundImage2} alt="Background" className="background-image" />
        <div className="stars"></div>
      </div>
      <Navbar setActiveSection={setActiveSection} />
      <div className="content-container">
        <main>{renderSection()}</main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
