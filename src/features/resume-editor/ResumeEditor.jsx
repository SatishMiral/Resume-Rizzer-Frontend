import { useState } from "react";
import { Stepper } from "./components/Stepper";
import { ResumeUpload } from "./components/ResumeUpload";
import { JobDescription } from "./components/JobDescription";
import { Results } from "./components/Results";
import { useSelector } from "react-redux";

export const ResumeEditor = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { tailoredResumeUrl } = useSelector((state) => state.resume);

  const handleFileUpload = (file) => {
    setTimeout(() => setCurrentStep(2), 500);
  };

  const goToNextStep = () => setCurrentStep((s) => s + 1);

  return (
    <div className="py-3">
      <Stepper currentStep={currentStep} />

      <div className="mt-8">
        {currentStep === 1 && <ResumeUpload onFileUpload={handleFileUpload} />}
        {currentStep === 2 && <JobDescription goToNextStep={goToNextStep} />}
        {currentStep === 3 && <Results downloadUrl={tailoredResumeUrl} />}
      </div>
    </div>
  );
};
