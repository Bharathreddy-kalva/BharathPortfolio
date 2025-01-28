import React from 'react';
import { FaJava, FaJs, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaPython, FaCogs, FaDatabase, FaMicrosoft, FaAws, FaGithub } from 'react-icons/fa';
import { SiSpringboot, SiPandas } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: 'Java', icon: <FaJava size={40} /> },
    { name: 'JavaScript', icon: <FaJs size={40} /> },
    { name: 'React', icon: <FaReact size={40} /> },
    { name: 'HTML5', icon: <FaHtml5 size={40} /> },
    { name: 'CSS3', icon: <FaCss3Alt size={40} /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={40} /> },
    { name: 'Python', icon: <FaPython size={40} /> },
    { name: 'C', icon: <FaCogs size={40} /> },
    { name: 'SQL', icon: <FaDatabase size={40} /> },
    { name: 'Pandas', icon: <SiPandas size={40} /> },
    { name: 'Scapy', icon: <FaGithub size={40} /> },
    { name: 'Crypto Library', icon: <FaCogs size={40} /> },
    { name: 'React.js', icon: <FaReact size={40} /> },
    { name: 'Spring Boot', icon: <SiSpringboot size={40} /> },
    { name: 'MS Office', icon: <FaMicrosoft size={40} /> },
    { name: 'AWS', icon: <FaAws size={40} /> },
    { name: 'Visual Studio', icon: <FaGithub size={40} /> },
    { name: 'Eclipse', icon: <FaGithub size={40} /> },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Skills</h2>
      <div style={styles.iconContainer}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.iconBox}>
            <div style={styles.icon}>{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #00FFFF, #FF00FF)', // Keeping the original background
    height: '100vh',
    padding: '20px', // Added padding for spacing
  },
  heading: {
    marginBottom: '20px',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  iconContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(9, 1fr)', // 9 items per row
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px', // Limit the width of the icon grid
    margin: '0 auto', // Center the grid
    borderRadius: '8px',
    padding: '20px',
  },
  iconBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    height: '150px',
    textAlign: 'center',
  },
  icon: {
    fontSize: '40px',
    color: '#007BFF',
  },
};

export default Skills;
