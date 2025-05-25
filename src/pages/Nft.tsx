import React from 'react';
import { Helmet } from 'react-helmet';
import NFTGallery from '../components/nft/NFTGallery';

const Nft: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SolRat NFT Collection | Digital Collectibles</title>
        <meta name="description" content="Explore SolRat's exclusive NFT collection with real utility in our ecosystem." />
      </Helmet>
      
      <div className="pt-20">
        <NFTGallery />
      </div>
    </>
  );
};

export default Nft;