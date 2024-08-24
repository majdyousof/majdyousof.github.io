import React from 'react';

type SubSectionProps = {
  title: string;
  children: React.ReactNode;
};

const SubSection: React.FC<SubSectionProps> = ({ title, children }) => {
  return (
    <section>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default SubSection;
