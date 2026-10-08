/**
 * VELOX RACING — UNIFIED BILINGUAL LOCALIZATION ENGINE (EN / AR)
 * Zagazig National University | Formula Student UK
 * Authentic, prestigious collegiate motorsport translations.
 */

const VELOX_I18N = {
  en: {
    // Nav
    'nav.brand': 'VELOX RACING',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.team': 'Team',
    'nav.sponsors': 'Sponsors',
    'nav.join': 'Join Us',
    'nav.joinFull': 'Join the Team &rarr;',
    'nav.partnerBtn': 'Partner With Us',

    // Hero (index.html)
    'hero.status': 'LIGHTS OUT',
    'hero.badge': 'Zagazig National University &bull; Formula Student UK',
    'hero.title': 'VELOX RACING',
    'hero.tagline': 'Designing and engineering Zagazig National University\'s first Formula Student race car for the world stage at Silverstone Circuit.',
    'hero.btnJoin': 'Join the Team',
    'hero.btnMeet': 'Meet the Team',
    'hero.btnReel': 'Watch Reel',

    // Performance Targets / Highlights (index.html)
    'hl.kicker': 'Performance Targets',
    'hl.title': 'Engineered for Precision',
    'hl.desc': 'Key engineering milestones and benchmarks defining Chassis VX-01.',
    'hl.c1Num': '< 198 kg',
    'hl.c1Label': 'Target Mass',
    'hl.c1Desc': '4130 chromoly tubular spaceframe with carbon fiber aero elements',
    'hl.c2Num': '< 3.8 s',
    'hl.c2Label': '0–100 km/h',
    'hl.c2Desc': 'Optimized chain drive reduction and high power-to-weight ratio',
    'hl.c3Num': '7',
    'hl.c3Label': 'Subsystems',
    'hl.c3Desc': 'Body, Chassis, Vehicle Dynamics, Powertrain, Electrical, PR, and Business',
    'hl.c4Num': 'Silverstone',
    'hl.c4Label': 'Target Arena',
    'hl.c4Desc': 'Formula Student UK international competition at the home of British motorsport',

    // About (index.html)
    'about.kicker': 'About the Team',
    'about.title': 'Built by Students.<br />Driven by Engineering.',
    'about.p1': 'Velox Racing is the official Formula Student team of Zagazig National University (ZNU). We bring together ambitious undergraduate students to design, simulate, build, and test a single-seater formula-style racecar from the ground up.',
    'about.p2': 'Operating through the Faculty of Engineering, our crew spans Mechatronics, Mechanical, Electrical, Computer Science, and Business disciplines. We compete internationally in Formula Student UK at Silverstone, testing our vehicle design, business strategy, and manufacturing against elite universities worldwide.',
    'about.btnExplore': 'Explore Team Structure &rarr;',

    // Cinema Showcase (index.html)
    'reel.kicker': 'Experience Velox Racing',
    'reel.title': 'The Sound & Engineering of Velox',
    'reel.desc': 'Inside the workshop and onto the tarmac. From virtual CAD architectures to high-performance track testing.',
    'reel.loadingTitle': 'Preparing High-Definition Reel...',
    'reel.loadingSub': 'Buffering stream for smooth 60 FPS playback',
    'reel.buffering': 'Buffering stream...',
    'reel.ready': 'Watch High-Definition Reel',

    // CTA Banner (index.html)
    'cta.kicker': 'Recruitment Open',
    'cta.title': 'Ready to Build the Future of Motorsport?',
    'cta.desc': 'We are recruiting dedicated students across all technical and non-technical fields. Whether your focus is CAD modeling, FEA simulation, harness fabrication, or corporate sponsorship, we want you on our grid.',
    'cta.btn': 'Apply for the Team',

    // Team Page (team.html)
    'team.kicker': 'Organizational Chart',
    'team.title': 'Team Structure',
    'team.desc': 'A multidisciplinary hierarchy designed for streamlined engineering workflows, rapid iteration, and strict accountability.',
    'team.filterAll': 'All Divisions',
    'team.filterTech': 'Technical Branch (4)',
    'team.filterOps': 'Operations Branch (3)',
    'team.branchTechTitle': 'Technical Engineering Branch',
    'team.branchOpsTitle': 'Operations & Business Branch',
    'team.leaderRole': 'Leader',

    // Team Roles & Departments (for dynamic org chart)
    'role.Team Leader': 'Team Leader',
    'role.Vice Team Leader': 'Vice Team Leader',
    'role.Technical Leader': 'Technical Leader',
    'role.Powertrain Leader': 'Powertrain Leader',
    'role.Electrical Leader': 'Electrical Leader',
    'role.Media Lead': 'Media Lead',

    'dept.Body & Chassis': 'Body & Chassis',
    'dept.Vehicle Dynamics': 'Vehicle Dynamics',
    'dept.Powertrain': 'Powertrain',
    'dept.Electrical': 'Electrical',
    'dept.Human Resources (HR)': 'Human Resources (HR)',
    'dept.Media & PR': 'Media & PR',
    'dept.Business (Team Director)': 'Business (Team Director)',

    'deptDesc.body-chassis': 'Aerodynamic packaging, CFD downforce optimization, and 4130 tubular steel spaceframe chassis fabrication.',
    'deptDesc.vehicle-dynamics': 'Double-wishbone kinematics, spring-damper tuning, Ackermann steering geometry, and dual-master brake hydraulic balance.',
    'deptDesc.powertrain': 'Powertrain mounting, cooling thermal loops, torque transfer, chain drive ratio optimization, and differential assembly.',
    'deptDesc.electrical': 'Motorsport Raychem wiring harness, low-voltage power distribution, sensors calibration, and pit wall wireless DAQ.',
    'deptDesc.hr': 'Talent recruitment, screening, onboarding, attendance tracking, and internal team welfare.',
    'deptDesc.media': 'Visual identity, photography, cinematic build documentaries, social media broadcasting, and press relations.',
    'deptDesc.business': 'Static event presentation, Comprehensive Bill of Materials (CBOM), financial forecasting, and corporate partnerships.',

    'sub.Body': 'Body & Aerodynamics',
    'sub.Chassis': 'Chassis & Spaceframe',
    'sub.Suspension': 'Suspension',
    'sub.Steering': 'Steering',
    'sub.Brakes': 'Brakes',
    'sub.Motor': 'Engine & Motor',
    'sub.Transmission': 'Transmission & Drivetrain',
    'sub.Wiring Loom': 'Wiring Loom & Harness',
    'sub.DAQ & Telemetry': 'DAQ & Telemetry',
    'sub.Recruitment & Interviews': 'Recruitment & Interviews',
    'sub.Member Operations': 'Member Operations & HR',
    'sub.Photography & Video': 'Photography & Video Production',
    'sub.Social Media & Public Relations': 'Social Media & Public Relations',
    'sub.Pitch Presenters & Market Analysis': 'Pitch Presenters & Market Analysis',
    'sub.Financial Modeling & Cost Analysis': 'Financial Modeling & Cost Analysis',
    'sub.Cost & Manufacturing Specialist': 'Cost & Manufacturing Specialist',
    'sub.Corporate Relations & Sponsorship': 'Corporate Relations & Sponsorship',
    'sub.Media & Brand Specialist': 'Media & Brand Specialist',

    // Sponsorship Page (sponsorship.html)
    'sponsors.heroKicker': 'Partnership Opportunities // Formula Student UK',
    'sponsors.heroTitle': 'Power Egyptian Innovation on the World Stage',
    'sponsors.heroDesc': 'Partner with Velox Racing, the Formula Student challenger of Zagazig National University. Fueling clean high-performance mobility and accelerating the next generation of elite engineers toward Silverstone Circuit.',
    'sponsors.btnInquire': 'Become a Partner',
    'sponsors.btnTiers': 'View Sponsorship Tiers',
    'sponsors.univKicker': 'Institutional Academic Patron',
    'sponsors.univTitle': 'Zagazig National University & Faculty of Engineering',
    'sponsors.univDesc': 'Velox Racing is officially endorsed, hosted, and academically mentored under the patronage of Zagazig National University (ZNU) and the Faculty of Engineering, with direct access to advanced campus laboratories, manufacturing machine shops, and faculty guidance.',
    'sponsors.chip1': 'Faculty of Engineering',
    'sponsors.chip2': 'Advanced Dynamics Labs',
    'sponsors.chip3': 'Formula Student UK 2026',

    // Footer (all pages)
    'footer.desc': 'The official Formula Student racing team of Zagazig National University (ZNU), competing at Silverstone Circuit in Formula Student UK.',
    'footer.navTitle': 'Navigation',
    'footer.connectTitle': 'Connect',
    'footer.copy': '&copy; 2026 Velox Racing &mdash; Zagazig National University. All rights reserved.',
    'footer.arena': 'Formula Student UK &bull; Silverstone'
  },

  ar: {
    // Nav
    'nav.brand': 'فريق فيلوكس للسباقات',
    'nav.home': 'الرئيسية',
    'nav.about': 'عن الفريق',
    'nav.team': 'الهيكل التنظيمي',
    'nav.sponsors': 'الشركاء والرعاة',
    'nav.join': 'انضم للفريق',
    'nav.joinFull': 'انضم لطاقم العمل &larr;',
    'nav.partnerBtn': 'كن شريكاً لنا',

    // Hero (index.html)
    'hero.status': 'انطلاق السباق',
    'hero.badge': 'جامعة الزقازيق الأهلية &bull; فورمولا ستيودنت بريطانيا',
    'hero.title': 'فريق فيلوكس للسباقات',
    'hero.tagline': 'تصميم وهندسة أول سيارة سباق لجامعة الزقازيق الأهلية في مسابقة فورمولا ستيودنت العالمية على حلبة سيلفرستون البريطانية.',
    'hero.btnJoin': 'انضم للفريق',
    'hero.btnMeet': 'تعرّف على الفريق',
    'hero.btnReel': 'شاهد العرض',

    // Performance Targets / Highlights (index.html)
    'hl.kicker': 'أهداف الأداء الهندسي',
    'hl.title': 'هندسة فائقة الدقة',
    'hl.desc': 'أهم المؤشرات الهندسية والمعايير التصميمية لشاسيه VX-01.',
    'hl.c1Num': '< ١٩٨ كجم',
    'hl.c1Label': 'الوزن المستهدف',
    'hl.c1Desc': 'شاسيه أنبوبي من صلب كروم-مولي 4130 مع حزمة ديناميكا هوائية من ألياف الكربون',
    'hl.c2Num': '< ٣.٨ ثوانٍ',
    'hl.c2Label': '٠ إلى ١٠٠ كم/س',
    'hl.c2Desc': 'نسب تخفيض محسوبة لمنظومة الدفع مع نسبة قدرة إلى وزن استثنائية',
    'hl.c3Num': '٧',
    'hl.c3Label': 'أنظمة رئيسية',
    'hl.c3Desc': 'الهيكل، الشاسيه، ديناميكا المركبة، منظومة الدفع، الأنظمة الكهربائية، العلاقات العامة، وإدارة الأعمال',
    'hl.c4Num': 'سيلفرستون',
    'hl.c4Label': 'حلبة السباق العالمية',
    'hl.c4Desc': 'المنافسة الدولية لفورمولا ستيودنت بريطانيا في مهد رياضة المحركات العالمية',

    // About (index.html)
    'about.kicker': 'عن فريق فيلوكس',
    'about.title': 'بُنيت بجهود الطلاب.<br />وتُقاد بالهندسة.',
    'about.p1': 'فريق فيلوكس للسباقات هو الفريق الهندسي الرسمي لجامعة الزقازيق الأهلية (ZNU). نجمع نخبة من الطلاب الطموحين لتصميم ومحاكاة وبناء واختبار سيارة سباق بمقعد واحد من الصفر.',
    'about.p2': 'يعمل الفريق تحت مظلة كلية الهندسة ويضم طلاباً من أقسام الميكاترونكس، الميكانيكا، الكهرباء، هندسة الحاسب، وإدارة الأعمال، للمنافسة في مسابقة فورمولا ستيودنت بريطانيا على حلبة سيلفرستون العريقة واختبار التصميم الهندسي واستراتيجية التصنيع أمام جامعات العالم.',
    'about.btnExplore': 'استكشف الهيكل التنظيمي &larr;',

    // Cinema Showcase (index.html)
    'reel.kicker': 'عش تجربة فيلوكس',
    'reel.title': 'صوت وهندسة فيلوكس',
    'reel.desc': 'من داخل الورشة إلى أرض الحلبة. من تصميمات الـ CAD ثلاثية الأبعاد إلى اختبارات الأداء الحقيقية على الأسفلت.',
    'reel.loadingTitle': 'جاري تحميل وتجهيز العرض عالي الدقة...',
    'reel.loadingSub': 'تجهيز البث لضمان تشغيل سلس وفائق الدقة دون تقطيع',
    'reel.buffering': 'جاري استكمال التحميل...',
    'reel.ready': 'مشاهدة العرض عالي الدقة',

    // CTA Banner (index.html)
    'cta.kicker': 'باب الانضمام مفتوح',
    'cta.title': 'هل أنت مستعد لبناء مستقبل رياضة المحركات؟',
    'cta.desc': 'نفتح باب الانضمام للطلاب المتميزين في جميع التخصصات الهندسية والإدارية. سواء كانت مهاراتك في نمذجة الـ CAD، أو تحليل الإجهادات، أو تصنيع الضفائر، أو الرعاية والشراكات، مكانك محجوز في خط الانطلاق.',
    'cta.btn': 'قدّم طلب الانضمام الآن',

    // Team Page (team.html)
    'team.kicker': 'الهيكل التنظيمي // موسم 2026',
    'team.title': 'الهيكل الإداري والهندسي',
    'team.desc': 'تسلسل هرمي متعدد التخصصات مصمم لتنظيم التدفقات الهندسية وسرعة التطوير وأعلى مستويات المسؤولية.',
    'team.filterAll': 'جميع الأقسام',
    'team.filterTech': 'الأقسام التقنية (٤)',
    'team.filterOps': 'الإدارة والعمليات (٣)',
    'team.branchTechTitle': 'القطاع الهندسي والتقني',
    'team.branchOpsTitle': 'قطاع الإدارة والعمليات',
    'team.leaderRole': 'مسؤول القسم',

    // Team Roles & Departments (for dynamic org chart)
    'role.Team Leader': 'قائد الفريق',
    'role.Vice Team Leader': 'نائب قائد الفريق',
    'role.Technical Leader': 'المدير التقني',
    'role.Powertrain Leader': 'مسؤول منظومة الدفع',
    'role.Electrical Leader': 'مسؤول الأنظمة الكهربائية',
    'role.Media Lead': 'مسؤول الإعلام والتسويق',

    'dept.Body & Chassis': 'الهيكل والشاسيه',
    'dept.Vehicle Dynamics': 'ديناميكا المركبة',
    'dept.Powertrain': 'منظومة الدفع والقوى',
    'dept.Electrical': 'الأنظمة الكهربائية والإلكترونية',
    'dept.Human Resources (HR)': 'الموارد البشرية (HR)',
    'dept.Media & PR': 'الإعلام والعلاقات العامة',
    'dept.Business (Team Director)': 'إدارة الأعمال والشراكات',

    'deptDesc.body-chassis': 'التصميم الديناميكي الهوائي، تحسين قوى الارتكاز (CFD)، وتصنيع الشاسيه الأنبوبي من صلب 4130 كروم-مولي.',
    'deptDesc.vehicle-dynamics': 'حركيات التعليق المزدوج، ضبط ممتصات الصدمات، هندسة توجيه أكرمان، وموازنة الفرامل الهيدروليكية المزدوجة.',
    'deptDesc.powertrain': 'تثبيت المحرك، دورات التبريد الحرارية، نقل العزم، ضبط نسب نقل الحركة بالجنازير، وتجميع الدفرنس.',
    'deptDesc.electrical': 'ضفيرة الأسلاك الاحترافية من نوع رايكيم، توزيع القدرة المنخفضة، معايرة الحساسات، ونظام القياس عن بعد اللاسلكي.',
    'deptDesc.hr': 'استقطاب الكفاءات، المقابلات الشخصية، متابعة الحضور والالتزام، والرعاية الإدارية لأعضاء الفريق.',
    'deptDesc.media': 'الهوية البصرية، التصوير الفوتوغرافي والسينمائي، توثيق مراحل التصنيع، وإدارة المنصات الرقمية والعلاقات الصحفية.',
    'deptDesc.business': 'عروض الفعاليات الثابتة، قائمة التكاليف والمواد الشاملة (CBOM)، التخطيط المالي، وبناء الشراكات مع الرعاة.',

    'sub.Body': 'الهيكل الخارجي والديناميكا الهوائية',
    'sub.Chassis': 'الشاسيه الفولاذي',
    'sub.Suspension': 'نظام التعليق',
    'sub.Steering': 'نظام التوجيه',
    'sub.Brakes': 'منظومة الفرامل',
    'sub.Motor': 'المحرك ووحدة القدرة',
    'sub.Transmission': 'ناقل الحركة والديناميكا الحركية',
    'sub.Wiring Loom': 'الضفائر والأسلاك الكهربائية',
    'sub.DAQ & Telemetry': 'أنظمة جمع البيانات والتلمتري',
    'sub.Recruitment & Interviews': 'التوظيف والمقابلات الشخصية',
    'sub.Member Operations': 'إدارة الأعضاء والعمليات',
    'sub.Photography & Video': 'الإنتاج المرئي والسينمائي',
    'sub.Social Media & Public Relations': 'منصات التواصل والعلاقات العامة',
    'sub.Pitch Presenters & Market Analysis': 'عروض المستثمرين وتحليل السوق',
    'sub.Financial Modeling & Cost Analysis': 'النمذجة المالية وتكاليف التصنيع',
    'sub.Cost & Manufacturing Specialist': 'أخصائي التكلفة والتصنيع',
    'sub.Corporate Relations & Sponsorship': 'العلاقات المؤسسية والجهات الراعية',
    'sub.Media & Brand Specialist': 'أخصائي الهوية والعلامة التجارية',

    // Sponsorship Page (sponsorship.html)
    'sponsors.heroKicker': 'فرص الرعاية والشراكة الاستراتيجية // فورمولا ستيودنت بريطانيا',
    'sponsors.heroTitle': 'ادعم الابتكار الهندسي المصري في ساحة السباقات العالمية',
    'sponsors.heroDesc': 'شارك فريق فيلوكس للسباقات، ممثل جامعة الزقازيق الأهلية في مسابقة فورمولا ستيودنت العالمية. نسابق في حلبة سيلفرستون العريقة ونبني الجيل القادم من قادة صناعة السيارات والتنقل الكهربائي.',
    'sponsors.btnInquire': 'كن شريكاً استراتيجياً',
    'sponsors.btnTiers': 'استعراض باقات الرعاية',
    'sponsors.univKicker': 'الشريك والمظلة الأكاديمية الرسمية',
    'sponsors.univTitle': 'جامعة الزقازيق الأهلية وكلية الهندسة',
    'sponsors.univDesc': 'يعمل فريق فيلوكس للسباقات تحت الرعاية الكاملة والدعم الأكاديمي والتقني المباشر من إدارة جامعة الزقازيق الأهلية وكلية الهندسة، مع الاستفادة من المعامل الهندسية المتطورة ومرافق التصنيع وإشراف الأساتذة.',
    'sponsors.chip1': 'كلية الهندسة',
    'sponsors.chip2': 'معامل الديناميكا والتصنيع',
    'sponsors.chip3': 'فورمولا ستيودنت 2026',

    // Footer (all pages)
    'footer.desc': 'فريق فورمولا ستيودنت الرسمي لجامعة الزقازيق الأهلية (ZNU)، ممثل مصر في حلبة سيلفرستون ببريطانيا.',
    'footer.navTitle': 'روابط سريعة',
    'footer.connectTitle': 'تواصل معنا',
    'footer.copy': '&copy; 2026 فريق فيلوكس للسباقات &mdash; جامعة الزقازيق الأهلية. جميع الحقوق محفوظة.',
    'footer.arena': 'فورمولا ستيودنت بريطانيا &bull; حلبة سيلفرستون'
  }
};

/**
 * Apply Language across page
 */
function applyVeloxLanguage(lang) {
  const currentLang = (lang === 'ar') ? 'ar' : 'en';
  localStorage.setItem('velox_lang', currentLang);

  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

  const langLabel = document.getElementById('langLabel');
  if (langLabel) {
    langLabel.textContent = currentLang === 'ar' ? 'EN' : 'AR';
  }

  const dict = VELOX_I18N[currentLang] || VELOX_I18N.en;

  // Translate all [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Translate all [data-i18n-ph]
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Notify components (e.g. Org chart in team.html)
  window.dispatchEvent(new CustomEvent('veloxLanguageChanged', { detail: { lang: currentLang } }));
}

/**
 * Toggle Language between English and Arabic
 */
function toggleVeloxLanguage() {
  const current = localStorage.getItem('velox_lang') || 'en';
  const next = current === 'ar' ? 'en' : 'ar';
  applyVeloxLanguage(next);
}

// Auto-run on document ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('velox_lang') || 'en';
    applyVeloxLanguage(saved);
  });
}
