import { Mail, Twitter, Linkedin, Github, Heart } from "lucide-react";
import LogoSVG from "../../assets/logo_main.svg";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={LogoSVG} alt="Resume Rizzer" className="h-10 w-10" />
            </div>
            <p className="text-gray-600 font-medium ml-1 mb-4 max-w-md">
              Transform your resume into a compelling story that actually lands
              interviews. Stop sending hope, start sending evidence.
            </p>
            <div className="flex ml-1 gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-500 text-blue-500 hover:text-white flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-500 text-blue-500 hover:text-white flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-500 text-blue-500 hover:text-white flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-500 text-blue-500 hover:text-white flex items-center justify-center transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Product</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-medium hover:text-[var(--secondary)] transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-medium hover:text-[var(--secondary)] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-medium hover:text-[var(--secondary)] transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-medium hover:text-[var(--secondary)] transition-colors"
                >
                  Examples
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-[var(--primary)] mb-2">Company</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-medium hover:text-[var(--secondary)] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-medium hover:text-[var(--secondary)] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-medium hover:text-[var(--secondary)] transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-medium hover:text-[var(--secondary)] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 font-mediumtext-sm">
              © {new Date().getFullYear()} Resume Rizzer. All rights reserved.
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-600 font-medium hover:text-[var(--secondary)] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 font-medium hover:text-[var(--secondary)] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-600 font-medium hover:text-[var(--secondary)] transition-colors"
              >
                Cookie Policy
              </a>
            </div>

            <div className="flex items-center gap-1 text-gray-600 text-sm">
              Made with{" "}
              <Heart size={14} className="text-red-500 fill-current" /> for job
              seekers
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
