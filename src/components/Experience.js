import React from "react";
import "./../styles/Experience.css";

function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Ozonetel Communication Pvt. Ltd.",
      duration: "Aug 2022 – Dec 2023",
      description: [
        "Developed responsive web applications using React.js.",
        "Built RESTful APIs and implemented JWT authentication.",
        "Deployed applications to cloud platforms such as AWS."
      ]
    },
    {
      title: "Engineering Intern",
      company: "Kwality Photonics Pvt. Ltd.",
      duration: "May 2020 – June 2020",
      description: [
        "Assisted in the production process of LED components.",
        "Compiled and analyzed data on production metrics."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-container">
      <h1 className="experience-title">Work Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title} - {exp.company}</h3>
          <h4>{exp.duration}</h4>
          <ul>
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
