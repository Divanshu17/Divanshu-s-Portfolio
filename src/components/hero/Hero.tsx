import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import MatrixRain from './MatrixRain';
import TerminalBox from './TerminalBox';

export default function Hero() {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900"
    >
      <MatrixRain />

      <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Divanshu Kachhawa!
            </span>
          </motion.h1>

          <div className="text-xl md:text-2xl text-purple-200 mb-8 h-12">
            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                2000,
                'Full-Stack Enthusiast',
                2000,
                'Innovator and Designer',
                2000,
              ]}
              repeat={Infinity}
              cursor={true}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-6 mb-12"
          >
            {/* Hire Me Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:divanshu1704@gmail.com?subject=Hiring Inquiry&body=Hi Divanshu,%0D%0A%0D%0AI would like to discuss an opportunity with you. Please get in touch with me.%0D%0A%0D%0ARegards,"
              className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full transition-all duration-300"
            >
              Hire Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Download CV Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/18ZyiUZ2wJU6Gbhmxn8eAy4dQBfAVV_i-/view?usp=sharing" // Path to your CV in the public folder
              // download="Divanshu_Kachhawa_CV.pdf"
              className="group flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 rounded-full transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center md:justify-start gap-6"
          >
            {[
              { Icon: Github, href: 'https://github.com/Divanshu17' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/divanshu-kachhawa-32442b240/' },
              { Icon: Mail, href: 'mailto:divanshu1704@gmail.com' },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
              >
                <Icon className="w-6 h-6 text-purple-300" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="flex-1">
          <TerminalBox />
        </div>
      </div>
    </div>
  );
}
