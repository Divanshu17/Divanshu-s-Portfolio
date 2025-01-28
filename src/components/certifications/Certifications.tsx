import React from 'react';
import CertificationCard from './CertificationCard';
import CertificationStats from './CertificationStats';

const certifications = [
  
  {
    title: 'AWS Cloud Technical Essentials',
    issuer: 'Amazon Web Services',
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/certificate/W4FA2JFDD801',
    image: 'https://i.postimg.cc/prD4tczX/image.png',
    category: 'Cloud Computing',
  },
  {
    title: 'Blockchain Platforms',
    issuer: 'University at Buffalo',
    date: '2024',
    link: 'https://example.com',
    image: 'https://i.postimg.cc/3wBskccy/image.png',
    category: 'Blockchain',
  },
  {
    title: 'Foundations of User Experience (UX) Design',
    issuer: 'Google',
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/certificate/K7MX4HXBAY36',
    image: 'https://i.postimg.cc/pTS18bYd/image.png',
    category: 'UI/UX',
  },
  {
    title: 'Decentralized Applications (Dapps)',
    issuer: 'University at Buffalo',
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/certificate/IKYYJXPCJEW9',
    image: 'https://i.postimg.cc/yYytQ57L/image.png',
    category: 'Decentralized Applications',
  },
  {
    title: 'Matrix Algebra for Engineers',
    issuer: 'The Hong Kong University of Science and Technology',
    date: '2023',
    link: 'https://www.coursera.org/account/accomplishments/certificate/DL6XWV6KH4EY',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=200&q=80',
    category: 'Mathematics',
  },
  {
    title: 'Ordered Data Structures',
    issuer: 'University of Illinois Urbana-Champaign',
    date: '2023',
    link: 'https://www.coursera.org/account/accomplishments/certificate/KJXB3MSUUGN8',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=200&q=80',
    category: 'Computer Science',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Heading with Background Design */}
        <div className="relative text-center mb-16">
          {/* Background Text */}
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] font-extrabold text-purple-500 opacity-10 select-none">
            Certifications
          </h2>
          {/* Foreground Heading */}
          <h2 className="relative text-4xl font-bold text-white">Certifications</h2>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-70 animate-pulse"></span>
        </div>

        {/* Certification Stats */}
        <CertificationStats certifications={certifications} />

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
