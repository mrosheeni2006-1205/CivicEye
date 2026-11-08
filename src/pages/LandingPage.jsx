import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PlusCircle, 
  Compass, 
  Sparkles, 
  BrainCircuit, 
  MapPin, 
  CopyCheck, 
  SearchCheck, 
  BarChart3, 
  Camera, 
  Upload, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Building2, 
  Activity,
  Layers,
  ChevronRight,
  Eye
} from 'lucide-react';
import { DEMO_STATS } from '../data/mockComplaints';
import { useComplaints } from '../context/ComplaintsContext';
import { ComplaintCard } from '../components/dashboard/ComplaintCard';

export const LandingPage = () => {
  const { complaints, setSelectedComplaint } = useComplaints();
  const showcaseComplaints = complaints.slice(0, 3);

  const features = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Issue Detection",
      description: "State-of-the-art vision models automatically classify potholes, leaks, waste spillage, and electrical defects in milliseconds.",
      tag: "Computer Vision"
    },
    {
      icon: Activity,
      title: "Smart Severity Assessment",
      description: "Algorithms evaluate road swerve risks, pedestrian school zones, and utility outage criticality to assign intelligent priority tiers.",
      tag: "Priority Triage"
    },
    {
      icon: MapPin,
      title: "GPS-Based Issue Mapping",
      description: "Precise geocoding and automated address resolution pinpoints coordinates for municipal field repair squads with pinpoint accuracy.",
      tag: "Geo-Spatial"
    },
    {
      icon: CopyCheck,
      title: "Duplicate Complaint Detection",
      description: "Intelligent spatial-temporal clustering prevents duplicate work orders, merging identical incident reports into a single unified ticket.",
      tag: "Deduplication"
    },
    {
      icon: SearchCheck,
      title: "Transparent Resolution Tracking",
      description: "Citizens receive verifiable stage updates as repair crews are dispatched, work begins, and post-restoration photos are verified.",
      tag: "Open Tracking"
    },
    {
      icon: BarChart3,
      title: "Civic Analytics & SLA Metrics",
      description: "Real-time municipal performance dashboards track average resolution time, ward response efficiency, and infrastructure health.",
      tag: "Gov Analytics"
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      icon: Camera,
      title: "Capture a Civic Issue",
      description: "Notice an open manhole, road fissure, or broken streetlight during your daily commute."
    },
    {
      step: "02",
      icon: Upload,
      title: "Upload a Photograph",
      description: "Snap and upload the photo. CivicEye reads GPS coordinates and visual landmarks seamlessly."
    },
    {
      step: "03",
      icon: Cpu,
      title: "AI Analyzes the Issue",
      description: "Our neural pipeline verifies damage severity, tags the department, and eliminates duplicate tickets."
    },
    {
      step: "04",
      icon: CheckCircle2,
      title: "Track Its Resolution",
      description: "Receive real-time progress updates until the civic crew confirms physical site restoration."
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
        {/* Soft decorative background circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-brand-100/40 via-sky-100/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-800 text-xs font-semibold shadow-xs">
                <Sparkles className="w-4 h-4 text-brand-600" />
                <span>Next-Generation Civic Infrastructure Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.12]">
                Building Safer, Cleaner, <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-brand-600 to-sky-600">Smarter Cities.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                CivicEye bridges citizens and municipal authorities with artificial intelligence. Report infrastructure failures in seconds, track repairs in real time, and hold public services accountable.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/report"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <PlusCircle className="w-5 h-5" />
                  <span>Report an Issue</span>
                </Link>

                <Link
                  to="/explore"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm shadow-xs hover:border-slate-300 transition-all"
                >
                  <Compass className="w-5 h-5 text-brand-600" />
                  <span>Explore Issues</span>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 border-t border-slate-200/60">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Municipal Dispatch</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BrainCircuit className="w-4 h-4 text-brand-600" />
                  <span>Automated AI Triage</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>36hr Average Resolution</span>
                </div>
              </div>
            </div>

            {/* Right Column: Smart City Civic Visual Art */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Card graphic with simulated interactive map & AI badge */}
                <div className="bg-white rounded-3xl p-5 shadow-2xl border border-slate-200/80 relative z-10">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900">
                    <img
                      src="https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=800&auto=format&fit=crop&q=80"
                      alt="Smart City Skyline"
                      className="w-full h-full object-cover mix-blend-overlay opacity-60"
                    />

                    {/* Simulated Radar / Smart grid pulse overlay */}
                    <div className="absolute inset-0 bg-radial-grid opacity-30" />
                    
                    {/* Simulated Pin 1 */}
                    <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 animate-bounce">
                      <div className="w-8 h-8 rounded-full bg-rose-500/90 text-white flex items-center justify-center shadow-lg border-2 border-white text-xs font-bold">
                        !
                      </div>
                    </div>

                    {/* Simulated Pin 2 */}
                    <div className="absolute bottom-1/3 right-1/4 animate-pulse">
                      <div className="w-7 h-7 rounded-full bg-teal-500/90 text-white flex items-center justify-center shadow-lg border-2 border-white text-xs">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Simulated Active Scanner Box */}
                    <div className="absolute bottom-4 left-4 right-4 bg-navy-950/85 backdrop-blur-md rounded-xl p-3 border border-white/10 text-white">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                          <span className="font-semibold text-brand-300">Live AI Grid Analysis</span>
                        </div>
                        <span className="text-[10px] text-slate-300 font-mono">Ward 7 • Lat 37.77</span>
                      </div>
                      <p className="text-xs text-slate-200 mt-1 font-medium truncate">
                        Detected: Pothole Hazard (4th Ave) → Priority: Critical
                      </p>
                    </div>
                  </div>

                  {/* Micro stat bar beneath image */}
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="text-slate-400 text-[10px]">Active Ward Units</p>
                      <p className="text-sm font-extrabold text-navy-950 mt-0.5">38 Units</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="text-slate-400 text-[10px]">AI Accuracy</p>
                      <p className="text-sm font-extrabold text-teal-600 mt-0.5">97.4%</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="text-slate-400 text-[10px]">Avg Triage</p>
                      <p className="text-sm font-extrabold text-navy-950 mt-0.5">1.8 min</p>
                    </div>
                  </div>
                </div>

                {/* Floating pill badge 1 */}
                <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-200/90 items-center gap-3 z-20 animate-pulse">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="text-left text-xs">
                    <p className="font-bold text-slate-900">12,450+ Restored</p>
                    <p className="text-[11px] text-slate-500">Verified by citizens</p>
                  </div>
                </div>

                {/* Floating pill badge 2 */}
                <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200/90 items-center gap-3 z-20">
                  <div className="w-9 h-9 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="text-left text-xs">
                    <p className="font-bold text-slate-900">Zero Duplicates</p>
                    <p className="text-[11px] text-slate-500">Smart GIS grouping</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Demo Statistics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-navy-800">
            <div>
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest">Platform Transparency</span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-white">Smart City Performance Statistics</h2>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-navy-800 text-slate-300 border border-navy-700 self-start md:self-auto">
              Simulated Live Demo Feed
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{DEMO_STATS.totalReported}</p>
              <p className="text-xs font-semibold text-brand-300 uppercase tracking-wider mt-1">Total Reported</p>
              <p className="text-xs text-slate-400 mt-1">Citizen reports registered</p>
            </div>

            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">{DEMO_STATS.resolvedCount}</p>
              <p className="text-xs font-semibold text-brand-300 uppercase tracking-wider mt-1">Issues Resolved</p>
              <p className="text-xs text-slate-400 mt-1">{DEMO_STATS.resolutionRate} verified completion</p>
            </div>

            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">{DEMO_STATS.activeReports}</p>
              <p className="text-xs font-semibold text-brand-300 uppercase tracking-wider mt-1">Active Reports</p>
              <p className="text-xs text-slate-400 mt-1">Currently in field triage</p>
            </div>

            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-cyan-400 tracking-tight">{DEMO_STATS.avgResolutionHours}</p>
              <p className="text-xs font-semibold text-brand-300 uppercase tracking-wider mt-1">Avg Resolution Time</p>
              <p className="text-xs text-slate-400 mt-1">From intake to site repair</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Intelligent Infrastructure Core
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Engineered for Modern Urban Governance
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            CivicEye replaces slow, opaque bureaucracy with machine-learning triage, verifiable milestones, and instant municipal accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-subtle hover:shadow-card-hover hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-800 border border-navy-100 flex items-center justify-center group-hover:bg-brand-50 group-hover:text-brand-600 group-hover:border-brand-200 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                      {feat.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-slate-100/70 py-20 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Simple 4-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
              From Citizen Report to Field Resolution
            </h2>
            <p className="text-sm text-slate-600">
              Designed so any resident can report an infrastructure defect in less than 30 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {workflowSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-subtle relative flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-slate-300 font-mono">{item.step}</span>
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Live Issue Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Recent Field Incidents
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-2">
              Active Community Reports
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Click any report card below to open its verified AI triage and stage timeline.
            </p>
          </div>

          <Link
            to="/explore"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 bg-brand-50 px-4 py-2 rounded-xl border border-brand-200 transition-colors"
          >
            <span>View All Issues</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseComplaints.map((item) => (
            <ComplaintCard
              key={item.id}
              complaint={item}
              onClick={() => setSelectedComplaint(item)}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-gradient-to-r from-navy-900 via-navy-950 to-slate-900 rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold text-brand-400 uppercase tracking-widest">Empowering Public Action</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ready to improve your neighborhood today?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Join thousands of proactive citizens using CivicEye to report potholes, water bursts, and street hazards.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Link
              to="/report"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-sm shadow-md transition-all"
            >
              Report an Issue Now
            </Link>
            <Link
              to="/dashboard"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-700 border border-navy-700 text-white font-semibold text-sm transition-all"
            >
              Open Citizen Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

