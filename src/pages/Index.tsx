
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-sky-700 to-sky-500 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Bayar Tagihan PDAM dengan Mudah dan Cepat
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                  Nikmati kemudahan membayar tagihan air Anda secara online tanpa perlu mengantri.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/lookup" className="bg-white text-sky-700 hover:bg-sky-100 px-6 py-3 rounded-md font-medium text-center transition-colors">
                    Bayar Tagihan
                  </Link>
                  <a href="#layanan" className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium text-center transition-colors">
                    Pelajari Lebih Lanjut
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <img src="https://images.unsplash.com/photo-1536939459926-301728717817?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjB1dGlsaXR5fGVufDB8fDB8fHww" 
                     alt="PDAM Online Service" 
                     className="rounded-lg shadow-lg w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="layanan" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Layanan Kami</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Temukan berbagai layanan yang memudahkan Anda mengelola dan membayar tagihan air.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-sky-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-sky-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Cek Tagihan</h3>
                <p className="text-gray-600">
                  Lihat tagihan air Anda dengan memasukkan ID pelanggan dan dapatkan rincian penggunaan air.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-sky-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-sky-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Bayar Online</h3>
                <p className="text-gray-600">
                  Bayar tagihan air Anda secara online dengan berbagai metode pembayaran yang tersedia.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-sky-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-sky-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Pantau Penggunaan</h3>
                <p className="text-gray-600">
                  Lacak penggunaan air Anda secara berkala dan dapatkan riwayat penggunaan air.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Cara Kerja</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Ikuti langkah-langkah berikut untuk membayar tagihan air Anda dengan mudah.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-sky-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-lg font-semibold mb-2">Masukkan ID</h3>
                <p className="text-gray-600">
                  Masukkan nomor ID pelanggan Anda untuk melihat tagihan terbaru.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-sky-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-lg font-semibold mb-2">Verifikasi Data</h3>
                <p className="text-gray-600">
                  Verifikasi data pelanggan dan tagihan yang muncul.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-sky-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-lg font-semibold mb-2">Pilih Metode</h3>
                <p className="text-gray-600">
                  Pilih metode pembayaran yang tersedia sesuai keinginan Anda.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-sky-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-lg font-semibold mb-2">Selesai</h3>
                <p className="text-gray-600">
                  Proses pembayaran selesai dan Anda akan mendapatkan bukti pembayaran.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link to="/lookup" className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-md font-medium inline-block transition-colors">
                Bayar Sekarang
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
