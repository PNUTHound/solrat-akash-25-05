import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '', id }) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Container;