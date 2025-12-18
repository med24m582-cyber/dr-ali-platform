export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      
      {/* الحاوية الرئيسية */}
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* قسم العنوان والمقدمة */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            About Dr. Ali's Platform
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We are dedicated to bridging the gap between traditional medical education and modern technology. Our mission is to empower the next generation of doctors with accessible, high-quality knowledge.
          </p>
        </div>

        {/* قسم الإحصائيات (Stats) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 shadow-lg">
            <div className="text-4xl font-bold text-blue-500 mb-2">1,000+</div>
            <div className="text-slate-400">Medical Students</div>
          </div>

          <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 shadow-lg">
            <div className="text-4xl font-bold text-teal-400 mb-2">50+</div>
            <div className="text-slate-400">Specialized Courses</div>
          </div>

          <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 shadow-lg">
            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-slate-400">Support Access</div>
          </div>

        </div>

        {/* قسم قصتنا (Story) */}
        <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Founded with a vision to revolutionize medical learning, Dr. Ali's Platform started as a small initiative to help students visualize complex anatomical structures.
            </p>
            <p>
              Today, we have grown into a comprehensive ecosystem offering courses ranging from basic anatomy to advanced clinical surgery, all designed by top medical professionals.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}