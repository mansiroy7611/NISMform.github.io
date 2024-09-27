import React, { useState } from "react";
import OTPModal from "./OTPModal";
const SecondSection = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);

  const handleInputChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleSendOTP = () => {
    // Logic to handle OTP sending can go here
    setIsOTPModalOpen(true); // Open the OTP modal
  };


  return (
    <><form id="contact">
      <div className="flex w-full space-x-4 mb-4">
        {/* PAN Number (Left) */}
        <div className="w-1/2">
          <label
            htmlFor="Pan"
            className="block text-sm font-medium text-gray-700"
          >
            Address Line 1 <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="pan"
            name="pan"
            placeholder="Enter House, Flat, apartment name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required />
        </div>

        {/* PAN Card Div (Right) */}
        <div className="w-1/2">
          <label
            htmlFor="pan"
            className="block text-sm font-medium text-gray-700"
          >
            Address Line 2
          </label>
          <input
            type="text"
            id="pan"
            name="pan"
            placeholder="Enter Colony Area"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required />
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        {/* Aadhar Number (Left) */}
        <div className="w-1/2">
          <label
            htmlFor="aadhaar"
            className="block text-sm font-medium text-gray-700"
          >
            Address Line 3
          </label>
          <input
            type="text"
            id="aadhaar"
            name="aadhaar"
            placeholder="Enter Landmark "
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required />
        </div>

        {/* Passport Card Div (Right) */}
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            City <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="passport"
            name="passport"
            placeholder="Enter City"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required />
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        {/* Proof Number (Left) */}
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Pincode <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter Pincode"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required />
        </div>

        {/* Proof Number (Left) */}
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            State <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter State"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required />
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        {/* First Name (Left) */}
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Country <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="first"
            name="first"
            placeholder="Enter Country"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required />
        </div>

        {/* Middle Div (Right) */}
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Telephone Residence <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="middle"
            name="middle"
            placeholder="+91 Enter STD or ISD code"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required />
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        {/* Last Name (Left) */}
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Mobile Number <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Enter Mobile Number"
            value={mobileNumber} // Set the value of the input
            onChange={handleInputChange} // Handle input change
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
          {mobileNumber && ( // Show button only if mobileNumber is not empty
            <button
              type="button"
              onClick={handleSendOTP}
              className="mt-2 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Send OTP
            </button>
          )}
        </div>

        {/* Father Div (Right) */}
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Alternate Email Address <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="Father"
            name="Father"
            placeholder="Enter Alternate Email Address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required />
        </div>
      </div>

    </form><OTPModal
        isOpen={isOTPModalOpen}
        onClose={() => setIsOTPModalOpen(false)}
        mobileNumber={mobileNumber} /></>
  );
};

export default SecondSection;
