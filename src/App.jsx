import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ResumeEditor } from "./features/resume-editor/ResumeEditor";
import { Hero } from "./components/layout/Hero";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Main content */}
      <main className="container mx-auto flex-1 py-10">
        <ResumeEditor />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
