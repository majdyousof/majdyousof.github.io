import React from 'react';
import Footer from '../components/Footer';
import ListControls from '../components/ListControls';
import NavBar from '../components/NavBar';
import PageMeta from '../components/PageMeta';
import ProjectGrid from '../components/ProjectGrid';
import { projects } from '../data/projects';
import { dateSortOptions, useFilteredList } from '../hooks/useFilteredList';
import '../styling/App.css';

const Projects: React.FC = () => {
  const { items: visibleProjects, ...controls } = useFilteredList(
    projects,
    dateSortOptions,
    'newest'
  );

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
          <ListControls {...controls} />
          <ProjectGrid projects={visibleProjects} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
