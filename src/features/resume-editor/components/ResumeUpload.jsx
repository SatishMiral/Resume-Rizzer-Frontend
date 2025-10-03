import { useState } from "react";
import DocumentsSVG from "../../../assets/cards.svg";

// Resume Upload Component
export const ResumeUpload = ({ onFileUpload }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file) => {
    // Check if file is PDF, DOC, or DOCX
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ];

    if (validTypes.includes(file.type)) {
      onFileUpload(file);
    } else {
      alert("Please upload a PDF, Word document, or text file");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center border-2 border-dashed border-gray-300 rounded-3xl p-12 max-w-xl w-full">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Upload your Resume to get started
        </h2>

        <div
          className={`bg-gradient-to-br from-[#7DD7DE] to-blue-500 rounded-3xl py-8 mx-8 w-[85%] transition-all ${
            isDragging ? "scale-105 shadow-xl" : ""
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* Document Illustration */}
          {/* <div className="flex justify-center mb-6 relative">
            <div className="absolute left-1/4 top-0 transform -rotate-12">
              <div className="bg-white rounded-lg shadow-lg p-4 w-24 h-32">
                <FileText className="text-blue-500 w-6 h-6 mb-2" />
                <div className="space-y-1">
                  <div className="h-1 bg-gray-200 rounded"></div>
                  <div className="h-1 bg-gray-200 rounded"></div>
                  <div className="h-1 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="bg-white rounded-lg shadow-xl p-4 w-28 h-36">
                <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                  PDF
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 bg-gray-300 rounded"></div>
                  <div className="h-1.5 bg-gray-300 rounded"></div>
                  <div className="h-1.5 bg-gray-300 rounded"></div>
                  <div className="h-1.5 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>

            <div className="absolute right-1/4 top-0 transform rotate-12">
              <div className="bg-white rounded-lg shadow-lg p-4 w-24 h-32">
                <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                  DOC
                </div>
                <div className="space-y-1">
                  <div className="h-1 bg-gray-200 rounded"></div>
                  <div className="h-1 bg-gray-200 rounded"></div>
                  <div className="h-1 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Document Illustration */}
          <div className="flex justify-center mb-6">
            <img
              src={DocumentsSVG}
              alt="Document illustrations"
              className="w-70 h-45 object-contain"
            />
          </div>

          {/* Upload Button */}
          <div className="flex flex-col items-center">
            <label className="cursor-pointer">
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleFileInput}
              />
              <div className="bg-white text-black font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                Upload Your Resume
              </div>
            </label>

            <p className="text-white mt-4 text-center">
              Drop your resume
              <br />
              or{" "}
              <label className="underline cursor-pointer font-semibold">
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileInput}
                />
                choose a file
              </label>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
