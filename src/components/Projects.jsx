export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-center text-3xl mb-10">
        <span className="text-primary">My</span> Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-card p-5 rounded">Restaurant Website</div>
        <div className="bg-card p-5 rounded">Travel Website</div>
        <div className="bg-card p-5 rounded">Portfolio</div>
      </div>
    </section>
  );
}
