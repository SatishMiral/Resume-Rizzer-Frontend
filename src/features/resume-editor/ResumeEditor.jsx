import { useState } from "react";
import { Stepper } from "./components/Stepper";
import { ResumeUpload } from "./components/ResumeUpload";
import { JobDescription } from "./components/JobDescription";
import { Results } from "./components/Results";

// Main Resume Editor Component
export const ResumeEditor = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
    // Automatically move to next step after file upload
    setTimeout(() => {
      setCurrentStep(2);
    }, 500);
  };

  return (
    <div className="py-3">
      <Stepper currentStep={currentStep} />

      <div className="mt-8">
        {currentStep === 1 && <ResumeUpload onFileUpload={handleFileUpload} />}
        {currentStep === 2 && <JobDescription />}
        {currentStep === 3 && <Results />}
      </div>

      {/* Navigation buttons for testing */}
      <div className="flex justify-center gap-4 mt-8">
        {currentStep > 1 && (
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Previous
          </button>
        )}
        {currentStep < 3 && currentStep > 1 && (
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
