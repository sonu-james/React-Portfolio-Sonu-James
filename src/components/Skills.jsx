export default function Skills() {
  const skills = [
    { name: "HTML", level: "Foundation" },
    { name: "Tailwind CSS", level: "Styling" },
    { name: "JavaScript", level: "Core Logic" },
    { name: "React", level: "Frontend Framework" },
    { name: "Next.js", level: "Fullstack Framework" },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 max-w-6xl mx-auto">
      
      <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-12 sm:mb-16">
        <span className="text-[rgb(240,38,72)]">My</span> Skills
      </h2>

      <div className="relative">
        
        {/* Center Line */}
        <div className="absolute left-4 sm:left-1/2 top-0 w-[2px] h-full bg-gray-700 sm:transform sm:-translate-x-1/2"></div>

        {skills.map((skill, index) => (
          <div key={index} className="relative mb-12 sm:mb-16">
            
            {/* Dot */}
            <span className="absolute left-4 sm:left-1/2 top-5 w-5 h-5 sm:w-6 sm:h-6 bg-[rgb(240,38,72)] rounded-full border-4 border-black sm:transform sm:-translate-x-1/2 z-10"></span>

            {/* Content */}
            <div
              className={`flex ${
                // Mobile: always left
                // Desktop: zigzag
                index % 2 === 0
                  ? "sm:justify-start"
                  : "sm:justify-end"
              }`}
            >
              <div className="w-full sm:w-1/2 pl-12 sm:pl-6 pr-2">
                
                <div className="bg-[#111] p-4 sm:p-5 rounded-xl shadow-lg border border-[rgb(240,38,72)] hover:scale-105 transition duration-300">
                  
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {skill.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    {skill.level}
                  </p>

                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}