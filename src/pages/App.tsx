import React from 'react';
import Footer from '../components/Footer';
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
            Economics, Artificial Intelligence, and Computational modelling for
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
          <p className="with-sidenote">
            I have gained this experience either professionally and/or through
            personal projects. Additionally, I have completed an undergraduate
            academic research placement at Imperial College London
            <sup>
              <a
                className="sidenote-reference"
                href="#transport-note"
                id="transport-reference"
                aria-label="Read footnote 1: Transport Strategy Centre"
              >
                1
              </a>
            </sup>
            , specifically focussing on statistical modelling and analysis of
            transport data for inference and benchmarking.
            <span className="marginal-note" aria-hidden="true">
              <a
                className="sidenote-number"
                href="#transport-reference"
                aria-label="Back to reference 1"
              >
                1.
              </a>
              <a href="https://www.imperial.ac.uk/transport-engineering/transport-strategy-centre/">
                Transport Strategy Centre
              </a>
              <span>Imperial College London</span>
            </span>
          </p>
          <p>
            In my free time, I enjoy fashion, going to the gym, wood carving,
            home-labbing, and watching cat videos.
          </p>
          <ol className="home-footnotes">
            <li id="transport-note">
              <a href="https://www.imperial.ac.uk/transport-engineering/transport-strategy-centre/">
                Transport Strategy Centre
              </a>{' '}
              at Imperial College London.{' '}
              <a href="#transport-reference" aria-label="Back to reference 1">
                ↩
              </a>
            </li>
          </ol>
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
      <Footer />
    </div>
  );
};

export default App;
