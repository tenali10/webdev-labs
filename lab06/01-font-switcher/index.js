const makeBigger = () => {
   var header = document.querySelector("h1");
   var style = window.getComputedStyle(header, null).getPropertyValue('font-size');
   var fontSize = parseFloat(style); 

   header.style.fontSize = (fontSize + 1) + 'px';

   var pg = document.querySelector("p");
   var style = window.getComputedStyle(pg, null).getPropertyValue('font-size');
   var fontSize = parseFloat(style); 

   pg.style.fontSize = (fontSize + 1) + 'px';
};

const makeSmaller = () => {
   var header = document.querySelector("h1");
   var style = window.getComputedStyle(header, null).getPropertyValue('font-size');
   var fontSize = parseFloat(style); 

   header.style.fontSize = (fontSize - 1) + 'px';

   var pg = document.querySelector("p");
   var style = window.getComputedStyle(pg, null).getPropertyValue('font-size');
   var fontSize = parseFloat(style); 

   pg.style.fontSize = (fontSize - 1) + 'px';
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

