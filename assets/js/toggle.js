const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    console.log('click');
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click',toggleMenu);