import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_COMPLAINTS } from '../data/mockComplaints';

const ComplaintsContext = createContext(null);

export const ComplaintsProvider = ({ children }) => {
  const [complaints, setComplaints] = useState(() => {
    try {
      const stored = localStorage.getItem('civic_eye_complaints');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Failed to read complaints from storage", e);
    }
    return INITIAL_COMPLAINTS;
  });

  const [selectedComplaint, setSelectedComplaint] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('civic_eye_complaints', JSON.stringify(complaints));
    } catch (e) {
      console.error("Failed to save complaints to storage", e);
    }
  }, [complaints]);

  const addComplaint = (newIssue) => {
    const idNumber = Math.floor(8900 + Math.random() * 1000);
    const complaintId = `CE-2024-${idNumber}`;
    const now = new Date();
    
    // Auto-derive AI analysis simulation based on category
    const aiCategoryPresets = {
      "Road Damage": {
        detectedIssue: "Surface Pavement Cracking & Sub-base Defect",
        severityLevel: "High - Traffic Impediment",
        suggestedDepartment: "Department of Transportation & Municipal Roads"
      },
      "Garbage / Waste": {
        detectedIssue: "Municipal Waste Containment Overflow",
        severityLevel: "High - Sanitation Hazard",
        suggestedDepartment: "Sanitation & Waste Management Authority"
      },
      "Water Leakage": {
        detectedIssue: "Subsurface Utility Pipe Rupture",
        severityLevel: "Critical - Potable Water Loss",
        suggestedDepartment: "Metro Water Supply & Sewerage Board"
      },
      "Broken Streetlight": {
        detectedIssue: "Photocell / Luminaire Circuit Failure",
        severityLevel: "Medium - Pedestrian Visibility",
        suggestedDepartment: "Bureau of Street Lighting & Energy"
      },
      "Open Manhole": {
        detectedIssue: "Missing / Submerged Utility Vault Lid",
        severityLevel: "Critical - Severe Fall Hazard",
        suggestedDepartment: "Public Works & Drainage Commission"
      },
      "Damaged Footpath": {
        detectedIssue: "Pedestrian Walkway Structural Fracture",
        severityLevel: "Medium - Trip Hazard",
        suggestedDepartment: "Urban Forestry & Sidewalk Maintenance"
      },
      "Other": {
        detectedIssue: "Civic Public Space Deterioration",
        severityLevel: "Medium - Municipal Assessment",
        suggestedDepartment: "General Municipal Services"
      }
    };

    const preset = aiCategoryPresets[newIssue.category] || aiCategoryPresets["Other"];

    const complaintRecord = {
      id: complaintId,
      title: newIssue.title,
      category: newIssue.category,
      description: newIssue.description,
      location: newIssue.location || "Central Metro District",
      latitude: parseFloat(newIssue.latitude) || 37.7749,
      longitude: parseFloat(newIssue.longitude) || -122.4194,
      priority: newIssue.priority || "High",
      status: "Submitted",
      reportedDate: now.toISOString(),
      formattedDate: now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      imageUrl: newIssue.imageUrl || "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&auto=format&fit=crop&q=80",
      reporter: {
        name: newIssue.reporterName || "Alex Morgan",
        email: newIssue.reporterEmail || "alex.morgan@civicmail.org",
        phone: "+1 (555) 234-5678",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
      },
      aiAnalysis: {
        detectedIssue: preset.detectedIssue,
        confidenceScore: `${(92 + Math.random() * 7).toFixed(1)}%`,
        severityLevel: preset.severityLevel,
        duplicateDetected: false,
        suggestedDepartment: preset.suggestedDepartment
      },
      department: preset.suggestedDepartment,
      assignedOfficer: "Pending Municipal Triage",
      timeline: [
        {
          date: now.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }) + ', ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: "Submitted",
          note: "Report registered by citizen via CivicEye portal."
        },
        {
          date: now.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }) + ', ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: "Under Review",
          note: "CivicEye AI model validated visual evidence and tagged priority."
        }
      ]
    };

    setComplaints((prev) => [complaintRecord, ...prev]);
    return complaintRecord;
  };

  const updateComplaintStatus = (id, newStatus) => {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }) + ', ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setComplaints((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updatedTimeline = [
            ...item.timeline,
            {
              date: dateStr,
              status: newStatus,
              note: `Status updated to ${newStatus} by civic operations desk.`
            }
          ];
          return {
            ...item,
            status: newStatus,
            timeline: updatedTimeline
          };
        }
        return item;
      })
    );
  };

  const resetToSampleData = () => {
    setComplaints(INITIAL_COMPLAINTS);
    localStorage.removeItem('civic_eye_complaints');
  };

  return (
    <ComplaintsContext.Provider
      value={{
        complaints,
        selectedComplaint,
        setSelectedComplaint,
        addComplaint,
        updateComplaintStatus,
        resetToSampleData
      }}
    >
      {children}
    </ComplaintsContext.Provider>
  );
};

export const useComplaints = () => {
  const context = useContext(ComplaintsContext);
  if (!context) {
    throw new Error('useComplaints must be used within a ComplaintsProvider');
  }
  return context;
};

