import React from 'react';
import Logo from '../assets/Schoolnet_logo.jpeg'; // Adjust the import path as needed

const Footer = () => {
  return (
    <footer className="bg-white-800 text-black h-8 flex items-center justify-between px-6">
      {/* Left Side */}
      <div className="flex items-center">
        <span className="mr-2 text-sm">Powered by</span>
        <img 
          src={Logo} // Replace with your logo URL
          alt="Logo"
          className="h-4 w-auto pt-1" // Adjust the size as needed
        />
      </div>

      {/* Right Side */}
      <div className="text-sm">
        Copyright&copy; 2011 NISM. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
