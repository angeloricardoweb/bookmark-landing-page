document.querySelectorAll('.accordion__button').forEach(button =>{
    button.addEventListener('click', ()=>{
        console.log('click')
        const accordingContent = button.nextElementSibling;

        button.classList.toggle('active')

        if(button.classList.contains('active')){
            
            accordingContent.style.maxHeight = accordingContent.scrollHeight + 'px'
        } else{
            accordingContent.style.maxHeight = '0'
        }
    })
})

