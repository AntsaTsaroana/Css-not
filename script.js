// SECTION 1
var elements = document.querySelectorAll('.wrapper div');
var span_sect = document.querySelector('.section_1 span');

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function() {
    var color = this.getAttribute('data-color');

    // Supprimer la classe active de tous les éléments
    for (var j = 0; j < elements.length; j++) {
      elements[j].classList.remove('active');
    }

    // Ajouter la classe active à l'élément actuel
    this.classList.add('active');

    // Changer la couleur de fond en utilisant data-color
    span_sect.style.backgroundColor = color;
  });
}