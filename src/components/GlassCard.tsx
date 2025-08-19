import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'red';
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  variant = 'dark',
  hover = true
}) => {
  const variantClasses = {
    light: 'glass',
    dark: 'glass-dark',
    red: 'glass-red'
  };

  return (
    <motion.div
      whileHover={hover ? { scale: 1.05, y: -10 } : {}}
      transition={{ duration: 0.3 }}
      className={`${variantClasses[variant]} rounded-xl p-6 ${hover ? 'card-hover' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;