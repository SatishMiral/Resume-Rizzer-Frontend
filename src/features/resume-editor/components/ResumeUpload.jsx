import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUploadedFile } from "../../../store/resumeSlice";
import DocumentsSVG from "../../../assets/cards.svg";
import { Check } from "lucide-react";

export const ResumeUpload = ({ onFileUpload }) => {
  const dispatch = useDispatch();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFileState] = useState(null);

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
    if (files.length > 0) handleFile(files[0]);
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    if (files.length > 0) handleFile(files[0]);
  };

  const handleFile = (file) => {
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ];

    if (validTypes.includes(file.type)) {
      setUploadedFileState(file);
      dispatch(setUploadedFile(file)); // store in Redux
      onFileUpload(file); // notify parent to go next step
    } else {
      alert("Please upload a PDF, Word document, or text file");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center border-2 border-dashed [border-color:var(--brand-text)] rounded-3xl px-12 pb-12 pt-5 max-w-xl w-full bg-white shadow-sm">
        <h2 className="text-2xl font-semibold text-center mb-8 text-[color:var(--brand-text)]">
          Upload your resume to get started
        </h2>

        {/* Upload Card */}
        <div
          className={`bg-gradient-to-br from-[var(--primary)] to-[#7DD7DE] rounded-3xl pt-8 pb-5 mx-8 w-[85%] transition-all ${
            isDragging ? "scale-105 shadow-xl" : ""
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* Document Illustration */}
          <div className="flex justify-center mb-6">
            <img
              src={DocumentsSVG}
              alt="Document illustrations"
              className="w-64 h-40 object-contain"
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
              <div className="bg-white text-black font-semibold px-8 py-3 rounded-[10px] shadow-md hover:shadow-lg transition-all">
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

          {/* File Upload Status */}
          <div className="mt-6 text-center">
            {uploadedFile ? (
              <div className="text-white">
                <p className="text-sm mb-2">{uploadedFile.name}</p>
                <div className="flex items-center justify-center gap-2">
                  <Check size={18} className="text-green-400" />
                  <span className="font-semibold">File Uploaded</span>
                </div>
              </div>
            ) : (
              <p className="text-white font-medium">No file uploaded.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
