import React, { useState } from "react";

const FifthSection = () => {
  const [experienceSelected, setExperienceSelected] = useState(false);

  // Handle the change in the select input
  const handleExperienceChange = (e) => {
    if (e.target.value !== "") {
      setExperienceSelected(true); // Show hidden element if a valid qualification is selected
    } else {
      setExperienceSelected(false); // Hide hidden element if no qualification is selected
    }
  };

  return (
    <form>
      <div className="flex space-x-4 mb-4">
        {/* PAN Number (Left) */}
        <div className="w-1/2">
          <label
            htmlFor="Pan"
            className="block text-sm font-medium text-gray-700"
          >
            Occupation <span className="text-red-700">*</span>
          </label>
          <select
            id="occupation"
            name="occupation"
            className="mt-1 font-medium text-gray-700 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select Occupation </option>
          </select>
        </div>

        {/* PAN Card Div (Right) */}
        <div className="w-1/2">
          <label
            htmlFor="totalExperience"
            className="block text-sm font-medium text-gray-700"
          >
            Total Experience (in yrs) <span className="text-red-700">*</span>
          </label>
          <select
            id="totalExperience"
            name="totalExperience"
            onChange={handleExperienceChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select Total Experience</option>
            <option value="less_than_1">{"<1"}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="above_10">Above 10</option>
          </select>
        </div>
      </div>

      {/* hidden element */}
      {experienceSelected && (
        <>
          <div className="flex space-x-4 mb-4">
            {/* PAN Number (Left) */}
            <div className="w-1/2">
              <label
                htmlFor="Pan"
                className="block text-sm font-medium text-gray-700"
              >
                Name of the Organization <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                placeholder="Enter Organization"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* PAN Card Div (Right) */}
            <div className="w-1/2">
              <label
                htmlFor="Pan"
                className="block text-sm font-medium text-gray-700"
              >
                Designation <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                placeholder="Enter Designation"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
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
                From Date <span className="text-red-700">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                placeholder="Enter Date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* PAN Card Div (Right) */}
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
                required
              />
            </div>
          </div>
          <div className="flex space-x-4 mb-4">
            {/* Aadhar Number (Left) */}
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
                required
              />
            </div>

            {/* Passport Card Div (Right) */}
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
                required
              />
            </div>
          </div>
          <div className="flex space-x-4 mb-4">
            {/* Proof Number (Left) */}
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
                required
              />
            </div>

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
                required
              />
            </div>
          </div>
          <div className="flex space-x-4 mb-4">
            {/* First Name (Left) */}
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
                required
              />
            </div>

            {/* Middle Div (Right) */}
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
                required
              />
            </div>
          </div>
        </>
      )}
    </form>
  );
};

export default FifthSection;
