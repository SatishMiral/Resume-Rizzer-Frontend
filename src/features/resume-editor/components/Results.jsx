import { FileText } from "lucide-react";

// Results Component (Placeholder for Step 3)
export const Results = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border-2 border-dashed border-(--border) rounded-3xl px-12 pb-12 pt-5 max-w-2xl w-full">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Your Tailored Resume
        </h2>
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <FileText className="w-16 h-16 mx-auto mb-4 text-blue-500" />
          <p className="text-gray-600 mb-6">Your resume has been optimized!</p>
          <button className="bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};
