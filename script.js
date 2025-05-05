// 1. Welcome Animation
window.addEventListener('load', () => {
  const hero = document.querySelector('.hero-content');
  if (hero) {
    setTimeout(() => {
      hero.style.opacity = 1;
      hero.style.transform = 'translateY(0)';
    }, 300);
  }
});

// 2. Form Validation
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const email = contactForm.querySelector('input[type="email"]');
      const phone = contactForm.querySelector('input[type="tel"]');
      let valid = true;

      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        alert('Please enter a valid email address.');
        valid = false;
      }

      if (phone && !/^\d{10}$/.test(phone.value)) {
        alert('Please enter a valid 10-digit phone number.');
        valid = false;
      }

      if (!valid) e.preventDefault();
    });
  }
});

// 3. Responsive Navbar Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav ul');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
});

// 4. Scroll Animations
window.addEventListener('scroll', () => {
  document.querySelectorAll('.scroll-reveal').forEach(elem => {
    const pos = elem.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      elem.classList.add('visible');
    }
  });
});

// 5. Product Image Filter
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');
      productCards.forEach(card => {
        card.style.display = (category === 'all' or card.getAttribute('data-category') === category) ? 'block' : 'none';
      });
    });
  });
});
