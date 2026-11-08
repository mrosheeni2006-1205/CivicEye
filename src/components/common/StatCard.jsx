import React from 'react';
import { TrendingUp } from 'lucide-react';

export const StatCard = ({ title, value, subtitle, icon: Icon, trend, color = 'navy', onClick }) => {
  const colorMap = {
    navy: {
      iconBg: 'bg-navy-50 text-navy-800 border-navy-100',
      borderHover: 'hover:border-navy-300',
      badge: 'bg-navy-50 text-navy-700'
    },
    teal: {
      iconBg: 'bg-teal-50 text-teal-600 border-teal-100',
      borderHover: 'hover:border-teal-300',
      badge: 'bg-teal-50 text-teal-700'
    },
    amber: {
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
      borderHover: 'hover:border-amber-300',
      badge: 'bg-amber-50 text-amber-700'
    },
    cyan: {
      iconBg: 'bg-cyan-50 text-cyan-600 border-cyan-100',
      borderHover: 'hover:border-cyan-300',
      badge: 'bg-cyan-50 text-cyan-700'
    },
    emerald: {
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      borderHover: 'hover:border-emerald-300',
      badge: 'bg-emerald-50 text-emerald-700'
    }
  };

  const activeTheme = colorMap[color] || colorMap.navy;

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl p-5 border border-slate-200/90 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between ${onClick ? 'cursor-pointer' : ''} ${activeTheme.borderHover}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{title}</span>
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${activeTheme.iconBg}`}>
          {Icon && <Icon className="w-5 h-5" />}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{value}</h3>
        <div className="mt-2 flex items-center gap-2">
          {trend && (
            <span className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full ${activeTheme.badge}`}>
              <TrendingUp className="w-3 h-3 mr-1" />
              {trend}
            </span>
          )}
          {subtitle && (
            <span className="text-xs text-slate-500 font-normal">{subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
};

