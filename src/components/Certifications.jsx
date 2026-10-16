import React from 'react';
import { Award, Cloud, Users, Code, Calendar, CheckCircle2 } from 'lucide-react';
import { certificationsAndActivities } from '../data/portfolioData';

const iconMap = {
  Code: Code,
  Cloud: Cloud,
  Users: Users,
  Award: Award,
};

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Continuous Learning</span>
          </div>
          <h2 className="section-title">
            Certifications &amp; <span>Activities</span>
          </h2>
          <p className="section-description">
            Specialized technical credentials, extracurricular leadership, and competitive 
            problem-solving events.
          </p>
        </div>

        <div className="cert-activities-grid">
          {certificationsAndActivities.map((item, idx) => {
            const IconComp = iconMap[item.iconName] || Award;
            return (
              <div key={idx} className="cert-card">
                <div>
                  <div className="cert-icon-wrap">
                    <IconComp size={22} />
                  </div>
                  <h3 className="cert-title">{item.title}</h3>
                  <div className="cert-org">{item.organization}</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '14px' }}>
                  <span className="badge badge-neutral">
                    {item.type}
                  </span>
                  <span className="cert-date-badge">
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
