import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Shield, Cpu, Activity, ExternalLink, Heart, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-900 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-900/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-navy-800 border border-navy-700 text-brand-400 flex items-center justify-center">
                <Eye className="w-5 h-5 text-brand-300" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold text-white tracking-tight">Civic<span className="text-brand-400">Eye</span></span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-950 text-brand-300 px-1.5 py-0.5 rounded border border-brand-800">
                  GovTech AI
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An intelligent, transparent civic issue reporting and municipal dispatch platform connecting citizens with urban infrastructure authorities for faster, automated, and verifiable resolution.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-900/90 border border-navy-800 text-xs font-medium text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>All AI Dispatch Engines Operational</span>
              </div>
            </div>
          </div>

          {/* Citizen Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Citizen Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/report" className="hover:text-brand-300 transition-colors">Report New Issue</Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-brand-300 transition-colors">Explore Public Issues</Link>
              </li>
              <li>
                <Link to="/my-complaints" className="hover:text-brand-300 transition-colors">Track Submitted Tickets</Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-brand-300 transition-colors">Citizen Dashboard</Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-brand-300 transition-colors">Account & Ward Settings</Link>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Civic Authorities</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <span className="hover:text-brand-300 cursor-pointer transition-colors">Dept. of Transportation</span>
              </li>
              <li>
                <span className="hover:text-brand-300 cursor-pointer transition-colors">Sanitation & Solid Waste</span>
              </li>
              <li>
                <span className="hover:text-brand-300 cursor-pointer transition-colors">Water Supply & Drainage</span>
              </li>
              <li>
                <span className="hover:text-brand-300 cursor-pointer transition-colors">Street Lighting Bureau</span>
              </li>
              <li>
                <span className="hover:text-brand-300 cursor-pointer transition-colors">Urban Forestry & Parks</span>
              </li>
            </ul>
          </div>

          {/* Technology & Compliance */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Platform & AI</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-brand-400" />
                <span>Computer Vision v3.2</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-brand-400" />
                <span>GIS Deduplication</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-brand-400" />
                <span>SLA Response Engine</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-brand-400" />
                <span>Smart City Node #78</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CivicEye Platform. Built for modern municipal smart governance.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Open Data Protocol</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Notice</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Citizen Charter</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

