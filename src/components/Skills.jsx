import React from 'react';
import { 
  Code2, 
  Database, 
  Layout, 
  Cpu, 
  Terminal, 
  BookOpen, 
  Layers, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Dynamic icon mapper for categories
const iconMap = {
  Code2: Code2,
  Database: Database,
  Layout: Layout,
  Cpu: Cpu,
  Terminal: Terminal,
  BookOpen: BookOpen,
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span>Toolbox</span>
          </h2>
          <p className="section-description">
            Categorized overview of the technologies, databases, and frameworks I use to build 
            practical software. Displayed transparently based on actual project implementations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="skills-grid">
          {skillCategories.map((category) => {
            const IconComponent = iconMap[category.iconName] || Code2;

            return (
              <div key={category.id} className="skill-category-card">
                <div className="skill-category-header">
                  <div className="skill-cat-icon">
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <h3 className="skill-cat-title">{category.title}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="skills-pills-wrap">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className={`skill-chip ${skill.isBasic ? 'basic-tag' : ''}`}
                      title={`${skill.name}: ${skill.level}`}
                    >
                      <span style={{ color: skill.isBasic ? 'var(--text-light)' : '#ffffff' }}>
                        {skill.name}
                      </span>
                      <span className="skill-chip-level">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Transparency Note for Recruiters */}
        <div
          style={{
            marginTop: '36px',
            padding: '16px 20px',
            background: 'rgba(56, 189, 248, 0.05)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: '780px',
            margin: '36px auto 0 auto',
          }}
        >
          <CheckCircle size={20} color="#38bdf8" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
            <strong>Recruiter Transparency Guarantee:</strong> I avoid fabricated proficiency percentages (e.g., "95% Python"). 
            The skills listed above reflect actual hands-on project work, academic coursework at Chetan Business School, 
            and working codebases. React.js is marked as foundational/basic.
          </p>
        </div>
      </div>
    </section>
  );
}
