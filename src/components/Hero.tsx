import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
            }}
          >
            <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Hi, I'm <span className="text-purple-400">Divansu!</span>
        </h1>
        <p className="text-xl md:text-2xl text-purple-200 mb-12 animate-slide-up">
          A MERN Stack Developer with a Passion for Crafting Scalable Solutions
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <button className="group flex items-center gap-2 px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-all duration-300 transform hover:scale-105">
            Hire Me
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 rounded-full transition-all duration-300 transform hover:scale-105">
            <Download className="w-5 h-5" />
            Download CV
          </button>
        </div>

        <div className="flex justify-center gap-6">
          {[
            { Icon: Github, href: 'https://github.com' },
            { Icon: Linkedin, href: 'https://linkedin.com' },
            { Icon: Mail, href: 'mailto:contact@example.com' }
          ].map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-110 hover:rotate-6"
            >
              <Icon className="w-6 h-6 text-purple-300" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}