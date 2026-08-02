import React from 'react';

const projects = [
  {
    id: "LOG_01 // EVOLV-AI",
    status: "Private repo — live demo below",
    statusType: "live",
    title: "evolv-ai — an agentic job‑application engine",
    tagline: "An autonomous agent that finds relevant job postings, tailors a resume against each one, and submits the application — without a human in the loop for every step.",
    tags: ["TypeScript", "Agentic AI", "LLM tooling", "Web automation", "Resume parsing"],
    problem: "Job hunting at scale is manual, repetitive, and inconsistent — the same 5 steps repeated across dozens of sites with different forms, formats, and rules.",
    hardPart: "Two things fight each other: automation needs to be reliable against sites that constantly change their DOM, and resume tailoring needs to stay factually honest instead of drifting into invented claims when an LLM rewrites content against a job description.",
    decision: "[Fill in: how you scored job relevance — rules, embeddings, or an LLM classifier — and why you picked that over the alternatives.]",
    differently: "[Fill in: one real dead end — e.g. a selector-based scraper that broke weekly, and what replaced it.]",
    postmortem: "This is the section that makes a case study believable — a specific failure, not a highlight reel. Swap this in once you've got it: what edge case broke the agent (duplicate applications, a form it misread, a rate limit it tripped), how you found out, and the fix.",
    links: [
      { text: "Repo is private", disabled: true },
      { text: "Demo video — add once recorded", disabled: true }
    ]
  },
  {
    id: "LOG_02 // LMS-BACKEND",
    status: "In active development",
    statusType: "progress",
    title: "LMS — a course platform backend built around access control",
    tagline: "A learning‑management backend where enrollment state, quiz integrity, and media access are treated as engineering problems, not CRUD.",
    tags: ["Node.js", "Express.js", "PostgreSQL", "Auth / RBAC", "Signed URLs"],
    problem: "Course platforms look simple from the outside — login, watch a video, take a quiz — until you have to enforce exactly who can see what, and stop people from gaming it.",
    hardPart: "Row-level authorization (a student can only see quiz results for courses they're actually enrolled in, enforced at the query layer, not the UI), and a race condition in quiz submission — nothing stops a double‑submit from two open tabs without an idempotency check.",
    decision: "Quiz attempts are stored as an append-only log rather than overwritten in place. It costs more storage, but makes attempt history auditable — which matters more than saving a few rows once academic integrity is on the table.",
    differently: "[Fill in once built: the specific concurrency bug you hit on quiz submission, and the unique-constraint / upsert fix that solved it.]",
    postmortem: "[Fill in: the real incident — e.g. \"my first design allowed a double quiz submission under concurrent requests; fixed with a unique constraint + upsert instead of check-then-insert.\" Specific, technical, and honest beats polished.]",
    links: [
      { text: "Repo — add once pushed", disabled: true },
      { text: "Demo video — add once recorded", disabled: true }
    ]
  },
  {
    id: "LOG_03 // INTELLIGUARD-AI",
    status: "Public repo",
    statusType: "live",
    title: "Intelliguard-AI — real‑time PPE compliance detection",
    tagline: "A computer‑vision system that flags missing personal‑protective‑equipment on an industrial site from live or recorded video, using YOLOv8.",
    tags: ["Python", "YOLOv8", "OpenCV", "Computer Vision"],
    problem: "Manual PPE compliance checks don't scale across a large site, and violations get caught after the fact instead of in the moment.",
    hardPart: "Balancing YOLOv8n (fast, lighter) against YOLOv8s (more accurate, heavier) for real-time inference, and tuning confidence thresholds where a false negative (missed violation) is a far worse outcome than a false positive.",
    decision: "[Fill in: which model you shipped with, the FPS/latency you measured, and why — this is your strongest \"applied ML judgment\" story, worth 2-3 real sentences.]",
    differently: "[Fill in: a real edge case — e.g. detection accuracy dropping in low light or with partial occlusion — and how you'd address it next.]",
    postmortem: "[Fill in: a genuine failure case from testing — e.g. helmets misclassified against certain backgrounds — and what you changed in response.]",
    links: [
      { text: "View repo →", href: "https://github.com/VigneshMarkandan/Intelliguard-AI", disabled: false },
      { text: "Demo video — add once recorded", disabled: true }
    ]
  }
];

export default function WorkSection() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow amber">Selected work</span>
          <h2>Three systems, three hard problems.</h2>
          <p>
            Each project below is documented the way I'd walk an engineer through it — the actual problem, the decision I had to make, and what broke along the way. Not a feature list.
          </p>
        </div>

        {projects.map((project, index) => (
          <article className="log-card" key={index}>
            <div className="log-header">
              <span className="log-id">{project.id}</span>
              <span className={`log-status ${project.statusType}`}>{project.status}</span>
            </div>
            <div className="log-body">
              <h3>{project.title}</h3>
              <p className="log-tagline">{project.tagline}</p>
              <div className="tag-row">
                {project.tags.map((tag, tIdx) => (
                  <span className="tag" key={tIdx}>{tag}</span>
                ))}
              </div>
              <div className="log-fields">
                <div className="field">
                  <h4>The problem</h4>
                  <p>{project.problem}</p>
                </div>
                <div className="field">
                  <h4>The hard part</h4>
                  <p>{project.hardPart}</p>
                </div>
                <div className="field">
                  <h4>The decision & tradeoff</h4>
                  <p>{project.decision}</p>
                </div>
                <div className="field">
                  <h4>What I'd do differently</h4>
                  <p>{project.differently}</p>
                </div>
              </div>
              <details className="postmortem">
                <summary>Postmortem — what actually broke <span></span></summary>
                <div className="pm-body">
                  <p>{project.postmortem}</p>
                </div>
              </details>
            </div>
            <div className="log-footer">
              {project.links.map((link, lIdx) => (
                link.disabled ? (
                  <span className="log-link disabled" key={lIdx}>{link.text}</span>
                ) : (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="log-link" key={lIdx}>
                    {link.text}
                  </a>
                )
              ))}
            </div>
          </article>
        ))}

        <p className="note">
          Note: bracketed [Fill in] lines are placeholders — replace with your real specifics before this goes live. Precise, honest detail is what makes these read as genuinely engineered rather than templated.
        </p>
      </div>
    </section>
  );
}
