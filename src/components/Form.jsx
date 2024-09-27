import React, { useState } from "react";
import Button from "./Button"; // Import the Button component
import Status from "./Status"; // Import the Status component
import FirstSection from "./FirstSection"; // Assume these are your sections
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import CaptchaPopup from "./CaptchaPopup"; // Optional captcha popup component
import ThankYou from "./ThankYou"; // Import ThankYou component

const Form = () => {
  const [section, setSection] = useState(1); // State to track the current section
  const [showCaptcha, setShowCaptcha] = useState(false); // State for captcha popup
  const [isSubmitted, setIsSubmitted] = useState(false); // State for form submission

  const handleNextSection = () => {
    if (section < 5) {
      setSection((prev) => prev + 1); // Move to the next section
    } else {
      setShowCaptcha(true); // Show the captcha popup when on the fifth section and submit clicked
    }
  };

  const handlePreviousSection = () => {
    setSection((prev) => Math.max(prev - 1, 1)); // Move to the previous section (min 1)
  };

  const handleCaptchaSubmit = () => {
    setShowCaptcha(false); // Close the captcha popup after submission
    alert("Form submitted successfully!");
  };

  const handleCaptchaVerify = () => {
    setShowCaptcha(false);
    setIsSubmitted(true); // Set the form as submitted
  };

  // Check for form submission and render Thank You component
  if (isSubmitted) {
    return <ThankYou />; // Render ThankYou component if submitted
  }

  return (
    <div className="w-full flex">
      <Status section={section} showCaptcha={showCaptcha} />
      <div className="flex flex-col space-y-0 shadow-lg">
        <div className="bg-white max-h-[calc(80vh-50px)] min-h-[calc(81vh-50px)] overflow-y-auto shadow-lg px-16 py-2 min-w-[600px] max-w-[600px]">
          <h2 className="text-xs my-2">
            All fields marked with <span className="text-red-700">*</span> are mandatory
          </h2>
          {section === 1 && <FirstSection />}
          {section === 2 && <SecondSection />}
          {section === 3 && <ThirdSection />}
          {section === 4 && <FourthSection />}
          {section === 5 && !showCaptcha && <FifthSection />}
          
          {section === 5 && showCaptcha && (
            <CaptchaPopup
              onClose={() => setShowCaptcha(false)}
              onSubmit={handleCaptchaSubmit}
              onVerify={handleCaptchaVerify} // Ensure this is being passed correctly
            />
          )}
        </div>
        {!showCaptcha && <Button onSubmit={handleNextSection} onCancel={handlePreviousSection} />}
      </div>
    </div>
  );
};

export default Form;
