import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.username === username)) {
      alert("Username sudah terdaftar!");
      return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registrasi berhasil! Silakan login.");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          Register
        </button>
      </form>
      <p className="mt-4 text-center">
        Sudah punya akun? <Link to="/login" className="text-green-500">Login</Link>
      </p>
    </div>
  );
}
