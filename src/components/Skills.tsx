import React, { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['C',  'Java', 'Python','Kotlin'],
    bgColor: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Web Technologies',
    skills: ['HTML', 'Tailwind CSS', 'JavaScript','TypeScript', 'React.js', 'Express.js', 'Node.js','Next.js','Vue.js', 'Bootstrap'],
    bgColor: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB','Firebase ','Redis','PostgreSQL'],
    bgColor: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Tools & Frameworks',
    skills: ['Git', 'Docker','Postman','Figma'],
    bgColor: 'from-orange-500 to-red-500'
  }
];

export default function Skills() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"  // Ensure this id matches the href in the Header
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        {/* Heading with Scroll Trigger Animation */}
        <div className="relative text-center mb-16">
          {/* Background Text */}
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] font-extrabold text-purple-500 opacity-10 select-none">
            Skills
          </h2>
          {/* Foreground Heading with Animated Underline */}
          <h2 className="relative text-4xl font-bold text-gray-300 inline-block">
            Skills
            {/* Animated Underline */}
            <span
              className={`block h-1 mt-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
              absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 transition-transform duration-[${isInView ? '700ms' : '0ms'}] ease-out`}
              style={{
                width: isInView ? '100%' : '0%',
                transformOrigin: 'center',
                transitionTimingFunction: 'ease-in-out',
              }}
            />
          </h2>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-800">
              <h3 className="text-2xl font-semibold text-gray-300 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${category.bgColor} 
                    transform hover:scale-105 transition-all duration-300 cursor-pointer
                    hover:shadow-lg hover:shadow-purple-500/20`}
                  >
                    <span className="text-white font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
