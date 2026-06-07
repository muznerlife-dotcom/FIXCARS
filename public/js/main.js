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
document.querySelectorAll('.service-card, .gallery-item, .review-card, .contact-item, .about-text, .about-image').forEach(el => {
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

// Engine Repair modal
const engineModal = document.getElementById('engine-modal');
const engineCard = document.getElementById('engine-repair-card');

if (engineModal && engineCard) {
  const openModal = () => {
    engineModal.classList.add('open');
    engineModal.setAttribute('aria-hidden', 'false');
  };
  const closeModal = () => {
    engineModal.classList.remove('open');
    engineModal.setAttribute('aria-hidden', 'true');
  };

  engineCard.addEventListener('click', openModal);
  engineCard.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') openModal(); });

  engineModal.querySelector('.service-modal-close').addEventListener('click', closeModal);
  engineModal.addEventListener('click', (e) => { if (e.target === engineModal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && engineModal.classList.contains('open')) closeModal(); });
}

// Gallery image click to open in lightbox
const lightbox = document.getElementById('gallery-lightbox');
const lightboxImage = document.getElementById('gallery-lightbox-image');
const lightboxClose = document.getElementById('gallery-lightbox-close');

if (lightbox && lightboxImage && lightboxClose) {
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
      const img = this.querySelector('img');
      if (!img) return;

      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
  };

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });
}

console.log('🚗 AutoPro Mechanic Station - Website loaded successfully!');
