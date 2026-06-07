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

      {/* Floating Right-Top Navigation Icons */}
      <div className="fixed top-6 right-6 z-50 grid grid-cols-2 gap-3">
        {/* 민스튜디오 */}
        <a 
          href="https://minstudio.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 bg-white hover:bg-slate-50 border border-slate-200 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
        >
          <div style={{ position: 'relative', width: '36px', height: '36px' }}>
            <i className="ph-duotone ph-device-mobile" style={{ color: '#6c757d', fontSize: '1.3rem', position: 'absolute', top: '-2px', right: '2px' }}></i>
            <i className="ph-duotone ph-globe" style={{ color: 'var(--primary)', fontSize: '1.5rem', position: 'absolute', bottom: '-2px', left: '-2px' }}></i>
            <i className="ph-duotone ph-cursor" style={{ color: 'var(--text-color)', fontSize: '1rem', position: 'absolute', bottom: '-4px', left: '16px', transform: 'rotate(-15deg)', textShadow: '-1px -1px 0 var(--header-bg), 1px -1px 0 var(--header-bg), -1px 1px 0 var(--header-bg), 1px 1px 0 var(--header-bg)' }}></i>
          </div>
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-[8px] font-black text-white border border-white shadow-sm scale-95 group-hover:scale-105 transition-transform duration-300">
            AI
          </span>
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-50">
            <div className="whitespace-nowrap px-3 py-1.5 text-xs font-bold text-slate-800 bg-white/95 backdrop-blur-sm border border-slate-200/50 rounded-xl shadow-lg flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              민스튜디오
            </div>
          </div>
        </a>

        {/* 쿡스튜디오 */}
        <a 
          href="https://cook.minstudio.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 bg-white hover:bg-slate-50 border border-slate-200 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 7.1 10c-2.05 1.41-3.4 3.96-3.4 6.6a8 8 0 0013.957 2.057z" />
          </svg>
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-[8px] font-black text-white border border-white shadow-sm scale-95 group-hover:scale-105 transition-transform duration-300">
            AI
          </span>
          <div className="absolute right-full mr-[72px] top-1/2 -translate-y-1/2 opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-50">
            <div className="whitespace-nowrap px-3 py-1.5 text-xs font-bold text-slate-800 bg-white/95 backdrop-blur-sm border border-slate-200/50 rounded-xl shadow-lg flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              쿡스튜디오
            </div>
          </div>
        </a>

        {/* 페스티벌 */}
        <a 
          href="https://festival.minstudio.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 bg-white hover:bg-slate-50 border border-slate-200 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-[8px] font-black text-white border border-white shadow-sm scale-95 group-hover:scale-105 transition-transform duration-300">
            AI
          </span>
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-50">
            <div className="whitespace-nowrap px-3 py-1.5 text-xs font-bold text-slate-800 bg-white/95 backdrop-blur-sm border border-slate-200/50 rounded-xl shadow-lg flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-pink-500"></span>
              페스티벌
            </div>
          </div>
        </a>

        {/* 랜딩페이지 */}
        <a 
          href="https://gyuminiai82.github.io/landing1/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 bg-white hover:bg-slate-50 border border-slate-200 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-[8px] font-black text-white border border-white shadow-sm scale-95 group-hover:scale-105 transition-transform duration-300">
            AI
          </span>
          <div className="absolute right-full mr-[72px] top-1/2 -translate-y-1/2 opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-50">
            <div className="whitespace-nowrap px-3 py-1.5 text-xs font-bold text-slate-800 bg-white/95 backdrop-blur-sm border border-slate-200/50 rounded-xl shadow-lg flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              랜딩페이지
            </div>
          </div>
        </a>
      </div>

      <main className="relative z-10 pt-12 md:pt-16 lg:pt-20">
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
