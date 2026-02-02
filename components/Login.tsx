
import React, { useState } from 'react';
import { ShieldCheck, Heart, ArrowRight } from 'lucide-react';

interface LoginProps {
  onLogin: (user: string, pass: string) => void;
  onGuest: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onGuest }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(user, pass);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-emerald-100 via-white to-blue-50">
      <div className="max-w-md w-full animate-in fade-in zoom-in duration-500">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-600 rounded-3xl shadow-xl shadow-emerald-200 mb-6">
            <Heart className="w-10 h-10 text-white fill-white" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">HopeKitchen</h1>
          <p className="text-gray-500 font-medium mt-2">Feeding communities, one plate at a time.</p>
        </div>

        <div className="bg-white p-10 rounded-[40px] shadow-2xl shadow-emerald-100/50 border border-white/40 glass-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium"
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl shadow-lg shadow-emerald-100 transition-all flex items-center justify-center gap-2 group"
            >
              Sign In <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 flex items-center gap-4 py-4 px-2">
            <div className="h-px flex-1 bg-gray-100"></div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">or</span>
            <div className="h-px flex-1 bg-gray-100"></div>
          </div>

          <button
            onClick={onGuest}
            className="w-full py-4 text-gray-500 hover:text-emerald-600 font-bold text-sm transition-colors"
          >
            Continue as Guest & Contributor
          </button>
        </div>
        
        <p className="text-center mt-8 text-xs text-gray-400 font-medium flex items-center justify-center gap-1">
          <ShieldCheck className="w-3 h-3" /> Secure Access Portal • Centralized Logistics v2.4
        </p>
      </div>
    </div>
  );
};

export default Login;
