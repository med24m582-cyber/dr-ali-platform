import Link from "next/link";

export default function CoursesPage() {
  // بيانات وهمية للكورسات (سنستبدلها لاحقاً بقاعدة البيانات)
  const courses = [
    {
      id: 1,
      title: "General Cardiology",
      description: "Comprehensive guide to heart diseases and treatments.",
      level: "Intermediate",
      duration: "12 Weeks"
    },
    {
      id: 2,
      title: "Clinical Neurology",
      description: "Understanding the nervous system and disorders.",
      level: "Advanced",
      duration: "10 Weeks"
    },
    {
      id: 3,
      title: "Emergency Medicine",
      description: "Rapid response protocols for critical situations.",
      level: "Beginner",
      duration: "8 Weeks"
    },
    {
      id: 4,
      title: "Medical Anatomy",
      description: "Detailed study of human body structure.",
      level: "Beginner",
      duration: "14 Weeks"
    },
    {
      id: 5,
      title: "Pharmacology 101",
      description: "Basics of drug action and interactions.",
      level: "Intermediate",
      duration: "6 Weeks"
    },
    {
      id: 6,
      title: "Pediatrics",
      description: "Medical care for infants, children, and adolescents.",
      level: "Advanced",
      duration: "12 Weeks"
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      
      {/* عنوان الصفحة */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Available Courses</h1>
        <p className="text-slate-400 text-lg">Explore our advanced medical curriculum</p>
      </div>

      {/* شبكة عرض الكورسات */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10 group">
            
            {/* مكان صورة الكورس (لون متدرج حالياً) */}
            <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-600 group-hover:from-blue-900 group-hover:to-slate-800 transition-colors flex items-center justify-center">
              <span className="text-4xl">🩺</span>
            </div>

            {/* تفاصيل الكورس */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-900/50 text-blue-300 border border-blue-800">
                  {course.level}
                </span>
                <span className="text-slate-400 text-sm flex items-center gap-1">
                  ⏱️ {course.duration}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                {course.description}
              </p>

                {/* الكود القديم: كان مجرد زر */}
                {/* <button className="...">View Details</button> */}

                {/* الكود الجديد: أصبح رابطاً يأخذ رقم الكورس */}
                <Link href={`/courses/${course.id}`} className="block w-full text-center py-2.5 rounded-lg bg-slate-700 text-white font-medium hover:bg-blue-600 transition-colors">
                View Details
                </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}