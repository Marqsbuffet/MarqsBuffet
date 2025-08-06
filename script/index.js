
/* Swipe do carrosel */

const cards = document.querySelectorAll('.product_card');
let current = 0;

function updateCards() {
  cards.forEach((card, index) => {
    const offset = index - current;

    card.classList.remove('active');
    
    card.style.zIndex = 10 - Math.abs(offset);
    card.style.transform = `translateX(${offset * 220}px) scale(0.85)`;

    if (offset === 0) {
      card.classList.add('active');
      card.style.transform = `translateX(0) scale(1)`;
    }
  });
}

function nextCard() {
  current = (current + 1) % cards.length;
  updateCards();
}

function prevCard() {
  current = (current - 1 + cards.length) % cards.length;
  updateCards();
}

let startX = 0;

document.querySelector('.products_display').addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.querySelector('.products_display').addEventListener('touchend', (e) => {
  const diff = e.changedTouches[0].clientX - startX;
  if (diff > 50) prevCard();
  else if (diff < -50) nextCard();
});

document.querySelector('.products_display').addEventListener('click', (e) => {
  if (e.clientX > window.innerWidth / 2) nextCard();
  else prevCard();
});

updateCards();
