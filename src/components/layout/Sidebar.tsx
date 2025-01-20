import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { label: 'Client', icon: '👥' },
    { label: 'Orders', icon: '📋' },
    { label: 'Inventory', icon: '📦' },
    { label: 'Supplier', icon: '🏭' },
    { label: 'Employees', icon: '👤' },
    { label: 'Payroll', icon: '💰' },
    { label: 'Machinery', icon: '⚙️' },
    { label: 'Accounting', icon: '📊' }
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
            <button
              key={item.label}
              className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;