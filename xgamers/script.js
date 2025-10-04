// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Form Submission Handler
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Message sent! We will get back to you soon.');
  contactForm.reset();
});
// Dark Mode Toggle with Icon Change
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  // Toggle between moon and sun icons
  if (document.body.classList.contains('dark-theme')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
  
  // Save the current theme to local storage
  const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Load saved theme on page load
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
});
document.querySelectorAll('.game-item').forEach(item => {
  item.addEventListener('click', (e) => {
    item.classList.add('active');
    setTimeout(() => item.classList.remove('active'), 200); // Removes highlight after 200ms
  });
});
// Lightbox functionality for screenshots
document.querySelectorAll('.clickable-screenshot').forEach(image => {
  image.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    const img = document.createElement('img');
    img.src = image.src;
    lightbox.appendChild(img);

    lightbox.addEventListener('click', () => {
      lightbox.remove();
    });
  });
});
document.getElementById('review-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get review text and rating
  const reviewText = event.target.querySelector('textarea').value;
  const rating = event.target.querySelector('select').value;

  // Create a new review element
  const reviewContainer = document.createElement('div');
  reviewContainer.classList.add('review');

  // Add text and rating to the review
  reviewContainer.innerHTML = `
    <p class="review-text">"${reviewText}"</p>
    <p class="review-rating">Rating: ${'⭐'.repeat(rating)}</p>
  `;

  // Append the new review to the reviews container
  document.querySelector('.reviews-container').appendChild(reviewContainer);

  // Clear the form
  event.target.reset();
});
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate fields
  if (!name || !email || !message) {
    alert('Please fill in all the fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Show success message
  alert('Thank you for contacting us! We will get back to you shortly.');

  // Reset the form
  document.getElementById('contact-form').reset();
});

// Helper function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navIcons = document.querySelector('.nav-icons');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navIcons.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser) {
    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = `Welcome, ${currentUser.name}!`;
    document.querySelector('header').appendChild(welcomeMessage);
  }
});
