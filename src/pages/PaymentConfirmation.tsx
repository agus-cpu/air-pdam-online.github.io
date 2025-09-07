
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { findBillById, findCustomerByCustomerId } from "@/utils/mockData";
import { formatRupiah, formatDate, generateReferenceNumber } from "@/utils/helpers";

const PaymentConfirmation = () => {
  const { id } = useParams();
  
  const [bill, setBill] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [referenceNumber, setReferenceNumber] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  
  useEffect(() => {
    // Simulating API call and payment processing
    setTimeout(() => {
      const foundBill = findBillById(id);
      
      if (foundBill) {
        // Create a copy and update the status to paid
        const paidBill = { ...foundBill, status: 'paid', isPaid: true };
        setBill(paidBill);
        
        const foundCustomer = findCustomerByCustomerId(foundBill.customerId);
        setCustomer(foundCustomer);
        
        // Generate payment reference and date
        setReferenceNumber(generateReferenceNumber());
        setPaymentDate(new Date().toISOString());
      }
      
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-gray-50 py-10">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
              <div className="h-64 bg-gray-200 rounded max-w-md mx-auto"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!bill || !customer) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-gray-50 py-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-red-600">Tagihan tidak ditemukan</h2>
            <p className="mt-4">
              Tagihan yang Anda cari tidak dapat ditemukan. Silakan kembali ke halaman cek tagihan.
            </p>
            <Link to="/lookup" className="mt-6 bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-6 rounded transition duration-200 inline-block">
              Kembali ke Cek Tagihan
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="text-center mb-8">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-800">Pembayaran Berhasil!</h1>
                <p className="text-gray-600 mt-2">
                  Terima kasih telah melakukan pembayaran tagihan PDAM
                </p>
              </div>
              
              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Nomor Referensi</span>
                  <span className="font-medium">{referenceNumber}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Tanggal Pembayaran</span>
                  <span className="font-medium">{formatDate(paymentDate)}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Status</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                    Berhasil
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Pembayaran</span>
                  <span className="font-bold text-lg text-sky-700">{formatRupiah(bill.amount)}</span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h2 className="font-semibold mb-3">Detail Pelanggan</h2>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500">Nomor Pelanggan</p>
                    <p className="font-medium">{customer.customerId}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Nama</p>
                    <p className="font-medium">{customer.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Alamat</p>
                    <p className="font-medium">{customer.address}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Periode Tagihan</p>
                    <p className="font-medium">{bill.period}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded transition duration-200">
                  Cetak Bukti Pembayaran
                </button>
                <Link to="/" className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded transition duration-200 text-center">
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentConfirmation;
