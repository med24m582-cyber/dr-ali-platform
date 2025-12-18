import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* العمود الأول: الشعار والوصف */}
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-bold text-blue-500 mb-4 inline-block">
            Dr. Ali Platform
          </Link>
          <p className="text-slate-400 max-w-sm">
            Empowering medical students with the next generation of academic learning tools. Join us to reshape the future of medicine.
          </p>
        </div>

        {/* العمود الثاني: روابط سريعة */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-slate-400">
            <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link href="/courses" className="hover:text-blue-400 transition">Courses</Link></li>
            <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
          </ul>
        </div>

        {/* العمود الثالث: قانوني */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* حقوق الملكية */}
      <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Dr. Ali's Medical Platform. All rights reserved.</p>
      </div>
    </footer>
  );
}