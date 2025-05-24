document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const toggleBtn = document.getElementById('toggle-menu');
  const navItems = document.getElementById('nav-items');
  const scrollThreshold = 50;
  let lastScroll = 0;

  // Transition fluide pour la navbar
  if (navbar) {
    navbar.style.transition = 'transform 0.4s ease-in-out';
  }

  // Masquer/Afficher la navbar au scroll
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (!navbar) return;

    if (Math.abs(currentScroll - lastScroll) > 5) {
      if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
        // Scroll vers le bas : cacher la navbar
        navbar.style.transform = 'translateY(-120%)';
      } else {
        // Scroll vers le haut : afficher la navbar
        navbar.style.transform = 'translateY(0)';
      }
      lastScroll = currentScroll;
    }
  });

  // Menu mobile toggle
  if (toggleBtn && navItems) {
    toggleBtn.addEventListener('click', () => {
      navItems.classList.toggle('active');
      toggleBtn.classList.toggle('open');
    });

    // Fermer le menu après clic sur un lien
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navItems.classList.remove('active');
        toggleBtn.classList.remove('open');
      });
    });
  }

  // Détection de visibilité avec IntersectionObserver
const revealSections = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, {
  threshold: 0.15 // déclenche à 15% de visibilité
});

// Appliquer l'observer à chaque section avec la classe 'reveal'
revealSections.forEach(section => observer.observe(section));

});

// Initialize different backgrounds for each section
document.querySelectorAll('.animated-bg').forEach(bg => {
  const type = bg.getAttribute('data-bg-type');
  
  if(type === 'particles') {
    initParticles(bg);
  }
  // Add other initialization functions for different types
});

function initParticles(container) {
  // Simple particle system implementation
  const particleCount = 50;
  
  for(let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 5 + 1;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * -20;
    
    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${posX}%;
      top: ${posY}%;
      background: var(--light-slate);
      animation: float ${duration}s ${delay}s infinite linear;
      opacity: ${Math.random() * 0.5 + 0.1};
    `;
    
    container.appendChild(particle);
  }
}
