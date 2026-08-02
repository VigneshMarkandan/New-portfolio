import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-panel">
          <span className="eyebrow">Get in touch</span>
          <h2>Have a system worth building? Let's talk.</h2>
          <p>
            Open to freelance engagements and full-time roles across AI engineering and backend development.
          </p>
          <div className="contact-links">
            <a 
              href="https://mail.google.com/mail/?view=cm&to=vigneshmarkandan3578@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={() => { window.location.href = 'mailto:vigneshmarkandan3578@gmail.com'; }}
            >
              vigneshmarkandan3578@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/vigneshmarkandan/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-ghost"
            >
              LinkedIn →
            </a>
            <a 
              href="https://github.com/VigneshMarkandan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-ghost"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
