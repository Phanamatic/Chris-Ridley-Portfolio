
import './App.css';

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white font-sans">
      <header className="py-10 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold mb-2 tracking-tight">Chris Ridley</h1>
        <p className="text-xl text-purple-300 mb-4">Standout Portfolio Website</p>
        <nav className="flex gap-8 mt-4">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>
      </header>
      <section id="about" className="max-w-3xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-4 text-blue-300">About Me</h2>
        <p className="text-lg text-gray-200">
          Hi, I'm Chris Ridley, a passionate developer with a love for creating beautiful and functional web experiences. I specialize in modern JavaScript frameworks and have a keen eye for design and usability.
        </p>
      </section>
      <section id="projects" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-4 text-blue-300">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Project One</h3>
            <p className="text-gray-300 mb-2">A modern web app built with React and Tailwind CSS.</p>
            <span className="inline-block bg-blue-800 text-xs px-2 py-1 rounded">React</span>
          </div>
          <div className="bg-gray-900 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Project Two</h3>
            <p className="text-gray-300 mb-2">A fast and responsive portfolio site using Vite.</p>
            <span className="inline-block bg-purple-800 text-xs px-2 py-1 rounded">Vite</span>
          </div>
        </div>
      </section>
      <section id="contact" className="max-w-3xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-4 text-blue-300">Contact</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-800 text-white border border-gray-700" />
          <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-800 text-white border border-gray-700" />
          <textarea placeholder="Your Message" className="p-3 rounded bg-gray-800 text-white border border-gray-700" rows={4}></textarea>
          <button type="submit" className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition">Send Message</button>
        </form>
      </section>
      <footer className="py-8 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Chris Ridley. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
