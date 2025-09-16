import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGithub, FaLinkedin, FaGitAlt, FaPython, FaJava, FaDocker, FaLinux } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiTypescript } from 'react-icons/si';

// Import section components
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

const Home = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const backgrounds = [
    'bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900',
    'bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900',
    'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900',
    'bg-gradient-to-br from-purple-900 via-pink-900 to-red-900',
  ];

  const skills = [
    { name: 'React', icon: <FaReact className="text-4xl text-cyan-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-500" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-400" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-4xl text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-4xl text-orange-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-4xl text-gray-100" /> },
    { name: 'Python', icon: <FaPython className="text-4xl text-blue-400" /> },
    { name: 'Java', icon: <FaJava className="text-4xl text-red-500" /> },
    { name: 'Docker', icon: <FaDocker className="text-4xl text-blue-500" /> },
    { name: 'Linux', icon: <FaLinux className="text-4xl text-yellow-600" /> },
  ];

  // Auto-change background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Mouse position for parallax effect
  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20
    });
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Account for fixed header
        behavior: 'smooth'
      });
    }
  };

  // Animation variants
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
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="text-white overflow-x-hidden">
      {/* Hero Section */}
      <section 
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        onMouseMove={handleMouseMove}
      >
        {/* Animated Background */}
        <div className={`absolute inset-0 transition-all duration-1000 ${backgrounds[currentBg]}`}>
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white bg-opacity-10"
                style={{
                  width: Math.random() * 300 + 100,
                  height: Math.random() * 300 + 100,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  filter: 'blur(40px)'
                }}
                animate={{
                  x: [0, (Math.random() - 0.5) * 100],
                  y: [0, (Math.random() - 0.5) * 100],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 10 + Math.random() * 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Left Column - Text Content */}
            <motion.div variants={item} className="text-center lg:text-left">
              <motion.p
                className="text-lg text-cyan-400 mb-4 font-mono"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                HELLO I'M
              </motion.p>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="block overflow-hidden h-16 md:h-20">
                  <motion.span 
                    className="block"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ 
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.4
                    }}
                  >
                    PRAVIN
                  </motion.span>
                </span>
                <span className="block overflow-hidden h-16 md:h-20">
                  <motion.span 
                    className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ 
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.5
                    }}
                  >
                    DHAMANEKAR
                  </motion.span>
                </span>
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Full Stack Developer passionate about creating exceptional digital experiences through clean, efficient code and innovative solutions.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="#contact"
                  className="px-6 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  CONTACT ME
                </a>
                <a
                  href="#projects"
                  className="px-6 sm:px-8 py-3 rounded-lg border-2 border-cyan-500 text-cyan-400 font-medium hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  VIEW MY WORK
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Skills Grid */}
            <div className="relative w-full h-[400px] mt-12 lg:mt-0">
              <div className="absolute inset-0 flex">
                {/* Left Column - Moving Down */}
                <div className="w-1/3 h-full overflow-hidden pr-1">
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: '-50%' }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  >
                    {[...skills, ...skills].map((skill, index) => (
                      <motion.div
                        key={`left-${index}`}
                        className="mb-6 flex items-center gap-4 p-1"
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div className="flex-shrink-0">
                          {React.cloneElement(skill.icon, { className: 'w-8 h-8 sm:w-10 sm:h-10' })}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm sm:text-base font-medium text-gray-300 truncate">{skill.name}</div>
                          <div className="h-0.5 w-full bg-gray-800/30 rounded-full overflow-hidden mt-1">
                            <motion.div
                              className="h-full bg-cyan-400 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{
                                width: `${70 + Math.random() * 25}%`,
                                transition: { duration: 1, delay: 0.3 }
                              }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Middle Column - Moving Up */}
                <div className="w-1/3 h-full overflow-hidden px-1">
                  <motion.div
                    initial={{ y: '-50%' }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: 0
                    }}
                  >
                    {[...skills, ...skills].map((skill, index) => (
                      <motion.div
                        key={`middle-${index}`}
                        className="mb-6 flex items-center gap-4 p-1"
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div className="flex-shrink-0">
                          {React.cloneElement(skill.icon, { className: 'w-8 h-8 sm:w-10 sm:h-10' })}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm sm:text-base font-medium text-gray-300 truncate">{skill.name}</div>
                          <div className="h-0.5 w-full bg-gray-800/30 rounded-full overflow-hidden mt-1">
                            <motion.div
                              className="h-full bg-purple-400 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{
                                width: `${70 + Math.random() * 25}%`,
                                transition: { duration: 1, delay: 0.3 }
                              }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Right Column - Moving Down */}
                <div className="w-1/3 h-full overflow-hidden pl-1">
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: '-50%' }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: 0
                    }}
                  >
                    {[...skills, ...skills].map((skill, index) => (
                      <motion.div
                        key={`right-${index}`}
                        className="mb-6 flex items-center gap-4 p-1"
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div className="flex-shrink-0">
                          {React.cloneElement(skill.icon, { className: 'w-8 h-8 sm:w-10 sm:h-10' })}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm sm:text-base font-medium text-gray-300 truncate">{skill.name}</div>
                          <div className="h-0.5 w-full bg-gray-800/30 rounded-full overflow-hidden mt-1">
                            <motion.div
                              className="h-full bg-green-400 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{
                                width: `${70 + Math.random() * 25}%`,
                                transition: { duration: 1, delay: 0.3 }
                              }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <Projects />
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800">
        <Education />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <Contact />
      </section>
    </div>
  );
};

export default Home;