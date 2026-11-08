# CivicEye — AI-Powered Smart City Issue Management Platform

CivicEye is a modern civic issue reporting and municipal management web application designed to empower citizens and civic authorities to detect, prioritize, and resolve urban infrastructure issues.

---

## 🏙️ Key Features Built

### 1. Landing Page (`/`)
- **Brand Navigation**: Responsive navbar with CivicEye logo, quick links, and dynamic auth state.
- **Hero Section**: "Building Safer, Cleaner, Smarter Cities." with primary CTA (*Report an Issue*), secondary CTA (*Explore Issues*), and a smart city interactive radar & GIS visualization.
- **Features Section**: Explaining AI-Powered Detection, Smart Severity Assessment, GPS-Based Mapping, Duplicate Complaint Detection, Transparent Resolution Tracking, and Civic Analytics.
- **How It Works**: Visual 4-step process (*Capture -> Upload -> AI Analyzes -> Track Resolution*).
- **Statistics Section**: Live demo platform counters (14,820+ reported, 12,450 resolved, 36hr avg resolution).
- **Issue Showcase**: Real-time sample incident cards with interactive click-to-modal inspection.
- **Municipal Footer**: Civic links, authorities directory, system status indicators, and open data notices.

### 2. Citizen Authentication
- **Login Page (`/login`)**: Email and password fields, show/hide password toggle, remember-me checkbox, portfolio 1-click demo autofill, and input validation.
- **Registration Page (`/register`)**: Full name, email, password, confirm password, citizen charter commitment, and automatic account registration.

### 3. Citizen Dashboard (`/dashboard`)
- **Responsive Sidebar Layout**: Dashboard, Report an Issue, My Complaints, Explore Issues, Profile, and Logout.
- **Personalized Banner**: Time-of-day greeting, citizen ward information, and quick report button.
- **Summary Metrics**: Real-time count of Total, Pending, In Progress, and Resolved issues.
- **Recent Complaints Table**: Clean table with ID, issue title, category, date, priority badge, status badge, and inspection button.
- **Live Activity Feed**: Real-time feed of AI triage classifications, repair squad dispatch alerts, and site restoration milestones.

### 4. Report an Issue (`/report`)
- **Evidence Photograph**: Drag-and-drop file upload, file validation, instant preview, remove option, and **1-click realistic demo presets** (*Pothole, Waste, Water Leak, Streetlamp*).
- **Smart Category Selection**: Road Damage, Garbage / Waste, Water Leakage, Broken Streetlight, Open Manhole, Damaged Footpath, Other.
- **AI Triage Integration**: Simulates instant computer vision classification and department routing.
- **Geolocation & GPS**: Location address input with automatic **"Use Current GPS"** coordinate generator.
- **Form Validation & Reset**: Clean field validations, error messaging, and form clearing.

### 5. My Complaints (`/my-complaints`)
- **Dual View Modes**: Switch seamlessly between **Card Grid View** and **Data Table View**.
- **Search & Filters**: Instant search by ID, keyword, or street; filter by Category and Status.
- **Sort Options**: Sort by Latest Report or Oldest Report.
- **Complaint Details Modal**: Full ticket inspection with photo lightbox, coordinates copy, AI assessment card, and an **interactive stage simulator** to test moving complaints between *Submitted*, *Under Review*, *Assigned*, *In Progress*, and *Resolved*.

### 6. Explore Citywide Issues (`/explore`)
- **Smart GIS Spatial Map View**: Cartographic city map interface with interactive geolocated incident pins.
- **Map Controls**: Layer switcher (*Standard, Satellite, Heatmap*), zoom controls, and active pin preview flyouts.
- **Category & Priority Filters**: Search and filter public tickets across municipal wards.

### 7. Profile & Civic Settings (`/profile`)
- **Citizen Credentials**: Government citizen ID (`CIV-8921-OK`), KYC verification status, and registered ward.
- **Editable Information**: Edit name, email, contact phone, ward, and address with toast confirmation.
- **Notification Preferences**: Toggles for Email alerts, SMS dispatches, and AI triage notifications.

---

## 🛠️ Technology Stack

- **React 18** (Functional components, Hooks, Context API)
- **Vite** (Next-generation lightning-fast build tool)
- **React Router v6** (Client-side routing with nested layouts)
- **Tailwind CSS** (Custom palette with deep navy `#0B192C`, soft slate `#F8FAFC`, and vibrant teal/cyan accents)
- **Lucide React** (Modern, clean icon set)

---

## 🚀 Getting Started

To run the application locally:

```bash
# 1. Install dependencies (already completed)
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build:

```bash
npm run build
```

---

## 👤 Demo Citizen Credentials

- **Email**: `alex.morgan@civicmail.org`
- **Password**: `CitySafe2024!`
- *(A 1-click "Auto-fill Demo" button is available on the Login screen)*

