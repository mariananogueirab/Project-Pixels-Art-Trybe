const header = document.querySelector('.cabecalho');
const main = document.querySelector('.principal');
const footer = document.querySelector('.rodape');

// Requisito 1:

const title = document.createElement('h1');
title.id = 'title';
title.innerText = 'Paleta de Cores';
header.appendChild(title);

// Requisito 2 e 3:
// Div de fora:
const divPalette = document.createElement('div');
divPalette.id = 'color-palette';
main.appendChild(divPalette);

// Divs menores com as cores:
function createDivColors(cor) {
  const divColors = document.createElement('div');
  divColors.className = 'color';
  divColors.style.backgroundColor = cor;
  divPalette.appendChild(divColors);
}

createDivColors('black');
createDivColors('#B6537B');
// createDivColors('#FF2652');
createDivColors('#FF0EAA');
createDivColors('#FF9C1E');
// createDivColors('#FEF636');
// createDivColors('#ADFF91');

// Para exercício 9:
const divButton = document.createElement('div');
divButton.className = 'btn';
main.appendChild(divButton);

// Requisito 4:

const divTable = document.createElement('div');
divTable.className = 'div-table';
main.appendChild(divTable);

const pixelsTable = document.createElement('table');
pixelsTable.id = 'pixel-board';
divTable.appendChild(pixelsTable);

function createLinePixels(numberOfColumns) {
  const lineTable = document.createElement('tr');
  lineTable.className = 'line-table';
  pixelsTable.appendChild(lineTable);
  for (let index = 1; index <= numberOfColumns; index += 1) {
    const pixel = document.createElement('td');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    lineTable.appendChild(pixel);
  }
}

createLinePixels(5);
createLinePixels(5);
createLinePixels(5);
createLinePixels(5);
createLinePixels(5);

// Exercício 6:

const colors = document.getElementsByClassName('color');
for (let index = 0; index < colors.length; index += 1) {
  if (colors[index].style.backgroundColor === 'black') {
    colors[index].classList.add('selected');
  }
}

// Exercício 7:

divPalette.addEventListener('click', (event) => {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
});

// Exercício 8:

pixelsTable.addEventListener('click', (event) => {
  const colorSelected = document.querySelector('.selected');
  event.target.style.backgroundColor = colorSelected;
  console.log(event.target);
});

// Exercício 9:

const button = document.createElement('button');
button.type = 'button';
button.innerHTML = 'Limpar quadro';
divButton.appendChild(button);

button.addEventListener('click', () => {
  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});