import React from 'react';

const InventoryPage = () => {
  // Sample data matching your prototype
  const inventoryItems = [
    {
      items: "Carbonless",
      itemDescription: "CB Top White Short",
      currentQty: 5,
      qty: 30,
      unitPrice: 220,
      total: 6600.00
    },
    {
      items: "Carbonless",
      itemDescription: "CF Bottom Blue Short",
      currentQty: 8,
      qty: 20,
      unitPrice: 220,
      total: 4400
    },
    {
      items: "Carbonless",
      itemDescription: "CFB Middle Pink Short",
      currentQty: 7,
      qty: 30,
      unitPrice: 245,
      total: 7350
    }
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-4">
        <h2 className="text-xl">Inventory</h2>
      </div>

      {/* Filters Row */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <select className="border p-2 rounded-md bg-white text-sm">
            <option>Last 30 days</option>
          </select>
          <select className="border p-2 rounded-md bg-white text-sm">
            <option>Filter by</option>
          </select>
        </div>
        <div className="flex items-center">
          <input 
            type="search" 
            placeholder="Search or type a command (Ctrl + G)" 
            className="border p-2 rounded-md w-64 text-sm"
          />
          <button className="ml-2 bg-black text-white px-4 py-2 rounded text-sm">
            Add Item
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="p-4 text-sm font-medium">Items</th>
                <th className="p-4 text-sm font-medium">Item Description</th>
                <th className="p-4 text-sm font-medium">Current Qty</th>
                <th className="p-4 text-sm font-medium">Qty</th>
                <th className="p-4 text-sm font-medium">Unit Price</th>
                <th className="p-4 text-sm font-medium">Total</th>
                <th className="p-4 text-sm font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 text-sm">{item.items}</td>
                  <td className="p-4 text-sm">{item.itemDescription}</td>
                  <td className="p-4 text-sm">{item.currentQty}</td>
                  <td className="p-4 text-sm">{item.qty}</td>
                  <td className="p-4 text-sm">{item.unitPrice}</td>
                  <td className="p-4 text-sm">{item.total.toFixed(2)}</td>
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

export default InventoryPage;