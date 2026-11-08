import React, { useState, useRef } from 'react';
import { UploadCloud, Image as ImageIcon, X, Sparkles, Check, RefreshCw } from 'lucide-react';

const PRESET_SAMPLE_IMAGES = [
  {
    name: "Pothole Sample",
    url: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&auto=format&fit=crop&q=80",
    categoryHint: "Road Damage"
  },
  {
    name: "Waste Overflow Sample",
    url: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=800&auto=format&fit=crop&q=80",
    categoryHint: "Garbage / Waste"
  },
  {
    name: "Water Burst Sample",
    url: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?w=800&auto=format&fit=crop&q=80",
    categoryHint: "Water Leakage"
  },
  {
    name: "Broken Streetlamp",
    url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80",
    categoryHint: "Broken Streetlight"
  }
];

export const ImageUpload = ({ imageUrl, onImageChange, onCategorySuggest, error }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const processFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert("Please upload an image file (JPG, PNG, WebP).");
      return;
    }

    const reader = new FileReader();
    setIsScanning(true);
    reader.onload = (event) => {
      onImageChange(event.target.result);
      setTimeout(() => {
        setIsScanning(false);
      }, 700);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleSelectPreset = (preset) => {
    setIsScanning(true);
    onImageChange(preset.url);
    if (onCategorySuggest && preset.categoryHint) {
      onCategorySuggest(preset.categoryHint);
    }
    setTimeout(() => {
      setIsScanning(false);
    }, 600);
  };

  const handleRemove = () => {
    onImageChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
          Evidence Photograph <span className="text-rose-500">*</span>
        </label>
        <span className="text-[11px] text-slate-400">JPG, PNG up to 10MB</span>
      </div>

      {!imageUrl ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center transition-all cursor-pointer group ${
            isDragging
              ? 'border-brand-500 bg-brand-50/50'
              : error
              ? 'border-rose-300 bg-rose-50/30'
              : 'border-slate-200 hover:border-brand-400 bg-slate-50/60 hover:bg-slate-50'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInput}
            className="hidden"
          />

          <div className="w-14 h-14 mx-auto rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-400 group-hover:text-brand-600 group-hover:border-brand-200 transition-all">
            <UploadCloud className="w-7 h-7" />
          </div>

          <p className="mt-4 text-sm font-semibold text-slate-800">
            Click to upload or drag & drop image
          </p>
          <p className="text-xs text-slate-500 mt-1">
            High-resolution on-site photo ensures accurate AI severity classification
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-medium text-slate-600 border border-slate-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-500" />
            AI Computer Vision Model Active
          </div>
        </div>
      ) : (
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 group">
          <img
            src={imageUrl}
            alt="Complaint Preview"
            className="w-full h-64 object-cover object-center group-hover:scale-102 transition-transform duration-300"
          />

          {/* Overlay Status Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="bg-navy-950/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-lg flex items-center gap-1.5 border border-white/10">
              <Check className="w-3.5 h-3.5 text-brand-400" />
              Photograph Loaded
            </span>
            {isScanning && (
              <span className="bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-lg flex items-center gap-1.5 animate-pulse">
                <RefreshCw className="w-3 h-3 animate-spin" />
                Scanning Features...
              </span>
            )}
          </div>

          {/* Remove Button */}
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-3 right-3 p-2 rounded-xl bg-navy-950/80 hover:bg-rose-600 text-white backdrop-blur-md transition-colors shadow-md"
            aria-label="Remove image"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-navy-950/90 to-transparent text-white flex items-center justify-between text-xs">
            <span className="font-medium text-slate-200">Image analysis ready for submission</span>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-brand-300 hover:text-white font-semibold underline underline-offset-2"
            >
              Replace
            </button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInput}
            className="hidden"
          />
        </div>
      )}

      {/* Quick Sample Presets for smooth testing & demoing */}
      <div className="pt-1">
        <p className="text-[11px] font-semibold text-slate-500 mb-2">Or choose a realistic civic photo demo:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PRESET_SAMPLE_IMAGES.map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => handleSelectPreset(preset)}
              className="flex items-center gap-2 p-1.5 rounded-lg border border-slate-200 hover:border-brand-300 bg-white hover:bg-brand-50/40 text-left transition-all"
            >
              <img src={preset.url} alt={preset.name} className="w-8 h-8 rounded-md object-cover flex-shrink-0" />
              <span className="text-[11px] font-medium text-slate-700 truncate">{preset.name}</span>
            </button>
          ))}
        </div>
      </div>

      {error && <p className="text-xs text-rose-600 font-medium">{error}</p>}
    </div>
  );
};

