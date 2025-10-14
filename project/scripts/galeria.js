const track = document.querySelector('.carousel-track');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');
const items = Array.from(track.children);

let currentIndex = 0;

// Función para obtener siempre el ancho actual del item
function getItemWidth() {
  return items[0].getBoundingClientRect().width + 16; // +16 por el gap aproximado (ajustable)
}

// Función para mover el carrusel
function moveCarousel() {
  const itemWidth = getItemWidth();
  track.style.transform = 'translateX(-' + currentIndex * itemWidth + 'px)';
}

// Botón siguiente
nextButton.addEventListener('click', () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // vuelve al inicio
  }
  moveCarousel();
});

// Botón anterior
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = items.length - 1; // va al último
  }
  moveCarousel();
});

// Ajusta el tamaño si cambia el viewport (ej. rotación de móvil)
window.addEventListener('resize', moveCarousel);
