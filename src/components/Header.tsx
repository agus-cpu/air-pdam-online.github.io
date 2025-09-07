
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-sky-700 to-sky-500">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-white rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-700">
                <path d="M21 14V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                <path d="M3.3 7 12 12l8.7-5"></path>
                <path d="m12 22 4-2.3"></path>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
                <path d="M20.27 20.27 22 22"></path>
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">PDAM Online</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-white hover:text-sky-100 font-medium">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/lookup" className="text-white hover:text-sky-100 font-medium">
                  Cek Tagihan
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-white hover:text-sky-100 font-medium">
                  Admin
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
