import React, { useState } from "react";

const CaptchaPopup = ({ onClose, onVerify }) => {
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
  const [userInput, setUserInput] = useState(""); 
  const [isChecked, setIsChecked] = useState(false);

  // Function to generate a random CAPTCHA code
  function generateCaptcha() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  }

  // Handle verification of the CAPTCHA
  const handleVerification = () => {
    if (userInput === captchaCode && isChecked) {
      onVerify(); // Trigger the verification action
      alert("CAPTCHA Verified!");
    } else if (!isChecked) {
      alert("Please certify the information by checking the box.");
    } else {
      alert("Incorrect CAPTCHA. Please try again.");
      setCaptchaCode(generateCaptcha()); // Regenerate CAPTCHA after incorrect input
      setUserInput("");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-lg w-[300px] h-[300px] flex flex-col justify-between">
        <h2 className="text-lg font-semibold mb-2 text-center">Verify CAPTCHA</h2>

        {/* Display CAPTCHA code */}
        <div className="flex items-center justify-center mb-2">
          <span className="text-2xl font-mono p-2 bg-gray-200 rounded">
            {captchaCode}
          </span>
        </div>

        {/* Input field for user to enter CAPTCHA */}
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="border p-2 w-full mb-2"
          placeholder="Enter CAPTCHA"
          required
        />

        {/* Checkbox for certification */}
        <div className="flex items-start text-left mb-2">
          <input
            type="checkbox"
            id="certify-checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="mr-2"
          />
          <label htmlFor="certify-checkbox" className="text-xs leading-tight">
            I certify that all the above information provided is true to the best
            of my knowledge. I am aware that if any of the above information is
            found to be incorrect, NISM may take disciplinary action, including
            withdrawal of the certificate.
          </label>
        </div>

        {/* Buttons side by side */}
        <div className="flex justify-between">
          <button
            onClick={handleVerification}
            className="bg-blue-500 text-white px-4 py-2 rounded w-1/2 mr-2"
          >
            Verify
          </button>
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded w-1/2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaptchaPopup;
