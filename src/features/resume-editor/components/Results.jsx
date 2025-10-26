// src/features/resume-editor/components/Results.jsx
import { useSelector } from "react-redux";
import { ResumePreview } from "./ResumePreview";
import { ArrowLeft } from "lucide-react";

export const Results = ({ onStartOver }) => {
  const { tailoredResumeFile, uploadedFile, tailoredResumeUrl, changes } =
    useSelector((state) => state.resume);

  const fileToDisplay = tailoredResumeFile || uploadedFile;

  return (
    <div className="py-8">
      <div className="max-w-5xl mx-auto mb-6 px-4">
        <button
          onClick={onStartOver}
          className="flex items-center gap-2 font-semibold transition-colors hover:underline"
          style={{ color: "var(--primary)" }}
        >
          <ArrowLeft size={20} />
          Start Over
        </button>
      </div>

      {fileToDisplay && tailoredResumeUrl ? (
        <ResumePreview
          docxFile={fileToDisplay}
          docxDownloadUrl={tailoredResumeUrl}
        />
      ) : (
        <div className="flex justify-center items-center">
          <div className="border-2 border-dashed rounded-3xl px-12 pb-12 pt-5 max-w-2xl w-full">
            <h2 className="text-2xl font-semibold text-center mb-8">
              Your Tailored Resume
            </h2>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-600 mb-6">
                No tailored resume available yet.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
