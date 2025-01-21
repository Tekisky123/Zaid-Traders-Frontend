import { useState } from "react";
import { BillingRecord } from "../types";
import { mockBillingRecords } from "../data/mockData";
import { Upload, DollarSign, Droplets } from "lucide-react";

export default function DriverDashboard() {
  const [formData, setFormData] = useState({
    partyName: "",
    totalBill: "",
    cash: "",
    upi: "",
    balance: "",
    diesel: "",
  });

  const todayRecords = mockBillingRecords.filter(
    (record) => record.date === new Date().toISOString().split("T")[0]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Bill submitted successfully!");
    setFormData({
      partyName: "",
      totalBill: "",
      cash: "",
      upi: "",
      balance: "",
      diesel: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-8 ">
      {/* Billing Form */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          New Billing Entry
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Party Name
              </label>
              <input
                type="text"
                name="partyName"
                value={formData.partyName}
                onChange={handleInputChange}
                className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Total Bill Amount
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  name="totalBill"
                  value={formData.totalBill}
                  onChange={handleInputChange}
                  className="w-full pl-10 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Cash Payment
              </label>
              <input
                type="number"
                name="cash"
                value={formData.cash}
                onChange={handleInputChange}
                className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                UPI Payment
              </label>
              <input
                type="number"
                name="upi"
                value={formData.upi}
                onChange={handleInputChange}
                className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Balance Amount
              </label>
              <input
                type="number"
                name="balance"
                value={formData.balance}
                onChange={handleInputChange}
                className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Diesel Expense
              </label>
              <div className="relative">
                <Droplets className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  name="diesel"
                  value={formData.diesel}
                  onChange={handleInputChange}
                  className="w-full pl-10 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                  required
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between items-center">
            <button
              type="button"
              className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <Upload className="w-5 h-5 mr-2" />
              Upload Bill Photo
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Bill
            </button>
          </div>
        </form>
      </div>

      {/* Today's History */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Today's History
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Party Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Total Bill
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Diesel
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Net Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {todayRecords.map((record: BillingRecord) => (
                <tr key={record.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    {record.partyName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    ₹{record.totalBill.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    ₹{record.diesel.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    ₹{(record.totalBill - record.diesel).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {todayRecords.length === 0 && (
            <p className="text-center py-4 text-gray-500 dark:text-gray-400">
              No records available for today
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
