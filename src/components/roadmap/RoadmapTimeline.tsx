import React from 'react';
import { motion } from 'framer-motion';
import Container from '../shared/Container';
import AnimatedSection from '../shared/AnimatedSection';

interface RoadmapPhase {
  title: string;
  timeline: string;
  description: string;
  milestones: string[];
  completed: boolean;
}

const RoadmapTimeline: React.FC = () => {
  const phases: RoadmapPhase[] = [
    {
      title: 'Phase 1: Foundation',
      timeline: 'Q1 2025',
      description: 'Establishing the core infrastructure and community.',
      milestones: [
        'Launch SolRat token on Pump.fun',
        'Establish social media presence',
        'Build initial community',
        'Deploy website and documentation'
      ],
      completed: true
    },
    {
      title: 'Phase 2: Growth',
      timeline: 'Q2 2025',
      description: 'Expanding our ecosystem and introducing new features.',
      milestones: [
        'Launch liquidity pools',
        'Release initial NFT collection',
        'Begin staking program',
        'Expand marketing initiatives'
      ],
      completed: false
    },
    {
      title: 'Phase 3: Expansion',
      timeline: 'Q3 2025',
      description: 'Broadening our reach and capabilities.',
      milestones: [
        'Establish DAO governance',
        'Release NFT marketplace',
        'Deploy cross-chain bridge',
        'Partnerships with other Solana projects'
      ],
      completed: false
    },
    {
      title: 'Phase 4: Scaling',
      timeline: 'Q4 2025',
      description: 'Scaling operations and enhancing user experience.',
      milestones: [
        'Launch mobile application',
        'Implement advanced tokenomics',
        'Release SolRat Play-to-Earn game',
        'Major exchange listings'
      ],
      completed: false
    },
    {
      title: 'Phase 5: Dominance',
      timeline: '2026 and beyond',
      description: 'Establishing SolRat as a dominant force in the Solana ecosystem.',
      milestones: [
        'Global marketing campaigns',
        'SolRat ecosystem fund',
        'Enterprise partnerships',
        'Decentralized application platform'
      ],
      completed: false
    }
  ];

  return (
    <section className="section-padding relative">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            The journey of SolRat from concept to dominance in the Solana ecosystem.
          </p>
        </AnimatedSection>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent transform md:translate-x-[-50%] z-0"></div>
          
          {/* Timeline Items */}
          <div className="relative z-10">
            {phases.map((phase, index) => (
              <div 
                key={index} 
                className={`mb-16 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <AnimatedSection 
                  className="w-full md:w-1/2 md:px-8"
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={0.1 * index}
                >
                  <motion.div 
                    className={`glassmorphism rounded-xl p-6 border-l-4 ${
                      phase.completed ? 'border-accent' : 'border-primary'
                    }`}
                    whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(108, 0, 255, 0.2)' }}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold gradient-text">{phase.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        phase.completed 
                          ? 'bg-accent/20 text-accent' 
                          : 'bg-primary/20 text-primary-light'
                      }`}>
                        {phase.timeline}
                      </span>
                    </div>
                    
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">{phase.description}</p>
                    
                    <ul className="space-y-2">
                      {phase.milestones.map((milestone, i) => (
                        <li key={i} className="flex items-start">
                          <span className={`mr-2 mt-1 flex-shrink-0 w-4 h-4 rounded-full ${
                            phase.completed ? 'bg-accent' : 'bg-primary/50'
                          }`}></span>
                          <span className="text-text-muted max-w-2xl mx-auto">{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatedSection>
                
                <div className="hidden md:block w-full md:w-1/2"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:translate-x-[-50%] mt-6">
                  <AnimatedSection 
                    delay={0.1 * index + 0.2}
                    className={`w-8 h-8 rounded-full ${
                      phase.completed ? 'bg-accent' : 'bg-primary'
                    } flex items-center justify-center`}
                  >
                    <span className={`w-4 h-4 rounded-full ${
                      phase.completed ? 'bg-white' : 'bg-primary-light'
                    }`}></span>
                  </AnimatedSection>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RoadmapTimeline;