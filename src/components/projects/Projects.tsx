import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Crave Courier',
    description: 'A MERN stack food ordering platform with real-time order tracking and payment integration.',
    images: [
      'https://i.postimg.cc/mgNwHjCb/cravecourier-1.png',
      'https://i.postimg.cc/L4wNKnmM/cc-5.png',
      'https://i.postimg.cc/XY0LqmZH/cc6.png',
      'https://i.postimg.cc/mhWrBb6S/cc8.png',
      'https://i.postimg.cc/xjct4KDR/cc-7.png'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    demo: 'https://example.com',
    github: 'https://github.com'
  },
  {
    title: 'Business Management Platform',
    description: 'A full-stack, role-based web application for automating business operations,including HR management, payroll, inventory, sales, and expenses. Features real-time analytics, automated invoicing, secure authentication (JWT), and data exports.',
    images: [
      'https://i.postimg.cc/bYGTMDwx/Screenshot-2024-08-06-001950.png',
      'https://i.postimg.cc/MGK0YXLj/Screenshot-2024-08-06-204821.png',
      'https://i.postimg.cc/nhxGC3Y2/Screenshot-2024-08-09-232820.png',
    ],
    tech: ['React.js', 'Node.js', 'Express', 'Redis','MongoDB'],
    demo: 'https://example.com',
    github: 'https://github.com'
  },
  {
    title: 'Virtual Office Platform',
    description: 'Real-time collaboration tool with Kanban board and team management features.',
    images: [
      'https://i.postimg.cc/Y2mgLv2S/Screenshot-2024-05-13-103131.png',
      'https://i.postimg.cc/4ythDS2c/Screenshot-2024-05-17-000315.png',
      'https://i.postimg.cc/c4RnTPny/Screenshot-2024-05-17-000535.png',
      'https://i.postimg.cc/gkWww4BM/Screenshot-2024-06-18-171232.png',
      'https://i.postimg.cc/pd6hpHg8/Screenshot-2024-05-17-000742.png'
    ],
    tech: ['React', 'Socket.io', 'Redis', 'Express'],
    demo: 'https://example.com',
    github: 'https://github.com'
  },
  {
    title: 'Decentralized Voting System Using Blockchain',
    description: 'Developed a blockchain-based decentralized voting platform for university elections, leveraging Solidity, Hardhat, Truffle, and MetaMask on the Volta testnet. Ensures transparency and immutability of votes.',
    images: [
      'https://i.postimg.cc/YqTtGS9t/blockchain1.png',
      'https://i.postimg.cc/bJVK76Sq/blockchain-2-transformed.png',
      'https://i.postimg.cc/Gm3xDbSS/Screenshot-2025-01-16-001442.png',
      'https://i.postimg.cc/XY2cctRN/Screenshot-2025-01-16-001643.png'
    ],
    tech: ['Solidity', 'Hardhat', 'Truffle', 'MetaMask', 'Volta Testnet'],
    demo: 'https://example-voting-system.com',
    github: 'https://github.com/username/decentralized-voting-system'
  },
 
  {
    title: 'Online Registration and Course Management System',
    description: 'Built a dynamic PHP and MySQL web application for student registration, exam sign-up, and course management. Integrated a secure admin panel for faculty to manage courses and view student data efficiently',
    images: [
      'https://i.postimg.cc/X7jjSPP0/Screenshot-2024-03-11-193629.png',
      'https://i.postimg.cc/c1MxzWXm/Screenshot-2024-03-11-193744.png',
      'https://i.postimg.cc/Ssb4Z193/Screenshot-2024-03-11-193838.png',
      'https://i.postimg.cc/505VD5q0/Screenshot-2024-03-11-205518.png',
      'https://i.postimg.cc/GtQbTPHN/Screenshot-2024-03-11-192358.png'
    ],
    tech: ['PHP', 'MySQL', 'Redis'],
    demo: 'https://example.com',
    github: 'https://github.com'
  },
  
  {
    title: 'Nirvana',
    description: 'Stress-relief website offering guided meditation and therapy resources.',
    images: [
      'https://i.postimg.cc/y8DNKH2S/Screenshot-2024-04-06-230408.png',
      'https://i.postimg.cc/MGZp6ZzW/nirvana-8.png',
      'https://i.postimg.cc/jS0T5xQp/nirvana-2.png',
      'https://i.postimg.cc/NGnY37yf/nirv-3.png',
      'https://i.postimg.cc/FsJmNdcb/nirvana-4.png',
      'https://i.postimg.cc/y8mH3MLk/nirvana-5.png',
      'https://i.postimg.cc/zfq1CxQp/nirvana-6.png',
      'https://i.postimg.cc/6QzxYdJK/nirvana-7.png'
    ],
    tech: ['HTML' , 'CSS' ,'Javascript'],
    demo: 'https://example.com',
    github: 'https://github.com'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-white mb-16 relative"
          >
            Featured Projects
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-70 animate-pulse"></span>
          </motion.h2>

          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] font-extrabold text-purple-500 opacity-10 select-none">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
