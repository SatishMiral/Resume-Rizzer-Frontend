// src/features/resume-editor/components/ResumePreview.jsx
import { useState, useEffect } from "react";
import { Download, Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

export const ResumePreview = ({ docxFile, docxDownloadUrl }) => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { changes } = useSelector((state) => state.resume);

  useEffect(() => {
    const convertToPdf = async () => {
      if (docxFile) {
        try {
          setIsLoading(true);
          setError(null);

          const formData = new FormData();
          formData.append("file", docxFile);

          const response = await fetch(
            "http://127.0.0.1:8000/resume/convert_docx_to_pdf",
            {
              method: "POST",
              body: formData,
              credentials: "include",
            }
          );

          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to convert: ${errorText}`);
          }

          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          setPdfUrl(url);
        } catch (error) {
          console.error("Error converting to PDF:", error);
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
    };
    convertToPdf();

    return () => {
      if (pdfUrl) {
        window.URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [docxFile]);

  const handleDownloadDocx = () => {
    if (docxDownloadUrl) {
      const link = document.createElement("a");
      link.href = docxDownloadUrl;
      link.download = "tailored_resume.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-200">
        {/* Toolbar */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b px-6 py-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2
                className="text-xl font-bold"
                style={{ color: "var(--brand-text)" }}
              >
                Your Tailored Resume
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                📄 Changes are highlighted in green
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleDownloadDocx}
                disabled={!docxDownloadUrl}
                className="px-5 py-2 text-white rounded-lg font-semibold transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-button"
                style={{ backgroundColor: "var(--secondary)" }}
              >
                <Download size={18} />
                Download DOCX
              </button>
            </div>
          </div>

          {/* Changes Summary */}
          {changes && changes.length > 0 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {changes.length}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-green-900 mb-2">
                    Changes Made
                  </h3>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {changes.map((change, index) => (
                      <div key={index} className="text-sm">
                        <div className="text-gray-600 line-through">
                          {change.from_sentence}
                        </div>
                        <div className="text-green-800 font-medium bg-green-100 px-2 py-1 rounded mt-1">
                          ✓ {change.to_sentence}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* PDF Preview */}
        <div className="bg-gray-100 p-8">
          {isLoading ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <Loader2
                  className="animate-spin h-12 w-12 mx-auto mb-4"
                  style={{ color: "var(--primary)" }}
                />
                <p className="text-gray-500">Loading preview...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center max-w-md">
                <p className="text-red-500 mb-4">{error}</p>
                <button
                  onClick={handleDownloadDocx}
                  className="px-5 py-2 text-white rounded-lg font-semibold transition-all"
                  style={{ backgroundColor: "var(--primary)" }}
                >
                  Download DOCX File
                </button>
              </div>
            </div>
          ) : pdfUrl ? (
            <div
              className="bg-white shadow-lg mx-auto"
              style={{ maxHeight: "1200px", position: "relative" }}
            >
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                className="w-full"
                style={{
                  height: "1200px",
                  border: "none",
                }}
                title="Resume Preview"
              />
              {/* Overlay note about highlights */}
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold">
                🎨 Green = Changed
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          💡 <strong>Note:</strong> Green highlighting shows the content that
          was tailored to match the job description. Download the DOCX file to
          see exact formatting with highlights preserved.
        </p>
      </div>
    </div>
  );
};
