import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import PageMeta from '../components/PageMeta';
import ProjectGrid from '../components/ProjectGrid';
import TagFilter from '../components/TagFilter';
import { projects } from '../data/projects';
import '../styling/App.css';

const Projects: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const tags = [
    ...new Set(projects.flatMap((project) => project.technologies)),
  ].sort();
  const visibleProjects = selectedTags.length
    ? projects.filter((project) =>
        selectedTags.some((tag) => project.technologies.includes(tag))
      )
    : projects;

  return (
    <div className="App">
      <NavBar />
      <PageMeta
        title="Projects"
        description="Technical and research projects by Majd Yousof."
      />
      <main className="content-container">
        <section>
          <h1>Projects</h1>
          <p>A selection of technical and research projects.</p>
          <TagFilter
            tags={tags}
            selectedTags={selectedTags}
            onChange={setSelectedTags}
          />
          <ProjectGrid projects={visibleProjects} />
        </section>
      </main>
    </div>
  );
};

export default Projects;
