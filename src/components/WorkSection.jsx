import React, { useRef, useEffect } from 'react';

function VideoCover({ videoUrl, posterUrl, liveUrl }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure muted is set explicitly on DOM node for Safari/iOS compatibility
    video.muted = true;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Swallow autoplay policy failure silently without console errors
        });
      }
    };

    // Attempt initial play
    playVideo();

    // IntersectionObserver to re-trigger play when scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playVideo();
          }
          // Intentionally do NOT pause when scrolled out, keeping video truly "always" playing
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="video-showcase-frame">
      <div className="video-browser-bar">
        <div className="browser-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="browser-url">
          <span className="lock-icon">🔒</span> {liveUrl || 'https://brandnew-serenicospaces.netlify.app/'}
        </div>
        <div className="browser-badge">Live Preview</div>
      </div>
      <div className="video-wrapper">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
    </div>
  );
}

const projects = [
  {
    id: "LOG_01 // SERENICOSPACES",
    status: "Live",
    statusType: "live",
    name: "SerenicoSpaces",
    subtitle: "Luxury Interior Design Studio Website",
    category: "Bespoke Web App",
    accentColor: "amber",
    tagline: "A bespoke marketing website for a luxury interior design studio operating out of Guwahati and Imphal — built to convert high-intent visitors into consultation bookings through cinematic storytelling.",
    videoUrl: "https://res.cloudinary.com/clt3bc7w/video/upload/v1786018503/Interior-website_video_c497uh.mp4",
    posterUrl: "https://res.cloudinary.com/clt3bc7w/video/upload/so_0/v1786018503/Interior-website_video_c497uh.jpg",
    liveUrl: "https://brandnew-serenicospaces.netlify.app/",
    tags: ["React", "Component-based Architecture", "HTML5", "CSS3", "Tailwind CSS"],
    problem: "High-end interior design clients expect an immediate sense of craftsmanship and spatial elegance before booking a consultation, but generic agency layouts fail to convey luxury, causing high drop-off rates.",
    hardPart: "Achieving smooth, cinematic visual flow across complex layout compositions while preserving fast load times and seamless cross-device performance, particularly on high-DPI mobile screens.",
    decision: "[Fill in: decision on component modularity vs single-page dynamic sections, dynamic media loading strategy, or scroll animation orchestration — 2-3 honest sentences explaining your architectural choices.]",
    differently: "[Fill in: one technical architectural refinement — e.g., adopting headless CMS for client copy updates or further optimizing image asset pipelines — 2-3 honest sentences.]",
    postmortem: "[Fill in: actual postmortem note detailing a specific production challenge — e.g., mobile video autoplay restrictions on Low Power Mode or Safari rendering quirks — and how it was resolved.]",
    links: [
      { text: "Visit Live Site →", href: "https://brandnew-serenicospaces.netlify.app/", disabled: false }
    ]
  },
  {
    id: "LOG_02 // EVOLV-AI",
    status: "Private repo — live demo below",
    statusType: "live",
    name: "evolv-ai",
    subtitle: "an agentic job‑application engine",
    category: "Agentic AI",
    accentColor: "teal",
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
    id: "LOG_03 // LMS-BACKEND",
    status: "In active development",
    statusType: "progress",
    name: "LMS-Backend",
    subtitle: "a course platform backend built around access control",
    category: "Backend Architecture",
    accentColor: "blue",
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
    id: "LOG_04 // INTELLIGUARD-AI",
    status: "Public repo",
    statusType: "live",
    name: "Intelliguard-AI",
    subtitle: "real‑time PPE compliance detection",
    category: "Computer Vision",
    accentColor: "green",
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
          <h2>Four systems, four hard problems.</h2>
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
              <h3 className="project-title">
                <span className={`project-name ${project.accentColor}`}>{project.name}</span>
                <span className="title-separator">—</span>
                <span className="project-subtitle">{project.subtitle}</span>
                <span className={`project-badge ${project.accentColor}`}>{project.category}</span>
              </h3>
              <p className="log-tagline">{project.tagline}</p>
              <div className="tag-row">
                {project.tags.map((tag, tIdx) => (
                  <span className="tag" key={tIdx}>{tag}</span>
                ))}
              </div>

              {project.videoUrl && (
                <VideoCover
                  videoUrl={project.videoUrl}
                  posterUrl={project.posterUrl}
                  liveUrl={project.liveUrl}
                />
              )}

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
