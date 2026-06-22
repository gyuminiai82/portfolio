export const careerData = [
  {
    id: 1,
    company: "㈜다솜메디케어",
    period: "2019.02 ~ 2025.12",
    duration: "6년 11개월",
    role: "기술연구소",
    description: "-REST API 서버 개발/유지보수(Spring boot, Sybase)<br>-온닥 CRM 개발(시술스케줄 및 예약관리 시스템, Spring boot, vue3)<br>-온닥포털(하이브리드 앱(kotlin, swift, vue3))<br>-건강검진 UI 개발(html, jQuery)",
    techStack: ["Spring Boot", "Sybase", "Swift", "Kotlin", "Vue3"],
    projects: [
      { name: "다솜메디케어 홈페이지", image: "/images/dasom_homepage.png", isWide: true },
      { name: "온닥 CRM", image: "/images/dasom_ondoc_crm.png", isWide: true },
      { name: "온닥펜차트", image: "/images/dasom_penchart_cropped.png" },
      { name: "무인접수", image: "/images/dasom_kiosk_cropped.png" },
      { name: "무인접수 V2", image: "/images/dasom_kiosk_v2.png", isWide: true },
      { name: "모바일건강검진", image: "/images/dasom_checkup_cropped.png" },
      { name: "건강검진 UI", image: "/images/dasom_checkup_final.png", isWide: true }
    ]
  },
  {
    id: 2,
    company: "㈜다솜정보",
    period: "2016.07 ~ 2019.02",
    duration: "2년 8개월",
    role: "기술연구소",
    description: "-온닥 관리자 개발(slim, bootstrap)<br>-온닥(하이브리드 앱(java, Objective-C))<br>-온닥플러스(하이브리드 앱(java, Objective-C, FCM))",
    techStack: ["Android", "Swift", "FCM", "PHP(Slim)", "MySQL", "Bootstrap"],
    projects: [
      { name: "온닥 관리자", image: "/images/dasominfo_admin.png", isWide: true },
      { name: "온닥 앱", image: "/images/dasominfo_ondoc_app.png", isWide: true },
      { name: "온닥 플러스", image: "/images/dasominfo_ondoc_plus.png", isWide: true }
    ]
  },
  {
    id: 3,
    company: "㈜문고리닷컴",
    period: "2015.01 ~ 2016.03",
    duration: "1년 3개월",
    role: "대리 (마케팅팀)",
    description: "-PHP 쇼핑몰 내부 시스템 유지보수<br><br>-커뮤니티/타공판/핫투데이/부엉이 레시피/대리석 소개 페이지<br>(퍼블리싱 및 스크립트 개발(jQuery)<br>-검색엔진(패스트캣) 적용(검색 속도개선)<br>-이벤트 페이지 제작",
    techStack: ["PHP", "jQuery"],
    projects: [
      { name: "커뮤니티", image: "/images/moongori_community.png", isWide: true },
      { name: "쇼핑몰 상세", image: "/images/moongori_shop.png", isWide: true },
      { name: "부엉이 레시피", image: "/images/moongori_recipe.png", isWide: true },
      { name: "상품 목록", image: "/images/moongori_tile.png", isWide: true },
      { name: "패스트캣 설정화면", image: "/images/moongori_fastcat.png", isWide: true }
    ]
  },
  {
    id: 4,
    company: "㈜바이브컴퍼니",
    period: "2014.09 ~ 2014.12",
    duration: "4개월",
    role: "대리 (개발팀) -프리랜서",
    description: "-농림부 맞춤형 서비스 Rule Management System(RMS) 구축 (전자정부프레임워크, 웹 RMS 설정 관리자 화면 개발)",
    techStack: ["Java (전자정부프레임워크)", "jQuery"],
    projects: [
      { name: "RMS 설정 관리자", image: "/images/vaiv_rms.png", isWide: true }
    ]
  },
  {
    id: 5,
    company: "㈜나다",
    period: "2013.04 ~ 2014.05",
    duration: "1년 2개월",
    role: "연구원",
    description: "-진동센서 데이터 모니터링 시스템 개발<br>(Spring Boot, iBatis, MS-SQL)<br>-C++(FFT) -> Java(FFT) Convert",
    techStack: ["Spring Boot", "iBatis", "MS-SQL"],
    projects: [
      { name: "모니터링", image: "/images/nada_monitoring_new.png", isWide: true },
      { name: "모니터링 1", image: "/images/nada_monitor_1.png", isWide: true },
      { name: "모니터링 2", image: "/images/nada_monitor_2.png", isWide: true },
      { name: "모니터링 3", image: "/images/nada_monitor_3.png", isWide: true },
      { name: "C++ -> Java Convert", image: "/images/nada_fft_convert.png", isWide: true }
    ]
  },
  {
    id: 6,
    company: "㈜다솜정보",
    period: "2009.09 ~ 2013.03",
    duration: "3년 7개월",
    role: "SI사업부",
    description: "-보건복지부 관련 사이트 유지보수 및 웹접근성 사업<br>(보건복지부 모바일, 국립서울병원, 국립마산병원, 국립공주병원, 국립춘천병원, 국립나주병원, 국립소록도병원, 국립재활원, 국립목포병원, 국립부곡병원, 국립망향의동산)",
    techStack: ["JSP", "Oracle 9i", "PHP", "MySQL", "AS3.0"],
    projects: [
      { name: "국립나주병원", image: "/images/dasominfo_naju.png", isWide: true },
      { name: "국립공주병원", image: "/images/dasominfo_gongju.png", isWide: true },
      { name: "국립마산병원", image: "/images/dasominfo_masan.png", isWide: true },
      { name: "국립부곡병원", image: "/images/dasominfo_bugok.png", isWide: true },
      { name: "국립소록도병원", image: "/images/dasominfo_sorokdo.png", isWide: true },
      { name: "국립목포병원", image: "/images/dasominfo_mokpo.png", isWide: true },
      { name: "국립춘천병원", image: "/images/dasominfo_chuncheon.png", isWide: true },
      { name: "국립재활원", image: "/images/dasominfo_rehab.png", isWide: true },
      { name: "국립망향의 동산", image: "/images/dasominfo_manghyang.png", isWide: true },
      { name: "오송생명과학단지", image: "/images/dasominfo_osong.png", isWide: true }
    ]
  },
  {
    id: 7,
    company: "㈜엘에이치",
    period: "2008.08 ~ 2009.09",
    duration: "1년 2개월",
    role: "기술개발그룹",
    description: "-사이트 개발 및 유지보수, 이벤트 페이지 제작<br>-동부자산운용(채용, 온라인상담)-Tomcat, Oracle, jsp<br>-경기도청 외국어 사이트 유지보수<br>-한국제지 리뉴얼<br>-주택공사 보금자리주택 안내홈페이지<br>(가우스, beaver framework, sybase)",
    techStack: ["JSP", "Tomcat", "Oracle", "PHP"],
    projects: [
      { name: "한국제지", image: "/images/lh_hankuk.png", isWide: true },
      { name: "동부자산운용", image: "/images/lh_dongbu.png", isWide: true }
    ]
  },
  {
    id: 8,
    company: "큐아이브이(QIV)",
    period: "2005.08 ~ 2006.02",
    duration: "7개월",
    role: "개발팀",
    description: "-사이트 개발 및 유지보수<br>-프로차일드(게시판, 쇼핑몰)-ASP, MS-SQL<br>-로이츠(게시판, 회원관리)-PHP, MySQL<br>-대명한차(게시판, 쇼핑몰)-PHP, MySQL<br>-마스터라이프(장사시설검색, 회원관리)-PHP, MySQL",
    techStack: ["ASP", "MS-SQL", "PHP", "MySQL"],
    projects: [
      { name: "로이츠", image: "/images/qiv_loits.png", isWide: true },
      { name: "프로차일드", image: "/images/qiv_prochild.png", isWide: true }
    ]
  }
];
