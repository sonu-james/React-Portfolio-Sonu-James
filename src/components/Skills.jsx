export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js"];
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-center text-3xl mb-10">
        <span className="text-primary">My</span> Skills
      </h2>
      <div className="grid md:grid-cols-3 gap-5">
        {skills.map((s, i) => (
          <div key={i} className="bg-card p-5 rounded text-center">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
