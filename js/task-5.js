function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

function updateColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor; 
  colorSpan.textContent = newColor; 
}

changeColorButton.addEventListener('click', updateColor);