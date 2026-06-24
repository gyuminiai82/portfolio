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
        {/* 민스튜디오 */}
        <div className="relative group flex items-center justify-center">
          {/* Animated gradient glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          
          <a 
            href="https://minstudio.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 bg-white hover:bg-slate-50 border border-slate-200/50 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <div style={{ position: 'relative', width: '36px', height: '36px' }}>
              <i className="ph-duotone ph-device-mobile group-hover:-translate-y-0.5 transition-all" style={{ color: '#6c757d', fontSize: '1.3rem', position: 'absolute', top: '-2px', right: '2px' }}></i>
              <i className="ph-duotone ph-globe group-hover:scale-110 transition-transform" style={{ color: '#3b82f6', fontSize: '1.5rem', position: 'absolute', bottom: '-2px', left: '-2px' }}></i>
              <i className="ph-duotone ph-cursor group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" style={{ color: '#1e293b', fontSize: '1.1rem', position: 'absolute', bottom: '-4px', left: '16px', transform: 'rotate(-15deg)', textShadow: '-1.5px -1.5px 0 #fff, 1.5px -1.5px 0 #fff, -1.5px 1.5px 0 #fff, 1.5px 1.5px 0 #fff' }}></i>
            </div>
          </a>

          <div className="absolute right-full mr-5 top-1/2 -translate-y-1/2 opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 z-50">
            <div className="w-[220px] p-4 text-xs bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col gap-3 relative">
              <div className="absolute top-1/2 right-[-6px] -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-slate-200/60 rotate-45"></div>
              <div className="font-extrabold text-slate-800 text-sm flex items-center gap-2 border-b border-slate-100 pb-2 relative z-10">
                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse"></span>
                민스튜디오
              </div>
              <ul className="space-y-2 text-slate-600 font-medium leading-tight relative z-10">
                <li className="flex gap-2 break-keep">
                  <span className="text-blue-500 font-bold w-10 shrink-0">Web</span>
                  <span className="flex flex-col">
                    <span>Next.js 14</span>
                    <span className="text-[10px] text-slate-400 -mt-0.5">(App Router, BFF)</span>
                  </span>
                </li>
                <li className="flex gap-2 break-keep">
                  <span className="text-blue-500 font-bold w-10 shrink-0">Deploy</span>
                  <span className="flex flex-col">
                    <span>Vercel</span>
                    <span className="text-[10px] text-slate-400 -mt-0.5">(GitHub 연동)</span>
                  </span>
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
        </div>


      </div>

      <main className="relative z-10 pt-12 md:pt-16 lg:pt-20">
        {/* Header Section */}
        <header className="text-center mb-4 px-4 relative z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tighter leading-tight break-keep">
            다양한 경험의 풀스택 엔지니어
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed break-keep mb-12">
            다양한 경험과 탄탄한 기본기로 웹과 모바일에 얽매이지 않고 결과물을 만들어냅니다.
          </p>

          {/* Portfolio Test Sites Area */}
          <div className="flex flex-row items-center justify-center gap-3 mt-2">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              포트폴리오용 테스트 사이트
            </div>
            <div className="flex gap-4 sm:gap-6">
              {/* ERP */}
              <a 
                href="https://erp.minstudio.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 bg-white hover:bg-slate-50 border border-slate-200 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div style={{ position: 'relative', width: '36px', height: '36px' }} className="group-hover:scale-110 transition-transform">
                  <i className="ph-duotone ph-buildings" style={{ color: '#10b981', fontSize: '1.6rem', position: 'absolute', top: '0', left: '0' }}></i>
                  <i className="ph-duotone ph-database" style={{ color: '#059669', fontSize: '1.1rem', position: 'absolute', bottom: '-2px', right: '-2px', textShadow: '-1.5px -1.5px 0 #fff, 1.5px -1.5px 0 #fff, -1.5px 1.5px 0 #fff, 1.5px 1.5px 0 #fff' }}></i>
                </div>

                <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 z-50 text-left">
                  <div className="w-[220px] p-4 text-xs bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col gap-3 relative">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-200/60 rotate-45"></div>
                    <div className="font-extrabold text-slate-800 text-sm flex items-center gap-2 border-b border-slate-100 pb-2 relative z-10">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      ERP 시스템
                    </div>
                    <ul className="space-y-2 text-slate-600 font-medium leading-tight relative z-10">
                      <li className="flex gap-2 break-keep">
                        <span className="text-emerald-500 font-bold w-12 shrink-0">Front</span>
                        <span className="flex flex-col">
                          <span>Next.js 14</span>
                          <span className="text-[10px] text-slate-400 -mt-0.5">(App Router)</span>
                        </span>
                      </li>
                      <li className="flex gap-2 break-keep">
                        <span className="text-emerald-500 font-bold w-12 shrink-0">Back</span>
                        <span className="flex flex-col">
                          <span>Python</span>
                          <span className="text-[10px] text-slate-400 -mt-0.5">(FastAPI)</span>
                        </span>
                      </li>
                      <li className="flex gap-2 break-keep">
                        <span className="text-emerald-500 font-bold w-12 shrink-0">Deploy</span>
                        <span className="flex flex-col">
                          <span>AWS EC2</span>
                          <span className="text-[10px] text-slate-400 -mt-0.5">(Docker, GitHub Actions)</span>
                        </span>
                      </li>
                      <li className="flex gap-2 break-keep">
                        <span className="text-emerald-500 font-bold w-12 shrink-0">DB</span>
                        <span>PostgreSQL</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </a>

              {/* CCTV */}
              <a 
                href="https://cctv.minstudio.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 bg-white hover:bg-slate-50 border border-slate-200 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div style={{ position: 'relative', width: '36px', height: '36px' }} className="group-hover:scale-110 transition-transform">
                  <i className="ph-duotone ph-security-camera" style={{ color: '#ef4444', fontSize: '1.6rem', position: 'absolute', top: '0', left: '0' }}></i>
                  <i className="ph-duotone ph-broadcast" style={{ color: '#b91c1c', fontSize: '1.1rem', position: 'absolute', bottom: '-2px', right: '-2px', textShadow: '-1.5px -1.5px 0 #fff, 1.5px -1.5px 0 #fff, -1.5px 1.5px 0 #fff, 1.5px 1.5px 0 #fff' }}></i>
                </div>

                <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 z-50 text-left">
                  <div className="w-[220px] p-4 text-xs bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col gap-3 relative">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-200/60 rotate-45"></div>
                    <div className="font-extrabold text-slate-800 text-sm flex items-center gap-2 border-b border-slate-100 pb-2 relative z-10">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      CCTV
                    </div>
                    <ul className="space-y-2 text-slate-600 font-medium leading-tight relative z-10">
                      <li className="flex gap-2 break-keep">
                        <span className="text-red-500 font-bold w-12 shrink-0">Back</span>
                        <span className="flex flex-col">
                          <span>Python</span>
                          <span className="text-[10px] text-slate-400 -mt-0.5">(FastAPI)</span>
                        </span>
                      </li>
                      <li className="flex gap-2 break-keep">
                        <span className="text-red-500 font-bold w-12 shrink-0">Deploy</span>
                        <span className="flex flex-col">
                          <span>AWS EC2</span>
                          <span className="text-[10px] text-slate-400 -mt-0.5">(Docker, GitHub Actions)</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </a>

              {/* Home */}
              <a 
                href="https://home.minstudio.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 bg-white hover:bg-slate-50 border border-slate-200 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div style={{ position: 'relative', width: '36px', height: '36px' }} className="group-hover:scale-110 transition-transform">
                  <i className="ph-duotone ph-house" style={{ color: '#3b82f6', fontSize: '1.6rem', position: 'absolute', top: '0', left: '0' }}></i>
                  <i className="ph-duotone ph-database" style={{ color: '#1d4ed8', fontSize: '1.1rem', position: 'absolute', bottom: '-2px', right: '-2px', textShadow: '-1.5px -1.5px 0 #fff, 1.5px -1.5px 0 #fff, -1.5px 1.5px 0 #fff, 1.5px 1.5px 0 #fff' }}></i>
                </div>

                <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 z-50 text-left">
                  <div className="w-[220px] p-4 text-xs bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col gap-3 relative">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-200/60 rotate-45"></div>
                    <div className="font-extrabold text-slate-800 text-sm flex items-center gap-2 border-b border-slate-100 pb-2 relative z-10">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      Home 시스템
                    </div>
                    <ul className="space-y-2 text-slate-600 font-medium leading-tight relative z-10">
                      <li className="flex gap-2 break-keep">
                        <span className="text-blue-500 font-bold w-12 shrink-0">Front</span>
                        <span className="flex flex-col">
                          <span>Next.js 14</span>
                          <span className="text-[10px] text-slate-400 -mt-0.5">(App Router)</span>
                        </span>
                      </li>
                      <li className="flex gap-2 break-keep">
                        <span className="text-blue-500 font-bold w-12 shrink-0">Back</span>
                        <span className="flex flex-col">
                          <span>Python</span>
                          <span className="text-[10px] text-slate-400 -mt-0.5">(FastAPI)</span>
                        </span>
                      </li>
                      <li className="flex gap-2 break-keep">
                        <span className="text-blue-500 font-bold w-12 shrink-0">Deploy</span>
                        <span className="flex flex-col">
                          <span>AWS EC2</span>
                          <span className="text-[10px] text-slate-400 -mt-0.5">(Docker, GitHub Actions)</span>
                        </span>
                      </li>
                      <li className="flex gap-2 break-keep">
                        <span className="text-blue-500 font-bold w-12 shrink-0">DB</span>
                        <span>PostgreSQL</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </header>

        {/* Timeline Section */}
        <Timeline data={careerData} />
      </main>
    </div>
  );
}

export default App;
