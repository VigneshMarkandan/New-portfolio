import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleEmailClick = (e) => {
    // Attempt standard mailto; fallback to web Gmail if needed
    window.location.href = 'mailto:vigneshmarkandan3578@gmail.com';
  };

  return (
    <header>
      <nav>
        <a href="#" class="logo">
          <span class="dot"></span>vignesh.dev
        </a>
        <div className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
          <a href="#work" onClick={handleLinkClick}>Work</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#experience" onClick={handleLinkClick}>Experience</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </div>
        <a 
          href="https://mail.google.com/mail/?view=cm&to=vigneshmarkandan3578@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="nav-cta" 
          onClick={handleEmailClick}
        >
          Email me
        </a>
        <button 
          className="nav-toggle" 
          id="navToggle" 
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>
    </header>
  );
}
