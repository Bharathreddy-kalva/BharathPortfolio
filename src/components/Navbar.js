import React from "react";
import "./../styles/Navbar.css";
import SocialLinks from "./SocialLinks";
import ProfilePic from "../assets/images/profile-pic.jpeg"; // Replace with the actual path to your image

function Navbar({ setActiveSection }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">BHARATH REDDY KALVA</div>
      <ul className="navbar-links">
        <li onClick={() => setActiveSection("about")}>About</li>
        <li onClick={() => setActiveSection("skills")}>Skills</li>
        <li onClick={() => setActiveSection("experience")}>Experience</li>
        <li onClick={() => setActiveSection("projects")}>Projects</li>
        <li onClick={() => setActiveSection("education")}>Education</li>
   
      </ul>
        <SocialLinks />
    </nav>
  );
}

export default Navbar;
