import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
              PRAVIN
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed uppercase">
              Crafting exceptional digital experiences through clean code and innovative design. Let's build something amazing together!
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative pb-2">
              QUICK LINKS
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-600"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/", text: "Home" },
                { to: "/about", text: "About" },
                { to: "/projects", text: "Projects" },
                { to: "/education", text: "Education" },
                { to: "/contact", text: "Contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative pb-2">
              GET IN TOUCH
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-600"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaEnvelope className="text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  pravindhamanekar93@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">9356918633</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Belgaum Karnataka</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative pb-2">
              NEWSLETTER
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-600"></span>
            </h3>
            <p className="text-gray-300 text-sm mb-4 uppercase">
              Subscribe to my newsletter for the latest updates and articles.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-white placeholder-gray-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity duration-300 text-sm font-medium"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm uppercase">
            &copy; {currentYear} Pravin Dhamanekar. All rights reserved.
            <span className="block sm:inline-block mt-2 sm:mt-0 sm:ml-2">
              MADE WITH <FaHeart className="inline text-red-500 mx-1" /> in India
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
