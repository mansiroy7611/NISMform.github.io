import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";
import Form from "./Form";

const Login = ({ onSubmit }) => { // Accept onSubmit prop
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white  rounded-lg w-full max-w-4xl flex">
      {!isSubmitted ? (
        // Show Login Form if not submitted
        <>
          {/* Instruction Container */}
          <div className="w-2/5 p-4 pt-24 bg-[#336699] text-white border-r border-gray-300 h-[28rem] flex flex-col justify-between">
            <div>
              <p className="text-white text-xs mb-4 pl-4">
                Kindly keep the following documents handy before proceeding with
                registration:
              </p>
              <div className="flex flex-col gap-2 text-xs pl-4">
                <div className="flex items-start">
                  <span className="flex-shrink-0 mr-2">1.</span>
                  <span>
                    Scan copy of PAN card (in jpeg/jpg format, below 1MB)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0 mr-2">2.</span>
                  <span>
                    Scan copy of photograph (in jpeg/jpg format, below 1MB)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0 mr-2">3.</span>
                  <span>
                    Scan copy of Proof of Address (in jpeg/jpg format, below
                    1MB)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0 mr-2">4.</span>
                  <span>Educational qualification and employment details</span>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0 mr-2">5.</span>
                  <span>
                    Foreign nationals who are designated as Directors by the
                    stock broking firms and other market intermediaries and need
                    to obtain NISM Certification(s) for regulatory compliance
                    are requested to contact NISM's Certification Team at
                    <a
                      href="mailto:certification@nism.ac.in"
                      className="underline"
                    >
                      certification@nism.ac.in
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Login Form Container */}
          <div className="w-2/3 px-24 p-2 h-[28rem] items-center justify-center">
            <h2 className="text-3xl font-bold mb-4 text-[#336699]">
              Create Account
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="mb-4 relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-small text-gray-700"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-2"
                    required
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <FaEnvelope className="w-5 h-5 text-gray-400" />
                  </span>
                </div>
                <label
                  htmlFor="email"
                  className="block text-sm font-small text-gray-700"
                >
                  Note: Certificates will be sent to this email address
                </label>
              </div>

              {/* Confirm Email Field */}
              <div className="mb-4 relative">
                <label
                  htmlFor="confirm-email"
                  className="block text-sm font-small text-gray-700"
                >
                  Confirm Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="confirm-email"
                    name="confirm-email"
                    placeholder="Confirm your email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10"
                    required
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <FaEnvelope className="w-5 h-5 text-gray-400" />
                  </span>
                </div>
              </div>

              {/* Password Field */}
              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-small text-gray-700"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 pt-4"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-5 h-5 text-gray-400" />
                  ) : (
                    <FaEye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>

              {/* Confirm Password Field */}
              <div className="mb-4 relative">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-small text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Confirm your password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 pt-4"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-5 h-5 text-gray-400" />
                  ) : (
                    <FaEye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="w-full bg-[#336699] text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Next
                </button>
                <button
                  type="button"
                  className="w-full bg-gray-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        // Show Status, Form, and Button components after submission
        <div className="w-full">
          <div className="flex  bg-gray-200 p-4 ">
            <Form className="w-[800px]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
