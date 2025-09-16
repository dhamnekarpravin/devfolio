import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaUser, 
  FaCode, 
  FaProjectDiagram, 
  FaGraduationCap, 
  FaEnvelope,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Add Inter font to the document head
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const navItems = [
    { to: "/", icon: <FaHome className="mr-2" />, text: "HOME" },
    { to: "/about", icon: <FaUser className="mr-2" />, text: "ABOUT" },
    { to: "/skills", icon: <FaCode className="mr-2" />, text: "SKILLS" },
    { to: "/projects", icon: <FaProjectDiagram className="mr-2" />, text: "PROJECTS" },
    { to: "/education", icon: <FaGraduationCap className="mr-2" />, text: "EDUCATION" },
    { to: "/contact", icon: <FaEnvelope className="mr-2" />, text: "CONTACT" },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsOpen(false);
  const isActive = (path) => location.pathname === path;

  // Navbar styles with Inter font
  const navStyle = {
    fontFamily: "'Inter', sans-serif",
    letterSpacing: '0.05em',
    fontWeight: 500
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
      style={navStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-semibold text-white flex items-center hover:text-cyan-400 transition-colors tracking-wider"
              onClick={closeMobileMenu}
            >
              <span className="text-cyan-400 mr-2">&lt;/&gt;</span>
              PORTFOLIO
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.slice(0, -1).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-2 rounded-md text-xs uppercase tracking-wider font-medium flex items-center transition-colors ${
                    isActive(item.to)
                      ? 'text-cyan-400 bg-gray-800/50' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                  }`}
                >
                  {item.icon}
                  {item.text}
                </Link>
              ))}
              <Link
                to="/contact"
                className={`ml-2 px-4 py-2 rounded-md text-xs uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-colors ${
                  isActive('/contact') ? 'ring-2 ring-offset-2 ring-cyan-500' : ''
                }`}
              >
                CONTACT ME
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-900/95 backdrop-blur-sm`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`block px-3 py-2 rounded-md text-sm uppercase tracking-wider font-medium flex items-center ${
                isActive(item.to)
                  ? 'text-cyan-400 bg-gray-800/50' 
                  : 'text-gray-300 hover:bg-gray-800/30 hover:text-white'
              }`}
              onClick={closeMobileMenu}
            >
              {item.icon}
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;