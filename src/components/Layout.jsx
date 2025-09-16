import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* White Sphere Grid Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "white",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
          `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />
      
      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
