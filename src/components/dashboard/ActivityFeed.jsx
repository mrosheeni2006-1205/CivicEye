import React from 'react';
import { RECENT_ACTIVITIES } from '../../data/mockComplaints';
import { Sparkles, Truck, CheckCircle2, Clock } from 'lucide-react';

export const ActivityFeed = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'ai_triage':
        return <Sparkles className="w-3.5 h-3.5 text-brand-500" />;
      case 'dispatch':
        return <Truck className="w-3.5 h-3.5 text-amber-500" />;
      case 'resolved':
        return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />;
      default:
        return <Clock className="w-3.5 h-3.5 text-sky-500" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-subtle">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">Live Municipal Activity</h3>
          <p className="text-[11px] text-slate-400">Automated triage & ground unit status updates</p>
        </div>
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
      </div>

      <div className="mt-4 space-y-4">
        {RECENT_ACTIVITIES.map((act) => (
          <div key={act.id} className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
              {getIcon(act.type)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 truncate">{act.title}</span>
                <span className="text-[10px] text-slate-400">{act.timestamp}</span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{act.description}</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="font-mono text-[10px] font-semibold text-brand-700 bg-brand-50 px-1.5 py-0.5 rounded">
                  {act.complaintId}
                </span>
                <span className="text-[10px] font-medium text-slate-500">
                  {act.badge}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

