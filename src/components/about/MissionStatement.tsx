import React from 'react';
import { motion } from 'framer-motion';
import Container from '../shared/Container';
import AnimatedSection from '../shared/AnimatedSection';
import RatMascot from '../shared/RatMascot';

const MissionStatement: React.FC = () => {
  const ratSymbolism = [
    {
      title: 'Resilience',
      description: 'Like rats that adapt to any environment, SolRat thrives in all market conditions.'
    },
    {
      title: 'Intelligence',
      description: 'Rats are among the smartest animals, and SolRat leverages cutting-edge blockchain technology.'
    },
    {
      title: 'Community',
      description: 'Rats are social creatures that work together, just like our dedicated community.'
    },
    {
      title: 'Adaptability',
      description: 'Quick to adapt to changing environments, SolRat evolves with the crypto landscape.'
    }
  ];

  return (
    <section className="section-padding relative">
      <div className="bg-background text-white dark:bg-white dark:text-black">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <AnimatedSection className="w-full lg:w-1/2" direction="left">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              
              <p className="text-lg text-white/80 mb-6">
                SolRat aims to revolutionize the Solana ecosystem by creating a fully decentralized, 
                community-driven platform that empowers users with innovative financial tools, NFT utility, 
                and governance mechanisms.
              </p>
              
              <p className="text-lg text-white/80 mb-6">
                We are building a comprehensive ecosystem where token holders have real power, 
                where transactions are lightning-fast, and where the community decides the future 
                of the project through transparent DAO governance.
              </p>
              
              <p className="text-lg text-white/80">
                By combining the best aspects of DeFi, NFTs, and community governance, 
                SolRat is positioned to become a cornerstone of the Solana blockchain.
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="w-full lg:w-1/2 flex justify-center" direction="right">
              <img 
                src="../../../public/profile_image.jpg"
                alt="Crypto Trading"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </AnimatedSection>
          </div>
          
          <div className="mt-20">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                The <span className="gradient-text">Symbolism</span> of the Rat
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                The rat symbolizes important qualities that are core to our project's philosophy.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ratSymbolism.map((item, index) => (
                <AnimatedSection 
                  key={index} 
                  delay={0.1 * index}
                >
                  <motion.div 
                    className="glassmorphism rounded-xl p-6 h-full hover:border-primary/40 transition-all duration-300"
                    whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(108, 0, 255, 0.2)' }}
                  >
                    <h3 className="text-xl font-bold mb-3 gradient-text">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default MissionStatement;