import React from 'react';
import { motion } from 'framer-motion';

interface RatMascotProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const RatMascot: React.FC<RatMascotProps> = ({
  className = '',
  size = 'md',
  animated = true,
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64',
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      animate={animated ? { y: [0, -10, 0] } : undefined}
      transition={animated ? { repeat: Infinity, duration: 3, ease: 'easeInOut' } : undefined}
    >
      <img 
        src="https://i.ibb.co/JjXgXy9y/Untitled-1-copy.png"
        alt="SolRat Logo"
        className="object-contain w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-accent/30 mix-blend-overlay rounded-full"></div>
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ boxShadow: ['0 0 10px rgba(108, 0, 255, 0.5)', '0 0 20px rgba(0, 200, 255, 0.7)', '0 0 10px rgba(108, 0, 255, 0.5)'] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      ></motion.div>
    </motion.div>
  );
};

export default RatMascot;