let menu = document.querySelector('.menu');
let header = document.querySelector('header');
let nav = document.querySelector('nav');
let close = document.querySelector('.close');

menu.addEventListener('click',()=>{
nav.classList.toggle('active');
header.classList.toggle('active');
close.classList.toggle('active');
menu.classList.toggle('active');



});
close.addEventListener('click',()=>{
nav.classList.toggle('active');
header.classList.toggle('active');
close.classList.toggle('active');
menu.classList.toggle('active');


});