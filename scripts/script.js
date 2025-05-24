document.addEventListener('DOMContentLoaded', () => {
    // Force l'initialisation de la navbar
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('init'); // Classe de secours
    
    // Scroll listener modifié
    let lastScroll = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Désactivation du hide/show initial
        if (currentScroll <= scrollThreshold) {
            navbar.style.top = '0';
            return;
        }

        if (currentScroll > lastScroll) {
            navbar.style.top = '-70px';
        } else {
            navbar.style.top = '0';
        }
        lastScroll = currentScroll;
    });

    // Vérification visuelle
    console.log('Navbar element:', navbar);
    console.log('Computed styles:', window.getComputedStyle(navbar));
});