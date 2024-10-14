import React from 'react';
import Section from '../components/Section';
import NavBar from '../components/NavBar';
import ProjectGrid from '../components/ProjectGrid';
import '../styling/App.css';

import { projects } from '../data/projects';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="content-container">
        <Section title="Hi! I am Majd.">
          <p>
            I am currently a final year student at{' '}
            <a href="https://www.imperial.ac.uk/" className="orange">
              Imperial College London
            </a>
            . I have a keen interest in Transport Modelling and Software
            Engineering, with experience using:
          </p>
          <ul className="orange">
            <li>C# (.NET)</li>
            <li>Typescript</li>
            <li>Python</li>
            <li>MATLAB</li>
            <li>R</li>
          </ul>
          <p>
            I have gained this experience either professionally through
            internship experience and/or personal projects. I have a keen
            interest in technology, particularly related to trading, as I have
            interned as a software engineer at a trading firm this past summer.
            Additionally, I have completed an undergraduate academic research placement
            at the{' '}
            <a
              href="https://www.imperial.ac.uk/transport-engineering/transport-strategy-centre/"
              className="orange"
            >
              Transport Strategy Centre
            </a>{' '}
            at Imperial College London, specifically focussing on statistical
            modelling and analysis of transport data. I am currently working on
            a paper, so watch this space! 🚀
          </p>
          <p>
            In my free time, I enjoy fashion, going to the gym, wood carving and
            watching cat videos! 🐱
          </p>
        </Section>

        <Section title="Projects">
          <ProjectGrid projects={projects} />
        </Section>

        <Section title="Contact">
          <ul className="contact-list">
            <li>
              <a href="mailto:majdyousof@gmail.com" className="orange">
                <FaEnvelope className="social-logo" />
                Email
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/majdyousof/"
                className="orange"
              >
                <FaLinkedin className="social-logo" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/majdyousof/" className="orange">
                <FaGithub className="social-logo" />
                Github
              </a>
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default App;
