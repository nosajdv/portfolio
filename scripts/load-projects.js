fetch('data/projects.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('projects-container');

    data.forEach(project => {
      const card = document.createElement('div');
      card.classList.add('project-card', 'reveal', 'active'); // activation manuelle

      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.url}" target="_blank">Voir le projet</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error('Erreur de chargement des projets:', error));
