import React, { useState } from 'react';
import { Modal } from './Modal';
import { StatusBadge } from './StatusBadge';
import { PriorityBadge } from './PriorityBadge';
import { useComplaints } from '../../context/ComplaintsContext';
import { useToast } from '../../context/ToastContext';
import { 
  MapPin, 
  Calendar, 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  ExternalLink,
  ShieldAlert,
  User,
  Clock,
  Navigation,
  ThumbsUp,
  Printer,
  CheckCheck
} from 'lucide-react';

export const ComplaintDetailsModal = ({ complaint, isOpen, onClose }) => {
  const { updateComplaintStatus } = useComplaints();
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [upvotesCount, setUpvotesCount] = useState(14);
  const [activePhotoTab, setActivePhotoTab] = useState('initial'); // 'initial' | 'restored'

  if (!complaint) return null;

  const handleCopyId = () => {
    navigator.clipboard?.writeText(complaint.id);
    setCopied(true);
    showToast(`Complaint ID ${complaint.id} copied to clipboard!`, 'info');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleStatusChange = (newStatus) => {
    updateComplaintStatus(complaint.id, newStatus);
    showToast(`Status updated to "${newStatus}"`, 'success');
  };

  const handleUpvote = () => {
    if (hasUpvoted) {
      setUpvotesCount((prev) => prev - 1);
      setHasUpvoted(false);
      showToast("Confirmation removed.", "info");
    } else {
      setUpvotesCount((prev) => prev + 1);
      setHasUpvoted(true);
      showToast("Thank you! Your civic confirmation reinforces priority triage.", "success");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Sample restored photo for resolved demonstration
  const restoredPhoto = "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?w=800&auto=format&fit=crop&q=80";

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="max-w-3xl"
      title={
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-navy-800 bg-navy-50 px-2.5 py-1 rounded-lg border border-navy-100">
            {complaint.id}
          </span>
          <span className="text-slate-800 font-bold text-base truncate max-w-md">
            {complaint.title}
          </span>
        </div>
      }
      subtitle={`Lodged on ${complaint.formattedDate} • ${complaint.category}`}
    >
      <div className="space-y-6">
        {/* Top Badges & Interactive Status Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div className="flex flex-wrap items-center gap-2.5">
            <StatusBadge status={complaint.status} size="lg" />
            <PriorityBadge priority={complaint.priority} size="lg" />
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
              <Building2 className="w-3.5 h-3.5 text-slate-400" />
              {complaint.department}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium">Simulate Stage:</span>
            <select
              value={complaint.status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="text-xs font-semibold text-navy-900 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 cursor-pointer shadow-xs"
              aria-label="Update complaint status"
            >
              <option value="Submitted">Submitted</option>
              <option value="Under Review">Under Review</option>
              <option value="Assigned">Assigned</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        </div>

        {/* Media Preview & Core Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Image Container with Before/After toggle if Resolved */}
          <div className="space-y-2">
            {complaint.status === 'Resolved' && (
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setActivePhotoTab('initial')}
                  className={`flex-1 py-1 rounded-md transition-colors ${
                    activePhotoTab === 'initial' ? 'bg-white text-navy-950 shadow-xs' : 'text-slate-500'
                  }`}
                >
                  Reported Damage
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhotoTab('restored')}
                  className={`flex-1 py-1 rounded-md transition-colors ${
                    activePhotoTab === 'restored' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-500'
                  }`}
                >
                  Restored Site
                </button>
              </div>
            )}

            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-video md:aspect-auto h-56 md:h-64 shadow-xs group">
              <img
                src={activePhotoTab === 'restored' && complaint.status === 'Resolved' ? restoredPhoto : complaint.imageUrl}
                alt={complaint.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-navy-950/75 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-brand-300" />
                {activePhotoTab === 'restored' && complaint.status === 'Resolved'
                  ? "Municipal Verification Photo"
                  : "Verified Geotagged Photo"}
              </div>
            </div>
          </div>

          {/* Location & Reporter Info */}
          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Location & Coordinates</h4>
                <div className="mt-1 flex items-start gap-2 text-sm text-slate-800 font-medium">
                  <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span>{complaint.location}</span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs font-mono text-slate-500 pl-6">
                  <Navigation className="w-3 h-3 text-slate-400" />
                  <span>Lat: {complaint.latitude?.toFixed(4)}, Lon: {complaint.longitude?.toFixed(4)}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Citizen Reporter</h4>
                <div className="mt-1 flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200">
                  <img
                    src={complaint.reporter?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"}
                    alt={complaint.reporter?.name}
                    className="w-9 h-9 rounded-full object-cover border border-slate-100"
                  />
                  <div className="text-xs">
                    <p className="font-semibold text-slate-900">{complaint.reporter?.name || "Alex Morgan"}</p>
                    <p className="text-slate-500">{complaint.reporter?.email || "alex.morgan@civicmail.org"}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Assigned Field Unit</h4>
                <p className="mt-1 text-xs font-medium text-slate-700 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-brand-600" />
                  {complaint.assignedOfficer || "Rapid Response Team #3"}
                </p>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                type="button"
                onClick={handleUpvote}
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                  hasUpvoted
                    ? 'bg-teal-50 border-teal-300 text-teal-700'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <ThumbsUp className={`w-3.5 h-3.5 ${hasUpvoted ? 'fill-current' : ''}`} />
                <span>{hasUpvoted ? "Confirmed (+1)" : "Confirm Issue"} ({upvotesCount})</span>
              </button>

              <button
                type="button"
                onClick={handleCopyId}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                {copied ? "Copied!" : "Copy ID"}
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                title="Print ticket record"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div>
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Detailed Description</h4>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed bg-slate-50/70 p-4 rounded-xl border border-slate-100">
            {complaint.description}
          </p>
        </div>

        {/* AI Smart Assessment Card */}
        {complaint.aiAnalysis && (
          <div className="bg-gradient-to-br from-brand-50/60 to-sky-50/60 border border-brand-200/80 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-teal-500 text-white flex items-center justify-center shadow-xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wide">CivicEye AI Triage Assessment</h4>
                  <p className="text-[11px] text-brand-700">Automated computer vision & geo-spatial classification</p>
                </div>
              </div>
              <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-brand-100 text-brand-800 border border-brand-200">
                {complaint.aiAnalysis.confidenceScore} Confidence
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mt-3 pt-3 border-t border-brand-200/50">
              <div>
                <span className="text-slate-500 font-medium">Detected Pattern:</span>
                <p className="font-semibold text-slate-900 mt-0.5">{complaint.aiAnalysis.detectedIssue}</p>
              </div>
              <div>
                <span className="text-slate-500 font-medium">Priority / Severity:</span>
                <p className="font-semibold text-slate-900 mt-0.5">{complaint.aiAnalysis.severityLevel}</p>
              </div>
              <div>
                <span className="text-slate-500 font-medium">Duplicate Deduplication:</span>
                <p className="font-semibold text-emerald-700 flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {complaint.aiAnalysis.duplicateDetected ? "Linked to cluster" : "Unique incident verified"}
                </p>
              </div>
              <div>
                <span className="text-slate-500 font-medium">Recommended Authority:</span>
                <p className="font-semibold text-slate-900 mt-0.5">{complaint.aiAnalysis.suggestedDepartment}</p>
              </div>
            </div>
          </div>
        )}

        {/* Resolution Timeline */}
        <div>
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Resolution Progress Timeline</h4>
          <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            {complaint.timeline?.map((step, idx) => (
              <div key={idx} className="relative flex items-start gap-3">
                <span className="absolute -left-6 top-1 w-4 h-4 rounded-full border-2 border-white bg-teal-500 ring-2 ring-teal-100" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{step.status}</span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {step.date}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">{step.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
