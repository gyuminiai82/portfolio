import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const aiWorksData = [
  {
    title: "ERP 시스템",
    desc: "사내 업무 효율과 데이터 관리를 위한 맞춤형 통합 ERP 시스템입니다.",
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
    title: "DATA PIPELINE",
    desc: "실시간 데이터 수집 및 분석을 위한 Docker 기반의 데이터 파이프라인입니다. (Node-RED, Kafka, TimescaleDB, Grafana 연동)",
    color: "blue",
    bgLight: "bg-blue-50",
    textDark: "text-blue-700",
    items: [
      { label: "Broker", value: "EMQX, Apache Kafka" },
      { label: "Pipeline", value: "Node-RED, Python" },
      { label: "DB", value: "TimescaleDB" },
      { label: "Visual", value: "Grafana" },
      { label: "Deploy", value: "Docker", sub: "(Docker, GitHub Actions)" },
      { label: "Tool", value: "Antigravity IDE" }
    ],
    flowChartUrl: "/images/pipeline_docker.png",
    extraUrls: [
      { name: "Node-RED", url: "https://nodered.minstudio.app", icon: "ph-plugs", color: "text-blue-600" },
      { name: "EMQX", url: "https://emqx.minstudio.app", icon: "ph-broadcast", color: "text-emerald-600", note: "(admin/emqx@admin)" },
      { name: "Grafana", url: "https://grafana.minstudio.app", icon: "ph-chart-line", color: "text-orange-500" }
    ]
  },
  {
    title: "CCTV",
    desc: "실시간 영상 스트리밍 및 모니터링을 위한 CCTV 관제 시스템입니다.",
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
  /* {
    title: "Home 시스템",
    desc: "IoT 기기 제어와 센서 데이터 수집을 통해 스마트 홈 환경을 통합 관리하는 홈 오토메이션 플랫폼입니다.",
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
  }, */
  {
    title: "챗봇 시스템",
    desc: "Upstage와 Pinecone을 연동한 실시간 AI 대화형 챗봇 서비스입니다.",
    url: "https://chatbot.minstudio.app",
    icon: "ph-chat-circle-dots",
    color: "violet",
    bgLight: "bg-violet-50",
    textDark: "text-violet-700",
    iconColor: "#8b5cf6",
    items: [
      { label: "Front", value: "Next.js 14", sub: "(App Router)" },
      { label: "AI", value: "Upstage" },
      { label: "Vector DB", value: "Pinecone" },
      { label: "OS", value: "Ubuntu" },
      { label: "Deploy", value: "데스크탑 PC", sub: "(GitHub Actions)" },
      { label: "Tool", value: "Antigravity IDE" }
    ]
  },
  {
    title: "민스튜디오",
    desc: "개인 프로젝트와 AI 작업물을 소개하는 포트폴리오 및 기술 블로그 웹사이트입니다.",
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
    desc: "냉장고 속 재료를 바탕으로 AI가 맞춤형 레시피를 추천해주는 스마트 요리 가이드 서비스입니다.",
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
    desc: "C++로 자체 개발한 Windows 환경 전용 커스텀 텍스트 에디터 프로그램입니다.",
    url: "https://devminihouse.mycafe24.com/file/MinEditor_Setup.zip",
    icon: "ph-file-zip",
    color: "slate",
    bgLight: "bg-slate-100",
    textDark: "text-slate-700",
    iconColor: "#475569",
    isDownload: true,
    items: [
      { label: "Language", value: "C++" },
      { label: "Type", value: "Windows App", sub: "(Setup File)" },
      { label: "Tool", value: "Antigravity IDE" }
    ]
  },

  {
    title: "SSO 서버",
    desc: "제작한 여러 서비스의 로그인 통합 및 세션 관리를 위한 SSO 인증 서버입니다.",
    url: "https://auth.minstudio.app",
    icon: "ph-key",
    color: "cyan",
    bgLight: "bg-cyan-50",
    textDark: "text-cyan-700",
    iconColor: "#06b6d4",
    isSso: true,
    items: [
      { label: "Front", value: "Next.js 14", sub: "(App Router)" },
      { label: "DB", value: "PostgreSQL" },
      { label: "Session", value: "Redis" },
      { label: "OS", value: "Ubuntu" },
      { label: "Deploy", value: "데스크탑 PC", sub: "(GitHub Actions)" },
      { label: "Tool", value: "Antigravity IDE" }
    ]
  },
  {
    title: "쇼핑몰",
    desc: "SSO 로그인 연동, 상품 검색, 장바구니, 결제 기능을 지원하는 이커머스 쇼핑몰입니다.",
    url: "https://shop.minstudio.app",
    icon: "ph-shopping-cart",
    color: "pink",
    bgLight: "bg-pink-50",
    textDark: "text-pink-700",
    iconColor: "#ec4899",
    isSso: true,
    items: [
      { label: "Front", value: "Next.js 14", sub: "(App Router)" },
      { label: "DB", value: "PostgreSQL" },
      { label: "OS", value: "Ubuntu" },
      { label: "Deploy", value: "데스크탑 PC", sub: "(GitHub Actions)" },
      { label: "Tool", value: "Antigravity IDE" }
    ],
    adminUrl: "https://shop.minstudio.app/admin"
  }
];

export default function AIWorks() {
  const [activeImage, setActiveImage] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const ssoWorks = aiWorksData.filter(w => w.isSso);
  const otherWorks = aiWorksData.filter(w => !w.isSso);

  const renderCards = (works) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {works.map((work, idx) => {
        const isClickable = !!work.url;
        const CardElement = isClickable ? 'a' : 'div';
        const cardProps = isClickable 
          ? { href: work.url, target: "_blank", rel: "noopener noreferrer" } 
          : {};

        return (
          <CardElement
            key={idx}
            {...cardProps}
            className={`group relative flex flex-col p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm ${
              isClickable ? 'hover:shadow-md hover:-translate-y-1 cursor-pointer' : ''
            } transition-all duration-300 overflow-hidden`}
          >
            {/* Hover Gradient Background */}
            {isClickable && (
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                {(work.customIcon || work.icon) && (
                  <div className={`w-12 h-12 rounded-xl ${work.bgLight} flex items-center justify-center ${isClickable ? 'group-hover:scale-105' : ''} transition-transform duration-300 shrink-0`}>
                    {work.customIcon ? work.customIcon : <i className={`ph-duotone ${work.icon}`} style={{ color: work.iconColor, fontSize: '1.6rem' }}></i>}
                  </div>
                )}
                <div className="flex flex-col justify-center w-full pr-16">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className={`text-lg font-bold ${work.textDark} ${isClickable ? 'group-hover:underline' : ''} decoration-2 underline-offset-4`}>
                      {work.title}
                    </h3>
                    {work.flowChartUrl && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setActiveImage(work.flowChartUrl);
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 border border-blue-200 hover:border-blue-600 rounded-lg shadow-sm transition-all cursor-pointer z-30 relative"
                      >
                        <i className="ph-bold ph-tree-structure"></i>
                        흐름도 보기
                      </button>
                    )}
                  </div>
                  {work.desc && (
                    <p className="text-[12px] text-slate-500 mt-1 mb-1 leading-relaxed opacity-90">
                      {work.desc}
                    </p>
                  )}
                  {work.url && (
                    <div className={`text-[11px] ${work.isDownload ? 'text-slate-500' : 'text-blue-500'} font-medium mt-0.5 flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity`}>
                      <i className={`ph-bold ${work.isDownload ? 'ph-download-simple' : 'ph-link'}`}></i>
                      {work.isDownload ? 'MinEditor_Setup.zip' : work.url.replace('https://', '')}
                    </div>
                  )}
                {work.adminUrl && (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(work.adminUrl, '_blank', 'noopener,noreferrer');
                    }}
                    className="text-[11px] text-violet-500 font-medium mt-0.5 flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity text-left z-20 relative cursor-pointer"
                  >
                    <i className="ph-bold ph-user-gear"></i>
                    [Admin] {work.adminUrl.replace('https://', '')}
                  </div>
                )}
                {work.extraUrls && work.extraUrls.map((extra, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      if (extra.isModal) {
                        setActiveImage(extra.url);
                      } else {
                        window.open(extra.url, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className={`text-[11px] ${extra.color || 'text-blue-500'} font-medium mt-0.5 flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity text-left z-20 relative cursor-pointer`}
                  >
                    <i className={`ph-bold ${extra.icon || 'ph-link'}`}></i>
                    {extra.url.startsWith('http') ? extra.url.replace('https://', '') : extra.name} {extra.note && <span className="text-[10px] text-slate-400 font-normal ml-1">{extra.note}</span>}
                  </div>
                ))}
              </div>
            </div>

            <ul className="space-y-1.5">
              {work.items.map((item, i) => (
                <li key={i} className="flex gap-2 text-[13px] leading-tight">
                  <span className={`font-bold w-[72px] whitespace-nowrap shrink-0 ${work.textDark} opacity-80`}>{item.label}</span>
                  <span className="flex flex-wrap items-baseline gap-1 text-slate-600 font-medium">
                    <span>{item.value}</span>
                    {item.sub && <span className="text-[11px] text-slate-400">{item.sub}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>

            {/* Link Indicator */}
            {isClickable && (
              <div className={`absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full ${work.bgLight} border border-white shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:-translate-y-0.5`}>
                <span className={`text-[10px] font-extrabold uppercase tracking-wider ${work.textDark}`}>
                  {work.isDownload ? 'Download' : 'Visit'}
                </span>
                <i className={`ph-bold ${work.isDownload ? 'ph-download-simple' : 'ph-arrow-up-right'} text-xs ${work.textDark}`}></i>
              </div>
            )}
          </CardElement>
        );
      })}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-16 px-4 text-left relative z-20">
      <fieldset className="border border-slate-200/80 rounded-3xl p-5 md:p-6 pt-4">
        <legend className="ml-4 px-3 flex items-center justify-between gap-3 w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-sm shrink-0">
              <i className="ph-duotone ph-sparkle text-white text-xl"></i>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">AI 활용 작업물</h2>
              <p className="text-[12px] text-slate-500 font-medium mt-0.5 tracking-tight">
                AI 코딩 어시스턴트를 활용하여 기획부터 배포까지 직접 개발한 프로젝트들입니다.
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-800 font-bold text-xs shadow-sm transition-all cursor-pointer select-none shrink-0"
          >
            <i className={`ph-bold ${isExpanded ? 'ph-caret-up' : 'ph-caret-down'}`}></i>
            {isExpanded ? '접기' : '펼치기'}
          </button>
        </legend>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-4 mb-2">
                 <h3 className="text-[13px] font-bold text-slate-700 flex items-center gap-2 mb-3 ml-1">
                   <div className="w-6 h-6 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center">
                     <i className="ph-fill ph-squares-four text-slate-500 text-sm"></i>
                   </div>
                   개별 프로젝트
                 </h3>
                 {renderCards(otherWorks)}
              </div>

              <div className="w-full h-px bg-slate-100/80 my-6"></div>

              <div className="mb-2">
                 <h3 className="text-[13px] font-bold text-slate-700 flex items-center gap-2 mb-3 ml-1">
                   <div className="w-6 h-6 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center">
                     <i className="ph-fill ph-key text-blue-500 text-sm"></i>
                   </div>
                   SSO 연동 생태계
                 </h3>
                 {renderCards(ssoWorks)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </fieldset>

      {/* Modal Overlay for Pipeline Diagram */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-950/40">
              <span className="text-slate-200 font-bold text-sm">데이터 파이프라인 흐름도</span>
              <button
                onClick={() => setActiveImage(null)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-red-600 hover:text-white text-slate-300 font-semibold text-xs border border-slate-700/60 transition-all cursor-pointer shadow-sm"
              >
                <i className="ph-bold ph-x text-sm"></i>
                닫기
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-4 flex justify-center bg-slate-950/20">
              <img
                src={activeImage}
                alt="Pipeline Diagram"
                className="max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
