import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar, Building } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  link: string;
  image: string;
  category: string;
  index: number;
}

export default function CertificationCard({
  title,
  issuer,
  date,
  link,
  image,
  category,
  index
}: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gray-800 rounded-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6">
        <div className="flex gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 border-purple-500/20"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center"
              >
                <Award className="w-4 h-4 text-purple-400" />
              </motion.div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Building className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300">{issuer}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">{date}</span>
              </div>

              <div className="inline-block px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full">
                {category}
              </div>
            </div>
          </div>
        </div>

        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="mt-4 flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span>View Certificate</span>
        </motion.a>
      </div>
    </motion.div>
  );
}