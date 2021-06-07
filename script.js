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
createDivColors(randomColors());
// createDivColors('#FF2652');
createDivColors(randomColors());
createDivColors(randomColors());
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
inputSize.type = 'number';
inputSize.id = 'board-size';
inputSize.min = '0';
inputSize.max = '50';
divButtonSize.appendChild(inputSize);

const buttonSize = document.createElement('button');
buttonSize.type = 'button';
buttonSize.innerText = 'VQV';
buttonSize.id = 'generate-board';
divButtonSize.appendChild(buttonSize);

function minSize (min) {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.width = `${min}px`;
    pixels[index].style.height = `${min}px`;
  }
}

function maxSize (max) {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.width = `${max}px`;
    pixels[index].style.height = `${max}px`;
  }
}

buttonSize.addEventListener('click', () => {
  if (inputSize.value !== '') {
    for (let index = 0; index < pixels.length; index += 1) {
      if (inputSize.value < 5) {
        minSize(5);
      } else if (inputSize.value > 50) {
        maxSize(50);
      } else {
        pixels[index].style.width = `${inputSize.value}px`;
        pixels[index].style.height = `${inputSize.value}px`;
      }
      pixels[index].style.backgroundColor = 'white';
    }
  } else {
    alert('Board inválido!');
  }
});

// Exercício 12:

function randomColors() {
  let color1 = Math.ceil(Math.random() * 255);
  let color2 = Math.ceil(Math.random() * 255);
  let color3 = Math.ceil(Math.random() * 255);
  return `rgb(${color1}, ${color2}, ${color3})`;
}
