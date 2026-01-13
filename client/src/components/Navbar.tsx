import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <img src="/logo.png" alt="Airavata Technologies Logo" className="w-12 h-12 object-contain" />
              <span className="font-display font-bold text-2xl tracking-tight text-gray-900">
                Airavata Technologies
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <button 
              onClick={() => scrollToSection("features")} 
              className="text-gray-600 hover:text-blue-600 font-bold text-lg transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("pricing")} 
              className="text-gray-600 hover:text-blue-600 font-bold text-lg transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-gray-600 hover:text-blue-600 font-bold text-lg transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button 
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-3 py-2 text-lg font-bold text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left px-3 py-2 text-lg font-bold text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-lg font-bold text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
