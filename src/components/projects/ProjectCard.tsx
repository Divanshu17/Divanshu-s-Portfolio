import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
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
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 2000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-gray-800 rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden relative">
        <motion.img
          src={images[currentImage]}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Mobile-optimized overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
        <div className={`absolute bottom-0 left-0 right-0 p-3 md:p-6 transition-all duration-300 ${isExpanded ? 'h-full overflow-y-auto' : 'max-h-[70%]'}`}>
          {/* Compact title */}
          <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 text-shadow-sm">{title}</h3>
          
          {/* Collapsible description */}
          <div className="relative">
            <p className={`text-gray-200 text-xs md:text-sm font-medium leading-relaxed mb-2 ${isExpanded ? '' : 'line-clamp-2 md:line-clamp-3'}`}>
              {description}
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-purple-300 text-xs flex items-center gap-1 hover:text-purple-200 transition-colors mb-2"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="w-3 h-3" />
                </>
              ) : (
                <>
                  Read More <ChevronDown className="w-3 h-3" />
                </>
              )}
            </button>
          </div>

          {/* Compact tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tech.map((item, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-[10px] md:text-xs bg-purple-500/30 text-purple-200 rounded-full font-medium whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Compact buttons */}
          <div className="flex gap-2">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-xs font-medium"
            >
              <ExternalLink className="w-3 h-3" />
              Demo
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-xs font-medium"
            >
              <Github className="w-3 h-3" />
              Code
            </motion.a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .text-shadow-sm {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </motion.div>
  );
}