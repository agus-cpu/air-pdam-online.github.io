
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PaymentMethod from "@/components/PaymentMethod";
import { findBillById, findCustomerByCustomerId } from "@/utils/mockData";
import { formatRupiah } from "@/utils/helpers";
import { toast } from "sonner";

const PaymentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [bill, setBill] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreement, setAgreement] = useState(false);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      const foundBill = findBillById(id);
      
      if (foundBill) {
        setBill(foundBill);
        const foundCustomer = findCustomerByCustomerId(foundBill.customerId);
        setCustomer(foundCustomer);
      } else {
        toast.error("Tagihan tidak ditemukan");
      }
      
      setLoading(false);
    }, 800);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!paymentMethod) {
      toast.error("Pilih metode pembayaran terlebih dahulu");
      return;
    }

    if (!agreement) {
      toast.error("Anda harus menyetujui syarat dan ketentuan");
      return;
    }

    setIsSubmitting(true);
    
    // Simulating payment processing
    setTimeout(() => {
      navigate(`/confirmation/${id}`);
    }, 1500);
  };

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
            <button
              onClick={() => navigate("/lookup")}
              className="mt-6 bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-6 rounded transition duration-200"
            >
              Kembali ke Cek Tagihan
            </button>
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
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Pembayaran Tagihan PDAM</h1>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Detail Tagihan</h2>
              
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Nomor Pelanggan</p>
                    <p className="font-medium">{customer.customerId}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Nama</p>
                    <p className="font-medium">{customer.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Periode</p>
                    <p className="font-medium">{bill.period}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Pemakaian</p>
                    <p className="font-medium">{bill.usage} m³</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center py-4 border-b border-gray-200 mb-6">
                <span className="text-lg font-semibold">Total Tagihan</span>
                <span className="text-xl font-bold text-sky-700">{formatRupiah(bill.amount)}</span>
              </div>
              
              <form onSubmit={handleSubmit}>
                <PaymentMethod onSelect={setPaymentMethod} />
                
                <div className="mt-8">
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="agreement"
                      checked={agreement}
                      onChange={(e) => setAgreement(e.target.checked)}
                      className="h-4 w-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                    />
                    <label htmlFor="agreement" className="ml-2 block text-gray-700">
                      Saya menyetujui semua <a href="#" className="text-sky-600 hover:underline">syarat dan ketentuan</a> yang berlaku
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 px-4 rounded transition duration-200 disabled:opacity-70"
                  >
                    {isSubmitting ? "Memproses..." : `Bayar ${formatRupiah(bill.amount)}`}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentForm;
