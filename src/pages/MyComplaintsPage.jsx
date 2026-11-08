import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  PlusCircle, 
  Search, 
  Filter, 
  Grid3X3, 
  Table as TableIcon, 
  Calendar, 
  ArrowUpDown, 
  MapPin, 
  Eye, 
  Inbox, 
  Sparkles,
  Building2
} from 'lucide-react';
import { useComplaints } from '../context/ComplaintsContext';
import { StatusBadge } from '../components/common/StatusBadge';
import { PriorityBadge } from '../components/common/PriorityBadge';
import { SearchBar } from '../components/common/SearchBar';
import { FilterDropdown } from '../components/common/FilterDropdown';
import { ComplaintCard } from '../components/dashboard/ComplaintCard';
import { CATEGORIES, STATUSES } from '../data/mockComplaints';

export const MyComplaintsPage = () => {
  const { complaints, setSelectedComplaint } = useComplaints();

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');
  const [sortBy, setSortBy] = useState('newest'); // 'newest' | 'oldest'
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'

  const filteredComplaints = useMemo(() => {
    return complaints.filter((item) => {
      // Search matching title, id, location, or description
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query ||
        item.title.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      // Category matching
      const matchesCategory = selectedCategory === 'All Categories' || item.category === selectedCategory;

      // Status matching
      const matchesStatus = selectedStatus === 'All Statuses' || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    }).sort((a, b) => {
      const dateA = new Date(a.reportedDate).getTime();
      const dateB = new Date(b.reportedDate).getTime();
      return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [complaints, searchQuery, selectedCategory, selectedStatus, sortBy]);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            My Submitted Complaints
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Track stage milestones, AI assessments, and municipal field updates for all your tickets.
          </p>
        </div>

        <Link
          to="/report"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Report New Issue</span>
        </Link>
      </div>

      {/* Filter and Control Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-subtle flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by ticket ID, keyword, street..."
          />
        </div>

        {/* Filters & View Toggles */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Category Filter */}
          <FilterDropdown
            options={CATEGORIES}
            value={selectedCategory}
            onChange={setSelectedCategory}
            icon={Filter}
          />

          {/* Status Filter */}
          <FilterDropdown
            options={STATUSES}
            value={selectedStatus}
            onChange={setSelectedStatus}
            icon={Filter}
          />

          {/* Sort By Date */}
          <div className="relative inline-flex items-center">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="pl-8 pr-7 py-2.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 appearance-none shadow-xs cursor-pointer"
            >
              <option value="newest">Latest First</option>
              <option value="oldest">Oldest First</option>
            </select>
            <div className="absolute right-2.5 pointer-events-none text-slate-400">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/80">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-white text-navy-950 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Grid View"
              aria-label="Grid View"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'table'
                  ? 'bg-white text-navy-950 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Table View"
              aria-label="Table View"
            >
              <TableIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Content Rendering: Grid or Table */}
      {filteredComplaints.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/90 shadow-subtle space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Inbox className="w-8 h-8" />
          </div>
          <div className="max-w-sm mx-auto">
            <h3 className="text-base font-bold text-slate-800">No complaints found</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your search terms or filter selection to find what you are looking for.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All Categories');
              setSelectedStatus('All Statuses');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-brand-700 bg-brand-50 border border-brand-200 hover:bg-brand-100 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComplaints.map((item) => (
            <ComplaintCard
              key={item.id}
              complaint={item}
              onClick={() => setSelectedComplaint(item)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-subtle overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50/80 text-slate-500 font-semibold uppercase tracking-wider border-b border-slate-100">
                <tr>
                  <th className="py-3.5 px-6">Complaint ID</th>
                  <th className="py-3.5 px-4">Issue Title & Location</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Reported</th>
                  <th className="py-3.5 px-4">Priority</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-6 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredComplaints.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => setSelectedComplaint(item)}
                    className="hover:bg-slate-50/80 transition-colors cursor-pointer group"
                  >
                    <td className="py-4 px-6 font-mono font-bold text-navy-900 whitespace-nowrap">
                      {item.id}
                    </td>
                    <td className="py-4 px-4 max-w-sm">
                      <div className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors truncate">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5 truncate">
                        <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className="font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap text-slate-500">
                      {item.formattedDate}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <PriorityBadge priority={item.priority} size="xs" />
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <StatusBadge status={item.status} size="xs" />
                    </td>
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedComplaint(item);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-800 bg-brand-50 hover:bg-brand-100/70 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

