/**
 * VELOX Racing Team Structure Data
 * Zagazig National University — Formula Student
 * Single editable source of truth for the Org Chart (/team) and Application Form (/join).
 */

const VELOX_TEAM = {
  instagramUrl: "https://www.instagram.com/velox_racing_znu?srtk=MWl2azlianJlZ3J3bg==",
  linkedinUrl: "https://www.linkedin.com/company/velox-racing-team/",
  executives: [
    {
      id: "fatima-salman",
      role: "Team Leader",
      name: "Fatima Salman",
      photo: "photos/Fatima Salman.jpeg",
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
      photo: "photos/Karim Shaprawy.jpeg",
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
    photo: "photos/Mohamed Romy.jpeg",
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
    photo: "photos/Moaaz Elghamry.jpeg",
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
      leader: null,
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
        photo: "photos/Moaaz Elghamry.jpeg",
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
      leader: null,
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
        photo: "photos/Mohamed Hassan.jpeg",
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
 * Helper to look up a member by id across all team tiers
 */
function getMemberById(id) {
  if (!id) return null;
  if (VELOX_TEAM.technicalLeader && (VELOX_TEAM.technicalLeader.id === id || VELOX_TEAM.technicalLeader.name === id)) {
    return VELOX_TEAM.technicalLeader;
  }
  if (VELOX_TEAM.managerialLeader && (VELOX_TEAM.managerialLeader.id === id || VELOX_TEAM.managerialLeader.name === id)) {
    return VELOX_TEAM.managerialLeader;
  }
  const exec = VELOX_TEAM.executives.find(m => m.id === id || m.name === id);
  if (exec) return exec;
  for (const dept of VELOX_TEAM.technicalDepartments) {
    if (dept.leader && (dept.leader.id === id || dept.leader.name === id)) return dept.leader;
  }
  for (const dept of VELOX_TEAM.nonTechnical) {
    if (dept.leader && (dept.leader.id === id || dept.leader.name === id)) return dept.leader;
  }
  return null;
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
  window.getSubteamsList = getSubteamsList;
  window.getMemberById = getMemberById;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { VELOX_TEAM, getSubteamsList, getMemberById };
}
