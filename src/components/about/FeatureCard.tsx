import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 bg-gray-800 rounded-xl hover:bg-purple-900 transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="w-12 h-12 mb-4 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30"
      >
        <Icon className="w-6 h-6 text-purple-400" />
      </motion.div>
      
      <motion.h3
        whileHover={{ scale: 1.05 }}
        className="text-xl font-semibold text-white mb-2"
      >
        {title}
      </motion.h3>
      
      <p className="text-gray-400 group-hover:text-purple-200 transition-colors">
        {description}
      </p>
    </motion.div>
  );
}