import React from 'react';
import { AlertOctagon, AlertTriangle, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const PriorityBadge = ({ priority, size = 'sm' }) => {
  const config = {
    'Critical': {
      bg: 'bg-rose-50 text-rose-700 border-rose-200',
      icon: AlertOctagon,
      label: 'Critical'
    },
    'High': {
      bg: 'bg-orange-50 text-orange-700 border-orange-200',
      icon: AlertTriangle,
      label: 'High'
    },
    'Medium': {
      bg: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: ArrowUpRight,
      label: 'Medium'
    },
    'Low': {
      bg: 'bg-slate-100 text-slate-700 border-slate-200',
      icon: ArrowDownRight,
      label: 'Low'
    }
  }[priority] || {
    bg: 'bg-slate-100 text-slate-600 border-slate-200',
    icon: ArrowUpRight,
    label: priority || 'Normal'
  };

  const Icon = config.icon;
  const sizeClasses = size === 'xs' 
    ? 'text-[11px] px-2 py-0.5' 
    : size === 'lg' 
      ? 'text-sm px-3 py-1' 
      : 'text-xs px-2.5 py-0.5';

  return (
    <span
      className={`inline-flex items-center gap-1 font-semibold rounded-md border ${config.bg} ${sizeClasses}`}
    >
      <Icon className="w-3 h-3" />
      <span>{config.label}</span>
    </span>
  );
};

