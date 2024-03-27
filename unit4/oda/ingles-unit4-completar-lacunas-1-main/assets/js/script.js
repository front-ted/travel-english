$('.check').click(function () {
    let arrayExercicios = $(this).parents('.ODA_complete-words').find('select');
    console.log(arrayExercicios)
    for (let i = 0; i < arrayExercicios.length; i++) {
        arrayExercicios[i].classList.remove('correto')
        arrayExercicios[i].classList.remove('errado')
        if(arrayExercicios[i].value=='c'){
            arrayExercicios[i].classList.add('correto')
            
        } else {
            arrayExercicios[i].classList.add('errado')
        }
    }
})