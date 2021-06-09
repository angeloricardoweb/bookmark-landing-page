const simple = document.querySelector('.container-simple');
const speedy = document.querySelector('.container-speedy');
const easy = document.querySelector('.container-easy');
const featuresContainer = document.querySelector('.features-containers');

function iniciaContainer() {
    featuresContainer.removeChild(speedy);
    featuresContainer.removeChild(easy);
}

iniciaContainer();

document.addEventListener('click', function (e) {
    const elemento = e.target;

    if (elemento.classList.contains('btn-simple')) {
        featuresContainer.removeChild(easy);
        featuresContainer.appendChild(simple);
        featuresContainer.removeChild(speedy);
        featuresContainer.removeChild(easy);
    }

    if (elemento.classList.contains('btn-speedy')) {
        featuresContainer.appendChild(speedy);
        featuresContainer.removeChild(simple);
        featuresContainer.removeChild(easy);
    }

    if (elemento.classList.contains('btn-easy')) {
        featuresContainer.appendChild(easy);
        featuresContainer.removeChild(speedy);
        featuresContainer.removeChild(simple);
    }
});




