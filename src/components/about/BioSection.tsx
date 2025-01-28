import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Rocket } from 'lucide-react';

const bioPoints = [
  {
    icon: Code2,
    text: 'Passionate MERN stack developer with a focus on creating elegant solutions'
  },
  {
    icon: Brain,
    text: 'Quick learner who stays updated with the latest technologies and best practices'
  },
  {
    icon: Rocket,
    text: 'Committed to writing clean, maintainable code and building scalable applications'
  }
];

export default function BioSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      className="max-w-3xl mx-auto text-center"
    >
      <div className="space-y-6">
        {bioPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.2 }}
            className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center"
            >
              <point.icon className="w-5 h-5 text-purple-400" />
            </motion.div>
            <p className="text-gray-300 text-left">{point.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}