import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  index: number;
}

export default function ExperienceCard({
  title,
  role,
  period,
  description,
  achievements,
  index
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 pb-12 group"
    >
      {index !== 1 && (
        <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-purple-500/30" />
      )}

      <motion.div
        whileHover={{ scale: 1.2, backgroundColor: '#A855F7' }}
        transition={{ duration: 0.3 }}
        className="absolute left-0 top-2 w-5 h-5 rounded-full bg-purple-500"
      />

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="ml-8 p-6 bg-gray-900 rounded-xl transform transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
      >
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Briefcase className="w-5 h-5 text-purple-400" />
          </motion.div>
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-sm text-purple-300">{role}</p> {/* Added this line */}
          </div>
        </div>

        <div className="flex items-center gap-2 text-purple-400 mb-4">
          <Calendar className="w-4 h-4" />
          <span>{period}</span>
        </div>

        <p className="text-gray-300 mb-4">{description}</p>

        <ul className="space-y-2">
          {achievements.map((achievement, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-gray-400 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              {achievement}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
