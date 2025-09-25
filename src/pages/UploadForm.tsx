import React, { useState } from 'react';
import { resumeApi } from '../services/api';
import ResumePreview from './ResumePreview';

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jd, setJd] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const tailored = await resumeApi.uploadAndTailor(file, jd);
      setResult(tailored.content);
    } catch (err) {
      setResult('<p>Error generating tailored resume. Try again.</p>');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-sm">Upload resume (.docx)</label>
        <input
          type="file"
          accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />

        <label className="block text-sm">Paste job description</label>
        <textarea
          value={jd}
          onChange={(e) => setJd(e.target.value)}
          className="w-full p-2 border rounded h-36"
          placeholder="Paste JD here..."
        />

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-sky-600 text-white rounded"
          >
            {loading ? 'Tailoring...' : 'Generate Tailored Resume'}
          </button>
          <button
            type="button"
            onClick={() => {
              setFile(null);
              setJd('');
              setResult(null);
            }}
            className="px-4 py-2 border rounded"
          >
            Reset
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-6">
          <ResumePreview html={result} />
        </div>
      )}
    </div>
  );
};

export default UploadForm;
