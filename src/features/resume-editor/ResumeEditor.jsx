import { Button } from "../../components/ui/Button";

export const ResumeEditor = () => {
  return (
    <section className="p-6 border rounded-xl bg-white shadow">
      <h2 className="text-xl font-semibold mb-4">Resume Editor</h2>
      <textarea
        placeholder="Paste your resume here..."
        className="w-full h-40 p-3 border rounded-lg font-mono text-sm"
      />
      <div className="mt-4">
        <Button>Save Resume</Button>
      </div>
    </section>
  );
};
