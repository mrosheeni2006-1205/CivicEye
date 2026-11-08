import React, { useState } from 'react';
import { Menu, Bell, Search, Shield, CheckCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export const DashboardHeader = ({ onOpenSidebar, title = "Citizen Dashboard" }) => {
  const { user } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);

  const mockNotifications = [
    { id: 1, text: "Asphalt repair crew dispatched to 4th Avenue.", time: "10m ago", read: false },
    { id: 2, text: "AI verified your recent report #CE-2024-8765.", time: "42m ago", read: false },
    { id: 3, text: "Elm Street water main repair marked Resolved.", time: "2h ago", read: true },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 h-20 px-4 sm:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={onOpenSidebar}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl"
          aria-label="Open sidebar menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h1>
          <p className="text-xs text-slate-500 hidden sm:block">Real-time civic infrastructure response grid</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Ward Badge */}
        <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
          <Shield className="w-3.5 h-3.5 text-brand-600" />
          <span>{user?.ward || "Metro District"}</span>
        </div>

        {/* Notifications Popover */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors relative"
            aria-label="View notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-teal-500 animate-ping" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-teal-500" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-dropdown border border-slate-200 p-4 z-50 animate-fade-in">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Civic Notifications</span>
                <span className="text-[11px] text-teal-600 font-semibold cursor-pointer hover:underline">Mark all read</span>
              </div>
              <div className="divide-y divide-slate-100 mt-2 max-h-60 overflow-y-auto">
                {mockNotifications.map((n) => (
                  <div key={n.id} className="py-2.5 hover:bg-slate-50 px-2 rounded-lg transition-colors">
                    <p className="text-xs text-slate-800 font-medium leading-snug">{n.text}</p>
                    <span className="text-[10px] text-slate-400 mt-1 block">{n.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile Avatar Link */}
        <Link
          to="/profile"
          className="flex items-center gap-2 p-1.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
        >
          <img
            src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"}
            alt={user?.name}
            className="w-8 h-8 rounded-lg object-cover"
          />
        </Link>
      </div>
    </header>
  );
};

