
import React from 'react';
import { 
  Package, 
  AlertTriangle, 
  ChefHat, 
  Users, 
  UtensilsCrossed, 
  CheckCircle2,
  Hourglass,
  ArrowRight
} from 'lucide-react';

const KitchenDisplay: React.FC = () => {
  const inventory = [
    { name: 'Sona Masoori Rice', qty: 120, unit: 'kg', threshold: 50 },
    { name: 'Toor Dal', qty: 35, unit: 'kg', threshold: 40 },
    { name: 'Sunflower Oil', qty: 12, unit: 'L', threshold: 10 },
  ];

  const ordersOfHope = [
    { id: 'OH-102', destination: 'Peenya Migrant Camp', meals: 450, status: 'Preparing', time: '45m' },
    { id: 'OH-103', destination: 'Dasarahalli Community Shelter', meals: 120, status: 'Queued', time: '1h 10m' },
    { id: 'OH-104', destination: 'Sri Krishna Seva Ashram', meals: 85, status: 'Ready', time: 'Now' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Inventory Column */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
              <Package className="w-5 h-5 text-amber-500" /> Smart Inventory
            </h3>
            <button className="text-xs font-bold text-emerald-600 hover:bg-emerald-50 px-3 py-1 rounded-full transition-colors">+ Add Stock</button>
          </div>
          <div className="p-6 space-y-6 flex-1">
            {inventory.map((item) => {
              const isLow = item.qty < item.threshold;
              const progress = Math.min((item.qty / (item.threshold * 2)) * 100, 100);
              return (
                <div key={item.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-700">{item.name}</span>
                    <span className={`text-sm font-bold ${isLow ? 'text-red-500' : 'text-emerald-600'}`}>
                      {item.qty} {item.unit} {isLow && '⚠️'}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${isLow ? 'bg-red-400' : 'bg-emerald-500'}`} 
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  {isLow && <p className="text-[10px] text-red-400 font-bold uppercase tracking-wider">Critical: Low Stock Alert</p>}
                </div>
              );
            })}
          </div>
          <div className="p-4 bg-amber-50 mx-6 mb-6 rounded-2xl border border-amber-100 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <div>
              <p className="text-sm font-bold text-amber-900">Incoming Donation</p>
              <p className="text-xs text-amber-700">50kg Sona Masoori arriving at 2:00 PM</p>
            </div>
          </div>
        </div>

        {/* KDS Main Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-emerald-500 p-6 rounded-[32px] text-white">
              <p className="text-3xl font-black">655</p>
              <p className="text-xs font-bold opacity-80 uppercase tracking-widest mt-1">Meals Today</p>
            </div>
            <div className="bg-white p-6 rounded-[32px] border border-gray-100">
              <p className="text-3xl font-black text-gray-900">12</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Volunteers</p>
            </div>
            <div className="bg-white p-6 rounded-[32px] border border-gray-100">
              <p className="text-3xl font-black text-gray-900">3</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Active Shifts</p>
            </div>
            <div className="bg-amber-500 p-6 rounded-[32px] text-white">
              <p className="text-3xl font-black">4</p>
              <p className="text-xs font-bold opacity-80 uppercase tracking-widest mt-1">Urgent Req</p>
            </div>
          </div>

          <div className="bg-white rounded-[40px] shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gray-900 p-8 flex justify-between items-center text-white">
              <div>
                <h2 className="text-2xl font-black flex items-center gap-3 italic">
                  ORDERS OF HOPE <UtensilsCrossed className="w-6 h-6 text-emerald-400" />
                </h2>
                <p className="text-sm text-gray-400 font-bold">BENGALURU KITCHEN DISPLAY SYSTEM</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-mono font-bold text-emerald-400">12:45</p>
                <p className="text-xs text-gray-500 uppercase">IST (GMT +5:30)</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 divide-x divide-y divide-gray-100">
              {ordersOfHope.map((order) => (
                <div key={order.id} className="p-8 hover:bg-emerald-50/30 transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 bg-gray-900 text-white rounded-lg text-xs font-mono font-bold">{order.id}</span>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      order.status === 'Preparing' ? 'bg-amber-100 text-amber-700 animate-pulse' :
                      order.status === 'Ready' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-gray-900 leading-tight mb-2 uppercase group-hover:text-emerald-700 transition-colors">
                    {order.destination}
                  </h4>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-4xl font-black text-gray-900">{order.meals}</p>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Meals Requested</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-600 flex items-center gap-1 justify-end">
                        <Hourglass className="w-3 h-3" /> {order.time}
                      </p>
                    </div>
                  </div>
                  <button className="w-full mt-8 py-3 bg-gray-50 group-hover:bg-emerald-600 group-hover:text-white text-gray-500 font-bold rounded-2xl transition-all flex items-center justify-center gap-2">
                    {order.status === 'Ready' ? 'Dispatch Now' : 'Mark as Ready'} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenDisplay;
