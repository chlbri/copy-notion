import React, { FC } from 'react';
import CTA from './CTA';

const Hero: FC = () => {
  return (
    <div id="hero" className="space-y-2">
      <p className="text-xl font-light">
        Write, plan, collaborate and get organized. Notion is all you need
      </p>
      <CTA />
      <p className="text-gray-600 text-sm">
        For teams and indivduals - web, mobile, Mac, Windows
      </p>
    </div>
  );
};

export default Hero;
