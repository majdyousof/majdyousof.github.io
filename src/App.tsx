import React from 'react';
import Section from './components/Section';
import SubSection from './components/SubSection';
import MathExample from './components/MathExample';
import NavBar from './components/NavBar';
import './styling/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="content-container">

        <Section title="Hi! I am Majd.">
          <p>
            I am currently a final year student at <a href="https://www.imperial.ac.uk/" className='orange'>Imperial College London</a>. 
            I have a keen interest in Software Engineering, with experience using:
          </p>
          <ul className='orange'>
            <li>C#</li>
            <li>Typescript</li>
            <li>Python</li>
            <li>MATLAB</li>
            <li>R</li>
          </ul>
          <p>
            I have gained this experience either professionally through internship experience and/or personal projects. I have a keen interest in financial technology, 
            particularly related to trading, as I have interned as a software engineer at a trading firm this past summer.
          </p>
          <p>In my free time, I enjoy fashion, going to the gym, wood carving and watching cat videos! 🐱 </p>
          <p>THIS PAGE IS WIP!!!!</p>
        </Section>

        <Section title="Mathematics">
          <SubSection title="Integrals">
            <p>Here is an example of an integral:</p>
            <MathExample />
            {/* Add additional MathExample components as needed */}
          </SubSection>
        </Section>

        <Section title="Conclusion">
          <p>Thanks for reading!</p>
        </Section>

      </div>
    </div>
  );
};

export default App;
