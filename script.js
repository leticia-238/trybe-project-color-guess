function rgbColorGenerate() {
  function sortNumColor() {
    return Math.floor(Math.random() * 256);
  }
  const numColor1 = sortNumColor();
  const numColor2 = sortNumColor();
  const numColor3 = sortNumColor();
  return `rgb(${numColor1}, ${numColor2}, ${numColor3})`;
}

const balls = document.querySelectorAll('.ball');

function setColors() {
  const numBall = Math.floor(Math.random() * balls.length);
  balls.forEach((element) => {
    const color = rgbColorGenerate();
    const ball = element;
    ball.style.backgroundColor = color;
  });
  return balls[numBall].style.backgroundColor;
}

const rgbColor = document.querySelector('#rgb-color');
const answerText = document.querySelector('#answer');
const score = document.querySelector('#score');
let currentColor;
let attempts = 0;
let hits = 0;

function initGame() {
  currentColor = setColors();
  rgbColor.innerText = currentColor;
  answerText.innerText = 'Escolha uma cor';
  score.innerText = `score: ${hits}`;
  attempts = 0;
}

const buttonReset = document.querySelector('#reset-game');

window.onload = initGame;
buttonReset.addEventListener('click', initGame);

function checkCount() {
  if (attempts >= 3) {
    hits = 0;
    initGame();
  } else {
    attempts += 1;
  }
}

function selectColor(e) {
  const guessColor = e.target.style.backgroundColor;
  if (currentColor === guessColor) {
    answerText.innerText = 'Acertou!';
    hits += 3;
    setTimeout(initGame, 1000);
  } else {
    answerText.innerText = 'Errou! Tente novamente!';
    checkCount();
  }
}

balls.forEach((element) => {
  element.addEventListener('click', selectColor);
});
