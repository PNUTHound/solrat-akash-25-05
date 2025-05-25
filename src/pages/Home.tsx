import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import SolanaSection from '../components/home/SolanaSection';
import TestimonialSection from '../components/home/TestimonialSection';
import CryptoIndustrySection from '../components/home/CryptoIndustrySection';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SolRat - Small but mighty in the Solana ecosystem</title>
        <meta name="description" content="SolRat is a revolutionary crypto project built on the Solana blockchain, combining innovative tokenomics, NFTs, and community governance." />
      </Helmet>
      
      <HeroSection />
      <IntroSection />
      <SolanaSection />
      <TestimonialSection />
      <CryptoIndustrySection />
    </>
  );
};

export default Home;