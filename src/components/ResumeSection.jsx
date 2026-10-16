import React, { useState } from 'react';
import { FileText, Download, ExternalLink, Check, Copy, AlertCircle, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeSection({ onShowToast }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (onShowToast) onShowToast('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="section" id="resume" style={{ paddingTop: '40px' }}>
      <div className="container">
        <div className="resume-banner">
          {/* Left Column: Summary & Callout */}
          <div>
            <div className="section-tag" style={{ marginBottom: '14px' }}>
              <FileText size={14} />
              <span>Curriculum Vitae</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', color: '#ffffff', marginBottom: '12px' }}>
              Ready for Your Evaluation
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.65' }}>
              Looking for a motivated, fast-learning Junior Full-Stack Python Developer? 
              Download my complete resume for a detailed view of my projects, database experience, 
              and academic record.
            </p>

            <div className="resume-highlights-list">
              <div className="resume-highlight-item">
                <Check size={18} />
                <span>MCA Student (2025–2027) with strong BCA foundation (70.4% CGPA)</span>
              </div>
              <div className="resume-highlight-item">
                <Check size={18} />
                <span>Hands-on Python, Flask, SQLite, MySQL, and SQLAlchemy experience</span>
              </div>
              <div className="resume-highlight-item">
                <Check size={18} />
                <span>Immediate availability for entry-level roles &amp; open to relocation</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href={personalInfo.resumePath}
                download="Safa_Bhagewadi_Resume.pdf"
                className="btn btn-primary"
                id="resume-section-download-btn"
              >
                <Download size={18} />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                id="resume-section-view-btn"
              >
                <ExternalLink size={18} />
                <span>View in Browser</span>
              </a>

              <button
                className="btn btn-outline"
                onClick={handleCopyEmail}
                style={{ padding: '12px 18px' }}
                title="Copy Safa's Email"
              >
                {copied ? <Check size={16} color="#34d399" /> : <Copy size={16} />}
                <span>{copied ? 'Email Copied' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Document Badge & Setup Note */}
          <div className="resume-preview-box">
            <div className="resume-doc-icon">
              <FileText size={32} />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '1.05rem', marginBottom: '4px' }}>
                Safa_Bhagewadi_Resume.pdf
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                Target: Junior / Full-Stack Python Developer
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: '12px',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                textAlign: 'left',
                lineHeight: '1.5',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#38bdf8', marginBottom: '4px', fontWeight: 600 }}>
                <Sparkles size={13} />
                <span>Deployable Asset Connected</span>
              </div>
              A valid downloadable PDF is configured in <code>public/resume.pdf</code>. 
              Drop your finalized PDF directly into <code>public/resume.pdf</code> whenever updated.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
