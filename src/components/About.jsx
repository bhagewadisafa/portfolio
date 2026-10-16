import React from 'react';
import { User, CheckCircle2, Briefcase, GraduationCap, Award, Compass, Zap } from 'lucide-react';
import { recruiterSnapshot } from '../data/portfolioData';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>Professional Profile</span>
          </div>
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
          <p className="section-description">
            A developer who values practical implementation, clean database schemas, 
            and reliable backend services over buzzwords.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative Background */}
          <div className="about-card-narrative">
            <p className="about-paragraph">
              I am currently pursuing my <strong>Master of Computer Applications (MCA 2025–2027)</strong> at 
              <strong> Chetan Business School in Hubli, Karnataka</strong>. My technical journey began with my 
              <strong> Bachelor of Computer Applications (BCA 2021–2024)</strong> at KLE PC Jabin Science College, 
              graduating with a <strong>70.4% CGPA</strong>.
            </p>

            <p className="about-paragraph">
              Throughout my academic career, I have dedicated myself to turning theoretical CS principles 
              into working software. Rather than building toy projects, I focus on 
              <strong> real-world utility</strong>: full-stack web applications, database-driven administrative 
              systems with session management and OTP verification, automated fee tracking pipelines, 
              and content-based machine learning recommendation engines.
            </p>

            <p className="about-paragraph">
              I am actively seeking an <strong>entry-level software development role</strong> where I can 
              collaborate with senior engineers, contribute to backend or full-stack Python codebases, 
              and solve real problems with accountability and curiosity.
            </p>

            {/* Core Pillars Grid */}
            <div className="about-highlights-grid">
              <div className="highlight-box">
                <Zap size={20} />
                <div>
                  <div className="highlight-title">Full-Stack Development</div>
                  <div className="highlight-desc">Connecting Flask backends to dynamic HTML/CSS/JS &amp; React interfaces.</div>
                </div>
              </div>

              <div className="highlight-box">
                <CheckCircle2 size={20} />
                <div>
                  <div className="highlight-title">Database Design</div>
                  <div className="highlight-desc">Hands-on modeling in MySQL, SQLite, MongoDB, and SQLAlchemy ORM.</div>
                </div>
              </div>

              <div className="highlight-box">
                <Compass size={20} />
                <div>
                  <div className="highlight-title">Workflow Automation</div>
                  <div className="highlight-desc">Automated email alerts, OTP verification, and scheduled fee tracking.</div>
                </div>
              </div>

              <div className="highlight-box">
                <Award size={20} />
                <div>
                  <div className="highlight-title">Applied ML Foundations</div>
                  <div className="highlight-desc">Practical content filtering using Pandas, NumPy, and Scikit-learn.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 30-Second Recruiter Evaluation Card */}
          <div className="recruiter-summary-card">
            <div className="recruiter-summary-header">
              <div className="recruiter-summary-title">
                <Briefcase size={20} color="#38bdf8" />
                <span style={{ fontWeight: 700 }}>30-Second Recruiter Brief</span>
              </div>
              <span className="badge badge-cyan">Entry-Level</span>
            </div>

            <div className="recruiter-summary-list">
              {recruiterSnapshot.map((item, idx) => (
                <div key={idx} className="recruiter-summary-item">
                  <span className="recruiter-label">{item.label}</span>
                  <span className="recruiter-val">{item.value}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                Looking to interview or connect immediately?
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href="#contact" className="btn btn-primary btn-sm" style={{ flex: 1 }}>
                  Get in Touch
                </a>
                <a href="#projects" className="btn btn-secondary btn-sm" style={{ flex: 1 }}>
                  Inspect Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
