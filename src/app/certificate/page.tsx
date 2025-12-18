'use client';

export default function CertificatePage() {
  return (
    // 1. الخلفية الخارجية: سوداء في الشاشة، لكن بيضاء تماماً في الطباعة (print:bg-white)
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 print:p-0 print:bg-white">
      
      {/* 2. إطار الشهادة: قمنا بضبط المقاسات لتملأ ورقة A4 وتلغي الظلال عند الطباعة */}
      <div className="bg-[#fdfbf7] text-black p-10 md:p-16 rounded-lg max-w-5xl w-full text-center border-[16px] border-double border-blue-900 shadow-2xl relative overflow-hidden 
      print:shadow-none print:border-4 print:w-full print:h-screen print:max-w-none print:rounded-none print:m-0 print:flex print:flex-col print:justify-center">
        
        {/* زخرفة الزوايا */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-[16px] border-l-[16px] border-yellow-500 rounded-tl-none print:border-t-[8px] print:border-l-[8px]"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-[16px] border-r-[16px] border-yellow-500 rounded-br-none print:border-b-[8px] print:border-r-[8px]"></div>

        {/* محتوى الشهادة */}
        <div className="space-y-6 relative z-10">
           {/* الشعار */}
           <div className="flex justify-center mb-8 opacity-80">
             <span className="text-5xl">🩺</span>
           </div>

           <h1 className="text-4xl md:text-6xl font-serif font-bold text-blue-900 uppercase tracking-widest mb-2">Certificate</h1>
           <p className="text-xl md:text-2xl text-slate-500 font-serif italic">of Completion</p>
           
           <div className="py-8 my-8 border-t border-b border-slate-200 print:py-4 print:my-4">
             <p className="text-lg text-slate-600 font-medium">This is to certify that</p>
             
             {/* اسم الطالب */}
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 my-6 font-serif underline decoration-wavy decoration-yellow-400 underline-offset-8 print:text-4xl">
               Dr. Ali
             </h2>
             
             <p className="text-lg text-slate-600 font-medium mt-6">Has successfully completed the advanced course</p>
             
             {/* اسم الكورس */}
             <h3 className="text-3xl md:text-4xl text-blue-800 font-bold mt-3">General Cardiology</h3>
           </div>

           <div className="flex flex-col md:flex-row justify-between items-end mt-16 px-4 md:px-12 gap-8 print:mt-8 print:flex-row">
             <div className="text-center w-full md:w-auto">
               <div className="text-lg font-bold text-slate-800">{new Date().toLocaleDateString('en-US')}</div>
               <div className="w-40 border-b-2 border-slate-400 mx-auto mt-1 mb-2"></div>
               <p className="text-sm text-slate-500 font-serif uppercase tracking-widest">Date</p>
             </div>
             
             {/* ختم ذهبي - يظهر بوضوح في الطباعة */}
             <div className="flex w-32 h-32 bg-yellow-500 rounded-full items-center justify-center shadow-lg text-white font-bold border-4 border-yellow-200 relative print:shadow-none print:border-2">
               <div className="border border-white/50 rounded-full w-28 h-28 flex items-center justify-center text-center text-xs tracking-widest transform -rotate-12">
                 OFFICIAL<br/>CERTIFIED<br/>DOCTOR
               </div>
             </div>

             <div className="text-center w-full md:w-auto">
               <div className="text-2xl font-serif text-blue-900 italic font-bold">Dr. Ali Platform</div>
               <div className="w-40 border-b-2 border-slate-400 mx-auto mt-1 mb-2"></div>
               <p className="text-sm text-slate-500 font-serif uppercase tracking-widest">Signature</p>
             </div>
           </div>
        </div>
        
        {/* 3. زر الطباعة: يختفي تلقائياً بفضل كود print:hidden */}
        <div className="mt-12 print:hidden flex justify-center gap-4">
            <button 
              onClick={() => window.print()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold shadow-lg transition flex items-center gap-2"
            >
              🖨️ Print / Save as PDF
            </button>
            <a href="/dashboard" className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-6 py-3 rounded-full font-bold transition">
              Back to Dashboard
            </a>
        </div>
      </div>
    </div>
  );
}