import React from "react";

const FourthSection = () => {
  return (
    <form>
      <div className="flex space-x-4 mb-4">
        {/* PAN Number (Left) */}
        <div className="w-1/2">
          <label
            htmlFor="professionalQualification"
            className="block text-sm font-medium text-gray-700"
          >
            Professional Qualification <span className="text-red-700">*</span>
          </label>
          <select
            id="professionalQualification"
            name="professionalQualification"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select Professional Qualification</option>
            <option value="ca">Chartered Accountant (CA)</option>
            <option value="cfa">Chartered Financial Analyst (CFA)</option>
            <option value="icwa">Cost Accountant (ICWA)</option>
            <option value="iib_certified">
              Certified Associate of Indian Institute of Bankers
            </option>
            <option value="phd_mphil">PhD/M/Phil</option>
            <option value="licentiate_life_insurance">
              Licentiate/Associate/Fellowship of Life Insurance from Insurance
              Institute of India
            </option>
            <option value="actuary_iai">
              Actuary from Institute of Actuaries of India
            </option>
            <option value="civil_services_upsc">
              Civil Service Examinations by Union Public Service Commission
              (UPSC)
            </option>
            <option value="company_secretary">Company Secretary</option>
            <option value="ffsi_flmi">
              Fellow, Financial Services Institute (FFSI) / Fellow, Life
              Management Institute (FLMI)
            </option>
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
    </form>
  );
};

export default FourthSection;
