import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../../assets/logo.jpg';

const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { label: 'Dashboard', icon: '📊', path: '/' },
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
          <img 
            src={logoImage} 
            alt="Opzon Printers Logo" 
            className="w-14 h-14 object-contain"
          />
          <span className="font-semibold text-sm">OPZON Printer & Supplies</span>
        </div>
        
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