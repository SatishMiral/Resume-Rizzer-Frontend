import { Button } from "../../components/ui/Button";
import Logo from "../../assets/LOGO.svg";
import { ChevronDown } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto flex justify-between py-3 px-6">
        {/* Logo / Brand */}
        <div className="flex ml-2">
          <img src={Logo} alt="Resume Rizzer Logo" className="h-11 w-35" />
        </div>

        {/* Navigation */}
        <nav className="hidden items-center md:flex space-x-10">
          <a
            href="#editor"
            className="[color:var(--brand-text)] hover:text-blue-600 font-semibold"
          >
            Resume
            <ChevronDown className="inline-block ml-1 mu-1" size={20} />
          </a>
          <a
            href="#jd"
            className="[color:var(--brand-text)] hover:text-blue-600 font-semibold"
          >
            Pricing
          </a>
        </nav>

        {/* Call to action */}
        <div className="hidden md:flex space-x-4 mr-3">
          <Button variant="secondary">Sign in</Button>
          <Button variant="primary">Get Started</Button>
        </div>
      </div>
    </header>
  );
};
