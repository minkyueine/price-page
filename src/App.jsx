import React from 'react';
import { 
  ChevronRight, 
  Check, 
  CreditCard, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  Target, 
  Flame, 
  Heart, 
  Calendar,
  ArrowDown,
  Gift,
  UserPlus,
  PenTool,
  Wallet,
  Star,
  Quote,
  Coins,
  Youtube,
  Facebook,
  Instagram,
  User,
  MessageSquare
} from 'lucide-react';

// 기간별 가격 정보 컴포넌트 (정렬 완벽 맞춤)
const PriceTable = ({ prices }) => {
  return (
    <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t-2 border-slate-50">
      <div className="flex items-center justify-between mb-4 md:mb-5 px-1">
        <h4 className="text-[15px] md:text-base font-black text-slate-800 flex items-center tracking-tight">
          <CreditCard className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 text-red-600" /> 수강 플랜 안내
        </h4>
        <span className="text-xs md:text-sm text-slate-400 font-bold uppercase tracking-widest">VAT 포함</span>
      </div>
      
      <div className="grid grid-cols-1 gap-3 md:gap-3.5">
        {/* 1개월 */}
        <div className="flex justify-between items-center bg-slate-50/50 p-4 md:p-5 rounded-2xl border border-slate-100 relative overflow-hidden group hover:border-slate-200 transition-all">
          {prices.m1.discount > 0 && (
            <div className="absolute top-0 right-0 px-2.5 md:px-3 py-1 md:py-1.5 bg-slate-500 text-white text-[11px] md:text-xs font-black rounded-bl-xl shadow-sm">
              {prices.m1.discount}% 할인
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-[16px] md:text-base font-bold text-slate-700">1개월</span>
            <span className="text-[13px] md:text-sm font-bold text-slate-500 mt-0.5 md:mt-1 tracking-tight">회당 {prices.m1.per.toLocaleString()}원</span>
          </div>
          <div className="text-right">
            <span className="text-[18px] md:text-xl font-black text-slate-900 tracking-tighter">{prices.m1.total.toLocaleString()}원</span>
          </div>
        </div>
        
        {/* 3개월 */}
        <div className="flex justify-between items-center bg-red-50/50 p-4 md:p-5 rounded-2xl border border-red-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 px-2.5 md:px-3 py-1 md:py-1.5 bg-red-600 text-white text-[11px] md:text-xs font-black rounded-bl-xl shadow-sm">
            {prices.m3.discount}% 할인
          </div>
          <div className="flex flex-col">
            <span className="text-[16px] md:text-base font-bold text-red-600">3개월</span>
            <span className="text-[13px] md:text-sm font-bold text-red-500 mt-0.5 md:mt-1 tracking-tight">회당 {prices.m3.per.toLocaleString()}원</span>
          </div>
          <div className="text-right">
            <span className="text-[18px] md:text-xl font-black text-red-600 tracking-tighter">{prices.m3.total.toLocaleString()}원</span>
          </div>
        </div>

        {/* 6개월 */}
        <div className="flex justify-between items-center bg-orange-50/50 p-4 md:p-5 rounded-2xl border border-orange-200 relative overflow-hidden group">
          <div className="absolute top-0 right-0 px-2.5 md:px-3 py-1 md:py-1.5 bg-orange-500 text-white text-[11px] md:text-xs font-black rounded-bl-xl shadow-sm">
            {prices.m6.discount}% 할인
          </div>
          <div className="flex flex-col">
            <span className="text-[16px] md:text-base font-bold text-orange-600">6개월</span>
            <span className="text-[13px] md:text-sm font-bold text-orange-500 mt-0.5 md:mt-1 tracking-tight">회당 {prices.m6.per.toLocaleString()}원</span>
          </div>
          <div className="text-right">
            <span className="text-[18px] md:text-xl font-black text-orange-600 tracking-tighter">{prices.m6.total.toLocaleString()}원</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 개별 플랜 카드
const PlanCard = ({ data, isBest }) => {
  return (
    <div className={`relative bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 transition-all duration-300 flex flex-col h-full ${isBest ? 'border-[3px] border-red-500 shadow-[0_20px_40px_-15px_rgba(220,38,38,0.2)] scale-[1.02] z-10 mt-3 md:mt-0' : 'border border-slate-100 shadow-lg hover:shadow-xl'}`}>
      {isBest && (
        <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-5 md:px-7 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-black shadow-md z-10 whitespace-nowrap tracking-tight ring-4 ring-white">
          <Sparkles className="w-3.5 h-3.5 mr-1.5 inline-block animate-pulse" /> 직장인/학생 선호도 1위
        </div>
      )}

      <div className="flex items-start justify-between mb-5 md:mb-7">
        <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl shrink-0 ${isBest ? 'bg-red-50 text-red-600' : 'bg-slate-50 text-slate-400'}`}>
          {React.cloneElement(data.icon, { className: "w-7 h-7 md:w-8 md:h-8" })}
        </div>
        <div className="text-right flex flex-col items-end">
          <div className="flex items-baseline justify-end gap-2 mb-2">
            <span className={`text-xs md:text-sm font-black uppercase tracking-widest ${isBest ? 'text-red-500' : 'text-slate-400'}`}>
              {data.tag}
            </span>
            <h3 className="text-[30px] sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tighter italic">{data.label}</h3>
          </div>
          
          <div className="flex flex-wrap gap-1.5 justify-end">
            {data.targets.map((t, idx) => (
              <span key={idx} className={`text-xs md:text-sm font-extrabold px-2.5 py-1 rounded-md border tracking-tight shadow-sm ${t.color}`}>
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-auto">
        <div className="bg-slate-900 rounded-xl md:rounded-2xl p-4 md:p-5 mb-5 shadow-inner text-center">
          <p className="text-[16px] md:text-[17px] font-black text-white leading-snug">
             &quot;{data.benefit}&quot;
          </p>
        </div>
        <div className="space-y-3 px-1 md:px-2">
          {data.pros.map((pro, i) => (
            <div key={i} className="flex items-center space-x-3 text-[15px] md:text-[16px] font-bold text-slate-700 leading-snug">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-red-600" />
              </div>
              <span>{pro}</span>
            </div>
          ))}
        </div>
      </div>

      <PriceTable prices={data.prices} />
    </div>
  );
};

const App = () => {
  const plans = {
    5: {
      label: "주 5회", tag: "IMMERSION", icon: <Flame />, benefit: "학습 효율이 극대화되는 황금 주기",
      targets: [
        { name: "유아·초등 강추", color: "bg-pink-50 text-pink-500 border-pink-100" },
        { name: "성인 집중", color: "bg-slate-50 text-slate-500 border-slate-200" }
      ],
      pros: ["회당 단가 최대 46.2% 할인 적용", "매일 영어 환경 노출로 영어 뇌 생성", "압도적인 발화량으로 실력 수직 향상"],
      prices: { m1: { total: 169000, per: 8450, discount: 37.4 }, m3: { total: 471500, per: 7858, discount: 41.8 }, m6: { total: 872000, per: 7267, discount: 46.2 } }
    },
    4: {
      label: "주 4회", tag: "INTENSIVE", icon: <Zap />, benefit: "단기간 실력 완성 집중 트레이닝",
      targets: [
        { name: "직장인·학생 추천", color: "bg-blue-50 text-blue-600 border-blue-100" },
        { name: "면접·비즈니스 대비", color: "bg-slate-50 text-slate-600 border-slate-200" }
      ],
      pros: ["직장인/학생 선호도 1위 집중 코스", "비즈니스 미팅, 영어 면접 완벽 대비", "매일 규칙적인 발화력 확장 훈련"],
      prices: { m1: { total: 149000, per: 9313, discount: 30.7 }, m3: { total: 415700, per: 8660, discount: 35.9 }, m6: { total: 768800, per: 8008, discount: 41.2 } }
    },
    3: {
      label: "주 3회", tag: "SIGNATURE", icon: <Target />, benefit: "국내에서 경험하는 1:1 어학연수",
      targets: [
        { name: "유아·초등", color: "bg-pink-50 text-pink-500 border-pink-100" },
        { name: "중·고등", color: "bg-green-50 text-green-600 border-green-100" },
        { name: "성인", color: "bg-slate-50 text-slate-600 border-slate-200" }
      ],
      pros: ["망각 곡선을 이겨내는 반복 학습의 힘", "가장 합리적인 가성비 추천 코스", "꾸준한 실력 향상을 보장하는 시그니처 플랜"],
      prices: { m1: { total: 129000, per: 10750, discount: 20.4 }, m3: { total: 359900, per: 9997, discount: 25.9 }, m6: { total: 665600, per: 9244, discount: 31.5 } }
    },
    2: {
      label: "주 2회", tag: "STEADY", icon: <Calendar />, benefit: "일상과 공부의 조화를 이루는 습관",
      targets: [
        { name: "중·고등", color: "bg-green-50 text-green-600 border-green-100" },
        { name: "성인 루틴유지", color: "bg-slate-50 text-slate-600 border-slate-200" }
      ],
      pros: ["충분한 복습 시간을 확보하는 루틴", "규칙적인 노출로 실전 감각 유지", "지속 가능한 성장을 위한 실속 선택"],
      prices: { m1: { total: 94000, per: 11750, discount: 13 }, m3: { total: 262300, per: 10929, discount: 19.1 }, m6: { total: 485000, per: 10104, discount: 25.1 } }
    },
    1: {
      label: "주 1회", tag: "LIGHT", icon: <Heart />, benefit: "영어의 감을 유지하는 꾸준한 관리",
      targets: [
        { name: "전 연령 (유지용)", color: "bg-purple-50 text-purple-600 border-purple-100" }
      ],
      pros: ["부담 없는 가격으로 가벼운 첫 시작", "특정 요일 집중 대화로 실력 점검", "장기간 유지에 특화된 실속형 플랜"],
      prices: { m1: { total: 54000, per: 13500, discount: 0 }, m3: { total: 150700, per: 12558, discount: 7 }, m6: { total: 278600, per: 11608, discount: 14 } }
    }
  };

  const eventBenefits = [
    { id: 1, title: "무료체험", desc: "3,000원 할인", icon: <Gift />, iconColor: "text-red-600", iconBg: "bg-red-50" },
    { id: 2, title: "장기 수강", desc: "최대 46.2% 할인", icon: <Flame />, iconColor: "text-white", iconBg: "bg-gradient-to-br from-red-500 to-orange-500", highlight: true },
    { id: 3, title: "신규 등록", desc: "추가 포인트", icon: <CreditCard />, iconColor: "text-blue-600", iconBg: "bg-blue-50" },
    { id: 4, title: "재수강", desc: "적립 포인트", icon: <TrendingUp />, iconColor: "text-green-600", iconBg: "bg-green-50" },
    { id: 5, title: "지인 추천", desc: "소개 포인트", icon: <UserPlus />, iconColor: "text-purple-600", iconBg: "bg-purple-50" },
    { id: 6, title: "수강 후기", desc: "리뷰 포인트", icon: <PenTool />, iconColor: "text-teal-600", iconBg: "bg-teal-50" },
    { id: 7, title: "카드 혜택", desc: "무이자 할부", icon: <Wallet />, iconColor: "text-slate-700", iconBg: "bg-slate-200" },
  ];

  const reviews = [
    { name: "민*지 님 (직장인)", content: "강사님 퀄리티가 정말 달라요. 회당 7천원대로 이런 수업을 들을 수 있다니 감동입니다!", rating: 5 },
    { name: "조*호 님 (취준생)", content: "주 5회로 한 달 들으니 확실히 입이 열려요. 스케줄 조정도 자유로워서 너무 편합니다.", rating: 5 },
    { name: "강*은 님 (학부모)", content: "무료체험만 해봐야지 했다가 벌써 6개월째네요. 아이도 저도 함께 만족하며 수강 중입니다.", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20 overflow-x-hidden selection:bg-red-100">
      {/* Navigation */}
      <header className="sticky top-0 z-[100] bg-white border-b border-slate-100 shadow-sm">
        {/* Top Bar */}
        <div className="hidden md:flex justify-end items-center px-10 py-2 space-x-4 border-b border-slate-50">
          <div className="flex items-center space-x-3 text-[11px] font-bold text-slate-500">
            <button className="hover:text-red-600 transition-colors">로그인</button>
            <span className="w-px h-2.5 bg-slate-200"></span>
            <button className="hover:text-red-600 transition-colors">회원가입</button>
            <span className="w-px h-2.5 bg-slate-200"></span>
            <button className="hover:text-red-600 transition-colors">아이디/비밀번호찾기</button>
          </div>
          <div className="flex items-center space-x-2 text-slate-400">
            <Youtube className="w-4 h-4 cursor-pointer hover:text-red-600 transition-colors" />
            <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-600 transition-colors" />
            <Instagram className="w-4 h-4 cursor-pointer hover:text-pink-600 transition-colors" />
            <MessageSquare className="w-4 h-4 cursor-pointer hover:text-yellow-500 transition-colors" />
          </div>
        </div>

        {/* Main Nav */}
        <nav className="bg-white/90 backdrop-blur-md px-5 md:px-10 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-8 lg:space-x-12">
            {/* Logo */}
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-200 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-xl md:text-2xl font-black text-red-600 italic tracking-tighter">einenglish</div>
            </div>

            {/* Menu Items */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[14px] xl:text-[15px] font-black text-slate-700">
              <div className="relative group">
                <button className="hover:text-red-600 transition-colors flex items-center">
                  무료체험신청
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    3,000원 할인
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-500 rotate-45"></div>
                  </div>
                </button>
              </div>
              <button className="hover:text-red-600 transition-colors">아인잉글리쉬</button>
              <button className="hover:text-red-600 transition-colors">교육과정</button>
              <button className="hover:text-red-600 transition-colors">수강신청하기</button>
              <button className="hover:text-red-600 transition-colors">성공수강후기</button>
              <button className="hover:text-red-600 transition-colors">고객센터</button>
              <div className="relative">
                <button className="hover:text-red-600 transition-colors flex items-center">
                  이벤트
                  <span className="ml-1 w-4 h-4 bg-red-500 text-white text-[9px] flex items-center justify-center rounded-full font-bold">N</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex flex-col items-center group cursor-pointer">
              <div className="p-2 rounded-full group-hover:bg-slate-50 transition-colors">
                <User className="w-6 h-6 text-slate-700" />
              </div>
              <span className="text-[10px] font-black text-slate-500 group-hover:text-red-600">마이페이지</span>
            </div>
            <button className="lg:hidden p-2 text-slate-700">
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-5 py-16 md:py-32 text-center max-w-6xl mx-auto overflow-hidden">
        {/* Floating Images */}
        <div className="absolute top-6 md:top-12 right-[-20px] md:right-4 lg:right-12 w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-white p-1.5 md:p-3 rounded-xl md:rounded-[2rem] shadow-xl rotate-12 md:rotate-6 opacity-30 sm:opacity-60 md:opacity-100 pointer-events-none z-0 hover:rotate-12 hover:scale-105 transition-all duration-700">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80" alt="study with coffee" className="w-full h-full object-cover rounded-lg md:rounded-[1.5rem]" />
        </div>
        <div className="absolute bottom-10 md:bottom-16 left-[-20px] md:left-4 lg:left-12 w-20 h-20 sm:w-28 sm:h-28 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-white p-1.5 md:p-3 rounded-xl md:rounded-[2rem] shadow-xl -rotate-12 md:-rotate-6 opacity-30 sm:opacity-60 md:opacity-100 pointer-events-none z-0 hover:-rotate-12 hover:scale-105 transition-all duration-700">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" alt="friendly tutor" className="w-full h-full object-cover rounded-lg md:rounded-[1.5rem]" />
        </div>

        <div className="relative z-10 inline-flex items-center bg-white border border-red-100 text-red-600 text-xs md:text-sm font-black px-4 md:px-5 py-1.5 md:py-2 rounded-full mb-6 md:mb-10 tracking-widest shadow-sm">
          <Sparkles className="w-3.5 h-3.5 md:w-5 md:h-5 mr-1.5 text-red-500" /> 2026 OFFICIAL TUITION
        </div>
        
        <h1 className="relative z-10 text-[34px] sm:text-4xl md:text-6xl font-black leading-[1.3] md:leading-[1.2] mb-8 md:mb-12 tracking-tighter text-slate-900">
          <span className="block text-[22px] md:text-3xl text-slate-500 mb-2 md:mb-4 tracking-tight">하루 커피 한 잔 값이면</span>
          <span className="relative inline-block mb-1">
            <span className="relative z-10 text-red-600 italic pr-1">회당 7,267원,</span>
            <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-5 bg-red-100 -z-10 -skew-x-12"></span>
          </span><br className="hidden sm:block" />
          <span className="mt-1 sm:mt-2 block sm:inline md:mt-0">원어민 1:1 과외 끝.</span>
        </h1>

        <div className="relative z-10 inline-block mx-2 sm:mx-4 mb-8 md:mb-12 group cursor-default">
          <div className="relative bg-slate-900 text-white px-6 py-5 sm:px-8 sm:py-6 md:px-12 md:py-8 rounded-2xl md:rounded-[2rem] border border-slate-700 shadow-xl">
            <p className="text-[17px] md:text-xl font-bold tracking-tight">
              &quot;6개월 수강 시 최대 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 text-[34px] md:text-5xl font-black ml-1 md:ml-2 drop-shadow-sm">46.2%</span> 특별 할인&quot;
            </p>
          </div>
        </div>

        <p className="relative z-10 text-[15px] md:text-lg text-slate-500 font-bold max-w-[320px] sm:max-w-sm md:max-w-xl mx-auto leading-relaxed px-2 md:px-4">
          비싼 수강료에 망설이셨나요?<br className="sm:hidden"/> 상위 1% 원어민 강사진과의 1:1 학습을<br className="hidden sm:block"/> 가장 합리적인 가격으로 시작하세요.
        </p>

        <div className="relative z-10 mt-10 md:mt-16 flex justify-center animate-bounce opacity-40">
          <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-slate-500" />
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="px-4 md:px-5 py-12 md:py-24 bg-slate-50/70 rounded-[2.5rem] md:rounded-[4rem] mx-3 md:mx-6 border border-slate-100">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xs md:text-sm font-black text-red-600 uppercase tracking-widest mb-1.5 md:mb-2">Membership Perks</h2>
          <h3 className="text-[24px] sm:text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            무료 체험하면 드리는 <span className="underline decoration-red-200 decoration-4 md:decoration-8 underline-offset-4">7가지 혜택</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto px-1 md:px-2">
          {eventBenefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className={`flex flex-col sm:flex-row sm:items-center p-4 md:p-8 rounded-2xl md:rounded-[2rem] border-2 transition-all duration-300 ${benefit.highlight ? 'bg-red-50 border-red-400 shadow-md md:shadow-lg scale-[1.02] md:scale-[1.03] z-10 ring-2 md:ring-4 ring-red-50/50' : 'bg-white border-slate-100 shadow-sm hover:shadow-md hover:border-red-200'}`}
            >
              <div className={`w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 mb-3 sm:mb-0 sm:mr-4 md:mr-5 shadow-sm ${benefit.iconBg}`}>
                {React.cloneElement(benefit.icon, { className: `w-5 h-5 md:w-8 md:h-8 ${benefit.iconColor}` })}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className={`text-[11px] md:text-sm font-black uppercase tracking-widest mb-0.5 md:mb-1 ${benefit.highlight ? 'text-red-400' : 'text-slate-400'}`}>Benefit 0{benefit.id}</p>
                <p className="text-[15px] md:text-lg font-black text-slate-900 leading-tight mb-1 md:mb-1 tracking-tight truncate sm:whitespace-normal">{benefit.title}</p>
                <p className={`text-[14px] md:text-base font-black tracking-tight ${benefit.highlight ? 'text-red-600' : 'text-red-500'}`}>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Point Banner */}
      <section className="px-4 md:px-6 mt-12 md:mt-16 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 shadow-xl shadow-amber-500/20 relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 text-yellow-300 opacity-40 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
            <Coins className="w-64 h-64 md:w-80 md:h-80" />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between mb-8 md:mb-10">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <div className="inline-flex items-center space-x-1.5 bg-white/40 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4 border border-white/50 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-900" />
                <span className="text-xs font-black text-amber-900 uppercase tracking-widest">Reward Point System</span>
              </div>
              <h3 className="text-[26px] sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-[1.3] mb-3 md:mb-3">
                차곡차곡 모은 적립금, <br className="md:hidden" />
                결제 금액의 <br className="hidden md:block" />
                <span className="text-white drop-shadow-md underline decoration-amber-500 decoration-4 md:decoration-8 underline-offset-4">최대 30% 추가 할인</span>
              </h3>
              <p className="text-[15px] md:text-lg font-bold text-amber-900/80 tracking-tight leading-relaxed max-w-lg mx-auto lg:mx-0">
                아인잉글리쉬만의 특급 적립 제도를<br className="md:hidden" /> 100% 활용하세요.<br className="hidden md:block"/> 다양한 활동으로 포인트를 모아 <span className="text-slate-900 font-black bg-white/60 px-1.5 rounded">더욱 가벼운 수강료</span>를 경험하세요!
              </p>
            </div>
            
            <div className="shrink-0 w-full lg:w-auto">
              <div className="bg-white px-8 py-5 md:py-6 rounded-[2rem] shadow-lg text-center transform group-hover:-translate-y-1.5 transition-transform duration-300 border-2 border-amber-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-500 text-white text-[11px] font-black px-3 py-1 rounded-bl-xl shadow-sm">
                  포인트 혜택
                </div>
                <p className="text-[14px] md:text-sm font-black text-slate-400 mb-1.5 tracking-tight mt-1">기존 할인가에서 추가로</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-black text-red-600 tracking-tighter italic">-30</span>
                  <span className="text-2xl md:text-3xl font-black text-red-600 italic">%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5">
            <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-sm text-left transform hover:-translate-y-1 transition-transform border border-white/50 flex flex-col justify-center">
               <div className="flex items-center space-x-3 mb-2 md:mb-3">
                 <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                   <UserPlus className="w-5 h-5 text-amber-600"/>
                 </div>
                 <h4 className="font-black text-slate-900 text-[16px] md:text-lg leading-tight">지인 추천<br/>무제한 적립</h4>
               </div>
               <p className="text-[14px] md:text-[15px] text-slate-600 font-bold leading-relaxed">
                 친구가 내 추천으로 등록할 때마다 <span className="text-amber-600">횟수 제한 없이</span> 포인트가 적립됩니다.
               </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-sm text-left transform hover:-translate-y-1 transition-transform border border-white/50 flex flex-col justify-center">
               <div className="flex items-center space-x-3 mb-2 md:mb-3">
                 <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                   <PenTool className="w-5 h-5 text-amber-600"/>
                 </div>
                 <h4 className="font-black text-slate-900 text-[16px] md:text-lg leading-tight">수강 후기<br/>리뷰 적립</h4>
               </div>
               <p className="text-[14px] md:text-[15px] text-slate-600 font-bold leading-relaxed">
                 수업 후 정성스러운 <span className="text-amber-600">생생한 리뷰</span>를 남겨주시면 감사 포인트가 지급됩니다.
               </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-sm text-left transform hover:-translate-y-1 transition-transform border border-white/50 flex flex-col justify-center">
               <div className="flex items-center space-x-3 mb-2 md:mb-3">
                 <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                   <TrendingUp className="w-5 h-5 text-amber-600"/>
                 </div>
                 <h4 className="font-black text-slate-900 text-[16px] md:text-lg leading-tight">재수강<br/>감사 적립</h4>
               </div>
               <p className="text-[14px] md:text-[15px] text-slate-600 font-bold leading-relaxed">
                 수강 연장 시 <span className="text-amber-600">재수강 이벤트에 참여</span>하시면 1만원 포인트를 적립해 드립니다.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <main className="px-5 md:px-6 mt-16 md:mt-24 max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
           <h2 className="text-[30px] sm:text-3xl md:text-5xl font-black italic tracking-tighter uppercase mb-3 md:mb-4 text-slate-900 leading-tight">Pick Your Plan</h2>
           <p className="text-[15px] sm:text-base md:text-lg font-bold text-slate-500 max-w-[320px] sm:max-w-xs md:max-w-md mx-auto">나에게 꼭 맞는 학습 빈도를 선택하세요.<br className="sm:hidden"/>많이 할수록 혜택은 커집니다.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8">
          {[5, 4, 3, 2, 1].map(f => (
            <PlanCard key={f} data={plans[f]} isBest={f === 4} />
          ))}
        </div>
      </main>

      {/* Reviews */}
      <section className="px-5 py-20 md:py-32 bg-white text-center">
        <h2 className="text-[13px] md:text-sm font-black text-slate-400 uppercase tracking-widest mb-2 md:mb-3">Student Stories</h2>
        <h3 className="text-[24px] sm:text-2xl md:text-4xl font-black text-slate-900 mb-10 md:mb-16 tracking-tight">수강생이 직접 말하는 <span className="text-red-600 italic">변화</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto px-1 md:px-2">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-slate-50 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-slate-100 text-left relative hover:bg-white hover:shadow-md transition-all">
              <Quote className="absolute top-4 sm:top-6 right-6 sm:right-8 w-8 h-8 md:w-10 md:h-10 text-slate-200 opacity-50" />
              <div className="flex items-center space-x-1 mb-4 md:mb-5 text-orange-400">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />)}
              </div>
              <p className="text-[15px] md:text-base font-bold text-slate-700 leading-relaxed mb-6 md:mb-8 italic">&quot;{review.content}&quot;</p>
              <p className="text-[13px] md:text-sm font-black text-slate-400 tracking-widest">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 py-20 md:py-32 mx-3 sm:mx-4 md:mx-8 rounded-[2rem] md:rounded-[4rem] relative overflow-hidden text-center shadow-xl md:shadow-2xl group border border-slate-800 mb-10 md:mb-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80" 
            alt="smiling online tutor" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-20"
          />
          <div className="absolute inset-0 bg-slate-900/90 md:bg-gradient-to-t md:from-slate-900 md:via-slate-900/95 md:to-slate-900/80 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center px-2 md:px-4">
          <div className="inline-flex items-center space-x-1.5 md:space-x-2 bg-slate-800/80 backdrop-blur-md px-4 md:px-5 py-2 md:py-2.5 rounded-full mb-6 md:mb-10 border border-slate-700 shadow-md md:shadow-lg">
            <div className="flex -space-x-1.5 md:-space-x-2">
              <img className="w-5 h-5 md:w-8 md:h-8 rounded-full border-2 border-slate-800 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="student 1"/>
              <img className="w-5 h-5 md:w-8 md:h-8 rounded-full border-2 border-slate-800 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="student 2"/>
              <img className="w-5 h-5 md:w-8 md:h-8 rounded-full border-2 border-slate-800 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="student 3"/>
            </div>
            <span className="text-xs md:text-sm font-bold text-white pl-1.5 md:pl-2 tracking-tight">수강생 만족도 4.9/5.0</span>
          </div>

          <h2 className="text-[32px] md:text-5xl lg:text-6xl font-black mb-5 md:mb-8 tracking-tighter leading-[1.3] text-white">
            원어민과의 첫 만남, <br className="md:hidden" />설렘으로 바꾸세요
          </h2>
          <p className="text-[16px] md:text-xl text-slate-300 font-medium leading-relaxed mb-10 md:mb-16 max-w-[320px] md:max-w-lg mx-auto tracking-tight">
            고민은 실력 향상을 늦출 뿐입니다.<br/>
            상위 1% 강사진의 몰입형 1:1 환경을<br className="md:hidden" /> 직접 체험하세요.
          </p>
          
          <div className="w-full max-w-[280px] md:max-w-[360px] mx-auto">
             <button className="w-full bg-[#dc2626] text-white py-5 md:py-7 rounded-[1.5rem] md:rounded-[2.5rem] font-black text-[17px] md:text-2xl flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(220,38,38,0.3)] md:shadow-[0_0_30px_rgba(220,38,38,0.4)] active:scale-95 transition-all group hover:bg-[#b91c1c]">
               <span>무료체험 신청하기</span>
               <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1.5 transition-transform" />
             </button>
             <p className="mt-5 md:mt-8 text-[13px] md:text-base text-slate-400 font-medium tracking-tight flex justify-center items-center">
               <Sparkles className="w-3.5 h-3.5 md:w-5 md:h-5 text-yellow-400 mr-1.5 md:mr-2" /> <span className="text-slate-200 font-bold">이번 달 선착순 한정</span> <span className="ml-1">무료 혜택</span>
             </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f8f8f8] pt-12 pb-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Top Links & Social */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-slate-200 pb-6">
            <div className="flex items-center space-x-6 mb-6 md:mb-0 text-[15px] md:text-[15px] font-bold text-slate-700">
              <button className="hover:text-red-600 transition-colors">이용약관</button>
              <button className="hover:text-red-600 transition-colors">개인정보처리방침</button>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#ff0000] rounded-full flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity">
                <Youtube className="w-4 h-4 fill-current" />
              </div>
              <div className="w-8 h-8 bg-[#3b5998] rounded-full flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity">
                <Facebook className="w-4 h-4 fill-current" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-[#3cb371] rounded-full flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity">
                <div className="text-[10px] font-black italic">blog</div>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-col items-start">
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-6 opacity-60 grayscale group hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-xl font-black text-red-600 italic tracking-tighter">EINENGLISH</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-[13px] md:text-[14px] text-slate-500 font-medium leading-relaxed">
                <div className="space-y-1">
                  <p>상호명 : 아인잉글리쉬 원격평생교육원</p>
                  <p>주소 : 서울시 구로구 디지털로 30길 31</p>
                </div>
                <div className="space-y-1">
                  <p>대표 : 강민규</p>
                  <p>사업자등록번호 : 634-98-00756</p>
                </div>
                <div className="space-y-1">
                  <p>이메일 : einenglish3@gmail.com</p>
                </div>
                <div className="space-y-1">
                  <p>통신판매업신고번호 : 제2022-서울구로-1595호</p>
                </div>
              </div>
              
              <p className="mt-8 text-[13px] text-slate-400 font-medium">
                © 2022 아인잉글리쉬. All Rights Reserved
              </p>
            </div>

            {/* Floating CTA Button (Mobile/Desktop) */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
              <div className="relative group">
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[11px] font-black px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg animate-bounce">
                  2026년 새해에는 반드시 성공하세요! ✨
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rotate-45"></div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-[#ef4444] to-[#f87171] text-white py-4 md:py-5 rounded-full font-black text-[16px] md:text-[18px] shadow-[0_10px_30px_-5px_rgba(239,68,68,0.5)] flex flex-col items-center justify-center leading-tight hover:scale-[1.02] active:scale-95 transition-all">
                  <span className="text-[10px] md:text-[12px] opacity-90 mb-0.5">레벨진단 / 학습설계 / 할인혜택</span>
                  <div className="flex items-center">
                    <span>체험비 0원 ➜ 지금 신청하기</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Kakao Talk Floating */}
            <div className="fixed bottom-8 right-6 z-50">
              <div className="relative">
                <div className="w-14 h-14 bg-[#fae100] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <div className="bg-black rounded-[4px] px-1 py-0.5 text-[8px] font-black text-[#fae100] absolute -top-1 right-0 border-2 border-white">1</div>
                  <svg className="w-8 h-8 text-[#3c1e1e]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3c-4.97 0-9 3.134-9 7 0 2.497 1.731 4.683 4.415 5.942l-.89 3.27c-.1.365.11.739.467.832.115.03.23.03.342 0l3.87-2.57c.26.018.524.026.796.026 4.97 0 9-3.134 9-7s-4.03-7-9-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles with break-keep applied to all text globally */}
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        body { 
          font-family: 'Pretendard', sans-serif; 
          letter-spacing: -0.02em; 
          -webkit-font-smoothing: antialiased; 
          word-break: keep-all; 
          overflow-wrap: break-word; 
        }
      `}</style>
    </div>
  );
};

export default App;
