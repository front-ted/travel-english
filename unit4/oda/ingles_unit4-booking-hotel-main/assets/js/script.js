const button = document.querySelector('.confirm-booking');
const termsAndConditions = document.querySelector('#checkbox');
const inputs = document.querySelectorAll('input');
const selects = document.querySelectorAll('select');
const loader = $('.loader');
$('#tel-input').mask('(00) 00000-0000');
loader.hide();
for (var o = 0; o < inputs.length; o++) {
    inputs[o].addEventListener('focus', function () {
        if (this.classList.contains('error')) {
            this.classList.remove('error');
        }
    })
}
for (var u = 0; u < selects.length; u++) {
    selects[u].addEventListener('focus', function () {
        if (this.classList.contains('error')) {
            this.classList.remove('error');
        }
    })
}
termsAndConditions.addEventListener('click', function () {
    if (termsAndConditions.parentNode.classList.contains('error')) {
        termsAndConditions.parentNode.classList.remove('error');
    }
})

button.addEventListener('click', clickFunction);

function clickFunction() {
    if (termsAndConditions.checked == false) {
        termsAndConditions.parentNode.classList.add('error');
    }

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            inputs[i].classList.add('error');
        }
    }
    for (var a = 0; a < selects.length; a++) {
        if (selects[a].value == "") {
            selects[a].classList.add('error');
        }
    }
    const email = $('#email-input')[0].value;
    console.log(email)
    if(validEmail(email) != true){
        console.log('invalid email')
        $('#email-input').addClass('error')
    }
    if ($('.error').length == 0) {
        this.classList.add('disabled');
        loader.fadeIn();
        window.setTimeout(() => {
            loader.fadeOut();
            $('.confirm-booking').css('opacity', '0');
            setTimeout(() => {
                $('.done-msg').addClass('visible');
                $('input').addClass('disabled');
                $('select').addClass('disabled');
            }, 500)
        }, 2000);
    }
}
function validEmail(email) {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
}