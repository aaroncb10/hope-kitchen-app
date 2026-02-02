
import React from 'react';
import { UserRole } from '../types';
import { 
  Utensils, 
  ChefHat, 
  Truck, 
  Settings, 
  BarChart3, 
  LayoutDashboard,
  Menu,
  ChevronLeft
} from 'lucide-react';

interface SidebarProps {
  activeRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeRole, onRoleChange, isOpen, toggleSidebar }) => {
  const navItems = [
    { id: 'DONOR', label: 'Restaurant Donor', icon: Utensils, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { id: 'KITCHEN', label: 'Hope Kitchen', icon: ChefHat, color: 'text-amber-600', bg: 'bg-amber-50' },
    { id: 'DISTRIBUTION', label: 'Distribution', icon: Truck, color: 'text-blue-600', bg: 'bg-blue-50' },
  ];

  return (
    <div className={`${isOpen ? 'w-64' : 'w-20'} transition-all duration-300 bg-white border-r border-gray-200 flex flex-col shadow-xl z-20`}>
      <div className="h-20 flex items-center justify-between px-6 border-b border-gray-100">
        {isOpen && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-800">HopeKitchen</span>
          </div>
        )}
        <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          {isOpen ? <ChevronLeft className="w-5 h-5 text-gray-500" /> : <Menu className="w-5 h-5 text-gray-500" />}
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <p className={`text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 ${!isOpen && 'text-center'}`}>
          {isOpen ? 'Select Portal' : '...'}
        </p>
        
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeRole === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onRoleChange(item.id as UserRole)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group
                ${isActive ? `${item.bg} ${item.color} shadow-sm` : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
              `}
            >
              <Icon className={`w-6 h-6 shrink-0 transition-transform ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
              {isOpen && <span className="font-medium whitespace-nowrap">{item.label}</span>}
              {isActive && isOpen && <div className={`ml-auto w-1.5 h-1.5 rounded-full ${item.color.replace('text', 'bg')}`} />}
            </button>
          );
        })}

        <div className="pt-8 space-y-2 border-t border-gray-100 mt-4">
          <button className={`w-full flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 transition-all ${!isOpen && 'justify-center'}`}>
            <BarChart3 className="w-6 h-6 shrink-0" />
            {isOpen && <span className="font-medium">Analytics</span>}
          </button>
          <button className={`w-full flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 transition-all ${!isOpen && 'justify-center'}`}>
            <Settings className="w-6 h-6 shrink-0" />
            {isOpen && <span className="font-medium">Settings</span>}
          </button>
        </div>
      </nav>

      <div className="p-4 border-t border-gray-100">
        <div className={`flex items-center gap-3 p-2 rounded-xl bg-gray-50 ${!isOpen && 'justify-center'}`}>
          <img src="https://picsum.photos/seed/user/100" className="w-8 h-8 rounded-full border border-white shadow-sm" alt="Profile" />
          {isOpen && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">Admin</p>
              <p className="text-xs text-gray-500 truncate">Bengaluru Region</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
