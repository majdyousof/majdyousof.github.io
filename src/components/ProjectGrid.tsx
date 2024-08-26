import React, { useState } from 'react';
import Select from 'react-select';
import '../styling/ProjectGrid.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: string; //TODO: Change to enum
  link?: string;
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const technologyOptions = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  )
    .sort()
    .map((tech) => ({ value: tech, label: tech }));

  const statusOptions = [
    { value: 'WIP', label: 'WIP' },
    { value: 'Done', label: 'Done' },
    { value: 'Unfinished', label: 'Unfinished' },
  ];

  const handleTechChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option: any) => option.value)
      : [];
    setSelectedTechs(selectedValues);
  };

  const handleStatusChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option: any) => option.value)
      : [];
    setSelectedStatuses(selectedValues);
  };

  const handleChipRemove = (tech: string) => {
    setSelectedTechs((prevSelectedTechs) =>
      prevSelectedTechs.filter((t) => t !== tech)
    );
  };

  const handleTagClick = (tech: string) => {
    setSelectedTechs((prevSelectedTechs) => {
      if (prevSelectedTechs.includes(tech)) {
        return prevSelectedTechs.filter((t) => t !== tech);
      } else {
        return [...prevSelectedTechs, tech];
      }
    });
  };

  const filteredProjects = projects.filter((project) => {
    const isTechMatch =
      selectedTechs.length === 0 ||
      selectedTechs.every((tech) => project.technologies.includes(tech));
    const isStatusMatch =
      selectedStatuses.length === 0 ||
      selectedStatuses.includes(project.status);
    return isTechMatch && isStatusMatch;
  });

  return (
    <div>
      <div className="filter-container">
        <div className="filter-select">
          <label htmlFor="tech-filter">Filter by technology: </label>
          <Select
            id="tech-filter"
            options={technologyOptions}
            isMulti
            value={technologyOptions.filter((option) =>
              selectedTechs.includes(option.value)
            )}
            onChange={handleTechChange}
            placeholder="Select technologies..."
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
        <div className="filter-select">
          <label htmlFor="status-filter">Filter by status: </label>
          <Select
            id="status-filter"
            options={statusOptions}
            isMulti
            value={statusOptions.filter((option) =>
              selectedStatuses.includes(option.value)
            )}
            onChange={handleStatusChange}
            placeholder="Select statuses..."
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
      </div>

      <div className="selected-chips">
        {selectedTechs.map((tech, index) => (
          <div
            key={index}
            className="chip"
            onClick={() => handleChipRemove(tech)}
          >
            {tech} &times;
          </div>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${project.link ? 'has-link' : ''}`}
          >
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h3>{project.title}</h3>
              </a>
            ) : (
              <h3>{project.title}</h3>
            )}
            <p>{project.description}</p>
            <div className="status-wrapper">
              <div
                className={`status status-${project.status
                  .replace(/\s+/g, '-')
                  .toLowerCase()}`}
              >
                Status: {project.status}
              </div>
            </div>
            <div className="tags">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className={`tag ${
                    selectedTechs.includes(tech) ? 'selected' : ''
                  }`}
                  onClick={() => handleTagClick(tech)}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
