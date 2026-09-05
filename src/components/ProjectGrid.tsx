import React from 'react';
import '../styling/ProjectGrid.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  link?: string;
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => (
  <>
    {projects.length === 0 ? (
      <p className="empty-state">No projects match these tags.</p>
    ) : (
      <ol className="project-list">
        {projects.map((project) => (
          <li key={project.title} className="project-entry">
            <div className="project-copy">
              <h3>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p>{project.description}</p>
            </div>
            <aside
              className="project-note"
              aria-label={`${project.title} details`}
            >
              <span>{project.status}</span>
              <span>{project.technologies.join(' · ')}</span>
            </aside>
          </li>
        ))}
      </ol>
    )}
  </>
);

export default ProjectGrid;
