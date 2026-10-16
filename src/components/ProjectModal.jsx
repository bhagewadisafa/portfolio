import React, { useEffect } from 'react';
import { X, ArrowRight, ExternalLink, Cpu, CheckCircle2, Server, Database, Sparkles } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div className="badge badge-cyan" style={{ marginBottom: '6px' }}>
              {project.category}
            </div>
            <h3 className="modal-title">{project.title}</h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close project modal"
            style={{ cursor: 'pointer', zIndex: 20 }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Architecture Flow Diagram */}
          <div className="diagram-container">
            <div className="diagram-header">
              <Cpu size={16} />
              <span>{project.architecture.title}</span>
            </div>

            <div className="arch-flow-flex">
              {project.architecture.nodes.map((node, index) => (
                <React.Fragment key={index}>
                  <div className="arch-node">
                    <div className="arch-node-name">{node.name}</div>
                    <div className="arch-node-desc">{node.desc}</div>
                  </div>
                  {index < project.architecture.nodes.length - 1 && (
                    <div className="arch-arrow">
                      <ArrowRight size={18} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Detailed Problem & Implementation */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '8px' }}>
              The Problem Addressed
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              {project.problem}
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '8px' }}>
              Technical Implementation
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              {project.implementation}
            </p>
          </div>

          {/* Recommendation Logic if present */}
          {project.recommendationLogic && (
            <div
              style={{
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: '12px',
                padding: '18px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Sparkles size={18} color="#38bdf8" />
                <h4 style={{ fontSize: '1rem', color: '#38bdf8', margin: 0 }}>
                  Recommendation Math &amp; Logic
                </h4>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: '1.65', margin: 0 }}>
                {project.recommendationLogic}
              </p>
            </div>
          )}

          {/* Key Features List */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '12px' }}>
              Key Application Features
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
              {project.features.map((feat, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <CheckCircle2 size={16} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '10px' }}>
              Technologies &amp; Libraries Used
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border-subtle)',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Source code hosted on Safa's verified GitHub profile
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <Github size={16} />
                <span>View Source on GitHub</span>
              </a>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
