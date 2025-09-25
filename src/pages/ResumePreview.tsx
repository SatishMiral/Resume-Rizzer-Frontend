import React from 'react';

const ResumePreview: React.FC<{ html: string }> = ({ html }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h4 className="font-semibold mb-2">Tailored Resume Preview</h4>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="mt-3 flex gap-2">
        <button className="px-3 py-1 border rounded">
          Download .docx (mock)
        </button>
        <button className="px-3 py-1 bg-green-600 text-white rounded">
          Save to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ResumePreview;
