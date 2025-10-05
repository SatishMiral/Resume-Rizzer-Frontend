export const Stepper = ({ currentStep }) => {
  const steps = [
    { number: 1, label: "Upload Resume" },
    { number: 2, label: "Add Job" },
    { number: 3, label: "View Results" },
  ];

  return (
    <div className="flex items-center justify-center mb-10">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          {/* Step Circle */}
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                currentStep >= step.number
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {step.number}
            </div>
            <span
              className={`mt-2 text-sm font-semibold ${
                currentStep >= step.number ? "text-gray-900" : "text-gray-400"
              }`}
            >
              {step.label}
            </span>
          </div>

          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div
              className={`w-32 h-0.5 mx-4 mb-6 transition-colors ${
                currentStep > step.number ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};
