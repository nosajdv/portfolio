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
