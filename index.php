<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Jason DA VEIGA</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="src/favicon.ico">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <a href="#accueil" class="logo">JDV</a>
            <div class="nav-links">
                <a href="#accueil" class="nav-link">Accueil</a>
                <a href="#projets" class="nav-link">Projets</a>
                <a href="#contact" class="nav-link">Contact</a>
            </div>
        </div>
    </nav>

    <section id="accueil" class="hero">
        <div class="container">
            <h1>Jason DA VEIGA</h1>
            <p class="subtitle">Étudiant en Licence Informatique</p>
            <div class="hero-content"></div>
        </div>
    </section>

    <section id="projets" class="projects">
        <div class="container">
            <h2>Mes Projets</h2>
            <div id="projects-container" class="projects-grid"></div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>© <span id="current-year"></span> nosajdv.github.io</p>
        </div>
    </footer>

    <script src="scripts/load-projects.js"></script>
    <script>
        // Année dynamique
        document.getElementById('current-year').textContent = new Date().getFullYear();
    </script>
</body>
</html>