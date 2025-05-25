import React from 'react';
import { Helmet } from 'react-helmet';
import MissionStatement from '../components/about/MissionStatement';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About SolRat | Vision and Mission</title>
        <meta name="description" content="Learn about SolRat's mission, vision, and the symbolism behind our project." />
      </Helmet>
      
      <div className="pt-20">
        <MissionStatement />
      </div>
    </>
  );
};

export default About;