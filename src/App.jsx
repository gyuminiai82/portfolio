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
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        {/* ERP */}
        <a 
          href="https://erp.minstudio.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 bg-white hover:bg-slate-50 border border-slate-200 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>

          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 z-50">
            <div className="w-[220px] p-4 text-xs bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col gap-3">
              <div className="font-extrabold text-slate-800 text-sm flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                ERP 시스템
              </div>
              <ul className="space-y-2 text-slate-600 font-medium leading-tight">
                <li className="flex gap-2 break-keep">
                  <span className="text-emerald-500 font-bold w-10 shrink-0">Web</span>
                  <span>Next.js 14 (App Router)</span>
                </li>
                <li className="flex gap-2 break-keep">
                  <span className="text-emerald-500 font-bold w-10 shrink-0">Deploy</span>
                  <span>AWS EC2 (Docker)</span>
                </li>
                <li className="flex gap-2 break-keep">
                  <span className="text-emerald-500 font-bold w-10 shrink-0">DB</span>
                  <span>PostgreSQL</span>
                </li>
                <li className="flex gap-2 break-keep">
                  <span className="text-emerald-500 font-bold w-10 shrink-0">Design</span>
                  <span>Tailwind CSS</span>
                </li>
              </ul>
            </div>
          </div>
        </a>
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

          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 z-50">
            <div className="w-[220px] p-4 text-xs bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col gap-3">
              <div className="font-extrabold text-slate-800 text-sm flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                민스튜디오
              </div>
              <ul className="space-y-2 text-slate-600 font-medium leading-tight">
                <li className="flex gap-2 break-keep">
                  <span className="text-blue-500 font-bold w-10 shrink-0">Web</span>
                  <span>Next.js 14 (App Router)</span>
                </li>
                <li className="flex gap-2 break-keep">
                  <span className="text-blue-500 font-bold w-10 shrink-0">Deploy</span>
                  <span>Vercel (GitHub 연동)</span>
                </li>
                <li className="flex gap-2 break-keep">
                  <span className="text-blue-500 font-bold w-10 shrink-0">DB</span>
                  <span>Oracle Cloud Database</span>
                </li>
                <li className="flex gap-2 break-keep">
                  <span className="text-blue-500 font-bold w-10 shrink-0">Media</span>
                  <span>Oracle OCI Storage</span>
                </li>
              </ul>
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
          <img src="https://cook.minstudio.app/images/logo.png" alt="쿡스튜디오" className="h-5 w-5 object-contain group-hover:scale-110 transition-transform" />

          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 z-50">
            <div className="w-[220px] p-4 text-xs bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col gap-3">
              <div className="font-extrabold text-slate-800 text-sm flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                쿡스튜디오
              </div>
              <ul className="space-y-2 text-slate-600 font-medium leading-tight">
                <li className="flex gap-2 break-keep">
                  <span className="text-orange-500 font-bold w-10 shrink-0">Web</span>
                  <span>Next.js 14 (App Router)</span>
                </li>
                <li className="flex gap-2 break-keep">
                  <span className="text-orange-500 font-bold w-10 shrink-0">Deploy</span>
                  <span>Vercel (GitHub 연동)</span>
                </li>
                <li className="flex gap-2 break-keep">
                  <span className="text-orange-500 font-bold w-10 shrink-0">DB</span>
                  <span>Oracle Cloud Database</span>
                </li>
                <li className="flex gap-2 break-keep">
                  <span className="text-orange-500 font-bold w-10 shrink-0">Media</span>
                  <span>Oracle OCI Storage</span>
                </li>
              </ul>
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
