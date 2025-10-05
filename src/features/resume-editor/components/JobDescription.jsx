import { Wand } from "lucide-react";
// Job Description Component (Placeholder for Step 2)
export const JobDescription = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border-2 border-dashed border-(--border) rounded-3xl px-12 pb-10 pt-5 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold text-center mb-5">
          Add Job Description
        </h2>
        <textarea
          className="w-full h-64 p-4 border border-(--border) rounded-[10px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Paste the job description here..."
        />
        <button className="mt-6 w-full bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
          Analyze & Tailor Resume <Wand className="inline-block ml-1" />
        </button>
      </div>
    </div>
  );
};
