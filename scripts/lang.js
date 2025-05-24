let currentLang = 'fr';

function loadLang(lang) {
  fetch('data/lang.json')
    .then(res => res.json())
    .then(translations => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
          el.innerText = translations[lang][key];
        }
      });
    });
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  loadLang(currentLang);
  document.getElementById('lang-toggle').innerText = currentLang === 'fr' ? 'EN 🇬🇧' : 'FR 🇫🇷';
});

// Initialisation
loadLang(currentLang);
