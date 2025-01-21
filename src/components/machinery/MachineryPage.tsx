import React from 'react';

const MachineryPage = () => {
  // Sample data matching your prototype
  const machines = [
    {
      id: 1,
      machine: "Hamada",
      machineType: "Offset",
      status: "Active"
    },
    {
      id: 2,
      machine: "Ryobi",
      machineType: "Offset",
      status: "Active"
    },
    {
      id: 3,
      machine: "Heidelberg",
      machineType: "Offset",
      status: "Inactive"
    }
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-4">
        <h2 className="text-xl">Machinery</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b">
        <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600">
          Machinery
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="p-4 text-sm font-medium">ID</th>
                <th className="p-4 text-sm font-medium">Machine</th>
                <th className="p-4 text-sm font-medium">Machine Type</th>
                <th className="p-4 text-sm font-medium">Status</th>
                <th className="p-4 text-sm font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {machines.map((machine) => (
                <tr key={machine.id} className="border-b">
                  <td className="p-4 text-sm">{machine.id}</td>
                  <td className="p-4 text-sm">{machine.machine}</td>
                  <td className="p-4 text-sm">{machine.machineType}</td>
                  <td className="p-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      machine.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {machine.status}
                    </span>
                  </td>
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

export default MachineryPage;