import React from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const MathExample: React.FC = () => {
  return (
    <div>
      <BlockMath math="\int_0^\infty x^2 dx" />
    </div>
  );
};

export default MathExample;
