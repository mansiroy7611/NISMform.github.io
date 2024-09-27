import React, { useState } from "react";
const ThirdSection = () => {
  const [qualificationSelected, setQualificationSelected] = useState(false);

  // Handle the change in the select input
  const handleQualificationChange = (e) => {
    if (e.target.value !== "") {
      setQualificationSelected(true); // Show hidden element if a valid qualification is selected
    } else {
      setQualificationSelected(false); // Hide hidden element if no qualification is selected
    }
  };

  return (
    <form>
      <div className="flex space-x-4 mb-4">
        {/*  Higher Qualification */}
        <div className="w-full">
          <label
            htmlFor="qualification"
            className="block text-sm font-medium text-gray-700"
          >
            Higher Qualification <span className="text-red-700">*</span>
          </label>
          <select
            id="qualification"
            name="qualification"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleQualificationChange}
            required
          >
            <option value="">Select Qualification</option>
            <option value="below_higher_secondary">
              Below Higher Secondary
            </option>
            <option value="higher_secondary_diploma">
              Higher Secondary/Diploma
            </option>
            <option value="graduation">Graduation</option>
            <option value="post_graduation">Post Graduation</option>
          </select>
        </div>
      </div>

      {/* Hidden element */}
      {qualificationSelected && (
        <>
          <div className="mb-12 my-8">
            <span className="absolute  w-[80vh] h-[1px] bg-gray-300"></span>
          </div>
          <div className="flex space-x-4 mb-4">
            {/* PAN Number (Left) */}
            <div className="w-1/2">
              <label
                htmlFor="Pan"
                className="block text-sm font-medium text-gray-700"
              >
                Major Subject <span className="text-red-700">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                className="mt-1 font-medium text-gray-700 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="">Select Major Subject</option>
                <option value="Arts">Arts</option>
                <option value="Science">Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Engineering">Engineering</option>
                <option value="Architecture">Architecture</option>
                <option value="Law">Law</option>
                <option value="Management">Management</option>
                <option value="Medicine">Medicine</option>
                <option value="Diploma">Diploma</option>
              </select>
            </div>

            {/* PAN Card Div (Right) */}
            <div className="w-1/2">
              <label
                htmlFor="pan"
                className="block text-sm font-medium text-gray-700"
              >
                Institute/University <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="institute"
                name="institute"
                placeholder="Enter Institute/University"
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
                Year of Passing <span className="text-red-700">*</span>
              </label>
              <input
                type="date"
                id="passing"
                name="passing"
                placeholder="Enter Landmark "
                className="mt-1 font-medium text-gray-700 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Passport Card Div (Right) */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Percantage/Grade <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="grade"
                name="grade"
                placeholder="Enter Percentage/Grade"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <h3 className="text-sm font-medium text-gray-700">+ Add Another Major Subject</h3>
        </>
      )}
    </form>
  );
};

export default ThirdSection;
