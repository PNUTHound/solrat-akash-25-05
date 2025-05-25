import React from 'react';
import { Helmet } from 'react-helmet';
import TokenomicsChart from '../components/tokenomics/TokenomicsChart';

const Tokenomics: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SolRat Tokenomics | Token Distribution and Utility</title>
        <meta name="description" content="A transparent breakdown of SolRat token distribution, utility, and economics." />
      </Helmet>
      
      <div className="pt-20">
        <TokenomicsChart />
      </div>
    </>
  );
};

export default Tokenomics;