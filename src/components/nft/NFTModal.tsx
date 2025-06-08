import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface NFT {
  id: number;
  name: string;
  image: string;
  rarity: string;
  traits: string[];
}

interface NFTModalProps {
  nft: NFT | null;
  onClose: () => void;
}

const NFTModal: React.FC<NFTModalProps> = ({ nft, onClose }) => {
  if (!nft) return null;

  const rarityColors = {
    'Legendary': 'text-amber-400',
    'Epic': 'text-purple-400',
    'Rare': 'text-blue-400',
    'Uncommon': 'text-green-400',
    'Common': 'text-gray-400'
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-4xl glassmorphism rounded-xl overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-text-muted hover:text-text transition-colors"
          >
            <X size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[400px]">
              <img
                src={nft.image}
                alt={nft.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${rarityColors[nft.rarity as keyof typeof rarityColors]}`}>
                  {nft.rarity}
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-text">{nft.name}</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2 text-text">Traits</h4>
                  <div className="flex flex-wrap gap-2">
                    {nft.traits.map((trait, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 rounded-full bg-primary/20 text-primary-light"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2 text-text">Statistics</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Rarity Rank</span>
                      <span className="font-medium text-text">#1337</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Trait Count</span>
                      <span className="font-medium text-text">{nft.traits.length}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2 text-text">Utility</h4>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Staking multiplier boost</li>
                    <li>• Exclusive DAO voting power</li>
                    <li>• P2E game character</li>
                  </ul>
                </div>

                <button className="w-full py-3 rounded-lg bg-accent/20 text-accent hover:bg-accent/30 transition-colors">
                  View on Marketplace
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NFTModal;