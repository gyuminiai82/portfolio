import React from 'react';

const aiWorksData = [
  {
    title: "ERP 시스템",
    url: "https://erp.minstudio.app",
    icon: "ph-buildings",
    color: "emerald",
    bgLight: "bg-emerald-50",
    textDark: "text-emerald-700",
    iconColor: "#10b981",
    items: [
      { label: "Front", value: "Next.js 14", sub: "(App Router)" },
      { label: "Back", value: "Python", sub: "(FastAPI)" },
      { label: "Deploy", value: "AWS EC2", sub: "(Docker, GitHub Actions)" },
      { label: "DB", value: "PostgreSQL" }
    ]
  },
  {
    title: "CCTV",
    url: "https://cctv.minstudio.app",
    icon: "ph-security-camera",
    color: "red",
    bgLight: "bg-red-50",
    textDark: "text-red-700",
    iconColor: "#ef4444",
    items: [
      { label: "Back", value: "Python", sub: "(FastAPI)" },
      { label: "Deploy", value: "AWS EC2", sub: "(Docker, GitHub Actions)" }
    ]
  },
  {
    title: "Home 시스템",
    url: "https://home.minstudio.app",
    icon: "ph-house",
    color: "blue",
    bgLight: "bg-blue-50",
    textDark: "text-blue-700",
    iconColor: "#3b82f6",
    items: [
      { label: "Front", value: "Next.js 14", sub: "(App Router)" },
      { label: "Back", value: "Python", sub: "(FastAPI)" },
      { label: "Pipeline", value: "Node-RED" },
      { label: "Deploy", value: "데스크탑 PC" },
      { label: "DB", value: "PostgreSQL, TimescaleDB" }
    ]
  }
];

export default function AIWorks() {
  return (
    <div className="max-w-5xl mx-auto mt-16 mb-24 px-4 text-left relative z-20">
      <fieldset className="border-2 border-slate-200/80 rounded-[2rem] p-6 md:p-8">
        <legend className="ml-4 md:ml-6 px-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_8px_16px_rgba(99,102,241,0.3)]">
            <i className="ph-duotone ph-robot text-white text-2xl"></i>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">AI 활용 작업물</h2>
        </legend>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {aiWorksData.map((work, idx) => (
          <a
            key={idx}
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col p-6 bg-white rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
          >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl ${work.bgLight} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`ph-duotone ${work.icon}`} style={{ color: work.iconColor, fontSize: '2rem' }}></i>
                </div>
                <h3 className={`text-xl font-bold ${work.textDark}`}>
                  {work.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {work.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className={`font-bold w-[72px] shrink-0 ${work.textDark} opacity-80`}>{item.label}</span>
                    <span className="flex flex-col text-slate-600 font-medium">
                      <span>{item.value}</span>
                      {item.sub && <span className="text-[11px] text-slate-400 mt-0.5">{item.sub}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Link Indicator */}
            <div className={`absolute top-6 right-6 w-8 h-8 rounded-full ${work.bgLight} flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}>
              <i className={`ph-bold ph-arrow-up-right ${work.textDark}`}></i>
            </div>
          </a>
        ))}
        </div>
      </fieldset>
    </div>
  );
}
