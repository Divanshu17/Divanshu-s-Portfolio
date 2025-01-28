import React from 'react';
import { motion } from 'framer-motion';

const lines = [
  '> const developer = {',
  '    name: "Divanshu",',
  '    role: "MERN Stack Developer",',
  '    passion: "Creating scalable solutions",',
  '    skills: ["React", "Node.js", "MongoDB"]',
  '};',
  '> console.log("Hello, World! 👋");'
];

export default function TerminalBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        x: [0, -10, 10, -5, 5, 0],
        transition: { duration: 0.5, ease: 'easeInOut' }
      }}
      className="w-full max-w-lg bg-gray-900 rounded-md overflow-hidden shadow-lg border border-purple-500/20 glow"
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-800">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm text-gray-300">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              delay: index * 1.5,
              duration: 1.2,
              ease: 'easeInOut'
            }}
            className="overflow-hidden whitespace-nowrap border-r-2 border-gray-300 typewriter"
          >
            {line}
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .typewriter {
          display: inline-block;
        }

        @keyframes blink {
          0% {
            border-color: rgba(255, 255, 255, 0.75);
          }
          50% {
            border-color: transparent;
          }
          100% {
            border-color: rgba(255, 255, 255, 0.75);
          }
        }

        .typewriter {
          animation: blink 1s step-end infinite;
        }

        .glow {
          box-shadow: 0 0 15px 3px rgba(128, 0, 128, 0.5),
                      0 0 25px 6px rgba(128, 0, 255, 0.3);
          animation: glowPulse 2s infinite alternate;
        }

        @keyframes glowPulse {
          0% {
            box-shadow: 0 0 15px 3px rgba(128, 0, 128, 0.5),
                        0 0 25px 6px rgba(128, 0, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 20px 4px rgba(128, 0, 255, 0.4),
                        0 0 30px 8px rgba(128, 0, 255, 0.2);
          }
          100% {
            box-shadow: 0 0 15px 3px rgba(128, 0, 128, 0.5),
                        0 0 25px 6px rgba(128, 0, 255, 0.3);
          }
        }
      `}</style>
    </motion.div>
  );
}
