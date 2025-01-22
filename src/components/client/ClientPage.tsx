import React from 'react';

const ClientPage = () => {
  const clients = [
    {
      id: 1,
      customerName: "Allan Dela Cruz",
      businessAddress: "Poblacion, Davao City",
      contactNo: "09123456789",
      email: "allandelacruz@gmail.com",
      businessName: "Davao Tech Solutions"
    },
    {
      id: 2,
      customerName: "Mark Santos",
      businessAddress: "Buhangin, Davao City",
      contactNo: "09234567890",
      email: "marksantos@gmail.com",
      businessName: "Santos Enterprises"
    },
    {
      id: 3,
      customerName: "Pedro Reyes",
      businessAddress: "Matina, Davao City",
      contactNo: "09087654321",
      email: "pedroreyes@gmail.com",
      businessName: "Reyes Trading Co."
    }
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-4">
        <h2 className="text-xl">Client Profile</h2>
        <p className="text-sm text-gray-500">You are viewing the total number of clients placed so far</p>
      </div>

      {/* Filters Row */}
      <div className="flex gap-2 mb-4">
        <select className="border p-2 rounded-md bg-white text-sm">
          <option>Last 30 days</option>
        </select>
        <select className="border p-2 rounded-md bg-white text-sm">
          <option>Filter by</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white border-b">
              <tr className="text-left">
                <th className="p-4 text-sm font-medium">ID</th>
                <th className="p-4 text-sm font-medium">Customer Name</th>
                <th className="p-4 text-sm font-medium">Business Address</th>
                <th className="p-4 text-sm font-medium">Contact No.</th>
                <th className="p-4 text-sm font-medium">Email</th>
                <th className="p-4 text-sm font-medium">Business/Company Name</th>
                <th className="p-4 text-sm font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-b">
                  <td className="p-4 text-sm">{client.id}</td>
                  <td className="p-4 text-sm">{client.customerName}</td>
                  <td className="p-4 text-sm">{client.businessAddress}</td>
                  <td className="p-4 text-sm">{client.contactNo}</td>
                  <td className="p-4 text-sm">{client.email}</td>
                  <td className="p-4 text-sm">{client.businessName}</td>
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

export default ClientPage;