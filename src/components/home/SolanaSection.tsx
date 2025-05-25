import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Clock, Coins } from 'lucide-react';
import Container from '../shared/Container';
import AnimatedSection from '../shared/AnimatedSection';
import Button from '../shared/Button';

const SolanaSection: React.FC = () => {
  const features = [
    {
      icon: <Zap size={24} className="text-accent" />,
      title: 'Lightning Fast',
      description: 'Process up to 65,000 transactions per second with sub-second finality.'
    },
    {
      icon: <Shield size={24} className="text-accent" />,
      title: 'Secure & Reliable',
      description: 'Built on proof-of-stake consensus with military-grade encryption.'
    },
    {
      icon: <Clock size={24} className="text-accent" />,
      title: 'Low Latency',
      description: 'Average transaction time of 400 milliseconds.'
    },
    {
      icon: <Coins size={24} className="text-accent" />,
      title: 'Cost Effective',
      description: 'Transaction fees as low as $0.00025, making micro-transactions viable.'
    }
  ];

  return (
    <section className="section-padding relative">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Built on <span className="gradient-text">Solana</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Experience the power of the fastest blockchain in the world.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index}
              delay={0.1 * index}
            >
              <motion.div 
                className="glassmorphism rounded-xl p-6 h-full hover:border-primary/40 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(108, 0, 255, 0.2)' }}
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold ml-3">{feature.title}</h3>
                </div>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img 
              src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg"
              alt="Solana Ecosystem"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Why <span className="gradient-text">Solana</span>?
            </h3>
            <div className="space-y-4 text-lg text-white/70">
              <p>
                Solana is revolutionizing the blockchain space with its high-performance, 
                low-cost infrastructure that enables the next generation of decentralized applications.
              </p>
              <p>
                With its unique proof-of-history consensus mechanism and parallel processing 
                capabilities, Solana can handle thousands of transactions per second while 
                maintaining decentralization.
              </p>
              <p>
                This makes it the perfect blockchain for SolRat to build its ecosystem, 
                ensuring our community gets the best possible experience with minimal fees 
                and maximum efficiency.
              </p>
            </div>
            
            <Button 
              href="https://solana.com" 
              variant="primary" 
              externalLink
              className="mt-8"
            >
              Learn More About Solana
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default SolanaSection;