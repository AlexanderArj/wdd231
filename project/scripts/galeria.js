const track = document.querySelector('.track');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');
const items = Array.from(track.children);

let currentIndex = 0;

function getItemWidth() {
  const item = items[0];
  if (!item) return 0;
  const style = window.getComputedStyle(item);
  const marginRight = parseFloat(style.marginRight) || 0;
  return item.getBoundingClientRect().width + marginRight;
}

function moveCarousel() {
  const itemWidth = getItemWidth();
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  track.style.transition = 'transform 0.4s ease-in-out';
}

nextButton.addEventListener('click', () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  moveCarousel();
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = items.length - 1;
  }
  moveCarousel();
});

window.addEventListener('resize', moveCarousel);
