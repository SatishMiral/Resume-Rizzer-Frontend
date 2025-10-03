// Job Description Component (Placeholder for Step 2)
export const JobDescription = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border-2 border-dashed border-gray-300 rounded-3xl p-12 max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-center mb-8">
          Add Job Description
        </h2>
        <textarea
          className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Paste the job description here..."
        />
        <button className="mt-6 w-full bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
          Analyze & Tailor Resume
        </button>
      </div>
    </div>
  );
};
