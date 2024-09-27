import React from "react";
import cat from "../assets/cat.jpeg";

const ThankYou = ({ onGoBack }) => {
  return (
    <div className="bg-white h-[400px] rounded-lg w-full max-w-4xl flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img className="w-50 h-36" src={cat} alt="Thank You" />
        <div className="text-center mt-4">
          <h1 className="text-lg font-bold">Thank You For Registration</h1>
          <p className="text-sm">Congratulations! Your account has been created successfully.</p>
          <button 
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={onGoBack} // Call the prop function to go back to Login
          >
            Go Back To Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
