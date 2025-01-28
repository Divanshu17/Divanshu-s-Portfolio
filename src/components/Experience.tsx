import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Correct Steps Consultancy',
    role: 'Part-Time Developer',
    period: 'Aug 2024 - Dec 2024',
    description: 'Enhanced front-end and back-end performance, implemented new features, and optimized database queries.',
    achievements: [
      'Improved application performance by 40%',
      'Implemented real-time features using WebSocket',
      'Developed responsive UI components'
    ]
  },
  {
    title: 'Correct Steps Consultancy',
    role: 'Intern',
    period: 'May 2024 - July 2024',
    description: 'Built and optimized MERN stack web applications, focusing on scalability and user experience.',
    achievements: [
      'Developed full-stack features',
      'Collaborated with senior developers',
      'Learned industry best practices'
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Work Experience</h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 group"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-purple-500/30" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-purple-500 group-hover:scale-125 transition-transform duration-300" />

              <div className="ml-8 p-6 bg-gray-900 rounded-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                </div>

                <div className="flex items-center gap-2 text-purple-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}