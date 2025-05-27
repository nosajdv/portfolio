fetch('data/projects.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const container = document.getElementById('projects-container');
    
    if (!container) {
      console.error('Container non trouvé');
      return;
    }

    data.forEach(project => {
      const card = document.createElement('div');
      card.classList.add('project-card', 'reveal', 'active');

      // Vérification et valeurs par défaut
      const title = project.title || 'Projet sans titre';
      const description = project.description || 'Description non disponible';
      const url = project.url || '#'; // Lien par défaut si non défini
      const image = project.image || 'img/default-project.png'; // Image par défaut

      card.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <a href="${url}" target="_blank" class="project-link">Voir le projet</a>
      `;

      // Applique l'image de fond si elle existe
      if (project.image) {
        card.style.backgroundImage = `url('${image}')`;
      }

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Erreur de chargement des projets:', error);
    const container = document.getElementById('projects-container');
    if (container) {
      container.innerHTML = '<p class="error-message">Impossible de charger les projets. Veuillez réessayer plus tard.</p>';
    }
  });