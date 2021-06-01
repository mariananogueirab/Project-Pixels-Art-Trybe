let header = document.querySelector('.cabecalho');
let main = document.querySelector('.principal');
let footer = document.querySelector('.rodape');

// Requisito 1:

let title = document.createElement('h1');
title.className = 'title';
title.innerText = 'Paleta de Cores';
header.appendChild(title);