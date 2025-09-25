// Dummy API service using fetch/axios-like signatures.
// Replace with real axios instance and baseURL in production.

// Dummy API service using fetch/axios-like signatures.
// Replace with real axios instance and baseURL in production.
import type { TailoredResume } from '../types';

export const authApi = {
  login: async (email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 600));
    return { id: 'u1', email, name: 'Satish', token: 'fake-jwt' };
  },
};

export const resumeApi = {
  uploadAndTailor: async (file: File | null, jd: string) => {
    // dummy processing delay
    await new Promise((r) => setTimeout(r, 1200));

    // create a mocked tailored resume
    const mock: TailoredResume = {
      id: 'r1',
      title: file ? `Tailored - ${file.name}` : 'Tailored - Untitled',
      content: `\n<h2>Tailored Resume Preview</h2>\n<p>Candidate: Mocked User</p>\n<p>Matched to JD: ${jd.slice(0, 120)}${jd.length > 120 ? '...' : ''}</p>\n\n<p>-- Suggested bullets --</p>\n<ul>\n <li>Improved parsing & ATS-focused keywords</li>\n <li>Added targeted achievements matching JD</li>\n <li>Optimized skills section for recruiter scanning</li>\n</ul>`,
    };

    return mock;
  },
};
