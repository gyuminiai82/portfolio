import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Timeline from './components/Timeline';
import NavIndicator from './components/NavIndicator';
import { careerData } from './data/careerData';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 pb-20 font-sans">
      {/* Background ambient light effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-100/50 blur-[120px]"></div>
      </div>

      <NavIndicator data={careerData} />
      
      <main className="relative z-10 pt-12 md:pt-16">
        {/* Top Navigation & Badges Bundle */}
        <div className="flex flex-col items-center mb-16 relative z-30">
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 px-4 mb-6">
            <a 
              href="https://minstudio.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-full font-semibold overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                minstudio.app
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
            
            <a 
              href="https://cook.minstudio.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-slate-800 border border-slate-200 rounded-full font-semibold overflow-hidden hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 7.1 10c-2.05 1.41-3.4 3.96-3.4 6.6a8 8 0 0013.957 2.057z" />
                </svg>
                cook.minstudio.app
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>

            <a 
              href="https://festival.minstudio.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-slate-800 border border-slate-200 rounded-full font-semibold overflow-hidden hover:shadow-xl hover:shadow-pink-500/10 hover:border-pink-300 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                festival.minstudio.app
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
            
            <a 
              href="https://gyuminiai82.github.io/landing1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-slate-800 border border-slate-200 rounded-full font-semibold overflow-hidden hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-300 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                랜딩페이지
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </div>

          {/* AI Badge inside the bundle */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 text-indigo-700 text-sm font-bold shadow-sm">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
            </span>
            🚀 AI 개발도구 적극 활용
          </div>
        </div>

        {/* Header Section */}
        <header className="text-center mb-10 px-4 relative z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tighter leading-tight break-keep">
            다양한 경험의 풀스택 엔지니어
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed break-keep mb-8">
            다양한 경험과 탄탄한 기본기로 웹과 모바일에 얽매이지 않고 결과물을 만들어냅니다.
          </p>
        </header>

        {/* Timeline Section */}
        <Timeline data={careerData} />
      </main>
    </div>
  );
}

export default App;
