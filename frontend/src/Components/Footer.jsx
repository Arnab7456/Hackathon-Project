import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">&copy; smart Study. All rights reserved.</p>
        <a href="https://github.com/Arnab7456" className="text-gray-500 hover:text-gray-400 transition-colors duration-300">
          <i className="fab fa-github mr-1"></i> GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
