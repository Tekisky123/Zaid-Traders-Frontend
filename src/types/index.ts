export interface User {
  id: string;
  name: string;
  role: 'driver' | 'cashier' | 'admin';
}

export interface BillingRecord {
  id: string;
  driverId: string;
  partyName: string;
  totalBill: number;
  cash: number;
  upi: number;
  balance: number;
  diesel: number;
  vehicleNumber: string;
  date: string;
  billImage?: string;
}

export interface Driver {
  id: string;
  name: string;
  vehicleNumber: string;
  status: 'active' | 'inactive';
}