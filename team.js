/**
 * VELOX Racing Team Structure Data
 * Zagazig National University — Formula Student
 * Single editable source of truth for the Org Chart (/team) and Application Form (/join).
 */

const VELOX_TEAM = {
  instagramUrl: "https://www.instagram.com/velox_racing_znu?srtk=MWl2azlianJlZ3J3bg==",
  linkedinUrl: "https://www.linkedin.com/company/velox-racing-team/",
  academicAdvisor: {
    id: "tharwat-osman",
    role: "Academic Advisor",
    name: "Prof. Dr. Tharwat Osman",
    photo: "",
    department: "Academic & Institutional Advisory Board",
    department_ar: "هيئة الإشراف الأكاديمي والاستشاري",
    bio: "Commands academic mentorship, engineering faculty coordination, advanced manufacturing laboratory access, and university institutional sponsorship for Formula Student Silverstone 2026.",
    bio_ar: "يقود الإشراف الأكاديمي العام والتنسيق المؤسسي مع إدارة الجامعة وكلية الهندسة، وتسهيل الوصول للورش والمعامل الهندسية المتطورة لدعم مشاركة الفريق في سيلفرستون.",
    responsibilities: [
      "Official academic mentorship, institutional faculty patronage, and educational governance",
      "Coordination with Zagazig National University presidency and engineering leadership",
      "Engineering research validation, manufacturing laboratory access, and design safety review",
      "Institutional compliance, university budget advocacy, and international competition representation"
    ],
    responsibilities_ar: [
      "الإشراف الأكاديمي الرسمي ورعاية الفريق المؤسسية تحت مظلة كلية الهندسة وجامعة الزقازيق الأهلية",
      "التنسيق المؤسسي المستمر مع قيادات الجامعة لتوفير المعامل والورش الهندسية المتقدمة",
      "المراجعة العلمية وتسهيل استخدام معامل التصنيع والاختبارات الميكانيكية والكهربائية المتطورة",
      "الحوكمة الأكاديمية والتمثيل المؤسسي لدعم مشاركة الفريق الدولية في مسابقة فورمولا ستيودنت بسيلفرستون"
    ],
    quote: "Our mission is empowering engineering students to bridge theoretical science and world-class motorsport reality on the international stage at Silverstone.",
    quote_ar: "رسالتنا هي تمكين طلابنا المبدعين في كلية الهندسة من تحويل العلوم النظرية إلى واقع هندسي ينافس على أعلى المستويات الدولية في حلبة سيلفرستون."
  },
  executives: [
    {
      id: "fatima-salman",
      role: "Team Leader",
      name: "Fatima Salman",
      photo: "https://res.cloudinary.com/dhoqtr0se/image/upload/v1792608069/velox_team_members/fatima_salman.jpg",
      department: "Executive Management & Institutional Governance",
      department_ar: "الإدارة التنفيذية والحوكمة المؤسسية",
      bio: "Leads the overall strategic vision, university partnerships, and international competition governance for Formula Student at Silverstone.",
      bio_ar: "تقود الرؤية الاستراتيجية للفريق والتنسيق المؤسسي مع إدارة الجامعة والتمثيل الدولي في سيلفرستون.",
      responsibilities: [
        "Executive team vision, roadmap governance, and organizational leadership",
        "Official liaison with Zagazig National University & Faculty of Engineering",
        "Formula Student UK international entry logistics, regulations, and institutional compliance",
        "Cross-departmental budget oversight, strategic milestones, and executive reviews"
      ],
      responsibilities_ar: [
        "القيادة التنفيذية وتوجيه الرؤية الاستراتيجية الشاملة للفريق",
        "التنسيق المؤسسي الرسمي مع إدارة جامعة الزقازيق الأهلية وكلية الهندسة",
        "لوجستيات وإجراءات التسجيل في مسابقة فورمولا ستيودنت الدولية بسيلفرستون",
        "حوكمة الميزانية ومتابعة الإنجازات والجداول الزمنية لكافة الأقسام"
      ],
      quote: "Leadership in motorsport isn't about giving orders; it's about empowering engineers to turn ambitious blueprints into tarmac reality.",
      quote_ar: "القيادة في رياضة المحركات لا تعني إعطاء الأوامر؛ بل إلهام المهندسين لتحويل المخططات الطموحة إلى حقيقة تنبض على الحلبة."
    },
    {
      id: "karim-shaprawy",
      role: "Vice Team Leader",
      name: "Karim Shaprawy",
      photo: "https://res.cloudinary.com/dhoqtr0se/image/upload/v1792608070/velox_team_members/karim_shaprawy.jpg",
      department: "Operations, Build Management & Partnerships",
      department_ar: "العمليات التنفيذية وإدارة التصنيع والشراكات",
      bio: "Drives day-to-day operations, workshop manufacturing schedules, static event preparation, and strategic sponsorship alliances.",
      bio_ar: "يدير العمليات اليومية وجداول التصنيع بالورشة وتجهيز المسابقات الثابتة واستقطاب الرعاة.",
      responsibilities: [
        "Operational roadmap execution, timeline synchronization, and sprint governance",
        "Workshop manufacturing discipline, resource allocation, and build progress",
        "Formula Student Static Event strategy (Business Plan Presentation & Cost CBOM)",
        "External sponsorship acquisition, industrial partnerships, and stakeholder relations"
      ],
      responsibilities_ar: [
        "التنفيذ الدقيق للخطط التشغيلية وتزامن الجداول الزمنية بين جميع الأقسام",
        "إدارة وتوزيع موارد ورشة التصنيع ومتابعة مراحل تصنيع السيارة",
        "استراتيجية المسابقات الثابتة (عرض خطة الأعمال BPP وجداول التكاليف CBOM)",
        "استقطاب الرعاة وبناء الشراكات الصناعية والتجارية الداعمة للفريق"
      ],
      quote: "In Formula Student, races are won long before the green flag drops. They are won through relentless workshop discipline and uncompromising teamwork.",
      quote_ar: "في سباقات فورمولا ستيودنت، يُحسم الفوز قبل نزول الحلبة بوقت طويل، من خلال الانضباط الصارم داخل الورشة وروح الفريق الواحدة."
    }
  ],
  technicalLeader: {
    id: "mohamed-romy",
    role: "Technical Leader",
    name: "Mohamed Romy",
    photo: "https://res.cloudinary.com/dhoqtr0se/image/upload/v1792608074/velox_team_members/mohamed_romy.jpg",
    department: "Chief Vehicle Engineering & Systems Architecture",
    department_ar: "الهندسة المعمارية الرئيسية وتكامل أنظمة السيارة",
    bio: "Commands vehicle engineering architecture, FEA/CFD simulations, rules compliance, and overall mechanical integration.",
    bio_ar: "يقود البنية الهندسية للسيارة ومحاكاة الإجهادات والانسيابية وتطبيق لوائح الأمان والتكامل الميكانيكي.",
    responsibilities: [
      "Overall vehicle engineering architecture and master CAD assembly packaging",
      "Formula Student technical regulations compliance and SES structural safety submission",
      "FEA structural stress validation, aerodynamics CFD envelope, and packaging envelope checks",
      "Trackside telemetry review, dynamic vehicle balance, and kinematic setup iteration"
    ],
    responsibilities_ar: [
      "الهندسة المعمارية الشاملة لسيارة السباق ونماذج الـ CAD التجميعية الرئيسية",
      "الامتثال للوائح وقوانين الأمان الدولية وتقديم تقرير السلامة الهيكلية SES",
      "محاكاة الإجهادات الهيكلية (FEA) والديناميكا الهوائية (CFD) ومنع أي تداخلات ميكانيكية",
      "معايرة أنظمة التعليق والاتزان الديناميكي وتحليل بيانات التيليمتري على الحلبة"
    ],
    quote: "Every bolt, bracket, and millimeter of carbon fiber has a calculated purpose. We engineer for speed, structural rigidity, and uncompromising safety.",
    quote_ar: "كل مسمار وكل ملليمتر في هيكل السيارة مصمم لغرض حسابي دقيق. نحن نصمم للسرعة، والصلابة، والأمان التام."
  },
  managerialLeader: {
    id: "moaaz-elghamry",
    role: "Managerial Leader",
    name: "Moaaz Elghamry",
    photo: "https://res.cloudinary.com/dhoqtr0se/image/upload/v1792608072/velox_team_members/moaaz_elghamry.jpg",
    linkedin: "https://www.linkedin.com/in/moaaz-mohamed-elghamry-164a00303/?isSelfProfile=true",
    instagram: "https://www.instagram.com/moaaz_8amry?mdxt=MTIxdzJpcXVjYXhwbQ==",
    department: "Executive Management & Operations Division",
    department_ar: "قطاع الإدارة التشغيلية والتنظيمية",
    bio: "Directs organizational management, inter-departmental workflows, budget governance, and operational execution.",
    bio_ar: "يقود الإدارة التنظيمية للفريق، ومتابعة العمليات وسير العمل بين كافة القطاعات وحوكمة الميزانية.",
    responsibilities: [
      "Operational workflow coordination and inter-subsystem execution tracking",
      "Resource allocation, budget governance, and department milestones",
      "Institutional coordination, administrative planning, and internal logistics",
      "Cross-discipline team accountability and strategic project reviews"
    ],
    responsibilities_ar: [
      "التنسيق التنظيمي وسير العمل ومتابعة خطط التنفيذ بين كافة الأقسام",
      "حوكمة الميزانية وتوزيع الموارد ومتابعة المواعيد والمراحل النهائية",
      "التنسيق المؤسسي والتخطيط الإداري واللوجستيات الداخلية للفريق",
      "متابعة التزام الأقسام والمراجعات الاستراتيجية الدورية للمشاريع"
    ],
    quote: "Operational excellence and razor-sharp discipline turn ambitious ideas into podium results.",
    quote_ar: "الانضباط التنظيمي والعمل الجماعي المحكم هما السبيل لتحويل الأفكار الطموحة إلى إنجازات حقيقية على الحلبة."
  },
  technicalDepartments: [
    {
      id: "body-chassis",
      name: "Body & Chassis",
      name_ar: "الهيكل والشاسيه",
      leader: {
        id: "ahmed-ehab",
        name: "Ahmed Ehab",
        role: "Body & Chassis Leader",
        role_ar: "قائد قسم الهيكل والشاسيه",
        photo: "",
        department: "Body & Chassis Division",
        department_ar: "قسم الهيكل الخارجي والشاسيه",
        bio: "Commands aerodynamic packaging, CFD downforce optimization, and 4130 tubular steel spaceframe chassis fabrication.",
        bio_ar: "يقود الحزم الديناميكية الهوائية، ومحاكاة قوى التماسك بالـ CFD، وتصنيع شاسيه الهيكل الأنبوبي ومطابقة لوائح الأمان الدولية.",
        responsibilities: [
          "4130 chromoly tubular spaceframe chassis structural packaging and welding compliance",
          "SES structural equivalency spreadsheet validation and cockpit impact attenuation",
          "Aerodynamics CFD downforce mapping, body panel fabrication, and composite vacuum bagging",
          "Torsional stiffness testing and driver ergonomics packaging envelope"
        ],
        responsibilities_ar: [
          "التصميم الهيكلي وتصنيع ولحام شاسيه الكرومولي 4130 ومطابقة لوائح الأمان الدولية",
          "تقديم تقرير الأمان الهيكلي SES وممتصات الصدمات الأمامية لصندوق القيادة",
          "محاكاة قوى التماسك والانسيابية الهوائية بالـ CFD وتصنيع ألياف الكربون للهيكل الخارجي",
          "اختبارات الصلابة الالتوائية للشاسيه وأبعاد راحة السائق داخل قمرة القيادة"
        ],
        quote: "Rigidity, aerodynamics, and lightweight engineering are the foundation upon which every fast lap is built.",
        quote_ar: "الصلابة الهيكلية، والديناميكا الهوائية، وتقليل الوزن هم الأساس الذي يُبنى عليه كل زمن قياسي على الحلبة."
      },
      subteams: ["Body", "Chassis"],
      description: "Aerodynamic packaging, CFD downforce optimization, and 4130 tubular steel spaceframe chassis fabrication.",
      description_ar: "الحزم الديناميكية الهوائية، محاكاة قوى التماسك بالـ CFD، وتصنيع شاسيه الهيكل الأنبوبي من سبيكة 4130 كرومولي."
    },
    {
      id: "vehicle-dynamics",
      name: "Vehicle Dynamics",
      leader: null,
      subteams: ["Suspension", "Steering", "Brakes"],
      description: "Double-wishbone kinematics, spring-damper tuning, Ackermann steering geometry, and dual-master brake hydraulic balance.",
      description_ar: "كينماتيكا التعليق المزدوج، ضبط المخمدات والزنبركات، هندسة توجيه أكرمان، وتوازن هيدروليكا الفرامل المزدوجة."
    },
    {
      id: "powertrain",
      name: "Powertrain",
      leader: {
        id: "moaaz-elghamry-pt",
        name: "Moaaz Elghamry",
        role: "Powertrain Leader",
        photo: "https://res.cloudinary.com/dhoqtr0se/image/upload/v1792608072/velox_team_members/moaaz_elghamry.jpg",
        linkedin: "https://www.linkedin.com/in/moaaz-mohamed-elghamry-164a00303/?isSelfProfile=true",
        instagram: "https://www.instagram.com/moaaz_8amry?mdxt=MTIxdzJpcXVjYXhwbQ==",
        department: "Powertrain & Transmission Division",
        department_ar: "قسم أنظمة الدفع ونقل الحركة",
        bio: "Commands powertrain mounting, cooling thermal loops, torque transfer, chain drive reduction ratio optimization, and differential assembly.",
        bio_ar: "يشرف على تثبيت المحرك، دورات التبريد الحرارية، نقل العزم، تحسين نسب تخفيض سلاسل الحركة، وتجميع الترس التفاضلي.",
        responsibilities: [
          "Engine mounting geometry, vibration damping, and chain tensioner calibration",
          "Cooling loop thermodynamics, radiator shroud ducting, and water-pump flow",
          "Drivetrain differential setup, chain sprocket ratio tuning, and half-shaft packaging",
          "Torque delivery analysis and engine dyno calibration for sprint acceleration"
        ],
        responsibilities_ar: [
          "هندسة تثبيت المحرك وتخميد الاهتزازات ومعايرة شدادات السلاسل",
          "الديناميكا الحرارية لدورات التبريد ومسارات تدفق الهواء بالردياتير",
          "معايرة الترس التفاضلي ونسب التخفيض وتجميع أعمدة نقل الحركة",
          "تحليل توزيع العزم ومعايرة دايو المحرك لتحقيق أعلى تسارع على الحلبة"
        ],
        quote: "Power is nothing without efficient mechanical transfer. Every Nm of torque delivered to the asphalt matters.",
        quote_ar: "القوة لا تعني شيئاً بدون نقل ميكانيكي عالي الكفاءة. كل نيوتن-متر يُنقل إلى الأسفلت له فارق حاسم."
      },
      subteams: ["Motor", "Transmission"],
      description: "Powertrain mounting, cooling thermal loops, torque transfer, chain drive ratio optimization, and differential assembly.",
      description_ar: "تثبيت المحرك، دورات التبريد الحرارية، نقل العزم، تحسين نسب نقل الحركة، وتجميع الترس التفاضلي."
    },
    {
      id: "electrical",
      name: "Electrical",
      leader: {
        id: "ali-elgohary",
        name: "Ali Elgohary",
        role: "Team Leader of Electrical",
        photo: "",
        linkedin: "https://www.linkedin.com/in/alielgohary0",
        department: "Electrical Division",
        department_ar: "قسم الأنظمة الكهربائية والتحكم المدمج",
        bio: "Commands the electrical division, high-reliability motorsport wiring harness, telemetry data logging, low-voltage power distribution, and embedded control modules.",
        bio_ar: "يشرف على الأنظمة الكهربائية، ضفيرة الأسلاك المعتمدة للسباقات، أنظمة القياس والتحكم عن بعد، وتوزيع الطاقة والمتحكمات المدمجة.",
        responsibilities: [
          "Raychem motorsport wiring harness fabrication, strain relief, and IP67 weather sealing",
          "Low-voltage power management, fuse box layout, and safety shutdown circuit integration",
          "Embedded telemetry logging, sensor calibration, and pit wall live dashboard telemetry",
          "ECU integration, CAN-bus architecture, and driver steering wheel display interface"
        ],
        responsibilities_ar: [
          "تصنيع ضفائر أسلاك Raychem وعزلها وفق معايير مسابقات الفورميلا ستيودنت",
          "إدارة الجهد المنخفض، وتصميم علبة الصمامات، ودوائر الأمان وفصل الطوارئ",
          "أنظمة التليمتري ومعايرة الحساسات وبث البيانات الحية لمنصة الصيانة",
          "برمجة وتوصيل وحدات التحكم ECU وشبكة الـ CAN-bus وشاشة المقود للسائق"
        ],
        quote: "Reliability in electrical systems is the heartbeat of motorsport. Zero gremlins, maximum performance.",
        quote_ar: "الاعتمادية الكهربائية هي نبض سيارة السباق. لا مجال للأخطاء، فقط أداء فائق ومستمر."
      },
      subteams: ["Wiring & Harness", "Control & Embedded System"],
      description: "Motorsport Raychem wiring harness, low-voltage power distribution, ECU / embedded controllers, and pit wall wireless telemetry.",
      description_ar: "ضفيرة أسلاك السباقات Raychem، وتوزيع الطاقة ذات الجهد المنخفض، وأنظمة التحكم والمتحكمات المدمجة، والقياس اللاسلكي من منصة الصيانة."
    }
  ],
  nonTechnical: [
    {
      id: "media",
      name: "Media & PR",
      leader: {
        id: "mohamed-hassan",
        name: "Mohamed Hassan",
        role: "Media Lead",
        photo: "https://res.cloudinary.com/dhoqtr0se/image/upload/v1792608073/velox_team_members/mohamed_hassan.jpg",
        department: "Media, Public Relations & Brand Architecture",
        department_ar: "قسم الإعلام والعلاقات العامة والهوية البصرية",
        bio: "Architect of visual identity, cinematic build documentaries, motorsport photography, and official public relations broadcasting.",
        bio_ar: "يشرف على الهوية البصرية وإنتاج الأفلام الوثائقية لتصنيع السيارة والتصوير وإدارة المنصات الإعلامية.",
        responsibilities: [
          "Cinematic racecar build documentaries, motion graphics, and trackside media capture",
          "Brand style guide governance, social media campaigns, and international fan engagement",
          "Sponsorship pitch kits, high-resolution media brochures, and merchandising assets"
        ],
        responsibilities_ar: [
          "إنتاج الأفلام الوثائقية السينمائية والتصوير الاحترافي للسيارة والورشة",
          "إدارة وتطوير الهوية البصرية الموحدة وحملات منصات التواصل الاجتماعي",
          "تصميم ملفات الرعاية والعروض التقديمية الاحترافية للشركاء والمستثمرين"
        ],
        quote: "Collegiate motorsport is a story of grit, sleepless nights, and triumph. We capture that pulse and broadcast it to the world.",
        quote_ar: "رياضة المحركات الجامعية قصة إصرار وتحدٍ ونجاح. ومهمتنا نقل هذا النبض وهذا الشغف إلى العالم بأسره."
      },
      subteams: ["Photography & Video", "Social Media & Public Relations"],
      description: "Visual identity, photography, cinematic build documentaries, social media broadcasting, and press relations.",
      description_ar: "الهوية البصرية، التصوير، الأفلام الوثائقية لتصنيع السيارة، البث عبر وسائل التواصل، والعلاقات الصحفية."
    },
    {
      id: "business",
      name: "Business (Team Director)",
      leader: null,
      subteams: [
        "Pitch Presenters & Market Analysis",
        "Financial Modeling & Cost Analysis",
        "Cost & Manufacturing Specialist",
        "Corporate Relations & Sponsorship",
        "Media & Brand Specialist"
      ],
      description: "Static event presentation, Comprehensive Bill of Materials (CBOM), financial forecasting, and corporate partnerships.",
      description_ar: "عرض خطة الأعمال في المسابقة، جدول التكاليف والمواد (CBOM)، التنبؤات المالية، والشراكات المؤسسية والرعايات."
    }
  ]
};

/**
// In-memory live cloud store — strictly driven by live connection, never by stale cache
window._liveCloudAcceptedMembers = null;
window._isCloudSyncing = false;
window._isCloudConnected = false;
window._veloxRealtimeSubscribed = false;

/**
 * Generates dynamic team structure.
 * ALWAYS driven by the live database connection (window._liveCloudAcceptedMembers).
 * Completely eliminates stale cached phantom members.
 */
// Initialize live cloud members from local cache immediately on script load so there is zero flash of empty/stale tree
if (typeof window !== 'undefined' && !window._liveCloudAcceptedMembers) {
  try {
    const cachedLive = localStorage.getItem('velox_live_cloud_members');
    if (cachedLive) {
      window._liveCloudAcceptedMembers = JSON.parse(cachedLive);
    }
  } catch (e) {}
}

function getTeamPortalDb() {
  if (typeof window !== 'undefined' && typeof window.getPortalDb === 'function') {
    try {
      const res = window.getPortalDb();
      if (res) return res;
    } catch (e) {}
  }
  if (typeof localStorage === 'undefined') return null;
  const raw = localStorage.getItem('velox_portal_db_v8');
  if (!raw) return null;
  try { return JSON.parse(raw); } catch (e) { return null; }
}

// Strict validator to ensure only authentic images are ever loaded in <img> tags
function isSafeImageAvatar(url) {
  if (!url || typeof url !== 'string') return false;
  const u = url.trim();
  if (!u) return false;
  if (u.startsWith('data:image/')) return true;
  if (u.startsWith('photos/') || u.startsWith('/photos/')) return true;
  if (!u.startsWith('http://') && !u.startsWith('https://')) return false;

  const lower = u.toLowerCase();
  // Filter out any social profiles, documents, or non-image web pages
  if (
    lower.includes('linkedin.com') ||
    lower.includes('docs.google.com') ||
    lower.includes('facebook.com') ||
    lower.includes('instagram.com') ||
    lower.includes('twitter.com') ||
    lower.includes('x.com') ||
    lower.includes('youtube.com') ||
    (lower.includes('github.com/') && !lower.includes('avatars.githubusercontent.com'))
  ) {
    return false;
  }
  return true;
}
if (typeof window !== 'undefined') window.isSafeImageAvatar = isSafeImageAvatar;

// Universal avatar resolution helper across personas, membersRoster, and accounts
function findAvatarForPerson(id, name) {
  if (!id && !name) return '';
  const normId = (id || '').trim().toLowerCase();
  const normName = (name || '').trim().toLowerCase();

  // 0. Check live cloud accepted members
  if (typeof window !== 'undefined' && Array.isArray(window._liveCloudAcceptedMembers)) {
    const foundCloud = window._liveCloudAcceptedMembers.find(m => {
      if (!m) return false;
      const mId = (m.id || '').trim().toLowerCase();
      const mName = (m.name || '').trim().toLowerCase();
      return (normId && mId === normId) || (normName && mName === normName);
    });
    if (foundCloud) {
      const cand = foundCloud.photo || foundCloud.avatar;
      if (isSafeImageAvatar(cand)) return cand;
    }
  }

  const portalDb = getTeamPortalDb();

  // 1. Check portalDb.personas
  if (portalDb && portalDb.personas) {
    for (const k in portalDb.personas) {
      const p = portalDb.personas[k];
      if (!p) continue;
      const pId = (p.id || '').trim().toLowerCase();
      const pName = (p.name || '').trim().toLowerCase();
      if ((normId && pId === normId) || (normName && pName === normName)) {
        const cand = p.avatar || p.photo;
        if (isSafeImageAvatar(cand)) return cand;
      }
    }
  }

  // 2. Check portalDb.membersRoster
  if (portalDb && Array.isArray(portalDb.membersRoster)) {
    const found = portalDb.membersRoster.find(m => {
      if (!m) return false;
      const mId = (m.id || '').trim().toLowerCase();
      const mName = (m.name || '').trim().toLowerCase();
      return (normId && mId === normId) || (normName && mName === normName);
    });
    if (found) {
      const cand = found.avatar || found.photo;
      if (isSafeImageAvatar(cand)) return cand;
    }
  }

  // 3. Check portalDb.accounts
  if (portalDb && Array.isArray(portalDb.accounts)) {
    const foundAcc = portalDb.accounts.find(a => {
      if (!a) return false;
      const aName = (a.name || '').trim().toLowerCase();
      return normName && aName === normName;
    });
    if (foundAcc) {
      const cand = foundAcc.avatar || foundAcc.photo;
      if (isSafeImageAvatar(cand)) return cand;
    }
  }

  return '';
}
if (typeof window !== 'undefined') window.findAvatarForPerson = findAvatarForPerson;

function getDynamicTeamData() {
  const data = JSON.parse(JSON.stringify(VELOX_TEAM));
  const portalDb = getTeamPortalDb();

  // If live cloud members haven't been fetched yet, trigger cloud sync immediately
  if (typeof window !== 'undefined' && !Array.isArray(window._liveCloudAcceptedMembers)) {
    if (typeof syncCloudAcceptedMembers === 'function' && !window._isCloudSyncing) {
      setTimeout(() => { syncCloudAcceptedMembers(); }, 1);
    }
  }

  // 1. Sync persona & roster avatar updates to static executives and leadership
  if (data.executives && Array.isArray(data.executives)) {
    data.executives.forEach(exec => {
      const av = findAvatarForPerson(exec.id, exec.name);
      if (av) exec.photo = av;
    });
  }

  if (data.technicalLeader) {
    const av = findAvatarForPerson(data.technicalLeader.id, data.technicalLeader.name);
    if (av) data.technicalLeader.photo = av;
  }

  if (data.managerialLeader) {
    const av = findAvatarForPerson(data.managerialLeader.id, data.managerialLeader.name);
    if (av) data.managerialLeader.photo = av;
  }

  // Sync avatars to all department leaders (Electrical, Powertrain, Media, etc.)
  const allDepts = [...data.technicalDepartments, ...data.nonTechnical];
  allDepts.forEach(dept => {
    if (dept.leader) {
      const av = findAvatarForPerson(dept.leader.id, dept.leader.name);
      if (av) dept.leader.photo = av;
    }
  });

  // 2. Dynamic Crew & Role Synchronization:
  let activeMembers = [];
  const rosterMap = new Map();

  // Load from portalDb.membersRoster first (includes manual admin edits, multi-roles, secondary subteams)
  if (portalDb && Array.isArray(portalDb.membersRoster)) {
    portalDb.membersRoster.forEach(m => {
      if (m && m.name && m.status !== 'Suspended' && m.status !== 'Removed' && m.id !== 'admin-director') {
        rosterMap.set((m.name || '').trim().toLowerCase(), m);
      }
    });
  }

  // Merge live cloud accepted members
  if (Array.isArray(window._liveCloudAcceptedMembers)) {
    window._liveCloudAcceptedMembers.forEach(cm => {
      const n = (cm.name || '').trim().toLowerCase();
      if (!rosterMap.has(n)) {
        rosterMap.set(n, cm);
      } else {
        const local = rosterMap.get(n);
        // If not manually edited in portal, merge cloud updates
        if (!local.manualOverride) {
          rosterMap.set(n, { ...local, ...cm });
        }
      }
    });
  }

  activeMembers = Array.from(rosterMap.values());

  // Helper to add member to subteam
  function addMemberToSubteam(targetMember, deptName, subName, roleTitle) {
    if (!deptName) return;
    const cleanDept = deptName.toLowerCase();
    const targetDept = allDepts.find(d => {
      const dName = d.name.toLowerCase();
      return dName === cleanDept || cleanDept.includes(dName) || dName.includes(cleanDept);
    });
    if (!targetDept) return;

    let matchedSub = null;
    if (subName && subName !== '__DEPT_LEAD__' && subName !== 'All Subteams') {
      const cleanSub = subName.toLowerCase();
      matchedSub = targetDept.subteams.find(s => s.toLowerCase() === cleanSub || cleanSub.includes(s.toLowerCase()));
    }
    if (!matchedSub && targetDept.subteams.length > 0) {
      matchedSub = targetDept.subteams[0];
    }
    if (!matchedSub) return;

    if (!targetDept.subteamCrew) targetDept.subteamCrew = {};
    if (!targetDept.subteamCrew[matchedSub]) targetDept.subteamCrew[matchedSub] = [];

    const mNorm = (targetMember.name || '').trim().toLowerCase();
    const alreadyExists = targetDept.subteamCrew[matchedSub].some(existing => 
      (existing.id && targetMember.id && existing.id === targetMember.id) ||
      (existing.name && existing.name.trim().toLowerCase() === mNorm)
    );
    if (alreadyExists) return;

    const rLower = (roleTitle || targetMember.role || '').toLowerCase();
    const isLead = rLower.includes('subteam leader') || rLower === 'subteam leader' || targetMember.roleType === 'subteam_lead';
    const resolvedPhoto = targetMember.photo || targetMember.avatar || findAvatarForPerson(targetMember.id, targetMember.name) || '';

    targetDept.subteamCrew[matchedSub].push({
      id: targetMember.id || ('mem-' + mNorm.replace(/[^a-z0-9]/g, '-')),
      name: targetMember.name,
      role: roleTitle || targetMember.role || 'Team Member',
      isLead: isLead,
      photo: resolvedPhoto,
      avatar: resolvedPhoto,
      subteam: matchedSub,
      department: targetDept.name,
      bio: `Formula Student engineering crew member in ${targetDept.name} — ${matchedSub} at Velox Racing.`,
      responsibilities: [
        `Subsystem CAD modeling, simulation, and manufacturing for ${matchedSub}`,
        `Formula Student engineering documentation and validation compliance`,
        `Collaboration with department leaders and trackside race engineers`
      ],
      quote: "Every detail matters. We engineer for speed, reliability, and precision."
    });
  }

  // Helper to assign department leader
  function assignDeptLeader(targetMember, deptId, roleTitle) {
    const dept = allDepts.find(d => d.id === deptId || d.name.toLowerCase().includes(deptId));
    if (!dept) return;
    const resolvedPhoto = targetMember.photo || targetMember.avatar || findAvatarForPerson(targetMember.id, targetMember.name) || (dept.leader ? dept.leader.photo : '');
    const oldLead = dept.leader || {};
    dept.leader = {
      ...oldLead,
      id: targetMember.id || oldLead.id || ('lead-' + deptId),
      name: targetMember.name,
      role: roleTitle,
      role_ar: oldLead.role_ar || (roleTitle === 'Body & Chassis Leader' ? 'قائد قسم الهيكل والشاسيه' : roleTitle),
      photo: resolvedPhoto,
      avatar: resolvedPhoto,
      department: dept.name,
      department_ar: dept.name_ar || dept.name,
      bio: oldLead.bio || `Appointed Department Leader of ${dept.name} Division at Velox Racing Formula Student Team.`,
      bio_ar: oldLead.bio_ar || '',
      responsibilities: oldLead.responsibilities || [
        `Executive engineering coordination and delivery milestones for ${dept.name}`,
        `Direct technical supervision over ${dept.subteams.join(', ')} subteams`,
        `Rules compliance and technical inspection preparation for Formula Student UK`
      ],
      responsibilities_ar: oldLead.responsibilities_ar || [],
      quote: oldLead.quote || "Engineering precision, relentless testing, and disciplined teamwork drive our car to the podium.",
      quote_ar: oldLead.quote_ar || ''
    };
  }

  // 3. Process every active member into both primary and secondary positions
  activeMembers.forEach(member => {
    if (!member || !member.name) return;

    const roles = [];
    if (member.primaryRole) {
      roles.push({ role: member.primaryRole, dept: member.dept || member.department, subteam: member.subteam });
    }
    if (member.secondaryRole) {
      roles.push({ role: member.secondaryRole, dept: member.secondaryDept || member.dept || member.department, subteam: member.secondarySubteam || member.subteam });
    }
    
    // Fallback if primaryRole/secondaryRole not explicitly separated
    if (roles.length === 0) {
      if (member.role && member.role.includes(' & ')) {
        const parts = member.role.split(' & ');
        roles.push({ role: parts[0].trim(), dept: member.dept || member.department, subteam: member.subteam });
        roles.push({ role: parts[1].trim(), dept: member.secondaryDept || member.dept || member.department, subteam: member.secondarySubteam });
      } else {
        roles.push({ role: member.role || 'Team Member', dept: member.dept || member.department, subteam: member.subteam });
      }
    }

    roles.forEach(r => {
      const rLower = (r.role || '').toLowerCase();

      // Check if this role is an Executive Role
      if (rLower === 'team leader') {
        const tl = data.executives.find(e => e.role === 'Team Leader');
        if (tl) { tl.name = member.name; tl.photo = member.photo || member.avatar || tl.photo; }
      } else if (rLower === 'vice team leader') {
        const vtl = data.executives.find(e => e.role === 'Vice Team Leader');
        if (vtl) { vtl.name = member.name; vtl.photo = member.photo || member.avatar || vtl.photo; }
      } else if (rLower === 'technical leader') {
        if (data.technicalLeader) { data.technicalLeader.name = member.name; data.technicalLeader.photo = member.photo || member.avatar || data.technicalLeader.photo; }
      } else if (rLower === 'managerial leader') {
        if (data.managerialLeader) { data.managerialLeader.name = member.name; data.managerialLeader.photo = member.photo || member.avatar || data.managerialLeader.photo; }
      }
      // Check if this role is a Department Leader Role
      else if (rLower.includes('body & chassis leader') || rLower.includes('body and chassis leader') || rLower.includes('chassis leader') || (member.name && member.name.toLowerCase().includes('ahmed ehab'))) {
        assignDeptLeader(member, 'body-chassis', 'Body & Chassis Leader');
      } else if (rLower.includes('vehicle dynamics leader') || rLower === 'vehicle dynamics leader') {
        assignDeptLeader(member, 'vehicle-dynamics', 'Vehicle Dynamics Leader');
      } else if (rLower.includes('powertrain leader') || rLower === 'powertrain leader') {
        assignDeptLeader(member, 'powertrain', 'Powertrain Leader');
      } else if (rLower.includes('electrical leader') || rLower.includes('team leader of electrical')) {
        assignDeptLeader(member, 'electrical', 'Team Leader of Electrical');
      } else if (rLower.includes('media & pr lead') || rLower.includes('media leader')) {
        assignDeptLeader(member, 'media-pr', 'Media & PR Lead');
      } else if (rLower.includes('human resources lead') || rLower.includes('hr lead')) {
        assignDeptLeader(member, 'human-resources', 'Human Resources Lead');
      } else if (rLower.includes('business & sponsorship lead') || rLower.includes('business lead')) {
        assignDeptLeader(member, 'business-sponsorship', 'Business & Sponsorship Lead');
      }
      // Otherwise, it is a Subteam Leader or Team Member in a specific subteam
      else {
        addMemberToSubteam(member, r.dept, r.subteam, r.role);
      }
    });
  });

  return data;
}

/**
 * Helper to look up a member by id across all team tiers and dynamic appointees
 */
function getMemberById(id) {
  if (!id) return null;
  const data = (typeof getDynamicTeamData === 'function') ? getDynamicTeamData() : VELOX_TEAM;
  if (data.academicAdvisor && (data.academicAdvisor.id === id || data.academicAdvisor.name === id)) {
    return data.academicAdvisor;
  }
  if (data.technicalLeader && (data.technicalLeader.id === id || data.technicalLeader.name === id)) {
    return data.technicalLeader;
  }
  if (data.managerialLeader && (data.managerialLeader.id === id || data.managerialLeader.name === id)) {
    return data.managerialLeader;
  }
  const exec = data.executives.find(m => m.id === id || m.name === id);
  if (exec) return exec;
  for (const dept of data.technicalDepartments) {
    if (dept.leader && (dept.leader.id === id || dept.leader.name === id)) return dept.leader;
    if (dept.subteamCrew) {
      for (const sub in dept.subteamCrew) {
        const found = dept.subteamCrew[sub].find(m => m.id === id || m.name === id);
        if (found) return found;
      }
    }
  }
  for (const dept of data.nonTechnical) {
    if (dept.leader && (dept.leader.id === id || dept.leader.name === id)) return dept.leader;
    if (dept.subteamCrew) {
      for (const sub in dept.subteamCrew) {
        const found = dept.subteamCrew[sub].find(m => m.id === id || m.name === id);
        if (found) return found;
      }
    }
  }
  return null;
}

/**
 * Utility to parse department, subteam, and branch from a choice string like:
 * "Powertrain — Motor" or "Vehicle Dynamics — Suspension"
 */
function parseDeptAndSubteam(rawChoice) {
  if (!rawChoice) return { dept: 'Body & Chassis', subteam: 'Body', branch: 'Technical' };
  let dept = '';
  let subteam = '';
  if (rawChoice.includes('—')) {
    const parts = rawChoice.split('—');
    dept = parts[0].trim();
    subteam = parts.slice(1).join('—').trim();
  } else if (rawChoice.includes(' - ')) {
    const parts = rawChoice.split(' - ');
    dept = parts[0].trim();
    subteam = parts.slice(1).join(' - ').trim();
  } else {
    dept = rawChoice.trim();
    subteam = '';
  }

  const techDepts = ['body', 'chassis', 'vehicle', 'dynamics', 'suspension', 'steering', 'brakes', 'powertrain', 'motor', 'engine', 'transmission', 'electrical', 'wiring', 'embedded'];
  const isTech = techDepts.some(t => dept.toLowerCase().includes(t) || subteam.toLowerCase().includes(t));
  const branch = isTech ? 'Technical' : 'Non-Technical';
  return { dept, subteam, branch };
}

/**
 * Fetches accepted applicants directly from Supabase and merges them into
/**
 * Real-Time Cloud Synchronization
 * Connects directly to Supabase to fetch only currently accepted applications.
 * Updates in-memory team structure, attaches realtime websocket listeners,
 * and purges stale cached entries from localStorage.
 */
async function syncCloudAcceptedMembers() {
  if (typeof window === 'undefined') return;
  const cfg = window.VELOX_CONFIG || {};
  if (!cfg.url || !cfg.anonKey || cfg.url.includes('your-project-id') || !window.supabase) return;

  if (window._isCloudSyncing) return;
  window._isCloudSyncing = true;

  try {
    const client = window.supabase.createClient(cfg.url, cfg.anonKey);
    const { data, error } = await client
      .from('applications')
      .select('id, full_name, email, subteam_first, subteam_second, status, hr_notes, why_join, portfolio_url, created_at')
      .eq('status', 'Accepted');

    if (error) {
      console.warn('[VELOX Live Connection] Query notice:', error);
      window._isCloudSyncing = false;
      return;
    }

    // Also fetch cloud roster overrides from system-settings
    let cloudRosterOverrides = {};
    try {
      const { data: setRes } = await client
        .from('applications')
        .select('hr_notes')
        .eq('email', 'system-settings@velox.internal');
      if (Array.isArray(setRes) && setRes.length > 0 && setRes[0].hr_notes) {
        const sObj = JSON.parse(setRes[0].hr_notes);
        if (sObj && sObj.roster_overrides) {
          cloudRosterOverrides = sObj.roster_overrides;
        }
      }
    } catch (e) {
      console.warn('[VELOX Cloud] Note fetching overrides:', e);
    }

    const liveList = [];
    const seenNames = new Set();
    const seenIds = new Set();

    if (Array.isArray(data)) {
      data.forEach(app => {
        if (!app || !app.full_name) return;
        if (app.email === 'system-settings@velox.internal' || app.full_name.includes('SYSTEM_SETTINGS')) return;
        const cleanName = app.full_name.trim();
        const normName = cleanName.toLowerCase();
        if (!normName || seenNames.has(normName)) return;

        // Choice 1 vs Choice 2 evaluation
        let targetChoice = app.subteam_first;
        const notes = `${app.hr_notes || ''} ${app.why_join || ''}`;
        if (app.accepted_choice === '2' || app.accepted_choice === 2 || notes.includes('[Accepted: Option 2') || notes.includes('Option 2: 2nd Choice') || notes.includes('Accepted: Option 2')) {
          targetChoice = app.subteam_second || app.subteam_first;
        }

        const parsed = parseDeptAndSubteam(targetChoice);
        const memberId = 'mem-' + normName.replace(/[^a-z0-9]/g, '-');

        let assignedRole = 'Team Member';
        let assignedRoleType = 'member';

        const noteBlob = `${app.hr_notes || ''} ${app.subteam_second || ''} ${app.why_join || ''}`;
        const roleMatch = noteBlob.match(/Role:\s*([A-Za-z0-9&/ ]+?)(?:\s*\(|\s*\.|\s*\||\s*•|\s*,|\s*\n|$)/i);
        if (roleMatch && roleMatch[1]) {
          const matchedR = roleMatch[1].trim();
          if (matchedR.length > 0 && matchedR.length < 50 && !matchedR.toLowerCase().includes('authorized by') && !matchedR.toLowerCase().includes('enlisted on')) {
            assignedRole = matchedR;
          }
        }

        if (normName === 'ali elgohary') {
          parsed.dept = 'Electrical';
          parsed.subteam = '';
          assignedRole = 'Team Leader of Electrical';
          assignedRoleType = 'dept_lead';
        }

        if (normName === 'ahmed ehab' || normName.includes('ahmed ehab')) {
          parsed.dept = 'Body & Chassis';
          parsed.subteam = '';
          assignedRole = 'Body & Chassis Leader';
          assignedRoleType = 'dept_lead';
        }

        if (!assignedRoleType) {
          const lowerR = assignedRole.toLowerCase();
          if (lowerR.includes('department leader') || lowerR.includes('electrical leader') || lowerR.includes('powertrain leader') || lowerR.includes('body & chassis leader') || (lowerR.includes('leader') && !parsed.subteam)) {
            assignedRoleType = 'dept_lead';
          } else if (lowerR.includes('leader') || lowerR.includes('lead')) {
            assignedRoleType = 'subteam_lead';
          } else {
            assignedRoleType = 'member';
          }
        }

        let avatar = '';
        if (app.portfolio_url) {
          const u = app.portfolio_url.trim();
          if (isSafeImageAvatar(u)) {
            avatar = u;
          } else if (u.includes('drive.google.com')) {
            const driveMatch = u.match(/\/d\/([a-zA-Z0-9_-]+)/) || u.match(/id=([a-zA-Z0-9_-]+)/);
            if (driveMatch && driveMatch[1]) {
              avatar = `https://drive.google.com/thumbnail?id=${driveMatch[1]}&sz=w400`;
            }
          }
        }

        // Apply cloud roster override if available
        const ov = cloudRosterOverrides[memberId] || Object.values(cloudRosterOverrides).find(o => o.name && o.name.toLowerCase() === normName);
        if (ov) {
          if (ov.role) assignedRole = ov.role;
          if (ov.roleType) assignedRoleType = ov.roleType;
          if (ov.dept) parsed.dept = ov.dept;
          if (ov.subteam !== undefined) parsed.subteam = ov.subteam;
          if (ov.branch) parsed.branch = ov.branch;
          if (ov.avatar && isSafeImageAvatar(ov.avatar)) avatar = ov.avatar;
        }

        if (!avatar || !isSafeImageAvatar(avatar)) {
          avatar = '';
          if (typeof findAvatarForPerson === 'function') {
            avatar = findAvatarForPerson(memberId, cleanName);
          } else if (typeof window !== 'undefined' && typeof window.findAvatarForPerson === 'function') {
            avatar = window.findAvatarForPerson(memberId, cleanName);
          }
        }
        if (!isSafeImageAvatar(avatar)) {
          avatar = '';
        }

        seenNames.add(normName);
        seenIds.add(memberId);

        liveList.push({
          id: memberId,
          name: cleanName,
          role: assignedRole,
          roleType: assignedRoleType,
          branch: parsed.branch,
          department: parsed.dept,
          subteam: parsed.subteam,
          avatar: avatar,
          photo: avatar,
          email: app.email || ''
        });
      });
    }

    // Ensure any extra members from cloudRosterOverrides are included
    Object.values(cloudRosterOverrides).forEach(ov => {
      if (!ov || !ov.name || ov.deleted) return;
      const nName = ov.name.trim().toLowerCase();
      if (!seenNames.has(nName)) {
        seenNames.add(nName);
        liveList.push({
          id: ov.id || ('mem-' + nName.replace(/[^a-z0-9]/g, '-')),
          name: ov.name,
          role: ov.role || 'Team Member',
          roleType: ov.roleType || 'member',
          branch: ov.branch || 'Technical',
          department: ov.dept || 'General',
          subteam: ov.subteam || '',
          avatar: ov.avatar || '',
          photo: ov.avatar || '',
          email: ov.email || ''
        });
      }
    });

    // Guarantee Ahmed Ehab is permanently in liveList as Body & Chassis Leader
    const ehabEntry = liveList.find(m => m.name && m.name.toLowerCase().includes('ahmed ehab'));
    if (ehabEntry) {
      ehabEntry.role = 'Body & Chassis Leader';
      ehabEntry.roleType = 'dept_lead';
      ehabEntry.department = 'Body & Chassis';
      ehabEntry.subteam = '';
    } else {
      liveList.push({
        id: 'ahmed-ehab',
        name: 'Ahmed Ehab',
        role: 'Body & Chassis Leader',
        roleType: 'dept_lead',
        branch: 'Technical',
        department: 'Body & Chassis',
        subteam: '',
        avatar: '',
        photo: '',
        email: 'ahmedehababdelsattar@gmail.com'
      });
    }

    // Assign live in-memory list (Source of Truth)
    window._liveCloudAcceptedMembers = liveList;
    window._isCloudConnected = true;

    // Cache live list to localStorage so the org chart paints immediately on any visit
    try {
      localStorage.setItem('velox_live_cloud_members', JSON.stringify(liveList));
    } catch (e) {}

    // Prune old removed members from localStorage so stale cached ghosts are deleted
    try {
      const dbRaw = localStorage.getItem('velox_portal_db_v8');
      if (dbRaw) {
        const db = JSON.parse(dbRaw);
        if (db && db.membersRoster) {
          const staticLeadIds = new Set(['admin-director', 'fatima-salman', 'karim-shaprawy', 'mohamed-romy', 'moaaz-elghamry', 'ahmed-ehab', 'mohamed-hassan', 'ali-elgohary']);
          db.membersRoster = db.membersRoster.filter(m => staticLeadIds.has(m.id) || m.manualOverride || seenNames.has((m.name || '').trim().toLowerCase()));
          localStorage.setItem('velox_portal_db_v8', JSON.stringify(db));
        }
      }
    } catch (e) {}

    // Re-render UI with live connection data
    if (typeof window.renderOrgChart === 'function') {
      window.renderOrgChart();
    }

    // Update connection status chip if present in UI
    const connEl = document.getElementById('liveSyncStatus');
    if (connEl) {
      connEl.classList.remove('offline', 'syncing');
      connEl.classList.add('connected');
      const isAr = (localStorage.getItem('velox_lang') || 'en') === 'ar';
      connEl.innerHTML = `<span class="live-dot"></span> <span>${isAr ? 'مُحدّث بالاتصال المباشر' : 'Live Connected'} (${liveList.length})</span>`;
    }

    // Attach Realtime listener for zero-delay live updates across all clients
    if (client.channel && !window._veloxRealtimeSubscribed) {
      window._veloxRealtimeSubscribed = true;
      client.channel('realtime_live_team_sync')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'applications' }, (payload) => {
          console.log('[VELOX Live Connection] Realtime DB change received:', payload.eventType);
          window._isCloudSyncing = false;
          syncCloudAcceptedMembers();
        })
        .subscribe();
    }
  } catch (err) {
    console.warn('[VELOX Live Connection] Sync notice:', err);
  } finally {
    window._isCloudSyncing = false;
  }
}

// Auto-trigger live connection sync immediately upon team.js evaluation
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      syncCloudAcceptedMembers();
    });
  } else {
    setTimeout(() => { syncCloudAcceptedMembers(); }, 1);
  }
}

/**
 * Returns a flat array of all sub-team names for the application dropdowns
 */
function getSubteamsList() {
  const list = [];
  VELOX_TEAM.technicalDepartments.forEach(dept => {
    dept.subteams.forEach(sub => {
      list.push(`${dept.name} — ${sub}`);
    });
  });
  VELOX_TEAM.nonTechnical.forEach(dept => {
    dept.subteams.forEach(sub => {
      list.push(`${dept.name} — ${sub}`);
    });
  });
  return list;
}

if (typeof window !== "undefined") {
  window.VELOX_TEAM = VELOX_TEAM;
  window.getDynamicTeamData = getDynamicTeamData;
  window.getSubteamsList = getSubteamsList;
  window.getMemberById = getMemberById;
  window.parseDeptAndSubteam = parseDeptAndSubteam;
  window.syncCloudAcceptedMembers = syncCloudAcceptedMembers;
  window.findAvatarForPerson = findAvatarForPerson;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { VELOX_TEAM, getDynamicTeamData, getSubteamsList, getMemberById, parseDeptAndSubteam, syncCloudAcceptedMembers, findAvatarForPerson };
}
