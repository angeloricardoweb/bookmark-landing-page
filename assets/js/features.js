const btnSimple = document.querySelector('.btn-simple');
const btnEasy = document.querySelector('.btn-easy');
const btnSpeedy = document.querySelector('.btn-speedy');
const simple= document.querySelector('.simple');
const speedy= document.querySelector('.speedy');
const easy= document.querySelector('.easy');

btnSimple.addEventListener('click', function (e) {
    alert('botao simple');
    simple.classList.add('container-off');
});
btnEasy.addEventListener('click', function (e) {
    alert('botao easy');
   
    
});
btnSpeedy.addEventListener('click', function (e) {
    alert('botao speedy');
 
});