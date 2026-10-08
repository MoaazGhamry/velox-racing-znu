/**
 * VELOX Racing Team Structure Data
 * Zagazig National University — Formula Student UK
 * Single editable source of truth for the Org Chart (/team) and Application Form (/join).
 */

const VELOX_TEAM = {
  executives: [
    {
      id: "leader",
      role: "Team Leader",
      name: "Fatima Salman",
      photo: "",
      bio: "Oversees overall team direction, university relations, and international competition readiness for Formula Student UK."
    },
    {
      id: "vice-leader",
      role: "Vice Team Leader",
      name: "Karim Shaprawy",
      photo: "",
      bio: "Manages day-to-day operations, inter-subsystem workflows, and project timeline execution."
    }
  ],
  technicalLeader: {
    id: "tech-leader",
    role: "Technical Leader",
    name: "Mohamed Romy",
    photo: "",
    bio: "Directs vehicle engineering architecture, rules compliance, CAD packaging, and technical integration."
  },
  technicalDepartments: [
    {
      id: "body-chassis",
      name: "Body & Chassis",
      leader: null,
      subteams: ["Body", "Chassis"],
      description: "Aerodynamic packaging, CFD downforce optimization, and 4130 tubular steel spaceframe chassis fabrication."
    },
    {
      id: "vehicle-dynamics",
      name: "Vehicle Dynamics",
      leader: null,
      subteams: ["Suspension", "Steering", "Brakes"],
      description: "Double-wishbone kinematics, spring-damper tuning, Ackermann steering geometry, and dual-master brake hydraulic balance."
    },
    {
      id: "powertrain",
      name: "Powertrain",
      leader: {
        name: "Moaaz Elghamry",
        role: "Powertrain Leader",
        photo: ""
      },
      subteams: ["Motor", "Transmission"],
      description: "Powertrain mounting, cooling thermal loops, torque transfer, chain drive ratio optimization, and differential assembly."
    },
    {
      id: "electrical",
      name: "Electrical",
      leader: {
        name: "Ali Elgohary",
        role: "Electrical Leader",
        photo: ""
      },
      subteams: ["Wiring Loom", "DAQ & Telemetry"],
      description: "Motorsport Raychem wiring harness, low-voltage power distribution, sensors calibration, and pit wall wireless DAQ."
    }
  ],
  nonTechnical: [
    {
      id: "hr",
      name: "Human Resources (HR)",
      leader: null,
      subteams: ["Recruitment & Interviews", "Member Operations"],
      description: "Talent recruitment, screening, onboarding, attendance tracking, and internal team welfare."
    },
    {
      id: "media",
      name: "Media & PR",
      leader: {
        name: "Mohamed Hassan",
        role: "Media Lead",
        photo: ""
      },
      subteams: ["Photography & Video", "Social Media & Public Relations"],
      description: "Visual identity, photography, cinematic build documentaries, social media broadcasting, and press relations."
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
      description: "Static event presentation, Comprehensive Bill of Materials (CBOM), financial forecasting, and corporate partnerships."
    }
  ]
};

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
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { VELOX_TEAM, getSubteamsList };
}
