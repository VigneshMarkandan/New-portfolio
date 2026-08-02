import React from 'react';

const timelineData = [
  {
    date: "APR 2025 — PRESENT",
    role: "Full Stack & AI Developer",
    org: "Freelance (Remote / Offsite) — Bangalore, India"
  },
  {
    date: "NOV 2024 — APR 2025",
    role: "Software Engineer",
    org: "Hiace Systems Private Limited — Bangalore, India"
  },
  {
    date: "SEP 2024 — NOV 2024",
    role: "Junior Software Engineer",
    org: "Techblume Software Solutions — Bangalore, India"
  },
  {
    date: "OCT 2023 — SEP 2024",
    role: "Engineer Trainee",
    org: "Tech I.S India Pvt Ltd — Bangalore, India"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow amber">Track record</span>
          <h2>Where I've built things.</h2>
        </div>
        <div className="timeline">
          {timelineData.map((item, idx) => (
            <div className="tl-item" key={idx}>
              <div className="tl-date">{item.date}</div>
              <div className="tl-role">{item.role}</div>
              <div className="tl-org">{item.org}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
