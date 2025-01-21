import { BillingRecord, Driver, User } from '../types';

export const mockUsers: User[] = [
  { id: '1', name: 'John Driver', role: 'driver' },
  { id: '2', name: 'Sarah Cashier', role: 'cashier' },
  { id: '3', name: 'Admin User', role: 'admin' },
];

export const mockDrivers: Driver[] = [
  { id: '1', name: 'Driver A', vehicleNumber: 'MH12XY1234', status: 'active' },
  { id: '2', name: 'Driver B', vehicleNumber: 'MH14XZ5678', status: 'active' },
  { id: '3', name: 'Driver C', vehicleNumber: 'MH11AB9012', status: 'inactive' },
];

export const mockBillingRecords: BillingRecord[] = [
  {
    id: '1',
    driverId: '1',
    partyName: 'ABC Traders',
    totalBill: 10000,
    cash: 5000,
    upi: 4000,
    balance: 1000,
    diesel: 500,
    vehicleNumber: 'MH12XY1234',
    date: '2024-03-14',
    billImage: 'https://images.unsplash.com/photo-1572516800593-77cd5a37b46d?auto=format&fit=crop&w=500',
  },
  {
    id: '2',
    driverId: '1',
    partyName: 'XYZ Enterprises',
    totalBill: 15000,
    cash: 10000,
    upi: 5000,
    balance: 0,
    diesel: 700,
    vehicleNumber: 'MH12XY1234',
    date: '2024-03-14',
    billImage: 'https://images.unsplash.com/photo-1572516800593-77cd5a37b46d?auto=format&fit=crop&w=500',
  },
];