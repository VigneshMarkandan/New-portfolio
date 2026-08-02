import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">Available for freelance & full‑time roles</span>
            <h1>
              I engineer the parts that <span className="accent">aren't supposed to break.</span>
            </h1>
            <p className="lede">
              Software & AI Engineer building agentic automation, computer‑vision pipelines, and backends designed around real failure modes — not demos. Based in Bangalore, working remote.
            </p>
            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">View case studies →</a>
              <a href="https://github.com/VigneshMarkandan" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/vigneshmarkandan/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                LinkedIn
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="num">3</div>
                <div className="lbl">Deep case studies</div>
              </div>
              <div>
                <div className="num">2+ yrs</div>
                <div className="lbl">Shipping production code</div>
              </div>
              <div>
                <div className="num">AI / CV / Backend</div>
                <div className="lbl">Core focus areas</div>
              </div>
            </div>
          </div>
          <div className="hero-photo-frame">
            <div className="terminal-bar">
              <span>~/vignesh — profile</span>
              <span className="status">online</span>
            </div>
            <img 
              src="https://res.cloudinary.com/clt3bc7w/image/upload/v1785684249/svbfmjbcp2fsj5fc1tuv.jpg" 
              alt="Portrait of Vignesh Markandan" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
