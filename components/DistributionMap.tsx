
import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Zap, 
  Maximize2, 
  Map as MapIcon, 
  Layers, 
  QrCode,
  Smartphone,
  Info
} from 'lucide-react';

const DistributionMap: React.FC = () => {
  const [activePin, setActivePin] = useState<string | null>(null);

  const pins = [
    { id: '1', name: 'Nagasandra Metro Hub', meals: 250, status: 'URGENT', x: '25%', y: '30%', color: 'bg-red-500' },
    { id: '2', name: 'Peenya 2nd Stage Shelter', meals: 110, status: 'SUPPLIED', x: '60%', y: '45%', color: 'bg-emerald-500' },
    { id: '3', name: 'Dasarahalli Labour Colony', meals: 95, status: 'LOW', x: '40%', y: '70%', color: 'bg-amber-500' },
  ];

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-left-4 duration-700">
      {/* Interactive Map Area */}
      <div className="flex-1 bg-white rounded-[40px] shadow-xl border border-gray-100 overflow-hidden relative group">
        <div className="absolute inset-0 bg-[#e5e7eb] opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {/* Animated Map Pins */}
        {pins.map((pin) => (
          <button 
            key={pin.id}
            onClick={() => setActivePin(pin.id)}
            style={{ left: pin.x, top: pin.y }}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all hover:scale-110 active:scale-95`}
          >
            <div className={`relative flex items-center justify-center`}>
              <div className={`absolute w-12 h-12 ${pin.color} rounded-full opacity-20 animate-ping`}></div>
              <div className={`relative w-8 h-8 ${pin.color} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}>
                <MapPin className="w-4 h-4 text-white" />
              </div>
              {activePin === pin.id && (
                <div className="absolute top-full mt-2 bg-white rounded-2xl shadow-2xl p-4 w-48 border border-gray-100 animate-in zoom-in-95 duration-200">
                  <p className="text-xs font-black uppercase text-gray-400 mb-1">{pin.status}</p>
                  <p className="font-bold text-gray-900 leading-tight">{pin.name}</p>
                  <p className="text-emerald-600 font-black mt-2">{pin.meals} MEALS NEEDED</p>
                  <button className="w-full mt-3 py-2 bg-gray-900 text-white text-xs font-bold rounded-lg hover:bg-emerald-600 transition-all">Start Route</button>
                </div>
              )}
            </div>
          </button>
        ))}

        {/* Map Controls */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-2">
          <button className="p-3 bg-white shadow-xl rounded-2xl hover:bg-gray-50 text-gray-600 border border-gray-100"><Maximize2 className="w-5 h-5" /></button>
          <button className="p-3 bg-white shadow-xl rounded-2xl hover:bg-gray-50 text-gray-600 border border-gray-100"><MapIcon className="w-5 h-5" /></button>
          <button className="p-3 bg-emerald-600 shadow-xl shadow-emerald-200 rounded-2xl hover:bg-emerald-700 text-white"><Navigation className="w-5 h-5" /></button>
        </div>

        {/* Legend */}
        <div className="absolute top-6 left-6 p-4 glass-card rounded-[24px] shadow-xl border border-white/40">
          <h4 className="text-sm font-black text-gray-800 mb-3 uppercase tracking-widest">Need Map Legend</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500 rounded-full"></div> <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Urgent (Over 200 people)</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-amber-500 rounded-full"></div> <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Medium Need</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-emerald-500 rounded-full"></div> <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Supplied</span></div>
          </div>
        </div>
      </div>

      {/* Field Worker Sidebar */}
      <div className="w-full lg:w-96 space-y-6">
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-amber-500" /> AI-Logistics
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
              <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">Optimal Route Found</p>
              <p className="text-sm text-emerald-700 leading-snug">"Pick up 25 lunch boxes from 'Udupi Garden' and deliver to 'Nagasandra Hub' via Tumkur Road. Save 12 mins."</p>
              <button className="mt-3 w-full py-3 bg-emerald-600 text-white font-bold rounded-xl text-sm shadow-lg shadow-emerald-200">Accept Route</button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center gap-2 hover:bg-emerald-50 transition-colors">
                <QrCode className="w-6 h-6 text-gray-700" />
                <span className="text-[10px] font-black uppercase text-gray-500">Scan Voucher</span>
              </button>
              <button className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center gap-2 hover:bg-emerald-50 transition-colors">
                <Smartphone className="w-6 h-6 text-gray-700" />
                <span className="text-[10px] font-black uppercase text-gray-500">Offline Mode</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-[32px] p-8 text-white">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-400" /> Recent Activity
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1 h-10 bg-emerald-500 rounded-full"></div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-black">10 Mins Ago</p>
                <p className="text-sm font-bold text-gray-100">50 Meals Delivered to Nagasandra Hub</p>
              </div>
            </div>
            <div className="flex gap-4 opacity-50">
              <div className="w-1 h-10 bg-gray-600 rounded-full"></div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-black">45 Mins Ago</p>
                <p className="text-sm font-bold text-gray-300">New Community Need Logged in T-Dasarahalli</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributionMap;
