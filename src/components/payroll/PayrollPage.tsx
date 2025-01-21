import React from 'react';

const PayrollPage = () => {
  // Sample data matching your prototype
  const payrollData = [
    {
      id: 1,
      name: "Juan Santos",
      startDate: "1/12/2024",
      endDate: "16/12/2024",
      salary: 12500.00,
      deductions: 925.00,
      netSalary: 11575.00
    },
    {
      id: 2,
      name: "Jose Dela Cruz",
      startDate: "1/12/2024",
      endDate: "16/12/2024",
      salary: 15000.00,
      deductions: 1100.00,
      netSalary: 13900.00
    },
    {
      id: 3,
      name: "Carlos Garcia",
      startDate: "1/12/2024",
      endDate: "16/12/2024",
      salary: 10000.00,
      deductions: 750.00,
      netSalary: 9250.00
    }
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-4">
        <h2 className="text-xl">Payroll</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b">
        <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600">
          Payroll
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
                <th className="p-4 text-sm font-medium">Start Date</th>
                <th className="p-4 text-sm font-medium">End Date</th>
                <th className="p-4 text-sm font-medium whitespace-nowrap">Salary (₱)</th>
                <th className="p-4 text-sm font-medium whitespace-nowrap">Deductions (₱)</th>
                <th className="p-4 text-sm font-medium whitespace-nowrap">Net Salary (₱)</th>
              </tr>
            </thead>
            <tbody>
              {payrollData.map((employee) => (
                <tr key={employee.id} className="border-b">
                  <td className="p-4 text-sm">{employee.id}</td>
                  <td className="p-4 text-sm">{employee.name}</td>
                  <td className="p-4 text-sm">{employee.startDate}</td>
                  <td className="p-4 text-sm">{employee.endDate}</td>
                  <td className="p-4 text-sm">{employee.salary.toFixed(2)}</td>
                  <td className="p-4 text-sm">{employee.deductions.toFixed(2)}</td>
                  <td className="p-4 text-sm">{employee.netSalary.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PayrollPage;