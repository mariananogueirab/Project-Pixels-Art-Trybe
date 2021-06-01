const header = document.querySelector('.cabecalho');
const main = document.querySelector('.principal');
const footer = document.querySelector('.rodape');

// Requisito 1:

const title = document.createElement('h1');
title.id = 'title';
title.innerText = 'Paleta de Cores';
header.appendChild(title);