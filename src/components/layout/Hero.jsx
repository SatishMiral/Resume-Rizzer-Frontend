import { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { ArrowRight, Play } from "lucide-react";
import HeroSVG from "../../assets/hero.svg";

export const Hero = () => {
  const words = ["Role", "Category", "Job Description"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  {
    /* Typing effect logic */
  }
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 100 : 150;
    const pauseTime = 2000; // Pause after typing complete word

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="container mx-auto flex-1 py-15 bg-gradient-to-b from-[var(--white)] to-[var(--gradient)]">
      <div className="flex items-start justify-between max-w-7xl mx-10 pl-13">
        {/* Left side - Text content */}
        <div className="flex-2 max-w-2xl">
          {/* Hero Heading with dynamic text */}
          <h1 className="text-5xl font-bold mb-5 leading-tight">
            <span className="font-semibold text-black">Upload a </span>
            <span className="[color:var(--primary)]">Resume</span>
            <br />
            <span className="font-semibold text-black">Paste a </span>
            <span className="[color:var(--primary)]">{currentText}</span>
            <br />
            <span className="font-semibold text-black">
              Get a Resume that gets
            </span>
            <br />
            <span className="[color:var(--primary)]">replies.</span>
          </h1>

          {/* Hero Subheading */}
          <p className="text-xl text-gray-600 mb-8 italic">
            <span className="font-semibold">Stop</span> sending hope.{" "}
            <span className="font-semibold">Start </span> sending evidence.
            <br />
            We reshape your <span className="font-semibold">
              achievements
            </span>{" "}
            into <span className="font-normal">recruiter language</span> that
            actually <span className="font-semibold">lands interviews</span>.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex gap-4 items-center">
            <Button variant="tryForFree" className="shadow-button">
              Try for free{" "}
              <ArrowRight className="inline-block items-center" size={18} />
            </Button>
            <Button variant="getStarted" className="shadow-button">
              See how it works{" "}
              <Play className="inline-block ml-1 -mt-0.5" size={17} />
            </Button>
          </div>
        </div>

        {/* Right side - SVG Illustration */}
        <div className="flex-1 flex justify-end items-start">
          <img
            src={HeroSVG}
            alt="Resume transformation process"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};
