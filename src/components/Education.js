import React from "react";
import "./../styles/Education.css";

function Education() {
  const education = [
    {
      degree: "Masters in Computer Science in Artificial Intelligence and Machine Learning",
      institution: "University at Buffalo, State University of New York, Buffalo, NY",
      duration: "Fall 2024 – Present",
      courses: [
        "Computer Security",
        "Algorithms and Analysis",
        "Data-Intensive Computing",
        "Machine Learning",
      ],
    },
    {
      degree: "Bachelor of Engineering in Electronics and Communication Engineering",
      institution: "Sreenidhi Institute of Science and Technology, Hyderabad, Telangana, India",
      duration: "July 2010",
      gpa: "7.1/10",
    },
  ];

  return (
    <section id="education" className="education-container">
      <h1 className="education-title">Education</h1>
      <div className="education-items">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p><strong>Institution:</strong> {edu.institution}</p>
            <p><strong>Duration:</strong> {edu.duration}</p>
            {edu.courses && (
              <div>
                <strong>Relevant Courses:</strong>
                <ul>
                  {edu.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
            {edu.gpa && <p><strong>GPA:</strong> {edu.gpa}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
