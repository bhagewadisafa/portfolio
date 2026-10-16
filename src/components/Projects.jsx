import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Info, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Practical Implementations</span>
          </div>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
          <p className="section-description">
            Selected full-stack and machine learning applications built to solve practical administrative, 
            inventory, and discovery challenges with clean architecture.
          </p>
        </div>

        {/* Projects List */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Left Column: UI Mockup Preview */}
              <div className="project-preview-wrap">
                <span className="project-type-tag">
                  {project.category}
                </span>
                <img
                  src={project.image}
                  alt={`${project.title} Interface Preview`}
                  className="project-img"
                  loading="lazy"
                />
              </div>

              {/* Right Column: Structured Context */}
              <div className="project-content">
                <div>
                  <div className="project-title">
                    <span>{project.title}</span>
                  </div>

                  <div className="project-summary-block">
                    <div className="project-info-row">
                      <strong>Problem:</strong> {project.problem}
                    </div>
                    <div className="project-info-row">
                      <strong>Solution:</strong> {project.implementation}
                    </div>
                    <div className="project-info-row">
                      <strong>Value:</strong> {project.value}
                    </div>
                  </div>

                  {/* Key Features Chips */}
                  <div className="project-features-pills">
                    {project.features.slice(0, 4).map((feature, i) => (
                      <span key={i} className="feature-pill">
                        <CheckCircle2 size={12} color="#38bdf8" />
                        <span>{feature}</span>
                      </span>
                    ))}
                    {project.features.length > 4 && (
                      <span className="feature-pill" style={{ color: 'var(--accent-cyan)' }}>
                        +{project.features.length - 4} more features
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Tech Bar & Buttons */}
                <div>
                  <div className="project-tech-bar">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View full architecture and details for ${project.title}`}
                    >
                      <Info size={15} />
                      <span>Architecture &amp; Details</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      aria-label={`View source code for ${project.title} on GitHub`}
                    >
                      <Github size={15} />
                      <span>View Source Code</span>
                      <ArrowUpRight size={13} style={{ opacity: 0.7 }} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Project Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
