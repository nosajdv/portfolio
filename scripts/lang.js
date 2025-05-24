let currentLang = 'fr';

function loadLang(lang) {
  fetch('data/lang.json')
    .then(res => res.json())
    .then(translations => {
      // Update html lang attribute
      document.documentElement.lang = lang;
      
      // Update all elements with data-i18n attribute
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
          el.innerText = translations[lang][key];
        }
      });
      
      // Update title separately (it's not visible in the DOM)
      if (translations[lang] && translations[lang]['title']) {
        document.title = translations[lang]['title'];
      }
    })
    .catch(err => console.error('Error loading language file:', err));
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  loadLang(currentLang);
  document.getElementById('lang-toggle').innerText = currentLang === 'fr' ? 'EN' : 'FR';
});

// Initialization
loadLang(currentLang);