// trasformare l'elemento open in una variabile 
const button = document.getElementById("open-menu");

// aggiungere azione al click dell'elemento
let hamburgerMenu = document.getElementById("hamburger-menu")

button.addEventListener('click',function(){
    hamburgerMenu.style.display = "block";
});

// per chiudere il menù trasformare elemento close in una variabile
const closeButton =  document.getElementById("close-menu")

// aggiungere azione al click dell'elemento
closeButton.addEventListener('click',function(){
    hamburgerMenu.style.display = "none";
});