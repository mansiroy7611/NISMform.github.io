import React from "react";
import { FcOk } from "react-icons/fc";
import graph from "../assets/graph.jpeg";

const Status = ({ section, showCaptcha }) => {
  const isCompleted = (step) => section > step || (step === 5 && showCaptcha); // Show FcOk if captcha is shown in step 5
  const isActive = (step) => section === step;

  return (
    <div className="bg-white shadow-lg mr-4">
      <div className="p-3 px-6 pt-6">
        <ul className="space-y-8 relative z-10 text-xs text-gray-400">
          {/* List Item 1 */}
          <li className="flex items-center relative">
            <span className="w-8 h-8 flex items-center justify-center text-gray-700 border border-gray-700 rounded-full bg-white z-20">
              {isCompleted(1) ? <FcOk className="w-8 h-8" /> : "1"}
            </span>
            <span className={`ml-2 ${isActive(1) || isCompleted(1) ? "text-gray-800" : ""}`}>
              Personal Information
            </span>
            <span
              className={`absolute left-4 top-8 h-8 w-0.5 ${isCompleted(1) ? "bg-gray-800" : "bg-gray-300"}`}
            ></span>
          </li>

          {/* List Item 2 */}
          <li className="flex items-center relative">
            <span className="w-8 h-8 flex items-center justify-center text-gray-700 border border-gray-700 rounded-full bg-white z-20">
              {isCompleted(2) ? <FcOk className="w-8 h-8" /> : "2"}
            </span>
            <span className={`ml-2 ${isActive(2) || isCompleted(2) ? "text-gray-800" : ""}`}>
              Contact Information
            </span>
            <span
              className={`absolute left-4 top-8 h-8 w-0.5 ${isCompleted(2) ? "bg-gray-800" : "bg-gray-300"}`}
            ></span>
          </li>

          {/* List Item 3 */}
          <li className="flex items-center relative">
            <span className="w-8 h-8 flex items-center justify-center text-gray-700 border border-gray-700 rounded-full bg-white z-20">
              {isCompleted(3) ? <FcOk className="w-8 h-8" /> : "3"}
            </span>
            <span className={`ml-2 ${isActive(3) || isCompleted(3) ? "text-gray-800" : ""}`}>
              Education Details
            </span>
            <span
              className={`absolute left-4 top-8 h-8 w-0.5 ${isCompleted(3) ? "bg-gray-800" : "bg-gray-300"}`}
            ></span>
          </li>

          {/* List Item 4 */}
          <li className="flex items-center relative">
            <span className="w-8 h-8 flex items-center justify-center text-gray-700 border border-gray-700 rounded-full bg-white z-20">
              {isCompleted(4) ? <FcOk className="w-8 h-8" /> : "4"}
            </span>
            <span className={`ml-2 ${isActive(4) || isCompleted(4) ? "text-gray-800" : ""}`}>
              Professional Qualification
            </span>
            <span
              className={`absolute left-4 top-8 h-8 w-0.5 ${isCompleted(4) ? "bg-gray-800" : "bg-gray-300"}`}
            ></span>
          </li>

          {/* List Item 5 */}
          <li className="flex items-center relative">
            <span className="w-8 h-8 flex items-center justify-center text-gray-700 border border-gray-700 rounded-full bg-white z-20">
              {isCompleted(5) ? <FcOk className="w-8 h-8" /> : "5"}
            </span>
            <span className={`ml-2 ${isActive(5) || isCompleted(5) ? "text-gray-800" : ""}`}>
              Occupational Details
            </span>
          </li>
        </ul>
      </div>

      {/* Image container */}
      <div className="mt-2 flex justify-center">
        <img src={graph} alt="Profile Image" className="w-60 h-38 object-cover p-0 " />
      </div>
    </div>
  );
};

export default Status;
