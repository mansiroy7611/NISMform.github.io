import React from 'react'
import { FaCamera } from "react-icons/fa";


const FirstSection = () => {
  return (
    <form id="personal">
          <div className="flex space-x-4 mb-4">
            {/* candidate photo Div (Left) */}
            <div className="w-1/2">
              <label
                htmlFor="aadhaar"
                className="block text-sm font-medium text-gray-700"
              >
                Candidate's Photo <span className="text-red-700">*</span>
              </label>

              {/* File Upload Field with Dashed Border */}
              <label
                htmlFor="image"
                className="mt-1 block w-full px-3 py-10 border-2 border-dashed border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-center cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center text-gray-500">
                  {/* Camera Icon from react-icons */}
                  <FaCamera className="h-12 w-12 mb-2" />
                  <p className="text-sm">Select files to upload</p>
                  <p className="text-xs text-gray-600">
                    <span className="font-bold text-blue-800"> Capture </span>{" "}
                    photo or{" "}
                    <span className="font-bold text-blue-800">upload</span> from
                    your device
                  </p>
                </div>
              </label>

              {/* Hidden Input */}
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="hidden"
              />
            </div>

            {/* PAN Card Div (Right) */}
            <div className="w-1/2">
              <label
                htmlFor="aadhaar"
                className="block text-sm font-medium text-gray-700"
              >
                PAN <span className="text-red-700">*</span>
              </label>

              {/* File Upload Field with Dashed Border */}
              <label
                htmlFor="image"
                className="mt-1 block w-full px-3 py-10 border-2 border-dashed border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-center cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center text-gray-500">
                  {/* Camera Icon from react-icons */}
                  <FaCamera className="h-12 w-12 mb-2" />
                  <p className="text-sm">Select files to upload</p>
                  <p className="text-xs text-gray-600">
                    <span className="font-bold text-blue-800"> Capture </span>{" "}
                    photo or{" "}
                    <span className="font-bold text-blue-800">upload</span> from
                    your device
                  </p>
                </div>
              </label>

              {/* Hidden Input */}
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>

          <div className="flex space-x-4 mb-4">
            {/* PAN Number (Left) */}
            <div className="w-1/2">
              <label
                htmlFor="Pan"
                className="block text-sm font-medium text-gray-700"
              >
                PAN Number <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="pan"
                name="pan"
                placeholder="Enter PAN Number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* PAN Card Div (Right) */}
            <div className="w-1/2">
              <label
                htmlFor="pan"
                className="block text-sm font-medium text-gray-700"
              >
                PAN Number Comfirm <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="pan"
                name="pan"
                placeholder="Enter PAN Number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          <div className="flex space-x-4 mb-4">
            {/* Aadhar Number (Left) */}
            <div className="w-1/2">
              <label
                htmlFor="aadhaar"
                className="block text-sm font-medium text-gray-700"
              >
                Aadhar Number <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="aadhaar"
                name="aadhaar"
                placeholder="Enter Aadhaar Number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Passport Card Div (Right) */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Passport Number <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="passport"
                name="passport"
                placeholder="Enter Passport Number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          <div className="flex space-x-4 mb-4">
            {/* Proof Number (Left) */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Proof of Address <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Select Proof of Address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          <div className="flex space-x-4 mb-4">
            {/* Image of proof of address Div (Left) */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Image of Proof of Address{" "}
                <span className="text-red-700">*</span>
              </label>

              {/* File Upload Field with Dashed Border */}
              <label
                htmlFor="image"
                className="mt-1 block w-full px-3 py-10 border-2 border-dashed border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-center cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center text-gray-500">
                  {/* Camera Icon from react-icons */}
                  <FaCamera className="h-12 w-12 mb-2" />
                  <p className="text-sm">Select files to upload</p>
                  <p className="text-xs text-gray-600">
                    <span className="font-bold text-blue-800"> Capture </span>{" "}
                    photo or{" "}
                    <span className="font-bold text-blue-800">upload</span> from
                    your device
                  </p>
                </div>
              </label>

              {/* Hidden Input */}
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>

          <div className="flex space-x-4 mb-4">
            {/* First Name (Left) */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                First Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="first"
                name="first"
                placeholder="Enter First Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Middle Div (Right) */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Middle Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="middle"
                name="middle"
                placeholder="Enter Middle Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          <div className="flex space-x-4 mb-4">
            {/* Last Name (Left) */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Last Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="last"
                name="last"
                placeholder="Enter Last Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Father Div (Right) */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Father's Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="Father"
                name="Father"
                placeholder="Enter Father Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          <div className="flex space-x-4 mb-4">
            {/* DOB (Left) */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth <span className="text-red-700">*</span>
              </label>
              <input
                type="Date"
                id="date"
                name="date"
                placeholder="Enter Date of Birth"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* email Div (Right) */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Alternate Email ID <span className="text-red-700">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email ID"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          <div className="flex space-x-4 mb-4">
            {/* Gender (Left) */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Gender <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="Gender"
                name="Gender"
                placeholder="Enter Gender"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
        </form>
  )
}

export default FirstSection
