import React from 'react';

const OrdersPage = () => {
  const orders = [
    {
      customerName: "Allan Dela Cruz",
      orderDate: "10/12/24",
      status: "Completed",
      orderId: "OR-001",
      description: "New Billing invoice-1/2 Short Size Bond Paper, Carbonless, 3 Copies",
      quantity: 6,
      pricePerUnit: 500.00,
      totalPrice: 3000.00
    },
    {
      customerName: "Mark Santos",
      orderDate: "11/23/24",
      status: "Pending",
      orderId: "OR-002",
      description: "A4 Paper, Carbonless, 2 Copies",
      quantity: 4,
      pricePerUnit: 500.00,
      totalPrice: 2000.00
    },
    {
      customerName: "Pedro Reyes",
      orderDate: "11/25/24",
      status: "Pending",
      orderId: "OR-003",
      description: "Standard Receipt Books, Carbonless, 3 Colors, Series 101 to 150",
      quantity: 5,
      pricePerUnit: 400.00,
      totalPrice: 2000.00
    }
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-4">
        <h2 className="text-xl">Total Orders</h2>
        <p className="text-sm text-gray-500">You are viewing the total number of orders placed so far</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-4 mb-4 border-b">
        <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600">Total Orders</button>
        <button className="px-4 py-2 text-gray-500">Pending Orders</button>
        <button className="px-4 py-2 text-gray-500">Approved Orders</button>
        <button className="px-4 py-2 text-gray-500">Completed Orders</button>
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <select className="border p-2 rounded-md bg-white text-sm">
            <option>Last 30 days</option>
          </select>
          <select className="border p-2 rounded-md bg-white text-sm">
            <option>Filter by</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Page 1 of 4</span>
          <button className="text-gray-500">→</button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="p-4 text-sm font-medium">
                  <input type="checkbox" className="mr-2" />
                </th>
                <th className="p-4 text-sm font-medium">Customer Name</th>
                <th className="p-4 text-sm font-medium">Order Date</th>
                <th className="p-4 text-sm font-medium">Status</th>
                <th className="p-4 text-sm font-medium">Order ID</th>
                <th className="p-4 text-sm font-medium">Description</th>
                <th className="p-4 text-sm font-medium">Quantity</th>
                <th className="p-4 text-sm font-medium">Price Per Unit</th>
                <th className="p-4 text-sm font-medium">Total Price</th>
                <th className="p-4 text-sm font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4"><input type="checkbox" /></td>
                  <td className="p-4 text-sm">{order.customerName}</td>
                  <td className="p-4 text-sm">{order.orderDate}</td>
                  <td className="p-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === 'Completed' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm">{order.orderId}</td>
                  <td className="p-4 text-sm">{order.description}</td>
                  <td className="p-4 text-sm">{order.quantity}</td>
                  <td className="p-4 text-sm">₱{order.pricePerUnit.toFixed(2)}</td>
                  <td className="p-4 text-sm">₱{order.totalPrice.toFixed(2)}</td>
                  <td className="p-4">
                    <button className="text-gray-600 hover:text-gray-800">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;