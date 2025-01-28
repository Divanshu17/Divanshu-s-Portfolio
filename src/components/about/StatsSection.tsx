import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Users, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const stats = [
  { icon: Code, value: '200+', label: 'Commits' },
  { icon: Coffee, value: '3+', label: 'Years of Experience' },
  { icon: Users, value: '15+', label: 'Projects' },
  { icon: Star, value: '14+', label: 'Technologies' }
];

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center"
          >
            <stat.icon className="w-8 h-8 text-purple-400" />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: index * 0.2 }}
            className="text-3xl font-bold text-white mb-2"
          >
            {stat.value}
          </motion.div>
          <div className="text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}