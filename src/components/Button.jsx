import React from 'react';

const Button = ({ onSubmit, onCancel }) => {
  return (
    <div className="flex justify-end space-x-4 py-2  bg-white r-0 pr-12  ">
          <button
          type="submit"
          onClick={onSubmit}
          className="bg-[#336699] text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-36">
                       
            Submit
            
          </button>
          <button
          onClick={onCancel}
          className="bg-gray-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-36">
            Cancel
          </button>
        </div>
  
  );
};

export default Button;
