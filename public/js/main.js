// Smooth scrolling for navigation links
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetSection.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
    }
  });
}, observerOptions);

// Observe all major elements
document.querySelectorAll('.service-card, .gallery-item, .contact-item, .about-text, .about-image').forEach(el => {
  observer.observe(el);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(44, 62, 80, 1)';
  } else {
    navbar.style.background = 'rgba(44, 62, 80, 0.95)';
  }
});

// Gallery image click to open in new tab
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', function() {
    window.open(this.src, '_blank');
  });
});

console.log('🚗 AutoPro Mechanic Station - Website loaded successfully!');
