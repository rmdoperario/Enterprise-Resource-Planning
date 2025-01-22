import React from 'react';

const ReportsPage = () => {
  const expenses = [
    {
      expenseId: "001",
      expenseAmount: 500.00,
      date: "16/12/2024",
      description: "Extraction Services"
    },
    {
      expenseId: "002",
      expenseAmount: 5500.00,
      date: "16/12/2024",
      description: "Electricity"
    },
    {
      expenseId: "003",
      expenseAmount: 2000.00,
      date: "16/12/2024",
      description: "Materials"
    }
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-4">
        <h2 className="text-xl">Report</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b">
        <button className="px-4 py-2 text-gray-500">Income</button>
        <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600">
          Expense
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="p-4 text-sm font-medium">Expense ID</th>
                <th className="p-4 text-sm font-medium">Expense Amount</th>
                <th className="p-4 text-sm font-medium">Date</th>
                <th className="p-4 text-sm font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.expenseId} className="border-b">
                  <td className="p-4 text-sm">{expense.expenseId}</td>
                  <td className="p-4 text-sm">₱{expense.expenseAmount.toFixed(2)}</td>
                  <td className="p-4 text-sm">{expense.date}</td>
                  <td className="p-4 text-sm">{expense.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;