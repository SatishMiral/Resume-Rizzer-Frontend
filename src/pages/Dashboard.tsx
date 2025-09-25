import React from 'react';
import Header from '../components/layout/Header';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Your Dashboard</h2>
        <p className="text-slate-600">
          (Mocked) Saved tailored resumes will appear here.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            No saved resumes yet — generate one from the landing page.
          </div>
          <div className="bg-white p-4 rounded shadow">
            You can also manage versions here.
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
