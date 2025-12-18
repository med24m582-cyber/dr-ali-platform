import Link from "next/link";
import { courses } from "@/data/courses"; // استيراد ملف البيانات
import { notFound } from "next/navigation"; // استيراد صفحة الخطأ 404

export default async function CourseDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  // البحث عن الكورس ومطابقة الـ ID
  const course = courses.find((c) => c.id === id);

  // إذا لم يتم العثور على الكورس، اعرض صفحة "غير موجود"
  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/courses" className="text-blue-400 hover:text-blue-300 mb-6 inline-block">
          ← Back to Courses
        </Link>

        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
          
          {/* قسم العنوان والتفاصيل العلوية */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 border-b border-slate-700 pb-8">
            <div className="text-6xl">🩺</div>
            <div>
               <div className="flex gap-2 mb-2">
                 <span className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded border border-blue-700">{course.level}</span>
                 <span className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded border border-slate-600">⏱ {course.duration}</span>
               </div>
               
               <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{course.title}</h1>
               <p className="text-slate-400 text-lg">{course.description}</p>
            </div>
          </div>

          <div className="space-y-8 text-slate-300">
            
            {/* وصف الكورس */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Course Overview</h3>
              <p className="leading-relaxed text-slate-400">{course.fullDescription}</p>
            </div>

            {/* المنهج الدراسي */}
            <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">📚 Syllabus (What you will learn)</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.syllabus.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-slate-300">
                    <span className="text-blue-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* أزرار التفاعل */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-lg font-bold transition shadow-lg shadow-blue-900/20">
                Enroll in {course.title}
              </button>
              <button className="px-8 py-3.5 border border-slate-600 text-slate-300 hover:bg-slate-700 rounded-lg font-medium transition">
                Download PDF
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}