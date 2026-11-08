import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  PlusCircle, 
  RotateCcw, 
  MapPin, 
  Navigation, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle,
  Info,
  Building2,
  Send
} from 'lucide-react';
import { ImageUpload } from '../components/forms/ImageUpload';
import { useComplaints } from '../context/ComplaintsContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { CATEGORIES } from '../data/mockComplaints';

export const ReportIssuePage = () => {
  const { addComplaint } = useComplaints();
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Road Damage');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [location, setLocation] = useState('');
  const [latitude, setLatitude] = useState('37.7749');
  const [longitude, setLongitude] = useState('-122.4194');
  const [priority, setPriority] = useState('High');

  // UI State
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLocating, setIsLocating] = useState(false);

  // Available categories without "All Categories" filter option
  const validCategories = CATEGORIES.filter(c => c !== "All Categories");

  // Quick geolocation simulator
  const handleGetLocation = () => {
    setIsLocating(true);
    setTimeout(() => {
      const demoLocations = [
        { address: "420 Market Street, Financial District", lat: 37.7915, lon: -122.3995 },
        { address: "Corner of 16th & Mission Street", lat: 37.7650, lon: -122.4198 },
        { address: "895 Geary Blvd, Civic Center", lat: 37.7857, lon: -122.4182 },
        { address: "Sunrise Boulevard near Ward 7 Park", lat: 37.7534, lon: -122.4312 },
      ];
      const randomLoc = demoLocations[Math.floor(Math.random() * demoLocations.length)];
      setLocation(randomLoc.address);
      setLatitude(randomLoc.lat.toFixed(4));
      setLongitude(randomLoc.lon.toFixed(4));
      setIsLocating(false);
      showToast("Current GPS location resolved successfully!", "info");
      if (errors.location) setErrors((prev) => ({ ...prev, location: '' }));
    }, 600);
  };

  const handleClearForm = () => {
    setTitle('');
    setCategory('Road Damage');
    setDescription('');
    setImageUrl('');
    setLocation('');
    setLatitude('37.7749');
    setLongitude('-122.4194');
    setPriority('High');
    setErrors({});
    showToast("Form cleared.", "info");
  };

  const validate = () => {
    const errs = {};
    if (!title.trim()) {
      errs.title = "Issue title is required";
    } else if (title.trim().length < 6) {
      errs.title = "Please provide a descriptive title (at least 6 characters)";
    }

    if (!category) {
      errs.category = "Please select a category";
    }

    if (!description.trim()) {
      errs.description = "Detailed description is required";
    } else if (description.trim().length < 15) {
      errs.description = "Please describe the problem in more detail (at least 15 characters)";
    }

    if (!imageUrl) {
      errs.imageUrl = "Please upload or select an evidence photograph";
    }

    if (!location.trim()) {
      errs.location = "Street address or landmark is required";
    }

    if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
      errs.coordinates = "Valid GPS coordinates are required";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast("Please fill in all required fields marked in red.", "warning");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const created = addComplaint({
        title,
        category,
        description,
        imageUrl,
        location,
        latitude,
        longitude,
        priority,
        reporterName: user?.name,
        reporterEmail: user?.email
      });

      setIsSubmitting(false);
      showToast(`Complaint #${created.id} registered and queued for AI triage!`, "success", "Report Lodged");
      navigate('/my-complaints');
    }, 900);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>AI-Assisted Citizen Submission</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            Report a Civic Issue
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Submit road fissures, sanitation piles, water leaks, or electrical hazards directly to municipal teams.
          </p>
        </div>

        <button
          type="button"
          onClick={handleClearForm}
          className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200/80 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Clear Form</span>
        </button>
      </div>

      {/* Main Submission Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Section 1: Visual Evidence */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-subtle">
          <h2 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2 mb-4">
            <span className="w-6 h-6 rounded-full bg-navy-900 text-white text-xs flex items-center justify-center font-bold">1</span>
            <span>Photograph & Visual Evidence</span>
          </h2>

          <ImageUpload
            imageUrl={imageUrl}
            onImageChange={(url) => {
              setImageUrl(url);
              if (errors.imageUrl) setErrors((prev) => ({ ...prev, imageUrl: '' }));
            }}
            onCategorySuggest={(suggested) => {
              setCategory(suggested);
              showToast(`AI auto-selected category "${suggested}" based on image patterns!`, 'info');
            }}
            error={errors.imageUrl}
          />
        </div>

        {/* Section 2: Issue Details */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-subtle space-y-5">
          <h2 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2 mb-4">
            <span className="w-6 h-6 rounded-full bg-navy-900 text-white text-xs flex items-center justify-center font-bold">2</span>
            <span>Issue Details & Severity</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Title */}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Issue Title <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (errors.title) setErrors((prev) => ({ ...prev, title: '' }));
                }}
                placeholder="e.g. Deep pothole opening up on 4th Ave near crosswalk"
                className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                  errors.title ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200 bg-white'
                } focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-800 transition-all`}
              />
              {errors.title && <p className="text-xs text-rose-600 mt-1">{errors.title}</p>}
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Issue Category <span className="text-rose-500">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  if (errors.category) setErrors((prev) => ({ ...prev, category: '' }));
                }}
                className="w-full px-4 py-2.5 text-sm font-medium rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 cursor-pointer shadow-xs"
              >
                {validCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Priority Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Urgency / Priority
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['Low', 'Medium', 'High', 'Critical'].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setPriority(lvl)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                      priority === lvl
                        ? lvl === 'Critical'
                          ? 'bg-rose-50 border-rose-300 text-rose-700 shadow-xs ring-1 ring-rose-400'
                          : lvl === 'High'
                          ? 'bg-orange-50 border-orange-300 text-orange-700 shadow-xs ring-1 ring-orange-400'
                          : lvl === 'Medium'
                          ? 'bg-blue-50 border-blue-300 text-blue-700 shadow-xs ring-1 ring-blue-400'
                          : 'bg-slate-100 border-slate-300 text-slate-700 shadow-xs ring-1 ring-slate-400'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Detailed Description <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  if (errors.description) setErrors((prev) => ({ ...prev, description: '' }));
                }}
                placeholder="Describe size, depth, danger to pedestrians or vehicular traffic, and how long the problem has existed..."
                className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                  errors.description ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200 bg-white'
                } focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-800 transition-all`}
              />
              {errors.description && <p className="text-xs text-rose-600 mt-1">{errors.description}</p>}
            </div>
          </div>
        </div>

        {/* Section 3: Geolocation */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-subtle space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-navy-900 text-white text-xs flex items-center justify-center font-bold">3</span>
              <span>Location & GPS Geocoding</span>
            </h2>

            <button
              type="button"
              onClick={handleGetLocation}
              disabled={isLocating}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-700 font-semibold text-xs border border-teal-200 transition-colors shadow-xs"
            >
              <Navigation className={`w-3.5 h-3.5 ${isLocating ? 'animate-spin' : ''}`} />
              <span>{isLocating ? "Fetching Coordinates..." : "Use Current GPS"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-3">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Location Address / Landmark <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    if (errors.location) setErrors((prev) => ({ ...prev, location: '' }));
                  }}
                  placeholder="e.g. 4th Avenue & Pine Street, Downtown Metro"
                  className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border ${
                    errors.location ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200 bg-white'
                  } focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-800 transition-all`}
                />
              </div>
              {errors.location && <p className="text-xs text-rose-600 mt-1">{errors.location}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Latitude
              </label>
              <input
                type="text"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                placeholder="37.7749"
                className="w-full font-mono px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-700 focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Longitude
              </label>
              <input
                type="text"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                placeholder="-122.4194"
                className="w-full font-mono px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-700 focus:bg-white focus:outline-none"
              />
            </div>

            <div className="flex items-end">
              <div className="w-full bg-slate-50 rounded-xl p-2.5 border border-slate-200/80 flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Smart GIS Geocoded</span>
              </div>
            </div>
          </div>
          {errors.coordinates && <p className="text-xs text-rose-600">{errors.coordinates}</p>}
        </div>

        {/* Submit Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={handleClearForm}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors"
          >
            Reset Form
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-sm shadow-md transition-all disabled:opacity-70"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Submitting to CivicEye AI Triage...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Report</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

