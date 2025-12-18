import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* قسم الترحيب */}
        <div className="bg-gradient-to-r from-blue-900/40 to-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Dr. Ali 👋</h1>
            <p className="text-slate-400">You have completed <span className="text-blue-400 font-bold">2 lessons</span> this week. Keep it up!</p>
          </div>
          <Link href="/courses" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold transition shadow-lg shadow-blue-900/20 whitespace-nowrap">
            Browse New Courses
          </Link>
        </div>

        {/* قسم كورساتي (My Learning) */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">My Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* بطاقة كورس 1 - General Cardiology */}
            <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition group">
              <div className="h-32 bg-slate-800 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-300">
                🩺
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">General Cardiology</h3>
                <div className="flex justify-between text-sm text-slate-400 mb-2">
                  <span>Progress</span>
                  <span>45%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 mb-4">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                {/* تم تحويل الزر إلى رابط هنا 👇 */}
                <Link href="/lesson/1" className="block w-full text-center py-2 border border-slate-700 text-blue-400 rounded-lg hover:bg-slate-800 transition font-medium">
                  Continue Learning
                </Link>
              </div>
            </div>

            {/* بطاقة كورس 2 - Clinical Neurology */}
            <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition group">
              <div className="h-32 bg-slate-800 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-300">
                🧬
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Clinical Neurology</h3>
                <div className="flex justify-between text-sm text-slate-400 mb-2">
                  <span>Progress</span>
                  <span>10%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 mb-4">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                </div>
                {/* رابط وهمي لنفس الدرس للتجربة 👇 */}
                <Link href="/lesson/1" className="block w-full text-center py-2 border border-slate-700 text-blue-400 rounded-lg hover:bg-slate-800 transition font-medium">
                  Continue Learning
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* قسم الإحصائيات السريعة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <div className="text-slate-400 mb-1">Total Study Hours</div>
                <div className="text-2xl font-bold text-white">12.5 hrs</div>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <div className="text-slate-400 mb-1">Certificates Earned</div>
                <div className="text-2xl font-bold text-emerald-400">1</div>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <div className="text-slate-400 mb-1">Average Quiz Score</div>
                <div className="text-2xl font-bold text-blue-400">88%</div>
            </div>
        </div>

      </div>
    </div>
  );
}