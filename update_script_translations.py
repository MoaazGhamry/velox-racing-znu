import re

with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# 1. Update Fast Preloader code in script.js
old_preloader_js_pattern = r'// ── 0\. IMMEDIATE PRELOADER AUTO-DISMISS GUARANTEE.*?// ── SVG ICONS DEFINITIONS'
new_preloader_js = """// ── 0. FAST MINIMAL PRELOADER (AUTOMOTIVE SIMPLICITY) ──
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

// ── SVG ICONS DEFINITIONS"""

js, count = re.subn(old_preloader_js_pattern, new_preloader_js, js, flags=re.DOTALL)
print(f"Preloader JS updated: {count} matches")

# 2. Add keys to translations.en
en_insert = """    // Nav & Common
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
"""

# 3. Add keys to translations.ar
ar_insert = """    // Nav & Common
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
"""

# Insert en_insert right before '    // Divider\n    \'divider.text\':' in en dictionary
js = js.replace("    // Divider\n    'divider.text':", en_insert + "\n    // Divider\n    'divider.text':", 1)

# Insert ar_insert right before '    // Divider\n    \'divider.text\':' in ar dictionary
# Notice there is another '    // Divider' in ar dictionary
parts = js.split("    // Divider\n    'divider.text':")
if len(parts) == 3:
    # parts[0] is before EN divider, parts[1] is between EN and AR divider, parts[2] is after AR divider
    # But wait, we already did the first replace above, so len(parts) will be 2 now!
    pass

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Preloader and EN keys inserted successfully")
