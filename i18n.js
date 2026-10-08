/**
 * VELOX RACING — UNIFIED BILINGUAL LOCALIZATION ENGINE (EN / AR)
 * Zagazig National University | Formula Student
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
    'hero.badge': 'VELOX Formula Student Team &bull; Zagazig National University',
    'hero.title': 'Welcome to the VELOX Formula Student Team!',
    'hero.tagline': '<p class="hero-p">VELOX is the very first team at Zagazig National University to genuinely set its sights on international automotive competitions, offering opportunities to travel abroad, compete, and represent both the university and the team.</p><p class="hero-p">Here, you won’t just learn about race cars in theory; you will grow and become an integral part of a team that designs and manufactures an actual race car, preparing it to take on real international competitions.</p><p class="hero-p">If you are passionate about Formula cars and driven by challenges, VELOX is where you learn and turn that knowledge into a real-world project.</p>',
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
    'hl.c4Desc': 'Formula Student international competition on the world racing stage',

    // About (index.html)
    'about.kicker': 'About the Team',
    'about.title': 'Built by Students.<br />Driven by Engineering.',
    'about.p1': 'Velox Racing is the official Formula Student team of Zagazig National University (ZNU). We bring together ambitious undergraduate students to design, simulate, build, and test a single-seater formula-style racecar from the ground up.',
    'about.p2': 'Operating through the Faculty of Engineering, our crew spans Mechatronics, Mechanical, Electrical, Computer Science, and Business disciplines. We compete internationally in Formula Student at Silverstone, testing our vehicle design, business strategy, and manufacturing against elite universities worldwide.',
    'about.btnExplore': 'Explore Team Structure &rarr;',
    'about.crewBadge': '50+ Engineers &amp; Specialists &bull; ZNU',

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

    // Recruitment Application (join.html)
    'join.kicker': 'VELOX Formula Student Team &bull; Recruitment 2026',
    'join.title': 'Build the Race Car. Represent Egypt on the World Stage.',
    'join.desc': 'Welcome to the official application for VELOX Formula Student Team at Zagazig National University. Here, you won’t just learn theory — you will grow, design, and manufacture an actual race car with real opportunities to travel and compete abroad. No prior motorsport experience required: passion, problem-solving, and commitment are what make our team.',
    'join.fullName': 'Full Name (English)<span class="req">*</span>',
    'join.fullNamePh': 'e.g. Mostafa Ahmed',
    'join.email': 'University / Personal Email<span class="req">*</span>',
    'join.emailHint': 'Only one application allowed per email',
    'join.phone': 'Phone / WhatsApp Number<span class="req">*</span>',
    'join.phonePh': '010XXXXXXXX',
    'join.universityId': 'University ID / Student ID<span class="req">*</span>',
    'join.universityIdPh': 'e.g. 202300123',
    'join.faculty': 'Faculty / Department<span class="req">*</span>',
    'join.facultySelect': 'Select your faculty',
    'join.facMecha': 'Engineering — Mechatronics',
    'join.facMech': 'Engineering — Mechanical',
    'join.facElec': 'Engineering — Electrical',
    'join.facCs': 'Computer & Information Sciences (AI / Aviation)',
    'join.facBus': 'Business / Commerce',
    'join.facOther': 'Other Faculty',
    'join.academicYear': 'Academic Level / Year<span class="req">*</span>',
    'join.yearSelect': 'Select your current year',
    'join.lvl0': 'Level 0 / Preparatory (Prep Year)',
    'join.lvl100': 'Level 100 / Second Year',
    'join.lvl200': 'Level 200 / Third Year',
    'join.lvl300': 'Level 300 / Fourth Year',
    'join.lvl400': 'Level 400 / Fifth Year (Senior)',
    'join.alumni': 'Graduate / Alumni',
    'join.subteam1': '1st Choice Sub-team<span class="req">*</span>',
    'join.subteam2': '2nd Choice Sub-team<span class="req">*</span>',
    'join.subteamSelect1': 'Select 1st choice',
    'join.subteamSelect2': 'Select 2nd choice',
    'join.timeCommitment': 'Weekly Time Commitment<span class="req">*</span>',
    'join.timeL3': '< 3 hours',
    'join.time35': '3 to 5 hrs',
    'join.time510': '5 to 10 hrs',
    'join.time10p': '10+ hrs',
    'join.skills': 'Relevant Skills & Software Tools',
    'join.skillsHint': 'Select any that apply to your background:',
    'join.skillsCustomPh': 'Other skills (e.g. Python, STM32, CBOM Costing, etc.)',
    'join.whyJoin': 'Why do you want to join the VELOX Formula Student Team?<span class="req">*</span>',
    'join.whyJoinPh': 'Share your drive, what areas excite you the most, and how you envision contributing to designing, building, and racing Chassis VX-01...',
    'join.portfolio': 'CV, Portfolio, or LinkedIn Profile (Optional)',
    'join.portfolioPh': 'https://drive.google.com/... or https://linkedin.com/in/...',
    'join.submitBtn': 'Submit Application',
    'join.submittingBtn': 'Submitting Application...',
    'join.successTitle': 'Application Submitted',
    'join.successDesc': 'Thank you for applying to Velox Racing. Your submission has been securely recorded. Our HR division and subsystem leaders will review your profile and contact you via email or WhatsApp regarding interview scheduling.',
    'join.backHome': 'Back to Home',

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
    'sponsors.heroKicker': 'Partnership Opportunities // Formula Student',
    'sponsors.heroTitle': 'Power Egyptian Innovation on the World Stage',
    'sponsors.heroDesc': 'Partner with Velox Racing, the Formula Student challenger of Zagazig National University. Fueling clean high-performance mobility and accelerating the next generation of elite engineers toward Silverstone Circuit.',
    'sponsors.btnInquire': 'Become a Partner',
    'sponsors.btnTiers': 'View Sponsorship Tiers',
    'sponsors.univKicker': 'Institutional Academic Patron',
    'sponsors.univTitle': 'Zagazig National University & Faculty of Engineering',
    'sponsors.univDesc': 'Velox Racing is officially endorsed, hosted, and academically mentored under the patronage of Zagazig National University (ZNU) and the Faculty of Engineering, with direct access to advanced campus laboratories, manufacturing machine shops, and faculty guidance.',
    'sponsors.chip1': 'Faculty of Engineering',
    'sponsors.chip2': 'Advanced Dynamics Labs',
    'sponsors.chip3': 'Formula Student 2026',

    // Member Overview Modal
    'modal.viewProfile': 'Click to view overview',
    'modal.close': 'Close Overview',
    'modal.overview': 'Engineering & Operational Overview',
    'modal.responsibilities': 'Core Responsibilities',
    'modal.arena': 'Formula Student &bull; Silverstone 2026',
    'modal.univ': 'Zagazig National University (ZNU)',
    'modal.followIg': 'Instagram Profile',
    'modal.followLi': 'Team LinkedIn',
    'modal.apply': 'Join the Crew &rarr;',

    // Footer (all pages)
    'footer.desc': 'The official Formula Student racing team of Zagazig National University (ZNU), competing internationally in Formula Student competitions.',
    'footer.navTitle': 'Navigation',
    'footer.connectTitle': 'Connect',
    'footer.copy': '&copy; 2026 Velox Racing &mdash; Zagazig National University. All rights reserved.',
    'footer.arena': 'Formula Student &bull; Silverstone'
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
    'hero.badge': 'VELOX Formula Student Team',
    'hero.title': 'أهلاً بيك في VELOX Formula Student Team',
    'hero.tagline': '<p class="hero-p">VELOX هو أول فريق في جامعة الزقازيق الأهلية بيتجه بشكل حقيقي نحو مسابقات السيارات الدولية، مع فرص للمشاركة والسفر خارج مصر لتمثيل الجامعة والتيم.</p><p class="hero-p">هنا مش هتتعلم عن عربيات السباق نظريًا بس، لكن هتطور و تكون فرد من فريق بيصمم و بيصنع سيارة سباق فعلية ، وهتجهزها للمشاركة في المسابقات الدولية الحقيقية.</p><p class="hero-p">لو بتحب عربيات الفورميولا والتحديات، فـ VELOX هو المكان اللي هتتعلم فيه وتطبق اللي بتتعلمه على مشروع حقيقي.</p>',
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
    'hl.c4Desc': 'المنافسة الدولية في مسابقات فورمولا ستيودنت على ساحة السباقات العالمية',

    // About (index.html)
    'about.kicker': 'عن فريق فيلوكس',
    'about.title': 'بُنيت بجهود الطلاب.<br />وتُقاد بالهندسة.',
    'about.p1': 'فريق فيلوكس للسباقات هو الفريق الهندسي الرسمي لجامعة الزقازيق الأهلية (ZNU). نجمع نخبة من الطلاب الطموحين لتصميم ومحاكاة وبناء واختبار سيارة سباق بمقعد واحد من الصفر.',
    'about.p2': 'يعمل الفريق تحت مظلة كلية الهندسة ويضم طلاباً من أقسام الميكاترونكس، الميكانيكا، الكهرباء، هندسة الحاسب، وإدارة الأعمال، للمنافسة في مسابقات فورمولا ستيودنت العالمية على حلبة سيلفرستون واختبار التصميم الهندسي واستراتيجية التصنيع أمام جامعات العالم.',
    'about.btnExplore': 'استكشف الهيكل التنظيمي &larr;',
    'about.crewBadge': '+50 مهندساً وأخصائياً &bull; جامعة الزقازيق الأهلية',

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

    // Recruitment Application (join.html)
    'join.kicker': 'فريق فيلوكس فورمولا ستيودنت // موسم الانضمام ٢٠٢٦',
    'join.title': 'اصنع سيارة السباق. ومثّل مصر في المحافل الدولية.',
    'join.desc': 'أهلاً بيك في استمارة التقديم الرسمية لفريق VELOX Formula Student Team بجامعة الزقازيق الأهلية. هنا مش هتتعلم نظري بس، هتكون جزء من فريق بيصمم وبيصنع سيارة سباق حقيقية للمنافسة والسفر خارج مصر لتمثيل الجامعة والتيم. لا يُشترط وجود خبرة سابقة في رياضة المحركات — شغفك، استعدادك للتحدي، والتزامك هما اللي هيصنعوا الفارق.',
    'join.fullName': 'الاسم بالكامل (باللغة الإنجليزية)<span class="req">*</span>',
    'join.fullNamePh': 'مثال: Mostafa Ahmed',
    'join.email': 'البريد الإلكتروني الجامعي / الشخصي<span class="req">*</span>',
    'join.emailHint': 'يُسمح بطلب انضمام واحد فقط لكل بريد إلكتروني',
    'join.phone': 'رقم الهاتف / الواتساب<span class="req">*</span>',
    'join.phonePh': '010XXXXXXXX',
    'join.universityId': 'الرقم الجامعي / كود الطالب<span class="req">*</span>',
    'join.universityIdPh': 'مثال: 202300123',
    'join.faculty': 'الكلية / البرنامج الدراسي<span class="req">*</span>',
    'join.facultySelect': 'اختر كليتك أو تخصصك',
    'join.facMecha': 'الهندسة — Mechatronics',
    'join.facMech': 'الهندسة — Mechanical',
    'join.facElec': 'الهندسة — Electrical',
    'join.facCs': 'الحاسبات والذكاء الاصطناعي (AI / Aviation)',
    'join.facBus': 'إدارة الأعمال / التجارة (Business)',
    'join.facOther': 'كلية أخرى',
    'join.academicYear': 'المستوى الدراسي / السنة الأكاديمية<span class="req">*</span>',
    'join.yearSelect': 'اختر مستواك الدراسي الحالي',
    'join.lvl0': 'Level 0 / إعدادي (Prep Year)',
    'join.lvl100': 'Level 100 / الفرقة الثانية (Second Year)',
    'join.lvl200': 'Level 200 / الفرقة الثالثة (Third Year)',
    'join.lvl300': 'Level 300 / الفرقة الرابعة (Fourth Year)',
    'join.lvl400': 'Level 400 / بكالوريوس (Senior)',
    'join.alumni': 'خريج / Alumni',
    'join.subteam1': 'الرغبة الأولى للقسم الفرعي<span class="req">*</span>',
    'join.subteam2': 'الرغبة الثانية للقسم الفرعي<span class="req">*</span>',
    'join.subteamSelect1': 'اختر الرغبة الأولى',
    'join.subteamSelect2': 'اختر الرغبة الثانية',
    'join.timeCommitment': 'الوقت المتاح أسبوعياً للفريق<span class="req">*</span>',
    'join.timeL3': 'أقل من ٣ ساعات',
    'join.time35': '٣ إلى ٥ ساعات',
    'join.time510': '٥ إلى ١٠ ساعات',
    'join.time10p': '١٠+ ساعات',
    'join.skills': 'المهارات التقنية وأدوات البرمجيات',
    'join.skillsHint': 'اختر ما ينطبق على خبرتك وخلفيتك:',
    'join.skillsCustomPh': 'مهارات أو أدوات أخرى (مثل Python, STM32, CBOM Costing, etc.)',
    'join.whyJoin': 'ليه حابب تنضم لـ VELOX Formula Student Team؟<span class="req">*</span>',
    'join.whyJoinPh': 'كلمنا عن دوافعك، إيه أكثر مجال مهتم بيه، وإزاي شايف نفسك بتساهم في تصميم وبناء سيارة السباق الأولى للفريق...',
    'join.portfolio': 'السيرة الذاتية (CV)، أو رابط Portfolio، أو حساب LinkedIn (اختياري)',
    'join.portfolioPh': 'https://drive.google.com/... or https://linkedin.com/in/...',
    'join.submitBtn': 'إرسال طلب الانضمام',
    'join.submittingBtn': 'جاري إرسال الطلب...',
    'join.successTitle': 'تم إرسال طلب الانضمام بنجاح',
    'join.successDesc': 'شكراً لتقديمك للانضمام إلى فريق فيلوكس للسباقات. تم حفظ بياناتك بنجاح. سيقوم مسؤولو الموارد البشرية (HR) وقادة الأقسام الهندسية بمراجعة ملفك والتواصل معك عبر البريد الإلكتروني أو الواتساب لتحديد موعد المقابلة الشخصية.',
    'join.backHome': 'العودة للرئيسية',

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
    'sponsors.heroKicker': 'فرص الرعاية والشراكة الاستراتيجية // فورمولا ستيودنت',
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

    // Member Overview Modal
    'modal.viewProfile': 'اضغط لعرض النبذة والمسؤوليات',
    'modal.close': 'إغلاق النبذة',
    'modal.overview': 'نبذة هندسية وتشغيلية',
    'modal.responsibilities': 'المسؤوليات والمهام الرئيسية',
    'modal.arena': 'فورمولا ستيودنت &bull; حلبة سيلفرستون ٢٠٢٦',
    'modal.univ': 'جامعة الزقازيق الأهلية',
    'modal.followIg': 'حساب الإنستغرام',
    'modal.followLi': 'لينكد إن الفريق',
    'modal.apply': 'انضم إلى الفريق &larr;',

    // Footer (all pages)
    'footer.desc': 'فريق فورمولا ستيودنت الرسمي لجامعة الزقازيق الأهلية (ZNU)، المنافس في مسابقات فورمولا ستيودنت الدولية على حلبة سيلفرستون.',
    'footer.navTitle': 'روابط سريعة',
    'footer.connectTitle': 'تواصل معنا',
    'footer.copy': '&copy; 2026 فريق فيلوكس للسباقات &mdash; جامعة الزقازيق الأهلية. جميع الحقوق محفوظة.',
    'footer.arena': 'فورمولا ستيودنت &bull; حلبة سيلفرستون'
  }
};

/**
 * Apply Theme across page
 */
function applyVeloxTheme(theme) {
  const currentTheme = (theme === 'light') ? 'light' : 'dark';
  localStorage.setItem('velox_theme', currentTheme);
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Update University logo in sponsorship page or elsewhere if present
  const univLogoImg = document.getElementById('univLogoImg');
  if (univLogoImg) {
    univLogoImg.src = currentTheme === 'light' ? 'znu_logo_light.png' : 'znu text logo dark.png';
  }

  window.dispatchEvent(new CustomEvent('veloxThemeChanged', { detail: { theme: currentTheme } }));
}

/**
 * Toggle Theme between Dark and Light mode
 */
function toggleVeloxTheme() {
  const current = document.documentElement.getAttribute('data-theme') || localStorage.getItem('velox_theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  applyVeloxTheme(next);
}

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

// Auto-run on document ready with resilient global delegation
if (typeof window !== 'undefined') {
  window.applyVeloxLanguage = applyVeloxLanguage;
  window.toggleVeloxLanguage = toggleVeloxLanguage;
  window.applyVeloxTheme = applyVeloxTheme;
  window.toggleVeloxTheme = toggleVeloxTheme;
  window.VELOX_I18N = VELOX_I18N;

  const initVeloxPreferences = () => {
    const savedTheme = localStorage.getItem('velox_theme') || 'dark';
    applyVeloxTheme(savedTheme);
    const savedLang = localStorage.getItem('velox_lang') || 'en';
    applyVeloxLanguage(savedLang);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVeloxPreferences);
  } else {
    initVeloxPreferences();
  }

  // Global click delegator: guaranteed to work on every single page
  document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('#langToggleBtn');
    if (langBtn) {
      e.preventDefault();
      e.stopPropagation();
      toggleVeloxLanguage();
      return;
    }
    const themeBtn = e.target.closest('#themeToggleBtn');
    if (themeBtn) {
      e.preventDefault();
      e.stopPropagation();
      toggleVeloxTheme();
      return;
    }
  }, true);
}
