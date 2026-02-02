
import React, { useState } from 'react';
import Login from './components/Login';
import AdminPortal from './components/AdminPortal';
import PublicPortal from './components/PublicPortal';

export type AppState = 'LOGIN' | 'ADMIN' | 'PUBLIC';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>('LOGIN');

  const handleLogin = (user: string, pass: string) => {
    if (user === 'admin' && pass === 'admin123') {
      setView('ADMIN');
    } else {
      setView('PUBLIC');
    }
  };

  const handleLogout = () => {
    setView('LOGIN');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {view === 'LOGIN' && <Login onLogin={handleLogin} onGuest={() => setView('PUBLIC')} />}
      {view === 'ADMIN' && <AdminPortal onLogout={handleLogout} />}
      {view === 'PUBLIC' && <PublicPortal onLogout={handleLogout} onAdminRequest={() => setView('LOGIN')} />}
    </div>
  );
};

export default App;
