export default function Navbar() {
  return (
    <nav className="flex justify-between p-5 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold">
        <span className="text-[rgb(240,38,72)]">S</span>onu
      </h2>

      <div className="space-x-6 text-xl p-5">
        
        <a
          href="#about"
          className="relative text-white hover:text-[rgb(240,38,72)] hover:font-bold transition duration-300 
          after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
          after:bg-[rgb(240,38,72)] after:transition-all after:duration-300 
          hover:after:w-full"
        >
          About
        </a>

        <a
          href="#skills"
          className="relative text-white hover:text-[rgb(240,38,72)] hover:font-bold transition duration-300 
          after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
          after:bg-[rgb(240,38,72)] after:transition-all after:duration-300 
          hover:after:w-full"
        >
          Skills
        </a>

        <a
          href="#projects"
          className="relative text-white hover:text-[rgb(240,38,72)] hover:font-bold transition duration-300 
          after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
          after:bg-[rgb(240,38,72)] after:transition-all after:duration-300 
          hover:after:w-full"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="relative text-white hover:text-[rgb(240,38,72)] hover:font-bold transition duration-300 
          after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
          after:bg-[rgb(240,38,72)] after:transition-all after:duration-300 
          hover:after:w-full"
        >
          Contact
        </a>

      </div>
    </nav>
  );
}