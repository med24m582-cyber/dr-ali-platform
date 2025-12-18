'use client';

import Link from "next/link";
import { useState } from "react";

export default function LessonPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'quiz'>('overview');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  
  // 🆕 حالة جديدة لمتابعة هل الدرس مكتمل أم لا
  const [isCompleted, setIsCompleted] = useState(false);

  const quizQuestion = {
    question: "Which of the following represents atrial depolarization on an ECG?",
    options: ["QRS Complex", "T Wave", "P Wave", "U Wave"],
    correctAnswer: 2
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row">
      
      {/* Sidebar */}
      <aside className="w-full md:w-80 bg-slate-900 border-r border-slate-800 flex-shrink-0 h-auto md:h-screen overflow-y-auto">
        <div className="p-6 border-b border-slate-800">
          <Link href="/dashboard" className="text-sm text-slate-400 hover:text-white flex items-center mb-4 transition">
            ← Back to Dashboard
          </Link>
          <h2 className="font-bold text-white">General Cardiology</h2>
          <p className="text-xs text-slate-500 mt-1">12 Lessons • 4h 30m</p>
        </div>
        
        <div className="py-2">
          {/* الدرس الحالي - يتغير شكله عند الإكمال */}
          <div className={`border-l-4 px-6 py-4 cursor-pointer transition-colors ${isCompleted ? 'bg-emerald-900/10 border-emerald-500' : 'bg-blue-900/20 border-blue-500'}`}>
            <div className="flex justify-between items-center mb-1">
              <p className={`text-xs font-bold ${isCompleted ? 'text-emerald-400' : 'text-blue-400'}`}>
                {isCompleted ? 'Completed ✓' : 'Lesson 1 - Playing'}
              </p>
            </div>
            <h3 className="text-sm font-medium text-white">Introduction to ECG</h3>
            <p className="text-xs text-slate-400 mt-1">15 min</p>
          </div>

          <div className="px-6 py-4 hover:bg-slate-800/50 cursor-pointer border-l-4 border-transparent transition opacity-60">
            <h3 className="text-sm font-medium text-slate-300">Heart Sounds</h3>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <div className="bg-black aspect-video w-full flex items-center justify-center relative group cursor-pointer">
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
           <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center pl-1 shadow-2xl scale-90 group-hover:scale-100 transition-transform">
             <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
           </div>
        </div>

        <div className="p-8 max-w-4xl">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white">Introduction to ECG Interpretation</h1>
            
            {/* 🆕 زر الإكمال التفاعلي */}
            <button 
              onClick={() => setIsCompleted(!isCompleted)}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition flex items-center gap-2 ${
                isCompleted 
                ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                : 'bg-slate-800 text-white hover:bg-slate-700'
              }`}
            >
              {isCompleted ? (
                <>Completed <span>✓</span></>
              ) : (
                "Mark as Complete"
              )}
            </button>
          </div>

          <div className="border-b border-slate-800 mb-6">
            <nav className="flex space-x-8">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`pb-4 text-sm font-medium transition ${activeTab === 'overview' ? 'border-b-2 border-blue-500 text-blue-400' : 'text-slate-400 hover:text-slate-300'}`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('quiz')}
                className={`pb-4 text-sm font-medium transition ${activeTab === 'quiz' ? 'border-b-2 border-blue-500 text-blue-400' : 'text-slate-400 hover:text-slate-300'}`}
              >
                Quick Quiz ⚡
              </button>
            </nav>
          </div>

          {activeTab === 'overview' ? (
            <div className="prose prose-invert max-w-none text-slate-300 animate-in fade-in duration-300">
              <p>In this lesson, we will cover the fundamentals of the Electrocardiogram (ECG)...</p>
              <h3 className="text-white mt-4 text-lg font-bold">Key Learning Points:</h3>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-slate-400">
                <li>Understanding the P-QRS-T complex.</li>
                <li>Lead placement and vectors.</li>
              </ul>
            </div>
          ) : (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <h3 className="text-lg font-bold text-white mb-4">Question 1 of 1</h3>
              <p className="text-slate-300 mb-6 text-lg">{quizQuestion.question}</p>
              <div className="space-y-3">
                {quizQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => { setSelectedAnswer(index); setShowResult(false); }}
                    className={`w-full text-left p-4 rounded-lg border transition ${
                      selectedAnswer === index 
                        ? 'bg-blue-900/30 border-blue-500 text-white' 
                        : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {selectedAnswer !== null && !showResult && (
                <button 
                  onClick={() => setShowResult(true)}
                  className="mt-6 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-bold transition w-full"
                >
                  Check Answer
                </button>
              )}
              {showResult && (
                <div className={`mt-6 p-4 rounded-lg text-center font-bold ${selectedAnswer === quizQuestion.correctAnswer ? 'bg-emerald-900/30 text-emerald-400 border border-emerald-800' : 'bg-red-900/30 text-red-400 border border-red-800'}`}>
                  {selectedAnswer === quizQuestion.correctAnswer ? "✅ Correct! Well done." : "❌ Incorrect. Try again!"}
                </div>
              )}
            </div>
          )}

        </div>
      </main>
    </div>
  );
}