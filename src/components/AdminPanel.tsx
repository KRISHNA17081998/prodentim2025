import React, { useState } from 'react';
import { Lock, Users, Package, DollarSign, Settings, LogOut } from 'lucide-react';

const AdminPanel: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would validate credentials against a backend
    if (loginData.username === 'admin' && loginData.password === 'admin') {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center">
            <Lock className="mx-auto h-12 w-12 text-green-500" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Admin Login</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg h-screen">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold text-gray-800">ProDentim Admin</h2>
          </div>
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <button className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-green-50 rounded-lg transition-colors">
                  <Users size={20} />
                  <span>Customers</span>
                </button>
              </li>
              <li>
                <button className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-green-50 rounded-lg transition-colors">
                  <Package size={20} />
                  <span>Orders</span>
                </button>
              </li>
              <li>
                <button className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-green-50 rounded-lg transition-colors">
                  <DollarSign size={20} />
                  <span>Revenue</span>
                </button>
              </li>
              <li>
                <button className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-green-50 rounded-lg transition-colors">
                  <Settings size={20} />
                  <span>Settings</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="flex items-center space-x-2 w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Orders</h3>
              <p className="text-3xl font-bold text-green-600">1,234</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Revenue</h3>
              <p className="text-3xl font-bold text-green-600">$45,678</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Customers</h3>
              <p className="text-3xl font-bold text-green-600">892</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Conversion Rate</h3>
              <p className="text-3xl font-bold text-green-600">3.2%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;