import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';

interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  details: string;
  index: number;
  isLast: boolean;
}

export default function EducationCard({
  degree,
  institution,
  period,
  details,
  index,
  isLast
}: EducationCardProps) {
  return (
    <div className="relative pl-8 pb-12">
      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-purple-500/30" />
      )}

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="absolute left-0 top-2 w-5 h-5 rounded-full bg-purple-500"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-purple-500/50"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="ml-8 p-6 bg-gray-900 rounded-xl hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
      >
        <motion.h3
          whileHover={{ scale: 1.02 }}
          className="text-xl font-semibold text-white mb-4"
        >
          {degree}
        </motion.h3>

        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2 text-purple-400">
            <Building2 className="w-4 h-4" />
            <span>{institution}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>{period}</span>
          </div>
        </div>

        <p className="text-gray-300">{details}</p>
      </motion.div>
    </div>
  );
}