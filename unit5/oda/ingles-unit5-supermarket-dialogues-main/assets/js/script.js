$('.market-dialogue-selects select').on('change', function () {
    console.log($(this)[0].value);
    if ($(this)[0].value == 'correct') {
        $(this)[0].classList.remove('wrong')
        $(this)[0].classList.add('correct')
    } else {
        $(this)[0].classList.remove('correct')
        $(this)[0].classList.add('wrong')
    }
    if($(this).parents('tr').find('select').length == $(this).parents('tr').find('select.correct').length) {
        $(this).parents('tr')[0].classList.add('correct-row')
    }
    if($(this).parents('tr').find('select').length != $(this).parents('tr').find('select.correct').length && $(this).parents('tr')[0].classList.contains('correct-row')) {
        $(this).parents('tr')[0].classList.remove('correct-row')
    }
})