<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Admin - PDAM Online</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">PDAM Online</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="index.html">Beranda</a></li>
        <li class="nav-item"><a class="nav-link" href="lookup.html">Cek Tagihan</a></li>
        <li class="nav-item"><a class="nav-link active" href="login.html">Admin</a></li>
      </ul>
    </div>
  </div>
</nav>
<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-4">
      <div class="card shadow">
        <div class="card-body">
          <h4 class="text-center mb-4">Login Admin</h4>
          <form id="loginForm">
            <div class="mb-3">
              <label class="form-label">Username</label>
              <input type="text" id="loginUsername" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input type="password" id="loginPassword" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </form>
          <p class="text-center mt-3">Belum punya akun? <a href="register.html">Daftar</a></p>
        </div>
      </div>
    </div>
  </div>
</div>
<script src="script.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
