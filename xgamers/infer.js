document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const createAccountForm = document.getElementById('create-account-form');

  // Handle Account Creation
  createAccountForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('create-name').value;
    const email = document.getElementById('create-email').value;
    const password = document.getElementById('create-password').value;

    // Save user data to localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created successfully! Please log in.');
    createAccountForm.reset();
  });

  // Handle Login
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      alert(`Welcome back, ${user.name}! Redirecting to the home page...`);
      localStorage.setItem('currentUser', JSON.stringify(user)); // Save current user
      window.location.href = 'home.html'; // Redirect to home page
    } else {
      alert('Invalid email or password. Please try again.');
    }
  });
});
