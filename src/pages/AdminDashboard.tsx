
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { customers, bills, transactions } from "@/utils/mockData";
import { formatRupiah, formatDate } from "@/utils/helpers";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("customers");
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard Admin PDAM</h1>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  className={`px-4 py-3 text-sm font-medium ${
                    activeTab === "customers" ? "border-b-2 border-sky-500 text-sky-600" : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => setActiveTab("customers")}
                >
                  Data Pelanggan
                </button>
                <button
                  className={`px-4 py-3 text-sm font-medium ${
                    activeTab === "bills" ? "border-b-2 border-sky-500 text-sky-600" : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => setActiveTab("bills")}
                >
                  Data Tagihan
                </button>
                <button
                  className={`px-4 py-3 text-sm font-medium ${
                    activeTab === "transactions" ? "border-b-2 border-sky-500 text-sky-600" : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => setActiveTab("transactions")}
                >
                  Transaksi Pembayaran
                </button>
              </div>
            </div>
            
            <div className="p-4">
              {activeTab === "customers" && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Pelanggan</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alamat</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No. Meter</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {customers.map((customer) => (
                        <tr key={customer.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.customerId}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.address}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.meterNumber}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              
              {activeTab === "bills" && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Pelanggan</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Periode</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jatuh Tempo</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pemakaian</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {bills.map((bill) => (
                        <tr key={bill.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bill.customerId}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bill.period}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(bill.dueDate)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bill.usage} m³</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatRupiah(bill.amount)}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              bill.status === 'paid' ? 'bg-green-100 text-green-800' : 
                              bill.status === 'overdue' ? 'bg-red-100 text-red-800' : 
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {bill.status === 'paid' ? 'Lunas' : 
                               bill.status === 'overdue' ? 'Terlambat' : 
                               'Belum Bayar'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              
              {activeTab === "transactions" && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Transaksi</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Pelanggan</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metode</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {transactions.map((transaction) => (
                        <tr key={transaction.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.referenceNumber}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.customerId}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(transaction.paymentDate)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.paymentMethod}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatRupiah(transaction.amount)}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              transaction.status === 'completed' ? 'bg-green-100 text-green-800' : 
                              transaction.status === 'failed' ? 'bg-red-100 text-red-800' : 
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {transaction.status === 'completed' ? 'Selesai' : 
                               transaction.status === 'failed' ? 'Gagal' : 
                               'Menunggu'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
