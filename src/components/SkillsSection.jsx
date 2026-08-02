import React from 'react';

const skillCategories = [
  {
    icon: "⚛",
    iconClass: "fe",
    title: "Frontend",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3"]
  },
  {
    icon: "⚙",
    iconClass: "be",
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Auth (RBAC / JWT)"]
  },
  {
    icon: "🤖",
    iconClass: "ai",
    title: "AI / ML",
    skills: ["Python", "YOLOv8", "OpenCV", "Streamlit"]
  },
  {
    icon: "🗄",
    iconClass: "db",
    title: "Data",
    skills: ["PostgreSQL", "MongoDB"]
  },
  {
    icon: "🛠",
    iconClass: "infra",
    title: "Infra & Tools",
    skills: ["Git", "AWS (S3, RDS)", "Postman"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Stack</span>
          <h2>Tools I reach for, and why.</h2>
          <p>Not a badge wall — the stack I actually build the projects above with.</p>
        </div>
        <div className="skill-grid">
          {skillCategories.map((cat, idx) => (
            <div className="skill-cat" key={idx}>
              <div className="skill-cat-header">
                <div className={`skill-cat-icon ${cat.iconClass}`}>{cat.icon}</div>
                <h4>{cat.title}</h4>
              </div>
              <ul>
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
