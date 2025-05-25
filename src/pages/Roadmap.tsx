import React from 'react';
import { Helmet } from 'react-helmet';
import RoadmapTimeline from '../components/roadmap/RoadmapTimeline';

const Roadmap: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SolRat Roadmap | Future Development Plans</title>
        <meta name="description" content="Explore SolRat's comprehensive roadmap and future development plans." />
      </Helmet>
      
      <div className="pt-20">
        <RoadmapTimeline />
      </div>
    </>
  );
};

export default Roadmap;