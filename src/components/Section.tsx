import React from 'react';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <h2><b>{title}</b></h2>
      {children}
    </section>
  );
};

export default Section;
