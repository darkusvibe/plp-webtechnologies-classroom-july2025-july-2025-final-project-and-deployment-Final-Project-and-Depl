<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Create Account - XGamer Technologies</title>
  <link rel="stylesheet" href="get.css">
</head>
<body>

  <header class="login-header">
    <h1>Create Your Account</h1>
    <p>Fill out the form below to create an account.</p>
  </header>

  <main class="login-container">
    <div class="create-account-form">
      <h2>Create Account</h2>
      <form action="create_account_handler.php" method="POST">
        <div class="form-group">
          <label for="create-name">Name:</label>
          <input type="text" name="name" id="create-name" placeholder="Enter your name" required>
        </div>
        <div class="form-group">
          <label for="create-email">Email:</label>
          <input type="email" name="email" id="create-email" placeholder="Enter your email" required>
        </div>
        <div class="form-group">
          <label for="create-password">Password:</label>
          <input type="password" name="password" id="create-password" placeholder="Enter your password" required>
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  </main>
</body>
</html>
