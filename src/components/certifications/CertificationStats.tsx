import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Calendar, Globe } from 'lucide-react';

interface CertificationStatsProps {
  certifications: Array<{
    category: string;
    issuer: string;
    date: string;
  }>;
}

export default function CertificationStats({ certifications }: CertificationStatsProps) {
  const uniqueCategories = new Set(certifications.map(cert => cert.category));
  const uniqueIssuers = new Set(certifications.map(cert => cert.issuer));
  const currentYear = new Date().getFullYear();
  const thisYearCerts = certifications.filter(cert => cert.date.includes(currentYear.toString()));

  const stats = [
    { icon: Award, value: '7+', label: 'Certificates' },
    { icon: BookOpen, value: '4', label: 'Categories' },
    { icon: Globe, value: '2', label: 'Platforms' },
    { icon: Calendar, value: thisYearCerts.length, label: `Earned in ${currentYear}` }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-800/50 rounded-lg p-6 text-center group hover:bg-gray-800 transition-colors"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30"
          >
            <stat.icon className="w-6 h-6 text-purple-400" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="text-3xl font-bold text-white mb-2"
          >
            {stat.value}
          </motion.div>
          <div className="text-sm text-gray-400 group-hover:text-purple-300">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}