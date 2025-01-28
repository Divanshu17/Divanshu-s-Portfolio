import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[]; // Array of images
  tech: string[];
  demo: string;
  github: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  images,
  tech,
  demo,
  github,
  index
}: ProjectCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Start or stop the sliding effect based on hover state
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length); // Change image automatically every 3 seconds
      }, 2000); // Change image every 3 seconds
    } else if (interval) {
      clearInterval(interval); // Clear the interval when hover ends
    }

    return () => {
      if (interval) clearInterval(interval); // Clean up interval on unmount
    };
  }, [isHovered, images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-gray-800 rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}  // Start sliding when hover begins
      onMouseLeave={() => setIsHovered(false)} // Stop sliding when hover ends
    >
      <div className="aspect-video overflow-hidden relative">
        <motion.img
          src={images[currentImage]} // Dynamically change the image
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Github className="w-4 h-4" />
              Source Code
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
