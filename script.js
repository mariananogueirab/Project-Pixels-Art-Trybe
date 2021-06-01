const header = document.querySelector('.cabecalho');
const main = document.querySelector('.principal');
const footer = document.querySelector('.rodape');

// Requisito 1:

const title = document.createElement('h1');
title.id = 'title';
title.innerText = 'Paleta de Cores';
header.appendChild(title);

// Requisito 2:
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
