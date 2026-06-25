import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Timeline from './components/Timeline';
import NavIndicator from './components/NavIndicator';
import AIWorks from './components/AIWorks';
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



      <main className="relative z-10 pt-12 md:pt-16 lg:pt-20">
        {/* Header Section */}
        <header className="text-center mb-4 px-4 relative z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tighter leading-tight break-keep">
            다양한 경험의 풀스택 엔지니어
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed break-keep mb-12">
            다양한 경험과 탄탄한 기본기로 웹과 모바일에 얽매이지 않고 결과물을 만들어냅니다.
          </p>

        </header>

        <AIWorks />

        {/* Timeline Section */}
        <Timeline data={careerData} />
      </main>
    </div>
  );
}

export default App;
