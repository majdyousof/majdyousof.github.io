import React from 'react';
import Section from '../components/Section';
import NavBar from '../components/NavBar';
import PageMeta from '../components/PageMeta';
import '../styling/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <PageMeta description="Personal website of Majd Yousof, a developer interested in statistics, economics, and computational modelling." />
      <NavBar />
      <main className="content-container">
        <Section title="About Me">
          <p>
            I am currently a Developer at <span>Maven Securities</span>,
            currently working in Options Market Making Strategy having completed
            a rotation in AI Engineering. I have a keen interest in Statistics,
            Economics, Artificial Intelligence, Computational modelling for
            social good, with experience using:
          </p>
          <ul className="skills">
            <li>C++</li>
            <li>C# (.NET)</li>
            <li>Typescript</li>
            <li>Python</li>
            <li>MATLAB</li>
            <li>R</li>
          </ul>
          <p>
            I have gained this experience either professionally and/or through
            personal projects. Additionally, I have completed an undergraduate
            academic research placement at the{' '}
            <a href="https://www.imperial.ac.uk/transport-engineering/transport-strategy-centre/">
              Transport Strategy Centre
            </a>{' '}
            at Imperial College London, specifically focussing on statistical
            modelling and analysis of transport data. I am currently working on
            a paper, so watch this space!
          </p>
          <p>
            In my free time, I enjoy fashion, going to the gym, wood carving and
            watching cat videos.
          </p>
        </Section>
        <Section title="Contact">
          <ul className="contact-list">
            <li>
              <a href="https://www.linkedin.com/in/majdyousof/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/majdyousof/">GitHub</a>
            </li>
          </ul>
        </Section>
      </main>
    </div>
  );
};

export default App;
