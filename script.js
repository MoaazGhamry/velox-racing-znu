/* ==========================================================================
   VELOX RACING TEAM — OFFICIAL INTERACTIVE JAVASCRIPT
   Zagazig National University | Formula Student UK & Global Collegiate Motorsport
   Zero-Emoji Minimalist Architecture | Widescreen & Mobile-Perfect
   ========================================================================== */

'use strict';

// ── 0. FAST MINIMAL PRELOADER (AUTOMOTIVE SIMPLICITY) ──
(function initFastPreloader() {
  const dismiss = () => {
    const preloader = document.getElementById('sitePreloader');
    if (!preloader || preloader.classList.contains('loaded')) return;
    const bar = document.getElementById('preloaderBar');
    if (bar) bar.style.width = '100%';
    setTimeout(() => {
      preloader.classList.add('loaded');
      setTimeout(() => {
        preloader.style.display = 'none';
        if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
      }, 350);
    }, 240);
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(dismiss, 280);
  } else {
    window.addEventListener('DOMContentLoaded', () => setTimeout(dismiss, 320));
    window.addEventListener('load', () => setTimeout(dismiss, 120));
  }
  // Hard safety timeout: 650ms max so it never gets stuck
  setTimeout(dismiss, 650);

  // Click anywhere to dismiss immediately
  const preloaderEl = document.getElementById('sitePreloader');
  if (preloaderEl) {
    preloaderEl.addEventListener('click', dismiss);
  }
})();

// ── SVG ICONS DEFINITIONS (ZERO EMOJIS) ──
const SVG_ICONS = {
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>`,
  wrench: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  flag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>`
};

// ── BILINGUAL DICTIONARY (ZERO EMOJIS, HIGH MOTORSPORT PRESTIGE) ──
const translations = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.car': 'Chassis VX-01',
    'nav.competition': 'Silverstone UK',
    'nav.subsystems': 'Engineering',
    'nav.sponsors': 'Partners',
    'nav.contact': 'Contact',
    'nav.ctaJoin': 'Join The Build',

    // Hero
    'hero.badge': 'ZAGAZIG NATIONAL UNIVERSITY • OFFICIAL MOTORSPORT RACING TEAM • SILVERSTONE UK DEBUT',
    'hero.title': 'ENGINEERED FROM PASSION.<br />BUILT FOR <span class="text-red">GLOBAL CIRCUITS</span>.',
    'hero.subtitle': 'The official collegiate motorsport racing team of <strong>Zagazig National University</strong>. We are designing and manufacturing race car Chassis VX-01 from scratch to compete across premier global engineering championships, debuting this season at Silverstone Circuit for Formula Student UK. No car was handed to us &mdash; we are engineering every single part.',
    'hero.scrollCue': 'SWIPE / SCROLL TO EXPLORE',
    'hero.ticker.status': 'IN ACTIVE BUILD',
    'hero.ticker.statusSub': 'Chassis & Subsystems',
    'hero.ticker.subsystems': '7 DISCIPLINES',
    'hero.ticker.subsystemsSub': 'Under Construction',
    'hero.ticker.target': 'SILVERSTONE UK',
    'hero.ticker.targetSub': 'Concept & Dynamics',
    'hero.ticker.recruitment': 'OPEN RECRUITMENT',
    'hero.ticker.recruitmentSub': 'Apply to Join Us',
    'hero.cta.join': 'Join The Build Crew',
    'hero.cta.film': 'Watch Launch Film',
    'hero.cta.sponsor': 'Sponsor Our Build',
    'hero.affil.title': 'Official Academic & Engineering Backers',
    'hero.affil.znu': 'Zagazig National University',
    'hero.affil.znuSub': 'Academic Patron & Partner',
    'hero.affil.eng': 'Faculty of Engineering',
    'hero.affil.engSub': 'Mechatronics Department',

    // Nav & Common
    'nav.skipLink': 'Skip to main content',
    'nav.brandSub': 'ZNU RACING',
    'nav.theme': 'Theme',

    // Hero HUD & Telemetry
    'hero.hudChassisTitle': 'CHASSIS VX-01 // CAD DIGITAL TWIN',
    'hero.hudStage': 'FABRICATION STAGE',
    'hero.hudChipAero': 'Aero Downforce',
    'hero.hudChipAeroVal': '185 N @ 70km/h',
    'hero.hudChipMass': 'Target Mass',
    'hero.hudChipMassVal': '< 198 KG DRY',
    'hero.hudChipAccel': 'Acceleration',
    'hero.hudChipAccelVal': '< 3.8s (0-100)',
    'hero.tickerSilverstone': 'SILVERSTONE',

    // Sector 01 (About) Visual Cards
    'about.znuCardTitle': 'Zagazig National University',
    'about.znuCardMajor': 'Faculty of Engineering • Mechatronics Major',
    'about.znuCardPatron': 'Academic Home & Official Patron',
    'about.allianceTitle': 'THE ENGINEERING ALLIANCE TRIANGLE',
    'about.allianceZnu': 'ZNU ACADEMIA',
    'about.allianceVelox': 'VELOX RACING',
    'about.allianceLab': 'MECHATRONICS LAB',
    'about.bmTitle': 'Formula Student UK Benchmark',
    'about.bmDesc': 'Evaluated by Formula 1 technical directors and motorsport engineers at Silverstone Circuit, UK.',
    'about.bmUniv': 'Universities',
    'about.bmNations': 'Nations',
    'about.bmPoints': 'Max Points',

    // Blueprint Specification & Callouts
    'blueprint.tag': 'IMechE FORMULA STUDENT UK // TECHNICAL SPECIFICATION',
    'blueprint.title': 'CHASSIS VX-01 • DIGITAL TWIN ARCHITECTURE',
    'blueprint.cadDoc': 'CAD DOC: ZNU-VX01-FS26',
    'blueprint.status': 'BUILD STATUS: IN FABRICATION',
    'blueprint.classLabel': 'CLASS:',
    'blueprint.classVal': 'FS CONCEPT & DYNAMICS',
    'blueprint.entryLabel': 'ENTRY:',
    'blueprint.entryVal': 'VELOX RACING // ZNU',
    'blueprint.venueLabel': 'VENUE:',
    'blueprint.venueVal': 'SILVERSTONE WING PITLANE',

    'callout.sub1Code': 'SUB-01 // FRONT AERO PACKAGE',
    'callout.sub1Title': 'Multi-Element Carbon Wing & Splitter',
    'callout.sub1Desc': 'CFD-optimized multi-tier carbon fiber wing with adjustable gurney flaps delivering 185 N downforce at 70 km/h.',
    'callout.sub2Code': 'SUB-02 // CHASSIS & COCKPIT',
    'callout.sub2Title': '4130 Chromoly Spaceframe',
    'callout.sub2Desc': 'Laser-notched TIG welded chromoly tubular frame paired with carbon shear panels, exceeding 2,400 Nm/deg torsional stiffness.',
    'callout.sub3Code': 'SUB-03 // POWERTRAIN & INTAKE',
    'callout.sub3Title': 'Dyno-Tuned Power Unit & 3D Intake',
    'callout.sub3Desc': 'Single-cylinder racing engine with 20mm restrictor, selective laser sintering (SLS) 3D-printed intake plenum, and Drexler LSD.',
    'callout.sub4Code': 'SUB-04 // SUSPENSION & REAR AERO',
    'callout.sub4Title': 'Pushrod Kinematics & Tri-Wing',
    'callout.sub4Desc': 'Unequal double A-arms with Öhlins TTX25 dampers, CNC 7075-T6 aluminum uprights, and rear diffuser ground effect.',

    'blueprint.footerRigidity': '// TORSIONAL RIGIDITY: 2,400 Nm/deg',
    'blueprint.footerMass': '// TARGET MASS: 198 KG DRY',
    'blueprint.footerLateral': '// PEAK LATERAL: 1.85 G',
    'blueprint.footerRestrictor': '// RESTRICTOR: 20 MM AIR INLET',

    // Silverstone Scoring Totals & Point Badges
    'scoring.staticTotal': '(325 Points // 32.5%)',
    'scoring.dynamicTotal': '(675 Points // 67.5%)',
    'scoring.pts150': '150 pts',
    'scoring.pts100': '100 pts',
    'scoring.pts75': '75 pts',
    'scoring.pts375': '375 pts',
    'scoring.pts125': '125 pts',

    // Engineering Subsystems Sticky Sidebar
    'subsystems.stickyTag': '// TECHNICAL SECTORS',
    'subsystems.activeDiscipline': 'ACTIVE DISCIPLINE',

    // Contact & Socials
    'contact.socialLi': 'LinkedIn',
    'contact.socialIg': 'Instagram',
    'contact.socialFb': 'Facebook',
    'contact.socialYt': 'YouTube',

    // Footer & Modal
    'footer.dividerText': 'FORMULA STUDENT UK • ZAGAZIG NATIONAL UNIVERSITY • VELOX RACING',
    'footer.desc1': 'VELOX Formula Student Racing Team.',
    'footer.desc2': 'Faculty of Engineering • Zagazig National University.',
    'footer.contactLabel': 'Official Contact:',
    'footer.quickLinksTitle': 'Quick Links',
    'footer.affiliatedTitle': 'Affiliated With',
    'footer.uniZnu': 'Zagazig National University',
    'footer.uniEng': 'Faculty of Engineering',
    'modal.filmTitle': 'VELOX FORMULA STUDENT — OFFICIAL SILVERSTONE LAUNCH FILM',

    // Divider
    'divider.text': 'ZNU RACING DIVISION • FORMULA STUDENT UK • SILVERSTONE PIT LANE',

    // Motivational Banner
    'banner.title': 'WE DON’T JUST DREAM. WE BUILD.',
    'banner.desc': 'Are you a ZNU student passionate about welding, computational fluid dynamics (CFD), embedded software, or motorsport media? We are actively recruiting students to construct Egypt’s premier Formula Student race car.',
    'banner.btn': 'Apply to Join The Crew Now',

    // About
    'about.tag': 'SECTOR 01 • WHO WE ARE',
    'about.title': 'About <span class="text-red">VELOX Racing Team</span>',
    'about.desc': 'Born in the mechatronics engineering halls of Zagazig National University, VELOX is the university’s official motorsport racing team, engineering Egypt’s next-generation formula single-seater prototype to compete on the world stage.',
    'about.lead': '<strong>VELOX</strong> &mdash; from Latin for <em>&ldquo;swift, agile, rapid&rdquo;</em> &mdash; represents our dedication to building a competitive racing prototype from zero through relentless technical execution and student teamwork.',
    'about.p1': 'Formula Student UK is the world’s most prestigious collegiate engineering championship, organized by the <strong>Institution of Mechanical Engineers (IMechE)</strong> at Silverstone Circuit. We are entering both the Concept Class (Design, Cost, Business) and Dynamics Class.',
    'about.p2': 'Our team brings together over 35 ambitious students from <strong>Zagazig National University</strong>. From laser-notched chromoly tube welding and aerodynamics CFD to ECU telemetry and sponsorship management, every part is engineered by students.',
    'about.v1.title': 'Fabricated From Zero',
    'about.v1.desc': 'No car was given to us. Every bracket, tube, and composite wing is designed and fabricated by students.',
    'about.v2.title': 'Aerodynamic Science',
    'about.v2.desc': 'CFD-optimized wings developed in ANSYS Fluent to generate cornering grip at Silverstone.',
    'about.v3.title': 'Multidisciplinary Crew',
    'about.v3.desc': 'Cross-discipline teamwork bridging mechanical design, embedded coding, and business pitch logic.',
    'about.v4.title': 'National Representation',
    'about.v4.desc': 'Proudly raising the Egyptian flag and the Zagazig National University crest on the Silverstone grid.',

    // The Machine (In-Build)
    'car.tag': 'CHASSIS VX-01 • ACTIVE DIGITAL TWIN & FABRICATION',
    'car.title': 'Chassis <span class="text-red">VX-01</span> Blueprint & Build Status',
    'car.desc': 'Our single-seater formula car is currently under active fabrication. Explore the technical digital twin and CAD architecture below.',
    'car.spec1.val': '< 3.8s',
    'car.spec1.lbl': '0 — 100 km/h Design Target',
    'car.spec1.sub': 'Optimized gearing & launch control',
    'car.spec2.val': '< 198 kg',
    'car.spec2.lbl': 'Chassis Target Mass',
    'car.spec2.sub': 'Lightweight 4130 tubular spaceframe',
    'car.spec3.val': '185 N',
    'car.spec3.lbl': 'Aero Downforce @ 70km/h',
    'car.spec3.sub': 'Multi-element carbon wing package',
    'car.spec4.val': 'CAN-Bus',
    'car.spec4.lbl': 'Live Telemetry DAQ',
    'car.spec4.sub': 'Real-time pit-wall sensor streaming',

    // FS-UK
    'comp.tag': 'THE TARGET • SILVERSTONE CIRCUIT UK',
    'comp.title': 'Formula Student <span class="text-red">UK</span> Competition',
    'comp.desc': 'VELOX is participating in <strong>Concept Class &amp; Dynamics Class</strong> at Silverstone Circuit. Formula Student UK evaluates both engineering design theory and on-track vehicle performance.',
    'comp.badge': 'FORMULA STUDENT UK',
    'comp.location': 'Silverstone Circuit • Northamptonshire, United Kingdom',
    'comp.dates': 'Silverstone Wing Paddock // July 2027',
    'comp.cdHeading': 'The Road to Silverstone 2026/2027',
    'comp.cdDesc': 'Formula Student UK, organized by the Institution of Mechanical Engineers (IMechE), brings together over 100 premier collegiate engineering teams. Teams are rigorously judged across static design presentations and wheel-to-wheel dynamic trials on the iconic Silverstone tarmac.',
    'comp.cdTitle': 'COUNTDOWN TO FORMULA STUDENT UK • SILVERSTONE GREEN FLAG',
    'comp.cdVenue': 'Event Venue: Silverstone Pit Straight • Formula Student UK Championship',
    'comp.days': 'Days',
    'comp.hours': 'Hours',
    'comp.mins': 'Minutes',
    'comp.secs': 'Seconds',

    // 1,000-Point Scoring System
    'comp.static.title': 'Static Events & Engineering Evaluation',
    'comp.dynamic.title': 'Dynamics Class On-Track Trials',
    'comp.event.design.title': 'Engineering Design Report',
    'comp.event.design.desc': 'Defending every calculation, CAD geometry, FEA stress contour, and CFD flow model before Formula 1 judges.',
    'comp.event.cost.title': 'Cost & Manufacturing Analysis',
    'comp.event.cost.desc': 'Comprehensive Bill of Materials (BOM), tooling trade-offs, and mass-production feasibility report.',
    'comp.event.business.title': 'Business Logic Presentation',
    'comp.event.business.desc': 'Pitching the race car prototype as a scalable commercial motorsport enterprise to corporate investors.',
    'comp.event.endurance.title': 'Endurance & Fuel Efficiency',
    'comp.event.endurance.desc': 'The ultimate 22-kilometer punishing circuit race testing thermal reliability and powertrain fuel economy.',
    'comp.event.sprint.title': 'Sprint / Autocross Qualifying',
    'comp.event.sprint.desc': 'Single-lap flying shoot-out testing maximum handling agility, cornering grip, and driver precision.',
    'comp.event.accel.title': 'Acceleration Sprint (75m)',
    'comp.event.accel.desc': 'Standing start straight-line drag proving launch control, traction algorithm, and engine torque delivery.',
    'comp.event.skidpad.title': 'Skid Pad (Figure-8)',
    'comp.event.skidpad.desc': 'Constant-radius handling pad testing steady-state lateral G-force generation and roll stiffness.',

    // Roadmap to Silverstone
    'comp.roadmap.heading': 'The Road Map to Silverstone Grid',
    'comp.step1.tag': 'Phase 1 • Active Stage',
    'comp.step1.title': 'Team Formation & Core Recruitment',
    'comp.step1.desc': 'Recruiting student engineers across Zagazig National University, onboarding divisions, and studying IMechE regulations.',
    'comp.step2.tag': 'Phase 2 • Next Phase',
    'comp.step2.title': 'CAD Modelling & Aerodynamics',
    'comp.step2.desc': 'Initiating 3D digital chassis packaging, torsional FEA calculations, and ANSYS Fluent wind tunnel aerodynamic models.',
    'comp.step3.tag': 'Phase 3 • Pipeline',
    'comp.step3.title': 'Procurement & Fabrication',
    'comp.step3.desc': 'Chromoly tubing preparation, precision TIG welding, and CNC 7075-T6 suspension upright machining.',
    'comp.step4.tag': 'Phase 4 • Target',
    'comp.step4.title': 'Engine Calibration & Telemetry Trials',
    'comp.step4.desc': 'Engine dyno tuning, MoTeC ECU launch calibration, driver ergometric fitting, and shakedown testing.',
    'comp.step5.tag': 'Phase 5 • The Goal',
    'comp.step5.title': 'Silverstone Grid UK Debut',
    'comp.step5.desc': 'Scrutineering tech inspections, concept design defense, and wheel-to-wheel Silverstone UK dynamic runs!',

    // Subsystems
    'sub.tag': 'DISCIPLINES • 7 CORE SUBSYSTEMS',
    'sub.title': 'Multidisciplinary <span class="text-red">Engineering</span> Subsystems',
    'sub.desc': 'Building a Formula Student race car requires the synchronized synergy of 7 specialized engineering divisions.',
    'sub.aero.num': '01 // AERODYNAMICS',
    'sub.aero.title': 'Aerodynamics & Downforce Package',
    'sub.aero.lead': 'Validated in ANSYS Fluent CFD, generating cornering downforce while managing cooling flow into the sidepod radiators.',
    'sub.aero.t1': 'Multi-Element Carbon Front & Rear Wings',
    'sub.aero.t2': 'Ground-Effect Venturi Tunnels & Diffusers',
    'sub.aero.t3': 'Full-Vehicle Mesh CFD Simulation (18.7M Elements)',
    'sub.aero.t4': 'Active DRS Drag Reduction Wing Slot',
    'sub.chassis.num': '02 // CHASSIS',
    'sub.chassis.title': 'Chassis & Monocoque Structures',
    'sub.chassis.lead': 'Lightweight 4130 chromoly tubular spaceframe engineered for peak torsional stiffness and maximum impact survivability.',
    'sub.chassis.t1': 'Laser-Notched 4130 Chromoly Steel Frame',
    'sub.chassis.t2': 'Torsional Rigidity Exceeding 2,400 Nm/deg',
    'sub.chassis.t3': 'FIA Aluminum Honeycomb Impact Attenuator',
    'sub.chassis.t4': 'Custom Vac-Bagged Carbon Fiber Seat Shell',
    'sub.power.num': '03 // POWERTRAIN',
    'sub.power.title': 'Powertrain & Thermal Management',
    'sub.power.lead': 'High-revving racing engine optimized for rapid throttle response under strict 20mm restrictor rules with Drexler LSD.',
    'sub.power.t1': '3D Printed SLS Intake Manifold & Restrictor',
    'sub.power.t2': 'Drexler Motorsport Limited Slip Differential',
    'sub.power.t3': 'Custom High-Efficiency Aluminum Radiator',
    'sub.power.t4': 'Pneumatic Paddle Shifter & Quickshifter',
    'sub.susp.num': '04 // SUSPENSION',
    'sub.susp.title': 'Suspension & Vehicle Kinematics',
    'sub.susp.lead': 'Double-wishbone pushrod suspension system with Öhlins TTX25 adjustable dampers and CNC 7075-T6 aluminum uprights.',
    'sub.susp.t1': 'Double Wishbone Pushrod Geometry',
    'sub.susp.t2': 'Öhlins TTX25 2-Way Adjustable Dampers',
    'sub.susp.t3': 'CNC 7075-T6 Billet Uprights & Bellcranks',
    'sub.susp.t4': 'Hoosier 18.0 x 6.0-10 R25B Slicks',
    'sub.telem.num': '05 // TELEMETRY',
    'sub.telem.title': 'Electronics, DAQ & Pit Wall Telemetry',
    'sub.telem.lead': 'MoTeC M130 ECU, custom Power Distribution Module (PDM), CAN-bus network, and live 900MHz wireless telemetry streaming.',
    'sub.telem.t1': 'Motorsport Grade Raychem Type-55 Wiring',
    'sub.telem.t2': 'Live Wireless 900MHz Pit-Wall Data Stream',
    'sub.telem.t3': 'Wheel Speed, Suspension Travel & Brake Sensors',
    'sub.telem.t4': 'Driver HUD & Programmable Shift Lights',
    'sub.ctrl.num': '06 // CONTROLS',
    'sub.ctrl.title': 'Driver Ergonomics & Pedal Box',
    'sub.ctrl.lead': 'Adjustable CNC pedal box with balance bar bias adjuster, quick-release steering wheel, and FIA 5-second emergency egress compliance.',
    'sub.ctrl.t1': 'Adjustable Dual-Cylinder Brake Bias System',
    'sub.ctrl.t2': 'Carbon Fiber Steering Wheel with Shift Paddles',
    'sub.ctrl.t3': 'FIA Compliant 5-Second Egress Safety Clearance',
    'sub.ctrl.t4': 'Custom Expandable Bead Foam Driver Seat',
    'sub.ops.num': '07 // OPERATIONS',
    'sub.ops.title': 'Business Operations & Media Logistics',
    'sub.ops.lead': 'Financial budgeting, supply chain procurement, sponsorship partnerships, international transport logistics to the UK, and public relations.',
    'sub.ops.t1': 'Comprehensive Cost & Manufacturing Report (CBOM)',
    'sub.ops.t2': 'Business Logic Presentation Pitch to Investors',
    'sub.ops.t3': 'Sponsorship Acquisition & Brand Media',
    'sub.ops.t4': 'UK Carnet & Silverstone Paddock Logistics',

    // Development Progress & Targets
    'dev.title': 'Chassis VX-01 Project Milestones & Targets',
    'dev.phase': 'Stage: Active Recruitment & Architecture Setup',
    'dev.b1': 'Team Formation & Student Recruitment',
    'dev.b2': 'IMechE Technical Rulebook Analysis',
    'dev.b3': 'CAD Conceptual Packaging & Spaceframe Architecture',
    'dev.b4': 'Sponsorship Outreach & Industry Partnerships',
    'dev.b5': 'Workshop Tooling & Safety Compliance',
    'dev.b6': 'Chassis Fabrication & Physical Assembly (Upcoming Target)',

    // Sponsors
    'sponsors.tag': 'OUR PARTNERS • ACADEMIC & CORPORATE',
    'sponsors.title': 'Supported By <span class="text-red">Visionary Partners</span>',
    'sponsors.desc': 'We are grateful to our university patrons and corporate backers who empower us to build Egypt’s formula race car.',
    'sponsors.acadHeader': 'Academic Institutions & Official Patrons',
    'sponsors.znuTitle': 'Zagazig National University',
    'sponsors.znuDesc': 'Institutional Patron & Primary Academic Backer',
    'sponsors.znuLoc': 'Zagazig, Sharkia, Egypt',
    'sponsors.veloxTitle': 'VELOX Racing Team',
    'sponsors.veloxDesc': 'Faculty of Engineering Motorsport Division',
    'sponsors.veloxBadge': 'Formula Student UK Entry',
    'sponsors.engTitle': 'Faculty of Engineering',
    'sponsors.engDesc': 'Mechatronics Engineering Department & Workshops',
    'sponsors.engLoc': 'Engineering Innovation',
    'sponsors.tierGold': 'Gold Partners • Prime Livery Placement',
    'sponsors.slotGold1': 'Title / Gold Technical Partner',
    'sponsors.slotGold1Sub': 'Front & Rear Wing Endplate Livery',
    'sponsors.slotGold2': 'Gold Industry Partner',
    'sponsors.slotGold2Sub': 'Sidepod Main Body Branding',
    'sponsors.tierSilver': 'Silver Partners • Hardware & Material Suppliers',
    'sponsors.slotSilver1': 'Telemetry & Electronics Partner',
    'sponsors.slotSilver2': 'Composite & Carbon Fiber Supplier',
    'sponsors.tierBronze': 'Bronze Partners • Team Equipment & Tooling',
    'sponsors.slotBronze1': 'CNC Machining',
    'sponsors.slotBronze2': 'Rapid 3D Prototyping',
    'sponsors.slotBronze3': 'Motorsport Lubricants',
    'sponsors.slotBronze4': 'Workshop Tooling',
    'sponsors.ctaTitle': 'Elevate Your Brand at Silverstone Circuit',
    'sponsors.ctaDesc': 'Formula Student UK attracts the world’s most innovative automotive, aerospace, and motorsport executives. By partnering with VELOX Racing Team, your company directly invests in high-caliber engineering talent and enjoys international brand exposure on the global racing stage.',
    'sponsors.b1': 'Livery Placement on VX-01',
    'sponsors.b2': 'Silverstone Paddock Branding',
    'sponsors.b3': 'Direct Recruitment Pipeline to Top ZNU Talent',
    'sponsors.b4': 'VIP Passes to Silverstone Events',
    'sponsors.b5': 'Digital & Media Press Releases',
    'sponsors.btn': 'Inquire About Partnership Packages',

    // Contact
    'contact.tag': 'PIT WALL RADIO • TRANSMIT INQUIRY',
    'contact.title': 'Contact <span class="text-red">VELOX Racing Team</span>',
    'contact.desc': 'Whether you want to sponsor our build, apply to join the engineering crew, or collaborate with us — send your transmission to our pit wall.',
    'contact.hqTitle': 'Paddock Headquarters',
    'contact.hqDesc': 'Zagazig National University<br />Faculty of Engineering &mdash; Mechatronics Department<br />Zagazig, Sharkia Governorate, Egypt',
    'contact.commTitle': 'Official Communications',
    'contact.emailPrefix': 'Email:',
    'contact.commUniv': 'University: Zagazig National University (ZNU)',
    'contact.socialTitle': 'Paddock Socials',
    'contact.lblFullName': 'Full Name',
    'contact.phName': 'Ahmed Hassan',
    'contact.lblEmail': 'Email Address',
    'contact.lblDept': 'Inquiry Department',
    'contact.optDefault': 'Select Department...',
    'contact.optJoin': 'Student Recruitment — Join The Build Crew',
    'contact.optSponsor': 'Corporate Sponsorship & Partnerships',
    'contact.optTech': 'Technical Suppliers & Tooling',
    'contact.optMedia': 'Media, Press & Public Relations',
    'contact.optGeneral': 'General Support',
    'contact.lblMsg': 'Message / Proposal',
    'contact.phMsg': 'Tell us about yourself, your university major, or your sponsorship proposal...',
    'contact.submit': 'Transmit Message to Pit Wall',
    'contact.success': 'Message transmitted successfully to velox.racing.znu@gmail.com! We will contact you soon.',

    // Footer
    'footer.copy': '© 2026/2027 VELOX Racing Team • Zagazig National University. All rights reserved.',
    'footer.sub': 'Engineered From Zero • Powered by Student Ambition.'
  },

  ar: {
    // Nav
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.car': 'السيارة VX-01',
    'nav.competition': 'سيلفرستون بريطانيا',
    'nav.subsystems': 'الأقسام الهندسية',
    'nav.sponsors': 'الشركاء والرعاة',
    'nav.contact': 'تواصل معنا',
    'nav.ctaJoin': 'انضم للبناء',

    // Hero
    'hero.badge': 'جامعة الزقازيق الأهلية • فريق سباقات السيارات الرسمي • انطلاقة سيلفرستون بريطانيا',
    'hero.title': 'نصنع السرعة بأيدينا..<br />وننطلق نحو <span class="text-red">العالمية</span>.',
    'hero.subtitle': 'فريق فيلوكس (VELOX) هو الفريق الهندسي الرسمي لجامعة الزقازيق الأهلية لسباقات السيارات. نصمم ونبني سيارة السباق VX-01 بالكامل من نقطة الصفر بجهود وعقول طلابنا لخوض كبرى بطولات سباقات السيارات الهندسية، ومحطتنا التنافسية هذا الموسم هي حلبة سيلفرستون العريقة في بريطانيا (Formula Student UK). لم نستلم سيارة جاهزة، بل نصنع كل جزء بسواعدنا.',
    'hero.scrollCue': 'مرر للأسفل لاكتشاف التفاصيل',
    'hero.ticker.status': 'قيد التصنيع النشط',
    'hero.ticker.statusSub': 'الهيكل والأنظمة',
    'hero.ticker.subsystems': '7 أقسام هندسية',
    'hero.ticker.subsystemsSub': 'تعمل بالتوازي',
    'hero.ticker.target': 'حلبة سيلفرستون',
    'hero.ticker.targetSub': 'تصميم وديناميكا',
    'hero.ticker.recruitment': 'باب الانضمام مفتوح',
    'hero.ticker.recruitmentSub': 'سجل معنا الآن',
    'hero.cta.join': 'انضم لطاقم البناء الآن',
    'hero.cta.film': 'شاهد فيلم الانطلاق',
    'hero.cta.sponsor': 'ادعم الفريق كرعاة',
    'hero.affil.title': 'الجهات الأكاديمية والهندسية الراعية',
    'hero.affil.znu': 'جامعة الزقازيق الأهلية',
    'hero.affil.znuSub': 'الشريك والراعي الأكاديمي الرسمي',
    'hero.affil.eng': 'كلية الهندسة',
    'hero.affil.engSub': 'قسم هندسة الميكاترونكس',

    // Nav & Common
    'nav.skipLink': 'تخطي إلى المحتوى الرئيسي',
    'nav.brandSub': 'سباقات جامعة الزقازيق الأهلية',
    'nav.theme': 'المظهر',

    // Hero HUD & Telemetry
    'hero.hudChassisTitle': 'شاسيه VX-01 // التوأم الرقمي الهندسي',
    'hero.hudStage': 'مرحلة التصنيع والتجميع',
    'hero.hudChipAero': 'القوة الضاغطة الهوائية',
    'hero.hudChipAeroVal': '185 نيوتن @ 70 كم/س',
    'hero.hudChipMass': 'الوزن المستهدف',
    'hero.hudChipMassVal': '< 198 كجم جاف',
    'hero.hudChipAccel': 'التسارع (0-100)',
    'hero.hudChipAccelVal': '< 3.8 ث (0-100)',
    'hero.tickerSilverstone': 'سيلفرستون',

    // Sector 01 (About) Visual Cards
    'about.znuCardTitle': 'جامعة الزقازيق الأهلية',
    'about.znuCardMajor': 'كلية الهندسة • قسم هندسة الميكاترونكس',
    'about.znuCardPatron': 'المقر الأكاديمي والراعي الرسمي',
    'about.allianceTitle': 'مثلث التحالف الهندسي والأكاديمي',
    'about.allianceZnu': 'صرح جامعة الزقازيق الأهلية',
    'about.allianceVelox': 'فريق ڤيلوكس للسباقات',
    'about.allianceLab': 'مختبرات ومعامل الميكاترونكس',
    'about.bmTitle': 'معايير فورميولا ستيودنت العالمية',
    'about.bmDesc': 'يتم تقييم الفرق واختبارها بواسطة كبار مديري الهندسة في الفورميولا 1 بحلبة سيلفرستون التاريخية، بريطانيا.',
    'about.bmUniv': 'جامعة عالمية',
    'about.bmNations': 'دولة مشاركة',
    'about.bmPoints': 'الحد الأقصى للنقاط',

    // Blueprint Specification & Callouts
    'blueprint.tag': 'المواصفات الفنية المعتمدة // فورميولا ستيودنت بريطانيا IMechE',
    'blueprint.title': 'شاسيه VX-01 • المعمارية الهندسية للتوأم الرقمي',
    'blueprint.cadDoc': 'وثيقة التصميم الهندسي: ZNU-VX01-FS26',
    'blueprint.status': 'حالة التنفيذ: قيد التصنيع والتجميع',
    'blueprint.classLabel': 'الفئة:',
    'blueprint.classVal': 'فورميولا ستيودنت: المفهوم والديناميكا',
    'blueprint.entryLabel': 'المتسابق:',
    'blueprint.entryVal': 'فريق ڤيلوكس // جامعة الزقازيق الأهلية',
    'blueprint.venueLabel': 'المقر:',
    'blueprint.venueVal': 'حلبة سيلفرستون — مرآب الأجنحة البريطاني',

    'callout.sub1Code': 'قطاع 01 // حزمة الديناميكا الهوائية الأمامية',
    'callout.sub1Title': 'جناح كربوني متعدد العناصر ومشتت هواء أمامي',
    'callout.sub1Desc': 'جناح متعدد الطبقات من ألياف الكربون محسوب بـ CFD مع زعانف جورني قابلة للضبط لتوليد 185 نيوتن قوة ضاغطة عند 70 كم/س.',
    'callout.sub2Code': 'قطاع 02 // الشاسيه وهيكل مقصورة القيادة',
    'callout.sub2Title': 'شاسيه أنبوبي من فولاذ الكرومولي 4130',
    'callout.sub2Desc': 'أنابيب كرومولي مقطوعة بالليزر وملحومة بـ TIG مدمجة مع ألواح قص كربونية، توفر صلابة التوائية تفوق 2,400 نيوتن.متر/درجة.',
    'callout.sub3Code': 'قطاع 03 // منظومة القوى وسحب الهواء',
    'callout.sub3Title': 'محرك معاير على الداينو ومجمع سحب ثلاثي الأبعاد',
    'callout.sub3Desc': 'محرك سباقات أحادي الأسطوانة مع خانق 20 مم، ومجمع سحب مطبوع بتقنية التلبيد بالليزر (SLS)، وترس تفاضلي Drexler.',
    'callout.sub4Code': 'قطاع 04 // نظام التعليق والديناميكا الخلفية',
    'callout.sub4Title': 'هندسة تعليق ذراع الدفع (Pushrod) وجناح خلفي ثلاثي',
    'callout.sub4Desc': 'أذرع تحكم مزدوجة غير متساوية مع مخمدات Öhlins TTX25 وحوامل عجلات CNC 7075-T6 مع مشتت خلفي بتأثير أرضي.',

    'blueprint.footerRigidity': '// الصلابة الالتوائية: 2,400 نيوتن.متر/درجة',
    'blueprint.footerMass': '// الوزن المستهدف: 198 كجم جاف',
    'blueprint.footerLateral': '// التسارع الجانبي الأقصى: 1.85 G',
    'blueprint.footerRestrictor': '// خانق الهواء الإجباري: 20 مم',

    // Silverstone Scoring Totals & Point Badges
    'scoring.staticTotal': '(325 نقطة // 32.5% من الإجمالي)',
    'scoring.dynamicTotal': '(675 نقطة // 67.5% من الإجمالي)',
    'scoring.pts150': '150 نقطة',
    'scoring.pts100': '100 نقطة',
    'scoring.pts75': '75 نقطة',
    'scoring.pts375': '375 نقطة',
    'scoring.pts125': '125 نقطة',

    // Engineering Subsystems Sticky Sidebar
    'subsystems.stickyTag': '// القطاعات الهندسية الفنية',
    'subsystems.activeDiscipline': 'التخصص الهندسي النشط',

    // Contact & Socials
    'contact.socialLi': 'لينكد إن',
    'contact.socialIg': 'إنستغرام',
    'contact.socialFb': 'فيسبوك',
    'contact.socialYt': 'يوتيوب',

    // Footer & Modal
    'footer.dividerText': 'فورميولا ستيودنت بريطانيا • جامعة الزقازيق الأهلية • فريق ڤيلوكس للسباقات',
    'footer.desc1': 'فريق ڤيلوكس لسباقات فورميولا ستيودنت.',
    'footer.desc2': 'كلية الهندسة • جامعة الزقازيق الأهلية.',
    'footer.contactLabel': 'التواصل الرسمي:',
    'footer.quickLinksTitle': 'روابط سريعة',
    'footer.affiliatedTitle': 'الجهات التابعة والداعمة',
    'footer.uniZnu': 'جامعة الزقازيق الأهلية',
    'footer.uniEng': 'كلية الهندسة',
    'modal.filmTitle': 'ڤيلوكس فورميولا ستيودنت — الفيلم الرسمي للانطلاق نحو سيلفرستون',

    // Divider
    'divider.text': 'فريق سباقات جامعة الزقازيق الأهلية • فورمولا ستودنت بريطانيا • حلبة سيلفرستون',

    // Motivational Banner
    'banner.title': 'نحن لا نحلم فقط.. نحن نصنع السيارة بأيدينا.',
    'banner.desc': 'هل أنت طالب بجامعة الزقازيق الأهلية وشغوف بلحام الهياكل، أو محاكاة الديناميكا الهوائية (CFD)، أو برمجة وحدات التيليمتري، أو الإعلام الرياضي والرعاية؟ باب التقديم مفتوح لبناء أول سيارة سباق طلابية للجامعة.',
    'banner.btn': 'قدّم للانضمام إلى طاقم العمل الآن',

    // About
    'about.tag': 'القطاع 01 • من نحن',
    'about.title': 'عن فريق <span class="text-red">فيلوكس للسباقات</span>',
    'about.desc': 'انطلق الفريق من معامل قسم هندسة الميكاترونكس بكلية الهندسة بجامعة الزقازيق الأهلية ليكون الفريق الرسمي للجامعة في رياضة المحركات وبناء سيارات السباق للمنافسة عالمياً.',
    'about.lead': 'اسم <strong>فيلوكس (VELOX)</strong> &mdash; كلمة لاتينية تعني <em>&ldquo;السريع والرّشيق&rdquo;</em> &mdash; يجسد إصرارنا على بناء سيارة سباق تنافسية من نقطة الصفر بجهود هندسية طلابية خالصة.',
    'about.p1': 'مسابقة فورمولا ستودنت بريطانيا (FS-UK) هي المسابقة الهندسية الطلابية الأكبر عالمياً، التي تنظمها <strong>جمعية المهندسين الميكانيكيين البريطانية (IMechE)</strong> بحلبة سيلفرستون التاريخية. ننافس في فئتي التصميم النظري والديناميكا.',
    'about.p2': 'يضم فريقنا أكثر من 35 طالباً وطالبة من <strong>جامعة الزقازيق الأهلية</strong>. من قص ولحام مواسير الكرومولي المعالجة ومحاكاة الانسيابية الهوائية، حتى برمجة حواسب التيليمتري وإدارة الرعاية، كل خطوة يصنعها الطلاب.',
    'about.v1.title': 'تصنيع طلابي من الصفر',
    'about.v1.desc': 'لم نتلق سيارة جاهزة. كل وصلة، وأنبوب، وجناح هوائي نصممه ونبنيه بأيدينا.',
    'about.v2.title': 'ديناميكا هوائية متقدمة',
    'about.v2.desc': 'أجنحة هوائية تم تطويرها عبر برامج ANSYS Fluent لتحقيق أقصى ثبات على المنعطفات.',
    'about.v3.title': 'فريق متعدد التخصصات',
    'about.v3.desc': 'تعاون وثيق يجمع بين التصميم الميكانيكي، والأنظمة المدمجة، وخطط الأعمال الاستثمارية.',
    'about.v4.title': 'فخر وطني مصري',
    'about.v4.desc': 'رفع علم مصر وشعار جامعة الزقازيق الأهلية على حلبة سيلفرستون ببريطانيا.',

    // The Machine (In-Build)
    'car.tag': 'شاسيه VX-01 • التوأم الرقمي ومراحل التصنيع',
    'car.title': 'مخطط شاسيه <span class="text-red">VX-01</span> وحالة البناء',
    'car.desc': 'سيارتنا حالياً قيد التصنيع والتجميع في الورشة. استكشف التوأم الرقمي والمواصفات الهندسية الجاري تنفيذها أدناه.',
    'car.spec1.val': '< 3.8 ث',
    'car.spec1.lbl': 'التسارع المستهدف (0 - 100 كم/س)',
    'car.spec1.sub': 'نظام تحكم في الانطلاق وتروس دفرنشل',
    'car.spec2.val': '< 198 كغ',
    'car.spec2.lbl': 'الوزن الجاف المستهدف للشاسيه',
    'car.spec2.sub': 'هيكل أنبوبي فولاذي خفيف فائق الصلابة',
    'car.spec3.val': '185 نيوتن',
    'car.spec3.lbl': 'قوة الدفع لأسفل عند 70 كم/س',
    'car.spec3.sub': 'حزمة أجنحة كربونية متعددة العناصر',
    'car.spec4.val': 'CAN-Bus',
    'car.spec4.lbl': 'نظام التيليمتري الحي المباشر',
    'car.spec4.sub': 'بث حي لبيانات الحساسات إلى حائط الصيانة',

    // FS-UK
    'comp.tag': 'الهدف • حلبة سيلفرستون بالمملكة المتحدة',
    'comp.title': 'منافسات فورمولا ستودنت <span class="text-red">بريطانيا</span>',
    'comp.desc': 'يشارك فريق فيلوكس في <strong>فئة التصميم وفئة الديناميكا</strong> بحلبة سيلفرستون، حيث تخضع السيارة لتقييم لجان التحكيم واختبارات الحلبة الحية.',
    'comp.badge': 'فورمولا ستودنت بريطانيا',
    'comp.location': 'حلبة سيلفرستون • نورثهامبتونشاير، المملكة المتحدة',
    'comp.dates': 'بادوك حلبة سيلفرستون // يوليو 2027',
    'comp.cdHeading': 'طريقنا إلى حلبة سيلفرستون 2026/2027',
    'comp.cdDesc': 'تجمع مسابقة فورمولا ستودنت بريطانيا التي تنظمها مؤسسة المهندسين الميكانيكيين (IMechE) أكثر من 100 فريق جامعي دولي، حيث يتم تقييم الفرق بدقة عبر عروض التصميم الثابتة والاختبارات الديناميكية الحية على مسار سيلفرستون الأسطوري.',
    'comp.cdTitle': 'العد التنازلي لانطلاق فورمولا ستودنت بريطانيا • سيلفرستون',
    'comp.cdVenue': 'موقع الحدث: الخط المستقيم لحلبة سيلفرستون • بطولة فورمولا ستودنت بريطانيا',
    'comp.days': 'يوم',
    'comp.hours': 'ساعة',
    'comp.mins': 'دقيقة',
    'comp.secs': 'ثانية',

    // 1,000-Point Scoring System
    'comp.static.title': 'الاختبارات الاستاتيكية ومناقشة التصميم',
    'comp.dynamic.title': 'الاختبارات الديناميكية وتحديات الحلبة',
    'comp.event.design.title': 'دفاع التصميم الهندسي المتكامل',
    'comp.event.design.desc': 'مناقشة الحسابات، النمذجة ثلاثية الأبعاد، وتحليل الإجهادات ومحاكاة الانسيابية أمام خبراء الفورمولا 1.',
    'comp.event.cost.title': 'تحليل التكلفة وجدوى التصنيع',
    'comp.event.cost.desc': 'تقديم تقرير تفصيلي لقطع وتكاليف تصنيع السيارة وقابلية الإنتاج الكمي ومفاضلة المواد.',
    'comp.event.business.title': 'عرض خطة العمل والاستثمار',
    'comp.event.business.desc': 'تقديم خطة تسويقية وعرض استثماري لتمويل نموذج السباق كشركة تجارية أمام لجان التحكيم.',
    'comp.event.endurance.title': 'سباق التحمل واستهلاك الطاقة',
    'comp.event.endurance.desc': 'الاختبار الأهم لمسافة 22 كيلومتراً لاختبار قوة تحمل المحرك، نظام التبريد، واستهلاك الوقود تحت أقصى جهد.',
    'comp.event.sprint.title': 'سباق الأوتوكروس والتأهيل السريع',
    'comp.event.sprint.desc': 'لفة زمنية سريعة فردية لاختبار استجابة التوجيه، ثبات المنعطفات، ودقة مناورة السائق على المسار.',
    'comp.event.accel.title': 'اختبار التسارع المباشر (75 متراً)',
    'comp.event.accel.desc': 'انطلاق مباشر في خط مستقيم من وضع الثبات لقياس عزم الدوران وقوة نظام التحكم في الانطلاق.',
    'comp.event.skidpad.title': 'اختبار الثبات الدائري (مسار رقم 8)',
    'comp.event.skidpad.desc': 'حلبة دائرية مغلقة لاختبار التماسك الجانبي وقوة الطرد المركزي وثبات نظام التعليق مع الأرض.',

    // Roadmap to Silverstone
    'comp.roadmap.heading': 'خارطة الطريق نحو خط انطلاق سيلفرستون',
    'comp.step1.tag': 'المرحلة 01 • المرحلة الحالية',
    'comp.step1.title': 'تأسيس الفريق واستقطاب المواهب',
    'comp.step1.desc': 'فتح باب الانضمام لطلاب جامعة الزقازيق الأهلية، وتوزيع الفرق الفرعية، ودراسة لوائح مسابقة IMechE.',
    'comp.step2.tag': 'المرحلة 02 • الخطوة التالية',
    'comp.step2.title': 'التصميم الرقمي والمحاكاة',
    'comp.step2.desc': 'بدء النمذجة الرقمية ثلاثية الأبعاد، وتحليل الإجهادات للهيكل الأنبوبي، ومحاكاة الأجنحة الهوائية.',
    'comp.step3.tag': 'المرحلة 03 • مرحلة التجهيز',
    'comp.step3.title': 'توفير الخامات وتصنيع الشاسيه',
    'comp.step3.desc': 'تجهيز مواسير الكرومولي 4130، وبدء اللحام الدقيق، وتشغيل أذرع التعليق بواسطة ماكينات الـ CNC.',
    'comp.step4.tag': 'المرحلة 04 • التجميع والاختبار',
    'comp.step4.title': 'معايرة المحرك وتجارب التيليمتري',
    'comp.step4.desc': 'معايرة حاسوب المحرك على جهاز الداينو، وضبط الحساسات، وإجراء اختبارات المسار الأولية وتفصيل مقعد السائق.',
    'comp.step5.tag': 'المرحلة 05 • الهدف المنشود',
    'comp.step5.title': 'الانطلاق على حلبة سيلفرستون بريطانيا',
    'comp.step5.desc': 'اجتياز الفحص الفني البريطاني، والدفاع الهندسي للتصميم، والسباق على أسفلت حلبة سيلفرستون التاريخية!',

    // Subsystems
    'sub.tag': 'التخصصات • 7 أقسام هندسية متكاملة',
    'sub.title': 'الأقسام <span class="text-red">الهندسية</span> المشاركة في البناء',
    'sub.desc': 'يتطلب بناء سيارة فورمولا ستودنت تناغماً كاملاً بين 7 أقسام هندسية متخصصة.',
    'sub.aero.num': '01 // الديناميكا الهوائية',
    'sub.aero.title': 'الديناميكا الهوائية وقوة الدفع السفلي',
    'sub.aero.lead': 'محاكاة كاملة عبر برامج ANSYS Fluent لتوليد قوة ضغط سفلية تثبت السيارة في المنعطفات وتوجه الهواء لتبريد المحرك.',
    'sub.aero.t1': 'أجنحة أمامية وخلفية كربونية متعددة العناصر',
    'sub.aero.t2': 'أنفاق فينتوري سفلية ومشتت هواء خلفي',
    'sub.aero.t3': 'محاكاة CFD لكامل جسم السيارة (18.7 مليون خلية)',
    'sub.aero.t4': 'فتحات تقليل السحب الهوائي (نظام DRS نشط)',
    'sub.chassis.num': '02 // الشاسيه وهيكل السيارة',
    'sub.chassis.title': 'الشاسيه وهيكل الأمان المونوكوك',
    'sub.chassis.lead': 'هيكل أنبوبي فولاذي من الكرومولي 4130 خفيف الوزن ومصمم لتحقيق أعلى صلابة التوائية مع حماية السائق.',
    'sub.chassis.t1': 'شاسيه مواسير كرومولي 4130 مقطوعة بالليزر',
    'sub.chassis.t2': 'صلابة التوائية تفوق 2,400 نيوتن.متر/درجة',
    'sub.chassis.t3': 'ممتص صدمات أمامي من خلايا الألومنيوم معتمد',
    'sub.chassis.t4': 'مقعد ألياف كربونية مخصص لحماية وراحة السائق',
    'sub.power.num': '03 // منظومة الحركة والمحرك',
    'sub.power.title': 'منظومة الحركة والإدارة الحرارية',
    'sub.power.lead': 'محرك سباقات عالي الدوران معدل لاستجابة خنق فائقة السرعة مع مقيد هواء 20 مم ودفرنشل Drexler محدود الانزلاق.',
    'sub.power.t1': 'مانيفولد هواء بتقنية الطباعة ثلاثية الأبعاد SLS',
    'sub.power.t2': 'دفرنشل Drexler Motorsport محدود الانزلاق',
    'sub.power.t3': 'رادياتير ألومنيوم مخصص عالي الكفاءة الحرارية',
    'sub.power.t4': 'نظام نقل حركة هوائي بالبدالات السريعة',
    'sub.susp.num': '04 // نظام التعليق',
    'sub.susp.title': 'نظام التعليق وديناميكا المركبة',
    'sub.susp.lead': 'نظام تعليق مزدوج بقضبان دفع ومساعدين Öhlins TTX25 قابلة للضبط مع أذرع ألومنيوم CNC 7075-T6 فائقة القوة.',
    'sub.susp.t1': 'هندسة تعليق مزدوجة بنظام Pushrod',
    'sub.susp.t2': 'مساعدين Öhlins TTX25 ثنائية الضبط والتحكم',
    'sub.susp.t3': 'أذرع تعليق CNC مشغلة من سبائك 7075-T6',
    'sub.susp.t4': 'إطارات ملساء مخصصة للسباقات Hoosier R25B',
    'sub.telem.num': '05 // التيليمتري والإلكترونيات',
    'sub.telem.title': 'الإلكترونيات وجمع البيانات والتيليمتري',
    'sub.telem.lead': 'حاسوب محرك MoTeC M130 ووحدة توزيع طاقة PDM مع شبكة CAN-bus وبث لاسلكي مباشر 900MHz إلى حائط الصيانة.',
    'sub.telem.t1': 'ضفيرة أسلاك بمواصفات الطيران والسباقات Raychem',
    'sub.telem.t2': 'بث بيانات حي بتردد 900MHz إلى حائط الصيانة',
    'sub.telem.t3': 'حساسات سرعة العجلات، وحركة التعليق، وضغط الفرامل',
    'sub.telem.t4': 'شاشة قيادة رقمية للسائق مع أضواء تبديل مبرمجة',
    'sub.ctrl.num': '06 // بيئة القيادة والتحكم',
    'sub.ctrl.title': 'بيئة القيادة وتوزيع الفرامل',
    'sub.ctrl.lead': 'مجموعة دواسات CNC قابلة للتعديل بالكامل مع ميزان توزيع الفرامل، وعجلة قيادة سريعة الفك، واستيفاء معيار الخروج في 5 ثوانٍ.',
    'sub.ctrl.t1': 'نظام توزيع فرامل مزدوج الاسطوانة قابل للضبط',
    'sub.ctrl.t2': 'عجلة قيادة ألياف كربونية مع بدالات نقل السرعات',
    'sub.ctrl.t3': 'استيفاء اشتراطات أمان الخروج السريع في 5 ثوانٍ',
    'sub.ctrl.t4': 'مقعد مصبوب برغوة خاصة يتطابق مع جسد السائق',
    'sub.ops.num': '07 // إدارة العمليات',
    'sub.ops.title': 'إدارة العمليات والرعاية والإعلام',
    'sub.ops.lead': 'الميزانية المالية، سلاسل الإمداد، إدارة عقود الرعاية، واللوجستيات وشحن السيارة إلى المملكة المتحدة، والتغطية الإعلامية.',
    'sub.ops.t1': 'تقرير تكاليف التصنيع والمواد التفصيلي (CBOM)',
    'sub.ops.t2': 'عرض خطة العمل الترويجية أمام المستثمرين',
    'sub.ops.t3': 'استقطاب الرعاة والتغطية الإعلامية وصناعة المحتوى',
    'sub.ops.t4': 'إجراءات الجمارك والشحن الدولي إلى بريطانيا',

    // Development Progress & Targets
    'dev.title': 'مستهدفات ومراحل مشروع السيارة VX-01',
    'dev.phase': 'المرحلة: استقطاب الكفاءات والبدء في التأسيس الهندسي',
    'dev.b1': 'تشكيل الفريق واستقطاب الكفاءات الطلابية',
    'dev.b2': 'دراسة اللوائح والاشتراطات الهندسية للمسابقة',
    'dev.b3': 'التصميم الأولي وهندسة الشاسيه ثلاثية الأبعاد',
    'dev.b4': 'التواصل مع الرعاة والشركات الصناعية لتوفير المواد',
    'dev.b5': 'تجهيز الورشة وأدوات الأمان والتشغيل',
    'dev.b6': 'التصنيع المادي والتجميع للسيارة (المستهدف القادم)',

    // Sponsors
    'sponsors.tag': 'شركاء النجاح • الرعاة الأكاديميون والشركات',
    'sponsors.title': 'بدعم من <span class="text-red">شركاء الرؤية</span>',
    'sponsors.desc': 'نتقدم بخالص الامتنان لجامعتنا ورعاة الفريق من الشركات الصناعية الداعمة لبناء أول سيارة سباق طلابية تمثل مصر.',
    'sponsors.acadHeader': 'المؤسسات الأكاديمية والرعاة الرسميون',
    'sponsors.znuTitle': 'جامعة الزقازيق الأهلية',
    'sponsors.znuDesc': 'الشريك والمظلة الأكاديمية والراعي الأساسي',
    'sponsors.znuLoc': 'الزقازيق، الشرقية، مصر',
    'sponsors.veloxTitle': 'فريق فيلوكس للسباقات',
    'sponsors.veloxDesc': 'قسم رياضة المحركات بكلية الهندسة',
    'sponsors.veloxBadge': 'المشاركة في فورمولا ستودنت بريطانيا',
    'sponsors.engTitle': 'كلية الهندسة',
    'sponsors.engDesc': 'قسم هندسة الميكاترونكس وورش التصنيع',
    'sponsors.engLoc': 'الابتكار والتميز الهندسي',
    'sponsors.tierGold': 'الرعاة الذهبيون • المساحة الأبرز على السيارة',
    'sponsors.slotGold1': 'الشريك التقني الذهبي الرئيسي',
    'sponsors.slotGold1Sub': 'شعار بارز على الجناحين الأمامي والخلفي',
    'sponsors.slotGold2': 'الشريك الصناعي الذهبي',
    'sponsors.slotGold2Sub': 'شعار رئيسي على جانبي السيارة (Sidepods)',
    'sponsors.tierSilver': 'الرعاة الفضيون • موردي العتاد والمواد الخام',
    'sponsors.slotSilver1': 'شريك الإلكترونيات وأنظمة التيليمتري',
    'sponsors.slotSilver2': 'مورد ألياف الكربون والمواد المركبة',
    'sponsors.tierBronze': 'الرعاة البرونزيون • معدات الورشة وأدوات التشغيل',
    'sponsors.slotBronze1': 'خدمات تشغيل وتشذيب المعادن CNC',
    'sponsors.slotBronze2': 'الطباعة والنماذج ثلاثية الأبعاد السريعة',
    'sponsors.slotBronze3': 'زيوت وسوائل محركات السباقات',
    'sponsors.slotBronze4': 'أدوات ومعدات الورشة المتخصصة',
    'sponsors.ctaTitle': 'ارتقِ بعلامتك التجارية على حلبة سيلفرستون',
    'sponsors.ctaDesc': 'تستقطب فورمولا ستودنت بريطانيا كبرى قيادات صناعة السيارات، وقطاع الطيران، والشركات العالمية. من خلال رعايتك لفريق فيلوكس، تستثمر شركتك في نخبة العقول الهندسية وتحصل على ظهور دولي مشرف في محفل سباقات عالمي.',
    'sponsors.b1': 'وضع شعار شركتكم على سيارة السباق VX-01',
    'sponsors.b2': 'حضور بارز في بادوك حلبة سيلفرستون بالمملكة المتحدة',
    'sponsors.b3': 'أولوية استقطاب وتوظيف نوابغ وخريجي جامعة الزقازيق الأهلية',
    'sponsors.b4': 'تذاكر VIP لحضور فعاليات المسابقة في بريطانيا',
    'sponsors.b5': 'تغطية إعلامية وصحفية ومحتوى رقمي مشترك',
    'sponsors.btn': 'استفسر عن باقات الرعاية والشراكة',

    // Contact
    'contact.tag': 'راديو حائط الصيانة • إرسال استفسار',
    'contact.title': 'تواصل مع فريق <span class="text-red">فيلوكس</span>',
    'contact.desc': 'سواء كنت ترغب في رعاية بناء السيارة، أو الانضمام لفريق المهندسين، أو التعاون التقني &mdash; أرسل رسالتك مباشرة إلينا.',
    'contact.hqTitle': 'مقر البادوك والورشة',
    'contact.hqDesc': 'جامعة الزقازيق الأهلية<br />كلية الهندسة &mdash; قسم هندسة الميكاترونكس<br />مدينة الزقازيق، محافظة الشرقية، مصر',
    'contact.commTitle': 'قنوات التواصل الرسمية',
    'contact.emailPrefix': 'البريد:',
    'contact.commUniv': 'الجامعة: جامعة الزقازيق الأهلية (ZNU)',
    'contact.socialTitle': 'حسابات التواصل الرسمية',
    'contact.lblFullName': 'الاسم بالكامل',
    'contact.phName': 'أحمد حسن',
    'contact.lblEmail': 'البريد الإلكتروني',
    'contact.lblDept': 'جهة الاستفسار',
    'contact.optDefault': 'اختر القسم المطلوب...',
    'contact.optJoin': 'استقطاب الطلاب — الانضمام لطاقم العمل',
    'contact.optSponsor': 'رعاية الشركات والشراكات التجارية',
    'contact.optTech': 'الموردين التقنيين ومعدات الورشة',
    'contact.optMedia': 'الإعلام، الصحافة، والعلاقات العامة',
    'contact.optGeneral': 'استفسار عام ودعم الفريق',
    'contact.lblMsg': 'الرسالة / المقترح',
    'contact.phMsg': 'أخبرنا عن نفسك، وتخصصك الجامعي، أو تفاصيل مقترح الرعاية...',
    'contact.submit': 'إرسال الرسالة إلى حائط الصيانة',
    'contact.success': 'تم إرسال رسالتك بنجاح إلى velox.racing.znu@gmail.com! سنتواصل معك قريباً.',

    // Footer
    'footer.copy': '© 2026/2027 فريق فيلوكس للسباقات • جامعة الزقازيق الأهلية. جميع الحقوق محفوظة.',
    'footer.sub': 'صُنعت من الصفر • بسواعد وطموح شباب المهندسين.'
  }
};

// ── STATE CONTROLLERS ──
let currentLang = localStorage.getItem('velox_lang') || 'en';
let currentTheme = localStorage.getItem('velox_theme') || 'dark';

// Apply Theme
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('velox_theme', theme);

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    const isDark = theme === 'dark';
    const isAr = currentLang === 'ar';
    const lightText = isAr ? 'فاتح' : 'Light';
    const darkText = isAr ? 'داكن' : 'Dark';
    themeBtn.innerHTML = isDark
      ? `<span class="icon-svg">${SVG_ICONS.sun}</span> <span>${lightText}</span>`
      : `<span class="icon-svg">${SVG_ICONS.moon}</span> <span>${darkText}</span>`;
    themeBtn.setAttribute('aria-label', isDark ? (isAr ? 'التبديل إلى الوضع الفاتح' : 'Switch to Light Theme') : (isAr ? 'التبديل إلى الوضع الداكن' : 'Switch to Dark Theme'));
  }

  // Swap Brand Logos smoothly
  document.querySelectorAll('.nav-logo-mark, .footer-logo').forEach(img => {
    img.src = theme === 'light' ? 'VeloxForWeb.png' : 'VeloxLogoWeb.png';
  });
}

// Apply Language
function applyLanguage(lang) {
  currentLang = lang;
  applyTheme(currentTheme);
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  localStorage.setItem('velox_lang', lang);

  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.innerHTML = lang === 'en'
      ? `<span class="icon-svg">${SVG_ICONS.globe}</span> <span>عربي</span>`
      : `<span class="icon-svg">${SVG_ICONS.globe}</span> <span>EN</span>`;
    langBtn.setAttribute('aria-label', lang === 'en' ? 'التحويل إلى العربية' : 'Switch to English');
  }

  const dict = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Init Theme & Lang
  applyTheme(currentTheme);
  applyLanguage(currentLang);

  // 2. Setup Ambient Background Flag Video (lff.mp4: Slower 0.55x speed & continuous replay)
  const ambientVideo = document.getElementById('ambientFlagVideo');
  if (ambientVideo) {
    ambientVideo.muted = true;
    ambientVideo.defaultMuted = true;
    ambientVideo.loop = true;
    ambientVideo.playbackRate = 0.55; // Slower playback as requested

    const playAmbient = () => {
      ambientVideo.playbackRate = 0.55;
      ambientVideo.play().catch(e => {
        // Autoplay policy waiting for gesture
      });
    };

    playAmbient();

    // Explicit 20-second loop replay handler
    ambientVideo.addEventListener('ended', () => {
      ambientVideo.currentTime = 0;
      ambientVideo.playbackRate = 0.55;
      ambientVideo.play().catch(() => {});
    });

    // Seamless loop continuity
    ambientVideo.addEventListener('timeupdate', () => {
      if (ambientVideo.duration && ambientVideo.currentTime >= ambientVideo.duration - 0.25) {
        ambientVideo.currentTime = 0;
        ambientVideo.playbackRate = 0.55;
        ambientVideo.play().catch(() => {});
      }
    });

    // Unlock playback on first user touch/scroll if browser was throttling
    ['click', 'touchstart', 'scroll', 'keydown'].forEach(evt => {
      window.addEventListener(evt, () => {
        if (ambientVideo.paused) {
          playAmbient();
        }
      }, { once: false, passive: true });
    });
  }

  // 3. Theme Toggle
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // 4. Lang Toggle
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
  }

  // 5. Navbar Scroll
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleNavbarScroll = () => {
    if (!navbar) return;
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 40);

    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${currentId}`);
    });
  };

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // 6. Mobile Drawer
  const hamburger = document.getElementById('hamburger');
  const navLinksList = document.getElementById('navLinks');

  if (hamburger && navLinksList) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinksList.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinksList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinksList.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // 7. Smooth Scroll & Hero Scroll Cue
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 72;
        const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - (navHeight + 10);
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });

  // 8. Cool Swipe / Scroll Down Kinetic Reveal
  const kineticElements = document.querySelectorAll('.kinetic-reveal, .recruitment-highlight-card, .about-grid, .technical-blueprint-showcase, .competition-hero-card, .engineering-editorial-section');
  const kineticObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  kineticElements.forEach(el => kineticObserver.observe(el));

  // Touch Swipe Gesture for Hero Section (Smooth Downward Glides)
  const heroSection = document.getElementById('home');
  if (heroSection) {
    let touchStartY = 0;
    heroSection.addEventListener('touchstart', e => {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    heroSection.addEventListener('touchend', e => {
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;
      // If swiping upwards by more than 60px from hero, glide to #about
      if (diffY > 60 && window.scrollY < 120) {
        const aboutSec = document.getElementById('about');
        if (aboutSec) {
          const navHeight = navbar ? navbar.offsetHeight : 72;
          window.scrollTo({
            top: aboutSec.offsetTop - navHeight,
            behavior: 'smooth'
          });
        }
      }
    }, { passive: true });
  }

  // 9. Animated Counter Numbers
  const easeOutQuart = t => 1 - Math.pow(1 - t, 4);
  const animateCounter = el => {
    const target = parseInt(el.dataset.target, 10);
    if (isNaN(target)) return;
    const duration = 1800;
    let startTime = null;

    const step = timestamp => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      el.textContent = Math.round(easeOutQuart(progress) * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  };

  const statObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-number').forEach(animateCounter);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const heroTicker = document.querySelector('.hero-build-ticker');
  if (heroTicker) statObserver.observe(heroTicker);

  // 10. Silverstone Countdown
  const silverstoneEventDate = new Date('2027-07-15T08:00:00Z');
  const padZero = num => String(num).padStart(2, '0');

  const updateCountdown = () => {
    const diff = Math.max(silverstoneEventDate - new Date(), 0);
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    const el = id => document.getElementById(id);
    if (el('cd-days')) el('cd-days').textContent = d;
    if (el('cd-hours')) el('cd-hours').textContent = padZero(h);
    if (el('cd-mins')) el('cd-mins').textContent = padZero(m);
    if (el('cd-secs')) el('cd-secs').textContent = padZero(s);
  };
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // 11. Progress Bars Fill Animation
  const progressObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.progress-fill').forEach(bar => {
          const width = bar.dataset.width;
          bar.style.width = `${width}%`;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  const devProgress = document.querySelector('.dev-progress');
  if (devProgress) progressObserver.observe(devProgress);

  // 12. Engineering 7 Subsystems Rolling Counter
  const engineeringSection = document.getElementById('engineeringSection');
  const rollingNumeral = document.getElementById('rollingNumeral');
  const subBlocks = document.querySelectorAll('.subsystem-editorial-block');

  if (engineeringSection && rollingNumeral && subBlocks.length > 0) {
    const subObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const num = entry.target.dataset.num;
          if (num) {
            rollingNumeral.textContent = num;
            rollingNumeral.style.transform = 'scale(1.1)';
            setTimeout(() => { rollingNumeral.style.transform = 'scale(1)'; }, 200);
          }
          subBlocks.forEach(b => b.classList.remove('active'));
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0, rootMargin: '-49% 0px -49% 0px' });

    subBlocks.forEach(block => subObserver.observe(block));
  }

  // 13. Schematic Hotspots Interactive Nodes
  document.querySelectorAll('.schematic-node').forEach(node => {
    node.addEventListener('click', () => {
      const callout = node.querySelector('.node-callout');
      if (callout) {
        const isVisible = callout.style.opacity === '1';
        callout.style.opacity = isVisible ? '0' : '1';
        callout.style.transform = isVisible ? 'translateX(-50%) translateY(6px)' : 'translateX(-50%) translateY(0)';
      }
    });
  });

  // 14. Paddock Media Gallery Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterVal = btn.dataset.filter;
      galleryItems.forEach((item, index) => {
        const matches = filterVal === 'all' || item.dataset.category === filterVal;
        item.style.transition = `opacity 0.35s ease ${index * 0.03}s, transform 0.35s ease ${index * 0.03}s`;
        if (matches) {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
          item.style.pointerEvents = 'auto';
        } else {
          item.style.opacity = '0.12';
          item.style.transform = 'scale(0.96)';
          item.style.pointerEvents = 'none';
        }
      });
    });
  });

  // 15. Cinema Launch Film Modal
  const playMainFilmBtn = document.getElementById('playMainFilmBtn');
  const videoModal = document.getElementById('videoModal');
  const closeVideoModal = document.getElementById('closeVideoModal');
  const modalVideoPlayer = document.getElementById('modalVideoPlayer');

  if (videoModal && modalVideoPlayer) {
    const openModal = () => {
      videoModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      modalVideoPlayer.currentTime = 0;
      modalVideoPlayer.play().catch(() => {});
    };
    const closeModal = () => {
      videoModal.classList.remove('open');
      document.body.style.overflow = '';
      modalVideoPlayer.pause();
    };
    if (playMainFilmBtn) playMainFilmBtn.addEventListener('click', openModal);
    if (closeVideoModal) closeVideoModal.addEventListener('click', closeModal);
    videoModal.addEventListener('click', e => { if (e.target === videoModal) closeModal(); });
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && videoModal.classList.contains('open')) closeModal();
    });
  }

  // 16. Pit Wall Radio Contact Form
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm && formSuccess && submitBtn) {
    contactForm.addEventListener('submit', async e => {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.75';
      submitBtn.textContent = currentLang === 'ar' ? 'جارِ الإرسال...' : 'Transmitting...';
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        
        if (response.ok) {
          submitBtn.style.display = 'none';
          formSuccess.style.display = 'block';
          contactForm.reset();
        } else {
          submitBtn.textContent = 'Error. Try Again.';
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
        }
      } catch (error) {
        submitBtn.textContent = 'Network Error.';
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
      }
    });
  }

  // 17. 3D Card Tilt Micro-interactions
  document.querySelectorAll('.spec-card, .dept-card, .value-card, .academic-logo-card, .step-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      card.style.transform = `perspective(800px) rotateX(${-y * 2.5}deg) rotateY(${x * 2.5}deg) translateY(-3px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.35s ease';
    });
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });


});

// 18. Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('PWA ServiceWorker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('PWA ServiceWorker registration failed:', error);
      });
  });
}
