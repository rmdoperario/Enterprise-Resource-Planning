import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { label: 'Client', icon: '👥', path: '/clients' },
    { label: 'Orders', icon: '📋', path: '/orders' },
    { label: 'Inventory', icon: '📦', path: '/inventory' },
    { label: 'Supplier', icon: '🏭', path: '/supplier' },
    { label: 'Employees', icon: '👤', path: '/employees' },
    { label: 'Payroll', icon: '💰', path: '/payroll' },
    { label: 'Machinery', icon: '⚙️', path: '/machinery' },
    { label: 'Reports', icon: '📊', path: '/reports' }
  ];

  return (
    <div className="w-64 min-h-screen bg-white border-r">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center text-white">
            O
          </div>
          <span className="font-semibold text-sm">OPZON Printer & Supplies</span>
        </div>

        {/* Dashboard with hamburger */}
        <div className="flex items-center space-x-3 px-3 py-2 mb-4">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
          <span className="font-medium">Dashboard</span>
        </div>
        
        {/* Menu Items */}
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center space-x-3 w-full px-3 py-2 text-sm rounded-lg ${
                location.pathname === item.path 
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;