import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="brand-logo" style={{ marginBottom: '8px' }}>
              <span className="brand-badge">SB</span>
              <span className="brand-text">
                Safa Bhagewadi<span className="brand-dot">.dev</span>
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', maxWidth: '420px' }}>
              Aspiring Full-Stack Python Developer &amp; MCA Student at Chetan Business School, Hubli. 
              Seeking entry-level engineering roles.
            </p>
          </div>

          <div className="footer-socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-btn"
              title="Email Safa"
              aria-label="Email Safa"
            >
              <Mail size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="social-btn"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Safa Bhagewadi. Built with modern React, Vite &amp; accessible CSS.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#about" style={{ color: 'var(--text-muted)' }}>About</a>
            <a href="#skills" style={{ color: 'var(--text-muted)' }}>Skills</a>
            <a href="#projects" style={{ color: 'var(--text-muted)' }}>Projects</a>
            <a href="#resume" style={{ color: 'var(--text-muted)' }}>Resume</a>
            <a href="#contact" style={{ color: 'var(--text-muted)' }}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
