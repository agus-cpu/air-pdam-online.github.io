// ===== Helper: Bootstrap Alert =====
function showAlert(message, type, containerId = "alertContainer") {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
}

// ===== Helper: Toggle Password Visibility =====
function attachPasswordToggles() {
  document.querySelectorAll("[data-toggle-password]").forEach((btn) => {
    const targetId = btn.getAttribute("data-toggle-password");
    const input = document.getElementById(targetId);
    if (!input) return;
    btn.addEventListener("click", () => {
      const isPwd = input.getAttribute("type") === "password";
      input.setAttribute("type", isPwd ? "text" : "password");
      const icon = btn.querySelector("i");
      if (icon) {
        icon.classList.toggle("bi-eye");
        icon.classList.toggle("bi-eye-slash");
      }
    });
  });
}

// ===== Storage Helpers =====
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// ===== Register =====
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  attachPasswordToggles();
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("registerUsername").value.trim();
    const password = document.getElementById("registerPassword").value.trim();

    if (!username) {
      showAlert("Username tidak boleh kosong.", "danger");
      return;
    }
    if (/\s/.test(username)) {
      showAlert("Username tidak boleh mengandung spasi.", "warning");
      return;
    }
    if (password.length < 6) {
      showAlert("Password harus minimal 6 karakter.", "danger");
      return;
    }

    let users = getUsers();
    const exists = users.some((u) => u.username.toLowerCase() === username.toLowerCase());
    if (exists) {
      showAlert("Username sudah terdaftar. Silakan pilih yang lain.", "warning");
      return;
    }

    users.push({ username, password });
    saveUsers(users);
    showAlert("Registrasi berhasil! Mengarahkan ke halaman login...", "success");
    setTimeout(() => (window.location.href = "login.html"), 1500);
  });
}

// ===== Login =====
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  attachPasswordToggles();
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!username || !password) {
      showAlert("Username dan password wajib diisi.", "danger");
      return;
    }
    if (password.length < 6) {
      showAlert("Password minimal 6 karakter.", "warning");
      return;
    }

    const users = getUsers();
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      // Pakai sessionStorage agar logout otomatis setelah tab/jendela ditutup
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("currentUser", username);

      // Hapus sisa status lama bila ada
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("currentUser");

      showAlert("Login berhasil! Mengarahkan ke dashboard...", "success");
      setTimeout(() => (window.location.href = "dashboard.html"), 1000);
    } else {
      showAlert("Username atau password salah.", "danger");
    }
  });
}

// ===== Proteksi Dashboard =====
if (location.pathname.endsWith("dashboard.html")) {
  const ok = sessionStorage.getItem("isLoggedIn") === "true";
  if (!ok) {
    alert("Anda harus login terlebih dahulu!");
    window.location.href = "login.html";
  } else {
    const name = sessionStorage.getItem("currentUser") || "Admin";
    const holder = document.getElementById("adminName");
    if (holder) holder.textContent = name;
  }
}

// ===== Logout =====
function logout() {
  sessionStorage.removeItem("isLoggedIn");
  sessionStorage.removeItem("currentUser");
  alert("Anda telah logout.");
  window.location.href = "login.html";
}
window.logout = logout;

// ===== Auto-Logout saat tab/jendela ditutup =====
window.addEventListener("beforeunload", () => {
  sessionStorage.removeItem("isLoggedIn");
  sessionStorage.removeItem("currentUser");
});
