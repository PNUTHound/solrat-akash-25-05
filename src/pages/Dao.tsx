import React from 'react';
import { Helmet } from 'react-helmet';
import GovernanceCards from '../components/dao/GovernanceCards';

const Dao: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SolRat DAO | Decentralized Governance</title>
        <meta name="description" content="Learn about SolRat's decentralized autonomous organization and governance structure." />
      </Helmet>
      
      <div className="pt-20">
        <GovernanceCards />
      </div>
    </>
  );
};

export default Dao;