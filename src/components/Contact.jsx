import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[rgb(240,38,72)] uppercase tracking-[4px] text-sm">
            Get In Touch
          </p>

          <h2 className="text-3xl md:text-4xl font-thin mt-3">
            Contact <span className="text-[rgb(240,38,72)]">Me</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
            Have a project idea, freelance work, or job opportunity?
            Feel free to contact me anytime.
          </p>
        </div>

        {/* Contact Card */}
        <div className="grid lg:grid-cols-2 gap-10 bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Left Side */}
          <div className="p-10 bg-gradient-to-br from-[rgb(240,38,72)]/20 to-black">
            <h3 className="text-3xl font-thin mb-6">
              Let’s Connect 🚀
            </h3>

            <p className="text-gray-300 leading-7 mb-10">
              I’m a Full Stack Developer specializing in React,
              Next.js, Tailwind CSS, Node.js, and modern web applications.
            </p>

            <div className="space-y-6">
              
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-[rgb(240,38,72)]/20 p-4 rounded-xl">
                  <Mail className="text-[rgb(240,38,72)]" size={24} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="font-medium">
                    sonupjames@gmail.com
                  </p>
                </div>
              </div>

{/* LinkedIn */}
<div className="flex items-center gap-4">
  <div className="bg-[rgb(240,38,72)]/20 p-4 rounded-xl">
    
    {/* LinkedIn SVG Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[rgb(240,38,72)]"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM.5 8h4v16h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.9-2.2 4.2 0 5 2.7 5 6.3V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.7 1.8-2.7 3.8V24h-4V8z"/>
    </svg>

  </div>

  <div>
    <p className="text-gray-400 text-sm">LinkedIn</p>

    <a
      href="https://www.linkedin.com/in/sonu-james-p-j-30a213110"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium hover:text-[rgb(240,38,72)] transition"
    >
      www.linkedin.com/in/sonu-james-p-j-30a213110
    </a>
  </div>
</div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="bg-[rgb(240,38,72)]/20 p-4 rounded-xl">
                  <MapPin className="text-[rgb(240,38,72)]" size={24} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="font-medium">Kochi, Kerala, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="p-10">
            <form className="space-y-6">
              
              {/* Name */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-[rgb(240,38,72)] transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-[rgb(240,38,72)] transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-[rgb(240,38,72)] transition resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[rgb(240,38,72)] hover:bg-[rgb(220,20,60)] transition duration-300 py-4 rounded-xl font-semibold"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}