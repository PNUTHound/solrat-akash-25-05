import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Rocket, Target } from 'lucide-react';
import Container from '../shared/Container';
import AnimatedSection from '../shared/AnimatedSection';
import Button from '../shared/Button';

const CryptoIndustrySection: React.FC = () => {
  const stats = [
    {
      value: '500M+',
      label: 'Daily Solana Transactions'
    },
    {
      value: '$75B+',
      label: 'Total Value Locked in DeFi'
    },
    {
      value: '11.5M+',
      label: 'Active Crypto Wallets'
    },
    {
      value: '$23B+',
      label: 'Meme Coin Market Cap'
    }
  ];

  const features = [
    {
      icon: <TrendingUp size={24} className="text-accent" />,
      title: 'Growing Market',
      description: 'The meme coin sector has seen exponential growth, with new projects gaining massive traction.'
    },
    {
      icon: <Users size={24} className="text-accent" />,
      title: 'Community Power',
      description: 'Strong communities drive successful meme coins, and SolRat is building one of the strongest.'
    },
    {
      icon: <Rocket size={24} className="text-accent" />,
      title: 'Innovation Leader',
      description: 'We\'re pushing boundaries by combining meme culture with real utility and governance.'
    },
    {
      icon: <Target size={24} className="text-accent" />,
      title: 'Clear Vision',
      description: 'Our roadmap focuses on sustainable growth and long-term value creation.'
    }
  ];

  return (
    <section className="section-padding relative">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            The Future of <span className="gradient-text">Crypto</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            How SolRat is revolutionizing the meme coin landscape on Solana.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <AnimatedSection 
              key={index}
              delay={0.1 * index}
            >
              <motion.div 
                className="glassmorphism rounded-xl p-6 text-center"
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(var(--color-primary), 0.2)' }}
              >
                <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </h3>
                <p className="text-text-muted">{stat.label}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text">
                Meme Culture in <span className="gradient-text">Crypto</span>
              </h3>
              <p className="text-lg text-text-muted">
                Meme coins have evolved from simple jokes to powerful communities 
                driving real innovation in the crypto space. Solana's high-speed, 
                low-cost infrastructure has become the perfect platform for the next 
                generation of meme coins.
              </p>
              <p className="text-lg text-text-muted">
                SolRat combines the viral nature of meme coins with genuine utility, 
                creating a project that's both fun and functional. Our community-driven 
                approach ensures that every holder has a voice in shaping the future 
                of the project.
              </p>
              <Button 
                href="https://pump.fun" 
                variant="primary" 
                externalLink
              >
                Join the Revolution
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="glassmorphism rounded-xl p-4"
                  whileHover={{ y: -3, boxShadow: '0 10px 30px rgba(var(--color-primary), 0.2)' }}
                >
                  <div className="flex items-center mb-3">
                    {feature.icon}
                    <h4 className="text-lg font-bold ml-2 text-text">{feature.title}</h4>
                  </div>
                  <p className="text-text-muted text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="text-center">
          <div className="glassmorphism rounded-xl p-8 border border-accent/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text">
              Why <span className="gradient-text">SolRat</span> Will Win
            </h3>
            <p className="text-lg text-text-muted mb-6 max-w-2xl mx-auto">
              With our unique combination of meme appeal, real utility, and strong 
              community governance, SolRat is positioned to become a leading force 
              in the Solana ecosystem. Join us as we redefine what's possible in 
              the world of meme coins.
            </p>
            <Button 
              to="/about" 
              variant="outline"
            >
              Learn More About Our Vision
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default CryptoIndustrySection;