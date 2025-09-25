import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import UploadForm from './UploadForm';

const Landing: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <section>
            <h1 className="text-4xl font-bold mb-4">
              Resume Rizzer — Tailor resumes to job descriptions, fast.
            </h1>
            <p className="mb-6 text-slate-600">
              Upload your resume (.docx) and the job description — get a
              tailored resume optimized for ATS and recruiter attention.
            </p>
            <div className="flex gap-3">
              <Link
                to="/login"
                className="px-4 py-2 bg-sky-600 text-white rounded"
              >
                Get Started
              </Link>
              <a href="#upload" className="px-4 py-2 border rounded">
                Try Demo
              </a>
            </div>
          </section>

          <section id="upload" className="bg-white p-6 rounded shadow-sm">
            <UploadForm />
          </section>
        </div>

        <section className="mt-12">
          <h3 className="text-xl font-semibold mb-2">How it works</h3>
          <ol className="list-decimal list-inside text-slate-700">
            <li>Upload your resume (.docx)</li>
            <li>Paste the job description</li>
            <li>
              Our AI suggests sentence-by-sentence edits and a tailored resume
            </li>
            <li>Download or apply changes</li>
          </ol>
        </section>
      </main>
    </div>
  );
};

export default Landing;
