import React from 'react';

const SupplierPage = () => {
  const suppliers = [
    {
      supplierName: "GreenTech",
      contactNumber: "0917 123 4567",
      address: "56 Sampaguita Street, Ermita, Mdn",
      email: "contact@paperworkph.com"
    },
    {
      supplierName: "PaperWorld",
      contactNumber: "0917 234 5678",
      address: "78 Eco Lane, Quiap City, Metro Manila",
      email: "support@ecopapersupplies.ph"
    }
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-4">
        <h2 className="text-xl">Supplier</h2>
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
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="p-4 text-sm font-medium">Supplier name</th>
                <th className="p-4 text-sm font-medium">Contact number</th>
                <th className="p-4 text-sm font-medium">Address</th>
                <th className="p-4 text-sm font-medium">Email</th>
                <th className="p-4 text-sm font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 text-sm">{supplier.supplierName}</td>
                  <td className="p-4 text-sm">{supplier.contactNumber}</td>
                  <td className="p-4 text-sm">{supplier.address}</td>
                  <td className="p-4 text-sm">{supplier.email}</td>
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

      {/* Add Button */}
      <div className="mt-4 flex justify-end">
        <button className="bg-black text-white px-4 py-2 rounded text-sm">
          Add
        </button>
      </div>
    </div>
  );
};

export default SupplierPage;