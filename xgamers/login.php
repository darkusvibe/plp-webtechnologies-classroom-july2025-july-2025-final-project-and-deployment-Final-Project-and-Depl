<?php
session_start();
if (isset($_SESSION['user_id'])) {
    header('Location: home.html'); 
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - XGamer Technologies</title>
  <link rel="stylesheet" href="get.css">
</head>
<body>

  <header class="login-header">
    <h1>Welcome to XGamer Technologies</h1>
    <p>Please log in to continue or <a href="create_account.php">Create an Account</a>.</p>
  </header>

  <main class="login-container">
   
    <div class="login-form">
      <h2>Login</h2>
      <form action="login_handler.php" method="POST">
        <div class="form-group">
          <label for="login-email">Email:</label>
          <input type="email" name="email" id="login-email" placeholder="Enter your email" required>
        </div>
        <div class="form-group">
          <label for="login-password">Password:</label>
          <input type="password" name="password" id="login-password" placeholder="Enter your password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </main>
</body>
</html>
