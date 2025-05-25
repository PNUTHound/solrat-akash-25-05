import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Container from '../shared/Container';
import AnimatedSection from '../shared/AnimatedSection';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Crypto Analyst',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      content: 'SolRat is bringing fresh energy to the Solana ecosystem. Their innovative approach to community governance and tokenomics sets them apart.'
    },
    {
      name: 'Sarah Chen',
      role: 'DeFi Researcher',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      content: 'The team behind SolRat has a clear vision for the future of decentralized finance. Their focus on user experience and community engagement is impressive.'
    },
    {
      name: 'Michael Roberts',
      role: 'Blockchain Developer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      content: 'As a developer in the Solana ecosystem, I\'m excited about SolRat\'s technical roadmap. Their planned features could be game-changing.'
    }
  ];

  return (
    <section className="section-padding relative">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What People Say About <span className="gradient-text">SolRat</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Hear from experts in the crypto industry about our project.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={index}
              delay={0.1 * index}
            >
              <motion.div 
                className="glassmorphism rounded-xl p-6 h-full hover:border-primary/40 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(108, 0, 255, 0.2)' }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-accent">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      size={16}
                      className="text-accent fill-accent"
                    />
                  ))}
                </div>
                
                <p className="text-white/70 italic">"{testimonial.content}"</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;