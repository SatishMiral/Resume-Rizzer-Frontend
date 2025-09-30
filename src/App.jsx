import { Header } from "./components/layout/Header";
import { ResumeEditor } from "./features/resume-editor/ResumeEditor";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="container mx-auto flex-1 py-10">
        <ResumeEditor />
      </main>
    </div>
  );
}
