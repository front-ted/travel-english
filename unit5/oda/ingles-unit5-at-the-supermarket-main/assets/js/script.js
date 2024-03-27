$('.check-answers').click(function () {
    let selectArray = $('.supermarket-aisles select');
    for (let i = 0; i < selectArray.length; i++) {
        console.log(selectArray[i].value)
        if (selectArray[i].value == 'correct') {
            selectArray[i].parentNode.classList.add('correct');
        }
    }
})