const carousel = document.querySelector('.carousel');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0; // Índice de la imagen actual
const totalItems = document.querySelectorAll('.carousel-item').length;

// Función para actualizar el carrusel
const updateCarousel = () => {
  const offset = -currentIndex * 100; // Calcular el desplazamiento
  carousel.style.transform = `translateX(${offset}%)`;
};

// Función para ir a la izquierda
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
  updateCarousel();
});

// Función para ir a la derecha
rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

// Cambio automático cada 5 segundos
const autoSlide = setInterval(() => {
  currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
  updateCarousel();
}, 5000);

// Detener el auto-slide mientras se interactúa con las flechas
[leftArrow, rightArrow].forEach(arrow => {
  arrow.addEventListener('click', () => {
    clearInterval(autoSlide);
  });
});
