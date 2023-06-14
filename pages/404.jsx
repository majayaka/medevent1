import React from 'react';
import Hero from '../components/Hero';


const Custom404 = () => {
  return (
    <div>
      <Hero is404Page={true}/>
    </div>
  );
};

export default Custom404;
