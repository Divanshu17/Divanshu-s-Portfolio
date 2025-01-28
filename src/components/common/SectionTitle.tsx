import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="relative mb-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-white relative z-10"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100px' }}
        viewport={{ once: true }}
        className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"
      />
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-8xl font-bold text-purple-500/5 pointer-events-none">
        {title}
      </div>
    </div>
  );
}