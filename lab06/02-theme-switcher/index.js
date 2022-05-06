/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
const DefaultTheme = () => {
   theme = document.querySelector("body").className;
   var element = document.querySelector("body");
   element.classList.remove(theme);
};

const DesertTheme = () => {
   document.querySelector("body").className = "desert";
};
const OceanTheme = () => {
   document.querySelector("body").className = "ocean";
};
const ContrastTheme = () => {
   document.querySelector("body").className = "high-contrast";
};

document.querySelector("#default").addEventListener('click', DefaultTheme);
document.querySelector("#desert").addEventListener('click', DesertTheme);
document.querySelector("#ocean").addEventListener('click', OceanTheme);
document.querySelector("#high-contrast").addEventListener('click', ContrastTheme);