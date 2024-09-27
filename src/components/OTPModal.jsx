import React from 'react';

const OTPModal = ({ isOpen, onClose, mobileNumber }) => {
    if (!isOpen) return null;
    const handleSubmitOTP = (event) => {
        event.preventDefault();
        // Add your OTP submission logic here
        console.log("OTP submitted for mobile:", mobileNumber);
        // After submission, close the modal
        onClose();
      };
      return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-lg">
            <h2 className="text-lg font-semibold">Enter OTP</h2>
            <form onSubmit={handleSubmitOTP}>
              <label className="block mt-4">
                OTP:
                <input
                  type="text"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </label>
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Submit OTP
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      );
  };
  

export default OTPModal;
