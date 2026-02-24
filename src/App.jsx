import React from 'react';
import s from './App.module.css';

const Icon = ({ d, size = 24, fill = "none", stroke = "currentColor", strokeWidth = 2, className = "", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
);

const IconRaw = ({ children, size = 24, fill = "none", stroke = "currentColor", strokeWidth = 2, className = "", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    {children}
  </svg>
);

const icons = {
  sparkles: (sz = 24, cls = "") => <IconRaw size={sz} className={cls}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></IconRaw>,
  chevronRight: (sz = 24, cls = "") => <Icon d="M9 18l6-6-6-6" size={sz} className={cls} />,
  check: (sz = 12, cls = "") => <Icon d="M20 6L9 17l-5-5" size={sz} className={cls} />,
  creditCard: (sz = 20, cls = "") => <IconRaw size={sz} className={cls}><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></IconRaw>,
  trendingUp: (sz = 20, cls = "") => <IconRaw size={sz} className={cls}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></IconRaw>,
  zap: (sz = 28, cls = "") => <Icon d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" size={sz} className={cls} />,
  target: (sz = 28, cls = "") => <IconRaw size={sz} className={cls}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></IconRaw>,
  flame: (sz = 28, cls = "") => <Icon d={["M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"]} size={sz} className={cls} />,
  heart: (sz = 28, cls = "") => <Icon d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" size={sz} className={cls} />,
  calendar: (sz = 28, cls = "") => <IconRaw size={sz} className={cls}><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></IconRaw>,
  arrowDown: (sz = 24, cls = "") => <IconRaw size={sz} className={cls}><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></IconRaw>,
  gift: (sz = 20, cls = "") => <IconRaw size={sz} className={cls}><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></IconRaw>,
  userPlus: (sz = 20, cls = "") => <IconRaw size={sz} className={cls}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></IconRaw>,
  penTool: (sz = 20, cls = "") => <IconRaw size={sz} className={cls}><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"/><path d="m2.7 21.3 6.573-6.573"/><circle cx="11" cy="11" r="2"/></IconRaw>,
  wallet: (sz = 20, cls = "") => <IconRaw size={sz} className={cls}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></IconRaw>,
  star: (sz = 14, cls = "") => <Icon d="M11.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.345h6.817a.5.5 0 0 1 .294.905l-5.515 4.007a.5.5 0 0 0-.181.559l2.107 6.482a.5.5 0 0 1-.77.559l-5.515-4.007a.5.5 0 0 0-.588 0l-5.515 4.007a.5.5 0 0 1-.77-.559l2.107-6.482a.5.5 0 0 0-.181-.559L1.332 8.196a.5.5 0 0 1 .294-.905h6.817a.5.5 0 0 0 .475-.345z" size={sz} fill="currentColor" stroke="none" className={cls} />,
  quote: (sz = 32, cls = "") => <IconRaw size={sz} fill="none" className={cls}><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></IconRaw>,
  coins: (sz = 256, cls = "") => <IconRaw size={sz} className={cls}><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></IconRaw>,
  youtube: (sz = 16, cls = "") => <IconRaw size={sz} className={cls} fill="currentColor" stroke="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2 29 29 0 0 0-.46 5.25 29 29 0 0 0 .46 5.25 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.25z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff" stroke="none"/></IconRaw>,
  facebook: (sz = 16, cls = "") => <IconRaw size={sz} className={cls} fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></IconRaw>,
  instagram: (sz = 16, cls = "") => <IconRaw size={sz} className={cls}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></IconRaw>,
  user: (sz = 24, cls = "") => <IconRaw size={sz} className={cls}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></IconRaw>,
  messageSquare: (sz = 16, cls = "") => <IconRaw size={sz} className={cls}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></IconRaw>,
};

const targetClassMap = {
  "bg-pink-50 text-pink-500 border-pink-100": s.targetPink,
  "bg-slate-50 text-slate-500 border-slate-200": s.targetSlateLight,
  "bg-blue-50 text-blue-600 border-blue-100": s.targetBlue,
  "bg-slate-50 text-slate-600 border-slate-200": s.targetSlateDark,
  "bg-green-50 text-green-600 border-green-100": s.targetGreen,
  "bg-purple-50 text-purple-600 border-purple-100": s.targetPurple,
};

const PriceTable = ({ prices }) => (
  <div className={s.priceTable}>
    <div className={s.priceTableHeader}>
      <h4 className={s.priceTableTitle}>
        {icons.creditCard(16)} <span style={{ marginLeft: 6 }}>수강 플랜 안내</span>
      </h4>
      <span className={s.priceTableVat}>VAT 포함</span>
    </div>
    <div className={s.priceRows}>
      <div className={`${s.priceRow} ${s.priceRow1m}`}>
        {prices.m1.discount > 0 && <div className={`${s.priceDiscount} ${s.priceDiscountSlate}`}>{prices.m1.discount}% 할인</div>}
        <div>
          <span className={`${s.pricePeriod} ${s.colorSlate700}`}>1개월</span>
          <div className={`${s.pricePer} ${s.colorSlate500}`}>회당 {prices.m1.per.toLocaleString()}원</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <span className={`${s.priceTotal} ${s.colorSlate900}`}>{prices.m1.total.toLocaleString()}원</span>
        </div>
      </div>
      <div className={`${s.priceRow} ${s.priceRow3m}`}>
        <div className={`${s.priceDiscount} ${s.priceDiscountRed}`}>{prices.m3.discount}% 할인</div>
        <div>
          <span className={`${s.pricePeriod} ${s.colorRed600}`}>3개월</span>
          <div className={`${s.pricePer} ${s.colorRed500}`}>회당 {prices.m3.per.toLocaleString()}원</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <span className={`${s.priceTotal} ${s.colorRed600}`}>{prices.m3.total.toLocaleString()}원</span>
        </div>
      </div>
      <div className={`${s.priceRow} ${s.priceRow6m}`}>
        <div className={`${s.priceDiscount} ${s.priceDiscountOrange}`}>{prices.m6.discount}% 할인</div>
        <div>
          <span className={`${s.pricePeriod} ${s.colorOrange600}`}>6개월</span>
          <div className={`${s.pricePer} ${s.colorOrange500}`}>회당 {prices.m6.per.toLocaleString()}원</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <span className={`${s.priceTotal} ${s.colorOrange600}`}>{prices.m6.total.toLocaleString()}원</span>
        </div>
      </div>
    </div>
  </div>
);

const PlanCard = ({ data, isBest }) => (
  <div className={`${s.planCard} ${isBest ? s.planCardBest : ''}`}>
    {isBest && (
      <div className={s.planBestBadge}>
        {icons.sparkles(14)} 직장인/학생 선호도 1위
      </div>
    )}
    <div className={s.planTop}>
      <div className={`${s.planIconWrap} ${isBest ? s.planIconBest : s.planIconDefault}`}>
        {data.iconEl}
      </div>
      <div className={s.planRight}>
        <div className={s.planTagRow}>
          <span className={`${s.planTag} ${isBest ? s.planTagBest : ''}`}>{data.tag}</span>
          <h3 className={s.planLabel}>{data.label}</h3>
        </div>
        <div className={s.planTargets}>
          {data.targets.map((t, idx) => (
            <span key={idx} className={`${s.planTarget} ${targetClassMap[t.color] || ''}`}>{t.name}</span>
          ))}
        </div>
      </div>
    </div>
    <div className={s.planBody}>
      <div className={s.planBenefitBox}>
        <p className={s.planBenefitText}>&quot;{data.benefit}&quot;</p>
      </div>
      <div className={s.planPros}>
        {data.pros.map((pro, i) => (
          <div key={i} className={s.planPro}>
            <div className={s.planProIcon}>
              {icons.check(12, "")}
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
    <PriceTable prices={data.prices} />
  </div>
);

const App = () => {
  const plans = {
    5: {
      label: "주 5회", tag: "IMMERSION", iconEl: icons.flame(28), benefit: "학습 효율이 극대화되는 황금 주기",
      targets: [
        { name: "유아·초등 강추", color: "bg-pink-50 text-pink-500 border-pink-100" },
        { name: "성인 집중", color: "bg-slate-50 text-slate-500 border-slate-200" }
      ],
      pros: ["회당 단가 최대 46.2% 할인 적용", "매일 영어 환경 노출로 영어 뇌 생성", "압도적인 발화량으로 실력 수직 향상"],
      prices: { m1: { total: 169000, per: 8450, discount: 37.4 }, m3: { total: 471500, per: 7858, discount: 41.8 }, m6: { total: 872000, per: 7267, discount: 46.2 } }
    },
    4: {
      label: "주 4회", tag: "INTENSIVE", iconEl: icons.zap(28), benefit: "단기간 실력 완성 집중 트레이닝",
      targets: [
        { name: "직장인·학생 추천", color: "bg-blue-50 text-blue-600 border-blue-100" },
        { name: "면접·비즈니스 대비", color: "bg-slate-50 text-slate-600 border-slate-200" }
      ],
      pros: ["직장인/학생 선호도 1위 집중 코스", "비즈니스 미팅, 영어 면접 완벽 대비", "매일 규칙적인 발화력 확장 훈련"],
      prices: { m1: { total: 149000, per: 9313, discount: 30.7 }, m3: { total: 415700, per: 8660, discount: 35.9 }, m6: { total: 768800, per: 8008, discount: 41.2 } }
    },
    3: {
      label: "주 3회", tag: "SIGNATURE", iconEl: icons.target(28), benefit: "국내에서 경험하는 1:1 어학연수",
      targets: [
        { name: "유아·초등", color: "bg-pink-50 text-pink-500 border-pink-100" },
        { name: "중·고등", color: "bg-green-50 text-green-600 border-green-100" },
        { name: "성인", color: "bg-slate-50 text-slate-600 border-slate-200" }
      ],
      pros: ["망각 곡선을 이겨내는 반복 학습의 힘", "가장 합리적인 가성비 추천 코스", "꾸준한 실력 향상을 보장하는 시그니처 플랜"],
      prices: { m1: { total: 129000, per: 10750, discount: 20.4 }, m3: { total: 359900, per: 9997, discount: 25.9 }, m6: { total: 665600, per: 9244, discount: 31.5 } }
    },
    2: {
      label: "주 2회", tag: "STEADY", iconEl: icons.calendar(28), benefit: "일상과 공부의 조화를 이루는 습관",
      targets: [
        { name: "중·고등", color: "bg-green-50 text-green-600 border-green-100" },
        { name: "성인 루틴유지", color: "bg-slate-50 text-slate-600 border-slate-200" }
      ],
      pros: ["충분한 복습 시간을 확보하는 루틴", "규칙적인 노출로 실전 감각 유지", "지속 가능한 성장을 위한 실속 선택"],
      prices: { m1: { total: 94000, per: 11750, discount: 13 }, m3: { total: 262300, per: 10929, discount: 19.1 }, m6: { total: 485000, per: 10104, discount: 25.1 } }
    },
    1: {
      label: "주 1회", tag: "LIGHT", iconEl: icons.heart(28), benefit: "영어의 감을 유지하는 꾸준한 관리",
      targets: [
        { name: "전 연령 (유지용)", color: "bg-purple-50 text-purple-600 border-purple-100" }
      ],
      pros: ["부담 없는 가격으로 가벼운 첫 시작", "특정 요일 집중 대화로 실력 점검", "장기간 유지에 특화된 실속형 플랜"],
      prices: { m1: { total: 54000, per: 13500, discount: 0 }, m3: { total: 150700, per: 12558, discount: 7 }, m6: { total: 278600, per: 11608, discount: 14 } }
    }
  };

  const eventBenefits = [
    { id: 1, title: "무료체험", desc: "3,000원 할인", iconEl: icons.gift(20), iconBg: "#fef2f2", iconColor: "#dc2626" },
    { id: 2, title: "장기 수강", desc: "최대 46.2% 할인", iconEl: icons.flame(20), iconBg: "linear-gradient(to bottom right, #ef4444, #f97316)", iconColor: "#fff", highlight: true },
    { id: 3, title: "신규 등록", desc: "추가 포인트", iconEl: icons.creditCard(20), iconBg: "#eff6ff", iconColor: "#2563eb" },
    { id: 4, title: "재수강", desc: "적립 포인트", iconEl: icons.trendingUp(20), iconBg: "#f0fdf4", iconColor: "#16a34a" },
    { id: 5, title: "지인 추천", desc: "소개 포인트", iconEl: icons.userPlus(20), iconBg: "#faf5ff", iconColor: "#9333ea" },
    { id: 6, title: "수강 후기", desc: "리뷰 포인트", iconEl: icons.penTool(20), iconBg: "#f0fdfa", iconColor: "#0d9488" },
    { id: 7, title: "카드 혜택", desc: "무이자 할부", iconEl: icons.wallet(20), iconBg: "#e2e8f0", iconColor: "#334155" },
  ];

  const reviews = [
    { name: "민*지 님 (직장인)", content: "강사님 퀄리티가 정말 달라요. 회당 7천원대로 이런 수업을 들을 수 있다니 감동입니다!", rating: 5 },
    { name: "조*호 님 (취준생)", content: "주 5회로 한 달 들으니 확실히 입이 열려요. 스케줄 조정도 자유로워서 너무 편합니다.", rating: 5 },
    { name: "강*은 님 (학부모)", content: "무료체험만 해봐야지 했다가 벌써 6개월째네요. 아이도 저도 함께 만족하며 수강 중입니다.", rating: 5 },
  ];

  return (
    <div className={s.root}>
      {/* Navigation */}
      <header className={s.header}>
        <div className={s.topBar}>
          <div className={s.topBarLinks}>
            <button>로그인</button>
            <span className={s.topBarDivider} />
            <button>회원가입</button>
            <span className={s.topBarDivider} />
            <button>아이디/비밀번호찾기</button>
          </div>
          <div className={s.topBarSocial}>
            {icons.youtube(16)}
            {icons.facebook(16)}
            {icons.instagram(16)}
            {icons.messageSquare(16)}
          </div>
        </div>

        <nav className={s.nav}>
          <div className={s.navLeft}>
            <div className={s.logo}>
              <div className={s.logoIcon}>{icons.sparkles(20)}</div>
              <div className={s.logoText}>einenglish</div>
            </div>
            <div className={s.menuItems}>
              <div className={s.menuItemFree}>
                <button>
                  무료체험신청
                  <div className={s.menuTooltip}>
                    3,000원 할인
                    <div className={s.menuTooltipArrow} />
                  </div>
                </button>
              </div>
              <button>아인잉글리쉬</button>
              <button>교육과정</button>
              <button>수강신청하기</button>
              <button>성공수강후기</button>
              <button>고객센터</button>
              <div>
                <button className={s.eventBadge}>이벤트<span className={s.eventDot}>N</span></button>
              </div>
            </div>
          </div>
          <div className={s.navRight}>
            <div className={s.myPage}>
              <div className={s.myPageIcon}>{icons.user(24)}</div>
              <span className={s.myPageLabel}>마이페이지</span>
            </div>
            <button className={s.hamburger}>
              <div className={s.hamburgerLine} />
              <div className={s.hamburgerLine} />
              <div className={s.hamburgerLine} />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={s.hero}>
        <div className={s.floatingImgRight}>
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80" alt="study" className={s.floatingImg} />
        </div>
        <div className={s.floatingImgLeft}>
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" alt="tutor" className={s.floatingImg} />
        </div>

        <div className={s.heroBadge}>
          {icons.sparkles(14)} <span style={{ marginLeft: 6 }}>2026 OFFICIAL TUITION</span>
        </div>

        <h1 className={s.heroTitle}>
          <span className={s.heroSubtitle}>하루 커피 한 잔 값이면</span>
          <span className={s.heroPriceWrap}>
            <span className={s.heroPrice}>회당 7,267원,</span>
            <span className={s.heroPriceUnderline} />
          </span>
          <br className={s.smHide} />
          <span className={s.heroEnd}>원어민 1:1 과외 끝.</span>
        </h1>

        <div className={s.heroDiscountBox}>
          <div className={s.heroDiscountInner}>
            <p className={s.heroDiscountText}>
              &quot;6개월 수강 시 최대 <span className={s.heroDiscountNumber}>46.2%</span> 특별 할인&quot;
            </p>
          </div>
        </div>

        <p className={s.heroDesc}>
          비싼 수강료에 망설이셨나요?<br className={s.brSmHide} /> 상위 1% 원어민 강사진과의 1:1 학습을 가장 합리적인 가격으로 시작하세요.
        </p>

        <div className={s.heroArrow}>
          {icons.arrowDown(24)}
        </div>
      </section>

      {/* Benefits Grid */}
      <section className={s.benefitsSection}>
        <div className={s.benefitsHeader}>
          <h2 className={s.benefitsLabel}>Membership Perks</h2>
          <h3 className={s.benefitsTitle}>
            무료 체험하면 드리는 <span className={s.benefitsUnderline}>7가지 혜택</span>
          </h3>
        </div>
        <div className={s.benefitsGrid}>
          {eventBenefits.map((b) => (
            <div key={b.id} className={`${s.benefitCard} ${b.highlight ? s.benefitCardHighlight : ''}`}>
              <div className={s.benefitIcon} style={{ background: b.iconBg, color: b.iconColor }}>
                {b.iconEl}
              </div>
              <div className={s.benefitContent}>
                <p className={`${s.benefitNum} ${b.highlight ? s.benefitNumHighlight : ''}`}>Benefit 0{b.id}</p>
                <p className={s.benefitName}>{b.title}</p>
                <p className={`${s.benefitDesc} ${b.highlight ? s.benefitDescHighlight : ''}`}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Point Banner */}
      <section className={s.pointSection}>
        <div className={s.pointBanner}>
          <div className={s.pointBgIcon}>{icons.coins(256)}</div>
          <div className={s.pointTop}>
            <div className={s.pointTopText}>
              <div className={s.pointBadge}>
                {icons.sparkles(14)}
                <span className={s.pointBadgeText}>Reward Point System</span>
              </div>
              <h3 className={s.pointTitle}>
                차곡차곡 모은 적립금, <br className={s.brMobileOnly} />
                결제 금액의 <br className={s.brDesktopOnly} />
                <span className={s.pointTitleHighlight}>최대 30% 추가 할인</span>
              </h3>
              <p className={s.pointDesc}>
                아인잉글리쉬만의 특급 적립 제도를<br className={s.brMobileOnly} /> 100% 활용하세요.
                <br className={s.brDesktopOnly} /> 다양한 활동으로 포인트를 모아 <span className={s.pointDescHighlight}>더욱 가벼운 수강료</span>를 경험하세요!
              </p>
            </div>
            <div className={s.pointPercentBox}>
              <div className={s.pointPercentInner}>
                <div className={s.pointPercentBadge}>포인트 혜택</div>
                <p className={s.pointPercentLabel}>기존 할인가에서 추가로</p>
                <div className={s.pointPercentValue}>
                  <span className={s.pointPercentNum}>-30</span>
                  <span className={s.pointPercentSign}>%</span>
                </div>
              </div>
            </div>
          </div>

          <div className={s.pointCards}>
            <div className={s.pointCard}>
              <div className={s.pointCardHeader}>
                <div className={s.pointCardIcon}>{icons.userPlus(20)}</div>
                <h4 className={s.pointCardTitle}>지인 추천<br/>무제한 적립</h4>
              </div>
              <p className={s.pointCardDesc}>
                친구가 내 추천으로 등록할 때마다 <span className={s.pointCardHighlight}>횟수 제한 없이</span> 포인트가 적립됩니다.
              </p>
            </div>
            <div className={s.pointCard}>
              <div className={s.pointCardHeader}>
                <div className={s.pointCardIcon}>{icons.penTool(20)}</div>
                <h4 className={s.pointCardTitle}>수강 후기<br/>리뷰 적립</h4>
              </div>
              <p className={s.pointCardDesc}>
                수업 후 정성스러운 <span className={s.pointCardHighlight}>생생한 리뷰</span>를 남겨주시면 감사 포인트가 지급됩니다.
              </p>
            </div>
            <div className={s.pointCard}>
              <div className={s.pointCardHeader}>
                <div className={s.pointCardIcon}>{icons.trendingUp(20)}</div>
                <h4 className={s.pointCardTitle}>재수강<br/>감사 적립</h4>
              </div>
              <p className={s.pointCardDesc}>
                수강 연장 시 <span className={s.pointCardHighlight}>재수강 이벤트에 참여</span>하시면 1만원 포인트를 적립해 드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <main className={s.pricingSection}>
        <div className={s.pricingHeader}>
          <h2 className={s.pricingTitle}>Pick Your Plan</h2>
          <p className={s.pricingDesc}>나에게 꼭 맞는 학습 빈도를 선택하세요. 많이 할수록 혜택은 커집니다.</p>
        </div>
        <div className={s.pricingGrid}>
          {[5, 4, 3, 2, 1].map(f => (
            <PlanCard key={f} data={plans[f]} isBest={f === 4} />
          ))}
        </div>
      </main>

      {/* Reviews */}
      <section className={s.reviewsSection}>
        <h2 className={s.reviewsLabel}>Student Stories</h2>
        <h3 className={s.reviewsTitle}>수강생이 직접 말하는 <span className={s.reviewsHighlight}>변화</span></h3>
        <div className={s.reviewsGrid}>
          {reviews.map((review, idx) => (
            <div key={idx} className={s.reviewCard}>
              <div className={s.reviewQuote}>{icons.quote(32)}</div>
              <div className={s.reviewStars}>
                {[...Array(review.rating)].map((_, i) => <span key={i}>{icons.star(14)}</span>)}
              </div>
              <p className={s.reviewContent}>&quot;{review.content}&quot;</p>
              <p className={s.reviewName}>{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={s.ctaSection}>
        <div className={s.ctaBgWrap}>
          <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80" alt="tutor" className={s.ctaBgImg} />
          <div className={s.ctaOverlay} />
        </div>
        <div className={s.ctaContent}>
          <div className={s.ctaAvatars}>
            <div className={s.ctaAvatarGroup}>
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="s1"/>
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="s2"/>
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="s3"/>
            </div>
            <span className={s.ctaAvatarText}>수강생 만족도 4.9/5.0</span>
          </div>
          <h2 className={s.ctaTitle}>원어민과의 첫 만남, <br className={s.brMobileOnly} />설렘으로 바꾸세요</h2>
          <p className={s.ctaDesc}>
            고민은 실력 향상을 늦출 뿐입니다.<br/>
            상위 1% 강사진의 몰입형 1:1 환경을<br className={s.brMobileOnly} /> 직접 체험하세요.
          </p>
          <div className={s.ctaBtnWrap}>
            <button className={s.ctaBtn}>
              <span>무료체험 신청하기</span>
              {icons.chevronRight(24)}
            </button>
            <p className={s.ctaSubText}>
              {icons.sparkles(14, "")} <span className={s.ctaSubBold}>이번 달 선착순 한정</span> 무료 혜택
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={s.footer}>
        <div className={s.footerInner}>
          <div className={s.footerTop}>
            <div className={s.footerLinks}>
              <button>이용약관</button>
              <button>개인정보처리방침</button>
            </div>
            <div className={s.footerSocial}>
              <button className={`${s.socialBtn} ${s.socialYoutube}`}>{icons.youtube(16)}</button>
              <button className={`${s.socialBtn} ${s.socialFacebook}`}>{icons.facebook(16)}</button>
              <button className={`${s.socialBtn} ${s.socialInstagram}`}>{icons.instagram(16)}</button>
              <button className={`${s.socialBtn} ${s.socialBlog}`}><span className={s.socialBlogText}>blog</span></button>
            </div>
          </div>
          <div className={s.footerBottom}>
            <div>
              <div className={s.footerLogo}>
                <div className={s.footerLogoIcon}>{icons.sparkles(20)}</div>
                <div className={s.footerLogoText}>EINENGLISH</div>
              </div>
              <div className={s.footerInfo}>
                <div className={s.footerInfoGroup}>
                  <p>상호명 : 아인잉글리쉬 원격평생교육원</p>
                  <p>주소 : 서울시 구로구 디지털로 30길 31</p>
                </div>
                <div className={s.footerInfoGroup}>
                  <p>대표 : 강민규</p>
                  <p>사업자등록번호 : 634-98-00756</p>
                </div>
                <div className={s.footerInfoGroup}>
                  <p>이메일 : einenglish3@gmail.com</p>
                </div>
                <div className={s.footerInfoGroup}>
                  <p>통신판매업신고번호 : 제2022-서울구로-1595호</p>
                </div>
              </div>
              <p className={s.footerCopyright}>© 2022 아인잉글리쉬. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className={s.floatingCta}>
        <div className={s.floatingCtaInner}>
          <div className={s.floatingCtaTooltip}>
            2026년 새해에는 반드시 성공하세요! ✨
            <div className={s.floatingCtaTooltipArrow} />
          </div>
          <button className={s.floatingCtaBtn}>
            <span className={s.floatingCtaSub}>레벨진단 / 학습설계 / 할인혜택</span>
            <span>체험비 0원 ➜ 지금 신청하기</span>
          </button>
        </div>
      </div>

      {/* Kakao Talk */}
      <div className={s.floatingKakao}>
        <button className={s.kakaoBtn}>
          <span className={s.kakaoBadge}>1</span>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#3c1e1e">
            <path d="M12 3c-4.97 0-9 3.134-9 7 0 2.497 1.731 4.683 4.415 5.942l-.89 3.27c-.1.365.11.739.467.832.115.03.23.03.342 0l3.87-2.57c.26.018.524.026.796.026 4.97 0 9-3.134 9-7s-4.03-7-9-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
