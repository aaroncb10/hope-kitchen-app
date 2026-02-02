
import React, { useState } from 'react';
import { 
  Plus, 
  Clock, 
  Leaf, 
  Award, 
  ArrowUpRight, 
  CheckCircle2, 
  FileText,
  Trash2,
  IndianRupee
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockImpactData = [
  { name: 'Mon', meals: 45 },
  { name: 'Tue', meals: 52 },
  { name: 'Wed', meals: 38 },
  { name: 'Thu', meals: 65 },
  { name: 'Fri', meals: 48 },
  { name: 'Sat', meals: 70 },
  { name: 'Sun', meals: 55 },
];

const DonorDashboard: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [activeDonations, setActiveDonations] = useState([
    { id: '1', item: 'Surplus Lunch Boxes', qty: '25 units', time: '1h 20m', status: 'Pending Pickup' },
    { id: '2', item: 'Fresh Artisan Pav', qty: '15 kg', time: '45m', status: 'Courier En Route' },
  ]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Quick Action & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <button 
            onClick={() => setShowForm(true)}
            className="w-full h-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-3xl p-8 flex flex-col items-center justify-center gap-4 transition-all shadow-lg hover:shadow-emerald-200 group"
          >
            <div className="bg-white/20 p-4 rounded-2xl group-hover:scale-110 transition-transform">
              <Plus className="w-10 h-10" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Donate Surplus</h3>
              <p className="text-emerald-100 text-sm">One-tap listing</p>
            </div>
          </button>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="bg-blue-50 p-2 rounded-xl"><Award className="w-6 h-6 text-blue-600" /></div>
              <span className="text-emerald-500 text-sm font-bold flex items-center gap-1">+12% <ArrowUpRight className="w-3 h-3" /></span>
            </div>
            <div>
              <p className="text-4xl font-black text-gray-900">1,280</p>
              <p className="text-sm font-medium text-gray-500">Total Meals Provided</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="bg-emerald-50 p-2 rounded-xl"><Leaf className="w-6 h-6 text-emerald-600" /></div>
              <span className="text-emerald-500 text-sm font-bold flex items-center gap-1">+5% <ArrowUpRight className="w-3 h-3" /></span>
            </div>
            <div>
              <p className="text-4xl font-black text-gray-900">340kg</p>
              <p className="text-sm font-medium text-gray-500">CO2 Emissions Saved</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between cursor-pointer hover:border-emerald-200 transition-colors">
            <div className="flex justify-between items-start">
              <div className="bg-amber-50 p-2 rounded-xl"><FileText className="w-6 h-6 text-amber-600" /></div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <IndianRupee className="w-4 h-4 text-gray-900" />
                <p className="text-lg font-bold text-gray-900">CSR Reports</p>
              </div>
              <p className="text-sm font-medium text-gray-500">Download Q3 Tax Benefit</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Active Donations */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-lg text-gray-900">Active Listings - Nagasandra</h3>
            <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-bold animate-pulse">Live</span>
          </div>
          <div className="divide-y divide-gray-50">
            {activeDonations.map((don) => (
              <div key={don.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{don.item}</h4>
                    <p className="text-sm text-gray-500">{don.qty} • Expires in {don.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-sm font-bold text-emerald-600">{don.status}</span>
                  <button className="text-xs text-red-400 hover:text-red-600 font-medium mt-1">Cancel</button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-4 text-sm font-bold text-gray-400 hover:text-emerald-600 transition-colors bg-gray-50">View History</button>
        </div>

        {/* Impact Chart */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-6">Weekly Bengaluru Trends</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockImpactData}>
                <defs>
                  <linearGradient id="colorMeals" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="meals" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorMeals)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Donation Modal Placeholder */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" onClick={() => setShowForm(false)}></div>
          <div className="relative bg-white w-full max-w-lg rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">New Surplus Donation</h2>
              <p className="text-gray-500 mb-6">List items for pickup in North Bengaluru area.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Item Description</label>
                  <input type="text" placeholder="e.g. 50 Chicken Biryani Portions" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Quantity</label>
                    <input type="text" placeholder="e.g. 50 portions" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Expires In (Hrs)</label>
                    <input type="number" placeholder="3" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none" />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button 
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-4 font-bold text-gray-500 hover:bg-gray-100 rounded-2xl transition-all"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    const newItem = { id: Date.now().toString(), item: 'Biryani Portions', qty: '50 portions', time: '3h 0m', status: 'Pending Pickup' };
                    setActiveDonations([newItem, ...activeDonations]);
                    setShowForm(false);
                  }}
                  className="flex-[2] py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-100 transition-all"
                >
                  Post Listing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonorDashboard;
