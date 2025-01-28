import React from 'react';
import WorkExperienceCard from './ExperienceCard';
import SectionTitle from '../common/SectionTitle';

const experiences = [
  {
    title: 'Correct Steps Consultancy',
    role: 'Part-Time Developer',
    period: 'Aug 2024 - Dec 2024',
    description: 'Enhanced front-end and back-end performance, implemented new features, and optimized database queries.',
    achievements: [
      'Conducted comprehensive functionality, performance, and cross-browser testing to ensure software reliability.',
      'Implemented real-time notifications, progress metrics, and dynamic column customization in the Kanban board',

      'Implemented real-time features using WebSocket',
      'Developed responsive UI components'
    ]
  },
  {
    title: 'Correct Steps Consultancy',
    role: 'Intern',
    period: 'May 2024 - July 2024',
    description: 'Built and optimized MERN stack web applications according to client requirement, focusing on scalability and user experience.',
    achievements: [
      'Developed full-stack application',
      'Collaborated with senior developers',
      'Learned industry best practices'
    ]
  }
];

export default function WorkExperience() {
  return (
    <section id="work-experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Using SectionTitle for consistent heading style */}
        <SectionTitle title="Work Experience" />

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <WorkExperienceCard 
              key={index} 
              {...exp} 
              index={index} 
              isLast={index === experiences.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
