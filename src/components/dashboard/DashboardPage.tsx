import React from 'react';
import { Printer, Users, Package, TrendingUp, Bell, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashboardPage = () => {
  // Monthly trends data
  const monthlyData = [
    { name: 'Jan', orders: 65, revenue: 120000 },
    { name: 'Feb', orders: 75, revenue: 150000 },
    { name: 'Mar', orders: 85, revenue: 180000 },
    { name: 'Apr', orders: 70, revenue: 140000 },
    { name: 'May', orders: 90, revenue: 200000 },
    { name: 'Jun', orders: 100, revenue: 220000 },
  ];

  // Sample notifications data
  const notifications = [
    { type: 'warning', message: 'Low ink supply for Heidelberg printer', time: '2 hours ago' },
    { type: 'alert', message: 'New order received from Davao Tech Solutions', time: '3 hours ago' },
    { type: 'warning', message: 'Maintenance due for Ryobi printer', time: '5 hours ago' },
    { type: 'info', message: 'Monthly revenue target achieved', time: '1 day ago' },
  ];

  // Sample recent orders data
  const recentOrders = [
    {
      customerName: "Allan Dela Cruz",
      orderDate: "10/12/24",
      status: "Completed",
      orderId: "OR-001",
      description: "New Billing invoice-1/2 Short Size Bond Paper",
      totalPrice: 3000.00
    },
    {
      customerName: "Mark Santos",
      orderDate: "11/23/24",
      status: "Pending",
      orderId: "OR-002",
      description: "A4 Paper, Carbonless",
      totalPrice: 2000.00
    }
  ];

  // Sample low stock data
  const lowStockItems = [
    { item: "CB Top White Short", currentStock: 5, reorderLevel: 20 },
    { item: "Black Ink", currentStock: 3, reorderLevel: 15 },
    { item: "A4 Bond Paper", currentStock: 8, reorderLevel: 25 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome to Opzon's Printer & Supplies</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-blue-100 p-4 rounded-lg">
                <Printer className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-gray-500">Today's Orders</p>
                <h3 className="text-2xl font-bold">24</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-green-100 p-4 rounded-lg">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-gray-500">Total Clients</p>
                <h3 className="text-2xl font-bold">156</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-purple-100 p-4 rounded-lg">
                <Package className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-gray-500">Low Stock Items</p>
                <h3 className="text-2xl font-bold">{lowStockItems.length}</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-orange-100 p-4 rounded-lg">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-gray-500">Today's Revenue</p>
                <h3 className="text-2xl font-bold">₱24,500</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Monthly Orders Trend</h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="orders" stroke="#4f46e5" name="Orders" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#10b981" name="Revenue (₱)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Notifications & Low Stock Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-lg font-semibold">Notifications</h2>
              <Bell className="h-5 w-5 text-gray-500" />
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded">
                    <div className={`mt-0.5 ${
                      notification.type === 'warning' ? 'text-yellow-500' :
                      notification.type === 'alert' ? 'text-red-500' : 'text-blue-500'
                    }`}>
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold">Low Stock Items</h2>
            </div>
            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-3 text-sm font-medium">Item</th>
                    <th className="pb-3 text-sm font-medium">Current Stock</th>
                    <th className="pb-3 text-sm font-medium">Reorder Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {lowStockItems.map((item, index) => (
                    <tr key={index}>
                      <td className="py-4 text-sm">{item.item}</td>
                      <td className="py-4 text-sm text-red-600">{item.currentStock}</td>
                      <td className="py-4 text-sm">{item.reorderLevel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Recent Orders</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-3 text-sm font-medium">Customer Name</th>
                    <th className="pb-3 text-sm font-medium">Order Date</th>
                    <th className="pb-3 text-sm font-medium">Status</th>
                    <th className="pb-3 text-sm font-medium">Order ID</th>
                    <th className="pb-3 text-sm font-medium">Description</th>
                    <th className="pb-3 text-sm font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {recentOrders.map((order, index) => (
                    <tr key={index}>
                      <td className="py-4 text-sm">{order.customerName}</td>
                      <td className="py-4 text-sm">{order.orderDate}</td>
                      <td className="py-4 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 text-sm">{order.orderId}</td>
                      <td className="py-4 text-sm">{order.description}</td>
                      <td className="py-4 text-sm">₱{order.totalPrice.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;