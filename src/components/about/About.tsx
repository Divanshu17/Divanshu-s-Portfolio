import React from 'react';
import FeatureCard from './FeatureCard';
import BioSection from './BioSection';
import StatsSection from './StatsSection';
import SectionTitle from '../common/SectionTitle';
import { Code2, Database, Server, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Specialized in MERN stack development with a focus on creating scalable and maintainable applications.'
  },
  {
    icon: Database,
    title: 'Database Architecture',
    description: 'Experienced in designing and optimizing database schemas for both SQL and NoSQL databases.'
  },
  {
    icon: Server,
    title: 'DevOps & Cloud',
    description: 'Proficient with Docker, microservices architecture, and modern deployment practices.'
  },
  {
    icon: Rocket,
    title: 'Modern Technologies',
    description: 'Always staying updated with the latest tech trends and implementing cutting-edge solutions.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
          As a dedicated MERN stack developer, I focus on creating efficient and scalable solutions using technologies like React, Node.js, Express, and MongoDB. With an emphasis on clean code and responsive design, I specialize in developing web applications that provide seamless user experiences. Recently, I have expanded my expertise to include mobile app development with React Native, equipping me with the skills to build cross-platform applications. My experience in software development has given me a strong foundation in modern web and mobile technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        <StatsSection />
        <BioSection />
      </div>
    </section>
  );
}