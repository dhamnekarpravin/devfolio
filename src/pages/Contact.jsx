import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMapPin, FiPhone, FiMail, FiUser, FiMessageSquare, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ text: '', isError: false });
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitMessage({ 
        text: 'Your message has been sent successfully!', 
        isError: false 
      });
      formRef.current.reset();
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage({ 
        text: 'Failed to send message. Please try again.', 
        isError: true 
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage({ text: '', isError: false }), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0f0f0f] relative text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Small Grid Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #262626 1px, transparent 1px),
            linear-gradient(to bottom, #262626 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />
      
      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 uppercase">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out to me using the form below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="bg-[#1a1a1a]/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-800/70 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 uppercase"></div>
              <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
                Contact Information
                <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"></span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-900/50 hover:bg-gray-800/50 hover:shadow-md transition-all border border-gray-700/50">
                  <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-cyan-400 p-3 rounded-xl text-white">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200">Location</h3>
                    <p className="text-gray-400">Belgaum Karnataka</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-900/50 hover:bg-gray-800/50 hover:shadow-md transition-all border border-gray-700/50">
                  <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-cyan-400 p-3 rounded-xl text-white">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200">Email</h3>
                    <a href="mailto:contact@example.com" className="text-blue-400 hover:text-cyan-400 transition-colors">
                      pravindhamanekar93@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-900/50 hover:bg-gray-800/50 hover:shadow-md transition-all border border-gray-700/50">
                  <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-cyan-400 p-3 rounded-xl text-white">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      9356918633
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <h3 className="font-semibold text-gray-200 mb-4">Follow Me</h3>
                <div className="flex space-x-3">
                  {[
                    { name: 'github', icon: <FiGithub className="text-lg" /> },
                    { name: 'linkedin', icon: <FiLinkedin className="text-lg" /> },
                    { name: 'twitter', icon: <FiTwitter className="text-lg" /> },
                    { name: 'instagram', icon: <FiInstagram className="text-lg" /> }
                  ].map((social) => (
                    <a 
                      key={social.name}
                      href={`https://${social.name}.com/yourusername`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-gray-900/50 shadow-sm flex items-center justify-center text-gray-300 hover:bg-gray-800 hover:text-white hover:shadow-lg transition-all duration-300 border border-gray-700/50"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-[#1a1a1a]/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-800/70 relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
              Send Me a Message
              <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"></span>
            </h2>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FiUser className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="block w-full pl-10 pr-4 py-3.5 bg-gray-900/50 border-2 border-gray-700/50 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none transition-all placeholder-gray-500 text-white"
                    required
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FiMail className="h-5 w-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="block w-full pl-10 pr-4 py-3.5 bg-gray-900/50 border-2 border-gray-700/50 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none transition-all placeholder-gray-500 text-white"
                    required
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="relative">
                  <div className="absolute top-3 left-3 text-gray-400">
                    <FiMessageSquare className="h-5 w-5" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Your Message"
                    className="block w-full pl-10 pr-4 py-3 bg-gray-900/50 border-2 border-gray-700/50 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none transition-all placeholder-gray-500 text-white resize-none"
                    required
                  ></textarea>
                </div>
              </motion.div>

              {submitMessage.text && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl ${
                    submitMessage.isError 
                      ? 'bg-red-900/30 text-red-300 border-l-4 border-red-500' 
                      : 'bg-green-900/30 text-green-300 border-l-4 border-green-500'
                  }`}
                >
                  {submitMessage.text}
                </motion.div>
              )}

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-4 border-0 rounded-xl text-white font-medium bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500/50 transition-all duration-200 transform hover:-translate-y-0.5 ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : 'shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2 h-5 w-5 uppercase" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
