import React from 'react';

const AttendancePage = () => {
  const employees = [
    {
      id: 1,
      name: "Juan Santos",
      attendanceDate: "20/12/2024",
      timeIn: "7:30 AM",
      timeOut: "-"
    },
    {
      id: 2,
      name: "Jose Dela Cruz",
      attendanceDate: "20/12/2024",
      timeIn: "-",
      timeOut: "-"
    },
    {
      id: 3,
      name: "Carlos Garcia",
      attendanceDate: "20/12/2024",
      timeIn: "-",
      timeOut: "-"
    },
    {
      id: 4,
      name: "Marco Reyes",
      attendanceDate: "20/12/2024",
      timeIn: "-",
      timeOut: "-"
    },
    {
      id: 5,
      name: "Miguel Bautista",
      attendanceDate: "20/12/2024",
      timeIn: "-",
      timeOut: "-"
    }
  ];

  return (
    <div className="p-6 bg-gray-50">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl">Attendance</h2>
        <p className="text-sm text-gray-500">For recording of attendance</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b">
        <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600">
          Morning Attendance
        </button>
        <button className="px-4 py-2 text-gray-500">
          Afternoon Attendance
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="p-4 text-sm font-medium">ID</th>
                <th className="p-4 text-sm font-medium">Name</th>
                <th className="p-4 text-sm font-medium">Attendance Date</th>
                <th className="p-4 text-sm font-medium">Time-in</th>
                <th className="p-4 text-sm font-medium">Time-out</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="border-b">
                  <td className="p-4 text-sm">{employee.id}</td>
                  <td className="p-4 text-sm">{employee.name}</td>
                  <td className="p-4 text-sm">{employee.attendanceDate}</td>
                  <td className="p-4 text-sm">{employee.timeIn}</td>
                  <td className="p-4 text-sm">{employee.timeOut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Attendance Button */}
      <div className="mt-4 flex justify-end">
        <button className="bg-black text-white px-4 py-2 rounded text-sm">
          Attendance
        </button>
      </div>
    </div>
  );
};

export default AttendancePage;