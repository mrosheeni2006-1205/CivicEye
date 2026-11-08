import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Building2, 
  Calendar, 
  Save, 
  Sparkles, 
  Bell, 
  Check, 
  Edit3 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export const ProfilePage = () => {
  const { user, updateProfile } = useAuth();
  const { showToast } = useToast();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "Alex Morgan",
    email: user?.email || "alex.morgan@civicmail.org",
    phone: user?.phone || "+1 (555) 234-5678",
    ward: user?.ward || "Ward 7 - Metro Central",
    address: user?.address || "742 Evergreen Terrace, Sector 4",
    avatar: user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    smsDispatches: false,
    aiUpdates: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
    showToast("Citizen profile details updated successfully!", "success");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Profile Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="relative">
            <img
              src={formData.avatar}
              alt={formData.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-brand-500 shadow-md"
            />
            <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center border-2 border-white shadow-xs">
              <Check className="w-3.5 h-3.5" />
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-navy-950 tracking-tight">
                {user?.name || "Alex Morgan"}
              </h1>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-800 bg-brand-50 border border-brand-200 px-2 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3 text-brand-600" />
                Verified Citizen
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <span>{user?.email || "alex.morgan@civicmail.org"}</span>
              <span>•</span>
              <Building2 className="w-3.5 h-3.5 text-slate-400" />
              <span>{user?.ward || "Ward 7"}</span>
            </p>
          </div>
        </div>

        <div>
          {!isEditing ? (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-950 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Edit3 className="w-4 h-4" />
              <span>Edit Profile</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Profile Form & Information */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Form Info */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-subtle">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              Personal & Civic Information
            </h2>
            <span className="text-xs text-slate-400">
              {isEditing ? "Editing mode enabled" : "Read-only preview"}
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                disabled={!isEditing}
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                  isEditing 
                    ? 'border-brand-300 bg-white focus:ring-2 focus:ring-brand-500/20' 
                    : 'border-slate-200 bg-slate-50 text-slate-600 cursor-not-allowed'
                }`}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  disabled={!isEditing}
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                    isEditing 
                      ? 'border-brand-300 bg-white focus:ring-2 focus:ring-brand-500/20' 
                      : 'border-slate-200 bg-slate-50 text-slate-600 cursor-not-allowed'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Contact Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  disabled={!isEditing}
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                    isEditing 
                      ? 'border-brand-300 bg-white focus:ring-2 focus:ring-brand-500/20' 
                      : 'border-slate-200 bg-slate-50 text-slate-600 cursor-not-allowed'
                  }`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Assigned Municipal Ward
                </label>
                <input
                  type="text"
                  name="ward"
                  disabled={!isEditing}
                  value={formData.ward}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                    isEditing 
                      ? 'border-brand-300 bg-white focus:ring-2 focus:ring-brand-500/20' 
                      : 'border-slate-200 bg-slate-50 text-slate-600 cursor-not-allowed'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Residential Address
                </label>
                <input
                  type="text"
                  name="address"
                  disabled={!isEditing}
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                    isEditing 
                      ? 'border-brand-300 bg-white focus:ring-2 focus:ring-brand-500/20' 
                      : 'border-slate-200 bg-slate-50 text-slate-600 cursor-not-allowed'
                  }`}
                />
              </div>
            </div>

            {isEditing && (
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs shadow-md transition-all"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Right Column: Citizen Credentials & Notifications */}
        <div className="space-y-6">
          {/* Account credentials box */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-subtle space-y-4">
            <h3 className="text-xs font-bold text-navy-950 uppercase tracking-wider">
              Citizen ID Credentials
            </h3>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Citizen ID:</span>
                <span className="font-mono font-bold text-navy-900">{user?.citizenId || "CIV-8921-OK"}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Registered Since:</span>
                <span className="font-semibold text-slate-800">{user?.joinDate || "October 2023"}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">KYC Status:</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  Government Verified
                </span>
              </div>
            </div>
          </div>

          {/* Notification toggles */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-subtle space-y-4">
            <h3 className="text-xs font-bold text-navy-950 uppercase tracking-wider flex items-center gap-1.5">
              <Bell className="w-3.5 h-3.5 text-brand-600" />
              <span>Civic Notification Preferences</span>
            </h3>

            <div className="space-y-3 pt-1">
              <label className="flex items-center justify-between cursor-pointer text-xs">
                <span className="font-medium text-slate-700">Email ticket progress alerts</span>
                <input
                  type="checkbox"
                  checked={notifications.emailAlerts}
                  onChange={(e) => {
                    setNotifications(prev => ({ ...prev, emailAlerts: e.target.checked }));
                    showToast("Notification settings updated.", "info");
                  }}
                  className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer text-xs">
                <span className="font-medium text-slate-700">SMS urgent dispatch updates</span>
                <input
                  type="checkbox"
                  checked={notifications.smsDispatches}
                  onChange={(e) => {
                    setNotifications(prev => ({ ...prev, smsDispatches: e.target.checked }));
                    showToast("Notification settings updated.", "info");
                  }}
                  className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer text-xs">
                <span className="font-medium text-slate-700">AI triage confidence notifications</span>
                <input
                  type="checkbox"
                  checked={notifications.aiUpdates}
                  onChange={(e) => {
                    setNotifications(prev => ({ ...prev, aiUpdates: e.target.checked }));
                    showToast("Notification settings updated.", "info");
                  }}
                  className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500"
                />
              </label>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

