import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../shared/Container';
import AnimatedSection from '../shared/AnimatedSection';
import Button from '../shared/Button';

const IntroSection: React.FC = () => {
  const features = [
    {
      title: 'Community Driven',
      description: 'Built by the community, for the community. SolRat puts governance in your hands.'
    },
    {
      title: 'Lightning Fast',
      description: 'Leveraging Solana\'s high-speed blockchain for instant transactions with minimal fees.'
    },
    {
      title: 'NFT Integration',
      description: 'Exclusive NFT collections with real utility in the SolRat ecosystem.'
    },
    {
      title: 'DAO Governance',
      description: 'True decentralization through community voting and transparent development.'
    }
  ];

  return (
    <section className="section-padding relative">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            A <span className="gradient-text">Revolutionary</span> Solana Project
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            SolRat combines innovative tokenomics, community governance, and NFT utility to create a comprehensive ecosystem on the Solana blockchain.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index} 
              delay={0.1 * index} 
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <motion.div 
                className="glassmorphism rounded-xl p-6 h-full hover:border-primary/40 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(108, 0, 255, 0.2)' }}
              >
                <h3 className="text-xl font-bold mb-3 gradient-text">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection className="text-center mt-12">
          <Button to="/about" className="inline-flex items-center gap-2">
            Discover More <ArrowRight size={16} />
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default IntroSection;