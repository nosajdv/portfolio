document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/nosajdv/portfolio/main/data/projects.json');
        const projects = await response.json();
        
        const container = document.getElementById('projects-container');
        
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                ${project.url ? `<a href="${project.url}" target="_blank" rel="noopener" class="project-link">Voir le projet</a>` : ''}
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Erreur de chargement des projets:', error);
    }
});