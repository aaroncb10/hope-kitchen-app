
import React, { useState } from 'react';
import { 
  Heart, 
  MapPin, 
  ChevronRight, 
  Star, 
  Users, 
  Truck, 
  Gift, 
  Award,
  Globe,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  IndianRupee
} from 'lucide-react';

interface PublicPortalProps {
  onLogout: () => void;
  onAdminRequest: () => void;
}

const PublicPortal: React.FC<PublicPortalProps> = ({ onLogout, onAdminRequest }) => {
  const [activeTab, setActiveTab] = useState<'IMPACT' | 'DONATE' | 'VOLUNTEER'>('IMPACT');
  const [signedUp, setSignedUp] = useState(false);

  const pastTrips = [
    { id: 1, location: 'Peenya Industrial Camp', meals: 1200, date: 'Oct 12', img: 'https://picsum.photos/seed/trip1/600/400' },
    { id: 2, location: 'Yeshwanthpur Community Shelter', meals: 850, date: 'Oct 10', img: 'https://picsum.photos/seed/trip2/600/400' },
    { id: 3, location: 'Nagasandra Labour Colony', meals: 450, date: 'Oct 08', img: 'https://picsum.photos/seed/trip3/600/400' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200">
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>
          <span className="font-black text-2xl tracking-tight">HopeKitchen</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => setActiveTab('IMPACT')} className={`text-sm font-bold transition-colors ${activeTab === 'IMPACT' ? 'text-emerald-600' : 'text-gray-500'}`}>Impact Map</button>
          <button onClick={() => setActiveTab('DONATE')} className={`text-sm font-bold transition-colors ${activeTab === 'DONATE' ? 'text-emerald-600' : 'text-gray-500'}`}>Give Food</button>
          <button onClick={() => setActiveTab('VOLUNTEER')} className={`text-sm font-bold transition-colors ${activeTab === 'VOLUNTEER' ? 'text-emerald-600' : 'text-gray-500'}`}>Join Us</button>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={onAdminRequest} className="text-xs font-bold text-gray-400 hover:text-emerald-600 uppercase tracking-widest transition-colors">Admin Login</button>
          <button onClick={() => setActiveTab('DONATE')} className="px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-gray-200">Contribute</button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 bg-white">
        {activeTab === 'IMPACT' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Hero */}
            <section className="px-8 py-20 text-center max-w-4xl mx-auto">
              <span className="px-4 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">Bengaluru Action Report</span>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-none tracking-tight mb-8">
                Your surplus is their <span className="text-emerald-600">salvation.</span>
              </h1>
              <p className="text-xl text-gray-500 font-medium leading-relaxed mb-12">
                We bridge the gap between waste and want in Nagasandra. See how Bengaluru is transforming surplus food into thousands of meals daily.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="p-8 bg-gray-50 rounded-[40px]">
                  <p className="text-4xl font-black text-gray-900">45k+</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Meals Served</p>
                </div>
                <div className="p-8 bg-emerald-50 rounded-[40px]">
                  <p className="text-4xl font-black text-emerald-600">12t</p>
                  <p className="text-xs font-bold text-emerald-700/50 uppercase tracking-widest mt-2">CO2 Diverted</p>
                </div>
                <div className="p-8 bg-gray-50 rounded-[40px] col-span-2 md:col-span-1">
                  <div className="flex items-center justify-center gap-1">
                    <IndianRupee className="w-8 h-8 text-gray-900" />
                    <p className="text-4xl font-black text-gray-900">1.2Cr</p>
                  </div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Value Shared</p>
                </div>
              </div>
            </section>

            {/* Past Trips Showcase */}
            <section className="bg-gray-50 py-24 px-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                  <div>
                    <h2 className="text-3xl font-black text-gray-900">Recent Missions in Bengaluru</h2>
                    <p className="text-gray-500 font-medium">Verified successful deliveries to local communities.</p>
                  </div>
                  <button className="flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all">View All Missions <ArrowRight className="w-4 h-4" /></button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pastTrips.map((trip) => (
                    <div key={trip.id} className="group relative bg-white rounded-[32px] overflow-hidden shadow-xl shadow-gray-200/50 transition-all hover:-translate-y-2">
                      <div className="h-64 overflow-hidden relative">
                        <img src={trip.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={trip.location} />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-black uppercase">{trip.date}</div>
                      </div>
                      <div className="p-8">
                        <div className="flex items-center gap-2 text-emerald-600 font-black text-sm mb-2 uppercase tracking-widest">
                          <CheckCircle2 className="w-4 h-4" /> Successful Delivery
                        </div>
                        <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight">{trip.location}</h3>
                        <p className="text-gray-500 font-medium mb-6">Sustainable food distribution provided nourishment for families in this region.</p>
                        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                          <div className="flex items-center gap-2">
                            <Truck className="w-4 h-4 text-gray-400" />
                            <span className="text-sm font-bold text-gray-400">{trip.meals} Meals</span>
                          </div>
                          <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-emerald-600 group-hover:text-white transition-all"><ChevronRight className="w-5 h-5" /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'DONATE' && (
          <div className="max-w-3xl mx-auto py-24 px-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-16">
              <Gift className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
              <h2 className="text-4xl font-black text-gray-900 mb-4">Give Your Surplus</h2>
              <p className="text-lg text-gray-500 font-medium">Are you a restaurant in Nagasandra or a community member with food to share?</p>
            </div>
            
            <div className="bg-gray-50 p-10 rounded-[40px] border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Donor Type</label>
                    <select className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium">
                      <option>Restaurant / Hotel</option>
                      <option>Individual</option>
                      <option>Kirana / Supermarket</option>
                      <option>Wedding Hall</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Quantity Estimate</label>
                    <input type="text" placeholder="e.g. 20-30 portions" className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Pickup Address (Bengaluru Area)</label>
                  <input type="text" placeholder="Street, Building, Area (e.g. Nagasandra Metro)" className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Special Instructions</label>
                  <textarea rows={3} placeholder="Any details for our courier? (e.g. near the temple, gate code)" className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium" />
                </div>
                <button type="button" className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-3xl shadow-xl shadow-emerald-100 transition-all">Submit Donation Request</button>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'VOLUNTEER' && (
          <div className="max-w-4xl mx-auto py-24 px-8 animate-in fade-in zoom-in duration-500">
            {signedUp ? (
              <div className="text-center py-20 bg-emerald-50 rounded-[60px]">
                <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-200">
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-4">Welcome to the Mission!</h2>
                <p className="text-xl text-emerald-800 font-medium mb-12">An area coordinator from Nagasandra will reach out to you within 24 hours.</p>
                <button onClick={() => setSignedUp(false)} className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl">Return Home</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <Users className="w-16 h-16 text-emerald-600 mb-6" />
                  <h2 className="text-4xl font-black text-gray-900 mb-6 leading-none">Join the Hope Kitchen Bengaluru.</h2>
                  <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">
                    We need drivers, cooks, and organizers in North Bengaluru. Even 2 hours a week can help feed a whole community.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                      <Award className="w-6 h-6 text-amber-500" />
                      <div>
                        <p className="font-bold text-gray-900">Earn Badges</p>
                        <p className="text-xs text-gray-500 font-medium">Get recognized for your service hours in Karnataka.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl">
                      <Globe className="w-6 h-6 text-emerald-600" />
                      <div>
                        <p className="font-bold text-gray-900">Hope Network</p>
                        <p className="text-xs text-gray-500 font-medium">Connect with local volunteers across Bengaluru.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-gray-100">
                  <h3 className="text-2xl font-black mb-8">Volunteer Application</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="First Name" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:ring-2 focus:ring-emerald-500" />
                      <input type="text" placeholder="Last Name" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:ring-2 focus:ring-emerald-500" />
                    </div>
                    <input type="email" placeholder="Email Address" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:ring-2 focus:ring-emerald-500" />
                    <input type="tel" placeholder="Phone Number" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:ring-2 focus:ring-emerald-500" />
                    <select className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-gray-500">
                      <option>Preferred Role</option>
                      <option>Delivery / Auto Driver</option>
                      <option>Kitchen Assistant</option>
                      <option>Field Coordinator</option>
                    </select>
                    <button 
                      type="button" 
                      onClick={() => setSignedUp(true)}
                      className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl shadow-lg shadow-emerald-100 transition-all mt-6"
                    >
                      Join Mission
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Heart className="w-8 h-8 text-emerald-500" />
              <span className="font-black text-2xl tracking-tight">HopeKitchen</span>
            </div>
            <p className="text-gray-500 font-medium max-w-sm">
              HopeKitchen is a registered non-profit organization dedicated to logistics-based hunger relief in Bengaluru, India.
            </p>
          </div>
          <div className="flex gap-12 text-center md:text-left">
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-emerald-500 mb-4">Contact</h4>
              <p className="text-sm font-bold">bengaluru@hopekitchen.org</p>
              <p className="text-sm font-medium text-gray-500">+91 98765 43210</p>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-emerald-500 mb-4">Social</h4>
              <p className="text-sm font-bold">Instagram</p>
              <p className="text-sm font-bold">LinkedIn</p>
            </div>
          </div>
          <button onClick={onAdminRequest} className="px-8 py-3 border border-gray-800 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white hover:border-white transition-all">Staff Access</button>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 text-center text-xs text-gray-600 font-medium">
          © 2024 HopeKitchen Bengaluru Logistics. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default PublicPortal;
