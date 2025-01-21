import { useState } from "react";
import { Driver, BillingRecord } from "../types";
import { mockDrivers, mockBillingRecords } from "../data/mockData";
import { Download, Truck } from "lucide-react";

export default function CashierDashboard() {
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);

  const handleGenerateReport = () => {
    alert("Report generation is not implemented yet");
  };

  const getDriverRecords = (driverId: string) => {
    return mockBillingRecords.filter(
      (record) =>
        record.driverId === driverId &&
        record.date === new Date().toISOString().split("T")[0]
    );
  };

  return (
    <div className="space-y-8 px-4 py-6 sm:px-6 md:px-8">
      {/* Driver List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockDrivers.map((driver) => (
          <button
            key={driver.id}
            onClick={() => setSelectedDriver(driver)}
            className={`p-6 rounded-lg shadow-lg transition-colors transform hover:scale-105 ${
              selectedDriver?.id === driver.id
                ? "bg-blue-50 dark:bg-blue-900 border-2 border-blue-500"
                : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-full">
                <Truck className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {driver.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {driver.vehicleNumber}
                </p>
                <span
                  className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                    driver.status === "active"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  }`}
                >
                  {driver.status.charAt(0).toUpperCase() +
                    driver.status.slice(1)}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Driver Details */}
      {selectedDriver && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {selectedDriver.name}'s Billing Records
            </h2>
            <button
              onClick={handleGenerateReport}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all ease-in-out"
            >
              <Download className="w-5 h-5 mr-2" />
              Generate Report
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Net Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {getDriverRecords(selectedDriver.id).map(
                  (record: BillingRecord) => (
                    <tr key={record.id}>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                        {record.partyName}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                        ₹{record.totalBill.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                        ₹{record.cash.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                        ₹{record.upi.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                        ₹{record.balance.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                        ₹{record.diesel.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                        ₹{(record.totalBill - record.diesel).toLocaleString()}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            {getDriverRecords(selectedDriver.id).length === 0 && (
              <p className="text-center py-4 text-gray-500 dark:text-gray-400">
                No records available for today
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
