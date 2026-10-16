import React from 'react';
import { GraduationCap, Calendar, BookOpen, CheckCircle } from 'lucide-react';
import { educationHistory, relevantCoursework } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education &amp; <span>Coursework</span>
          </h2>
          <p className="section-description">
            Strong academic grounding in computer applications, theoretical foundations, 
            and hands-on software engineering.
          </p>
        </div>

        <div className="timeline-wrap">
          {educationHistory.map((edu, idx) => (
            <div key={idx} className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-degree">{edu.degree}</h3>
                  <div className="timeline-institution">{edu.institution}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="badge badge-cyan">
                    <Calendar size={12} />
                    <span>{edu.period}</span>
                  </span>
                  <span className="badge badge-emerald">
                    {edu.status}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '10px' }}>
                {edu.summary}
              </p>
            </div>
          ))}

          {/* Relevant Core Coursework */}
          <div
            style={{
              background: 'var(--bg-surface-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '18px',
              padding: '28px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <BookOpen size={18} color="#38bdf8" />
              <h3 style={{ fontSize: '1.15rem', color: '#ffffff' }}>
                Relevant Academic Coursework
              </h3>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Core subjects studied across BCA and MCA that establish foundational CS logic and systems understanding:
            </p>

            <div className="coursework-grid">
              {relevantCoursework.map((course, i) => (
                <div key={i} className="course-chip">
                  <CheckCircle size={13} color="#38bdf8" style={{ display: 'inline', marginRight: '6px' }} />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
