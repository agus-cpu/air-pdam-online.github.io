
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BillCard from "@/components/BillCard";
import { findCustomerByCustomerId, findBillsByCustomerId } from "@/utils/mockData";
import { toast } from "sonner";

const BillLookup = () => {
  const [customerId, setCustomerId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [customer, setCustomer] = useState(null);
  const [bills, setBills] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customerId) {
      toast.error("Silakan masukkan nomor pelanggan Anda");
      return;
    }

    setIsLoading(true);

    // Simulate API call with setTimeout
    setTimeout(() => {
      const foundCustomer = findCustomerByCustomerId(customerId);
      
      if (foundCustomer) {
        setCustomer(foundCustomer);
        const customerBills = findBillsByCustomerId(customerId);
        setBills(customerBills);
        toast.success("Data tagihan ditemukan");
      } else {
        toast.error("Nomor pelanggan tidak ditemukan");
        setCustomer(null);
        setBills([]);
      }
      
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Cek Tagihan PDAM</h1>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="customerId" className="block text-gray-700 font-medium mb-2">
                    Nomor Pelanggan
                  </label>
                  <input
                    type="text"
                    id="customerId"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="Masukkan nomor pelanggan"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Contoh ID: Contoh ID: 10001, 10002, 10003, 10004, 10005
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded transition duration-200 disabled:opacity-70"
                >
                  {isLoading ? "Mencari..." : "Cek Tagihan"}
                </button>
              </form>
            </div>

            {customer && bills.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Tagihan untuk {customer.name}
                </h2>
                <div className="space-y-6">
                  {bills.map((bill) => (
                    <BillCard key={bill.id} bill={bill} customer={customer} />
                  ))}
                </div>
              </div>
            )}

            {customer && bills.length === 0 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-medium text-green-800 mb-2">Tidak Ada Tagihan</h3>
                <p className="text-green-700">
                  Saat ini tidak ada tagihan yang perlu dibayar untuk akun Anda.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BillLookup;
