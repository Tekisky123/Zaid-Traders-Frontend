import { useState } from "react";
import { mockDrivers, mockBillingRecords } from "../data/mockData";
import { Download, Edit, Trash2, Users, DollarSign, Truck } from "lucide-react";

export default function AdminDashboard() {
  const [selectedDate] = useState(new Date().toISOString().split("T")[0]);

  const handleGenerateReport = () => {
    alert("Report generation is not implemented yet");
  };

  const handleEditUser = (id: string) => {
    alert(`Edit user ${id} (not implemented)`);
  };

  const handleDeleteUser = (id: string) => {
    alert(`Delete user ${id} (not implemented)`);
  };

  const totalSales = mockBillingRecords.reduce(
    (sum, record) => sum + record.totalBill,
    0
  );
  const activeDrivers = mockDrivers.filter(
    (driver) => driver.status === "active"
  ).length;
  const totalCash = mockBillingRecords.reduce(
    (sum, record) => sum + record.cash,
    0
  );
  const totalUPI = mockBillingRecords.reduce(
    (sum, record) => sum + record.upi,
    0
  );

  return (
    <div className="space-y-8 px-4 py-6 md:px-8 lg:px-12">
      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-300" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Sales
              </p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                ₹{totalSales.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
              <Truck className="w-6 h-6 text-green-600 dark:text-green-300" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Active Drivers
              </p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {activeDrivers}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full">
              <DollarSign className="w-6 h-6 text-yellow-600 dark:text-yellow-300" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Cash
              </p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                ₹{totalCash.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
              <DollarSign className="w-6 h-6 text-purple-600 dark:text-purple-300" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total UPI
              </p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                ₹{totalUPI.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* User Management */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            User Management
          </h2>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none">
            <Users className="w-5 h-5 mr-2" />
            Add New User
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {mockDrivers.map((driver) => (
                <tr key={driver.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    {driver.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                    Driver
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        driver.status === "active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }`}
                    >
                      {driver.status.charAt(0).toUpperCase() +
                        driver.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEditUser(driver.id)}
                      className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-4"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteUser(driver.id)}
                      className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Billing Records */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Billing Records
          </h2>
          <div className="flex items-center space-x-4">
            {/* <input
              type="date"
              value={selectedDate}
              onChange={(e) => e.target.value}
              className="rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            /> */}
            <button
              onClick={handleGenerateReport}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Report
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Driver
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Party Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Total Bill
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Cash
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  UPI
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Balance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Diesel
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {mockBillingRecords.map((record) => {
                const driver = mockDrivers.find(
                  (d) => d.id === record.driverId
                );
                return (
                  <tr key={record.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                      {driver?.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                      {record.partyName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                      ₹{record.totalBill.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                      ₹{record.cash.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                      ₹{record.upi.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                      ₹{record.balance.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                      ₹{record.diesel.toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
