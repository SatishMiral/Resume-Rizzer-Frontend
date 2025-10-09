import { Wand } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { tailorResume } from "../../../store/resumeSlice";
import { useState } from "react";

export const JobDescription = ({ goToNextStep }) => {
  const dispatch = useDispatch();
  const { uploadedFile, loading, error } = useSelector((state) => state.resume);
  const [jdText, setJdText] = useState("");

  const handleAnalyze = async () => {
    console.log("Analyzing with JD Clicked");
    if (!uploadedFile) {
      alert("Please upload a resume first!");
      return;
    }

    if (!jdText.trim()) {
      alert("Please paste a job description first!");
      return;
    }

    const resultAction = await dispatch(
      tailorResume({ file: uploadedFile, jdText })
    );

    if (tailorResume.fulfilled.match(resultAction)) {
      goToNextStep(); // move to Results step after success
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="border-2 border-dashed rounded-3xl px-12 pb-10 pt-5 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold text-center mb-5">
          Add Job Description
        </h2>

        <textarea
          className="w-full h-64 p-4 border rounded-[10px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Paste the job description here..."
          value={jdText}
          onChange={(e) => setJdText(e.target.value)}
        />

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="mt-6 w-full [background-color:var(--primary)] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:opacity-90 transition"
        >
          {loading ? "Analyzing..." : "Analyze & Tailor Resume"}
          <Wand className="inline-block ml-1" />
        </button>

        {error && (
          <p className="text-red-600 text-center mt-4 font-medium">{error}</p>
        )}
      </div>
    </div>
  );
};
