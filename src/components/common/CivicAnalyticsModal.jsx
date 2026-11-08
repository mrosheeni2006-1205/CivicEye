import React from 'react';
import { Modal } from './Modal';
import { 
  BarChart3, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  ShieldAlert, 
  Building2, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { DEMO_STATS } from '../../data/mockComplaints';

export const CivicAnalyticsModal = ({ isOpen, onClose }) => {
  const departmentMetrics = [
    { name: "Sanitation & Solid Waste", resolved: "96.2%", avgTime: "18 hrs", health: "Optimal", color: "bg-emerald-500" },
    { name: "Municipal Roads & Asphalt", resolved: "89.4%", avgTime: "42 hrs", health: "Good", color: "bg-teal-500" },
    { name: "Metro Water Supply Grid", resolved: "94.1%", avgTime: "24 hrs", health: "Optimal", color: "bg-sky-500" },
    { name: "Bureau of Street Lighting", resolved: "91.8%", avgTime: "30 hrs", health: "Good", color: "bg-indigo-500" },
    { name: "Parks & Urban Forestry", resolved: "85.7%", avgTime: "48 hrs", health: "Attention", color: "bg-amber-500" }
  ];

  const wardScores = [
    { ward: "Ward 1 - Harbor District", score: 94, status: "Grade A" },
    { ward: "Ward 4 - Riverside West", score: 88, status: "Grade B+" },
    { ward: "Ward 7 - Downtown Metro", score: 92, status: "Grade A" },
    { ward: "Ward 12 - Greenfield Sector", score: 81, status: "Grade B" }
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="max-w-4xl"
      title={
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-navy-900 text-brand-300 flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-brand-400" />
          </div>
          <div>
            <h3 className="text-base font-bold text-navy-950">Civic Analytics & Municipal SLA Performance</h3>
          </div>
        </div>
      }
      subtitle="Public transparency intelligence and ward service level metrics"
    >
      <div className="space-y-6">
        {/* Top Summary Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <p className="text-[11px] text-slate-500 font-semibold uppercase">Total Reported</p>
            <p className="text-xl font-extrabold text-navy-950 mt-1">{DEMO_STATS.totalReported}</p>
            <p className="text-[10px] text-emerald-600 font-semibold mt-0.5 flex items-center">
              <TrendingUp className="w-3 h-3 mr-0.5" /> +14% citizen engagement
            </p>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <p className="text-[11px] text-slate-500 font-semibold uppercase">SLA Resolution Rate</p>
            <p className="text-xl font-extrabold text-emerald-600 mt-1">{DEMO_STATS.resolutionRate}</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Target: 80%</p>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <p className="text-[11px] text-slate-500 font-semibold uppercase">Avg Repair Speed</p>
            <p className="text-xl font-extrabold text-teal-600 mt-1">{DEMO_STATS.avgResolutionHours}</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Down from 72 hrs (manual)</p>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <p className="text-[11px] text-slate-500 font-semibold uppercase">Active Citizen Users</p>
            <p className="text-xl font-extrabold text-navy-900 mt-1">{DEMO_STATS.activeCitizens}</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Across all 16 wards</p>
          </div>
        </div>

        {/* Department SLA Breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wide">
                Departmental SLA Compliance
              </h4>
              <p className="text-[11px] text-slate-500">Service Level Agreement compliance by municipal wing</p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
              Target SLA: 85%+
            </span>
          </div>

          <div className="space-y-3.5">
            {departmentMetrics.map((dept) => (
              <div key={dept.name} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800">{dept.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500 text-[11px]">Avg: {dept.avgTime}</span>
                    <span className="font-bold text-navy-900">{dept.resolved}</span>
                  </div>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${dept.color}`}
                    style={{ width: dept.resolved }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Efficiency Comparison & Ward Index */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* AI Comparison */}
          <div className="bg-gradient-to-br from-brand-50/70 to-sky-50/70 rounded-2xl p-5 border border-brand-200/80">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wide">
                AI vs Traditional Intake Benchmark
              </h4>
            </div>
            <p className="text-xs text-slate-600 mb-4">
              Automated computer vision triage reduces bureaucratic response latency significantly.
            </p>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between items-center p-2 rounded-lg bg-white/80 border border-brand-100">
                <span className="text-slate-600 font-medium">Issue Classification Time</span>
                <span className="font-bold text-emerald-700">1.8 sec (AI) vs 48 hrs</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg bg-white/80 border border-brand-100">
                <span className="text-slate-600 font-medium">Duplicate Deduplication</span>
                <span className="font-bold text-emerald-700">99.4% Automated Match</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg bg-white/80 border border-brand-100">
                <span className="text-slate-600 font-medium">Field Dispatch Routing</span>
                <span className="font-bold text-emerald-700">Automated by GIS</span>
              </div>
            </div>
          </div>

          {/* Ward Health Index */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200">
            <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wide mb-3">
              Ward Infrastructure Health Index
            </h4>
            <div className="space-y-2.5">
              {wardScores.map((w) => (
                <div key={w.ward} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                  <span className="font-medium text-slate-800">{w.ward}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-navy-900">{w.score}/100</span>
                    <span className="font-semibold px-2 py-0.5 rounded text-[10px] bg-brand-100 text-brand-800">
                      {w.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </Modal>
  );
};

