// src/components/SocialLinks.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "./../styles/SocialLinks.css";


const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/Bharathreddy-kalva" target="_blank" rel="noopener noreferrer">
        <FaGithub size={40} />
      </a>
      <a href="https://linkedin.com/in/bharathreddy-kalva-201b6a1a9" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={40} />
      </a>
    </div>
  );
};

export default SocialLinks;
