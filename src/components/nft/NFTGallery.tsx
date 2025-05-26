import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import Container from '../shared/Container';
import AnimatedSection from '../shared/AnimatedSection';
import Button from '../shared/Button';
import NFTModal from './NFTModal';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface NFT {
  id: number;
  name: string;
  image: string;
  rarity: string;
  traits: string[];
}

const NFTGallery: React.FC = () => {
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);
  const [nfts, setNfts] = useState<NFT[]>([
    {
      id: 1,
      name: 'Cyber Rat #001',
      image: 'https://wxdvyyxizkynrektzvfx.supabase.co/storage/v1/object/sign/website/May%2025,%202025,%2010_03_10%20AM.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBhMjc5OTA0LWQ0MTItNDdlZi04MWVlLWZmNDQxZGU2MGRkMyJ9.eyJ1cmwiOiJ3ZWJzaXRlL01heSAyNSwgMjAyNSwgMTBfMDNfMTAgQU0ucG5nIiwiaWF0IjoxNzQ4MTg1Nzc2LCJleHAiOjE3Nzk3MjE3NzZ9.thqKmTrX2gLpkcuxcDvu-PEsQWt1_OAa8iJRSrCAf4E',
      rarity: 'Legendary',
      traits: ['Laser Eyes', 'Cybernetic Implants', 'Holographic Aura']
    },
    {
      id: 2,
      name: 'Space Rat #042',
      image: 'https://wxdvyyxizkynrektzvfx.supabase.co/storage/v1/object/sign/nft/ChatGPT%20Image%20May%2025,%202025,%2010_26_26%20AM.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBhMjc5OTA0LWQ0MTItNDdlZi04MWVlLWZmNDQxZGU2MGRkMyJ9.eyJ1cmwiOiJuZnQvQ2hhdEdQVCBJbWFnZSBNYXkgMjUsIDIwMjUsIDEwXzI2XzI2IEFNLnBuZyIsImlhdCI6MTc0ODE5MjgxNywiZXhwIjoxNzc5NzI4ODE3fQ.LqW6w03noKyb36uAR3Z2R_X6NyX2_rUXUtT8Z6Ir4u4',
      rarity: 'Epic',
      traits: ['Space Helmet', 'Lunar Boots', 'Cosmic Trail']
    },
    {
      id: 3,
      name: 'Hacker Rat #189',
      image: 'https://wxdvyyxizkynrektzvfx.supabase.co/storage/v1/object/sign/nft/ChatGPT%20Image%20May%2025,%202025,%2010_29_23%20AM.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBhMjc5OTA0LWQ0MTItNDdlZi04MWVlLWZmNDQxZGU2MGRkMyJ9.eyJ1cmwiOiJuZnQvQ2hhdEdQVCBJbWFnZSBNYXkgMjUsIDIwMjUsIDEwXzI5XzIzIEFNLnBuZyIsImlhdCI6MTc0ODE5Mjc4NSwiZXhwIjoxNzc5NzI4Nzg1fQ.hg1G1pZmht2pNUnFSbYqupJawFy9Qwr4WSx0r9tNJvs',
      rarity: 'Rare',
      traits: ['VR Headset', 'Mechanical Keyboard', 'Digital Aura']
    },
    {
      id: 4,
      name: 'Steampunk Rat #237',
      image: 'https://wxdvyyxizkynrektzvfx.supabase.co/storage/v1/object/sign/nft/ChatGPT%20Image%20May%2025,%202025,%2010_34_08%20AM.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBhMjc5OTA0LWQ0MTItNDdlZi04MWVlLWZmNDQxZGU2MGRkMyJ9.eyJ1cmwiOiJuZnQvQ2hhdEdQVCBJbWFnZSBNYXkgMjUsIDIwMjUsIDEwXzM0XzA4IEFNLnBuZyIsImlhdCI6MTc0ODE5Mjc1MCwiZXhwIjoxNzc5NzI4NzUwfQ.HQ8vG59869S3aA-2zgQTWEmia2GQnhNYMS0bwag2yjI',
      rarity: 'Epic',
      traits: ['Brass Goggles', 'Mechanical Arm', 'Steam Jetpack']
    },
    {
      id: 5,
      name: 'Warrior Rat #422',
      image: 'https://wxdvyyxizkynrektzvfx.supabase.co/storage/v1/object/sign/nft/ChatGPT%20Image%20May%2025,%202025,%2010_37_15%20AM.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBhMjc5OTA0LWQ0MTItNDdlZi04MWVlLWZmNDQxZGU2MGRkMyJ9.eyJ1cmwiOiJuZnQvQ2hhdEdQVCBJbWFnZSBNYXkgMjUsIDIwMjUsIDEwXzM3XzE1IEFNLnBuZyIsImlhdCI6MTc0ODE5MjcwNiwiZXhwIjoxNzc5NzI4NzA2fQ.hAJt76A6FUQauJfrm-EWcsPW4y103-cwouhlvCDgMdE',
      rarity: 'Uncommon',
      traits: ['Battle Armor', 'Energy Sword', 'War Paint']
    },
    {
      id: 6,
      name: 'Neon Rat #513',
      image: 'https://wxdvyyxizkynrektzvfx.supabase.co/storage/v1/object/sign/nft/ChatGPT%20Image%20May%2025,%202025,%2011_05_33%20AM.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBhMjc5OTA0LWQ0MTItNDdlZi04MWVlLWZmNDQxZGU2MGRkMyJ9.eyJ1cmwiOiJuZnQvQ2hhdEdQVCBJbWFnZSBNYXkgMjUsIDIwMjUsIDExXzA1XzMzIEFNLnBuZyIsImlhdCI6MTc0ODE5MjY2OCwiZXhwIjoxNzc5NzI4NjY4fQ.qqjTnFxx_NcciQXsg3NHL61Y8XaMozYdkh4dgGQsRYY',
      rarity: 'Rare',
      traits: ['Neon Outline', 'Holographic Visor', 'Synthwave Background']
    }
  ]);

  useEffect(() => {
    const fetchNFTs = async () => {
      const { data, error } = await supabase
        .from('nfts')
        .select('*');
      
      if (error) {
        console.error('Error fetching NFTs:', error);
        return;
      }
      
      if (data && data.length > 0) {
        setNfts(data);
      }
    };
    
    fetchNFTs();
  }, []);

  const rarityColors = {
    'Legendary': 'text-amber-400',
    'Epic': 'text-purple-400',
    'Rare': 'text-blue-400',
    'Uncommon': 'text-green-400',
    'Common': 'text-gray-400'
  };

  const utilityItems = [
    {
      title: 'Staking Boosts',
      description: 'Holding SolRat NFTs increases your staking rewards by up to 50%.'
    },
    {
      title: 'Exclusive Access',
      description: 'NFT holders get early access to new features and token launches.'
    },
    {
      title: 'Governance Power',
      description: 'Rare NFTs grant additional voting power in the SolRat DAO.'
    },
    {
      title: 'Play-to-Earn',
      description: 'Use your NFTs in our upcoming P2E game to earn $SOLRAT tokens.'
    }
  ];

  return (
    <section className="section-padding relative">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            SolRat <span className="gradient-text">NFT Collection</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Exclusive digital collectibles with real utility in the SolRat ecosystem.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {nfts.map((nft, index) => (
            <AnimatedSection 
              key={nft.id} 
              delay={0.1 * index}
            >
              <motion.div 
                className="glassmorphism rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300"
                whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(108, 0, 255, 0.3)' }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={nft.image} 
                    alt={nft.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-0 right-0 m-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${rarityColors[nft.rarity as keyof typeof rarityColors]}`}>
                      {nft.rarity}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{nft.name}</h3>
                  
                  <div className="mb-4">
                    <p className="text-sm text-text-muted max-w-2xl mx-auto">Traits:</p>
                    <div className="flex flex-wrap gap-2">
                      {nft.traits.map((trait, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary-light"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedNFT(nft)}
                    className="block w-full text-center py-2 rounded-lg bg-accent/20 text-accent hover:bg-accent/30 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection className="mb-16 text-center">
          <Button href="#" variant="primary" externalLink>
            View Full Collection
          </Button>
        </AnimatedSection>
        
        <AnimatedSection className="glassmorphism rounded-xl p-8" direction="up">
          <h3 className="text-2xl font-bold gradient-text mb-6 text-center">NFT Utility</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {utilityItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-secondary/60 rounded-xl p-6 hover:bg-secondary/80 transition-colors"
              >
                <h4 className="text-xl font-semibold text-accent mb-3">{item.title}</h4>
                <p className="text-text-muted max-w-2xl mx-auto">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-primary/10 rounded-xl p-6 border-l-4 border-primary">
            <h4 className="text-xl font-semibold gradient-text mb-3">Coming Soon: SolRat P2E Game</h4>
            <p className="text-text-muted max-w-2xl mx-auto">
              Our upcoming play-to-earn game will allow NFT holders to battle, explore, and earn rewards in a fully immersive metaverse experience. Stay tuned for the beta launch in Q3 2025.
            </p>
            <Button href="#" variant="outline" externalLink className="mt-2">
              Join Waitlist
            </Button>
          </div>
        </AnimatedSection>
      </Container>

      <NFTModal
        nft={selectedNFT}
        onClose={() => setSelectedNFT(null)}
      />
    </section>
  );
};

export default NFTGallery;