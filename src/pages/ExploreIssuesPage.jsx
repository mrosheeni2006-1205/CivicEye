import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Layers, 
  Sparkles, 
  Navigation, 
  Compass, 
  ZoomIn, 
  ZoomOut, 
  Maximize2,
  Calendar,
  Building2,
  ArrowRight,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { useComplaints } from '../context/ComplaintsContext';
import { StatusBadge } from '../components/common/StatusBadge';
import { PriorityBadge } from '../components/common/PriorityBadge';
import { SearchBar } from '../components/common/SearchBar';
import { FilterDropdown } from '../components/common/FilterDropdown';
import { ComplaintCard } from '../components/dashboard/ComplaintCard';
import { CATEGORIES, PRIORITIES } from '../data/mockComplaints';

export const ExploreIssuesPage = () => {
  const { complaints, setSelectedComplaint } = useComplaints();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedPriority, setSelectedPriority] = useState('All Priorities');
  const [activePin, setActivePin] = useState(null);
  const [mapLayer, setMapLayer] = useState('Standard'); // 'Standard' | 'Satellite' | 'Heatmap'

  const filteredComplaints = useMemo(() => {
    return complaints.filter((item) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query ||
        item.title.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      const matchesCategory = selectedCategory === 'All Categories' || item.category === selectedCategory;
      const matchesPriority = selectedPriority === 'All Priorities' || item.priority === selectedPriority;

      return matchesSearch && matchesCategory && matchesPriority;
    });
  }, [complaints, searchQuery, selectedCategory, selectedPriority]);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-xs font-semibold border border-cyan-200 mb-2">
            <Compass className="w-3.5 h-3.5 text-cyan-600" />
            <span>Public Civic Explorer</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            Explore Citywide Civic Issues
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Discover community reports across all municipal wards with geocoded spatial coordinates.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-semibold text-slate-400">Total Visible</p>
            <p className="text-lg font-extrabold text-navy-950">{filteredComplaints.length} Issues</p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-subtle flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="flex-1 max-w-lg">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by neighborhood, street name, category..."
          />
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <FilterDropdown
            options={CATEGORIES}
            value={selectedCategory}
            onChange={setSelectedCategory}
            icon={Filter}
          />

          <FilterDropdown
            options={PRIORITIES}
            value={selectedPriority}
            onChange={setSelectedPriority}
            icon={Filter}
          />
        </div>
      </div>

      {/* Interactive Map Section (Interactive Smart City GIS Representation) */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-subtle overflow-hidden">
        {/* Map Header Bar */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-navy-950 tracking-wide uppercase">
              Smart GIS Spatial Map View
            </span>
            <span className="text-[11px] text-slate-500 hidden sm:inline">
              • Interactive geocoded incident pins
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <div className="bg-white p-1 rounded-xl border border-slate-200 flex items-center gap-1 shadow-xs">
              {['Standard', 'Satellite', 'Heatmap'].map((layer) => (
                <button
                  key={layer}
                  onClick={() => setMapLayer(layer)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    mapLayer === layer
                      ? 'bg-navy-900 text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {layer}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Map Canvas with simulated GIS vector grid, streets & interactive pins */}
        <div className="relative h-80 sm:h-96 w-full bg-slate-900 overflow-hidden select-none">
          {/* Base map styling based on layer */}
          <div 
            className={`absolute inset-0 transition-opacity duration-500 ${
              mapLayer === 'Satellite' ? 'opacity-80' : mapLayer === 'Heatmap' ? 'opacity-40' : 'opacity-60'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&auto=format&fit=crop&q=80"
              alt="Urban Map Cartography"
              className="w-full h-full object-cover filter contrast-125 saturate-50"
            />
          </div>

          {/* SVG Map Grid Overlay */}
          <div className="absolute inset-0 bg-navy-950/40 pointer-events-none" />
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-1.5 z-20">
            <button className="w-8 h-8 rounded-lg bg-white/90 hover:bg-white text-slate-800 shadow-md flex items-center justify-center transition-colors">
              <ZoomIn className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-lg bg-white/90 hover:bg-white text-slate-800 shadow-md flex items-center justify-center transition-colors">
              <ZoomOut className="w-4 h-4" />
            </button>
          </div>

          {/* Simulated Geocoded Pins from filtered complaints */}
          <div className="absolute inset-0 p-8 flex items-center justify-center">
            {filteredComplaints.slice(0, 6).map((item, idx) => {
              // Deterministic pseudo coordinates on the canvas
              const positions = [
                { top: '25%', left: '32%' },
                { top: '65%', left: '20%' },
                { top: '40%', left: '55%' },
                { top: '75%', left: '68%' },
                { top: '20%', left: '78%' },
                { top: '50%', left: '42%' },
              ];
              const pos = positions[idx % positions.length];
              const isSelected = activePin?.id === item.id;

              const pinColor = item.priority === 'Critical' 
                ? 'bg-rose-500' 
                : item.priority === 'High' 
                ? 'bg-orange-500' 
                : 'bg-teal-500';

              return (
                <div
                  key={item.id}
                  style={{ top: pos.top, left: pos.left }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 group"
                  onClick={() => setActivePin(item)}
                >
                  <button
                    className={`relative p-2 rounded-full text-white shadow-xl transition-all duration-300 ${pinColor} ${
                      isSelected ? 'ring-4 ring-white scale-125 z-30' : 'hover:scale-110'
                    }`}
                    title={item.title}
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-white border border-slate-900" />
                  </button>

                  {/* Hover tooltip */}
                  <div className="hidden group-hover:block absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 bg-navy-950/90 backdrop-blur-md text-white p-2.5 rounded-xl shadow-xl text-left pointer-events-none z-30">
                    <p className="font-mono text-[10px] text-brand-300 font-bold">{item.id}</p>
                    <p className="text-xs font-semibold truncate mt-0.5">{item.title}</p>
                    <p className="text-[10px] text-slate-300 mt-1">{item.location}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Pin Preview Flyout Card */}
          {activePin && (
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-200 z-30 animate-fade-in">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="font-mono text-[10px] font-bold text-navy-800 bg-navy-50 px-2 py-0.5 rounded">
                    {activePin.id}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 mt-1 truncate">
                    {activePin.title}
                  </h4>
                </div>
                <button
                  onClick={() => setActivePin(null)}
                  className="text-slate-400 hover:text-slate-600 text-xs p-1"
                >
                  ✕
                </button>
              </div>

              <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1 truncate">
                <MapPin className="w-3 h-3 text-brand-600 flex-shrink-0" />
                <span className="truncate">{activePin.location}</span>
              </p>

              <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100">
                <StatusBadge status={activePin.status} size="xs" />
                <button
                  type="button"
                  onClick={() => setSelectedComplaint(activePin)}
                  className="text-xs font-bold text-brand-600 hover:text-brand-800 inline-flex items-center gap-1"
                >
                  <span>Full Ticket</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Map Status Pill */}
          <div className="absolute bottom-4 right-4 bg-navy-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-white text-[11px] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Interactive Geocoding Layer Active</span>
          </div>
        </div>
      </div>

      {/* Issues Grid Cards */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Reported Infrastructure Incidents ({filteredComplaints.length})
          </h2>
          <span className="text-xs text-slate-500">
            Click any card to inspect AI analysis & timeline
          </span>
        </div>

        {filteredComplaints.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/90 shadow-subtle">
            <p className="text-sm font-semibold text-slate-700">No issues match the selected criteria.</p>
            <p className="text-xs text-slate-400 mt-1">Try clearing filters or search query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComplaints.map((item) => (
              <ComplaintCard
                key={item.id}
                complaint={item}
                onClick={() => setSelectedComplaint(item)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

