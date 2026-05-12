import {
  GraduationCap,
  BriefcaseBusiness,
  Target,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 max-w-6xl mx-auto"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-light text-white">
          About <span className="text-[rgb(240,38,72)]">Me</span>
        </h2>

        <p className="text-gray-300 mt-5 max-w-3xl mx-auto leading-8 text-normal">
          I am a passionate Full Stack Developer focused on building
          modern SaaS applications, real estate dashboards, and scalable
          web platforms using React, Next.js, Tailwind CSS, and MERN stack
          technologies. I enjoy creating clean UI experiences and solving
          real-world business problems through technology.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-7">
        
        {/* Education */}
        <div className="group bg-[#111] border border-gray-800 hover:border-[rgb(240,38,72)] p-8 rounded-3xl transition duration-500 hover:-translate-y-2 shadow-xl">
          
          <div className="w-16 h-16 rounded-2xl bg-[rgba(240,38,72,0.1)] flex items-center justify-center mb-6">
            <GraduationCap
              size={32}
              className="text-[rgb(240,38,72)]"
            />
          </div>

          <h3 className="text-2xl font-semibold text-white mb-3 font-thin">
            Education
          </h3>

          <p className="text-gray-400 leading-7">
            Master of Computer Applications (MCA) from MG University
            with strong knowledge in web technologies, software
            development, and full stack application architecture.
          </p>
        </div>

        {/* Experience */}
        <div className="group bg-[#111] border border-gray-800 hover:border-[rgb(240,38,72)] p-8 rounded-3xl transition duration-500 hover:-translate-y-2 shadow-xl">
          
          <div className="w-16 h-16 rounded-2xl bg-[rgba(240,38,72,0.1)] flex items-center justify-center mb-6">
            <BriefcaseBusiness
              size={32}
              className="text-[rgb(240,38,72)]"
            />
          </div>

          <h3 className="text-2xl font-semibold text-white mb-3 font-thin">
            Experience
          </h3>

          <p className="text-gray-400 leading-7">
            Experienced in developing responsive dashboards, CRM systems,
            and modern web applications using Next.js, React, Tailwind CSS,
            Node.js, Express, MongoDB, PostgreSQL, and Zoho CRM APIs.
          </p>
        </div>

        {/* Goal */}
        <div className="group bg-[#111] border border-gray-800 hover:border-[rgb(240,38,72)] p-8 rounded-3xl transition duration-500 hover:-translate-y-2 shadow-xl">
          
          <div className="w-16 h-16 rounded-2xl bg-[rgba(240,38,72,0.1)] flex items-center justify-center mb-6">
            <Target
              size={32}
              className="text-[rgb(240,38,72)]"
            />
          </div>

          <h3 className="text-2xl font-semibold text-white mb-3 font-thin">
            Goal
          </h3>

          <p className="text-gray-400 leading-7">
            My goal is to build high-quality SaaS products and scalable
            business solutions for global companies, especially in the
            real estate and enterprise sectors, while continuously improving
            my skills in modern full stack development.
          </p>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
        
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-[rgb(240,38,72)]">
            10+
          </h3>
          <p className="text-gray-400 mt-2">
            Projects Completed
          </p>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-[rgb(240,38,72)]">
            1+
          </h3>
          <p className="text-gray-400 mt-2">
            Years Experience
          </p>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-[rgb(240,38,72)]">
            15+
          </h3>
          <p className="text-gray-400 mt-2">
            Technologies
          </p>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-[rgb(240,38,72)]">
            100%
          </h3>
          <p className="text-gray-400 mt-2">
            Responsive Design
          </p>
        </div>
      </div>
    </section>
  );
}