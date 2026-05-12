import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-5">
        
        {/* Logo */}
        <h2 className="text-3xl md:text-4xl font-thin text-white">
          <span className="text-[rgb(240,38,72)]">S</span>onu
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-lg font-thin">
          
          <a
            href="#about"
            className="relative text-white hover:text-[rgb(240,38,72)] transition duration-300
            after:absolute after:left-0 after:-bottom-1 after:h-[2px]
            after:w-0 after:bg-[rgb(240,38,72)] after:transition-all
            after:duration-300 hover:after:w-full"
          >
            About
          </a>

          <a
            href="#skills"
            className="relative text-white hover:text-[rgb(240,38,72)] transition duration-300
            after:absolute after:left-0 after:-bottom-1 after:h-[2px]
            after:w-0 after:bg-[rgb(240,38,72)] after:transition-all
            after:duration-300 hover:after:w-full"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="relative text-white hover:text-[rgb(240,38,72)] transition duration-300
            after:absolute after:left-0 after:-bottom-1 after:h-[2px]
            after:w-0 after:bg-[rgb(240,38,72)] after:transition-all
            after:duration-300 hover:after:w-full"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="relative text-white hover:text-[rgb(240,38,72)] transition duration-300
            after:absolute after:left-0 after:-bottom-1 after:h-[2px]
            after:w-0 after:bg-[rgb(240,38,72)] after:transition-all
            after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111] border-t border-white/10">
          <div className="flex flex-col items-center space-y-6 py-8 text-lg">
            
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-[rgb(240,38,72)] transition"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-[rgb(240,38,72)] transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-[rgb(240,38,72)] transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-[rgb(240,38,72)] transition"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}