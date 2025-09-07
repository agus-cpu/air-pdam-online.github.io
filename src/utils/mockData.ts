
export interface Customer {
  id: string;
  name: string;
  address: string;
  customerId: string;
  meterNumber: string;
}

export interface Bill {
  id: string;
  customerId: string;
  period: string;
  dueDate: string;
  amount: number;
  usage: number; // in cubic meters
  status: 'unpaid' | 'paid' | 'overdue';
  isPaid: boolean;
}

export interface Transaction {
  id: string;
  billId: string;
  customerId: string;
  amount: number;
  paymentMethod: string;
  paymentDate: string;
  status: 'pending' | 'completed' | 'failed';
  referenceNumber: string;
}

// Mock Customers
export const customers: Customer[] = [
  {
    id: '1',
    name: 'Bambang Sunaryo',
    address: 'Jl. Pahlawan No. 123, Jakarta Selatan',
    customerId: '10001',
    meterNumber: 'MTR-1001',
  },
  {
    id: '2',
    name: 'Siti Rahayu',
    address: 'Jl. Merdeka No. 45, Jakarta Pusat',
    customerId: '10002',
    meterNumber: 'MTR-1002',
  },
  {
    id: '3',
    name: 'Hendra Wijaya',
    address: 'Jl. Kemanggisan No. 67, Jakarta Barat',
    customerId: '10003',
    meterNumber: 'MTR-1003',
  },
  {
    id: '4',
    name: 'Dewi Lestari',
    address: 'Jl. Sudirman No. 89, Jakarta Pusat',
    customerId: '10004',
    meterNumber: 'MTR-1004',
  },
  {
    id: '5',
    name: 'Ahmad Fadli',
    address: 'Jl. Melati No. 12, Jakarta Timur',
    customerId: '10005',
    meterNumber: 'MTR-1005',
  },
  {
    id: '6',
    name: 'Agus Paratama',
    address: 'Jl. Pahlawan No. 123, Jakarta Selatan',
    customerId: '10006',
    meterNumber: 'MTR-1006',
  },
  {
    id: '7',
    name: 'Nisa',
    address: 'Jl. Merdeka No. 45, Jakarta Pusat',
    customerId: '10007',
    meterNumber: 'MTR-1007',
  },
  {
    id: '8',
    name: 'risma',
    address: 'Jl. Kemanggisan No. 67, Jakarta Barat',
    customerId: '10008',
    meterNumber: 'MTR-1008',
  },
  {
    id: '4',
    name: 'Dewi Lestari',
    address: 'Jl. Sudirman No. 89, Jakarta Pusat',
    customerId: '10004',
    meterNumber: 'MTR-1004',
  },
  {
    id: '5',
    name: 'Ahmad Fadli',
    address: 'Jl. Melati No. 12, Jakarta Timur',
    customerId: '10005',
    meterNumber: 'MTR-1005',
  },{
    id: '1',
    name: 'Bambang Sunaryo',
    address: 'Jl. Pahlawan No. 123, Jakarta Selatan',
    customerId: '10001',
    meterNumber: 'MTR-1001',
  },
  {
    id: '2',
    name: 'Siti Rahayu',
    address: 'Jl. Merdeka No. 45, Jakarta Pusat',
    customerId: '10002',
    meterNumber: 'MTR-1002',
  },
  {
    id: '3',
    name: 'Hendra Wijaya',
    address: 'Jl. Kemanggisan No. 67, Jakarta Barat',
    customerId: '10003',
    meterNumber: 'MTR-1003',
  },
  {
    id: '4',
    name: 'Dewi Lestari',
    address: 'Jl. Sudirman No. 89, Jakarta Pusat',
    customerId: '10004',
    meterNumber: 'MTR-1004',
  },
  {
    id: '5',
    name: 'Ahmad Fadli',
    address: 'Jl. Melati No. 12, Jakarta Timur',
    customerId: '10005',
    meterNumber: 'MTR-1005',
  },{
    id: '1',
    name: 'Bambang Sunaryo',
    address: 'Jl. Pahlawan No. 123, Jakarta Selatan',
    customerId: '10001',
    meterNumber: 'MTR-1001',
  },
  {
    id: '2',
    name: 'Siti Rahayu',
    address: 'Jl. Merdeka No. 45, Jakarta Pusat',
    customerId: '10002',
    meterNumber: 'MTR-1002',
  },
  {
    id: '3',
    name: 'Hendra Wijaya',
    address: 'Jl. Kemanggisan No. 67, Jakarta Barat',
    customerId: '10003',
    meterNumber: 'MTR-1003',
  },
  {
    id: '4',
    name: 'Dewi Lestari',
    address: 'Jl. Sudirman No. 89, Jakarta Pusat',
    customerId: '10004',
    meterNumber: 'MTR-1004',
  },
  {
    id: '5',
    name: 'Ahmad Fadli',
    address: 'Jl. Melati No. 12, Jakarta Timur',
    customerId: '10005',
    meterNumber: 'MTR-1005',
  },{
    id: '1',
    name: 'Bambang Sunaryo',
    address: 'Jl. Pahlawan No. 123, Jakarta Selatan',
    customerId: '10001',
    meterNumber: 'MTR-1001',
  },
  {
    id: '2',
    name: 'Siti Rahayu',
    address: 'Jl. Merdeka No. 45, Jakarta Pusat',
    customerId: '10002',
    meterNumber: 'MTR-1002',
  },
  {
    id: '3',
    name: 'Hendra Wijaya',
    address: 'Jl. Kemanggisan No. 67, Jakarta Barat',
    customerId: '10003',
    meterNumber: 'MTR-1003',
  },
  {
    id: '4',
    name: 'Dewi Lestari',
    address: 'Jl. Sudirman No. 89, Jakarta Pusat',
    customerId: '10004',
    meterNumber: 'MTR-1004',
  },
  {
    id: '5',
    name: 'Ahmad Fadli',
    address: 'Jl. Melati No. 12, Jakarta Timur',
    customerId: '10005',
    meterNumber: 'MTR-1005',
  },
];

// Mock Bills
export const bills: Bill[] = [
  {
    id: 'b1',
    customerId: '10001',
    period: 'Mei 2025',
    dueDate: '2025-06-20',
    amount: 150000,
    usage: 15,
    status: 'unpaid',
    isPaid: false,
  },
  {
    id: 'b2',
    customerId: '10002',
    period: 'Mei 2025',
    dueDate: '2025-06-20',
    amount: 230000,
    usage: 23,
    status: 'unpaid',
    isPaid: false,
  },
  {
    id: 'b3',
    customerId: '10003',
    period: 'Mei 2025',
    dueDate: '2025-06-20',
    amount: 185000,
    usage: 18.5,
    status: 'unpaid',
    isPaid: false,
  },
  {
    id: 'b4',
    customerId: '10004',
    period: 'Mei 2025',
    dueDate: '2025-06-20',
    amount: 135000,
    usage: 13.5,
    status: 'paid',
    isPaid: true,
  },
  {
    id: 'b5',
    customerId: '10005',
    period: 'Mei 2025',
    dueDate: '2025-06-20',
    amount: 200000,
    usage: 20,
    status: 'overdue',
    isPaid: false,
  },
  // Previous bills
  {
    id: 'b6',
    customerId: '10001',
    period: 'April 2025',
    dueDate: '2025-05-20',
    amount: 165000,
    usage: 16.5,
    status: 'paid',
    isPaid: true,
  },
  {
    id: 'b7',
    customerId: '10001',
    period: 'Maret 2025',
    dueDate: '2025-04-20',
    amount: 142000,
    usage: 14.2,
    status: 'paid',
    isPaid: true,
  },
];

// Mock Transactions
export const transactions: Transaction[] = [
  {
    id: 't1',
    billId: 'b4',
    customerId: '10004',
    amount: 135000,
    paymentMethod: 'Bank Transfer',
    paymentDate: '2025-05-15T10:30:00',
    status: 'completed',
    referenceNumber: 'REF-001234',
  },
  {
    id: 't2',
    billId: 'b6',
    customerId: '10001',
    amount: 165000,
    paymentMethod: 'Credit Card',
    paymentDate: '2025-05-18T14:20:00',
    status: 'completed',
    referenceNumber: 'REF-001235',
  },
  {
    id: 't3',
    billId: 'b7',
    customerId: '10001',
    amount: 142000,
    paymentMethod: 'E-Wallet',
    paymentDate: '2025-04-15T09:45:00',
    status: 'completed',
    referenceNumber: 'REF-001236',
  },
];

export function findCustomerByCustomerId(customerId: string): Customer | undefined {
  return customers.find(customer => customer.customerId === customerId);
}

export function findBillsByCustomerId(customerId: string): Bill[] {
  return bills.filter(bill => bill.customerId === customerId);
}

export function findBillById(id: string): Bill | undefined {
  return bills.find(bill => bill.id === id);
}

export function findTransactionsByCustomerId(customerId: string): Transaction[] {
  return transactions.filter(transaction => transaction.customerId === customerId);
}
