// src/components/Navbar.js
import React from "react";
import Logo from "../assets/NISM_logo.jpeg"
import profile from "../assets/profile.jpeg"

const Navbar = () => {
  return (
    <nav className="bg-white-800 h-10 flex items-center justify-between px-14">
      {/* Left Side: Logo */}
      <div className="bg-white shadow-5xl h-[4rem] w-[8rem] flex items-center justify-center relative overflow-visible pt-5 pb-2">
        <img 
            src={Logo} // Replace with your logo URL
            alt="Logo"
            className="h-[1.5rem] w-[7rem] " // Smaller image inside the div
        />
        </div>


      {/* Right Side: Profile Image */}
      <div className="flex items-center">
        <img
          src={profile} // Replace with profile image URL
          alt="Profile"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
