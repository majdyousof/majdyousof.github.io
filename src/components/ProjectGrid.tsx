import type { Project } from '../data/projects';
import ContentList from './ContentList';

const ProjectGrid = ({ projects }: { projects: Project[] }) => (
  <ContentList
    items={projects}
    emptyMessage="No projects match these tags."
    itemKey={(project) => project.title}
    renderTitle={(project) =>
      project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.title}
        </a>
      ) : (
        project.title
      )
    }
    renderDetail={(project) => project.status}
  />
);

export default ProjectGrid;
