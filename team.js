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
      photo: "",
      department: "Executive Management & Institutional Governance",
      department_ar: "الإدارة التنفيذية والحوكمة المؤسسية",
      bio: "Leads the overall strategic vision and institutional governance of VELOX Racing. Spearheads university administration relations, international competition entry protocols, cross-discipline milestone synergy, and external representation for Formula Student at Silverstone Circuit.",
      bio_ar: "تقود الرؤية الاستراتيجية والحوكمة التنفيذية لفريق فيلوكس. تدير التنسيق المؤسسي مع إدارة الجامعة وكلية الهندسة، وإجراءات التسجيل في المسابقات الدولية، والتكامل الإداري بين كافة القطاعات لتمثيل مصر والجامعة في حلبة سيلفرستون.",
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
      bio: "Drives the operational heartbeat of VELOX Racing. Orchestrates inter-subsystem engineering sprints, workshop manufacturing logistics, static event business presentation readiness, and high-impact corporate sponsorship alliances.",
      bio_ar: "يدير الشريان التشغيلي اليومي لفريق فيلوكس. ينسق مسارات العمل الهندسية بين الأقسام، وجداول التصنيع داخل الورش، وتجهيز عروض إدارة الأعمال والمسابقات الثابتة، وبناء الشراكات الاستراتيجية مع الرعاة.",
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
    bio: "Chief engineer commanding the technical architecture of Chassis VX-01. Leads overall vehicle design packaging, FEA/CFD multi-physics simulation validation, Formula Student technical regulations compliance, and seamless cross-subsystem mechanical integration.",
    bio_ar: "المهندس الفني الرئيسي المشرف على البنية المعمارية لشاسيه VX-01. يقود التصميم الهيكلي للمركبة، والتحقق من حسابات الإجهادات ومحاكاة الانسيابية (FEA & CFD)، والامتثال للوائح الأمان الدولية، والتكامل الميكانيكي الدقيق بين جميع الأنظمة.",
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
        id: "moaaz-elghamry",
        name: "Moaaz Elghamry",
        role: "Powertrain Leader",
        photo: "photos/Moaaz Elghamry.jpeg",
        linkedin: "https://www.linkedin.com/in/moaaz-mohamed-elghamry-164a00303/?isSelfProfile=true",
        instagram: "https://www.instagram.com/moaaz_8amry?mdxt=MTIxdzJpcXVjYXhwbQ==",
        department: "Powertrain & Thermal Systems Division",
        department_ar: "قسم منظومة الدفع والأنظمة الحرارية",
        bio: "Leading the heartbeat and propulsion of the VELOX racecar. Directs powertrain structural mounting architecture, thermodynamic CFD cooling loops, custom drivetrain chain reduction, and differential torque transmission to maximize acceleration and thermal reliability.",
        bio_ar: "يقود قلب وقوة الدفع في سيارة سباق فيلوكس. يشرف على هندسة تثبيت منظومة الحركة، ودورات التبريد الديناميكية الحرارية، ونظام نقل الحركة والجنزير عالي الكفاءة، ومعايرة الترس التفاضلي لضمان أقصى تسارع واعتمادية على الحلبة.",
        responsibilities: [
          "Powertrain structural mounting, torsional stiffness integration, and mass balancing",
          "Thermodynamic CFD cooling circuit design and heat exchanger optimization",
          "Final drive chain reduction calculations, sprocket sizing, and torque transfer",
          "Limited-slip differential calibration, throttle response tuning, and bench dyno validation"
        ],
        responsibilities_ar: [
          "هندسة تثبيت وتكامل محرك الدفع هيكلياً داخل الشاسيه مع ضبط توازن الكتلة",
          "تصميم وتحليل دورات التبريد الديناميكية الحرارية والمبادلات الحرارية",
          "حسابات نسب تخفيض الجنزير واختيار مقاسات التروس لنقل أقصى عزم",
          "معايرة الترس التفاضلي (LSD) واستجابة دواسة الوقود واختبارات الأداء"
        ],
        quote: "Power is nothing without precision delivery. Our mission is to extract every kilowatt and deliver razor-sharp throttle response straight to the tarmac.",
        quote_ar: "القوة بلا توجيه دقيق لا تعني شيئاً. مهمتنا استخراج أقصى طاقة ونقلها باستجابة لحظية حاسمة إلى أرض الحلبة."
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
        role: "Electrical Leader",
        photo: "",
        department: "Electrical Infrastructure & Electronics Division",
        department_ar: "قسم البنية التحتية الكهربائية والإلكترونيات",
        bio: "Directs low-voltage motorsport electrical infrastructure, Raychem Mil-Spec wiring harnesses, real-time wireless pit-wall DAQ telemetry, ECU parameter logging, and critical safety shutdown interlocks.",
        bio_ar: "يقود البنية التحتية الكهربائية للسيارة، وتصنيع الضفائر بمواصفات Raychem Mil-Spec العسكرية، وأنظمة القياس عن بُعد (Telemetry) المباشرة مع منصة الصيانة، وبرمجة دوائر الأمان وفصل التيار.",
        responsibilities: [
          "Motorsport-grade Raychem wiring loom architecture and water-resistant packaging",
          "Real-time wireless pit-wall telemetry system (DAQ) and sensor bus calibration",
          "ECU integration, engine management tuning, and high-frequency data logging",
          "FSAE rules-compliant master safety shutdown circuits, BSPD, and brake over-travel switches"
        ],
        responsibilities_ar: [
          "تصميم وتصنيع ضفيرة أسلاك السباقات الاحترافية بمعايير Raychem المقاومة للظروف القاسية",
          "نظام التيليمتري اللاسلكي المباشر ونقل البيانات الحية إلى منصة الصيانة والمهندسين",
          "معايرة وبرمجة وحدة التحكم بالمحرك (ECU) وتسجيل بيانات الحساسات بدقة",
          "دوائر أمان فصل التيار ولوائح السلامة الدولية لنظام الفرامل والطوارئ"
        ],
        quote: "The wiring harness is the central nervous system of Chassis VX-01. Flawless signal integrity and millisecond telemetry are our standard.",
        quote_ar: "الضفيرة الكهربائية هي الجهاز العصبي المركزي لسيارتنا. نقاء الإشارة ودقة البيانات في أجزاء من الثانية هي معيارنا الثابت."
      },
      subteams: ["Wiring Loom", "DAQ & Telemetry"],
      description: "Motorsport Raychem wiring harness, low-voltage power distribution, sensors calibration, and pit wall wireless DAQ.",
      description_ar: "ضفيرة أسلاك السباقات Raychem، وتوزيع الطاقة ذات الجهد المنخفض، ومعايرة الحساسات، والقياس اللاسلكي من منصة الصيانة."
    }
  ],
  nonTechnical: [
    {
      id: "hr",
      name: "Human Resources (HR)",
      leader: null,
      subteams: ["Recruitment & Interviews", "Member Operations"],
      description: "Talent recruitment, screening, onboarding, attendance tracking, and internal team welfare.",
      description_ar: "استقطاب الكفاءات، المقابلات الشخصية، تهيئة الأعضاء الجدد، متابعة الحضور، وتطوير بيئة العمل بالفريق."
    },
    {
      id: "media",
      name: "Media & PR",
      leader: {
        id: "mohamed-hassan",
        name: "Mohamed Hassan",
        role: "Media Lead",
        photo: "",
        department: "Media, Public Relations & Brand Architecture",
        department_ar: "قسم الإعلام والعلاقات العامة والهوية البصرية",
        bio: "Architect of VELOX Racing's visual identity and international brand presence. Directs cinematic build documentaries, high-octane motorsport photography, public relations broadcasting, and digital community engagement across all platforms.",
        bio_ar: "مهندس الهوية البصرية والحضور الإعلامي لفريق فيلوكس. يقود إنتاج الأفلام الوثائقية لتصنيع السيارة، والتصوير الاحترافي، والتغطية الصحفية والإعلامية، وإدارة المنصات الرقمية للتواصل مع الجماهير والشركاء.",
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
