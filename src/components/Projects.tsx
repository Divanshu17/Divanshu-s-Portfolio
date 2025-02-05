import React from 'react';
import { ExternalLink, Github, Coffee, ShoppingCart, Building2, Brain } from 'lucide-react';

const projects = [
  {
    title: 'Crave Courier',
    description: 'A MERN stack food ordering platform with real-time order tracking and payment integration.',
    icon: Coffee,
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    demo: 'https://example.com',
    github: 'https://github.com'
  },
  {
    title: 'Business Management Platform',
    description: 'Role-based access control system with dynamic dashboards and analytics.',
    icon: Building2,
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    demo: 'https://example.com',
    github: 'https://github.com'
  },
  {
    title: 'Virtual Office Platform',
    description: 'Real-time collaboration tool with Kanban board and team management features.',
    icon: ShoppingCart,
    tech: ['React', 'Socket.io', 'Redis', 'Express'],
    demo: 'https://example.com',
    github: 'https://github.com'
  },
  {
    title: 'Nirvana',
    description: 'Stress-relief website offering guided meditation and therapy resources.',
    icon: Brain,
    tech: [ 'HTML', 'Javascript', 'CSS'],
    demo: 'https://example.com',
    github: 'https://github.com'
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-purple-500/20">
                  <project.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </div>

              <p className="text-gray-400 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}