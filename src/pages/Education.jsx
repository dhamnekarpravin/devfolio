import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaBookOpen } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'KLS GOGTE COLLEGE OF COMMERCE',
      year: '2022 - 2023',
      description: 'Specialized in Advanced Software Development and Machine Learning. Graduated with honors.',
      gpa: '8.6/10',
      achievements: [
        'Published research paper on AI in Software Development',
        'Won Hackathon 2021',
        'Lead Developer - University App Development Team'
      ]
    },
    
    {
      degree: 'Higher Secondary Education',
      institution: 'MARATHA MANDALS PU COLLEGE',
      year: '2020 - 2022',
      description: 'Science Stream with Computer Science as major subject.',
      gpa: '92%',
      achievements: [
        'School Topper in Computer Science',
        'National Science Exhibition Winner',
        'Head Boy - Student Council'
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'52\' height=\'26\' viewBox=\'0 0 52 26\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z\' /%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
            Education Journey
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My academic background and continuous learning path
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center w-full`}
                variants={item}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-4 border-[#0f0f0f] z-10"></div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0`}>
                  <motion.div 
                    className="bg-[#1a1a1a] rounded-2xl p-6 shadow-xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300"
                    whileHover={{ 
                      y: -5,
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-400 mr-4">
                        <FaGraduationCap className="text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <p className="text-cyan-400">{edu.institution}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <span className="flex items-center mr-4">
                        <FaBookOpen className="mr-1" /> {edu.year}
                      </span>
                      <span className="flex items-center">
                        <FaAward className="mr-1" /> GPA: {edu.gpa}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{edu.description}</p>
                    
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          <span className="text-gray-400">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-[#1a1a1a] to-[#1a1a1a]/80 p-8 rounded-2xl border border-gray-800/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Additional Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Full Stack Web Development - The Complete Guide',
              'Machine Learning A-Z™: Hands-On Python & R In Data Science',
              'AWS Certified Solutions Architect - Associate',
              'Docker and Kubernetes: The Complete Guide',
              'React - The Complete Guide (incl Hooks, React Router, Redux)',
              'The Complete Node.js Developer Course'
            ].map((cert, index) => (
              <div key={index} className="flex items-start p-3 bg-gray-900/50 rounded-lg border border-gray-800/50 hover:border-cyan-500/30 transition-colors">
                <span className="text-cyan-400 mr-2">✓</span>
                <span className="text-gray-300">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
