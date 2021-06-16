


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}



document.forms[0].addEventListener('submit', (event )=>{
    event.preventDefault()
    const input = document.querySelector('[data-input-email]')
    const errorField = document.querySelector('.error-field')
    const svgError = document.querySelector('#svg-error')
    
    // CHECAR SE O EMAIL É VALIDO
    if(!validateEmail(input.value)){
        input.classList.add('error')
        errorField.innerHTML = `Whoops. make sure it's an email`
        svgError.setAttribute('class', 'error')
        return;

    } else{

       
        input.classList.remove('error')
        svgError.removeAttribute('class','error')
        errorField.innerHTML = ''


        // ENVIAR FORMULÁRIO
        document.forms[0].submit()

         return;
    }
        
   
    
})





