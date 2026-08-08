// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Simple form handling (prevents page reload)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! Your message has been received. (This is a demo – connect a real form service later.)');
  this.reset();
});
