import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobile, FaServer, FaRocket } from 'react-icons/fa';

const About = () => {
  const services = [
    {
      title: 'full stackWeb Application Development',
      description: 'Building responsive, scalable, and high-performance web applications using modern technologies.',
      icon: <FaCode className="text-3xl text-indigo-500" />
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.',
      icon: <FaPalette className="text-3xl text-pink-500" />
    },
    {
      title: 'Web Design',
      description: 'Designing beautiful and functional websites that align with your brand and business goals.',
      icon: <FaMobile className="text-3xl text-blue-500" />
    },
    {
      title: 'Data Analysis',
      description: 'Transforming raw data into actionable insights through statistical methods, data visualization, and business intelligence tools.',
      icon: <FaServer className="text-3xl text-green-500" />
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
    <div className="min-h-screen w-full bg-black relative">
      {/* Midnight Mist Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
            radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
            radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
          `,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-transparent">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div 
                className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 mb-6 overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-full w-full rounded-full bg-white p-1">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
                    alt="Profile" 
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.h1 
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="block">About</span>
                <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Who I Am
                </span>
              </motion.h1>
              <motion.p 
                className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                A passionate developer | Designer | analyst
              </motion.p>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                ease: "easeOut"
              } 
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.2,
                  duration: 0.6,
                  ease: "easeOut"
                } 
              }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold uppercase text-white mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                My Journey
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            </motion.div>

            <motion.div 
              className="prose prose-indigo text-gray-300 max-w-4xl mx-auto text-center"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { 
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.p 
                className="text-lg leading-relaxed mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5,
                    ease: "easeOut"
                  } 
                }}
                viewport={{ once: true }}
              >
                Hello! I'm a Full Stack Developer | Designer | Analyst with a passion for building exceptional digital experiences. 
                With a strong foundation in both front-end and back-end technologies, I create seamless, 
                responsive web applications that deliver real value to users.
              </motion.p>
              
              <motion.p 
                className="text-lg leading-relaxed text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.2,
                    duration: 0.5,
                    ease: "easeOut"
                  } 
                }}
                viewport={{ once: true }}
              >
                My journey in web development started several years ago, and since then, I've had the privilege 
                of working with various technologies and frameworks that have shaped my skills and perspective 
                on creating efficient and user-friendly applications.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Services Section */}
          <div className="mt-24">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                className="text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  What I Do
                </span>
              </motion.h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ 
                  scaleX: 1,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                }}
                viewport={{ once: true }}
              />
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative h-full overflow-hidden rounded-2xl p-0.5"
                  variants={item}
                  whileHover={{ y: -5 }}
                >
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.5) 0%, transparent 60%)',
                    }}
                  />
                  <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800/80 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 group-hover:border-indigo-500/30 border border-gray-800/50">
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-500" />
                    
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-gray-800/50 group-hover:border-indigo-500/50 transition-all duration-300">
                        <div className="text-2xl text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      
                      <div className="absolute bottom-4 left-6 right-6 h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="flex items-center text-indigo-400 text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <span>Learn more</span>
                        <svg className="w-4 h-4 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            className="mt-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="max-w-3xl mx-auto">
              <FaRocket className="text-4xl mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Ready to bring your ideas to life?</h2>
              <p className="text-xl text-indigo-100 mb-8">
                Let's work together to create something amazing. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <a 
                href="/contact" 
                className="inline-block uppercase bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
