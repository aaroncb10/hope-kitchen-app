
import React from 'react';
import { UserRole } from '../types';
import { Bell, Search, Heart, Globe } from 'lucide-react';

interface HeaderProps {
  activeRole: UserRole;
}

const Header: React.FC<HeaderProps> = ({ activeRole }) => {
  const titles = {
    'DONOR': 'Restaurant & Donor Portal',
    'KITCHEN': 'Hope Kitchen - Meals of Hope',
    'DISTRIBUTION': 'Field Operations - Bengaluru'
  };

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-10">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{titles[activeRole]}</h1>
        <p className="text-sm text-gray-500 font-medium flex items-center gap-1">
          <Globe className="w-3 h-3" /> Real-time Sync Active • <span className="text-emerald-600">Area: Nagasandra, Bengaluru, Karnataka</span>
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex relative items-center">
          <Search className="absolute left-3 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search tasks, donors..." 
            className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-emerald-500 w-64 transition-all"
          />
        </div>
        
        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-all">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
        </button>

        <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
          <Heart className="w-4 h-4 text-emerald-600 fill-emerald-600" />
          <span className="text-emerald-700 font-bold text-sm">2,450 XP</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
