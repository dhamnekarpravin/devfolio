import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Services</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p>Building responsive and modern web applications.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p>Creating beautiful and intuitive user interfaces.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
