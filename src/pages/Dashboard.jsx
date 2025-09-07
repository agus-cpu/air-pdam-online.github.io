import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const username = localStorage.getItem("currentUser");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Selamat Datang, {username}!</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}
