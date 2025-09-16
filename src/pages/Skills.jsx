import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools, FaBrain, FaRocket } from 'react-icons/fa';
import { 
  SiJavascript, SiReact, SiNodedotjs, SiPython, SiHtml5, SiCss3, 
  SiGit, SiMongodb, SiExpress, SiRedux, SiTailwindcss, SiFigma, 
  SiFirebase, SiDocker, SiTypescript, SiGraphql, SiAwsamplify, 
  SiPostgresql, SiJest, SiCypress, SiNextdotjs, SiVuedotjs, 
  SiSass, SiAdobephotoshop, SiAdobexd, SiGitlab, SiJenkins
} from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript className="w-12 h-12 text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12 text-blue-600" /> },
  { name: 'React', icon: <SiReact className="w-12 h-12 text-blue-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12 text-black dark:text-white" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="w-12 h-12 text-green-600" /> },
  { name: 'Express', icon: <SiExpress className="w-12 h-12 text-gray-300" /> },
  { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12 text-green-500" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-12 h-12 text-blue-700" /> },
  { name: 'GraphQL', icon: <SiGraphql className="w-12 h-12 text-pink-600" /> },
  { name: 'Git', icon: <SiGit className="w-12 h-12 text-orange-600" /> },
  { name: 'Docker', icon: <SiDocker className="w-12 h-12 text-blue-400" /> },
  { name: 'AWS', icon: <SiAwsamplify className="w-12 h-12 text-orange-400" /> },
  { name: 'Jest', icon: <SiJest className="w-12 h-12 text-red-500" /> },
  { name: 'Cypress', icon: <SiCypress className="w-12 h-12 text-gray-300" /> },
  { name: 'Vue', icon: <SiVuedotjs className="w-12 h-12 text-green-500" /> },
  { name: 'Sass', icon: <SiSass className="w-12 h-12 text-pink-400" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="w-12 h-12 text-cyan-400" /> },
  { name: 'Figma', icon: <SiFigma className="w-12 h-12 text-purple-500" /> },
  { name: 'Photoshop', icon: <SiAdobephotoshop className="w-12 h-12 text-blue-500" /> },
  { name: 'XD', icon: <SiAdobexd className="w-12 h-12 text-pink-500" /> },
  { name: 'GitLab', icon: <SiGitlab className="w-12 h-12 text-orange-500" /> },
  { name: 'Jenkins', icon: <SiJenkins className="w-12 h-12 text-red-400" /> },
];

// Duplicate the array to create a seamless loop
const duplicatedSkills = [...skills, ...skills];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="flex-shrink-0 mx-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 
                 hover:border-cyan-400/50 transition-all duration-300 group"
      whileHover={{ 
        y: -8,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
    >
      <div className="flex flex-col items-center">
        <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>
        <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const containerRef = useRef(null);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  useEffect(() => {
    // No need for manual animation with CSS keyframes
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing digital experiences
          </p>
        </motion.div>

        <div className="relative">
          {/* First row - slides to the left */}
          <div className="mb-8 overflow-hidden">
            <div className="flex w-max">
              <div className="flex items-center animate-slide">
                {duplicatedSkills.map((skill, index) => (
                  <SkillCard key={`first-${index}`} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Second row - slides to the right */}
          <div className="overflow-hidden">
            <div className="flex w-max">
              <div className="flex items-center animate-slide-reverse">
                {[...duplicatedSkills].reverse().map((skill, index) => (
                  <SkillCard key={`second-${index}`} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { 
              title: 'Frontend', 
              icon: <FaCode className="text-3xl text-cyan-400" />,
              description: 'Building responsive and interactive user interfaces with modern frameworks and libraries.'
            },
            { 
              title: 'Backend', 
              icon: <FaServer className="text-3xl text-purple-400" />,
              description: 'Developing robust server-side applications and APIs with scalable architectures.'
            },
            { 
              title: 'DevOps', 
              icon: <FaTools className="text-3xl text-yellow-400" />,
              description: 'Implementing CI/CD pipelines and containerization for seamless deployments.'
            },
            { 
              title: 'UI/UX', 
              icon: <FaBrain className="text-3xl text-pink-400" />,
              description: 'Creating intuitive and engaging user experiences with a focus on usability.'
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-xl bg-gray-700/50 flex items-center justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes slide-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-slide {
          display: flex;
          animation: slide 40s linear infinite;
        }
        .animate-slide-reverse {
          display: flex;
          animation: slide-reverse 40s linear infinite;
        }
        .animate-slide:hover, .animate-slide-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Skills;
