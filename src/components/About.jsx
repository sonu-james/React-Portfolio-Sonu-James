export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-center text-3xl mb-10">
        <span className="text-primary">About</span> Me
      </h2>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-card p-5 rounded">
          <h3>Education</h3>
          <p>MCA - MG University</p>
        </div>
        <div className="bg-card p-5 rounded">
          <h3>Experience</h3>
          <p>1+ Year Developer</p>
        </div>
        <div className="bg-card p-5 rounded">
          <h3>Goal</h3>
          <p>Build SaaS Products</p>
        </div>
      </div>
    </section>
  );
}
