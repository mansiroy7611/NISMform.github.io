import React, { useState } from "react";
import Navbar from "./components/Navbar"; // Adjust the import path if needed
import Login from "./components/login"; // Adjust the import path if needed
import Footer from "./components/Footer"; // Adjust the import path if needed

const App = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center bg-gray-200">
        
        <Login />
      </div>
      <Footer />
    </div>
  );
};

export default App;
