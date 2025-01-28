import React from 'react';
import EducationCard from './EducationCard';
import SectionTitle from '../common/SectionTitle';

const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'JK Lakshmipat University Jaipur',
    period: '2022 - 2026',
    details: 'Focused on Computer Science Core, Data structures and Algorithms, Operting Systems,and Web and App development.'
  },
  {
    degree: '12th Grade',
    institution: 'MPBSE Board',
    period: '2022',
    details: 'Achieved excellence in Chemistry and Physics.'
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
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle title="Education" />

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <EducationCard 
              key={index} 
              {...edu} 
              index={index} 
              isLast={index === education.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}