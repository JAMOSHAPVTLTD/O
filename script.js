// Mobile Navbar Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav ul');
  toggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
});

// Scroll Reveal
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
      sec.style.transition = 'all 0.6s ease';
    }
  });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
  const email = this.querySelector('input[type="email"]');
  const phone = this.querySelector('input[type="tel"]');
  let valid = true;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    alert('Please enter a valid email.');
    valid = false;
  }
  if (!/^\d{10}$/.test(phone.value)) {
    alert('Please enter a 10-digit phone number.');
    valid = false;
  }
  if (!valid) e.preventDefault();
});