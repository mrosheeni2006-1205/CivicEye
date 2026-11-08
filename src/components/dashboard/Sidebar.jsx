import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  PlusCircle, 
  FileText, 
  Compass, 
  User, 
  LogOut, 
  Eye, 
  ChevronRight,
  ShieldCheck,
  X
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

export const Sidebar = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    showToast("You have been signed out successfully.", "info");
    navigate('/login');
  };

  const navLinks = [
    { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/report', label: 'Report an Issue', icon: PlusCircle, highlight: true },
    { to: '/my-complaints', label: 'My Complaints', icon: FileText },
    { to: '/explore', label: 'Explore Issues', icon: Compass },
    { to: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-navy-950/50 backdrop-blur-xs z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Sidebar Header */}
          <div className="h-20 px-6 flex items-center justify-between border-b border-slate-100">
            <NavLink to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-navy-900 text-brand-400 flex items-center justify-center shadow-xs">
                <Eye className="w-5 h-5 text-brand-300" />
              </div>
              <div>
                <span className="text-lg font-extrabold text-navy-950 tracking-tight">Civic<span className="text-brand-600">Eye</span></span>
                <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Portal</span>
              </div>
            </NavLink>

            <button
              onClick={onClose}
              className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Action Button */}
          <div className="p-4">
            <NavLink
              to="/report"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-xs tracking-wide shadow-sm hover:shadow transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Report New Issue</span>
            </NavLink>
          </div>

          {/* Nav Links */}
          <nav className="px-3 space-y-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-navy-900 text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-navy-950'
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Footer / User Profile Snippet */}
        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center justify-between gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 mb-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <img
                src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"}
                alt={user?.name}
                className="w-8 h-8 rounded-full object-cover border border-white shadow-xs"
              />
              <div className="truncate">
                <p className="text-xs font-bold text-slate-800 truncate">{user?.name || "Alex Morgan"}</p>
                <p className="text-[11px] text-slate-500 truncate">{user?.ward || "Ward 7"}</p>
              </div>
            </div>
            <ShieldCheck className="w-4 h-4 text-brand-600 flex-shrink-0" />
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold text-rose-600 hover:bg-rose-50 hover:text-rose-700 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

