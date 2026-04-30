export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Hello I'm{" "}
            <span className="text-[rgb(240,38,72)]">Sonu James</span>
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            MERN Stack Developer
          </p>

          <p className="mt-4 text-lg text-gray-200">
            This is my official portfolio website to describe all details and work experience in webdeveloment.
          </p>
          <a
            href="/Sonu_James_FullStack_Developer_Resume_FEB_2026.pdf"
            download
            className="mt-6 inline-block border border-[rgb(240,38,72)] px-6 py-2 text-[rgb(240,38,72)] hover:bg-[rgb(240,38,72)] hover:text-white transition duration-300 rounded-full"
          >
            Download CV
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72">

            {/* Animated Gradient Shade */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgb(240,38,72)] via-pink-400 to-[rgb(240,38,72)] blur-2xl opacity-60 animate-pulse"></div>

            {/* Your Image */}
            <img
              src="sonu1.png" //
              alt="Sonu"
              className="relative w-72 h-72 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
