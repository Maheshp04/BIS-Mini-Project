const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

cards.forEach(card => card.addEventListener('click', flipCard));

document.getElementById('backToHome').addEventListener('click', () => {
  window.location.href = 'index.html';
});

document.getElementById('restartGame').addEventListener('click', restartGame);

function flipCard() {
  if (lockBoard || this === firstCard || this.classList.contains('matched')) return;

  this.classList.add('flipped');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
  } else {
    secondCard = this;
    lockBoard = true;
    checkForMatch();
  }
}

function checkForMatch() {
  const isMatch = firstCard.dataset.product === secondCard.dataset.product;

  isMatch ? handleMatch() : unflipCards();
}

function handleMatch() {
  const matchSound = new Audio('sounds/sound.mp3'); 
  matchSound.play();
  displayISCode(firstCard.dataset.product);
  firstCard.classList.add('matched');
  secondCard.classList.add('matched');

  
  setTimeout(() => {
    resetBoard();
  }, 3000); 
}

function displayISCode(product) {
  const ISCodes = {
    waterbottle: 'IS 14543',
    steel: 'IS 2062',
    fridge: 'IS 1476',
    pipe: 'IS 1239'
  };

  const productName = product.charAt(0).toUpperCase() + product.slice(1);
  const isCodeDisplay = document.getElementById('isCodeDisplay');
  isCodeDisplay.innerText = `${productName}: IS Code ${ISCodes[product]}`;
  isCodeDisplay.style.display = 'block';
  
  setTimeout(() => {
    isCodeDisplay.style.display = 'none';
  }, 3000); 
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetBoard();
  }, 1000);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

function restartGame() {
  cards.forEach(card => {
    card.classList.remove('flipped');
    card.classList.remove('matched'); 
    card.addEventListener('click', flipCard);
  });
  shuffleCards();
  resetBoard();
  document.getElementById('isCodeDisplay').innerText = '';
  document.getElementById('isCodeDisplay').style.display = 'none';
}

function shuffleCards() {
  const shuffledCards = Array.from(cards);
  shuffledCards.sort(() => Math.random() - 0.5); 

  shuffledCards.forEach((card, index) => {
    card.style.order = index; 
  });
}


shuffleCards();