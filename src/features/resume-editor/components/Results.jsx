import { FileText } from "lucide-react";

export const Results = ({ downloadUrl }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="border-2 border-dashed rounded-3xl px-12 pb-12 pt-5 max-w-2xl w-full">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Your Tailored Resume
        </h2>
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <FileText className="w-16 h-16 mx-auto mb-4 text-blue-500" />
          {downloadUrl ? (
            <>
              <p className="text-gray-600 mb-6">
                Your tailored resume is ready!
              </p>
              <a
                href={downloadUrl}
                download="tailored_resume.docx"
                className="[background-color:var(--primary)] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:opacity-90 transition"
              >
                Download Resume
              </a>
            </>
          ) : (
            <p className="text-gray-600 mb-6">
              No tailored resume available yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
