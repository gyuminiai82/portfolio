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
      { label: "DB", value: "PostgreSQL" },
      { label: "Deploy", value: "AWS EC2", sub: "(Docker, GitHub Actions)" },
      { label: "Tool", value: "Antigravity IDE" }
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
      { label: "Deploy", value: "AWS EC2", sub: "(Docker, GitHub Actions)" },
      { label: "Tool", value: "Antigravity IDE" }
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
      { label: "DB", value: "PostgreSQL, TimescaleDB" },
      { label: "Pipeline", value: "Node-RED" },
      { label: "Deploy", value: "데스크탑 PC" },
      { label: "Tool", value: "Antigravity IDE" }
    ]
  },
  {
    title: "민스튜디오",
    url: "https://minstudio.app",
    customIcon: (
      <div style={{ position: 'relative', width: '36px', height: '36px' }}>
        <i className="ph-duotone ph-device-mobile" style={{ color: '#6c757d', fontSize: '1.3rem', position: 'absolute', top: '-2px', right: '2px' }}></i>
        <i className="ph-duotone ph-globe" style={{ color: '#3b82f6', fontSize: '1.5rem', position: 'absolute', bottom: '-2px', left: '-2px' }}></i>
        <i className="ph-duotone ph-cursor" style={{ color: '#1e293b', fontSize: '1.1rem', position: 'absolute', bottom: '-4px', left: '16px', transform: 'rotate(-15deg)', textShadow: '-1.5px -1.5px 0 transparent, 1.5px -1.5px 0 transparent, -1.5px 1.5px 0 transparent, 1.5px 1.5px 0 transparent' }}></i>
      </div>
    ),
    color: "purple",
    bgLight: "bg-purple-50",
    textDark: "text-purple-700",
    iconColor: "#a855f7",
    items: [
      { label: "Front", value: "Next.js 14", sub: "(App Router)" },
      { label: "DB", value: "Oracle Cloud Database" },
      { label: "Media", value: "Oracle OCI Storage" },
      { label: "Deploy", value: "Vercel", sub: "(GitHub 연동)" },
      { label: "Content", value: "Gemini" },
      { label: "Tool", value: "Antigravity IDE" }
    ]
  },
  {
    title: "쿡레시",
    url: "https://cook.minstudio.app",
    icon: "ph-cooking-pot",
    color: "orange",
    bgLight: "bg-orange-50",
    textDark: "text-orange-700",
    iconColor: "#f97316",
    items: [
      { label: "Front", value: "Next.js 14", sub: "(App Router)" },
      { label: "DB", value: "Oracle Cloud Database" },
      { label: "Media", value: "Oracle OCI Storage" },
      { label: "Deploy", value: "Vercel", sub: "(GitHub 연동)" },
      { label: "Content", value: "Gemini" },
      { label: "Tool", value: "Antigravity IDE" }
    ]
  },
  {
    title: "민에디터",
    url: "https://devminihouse.mycafe24.com/file/MinEditor_Setup.zip",
    icon: "ph-file-zip",
    color: "slate",
    bgLight: "bg-slate-100",
    textDark: "text-slate-700",
    iconColor: "#475569",
    isDownload: true,
    items: [
      { label: "Type", value: "Windows App", sub: "(Setup File)" },
      { label: "Tool", value: "Antigravity IDE" }
    ]
  }
];

export default function AIWorks() {
  return (
    <div className="max-w-6xl mx-auto mt-10 mb-16 px-4 text-left relative z-20">
      <fieldset className="border border-slate-200/80 rounded-3xl p-5 md:p-6 pt-4">
        <legend className="ml-4 px-3 flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-sm">
            <i className="ph-duotone ph-sparkle text-white text-xl"></i>
          </div>
          <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">AI 활용 작업물</h2>
        </legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {aiWorksData.map((work, idx) => (
          <a
            key={idx}
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl ${work.bgLight} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  {work.customIcon ? work.customIcon : <i className={`ph-duotone ${work.icon}`} style={{ color: work.iconColor, fontSize: '1.6rem' }}></i>}
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className={`text-lg font-bold ${work.textDark} group-hover:underline decoration-2 underline-offset-4`}>
                    {work.title}
                  </h3>
                  <div className={`text-[11px] ${work.isDownload ? 'text-slate-500' : 'text-blue-500'} font-medium mt-0.5 flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity`}>
                    <i className={`ph-bold ${work.isDownload ? 'ph-download-simple' : 'ph-link'}`}></i>
                    {work.isDownload ? 'MinEditor_Setup.zip' : work.url.replace('https://', '')}
                  </div>
                </div>
              </div>

              <ul className="space-y-1.5">
                {work.items.map((item, i) => (
                  <li key={i} className="flex gap-2 text-[13px] leading-tight">
                    <span className={`font-bold w-[60px] shrink-0 ${work.textDark} opacity-80`}>{item.label}</span>
                    <span className="flex flex-wrap items-baseline gap-1 text-slate-600 font-medium">
                      <span>{item.value}</span>
                      {item.sub && <span className="text-[11px] text-slate-400">{item.sub}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Link Indicator */}
            <div className={`absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full ${work.bgLight} border border-white shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:-translate-y-0.5`}>
              <span className={`text-[10px] font-extrabold uppercase tracking-wider ${work.textDark}`}>
                {work.isDownload ? 'Download' : 'Visit'}
              </span>
              <i className={`ph-bold ${work.isDownload ? 'ph-download-simple' : 'ph-arrow-up-right'} text-xs ${work.textDark}`}></i>
            </div>
          </a>
        ))}
        </div>
      </fieldset>
    </div>
  );
}
