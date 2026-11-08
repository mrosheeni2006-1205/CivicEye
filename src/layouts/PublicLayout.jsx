import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { ComplaintDetailsModal } from '../components/common/ComplaintDetailsModal';
import { useComplaints } from '../context/ComplaintsContext';

export const PublicLayout = () => {
  const { selectedComplaint, setSelectedComplaint } = useComplaints();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      <ComplaintDetailsModal
        isOpen={Boolean(selectedComplaint)}
        complaint={selectedComplaint}
        onClose={() => setSelectedComplaint(null)}
      />
    </div>
  );
};

