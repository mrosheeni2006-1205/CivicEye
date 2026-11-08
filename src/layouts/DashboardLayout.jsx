import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/dashboard/Sidebar';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { ComplaintDetailsModal } from '../components/common/ComplaintDetailsModal';
import { useComplaints } from '../context/ComplaintsContext';

export const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { selectedComplaint, setSelectedComplaint } = useComplaints();
  const location = useLocation();

  const getPageTitle = (path) => {
    switch (path) {
      case '/dashboard':
        return 'Citizen Dashboard';
      case '/report':
        return 'Report an Issue';
      case '/my-complaints':
        return 'My Submitted Complaints';
      case '/explore':
        return 'Explore Civic Issues';
      case '/profile':
        return 'Citizen Profile & Preferences';
      default:
        return 'CivicEye Portal';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
        <DashboardHeader
          title={getPageTitle(location.pathname)}
          onOpenSidebar={() => setSidebarOpen(true)}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>

      {/* Shared Detail Modal */}
      <ComplaintDetailsModal
        isOpen={Boolean(selectedComplaint)}
        complaint={selectedComplaint}
        onClose={() => setSelectedComplaint(null)}
      />
    </div>
  );
};

