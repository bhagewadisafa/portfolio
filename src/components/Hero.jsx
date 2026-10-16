import React from 'react';
import { ArrowRight, Download, Mail, MapPin, Sparkles, Terminal, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <div className="hero-content">
            <div className="hero-badge-status">
              <span className="pulse-dot"></span>
              <span>Available for Entry-Level Software Developer Roles</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm {personalInfo.name}
            </h1>

            <div className="hero-subtitle">
              <span>{personalInfo.role}</span>
            </div>

            <p className="hero-bio">
              Pursuing my <strong>MCA (2025–2027)</strong> at Chetan Business School in Hubli. 
              I design and develop functional web applications, database-backed administrative platforms, 
              and machine learning recommendation algorithms using <strong>Python</strong>, <strong>Flask</strong>, 
              and <strong>modern databases</strong>. Focused on clean structure, practical problem-solving, 
              and immediate readiness to contribute to production software projects.
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary" id="hero-view-projects-btn">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary" id="hero-contact-btn">
                <Mail size={18} />
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.resumePath}
                download="Safa_Bhagewadi_Resume.pdf"
                className="btn btn-outline"
                id="hero-download-resume-btn"
                title="Download Safa's Resume (PDF)"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Recruiter Facts Strip */}
            <div className="hero-meta-strip">
              <div className="meta-item">
                <MapPin size={16} />
                <span>Hubli, Karnataka (Open to Relocate)</span>
              </div>
              <div className="meta-item">
                <Terminal size={16} />
                <span>Core: Python, Flask, SQL, NoSQL</span>
              </div>
              <div className="meta-item">
                <Sparkles size={16} />
                <span>MCA @ Chetan Business School</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Avatar Card */}
          <div className="hero-visual-wrapper">
            <div className="hero-card">
              <div className="hero-card-inner">
                <img
                  src={personalInfo.avatarPath}
                  alt="Safa Bhagewadi - Aspiring Full-Stack Python Developer"
                  className="hero-avatar-img"
                  loading="eager"
                  onError={(e) => {
                    // Fallback in case of image load delay
                    e.currentTarget.style.display = 'block';
                  }}
                />
              </div>

              {/* Floating Badge 1: Backend Stack */}
              <div className="hero-floating-card top-right">
                <div className="floating-icon">
                  <Terminal size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8125rem', color: '#ffffff' }}>Python &amp; Flask</div>
                  <div style={{ fontSize: '0.7rem', color: '#38bdf8' }}>Full-Stack Core</div>
                </div>
              </div>

              {/* Floating Badge 2: Practical Engineering */}
              <div className="hero-floating-card bottom-left">
                <div className="floating-icon">
                  <Code size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8125rem', color: '#ffffff' }}>Databases &amp; ML</div>
                  <div style={{ fontSize: '0.7rem', color: '#34d399' }}>MySQL, SQLite &amp; Scikit-learn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
