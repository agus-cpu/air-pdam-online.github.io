
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PDAM Online</h3>
            <p className="text-gray-300">
              Layanan pembayaran tagihan air PDAM secara online yang mudah, cepat, dan aman.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/lookup" className="text-gray-300 hover:text-white">
                  Cek Tagihan
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Jl. Merdeka Timur</p>
              <p className="mb-2">Lhokseumawe, 10110</p>
              <p className="mb-2">Telepon: (021) 555-1234</p>
              <p>Email: info@pdamonline.co.id</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© 2025 PDAM Online. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
