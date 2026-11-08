import React from 'react';
import { Clock, Eye, UserCheck, PlayCircle, CheckCircle } from 'lucide-react';

export const StatusBadge = ({ status, size = 'sm' }) => {
  const config = {
    'Submitted': {
      bg: 'bg-sky-50 text-sky-700 border-sky-200',
      dot: 'bg-sky-500',
      icon: Clock,
      label: 'Submitted'
    },
    'Under Review': {
      bg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      dot: 'bg-indigo-500',
      icon: Eye,
      label: 'Under Review'
    },
    'Assigned': {
      bg: 'bg-amber-50 text-amber-700 border-amber-200',
      dot: 'bg-amber-500',
      icon: UserCheck,
      label: 'Assigned'
    },
    'In Progress': {
      bg: 'bg-cyan-50 text-cyan-800 border-cyan-200',
      dot: 'bg-cyan-500',
      icon: PlayCircle,
      label: 'In Progress'
    },
    'Resolved': {
      bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      dot: 'bg-emerald-500',
      icon: CheckCircle,
      label: 'Resolved'
    }
  }[status] || {
    bg: 'bg-slate-100 text-slate-700 border-slate-200',
    dot: 'bg-slate-400',
    icon: Clock,
    label: status || 'Pending'
  };

  const Icon = config.icon;
  const sizeClasses = size === 'xs' 
    ? 'text-xs px-2 py-0.5' 
    : size === 'lg' 
      ? 'text-sm px-3.5 py-1.5' 
      : 'text-xs px-2.5 py-1';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border ${config.bg} ${sizeClasses} shadow-xs transition-colors`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot} animate-pulse`} />
      <span>{config.label}</span>
    </span>
  );
};

