import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Activity, Settings, Layers, Clock, Users, Shield, Globe } from 'lucide-react';
import Container from '../shared/Container';
import AnimatedSection from '../shared/AnimatedSection';
import Button from '../shared/Button';

const GovernanceCards: React.FC = () => {
  const governanceFeatures = [
    {
      icon: <BarChart size={24} className="text-accent" />,
      title: 'On-Chain Voting',
      description: 'Transparent and verifiable voting on all protocol decisions.'
    },
    {
      icon: <Activity size={24} className="text-accent" />,
      title: 'Proposal System',
      description: 'Any token holder can submit proposals for community consideration.'
    },
    {
      icon: <Settings size={24} className="text-accent" />,
      title: 'Parameter Control',
      description: 'Community governance over all protocol parameters and settings.'
    },
    {
      icon: <Layers size={24} className="text-accent" />,
      title: 'Treasury Management',
      description: 'Collective decision-making on the allocation of protocol funds.'
    }
  ];
  
  const votingMechanisms = [
    {
      icon: <Clock size={24} className="text-primary" />,
      title: 'Time-Weighted Voting',
      description: 'Voting power increases the longer you hold your tokens, encouraging long-term investment.'
    },
    {
      icon: <Users size={24} className="text-primary" />,
      title: 'Delegation System',
      description: 'Delegate your voting power to trusted community members if you cannot participate directly.'
    },
    {
      icon: <Shield size={24} className="text-primary" />,
      title: 'Security Measures',
      description: 'Multi-signature requirements and time-locks for critical protocol changes.'
    },
    {
      icon: <Globe size={24} className="text-primary" />,
      title: 'Cross-Chain Governance',
      description: 'Future expansion to enable governance across multiple blockchains.'
    }
  ];

  return (
    <section className="section-padding relative">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">DAO Governance</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            SolRat is governed by its community through a decentralized autonomous organization.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {governanceFeatures.map((feature, index) => (
            <AnimatedSection 
              key={index} 
              delay={0.1 * index}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <motion.div 
                className="glassmorphism rounded-xl p-6 h-full hover:border-primary/40 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(108, 0, 255, 0.2)' }}
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold ml-3 gradient-text">{feature.title}</h3>
                </div>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection className="mb-16">
          <div className="glassmorphism rounded-xl p-8 border-l-4 border-accent">
            <h3 className="text-2xl font-bold gradient-text mb-4">How Our DAO Works</h3>
            
            <div className="space-y-6">
              <div className="bg-secondary/60 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-accent mb-3">1. Proposal Submission</h4>
                <p className="text-white/70">
                  Any holder of at least 10,000 $SOLRAT tokens can submit a proposal to the DAO. Proposals can range from protocol upgrades to treasury allocations and partnership initiatives.
                </p>
              </div>
              
              <div className="bg-secondary/60 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-accent mb-3">2. Discussion Period</h4>
                <p className="text-white/70">
                  Each proposal undergoes a 3-day discussion period where community members can ask questions, suggest modifications, and signal their initial support or opposition.
                </p>
              </div>
              
              <div className="bg-secondary/60 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-accent mb-3">3. Voting Phase</h4>
                <p className="text-white/70">
                  After the discussion period, proposals enter a 5-day voting phase. All token holders can vote with voting power proportional to their holdings and holding duration.
                </p>
              </div>
              
              <div className="bg-secondary/60 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-accent mb-3">4. Implementation</h4>
                <p className="text-white/70">
                  If a proposal reaches quorum (30% of circulating supply) and a majority vote ({'>'} 50%), it is queued for implementation by the core development team.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="mb-16">
          <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Voting Mechanisms</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {votingMechanisms.map((mechanism, index) => (
              <motion.div 
                key={index}
                className="glassmorphism rounded-xl p-6 hover:border-primary/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(108, 0, 255, 0.2)' }}
              >
                <div className="flex items-center mb-4">
                  {mechanism.icon}
                  <h4 className="text-xl font-bold ml-3">{mechanism.title}</h4>
                </div>
                <p className="text-white/70">{mechanism.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="text-center">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-8 border border-primary/30">
            <h3 className="text-2xl font-bold gradient-text mb-4">Join the SolRat DAO</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Participate in governance, shape the future of SolRat, and help build a thriving ecosystem on Solana.
            </p>
            <Button href="#" variant="primary" externalLink>
              Connect Wallet
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default GovernanceCards;