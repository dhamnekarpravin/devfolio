import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiLayers, FiStar } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product listings, cart, and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full-Stack',
      image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Fitness Tracker Mobile App',
      description: 'Mobile application for tracking workouts, nutrition, and fitness progress.',
      tags: ['React Native', 'Firebase', 'Redux'],
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website with smooth animations and responsive design.',
      tags: ['React', 'Framer Motion', 'Tailwind CSS'],
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Restaurant Booking System',
      description: 'A reservation and table management system for restaurants with admin dashboard.',
      tags: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
      category: 'Full-Stack',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather information dashboard with 5-day forecast and location search.',
      tags: ['React', 'OpenWeather API', 'Chart.js'],
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80',
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] to-[#151515] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of carefully crafted projects that showcase my skills and experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group relative"
              variants={item}
              whileHover={{ y: -5 }}
            >
              {project.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full flex items-center z-10 shadow-lg">
                  <FiStar className="mr-1" /> Featured
                </div>
              )}
              <div className="h-full bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 flex flex-col transform hover:scale-[1.02]">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-3">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-900/90 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-600 transition-all hover:scale-110"
                        title="View Code"
                      >
                        <FiGithub />
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-900/90 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-600 transition-all hover:scale-110"
                        title="Live Demo"
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mr-2"></div>
                    <span className="text-sm text-blue-400 font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-800/50">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl -z-10"></div>
    </div>
  );
};

export default Projects;
