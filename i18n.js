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
    'nav.portal': 'Portal',
    'nav.sponsors': 'Sponsors',
    'nav.join': 'Join Us',
    'nav.joinFull': 'Join the Team &rarr;',
    'nav.partnerBtn': 'Partner With Us',

    // Hero (index.html)
    'hero.badge': 'VELOX Formula Student Team &bull; Zagazig National University',
    'hero.title': 'Welcome to VELOX Formula Student Team',
    'hero.tagline': 'The first team at Zagazig National University targeting international motorsport competitions. We go beyond theory—designing, building, and racing an authentic formula car to represent our university on the world stage.',
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
    'join.email': 'Personal Email<span class="req">*</span>',
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
    'join.year1': 'Year 1 (First Year)',
    'join.year2': 'Year 2 (Second Year)',
    'join.year3': 'Year 3 (Third Year)',
    'join.year4': 'Year 4 (Fourth Year / Senior)',
    'join.alumni': 'Graduate / Alumni',
    'join.subteamsHeader': 'Subteam Preferences & Evaluation',
    'join.subteamsDesc': 'Choose your primary (1st choice) and secondary (2nd choice) subteams. Your application and interview evaluation will focus primarily on your 1st choice; your 2nd choice serves as an alternative technical or operational pathway.',
    'join.subteam1': '1st Choice Sub-team<span class="req">*</span>',
    'join.subteam2': '2nd Choice Sub-team<span class="req">*</span>',
    'join.subteamSelect1': 'Select 1st choice',
    'join.subteamSelect2': 'Select 2nd choice',
    'join.timeCommitment': 'Weekly Time Commitment<span class="req">*</span>',
    'join.timeL3': '< 3 hours',
    'join.time35': '3 to 5 hrs',
    'join.time510': '5 to 10 hrs',
    'join.time10p': '10+ hrs',
    'join.priorFs': 'Have you ever joined a Formula Student team before?',
    'join.priorFsDetails': 'Previous Team, Subteam & Role (Optional)',
    'join.priorFsDetailsPh': 'e.g. Helwan Racing Team — Powertrain Member (2024)',
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
    'team.filterOps': 'Operations Branch (2)',
    'team.branchTechTitle': 'Technical Engineering Branch',
    'team.branchOpsTitle': 'Operations & Business Branch',
    'team.leaderRole': 'Leader',

    // Team Roles & Departments (for dynamic org chart)
    'role.Team Leader': 'Team Leader',
    'role.Vice Team Leader': 'Vice Team Leader',
    'role.Technical Leader': 'Technical Leader',
    'role.Managerial Leader': 'Managerial Leader',
    'role.Powertrain Leader': 'Powertrain Leader',
    'role.Electrical Leader': 'Electrical Leader',
    'role.Media Lead': 'Media Lead',
    'nav.portal': 'Portal',

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
    'sub.Wiring & Harness': 'Wiring & Harness',
    'sub.Control & Embedded System': 'Control & Embedded System',
    'sub.Wiring Loom': 'Wiring & Harness',
    'sub.DAQ & Telemetry': 'Control & Embedded System',
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
    'footer.arena': 'Formula Student &bull; Silverstone',

    // Portal (portal.html)
    'portal.loginTitle': 'Member Portal Access',
    'portal.loginSub': 'Formula Student Engineering & Operations',
    'portal.username': 'Username',
    'portal.password': 'Password',
    'portal.signInBtn': 'Sign In to Portal',
    'portal.demoAccounts': 'Quick Access Accounts',
    'portal.signOut': 'Sign Out',
    'portal.changePass': 'Change Password',
    'portal.editPhoto': 'Edit Photo',
    'portal.uploadData': 'Upload Deliverable',
    'portal.notifications': 'Notifications',
    'portal.clearAll': 'Clear All',

    // Portal Navigation Tabs
    'tab.dashboard': 'Dashboard',
    'tab.presidential': 'Presidential Hub',
    'tab.vault': 'Data Vault',
    'tab.tasks': 'Task Center',
    'tab.competition': 'Leaderboard',
    'tab.invitations': 'Invitations',
    'tab.admin': 'Admin Dashboard',

    // Fatima Salman Deck
    'deck.title': 'Supreme Leadership Command',
    'deck.jurisdiction': 'Universal executive jurisdiction over all technical engineering and operations divisions.',
    'deck.btnDirective': 'Issue Directive',
    'deck.btnClearAll': 'Authorize All',
    'deck.btnRecruitment': 'Recruitment Center',
    'deck.btnAudit': 'System Telemetry',
    'deck.roster': 'Active Crew',
    'deck.pipeline': 'Recruitment Pipeline',
    'deck.directives': 'Active Directives',
    'deck.security': 'System Security',

    // Dashboard Overview
    'kpi.velocity': 'Velocity Points',
    'kpi.vault': 'Accessible Files',
    'kpi.sprints': 'Active Sprints',
    'kpi.pending': 'Pending Approvals',
    'dash.milestoneTitle': 'Silverstone 2026 Milestone Tracker',
    'dash.milestoneDesc': 'Internal engineering and management portal. Deliverables are organized strictly by branch and subteam.',
    'dash.btnBrowse': 'Browse Vault',
    'dash.btnTasks': 'View Tasks',
    'dash.btnRankings': 'View Rankings',
    'dash.approvalsTitle': 'Data Access Approvals Queue',
    'dash.notifTitle': 'Executive Activity Feed',

    // Data Vault
    'vault.title': 'Engineering & Operations Vault',
    'vault.desc': 'Upload, organize, and access files. Protected files require leader clearance.',
    'vault.filterAll': 'All Files',
    'vault.filterTech': 'Technical Engineering',
    'vault.filterOps': 'Operations & Business',
    'vault.thName': 'Deliverable Name',
    'vault.thCategory': 'Branch & Category',
    'vault.thUploader': 'Uploaded By',
    'vault.thDate': 'Date',
    'vault.thClearance': 'Clearance',
    'vault.thAction': 'Action',

    // Task Center
    'tasks.title': 'Sprint Task Center',
    'tasks.desc': 'Deliver engineering tasks on schedule to earn bonus points.',
    'tasks.assignBtn': 'Assign Task',
    'tasks.submitBtn': 'Submit Deliverable',

    // Leaderboard
    'comp.title': 'Speed & Deliverables Leaderboard',
    'comp.desc': 'Formula Student excellence is measured in speed, precision, and relentless execution.',
    'comp.thRank': 'Rank',
    'comp.thMember': 'Member',
    'comp.thSubteam': 'Subteam',
    'comp.thCompleted': 'Completed Tasks',
    'comp.thPoints': 'Velocity Points',
    'comp.thBadges': 'Badges',

    // Presidential Hub
    'pres.title': 'Presidential Command Hub',
    'pres.desc': 'Executive directive management platform for Team Leadership.',
    'pres.formTitle': 'Issue Sovereign Directive',
    'pres.formDesc': 'Broadcast a high-priority executive directive across the team.',
    'pres.inputTitle': 'Directive Title',
    'pres.inputScope': 'Category / Scope',
    'pres.inputPriority': 'Priority Level',
    'pres.inputContent': 'Directive Mandate Content',
    'pres.broadcastBtn': 'Broadcast Directive',
    'pres.activeTitle': 'Active Directives & Signatures',

    // Admin Dashboard
    'admin.title': 'Executive Admin Dashboard',
    'admin.desc': 'Centralized governance for team accounts, candidate recruitment, and system audit.',
    'admin.kpiAccounts': 'Active Accounts',
    'admin.kpiFiles': 'Vault Deliverables',
    'admin.kpiRequests': 'Pending Access',
    'admin.kpiCompleted': 'Completed Sprints',
    'admin.recruitmentTitle': 'Recruitment & Candidate Pipeline',
    'admin.recruitmentDesc': 'Review candidate applications, schedule interviews, and accept members into team structure.',
    'admin.cleanBtn': 'Clean Test Applicants',
    'admin.exportBtn': 'Export CSV',
    'admin.toggleIntakeBtn': 'Toggle Public Intake',
    'admin.thCandidate': 'Candidate',
    'admin.thSubteam': 'Desired Department',
    'admin.thDate': 'Applied Date',
    'admin.thStatus': 'Status',
    'admin.thActions': 'Actions',
    'admin.rosterTitle': 'Member Roster & Accounts Governance',
    'admin.telemetryTitle': 'Security & Audit Telemetry Stream',

    // Status Terms
    'status.pending': 'Pending',
    'status.accepted': 'Accepted',
    'status.interview': 'Interview',
    'status.rejected': 'Rejected',
    'status.active': 'Active',
    'status.completed': 'Completed',
    'status.suspended': 'Suspended',
    'status.open': 'Open',
    'status.closed': 'Closed',
    'status.approved': 'Approved',
    'status.denied': 'Denied',
    'status.overdue': 'Overdue',
    'status.onTime': 'On Time',
    'status.provisioned': 'Provisioned',

    // Directive Categories & Priorities
    'directive.milestone': 'Silverstone Milestone',
    'directive.scrutineering': 'Technical Scrutineering',
    'directive.manufacturing': 'Manufacturing & Workshop',
    'directive.sponsorship': 'Sponsorship & PR',
    'directive.emergency': 'Executive Emergency Order',
    'priority.sovereign': 'Sovereign Order (Mandatory)',
    'priority.critical': 'Critical Priority',
    'priority.operational': 'Standard Operational',

    // Scopes and Roles
    'scope.admin.title': 'Executive Administrator • Recruitment & System Command',
    'scope.admin.desc': 'Universal omni-directional command over recruitment pipeline, signup controls, candidate admission, and account governance.',
    'scope.fatima.title': 'Team Leader • Executive Governance Command',
    'scope.fatima.desc': 'Universal omni-directional authority across all technical, operational, and institutional divisions. Authorized to modify all team roles, approve all data downloads, and issue official team credentials.',
    'scope.karim.title': 'Vice Team Leader • Operations & Build Governance',
    'scope.karim.desc': 'Omni-directional operational oversight, workshop manufacturing discipline, and static event strategy.',
    'scope.romy.title': 'Technical Leader • Chief Engineering Command',
    'scope.romy.desc': 'Full command over Technical Branch (Body & Chassis, Vehicle Dynamics, Powertrain, Electrical).',
    'scope.moaaz.title': 'Dual Command • Managerial Leader & Powertrain Subteam Lead',
    'scope.moaaz.desc': 'Dual leadership command: Managerial Branch (HR, Media & PR, Business) plus Powertrain engineering.',
    'scope.hassan.title': 'Media & PR Lead • Visual Identity & Brand Architecture',
    'scope.hassan.desc': 'Subteam command over Media, photography, racecar documentary films, and social campaigns.',
    'scope.member.title': 'Team Member • Specialist',
    'scope.member.desc': 'Assigned engineer/operations member. Deliver sprint tasks on time to earn Velocity Points and badges.',

    // Badges & Pills
    'pill.universalCommand': 'Universal Command',
    'pill.universalAuth': 'Universal Authority',
    'pill.execOps': 'Executive Operations',
    'pill.techCommand': 'Technical Command',
    'pill.dualCommand': 'Dual Branch Command',
    'pill.mediaLead': 'Media & PR Lead',
    'pill.specialistMember': 'Specialist Member',
    'badge.p1': 'P1 Velocity Champion',
    'badge.podium': 'Podium Sprint',
    'badge.fast': 'Fast Turnaround',
    'badge.roster': 'Active Roster',

    // Buttons & Actions
    'btn.broadcastDirective': 'Broadcast Decree',
    'btn.revokeDirective': 'Revoke Directive',
    'btn.acknowledge': 'Acknowledge Directive',
    'btn.acknowledged': 'Acknowledged by you',
    'btn.delete': 'Delete',
    'btn.approve': 'Approve',
    'btn.deny': 'Deny',
    'btn.requestAccess': 'Request Clearance',
    'btn.download': 'Download',
    'btn.viewDossier': 'View Dossier',
    'btn.acceptProvision': 'Accept & Provision',
    'btn.markInterview': 'Schedule Interview',
    'btn.markReject': 'Reject',
    'btn.markComplete': 'Mark Complete',
    'btn.openRecruitment': 'Open Recruitment',
    'btn.closeRecruitment': 'Close Recruitment',
    'btn.savePhoto': 'Save Profile Photo',
    'btn.cancel': 'Cancel',

    // Empty States
    'empty.noFiles': 'No deliverables found in this category.',
    'empty.noTasks': 'No sprint tasks assigned yet.',
    'empty.noApplicants': 'No candidate submissions in this view.',
    'empty.noDirectives': 'No active presidential directives at this moment.',
    'empty.noInvitations': 'No enlistment invitation passes issued yet.',
    'empty.noRequests': 'No pending data access requests awaiting review.',

    // Scope badges
    'scope.admin.badge': 'Executive Omni-Command',
    'scope.fatima.badge': 'Universal Authority',
    'scope.karim.badge': 'Executive Operations',
    'scope.romy.badge': 'Technical Command',
    'scope.moaaz.badge': 'Dual Branch Command',
    'scope.hassan.badge': 'Media & PR Lead',
    'scope.member.badge': 'Specialist Member',

    // Directives & Decree
    'directive.mandate_label': 'Executive Presidential Mandate',
    'directive.crew_ack_count': 'crew members acknowledged',
    'directive.acknowledged_by_you': 'Acknowledged by you',
    'directive.acknowledge_btn': 'Acknowledge Directive',
    'directive.revoke_btn': 'Revoke Directive',
    'directive.notification_title': 'Presidential Directive',
    'directive.issued_alert': 'Sovereign Directive Issued!',

    // Vault
    'vault.empty_title': 'Vault Ready for Real Season Files',
    'vault.empty_desc': 'Zero files currently uploaded. Leaders and authorized crew can click "+ Upload New Deliverable" to store engineering CAD, telemetry data, or PR materials.',
    'vault.status_authorized': 'Authorized',
    'vault.status_pending': 'Pending Review',
    'vault.status_requested': 'Requested',
    'vault.status_restricted': 'Restricted',
    'vault.download_btn': 'Download File',
    'vault.request_btn': 'Request Access',

    // Tasks
    'tasks.empty_title': 'Sprint Board Ready for Live Deliverables',
    'tasks.empty_desc': 'Zero active sprint tasks. Department leaders can assign engineering and operations deliverables with deadlines using "+ Assign New Task".',
    'tasks.completed_on_time': 'Completed On Time',
    'tasks.overdue_by': 'Overdue by',
    'tasks.remaining_urgent': 'remaining (Urgent)',
    'tasks.days_remaining': 'days remaining',
    'tasks.completed_awarded': 'Completed & Points Awarded',
    'tasks.submit_work': 'Upload Deliverables & Claim Points',
    'tasks.delete_btn': 'Delete',

    // Competition
    'comp.empty_title': 'VELOX Season 2026 Standings Open',
    'comp.empty_desc': 'Points currently zeroed for authentic season start. Podium positions and Velocity Points will be awarded dynamically as engineering and managerial sprint deliverables are submitted, verified, and approved!',
    'badge.gold_engineer': 'Gold Engineer',

    // Invitations
    'invitations.empty_title': 'No Official Invitations Issued Yet',
    'invitations.empty_desc': 'Use the generator above to create an official credential invitation link for candidate recruits.',
    'invitations.open_page': 'Open Standalone Invitation Page',

    // Admin & Dossier
    'admin.intake_open': 'Intake Active (Open)',
    'admin.intake_closed': 'Intake Suspended (Closed)',
    'admin.recruitment_close': 'Close Recruitment',
    'admin.recruitment_open': 'Open Recruitment',
    'admin.prior_fs': 'Prior FS',
    'admin.provisioned': 'Provisioned',
    'admin.dossier_prior_fs': 'Yes — Candidate has prior Formula Student team experience',
    'admin.dossier_no_fs': 'No prior Formula Student experience',
    'admin.accept_candidate': 'Accept & Provision Member Account',
    'admin.approve_access': 'Approve Access',
    'admin.deny_access': 'Deny',
    'admin.verified_complete': 'Verified Complete',
    'admin.status_open': 'OPEN',
    'admin.status_paused': 'PAUSED',
    'common.no': 'No',

    // Alerts
    'alert.instant_clearance': 'Instant Clearance Complete: Approved',
    'alert.access_requests': 'access request(s).',
    'alert.pipeline_sanitized': 'Pipeline Sanitized',
    'alert.records_removed': 'test applicant record(s) removed.',
    'alert.candidate_accepted': 'Candidate Accepted!',
    'alert.member_provisioned': 'Member account successfully provisioned',
    'alert.temp_pwd': 'Temporary Password',
    'alert.ready_signin': 'The member can now sign in immediately to the Inside Portal.'
  },

  ar: {
    // Nav
    'nav.brand': 'فريق فيلوكس للسباقات',
    'nav.home': 'الرئيسية',
    'nav.about': 'عن الفريق',
    'nav.team': 'الهيكل التنظيمي',
    'nav.portal': 'بوابة الفريق',
    'nav.sponsors': 'الشركاء والرعاة',
    'nav.join': 'انضم للفريق',
    'nav.joinFull': 'انضم لطاقم العمل &larr;',
    'nav.partnerBtn': 'كن شريكاً لنا',

    // Hero (index.html)
    'hero.badge': 'فريق فيلوكس فورمولا ستيودنت &bull; جامعة الزقازيق الأهلية',
    'hero.title': 'أهلاً بكم في فريق <span style="display: inline-block; white-space: nowrap; direction: ltr;">VELOX Formula Student</span>',
    'hero.tagline': 'أول فريق بجامعة الزقازيق الأهلية ينافس في مسابقات فورمولا ستيودنت الدولية. نتجاوز حدود النظريات—نصمّم، نصنّع، ونسابق بسيارة فورمولا حقيقية لتمثيل الجامعة ومصر عالمياً.',
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
    'join.email': 'البريد الإلكتروني الشخصي<span class="req">*</span>',
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
    'join.year1': 'السنة الأولى (Year 1)',
    'join.year2': 'السنة الثانية (Year 2)',
    'join.year3': 'السنة الثالثة (Year 3)',
    'join.year4': 'السنة الرابعة / التخرج (Year 4)',
    'join.alumni': 'خريج / Alumni',
    'join.subteamsHeader': 'تفضيلات الأقسام وتحديد الرغبات',
    'join.subteamsDesc': 'اختر رغبتك الأساسية (الرغبة الأولى) والبديلة (الرغبة الثانية). سيتم تقييم طلبك ومقابلتك في المقام الأول بناءً على رغبتك الأولى، وتُعد الرغبة الثانية مساراً بديلاً في حال اكتمال العدد المطلوب في القسم.',
    'join.subteam1': 'الرغبة الأولى للقسم الفرعي<span class="req">*</span>',
    'join.subteam2': 'الرغبة الثانية للقسم الفرعي<span class="req">*</span>',
    'join.subteamSelect1': 'اختر الرغبة الأولى',
    'join.subteamSelect2': 'اختر الرغبة الثانية',
    'join.timeCommitment': 'الوقت المتاح أسبوعياً للفريق<span class="req">*</span>',
    'join.timeL3': 'أقل من ٣ ساعات',
    'join.time35': '٣ إلى ٥ ساعات',
    'join.time510': '٥ إلى ١٠ ساعات',
    'join.time10p': '١٠+ ساعات',
    'join.priorFs': 'هل سبق لك الانضمام إلى فريق فورمولا ستيودنت من قبل؟',
    'join.priorFsDetails': 'اسم الفريق السابق، القسم والمسؤولية (اختياري)',
    'join.priorFsDetailsPh': 'مثال: Helwan Racing Team — Powertrain Member (2024)',
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
    'team.filterOps': 'الإدارة والعمليات (٢)',
    'team.branchTechTitle': 'القطاع الهندسي والتقني',
    'team.branchOpsTitle': 'قطاع الإدارة والعمليات',
    'team.leaderRole': 'مسؤول القسم',

    // Team Roles & Departments (for dynamic org chart)
    'role.Team Leader': 'قائد الفريق',
    'role.Vice Team Leader': 'نائب قائد الفريق',
    'role.Technical Leader': 'المدير التقني',
    'role.Managerial Leader': 'المدير الإداري',
    'role.Powertrain Leader': 'مسؤول منظومة الدفع',
    'role.Electrical Leader': 'مسؤول الأنظمة الكهربائية',
    'role.Media Lead': 'مسؤول الإعلام والتسويق',
    'nav.portal': 'بوابة الفريق',

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
    'sub.Wiring & Harness': 'الضفائر والأسلاك الكهربائية (Wiring & Harness)',
    'sub.Control & Embedded System': 'أنظمة التحكم والمتحكمات المدمجة (Control & Embedded)',
    'sub.Wiring Loom': 'الضفائر والأسلاك الكهربائية',
    'sub.DAQ & Telemetry': 'أنظمة التحكم والمتحكمات المدمجة',
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
    'footer.arena': 'فورمولا ستيودنت &bull; حلبة سيلفرستون',

    // Portal (portal.html)
    'portal.loginTitle': 'تسجيل الدخول إلى البوابة',
    'portal.loginSub': 'هندسة وعمليات فورمولا ستيودنت',
    'portal.username': 'اسم المستخدم',
    'portal.password': 'كلمة المرور',
    'portal.signInBtn': 'دخول إلى البوابة',
    'portal.demoAccounts': 'حسابات سريعة للتجربة',
    'portal.signOut': 'تسجيل الخروج',
    'portal.changePass': 'تغيير كلمة المرور',
    'portal.editPhoto': 'تعديل الصورة',
    'portal.uploadData': 'رفع ملف جديد',
    'portal.notifications': 'الإشعارات',
    'portal.clearAll': 'مسح الكل',

    // Portal Navigation Tabs
    'tab.dashboard': 'لوحة التحكم',
    'tab.presidential': 'المقر الرئاسي',
    'tab.vault': 'خزينة البيانات',
    'tab.tasks': 'مركز المهام',
    'tab.competition': 'لوحة المتصدرين',
    'tab.invitations': 'الدعوات الرسمية',
    'tab.admin': 'لوحة الإدارة',

    // Fatima Salman Deck
    'deck.title': 'القيادة التنفيذية العليا',
    'deck.jurisdiction': 'صلاحيات قيادية شاملة على كافة الأقسام الهندسية والعملياتية والإدارية.',
    'deck.btnDirective': 'إصدار توجيه',
    'deck.btnClearAll': 'اعتماد الكل',
    'deck.btnRecruitment': 'مركز التوظيف',
    'deck.btnAudit': 'سجل الأمان',
    'deck.roster': 'أعضاء الفريق',
    'deck.pipeline': 'طلبات الانضمام',
    'deck.directives': 'التوجيهات النشطة',
    'deck.security': 'حالة الأمان',

    // Dashboard Overview
    'kpi.velocity': 'نقاط السرعة',
    'kpi.vault': 'الملفات المتاحة',
    'kpi.sprints': 'المهام الجارية',
    'kpi.pending': 'طلبات معلقة',
    'dash.milestoneTitle': 'مؤشر أهداف سيلفرستون ٢٠٢٦',
    'dash.milestoneDesc': 'البوابة الداخلية للهندسة والإدارة. تصنف البيانات بدقة حسب الفرع والفريق الفرعي.',
    'dash.btnBrowse': 'تصفح الخزينة',
    'dash.btnTasks': 'عرض المهام',
    'dash.btnRankings': 'عرض الترتيب',
    'dash.approvalsTitle': 'قائمة اعتمادات الوصول للملفات',
    'dash.notifTitle': 'سجل النشاط التنفيذي',

    // Data Vault
    'vault.title': 'خزينة الملفات والتصاميم',
    'vault.desc': 'رفع وتنظيم وتصفح الملفات. تتطلب الملفات المحمية تصريحاً من القيادة.',
    'vault.filterAll': 'كافة الملفات',
    'vault.filterTech': 'الهندسة التقنية',
    'vault.filterOps': 'العمليات والإدارة',
    'vault.thName': 'اسم الملف',
    'vault.thCategory': 'الفرع والتصنيف',
    'vault.thUploader': 'رُفع بواسطة',
    'vault.thDate': 'التاريخ',
    'vault.thClearance': 'التصريح',
    'vault.thAction': 'الإجراء',

    // Task Center
    'tasks.title': 'مركز مهام وسبرنتات الفريق',
    'tasks.desc': 'سلّم المهام الهندسية في موعدها لكسب نقاط السرعة والشارات التقديرية.',
    'tasks.assignBtn': 'تكليف بمهمة جديدة',
    'tasks.submitBtn': 'تسليم المهمة',

    // Leaderboard
    'comp.title': 'لوحة شرف الأداء وسرعة التسليم',
    'comp.desc': 'يقاس التميز في فورمولا ستيودنت بالسرعة والدقة والتنفيذ المتواصل.',
    'comp.thRank': 'الترتيب',
    'comp.thMember': 'العضو',
    'comp.thSubteam': 'الفريق الفرعي',
    'comp.thCompleted': 'المهام المنجزة',
    'comp.thPoints': 'مجموع النقاط',
    'comp.thBadges': 'الأوسمة',

    // Presidential Hub
    'pres.title': 'المقر الرئاسي والتوجيهات العليا',
    'pres.desc': 'منصة إدارة التوجيهات والقرارات السيادية لقيادة الفريق.',
    'pres.formTitle': 'إصدار توجيه رئاسي ملزم',
    'pres.formDesc': 'بث توجيه تنفيذي عاجل يظهر لكافة أعضاء الفريق في البوابة.',
    'pres.inputTitle': 'عنوان التوجيه',
    'pres.inputScope': 'نطاق التوجيه',
    'pres.inputPriority': 'مستوى الأهمية',
    'pres.inputContent': 'نص القرار والمتطلبات',
    'pres.broadcastBtn': 'بث التوجيه للفريق',
    'pres.activeTitle': 'التوجيهات النشطة والتوقيعات',

    // Admin Dashboard
    'admin.title': 'لوحة الإدارة التنفيذية',
    'admin.desc': 'مركز الحوكمة الموحد لإدارة الحسابات وتوظيف المرشحين وتدقيق الأمان.',
    'admin.kpiAccounts': 'الحسابات النشطة',
    'admin.kpiFiles': 'ملفات الخزينة',
    'admin.kpiRequests': 'طلبات معلقة',
    'admin.kpiCompleted': 'مهام منجزة',
    'admin.recruitmentTitle': 'مركز إدارة التوظيف والمتقدمين',
    'admin.recruitmentDesc': 'مراجعة طلبات التوظيف، جدولة المقابلات، وقبول الأعضاء في الهيكل التنظيمي.',
    'admin.cleanBtn': 'حذف البيانات التجريبية',
    'admin.exportBtn': 'تصدير CSV',
    'admin.toggleIntakeBtn': 'فتح / إيقاف التقديم',
    'admin.thCandidate': 'المرشح',
    'admin.thSubteam': 'القسم المطلوب',
    'admin.thDate': 'تاريخ التقديم',
    'admin.thStatus': 'الحالة',
    'admin.thActions': 'الإجراءات',
    'admin.rosterTitle': 'سجل الأعضاء وحوكمة الحسابات',
    'admin.telemetryTitle': 'سجل تدقيق الأمان والعمليات',

    // Status Terms
    'status.pending': 'قيد المراجعة',
    'status.accepted': 'مقبول',
    'status.interview': 'مقابلة شخصية',
    'status.active': 'نشط',
    'status.completed': 'مكتمل',
    'status.suspended': 'موقوف',
    'status.open': 'مفتوح',
    'status.closed': 'مغلق',
    'status.approved': 'معتمد',
    'status.denied': 'مرفوض',
    'status.overdue': 'متأخر',
    'status.onTime': 'في الموعد',
    'status.provisioned': 'تم إنشاء الحساب',

    // Directive Categories & Priorities
    'directive.milestone': 'مرحلة سيلفرستون',
    'directive.scrutineering': 'الفحص الفني',
    'directive.manufacturing': 'التصنيع والورشة',
    'directive.sponsorship': 'الرعاية والإعلام',
    'directive.emergency': 'أمر تنفيذي طارئ',
    'priority.sovereign': 'قرار سيادي (إلزامي)',
    'priority.critical': 'أولوية قصوى',
    'priority.operational': 'تشغيلي معتاد',

    // Scopes and Roles
    'scope.admin.title': 'المشرف التنفيذي • إدارة التوظيف والنظام',
    'scope.admin.desc': 'صلاحيات شاملة على مسار التوظيف وإعدادات التسجيل وقبول المرشحين وإدارة الحسابات.',
    'scope.fatima.title': 'قائد الفريق • القيادة التنفيذية العليا',
    'scope.fatima.desc': 'سلطة تنفيذية شاملة على كافة الأقسام التقنية والعملياتية والمؤسسية. صلاحية كاملة لتعديل الأدوار واعتماد تنزيل البيانات وإصدار التكليفات.',
    'scope.karim.title': 'نائب قائد الفريق • إدارة العمليات والتصنيع',
    'scope.karim.desc': 'إشراف تشغيلي شامل على التصنيع في الورشة وإدارة الفعاليات الثابتة وتنسيق الفرق.',
    'scope.romy.title': 'القائد التقني • القيادة الهندسية العامة',
    'scope.romy.desc': 'قيادة كاملة للفرع التقني (الهيكل والديناميكا، ديناميكا المركبة، منظومة الدفع، والكهرباء).',
    'scope.moaaz.title': 'قيادة مزدوجة • القائد الإداري وقائد منظومة الدفع',
    'scope.moaaz.desc': 'إدارة الفرع الإداري (الموارد البشرية، الإعلام، إدارة الأعمال) بالإضافة إلى قيادة فريق منظومة الدفع.',
    'scope.hassan.title': 'مسؤول الإعلام والعلاقات • الهوية البصرية والعلامة',
    'scope.hassan.desc': 'إدارة الإنتاج المرئي، التصوير، الأفلام الوثائقية لبناء السيارة، والحملات الإعلامية.',
    'scope.member.title': 'عضو الفريق • مهندس / إداري متخصص',
    'scope.member.desc': 'عضو متخصص في الفريق. أكمل مهام السبرنت في موعدها لكسب نقاط السرعة والأوسمة التقديرية.',

    // Badges & Pills
    'pill.universalCommand': 'صلاحية شاملة',
    'pill.universalAuth': 'سلطة عليا',
    'pill.execOps': 'إدارة تنفيذية',
    'pill.techCommand': 'قيادة تقنية',
    'pill.dualCommand': 'قيادة فرعين',
    'pill.mediaLead': 'مسؤول الإعلام',
    'pill.specialistMember': 'عضو متخصص',
    'badge.p1': 'بطل السرعة الأول',
    'badge.podium': 'سبرنت المنصة',
    'badge.fast': 'تنفيذ سريع',
    'badge.roster': 'عضو نشط',

    // Buttons & Actions
    'btn.broadcastDirective': 'بث القرار التنفيذي',
    'btn.revokeDirective': 'إلغاء التوجيه',
    'btn.acknowledge': 'توقيع واستلام التوجيه',
    'btn.acknowledged': 'تم التوقيع والاستلام',
    'btn.delete': 'حذف',
    'btn.approve': 'اعتماد',
    'btn.deny': 'رفض',
    'btn.requestAccess': 'طلب تصريح',
    'btn.download': 'تنزيل',
    'btn.viewDossier': 'عرض الملف',
    'btn.acceptProvision': 'قبول وإنشاء حساب',
    'btn.markInterview': 'جدولة مقابلة',
    'btn.markReject': 'رفض',
    'btn.markComplete': 'تأكيد الإنجاز',
    'btn.openRecruitment': 'فتح باب التقديم',
    'btn.closeRecruitment': 'إيقاف التقديم',
    'btn.savePhoto': 'حفظ الصورة الشخصية',
    'btn.cancel': 'إلغاء',

    // Empty States
    'empty.noFiles': 'لا توجد ملفات في هذا القسم حالياً.',
    'empty.noTasks': 'لا توجد مهام مسندة حالياً.',
    'empty.noApplicants': 'لا توجد طلبات تقديم في هذا العرض.',
    'empty.noDirectives': 'لا توجد توجيهات رئاسية نشطة حالياً.',
    'empty.noInvitations': 'لم يتم إصدار بطاقات دعوة حتى الآن.',
    'empty.noRequests': 'لا توجد طلبات تصريح معلقة بانتظار الاعتماد.',

    // Scope badges
    'scope.admin.badge': 'القيادة التنفيذية الشاملة',
    'scope.fatima.badge': 'السلطة السيادية المطلقة',
    'scope.karim.badge': 'العمليات التنفيذية',
    'scope.romy.badge': 'القيادة الفنية الهندسية',
    'scope.moaaz.badge': 'قيادة الفرعين المزدوجة',
    'scope.hassan.badge': 'قيادة الإعلام والعلاقات العامة',
    'scope.member.badge': 'عضو متخصص',

    // Directives & Decree
    'directive.mandate_label': 'تفويض رئاسي تنفيذي سيادي',
    'directive.crew_ack_count': 'أعضاء أكدوا الاطلاع',
    'directive.acknowledged_by_you': 'تم تأكيد الاطلاع من قبلك',
    'directive.acknowledge_btn': 'تأكيد الاطلاع على التوجيه',
    'directive.revoke_btn': 'إلغاء التوجيه',
    'directive.notification_title': 'توجيه رئاسي',
    'directive.issued_alert': 'تم إصدار التوجيه السيادي!',

    // Vault
    'vault.empty_title': 'مستودع البيانات جاهز لملفات الموسم الرسمية',
    'vault.empty_desc': 'لا توجد ملفات مرفوعة حالياً. يمكن للقادة وأعضاء الفريق المصرح لهم النقر على "+ رفع ملف جديد" لحفظ ملفات CAD أو بيانات التيليمتري أو ملفات العلاقات العامة.',
    'vault.status_authorized': 'مصرح بالوصول',
    'vault.status_pending': 'قيد المراجعة',
    'vault.status_requested': 'تم الطلب',
    'vault.status_restricted': 'مقيد الوصول',
    'vault.download_btn': 'تنزيل الملف',
    'vault.request_btn': 'طلب تصريح وصول',

    // Tasks
    'tasks.empty_title': 'لوحة المهام جاهزة للتسليمات المباشرة',
    'tasks.empty_desc': 'لا توجد مهام نشطة حالياً. يمكن لرؤساء الأقسام إسناد المهام الهندسية والتشغيلية مع تحديد المواعيد النهائية عبر "+ إسناد مهمة جديدة".',
    'tasks.completed_on_time': 'مكتمل في الموعد المحدد',
    'tasks.overdue_by': 'متأخر بمقدار',
    'tasks.remaining_urgent': 'متبقي (عاجل)',
    'tasks.days_remaining': 'أيام متبقية',
    'tasks.completed_awarded': 'مكتمل ومُنحت النقاط',
    'tasks.submit_work': 'رفع التسليمات واستلام النقاط',
    'tasks.delete_btn': 'حذف',

    // Competition
    'comp.empty_title': 'افتتاح ترتيب موسم فيلوكس 2026',
    'comp.empty_desc': 'تم تصفير النقاط لانطلاقة حقيقية للموسم. سيتم منح مراكز المنصة ونقاط السرعة تلقائياً عند تسليم المهام الهندسية والإدارية واعتمادها!',
    'badge.gold_engineer': 'مهندس ذهبي',

    // Invitations
    'invitations.empty_title': 'لم يتم إصدار بطاقات دعوة رسمية بعد',
    'invitations.empty_desc': 'استخدم منشئ الدعوات أعلاه لإنشاء رابط دعوة رسمي للمرشحين المقبولين.',
    'invitations.open_page': 'فتح صفحة الدعوة المستقلة',

    // Admin & Dossier
    'admin.intake_open': 'استقبال الطلبات نشط (مفتوح)',
    'admin.intake_closed': 'استقبال الطلبات موقوف (مغلق)',
    'admin.recruitment_close': 'إغلاق باب التقديم',
    'admin.recruitment_open': 'فتح باب التقديم',
    'admin.prior_fs': 'خبرة سابقة في FS',
    'admin.provisioned': 'تم إنشاء الحساب',
    'admin.dossier_prior_fs': 'نعم — المرشح يمتلك خبرة سابقة في فرق فورميولا ستيودنت',
    'admin.dossier_no_fs': 'لا توجد خبرة سابقة في فورميولا ستيودنت',
    'admin.accept_candidate': 'قبول المرشح وإنشاء حساب رسمي',
    'admin.approve_access': 'الموافقة على الوصول',
    'admin.deny_access': 'رفض',
    'admin.verified_complete': 'تم التحقق والاكتمال',
    'admin.status_open': 'مفتوح',
    'admin.status_paused': 'موقوف',
    'common.no': 'لا',

    // Alerts
    'alert.instant_clearance': 'اكتمل التصريح الفوري: تمت الموافقة على',
    'alert.access_requests': 'طلب(طلبات) وصول.',
    'alert.pipeline_sanitized': 'تم تعقيم سجلات المتقدمين',
    'alert.records_removed': 'سجل تجريبي تم حذفه بنجاح.',
    'alert.candidate_accepted': 'تم قبول المرشح بنجاح!',
    'alert.member_provisioned': 'تم إنشاء حساب العضو الرسمي',
    'alert.temp_pwd': 'كلمة المرور المؤقتة',
    'alert.ready_signin': 'يمكن للعضو الآن تسجيل الدخول مباشرة إلى البوابة الداخلية.'
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
