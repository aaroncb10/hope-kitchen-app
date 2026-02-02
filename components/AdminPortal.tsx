
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import DonorDashboard from './DonorDashboard';
import KitchenDisplay from './KitchenDisplay';
import DistributionMap from './DistributionMap';
import { UserRole } from '../types';
import { LogOut, LayoutGrid } from 'lucide-react';

interface AdminPortalProps {
  onLogout: () => void;
}

const AdminPortal: React.FC<AdminPortalProps> = ({ onLogout }) => {
  const [activeRole, setActiveRole] = useState<UserRole>('DONOR');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar 
        activeRole={activeRole} 
        onRoleChange={setActiveRole} 
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
      />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header activeRole={activeRole} />
        
        <div className="absolute top-6 right-8 z-20 md:hidden">
          <button onClick={onLogout} className="p-2 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500">
            <LogOut className="w-5 h-5" />
          </button>
        </div>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <span className="px-3 py-1 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full">Administrator Mode</span>
                <h2 className="text-3xl font-black text-gray-900 mt-2">Executive Dashboard</h2>
              </div>
              <button 
                onClick={onLogout}
                className="hidden md:flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 rounded-2xl text-sm font-bold text-gray-500 hover:text-red-500 transition-all hover:border-red-100 shadow-sm"
              >
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </div>

            <div className="space-y-12">
              {activeRole === 'DONOR' && <DonorDashboard />}
              {activeRole === 'KITCHEN' && <KitchenDisplay />}
              {activeRole === 'DISTRIBUTION' && <DistributionMap />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPortal;
