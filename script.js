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
  event.target.style.backgroundColor = colorSelected.style.backgroundColor;
});

// Exercício 9:

const divButton = document.createElement('div');
divButton.className = 'btn';
main.insertBefore(divButton, divTable);

const divButtonClean = document.createElement('div');
divButtonClean.className = 'divClean';
divButton.appendChild(divButtonClean);

const buttonClean = document.createElement('button');
buttonClean.type = 'button';
buttonClean.innerHTML = 'Limpar';
buttonClean.id = 'clear-board';
divButtonClean.appendChild(buttonClean);

const pixels = document.querySelectorAll('.pixel');

buttonClean.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

// Exercício 10:

const divButtonSize = document.createElement('div');
divButtonSize.className = 'divSize';
divButton.appendChild(divButtonSize);

const inputSize = document.createElement('input');
inputSize.type = 'text';
inputSize.id = 'board-size';
inputSize.min = '0';
divButtonSize.appendChild(inputSize);

const buttonSize = document.createElement('button');
buttonSize.type = 'button';
buttonSize.innerText = 'VQV';
buttonSize.id = 'generate-board';
divButtonSize.appendChild(buttonSize);

function minSize (size) {
  
}

// eslint-disable-next-line max-lines-per-function
buttonSize.addEventListener('click', () => {
  if (inputSize.value != '') {
  for (let index = 0; index < pixels.length; index += 1) {
    if (inputSize.value < 5) {
      pixels[index].style.width = '5px';
      pixels[index].style.height = '5px';
      pixels[index].style.backgroundColor = 'white';
    } else if (inputSize.value > 50) {
      pixels[index].style.width = '50px';
      pixels[index].style.height = '50px';
      pixels[index].style.backgroundColor = 'white';
    } else {
      pixels[index].style.width = `${inputSize.value}px`;
      pixels[index].style.height = `${inputSize.value}px`;
      pixels[index].style.backgroundColor = 'white';
    }
  }
  } else {
    alert('Board inválido!');
  }
});
