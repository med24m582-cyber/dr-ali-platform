'use client'; // 👈 هذا السطر ضروري جداً للتفاعل

import Link from "next/link";
import { useRouter } from "next/navigation"; // 👈 استدعاء أداة التنقل

export default function LoginPage() {
  const router = useRouter(); // تعريف المتغير

  // دالة التعامل مع ضغط الزر
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    // هنا يمكن إضافة كود التحقق من البيانات مستقبلاً
    router.push('/dashboard'); // 👈 التوجيه المباشر للوحة التحكم
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4 py-12">
      <div className="w-full max-w-md space-y-8 bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm shadow-xl">
        
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Sign in to access your medical courses
          </p>
        </div>

        {/* إضافة onSubmit للنموذج */}
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-lg bg-slate-900 border border-slate-600 text-white px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="doctor@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full rounded-lg bg-slate-900 border border-slate-600 text-white px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-slate-400">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-400 hover:text-blue-300">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            {/* تغيير type إلى submit ليعمل مع الفورم */}
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-lg hover:shadow-blue-500/30"
            >
              Sign in
            </button>
          </div>
        </form>
        
        <p className="mt-2 text-center text-sm text-slate-400">
            Don't have an account?{' '}
            <Link href="/register" className="font-medium text-blue-400 hover:text-blue-300">
              Sign up
            </Link>
          </p>

      </div>
    </div>
  );
}