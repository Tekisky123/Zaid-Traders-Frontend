import { useState } from 'react';
import { User } from '../types';
import { mockUsers } from '../data/mockData';
import { Truck, Calculator, Shield } from 'lucide-react';

interface LoginProps {
  onLogin: (user: User) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleLogin = () => {
    const user = mockUsers.find(u => u.role === selectedRole);
    if (user) onLogin(user);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
          Zaid Traders
        </h1>
        <h2 className="mt-6 text-center text-2xl font-semibold text-gray-900 dark:text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Select Role
              </label>
              <div className="mt-4 grid grid-cols-1 gap-4">
                {[
                  { role: 'driver', icon: Truck, label: 'Driver' },
                  { role: 'cashier', icon: Calculator, label: 'Cashier' },
                  { role: 'admin', icon: Shield, label: 'Admin' },
                ].map(({ role, icon: Icon, label }) => (
                  <button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-colors ${
                      selectedRole === role
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800'
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${
                      selectedRole === role
                        ? 'text-blue-500'
                        : 'text-gray-500 dark:text-gray-400'
                    }`} />
                    <span className={`font-medium ${
                      selectedRole === role
                        ? 'text-blue-700 dark:text-blue-300'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleLogin}
              disabled={!selectedRole}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}