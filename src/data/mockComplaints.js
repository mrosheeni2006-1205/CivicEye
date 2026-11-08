export const INITIAL_COMPLAINTS = [
  {
    id: "CE-2024-8901",
    title: "Deep Hazardous Pothole on 4th Avenue Near Central High",
    category: "Road Damage",
    description: "A wide and deep pothole has opened up in the middle lane following heavy rain last night. Vehicles are swerving abruptly into oncoming traffic to avoid it, creating an imminent crash hazard.",
    location: "4th Avenue & Pine Street, Downtown Metro",
    latitude: 37.7749,
    longitude: -122.4194,
    priority: "Critical",
    status: "In Progress",
    reportedDate: "2024-11-06T09:30:00Z",
    formattedDate: "Nov 06, 2024",
    reporter: {
      name: "Alex Morgan",
      email: "alex.morgan@civicmail.org",
      phone: "+1 (555) 234-5678",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    imageUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&auto=format&fit=crop&q=80",
    aiAnalysis: {
      detectedIssue: "Severe Asphalt Pavement Degradation (Pothole)",
      confidenceScore: "96.4%",
      severityLevel: "Tier 1 - Immediate Intervention",
      duplicateDetected: false,
      suggestedDepartment: "Department of Transportation & Municipal Roads"
    },
    department: "Municipal Roads & Infrastructure",
    assignedOfficer: "Eng. Marcus Vance",
    timeline: [
      { date: "Nov 06, 09:30 AM", status: "Submitted", note: "Report lodged via CivicEye Citizen App." },
      { date: "Nov 06, 09:32 AM", status: "Under Review", note: "AI Severity Model classified as Critical (Swerving hazard detected)." },
      { date: "Nov 06, 11:15 AM", status: "Assigned", note: "Dispatched to Rapid Asphalt Repair Unit #4." },
      { date: "Nov 07, 08:00 AM", status: "In Progress", note: "Repair crew on site with hot asphalt compound. Traffic lane diverted." }
    ]
  },
  {
    id: "CE-2024-8894",
    title: "Overflowing Dumpster and Waste Stagnation at Greenfield Market",
    category: "Garbage / Waste",
    description: "Commercial and municipal bins have not been cleared for 4 days. Waste is spilling over pedestrian walkways, emitting foul odor and attracting stray animals and pests.",
    location: "Greenfield Market Plaza, Sector 12",
    latitude: 37.7833,
    longitude: -122.4167,
    priority: "High",
    status: "Assigned",
    reportedDate: "2024-11-05T14:15:00Z",
    formattedDate: "Nov 05, 2024",
    reporter: {
      name: "Sophia Chen",
      email: "sophia.chen@example.com",
      phone: "+1 (555) 876-5432",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
    },
    imageUrl: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=800&auto=format&fit=crop&q=80",
    aiAnalysis: {
      detectedIssue: "Solid Waste Accumulation & Sanitation Hazard",
      confidenceScore: "98.1%",
      severityLevel: "High - Public Health Alert",
      duplicateDetected: false,
      suggestedDepartment: "Sanitation & Waste Management Authority"
    },
    department: "Sanitation & Waste Management",
    assignedOfficer: "Supervisor Elena Rostova",
    timeline: [
      { date: "Nov 05, 02:15 PM", status: "Submitted", note: "Citizen complaint submitted with image verification." },
      { date: "Nov 05, 02:20 PM", status: "Under Review", note: "AI cross-referenced sanitation truck GPS logs." },
      { date: "Nov 06, 09:00 AM", status: "Assigned", note: "Emergency compaction truck assigned for afternoon pickup." }
    ]
  },
  {
    id: "CE-2024-8840",
    title: "High-Pressure Water Main Burst Flooding Cross Street",
    category: "Water Leakage",
    description: "Pressurized clean potable water is gushing out of an underground supply joint onto the roadway, submerging the pedestrian crossing and reducing water pressure in nearby apartment buildings.",
    location: "Corner of Elm Street and 18th Avenue",
    latitude: 37.7690,
    longitude: -122.4467,
    priority: "Critical",
    status: "Resolved",
    reportedDate: "2024-11-03T07:45:00Z",
    formattedDate: "Nov 03, 2024",
    reporter: {
      name: "David Kim",
      email: "d.kim@citynet.com",
      phone: "+1 (555) 432-1098",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    imageUrl: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?w=800&auto=format&fit=crop&q=80",
    aiAnalysis: {
      detectedIssue: "Pressurized Potable Water Main Rupture",
      confidenceScore: "99.2%",
      severityLevel: "Critical - High Resource Depletion",
      duplicateDetected: true,
      suggestedDepartment: "Metro Water Supply & Sewerage Board"
    },
    department: "Water Supply & Utilities",
    assignedOfficer: "Chief Tech. Julian Ortiz",
    timeline: [
      { date: "Nov 03, 07:45 AM", status: "Submitted", note: "Reported with geolocated photo." },
      { date: "Nov 03, 07:48 AM", status: "Under Review", note: "Automated alert flagged to Water Emergency Grid." },
      { date: "Nov 03, 08:15 AM", status: "Assigned", note: "Emergency shutoff valve crew mobilized." },
      { date: "Nov 03, 09:30 AM", status: "In Progress", note: "Pipe isolation valve clamped, excavation started." },
      { date: "Nov 03, 04:30 PM", status: "Resolved", note: "Pipe section replaced, pressure normalized, roadway cleared." }
    ]
  },
  {
    id: "CE-2024-8812",
    title: "Row of Non-Functional Streetlights on Hillcrest Walkway",
    category: "Broken Streetlight",
    description: "Four consecutive street lamps on the residential pedestrian footpath have been dark for three consecutive evenings. Creates significant safety concerns for evening commuters and walkers.",
    location: "Hillcrest Walkway between 9th and 11th Street",
    latitude: 37.7558,
    longitude: -122.4350,
    priority: "Medium",
    status: "Under Review",
    reportedDate: "2024-11-07T18:20:00Z",
    formattedDate: "Nov 07, 2024",
    reporter: {
      name: "Maria Rodriguez",
      email: "m.rodriguez@email.net",
      phone: "+1 (555) 678-9012",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
    },
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80",
    aiAnalysis: {
      detectedIssue: "Luminaire Power Grid / Circuit Outage",
      confidenceScore: "92.0%",
      severityLevel: "Medium - Public Safety / Visibility",
      duplicateDetected: false,
      suggestedDepartment: "Bureau of Street Lighting & Energy"
    },
    department: "Street Lighting & Energy",
    assignedOfficer: "Pending Assignment",
    timeline: [
      { date: "Nov 07, 06:20 PM", status: "Submitted", note: "Citizen report logged." },
      { date: "Nov 07, 06:35 PM", status: "Under Review", note: "Smart Grid diagnostic scheduled to verify transformer junction." }
    ]
  },
  {
    id: "CE-2024-8790",
    title: "Uncovered Stormwater Manhole Near School Zone Crosswalk",
    category: "Open Manhole",
    description: "The cast iron cover of an underground storm drain has collapsed or was removed. Deep drop directly into sewer channel without any safety barricade, situated directly on school children's walking route.",
    location: "Lincoln Blvd opposite St. Jude Academy",
    latitude: 37.7600,
    longitude: -122.4200,
    priority: "Critical",
    status: "In Progress",
    reportedDate: "2024-11-06T11:05:00Z",
    formattedDate: "Nov 06, 2024",
    reporter: {
      name: "Tariq Al-Mansoor",
      email: "tariq.m@cityforum.org",
      phone: "+1 (555) 901-2345",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    },
    imageUrl: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&auto=format&fit=crop&q=80",
    aiAnalysis: {
      detectedIssue: "Missing / Collapsed Utility Cover (Fall Hazard)",
      confidenceScore: "98.7%",
      severityLevel: "Critical - High Fatal Hazard",
      duplicateDetected: false,
      suggestedDepartment: "Public Works & Drainage Commission"
    },
    department: "Public Works & Drainage",
    assignedOfficer: "Safety Inspector Clara Thorne",
    timeline: [
      { date: "Nov 06, 11:05 AM", status: "Submitted", note: "Urgent ticket submitted." },
      { date: "Nov 06, 11:08 AM", status: "Under Review", note: "AI tagged as School Zone Critical Hazard." },
      { date: "Nov 06, 11:25 AM", status: "Assigned", note: "Barricade unit sent ahead with temporary heavy-duty metal plate." },
      { date: "Nov 06, 12:10 PM", status: "In Progress", note: "Temporary warning cones placed. Permanent casting frame being installed." }
    ]
  },
  {
    id: "CE-2024-8765",
    title: "Cracked and Dislodged Concrete Pavers on High Street Sidewalk",
    category: "Damaged Footpath",
    description: "Tree root expansion has lifted concrete slabs over 4 inches high. Several elderly pedestrians have tripped this week. The pathway is also impassable for wheelchair users.",
    location: "High Street & Maple Terrace, West District",
    latitude: 37.7880,
    longitude: -122.4080,
    priority: "Medium",
    status: "Submitted",
    reportedDate: "2024-11-08T08:10:00Z",
    formattedDate: "Nov 08, 2024",
    reporter: {
      name: "Alex Morgan",
      email: "alex.morgan@civicmail.org",
      phone: "+1 (555) 234-5678",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    imageUrl: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=800&auto=format&fit=crop&q=80",
    aiAnalysis: {
      detectedIssue: "Sidewalk Slab Dislocation & Accessibility Obstacle",
      confidenceScore: "94.3%",
      severityLevel: "Medium - ADA Non-Compliance Hazard",
      duplicateDetected: false,
      suggestedDepartment: "Urban Forestry & Sidewalk Maintenance"
    },
    department: "Pedestrian Infrastructure",
    assignedOfficer: "Queued for Inspection",
    timeline: [
      { date: "Nov 08, 08:10 AM", status: "Submitted", note: "Complaint logged with accessibility impact notes." }
    ]
  },
  {
    id: "CE-2024-8720",
    title: "Vandalized Park Benches and Broken Playground Fence",
    category: "Other",
    description: "The protective chainlink fence around the children's sandbox has been torn open with exposed sharp wire ends, and park benches have splintered wood planks.",
    location: "Sunrise Community Park, East Sector",
    latitude: 37.7490,
    longitude: -122.4110,
    priority: "Low",
    status: "Resolved",
    reportedDate: "2024-10-29T16:40:00Z",
    formattedDate: "Oct 29, 2024",
    reporter: {
      name: "Jessica Hayes",
      email: "jess.hayes@outlook.com",
      phone: "+1 (555) 345-6789",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
    },
    imageUrl: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=800&auto=format&fit=crop&q=80",
    aiAnalysis: {
      detectedIssue: "Recreation Barrier Damage & Minor Vandalism",
      confidenceScore: "91.5%",
      severityLevel: "Low - Park Amenities Restoration",
      duplicateDetected: false,
      suggestedDepartment: "Parks & Recreation Department"
    },
    department: "Parks & Community Spaces",
    assignedOfficer: "Ranger Thomas Bradley",
    timeline: [
      { date: "Oct 29, 04:40 PM", status: "Submitted", note: "Submitted via mobile web." },
      { date: "Oct 30, 09:00 AM", status: "Under Review", note: "Assessed by Parks Maintenance Coordinator." },
      { date: "Oct 31, 01:30 PM", status: "Assigned", note: "Carpentry and fencing crew assigned." },
      { date: "Nov 01, 11:00 AM", status: "In Progress", note: "Damaged wire removed and bench slats sanded and sealed." },
      { date: "Nov 02, 03:15 PM", status: "Resolved", note: "Restoration verified complete by park supervisor." }
    ]
  },
  {
    id: "CE-2024-8699",
    title: "Fallen Tree Branch Partially Blocking Southbound Bus Lane",
    category: "Road Damage",
    description: "A large oak limb snapped during morning wind gusts and is blocking the dedicated city transit bus lane, forcing rapid transit buses into congested vehicle lanes.",
    location: "Metro Boulevard near 22nd Station",
    latitude: 37.7650,
    longitude: -122.4280,
    priority: "High",
    status: "In Progress",
    reportedDate: "2024-11-07T13:00:00Z",
    formattedDate: "Nov 07, 2024",
    reporter: {
      name: "Alex Morgan",
      email: "alex.morgan@civicmail.org",
      phone: "+1 (555) 234-5678",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
    aiAnalysis: {
      detectedIssue: "Transit Corridor Obstruction (Fallen Timber)",
      confidenceScore: "97.8%",
      severityLevel: "High - Public Transit Delay Risk",
      duplicateDetected: false,
      suggestedDepartment: "Emergency Road Clearance & Forestry"
    },
    department: "Emergency Road Clearance",
    assignedOfficer: "Arborist Liam O'Connor",
    timeline: [
      { date: "Nov 07, 01:00 PM", status: "Submitted", note: "Reported by commuter." },
      { date: "Nov 07, 01:10 PM", status: "Under Review", note: "AI Transit Link flagged impact on Bus Route #38." },
      { date: "Nov 07, 01:35 PM", status: "Assigned", note: "Tree trimming chainsaw team en route." },
      { date: "Nov 07, 02:00 PM", status: "In Progress", note: "Branches sectioned; heavy timber loader arriving." }
    ]
  }
];

export const CATEGORIES = [
  "All Categories",
  "Road Damage",
  "Garbage / Waste",
  "Water Leakage",
  "Broken Streetlight",
  "Open Manhole",
  "Damaged Footpath",
  "Other"
];

export const STATUSES = [
  "All Statuses",
  "Submitted",
  "Under Review",
  "Assigned",
  "In Progress",
  "Resolved"
];

export const PRIORITIES = [
  "All Priorities",
  "Critical",
  "High",
  "Medium",
  "Low"
];

export const DEMO_STATS = {
  totalReported: "14,820+",
  resolvedCount: "12,450",
  activeReports: "2,370",
  avgResolutionHours: "36 hrs",
  resolutionRate: "84.2%",
  activeCitizens: "48,900+"
};

export const RECENT_ACTIVITIES = [
  {
    id: "act-1",
    type: "status_change",
    complaintId: "CE-2024-8901",
    title: "Asphalt Crew on Site",
    description: "Rapid Asphalt Repair Unit #4 arrived at 4th Avenue & Pine St.",
    timestamp: "12 minutes ago",
    badge: "In Progress"
  },
  {
    id: "act-2",
    type: "ai_triage",
    complaintId: "CE-2024-8765",
    title: "AI Severity Assessed",
    description: "Computer vision classified sidewalk crack with 94.3% accuracy.",
    timestamp: "45 minutes ago",
    badge: "Under Review"
  },
  {
    id: "act-3",
    type: "resolved",
    complaintId: "CE-2024-8840",
    title: "Main Line Pressure Restored",
    description: "Corner of Elm St & 18th Ave water pipe repair completed and inspected.",
    timestamp: "2 hours ago",
    badge: "Resolved"
  },
  {
    id: "act-4",
    type: "dispatch",
    complaintId: "CE-2024-8894",
    title: "Compactor Dispatched",
    description: "Sanitation waste truck assigned to Greenfield Market Plaza.",
    timestamp: "4 hours ago",
    badge: "Assigned"
  }
];

