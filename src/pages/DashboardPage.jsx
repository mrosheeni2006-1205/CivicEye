import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PlusCircle, 
  Clock, 
  PlayCircle, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Eye, 
  MapPin,
  TrendingUp,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useComplaints } from '../context/ComplaintsContext';
import { StatCard } from '../components/common/StatCard';
import { StatusBadge } from '../components/common/StatusBadge';
import { PriorityBadge } from '../components/common/PriorityBadge';
import { ActivityFeed } from '../components/dashboard/ActivityFeed';

export const DashboardPage = () => {
  const { user } = useAuth();
  const { complaints, setSelectedComplaint } = useComplaints();

  // Calculate dynamic stats
  const totalCount = complaints.length;
  const pendingCount = complaints.filter(c => c.status === 'Submitted' || c.status === 'Under Review').length;
  const inProgressCount = complaints.filter(c => c.status === 'In Progress' || c.status === 'Assigned').length;
  const resolvedCount = complaints.filter(c => c.status === 'Resolved').length;

  const recentComplaints = complaints.slice(0, 5);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-navy-900 via-navy-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold border border-brand-400/30">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>Citizen Overview Portal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {getGreeting()}, <span className="text-brand-300">{user?.name || "Citizen"}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Your neighborhood infrastructure reports are actively tracked by municipal authorities. Keep your city clean, well-lit, and hazard-free.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto z-10">
          <Link
            to="/report"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Report New Issue</span>
          </Link>
        </div>

        {/* Decorative corner glow */}
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* Summary Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard
          title="Total Complaints"
          value={totalCount}
          subtitle="All recorded tickets"
          icon={AlertCircle}
          trend="+12% this month"
          color="navy"
        />
        <StatCard
          title="Pending Review"
          value={pendingCount}
          subtitle="AI & manual intake"
          icon={Clock}
          color="amber"
        />
        <StatCard
          title="In Progress"
          value={inProgressCount}
          subtitle="Field crew assigned"
          icon={PlayCircle}
          trend="Active operations"
          color="cyan"
        />
        <StatCard
          title="Resolved"
          value={resolvedCount}
          subtitle="Verified complete"
          icon={CheckCircle2}
          trend="85% SLA Met"
          color="emerald"
        />
      </div>

      {/* Main Grid: Recent Complaints + Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Recent Complaints Table */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/90 shadow-subtle overflow-hidden">
          <div className="p-5 sm:px-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 tracking-tight">Recent Infrastructure Complaints</h3>
              <p className="text-xs text-slate-500 mt-0.5">Live status updates across municipal departments</p>
            </div>
            <Link
              to="/my-complaints"
              className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50/80 text-slate-500 font-semibold uppercase tracking-wider border-b border-slate-100">
                <tr>
                  <th className="py-3 px-4 sm:px-6">Complaint ID</th>
                  <th className="py-3 px-4">Issue Title & Category</th>
                  <th className="py-3 px-4">Reported</th>
                  <th className="py-3 px-4">Priority</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {recentComplaints.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => setSelectedComplaint(item)}
                    className="hover:bg-slate-50/80 transition-colors cursor-pointer group"
                  >
                    <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-navy-900 whitespace-nowrap">
                      {item.id}
                    </td>
                    <td className="py-3.5 px-4 max-w-xs">
                      <div className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors truncate">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                        <span>{item.category}</span>
                        <span>•</span>
                        <span className="truncate">{item.location}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap text-slate-500">
                      {item.formattedDate}
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <PriorityBadge priority={item.priority} size="xs" />
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <StatusBadge status={item.status} size="xs" />
                    </td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedComplaint(item);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-800 bg-brand-50 hover:bg-brand-100/70 px-2.5 py-1 rounded-lg transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Live Activity Feed */}
        <div className="lg:col-span-4 space-y-6">
          <ActivityFeed />

          {/* Quick Helpful Tip card */}
          <div className="bg-gradient-to-br from-brand-50/70 to-sky-50/70 border border-brand-200/80 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wide">CivicEye AI Tip</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              When capturing photographs of road defects or night-time streetlight failures, include surrounding street signboards to speed up automated geolocation matching.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

