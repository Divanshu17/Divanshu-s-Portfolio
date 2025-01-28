import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'JK Lakshmipat University Jaipur',
    period: '2022 - 2026',
    details: 'Focused on computer science fundamentals, data structures, and Web and App development.'
  },
  {
    degree: '12th Grade',
    institution: 'MPBSE Board',
    period: '2022',
    details: 'Achieved excellence in mathematics and computer science.'
  },
  {
    degree: '10th Grade',
    institution: 'CBSE Board',
    period: '2020',
    details: 'Strong foundation in science and mathematics.'
  }
];

export default function Education() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Education</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="absolute -left-3 top-6">
                <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="ml-6">
                <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                  <Award className="w-4 h-4" />
                  <span>{edu.institution}</span>
                </div>
                <p className="text-gray-400 mb-2">{edu.period}</p>
                <p className="text-gray-300">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}