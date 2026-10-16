import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Terminal, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="brand-logo" aria-label="Safa Bhagewadi Portfolio Home">
            <span className="brand-badge">SB</span>
            <span className="brand-text">
              Safa<span className="brand-dot">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.name} className="nav-item">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <a
              href="#resume"
              className="btn btn-primary btn-sm btn-resume-nav"
              aria-label="Navigate to Resume section"
            >
              <Download size={15} />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <aside className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div>
          <div className="mobile-nav-header">
            <div className="brand-logo">
              <span className="brand-badge">SB</span>
              <span>Safa Bhagewadi</span>
            </div>
            <button
              className="modal-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation drawer"
            >
              <X size={20} />
            </button>
          </div>

          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={handleLinkClick}>
                  <ChevronRight size={16} color="#38bdf8" />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: '24px' }}>
          <a
            href={personalInfo.resumePath}
            download="Safa_Bhagewadi_Resume.pdf"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={handleLinkClick}
          >
            <Download size={16} />
            <span>Download Resume (PDF)</span>
          </a>
          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              textAlign: 'center',
              marginTop: '12px',
            }}
          >
            Hubli, Karnataka | Open to Relocate
          </p>
        </div>
      </aside>
    </>
  );
}
