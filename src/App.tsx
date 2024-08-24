import React from 'react';
import Section from './components/Section';
import SubSection from './components/SubSection';
import MathExample from './components/MathExample';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Section title="Introduction">
        <p>This is a sample React app that mimics the appearance of a LaTeX document.</p>
      </Section>

      <Section title="Mathematics">
        <SubSection title="Integrals">
          <p>Here is an example of an integral:</p>
          <MathExample />
        </SubSection>
      </Section>
    </div>
  );
};

export default App;
