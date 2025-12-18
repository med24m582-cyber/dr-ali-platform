export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white px-4">
      
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-6 text-center">
        Dr. Ali's Medical Platform
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-slate-300 max-w-2xl text-center mb-10 leading-relaxed">
        The next generation of medical education. Combining academic precision with modern technology.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 flex-col sm:flex-row">
        <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 font-semibold transition-all shadow-lg hover:shadow-blue-500/25">
          Start Learning 🩺
        </button>
        
        <button className="px-8 py-3 rounded-full border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white transition-all">
          Learn More
        </button>
      </div>

    </main>
  );
}