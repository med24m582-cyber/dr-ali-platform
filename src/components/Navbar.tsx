'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 👈 استيراد أداة معرفة المسار الحالي

export default function Navbar() {
  const pathname = usePathname();
  
  // نعتبر المستخدم "مسجل دخول" إذا كان الرابط يحتوي على dashboard أو lesson
  const isLoggedIn = pathname?.includes('/dashboard') || pathname?.includes('/lesson');

  return (
    <nav className="print:hidden fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* الشعار */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-500">Dr. Ali</span>
            <span className="text-xl font-bold text-white">Platform</span>
          </Link>

          {/* الروابط (تختفي في الموبايل) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-300 hover:text-white transition">Home</Link>
            <Link href="/courses" className="text-slate-300 hover:text-white transition">Courses</Link>
            <Link href="/about" className="text-slate-300 hover:text-white transition">About Us</Link>
          </div>

          {/* الزر المتغير (الجزء الذكي) */}
          <div>
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                {/* رابط العودة للوحة التحكم */}
                <Link href="/dashboard" className="hidden md:block text-sm font-medium text-slate-300 hover:text-white">
                  My Dashboard
                </Link>
                
                {/* أيقونة المستخدم (دائرة) */}
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm ring-2 ring-slate-800">
                  DA
                </div>
                
                {/* زر الخروج (شكلياً يعيد للرئيسية) */}
                <Link href="/" className="text-sm text-red-400 hover:text-red-300 ml-2">
                  Sign Out
                </Link>
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-medium transition shadow-lg shadow-blue-900/20"
              >
                Login
              </Link>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}