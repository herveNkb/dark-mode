let button = document.querySelector('#mode');
let spanText = document.querySelector('span');

// Vérification dans le localStorage si le thème sombre est enregistré, si true, alors on appel la fonction modeSombre()
if(localStorage.getItem('theme')) {
  if(localStorage.getItem('theme') == 'sombre') {
    modeSombre();
  }
}
// Détection du clic sur le bouton "Thème sombre"
button.addEventListener('click', () => {
  if(document.body.classList.contains('dark')) {
    // mode clair
    document.body.className = ''; // Retire toutes les classes de l'élément Body
    spanText.textContent = 'Thème sombre'; //Change le texte du bouton
    localStorage.setItem('theme', 'clair'); // Crée un localStorage pour se souvenir du choix de l'utilisateur
  }
  else {
    //mode sombre
    modeSombre();
  }
});

function modeSombre () {
  document.body.className = 'dark';
  spanText.textContent = 'Thème clair';
  localStorage.setItem('theme', 'sombre');
}