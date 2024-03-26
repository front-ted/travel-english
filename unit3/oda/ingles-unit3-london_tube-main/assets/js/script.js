$('.check').click(function () {
    let arrayExercicios = $('.ODA_london_tube select');
    for (let i = 0; i < arrayExercicios.length; i++) {        
        if(arrayExercicios[i].value=='c'){
            arrayExercicios[i].parentNode.classList.remove('errado')
            arrayExercicios[i].parentNode.classList.add('correto')
            
        } else {
            arrayExercicios[i].parentNode.classList.remove('correto')
            arrayExercicios[i].parentNode.classList.add('errado')
        }
    }
})