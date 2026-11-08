import React from 'react';
import { StatusBadge } from '../common/StatusBadge';
import { PriorityBadge } from '../common/PriorityBadge';
import { MapPin, Calendar, ArrowRight, Sparkles, Building2 } from 'lucide-react';

export const ComplaintCard = ({ complaint, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl border border-slate-200/90 hover:border-brand-300 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group"
    >
      <div>
        {/* Card Image Header */}
        <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
          <img
            src={complaint.imageUrl}
            alt={complaint.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
          
          <div className="absolute top-3 left-3">
            <span className="font-mono text-[11px] font-bold text-white bg-navy-950/75 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10">
              {complaint.id}
            </span>
          </div>

          <div className="absolute top-3 right-3">
            <PriorityBadge priority={complaint.priority} size="xs" />
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
            <span className="font-semibold text-brand-300 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {complaint.category}
            </span>
            <span className="text-slate-300 text-[11px]">{complaint.formattedDate}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5">
          <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-700 transition-colors line-clamp-1">
            {complaint.title}
          </h3>
          <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {complaint.description}
          </p>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-1.5 truncate pr-2">
              <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span className="truncate">{complaint.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
        <StatusBadge status={complaint.status} size="xs" />
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 group-hover:translate-x-1 transition-transform">
          <span>Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
};

