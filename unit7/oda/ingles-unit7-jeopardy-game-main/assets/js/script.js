window.addEventListener('load', () => {
    $('.question').hide();
    $('.answer').hide();
    $('.tela-final').hide();

    $('.jeopardy-btn').click(function () {
        $(`.${$(this)[0].dataset.question}`).fadeIn();
        $(this).addClass('disabled');
    });

    $('.reveal-answer').click(function () {
        let parentClass = $(this).parents('.question')[0].className;
        $(`.answer-${parentClass.slice(-2)}`).fadeIn()
        setTimeout(() => {
            $(this).parents('.question').fadeOut()
        }, 500);
    });
    $('.try-again').click(function () {
        jeopardyPoints = 0;
        playerName = undefined;
        $('.tela-0').fadeIn();
        $('.jeopardy-btn.disabled').removeClass('disabled');
        $('.jeopardy-table .tela-final').fadeOut();
        $('.playerName').text(playerName)
        $('.playerPoints').text(jeopardyPoints)
    });
    $('.continue').click(function () {
        if ($(this)[0].dataset.points != undefined) {
            intPoints = parseInt(jeopardyPoints)
            newPoints = parseInt($(this)[0].dataset.points)
            jeopardyPoints = intPoints + newPoints;
        }
        $('.question').fadeOut();
        $('.answer').fadeOut();
        if ($('.jeopardy-btn:not(.disabled)').length == 0) {
            let rankPoints1 = parseInt(localStorage.getItem('jeopardy-rank-points-1'));
            let rankPoints2 = parseInt(localStorage.getItem('jeopardy-rank-points-2'));
            let rankPoints3 = parseInt(localStorage.getItem('jeopardy-rank-points-3'));
            $('.tela-final').fadeIn();
            if (jeopardyPoints > rankPoints1) {
                localStorage.setItem('jeopardy-rank-name-3', localStorage.getItem('jeopardy-rank-name-2'));
                localStorage.setItem('jeopardy-rank-points-3', localStorage.getItem('jeopardy-rank-points-2'));
                localStorage.setItem('jeopardy-rank-name-2', localStorage.getItem('jeopardy-rank-name-1'));
                localStorage.setItem('jeopardy-rank-points-2', localStorage.getItem('jeopardy-rank-points-1'));
                localStorage.setItem('jeopardy-rank-name-1', playerName);
                localStorage.setItem('jeopardy-rank-points-1', jeopardyPoints);
                updateRank();
                return;
            }
            if (jeopardyPoints > rankPoints2) {
                localStorage.setItem('jeopardy-rank-name-3', localStorage.getItem('jeopardy-rank-name-2'));
                localStorage.setItem('jeopardy-rank-points-3', localStorage.getItem('jeopardy-rank-points-2'));
                localStorage.setItem('jeopardy-rank-name-2', playerName);
                localStorage.setItem('jeopardy-rank-points-2', jeopardyPoints);
                updateRank();
                return;
            }
            if (jeopardyPoints > rankPoints3) {
                localStorage.setItem('jeopardy-rank-name-3', playerName);
                localStorage.setItem('jeopardy-rank-points-3', jeopardyPoints);
                updateRank();
                return;
            }
        }
        updatePoints();
    })
    if (localStorage.getItem('jeopardy-game') != 'true') { $('#ranking').hide() } else {
        $('#rank-1').text(localStorage.getItem('jeopardy-rank-name-1') + ' - ' + localStorage.getItem('jeopardy-rank-points-1'));
        $('#rank-2').text(localStorage.getItem('jeopardy-rank-name-2') + ' - ' + localStorage.getItem('jeopardy-rank-points-2'));
        $('#rank-3').text(localStorage.getItem('jeopardy-rank-name-3') + ' - ' + localStorage.getItem('jeopardy-rank-points-3'));
    }

})
let jeopardyPoints = 0;
let playerName;
$('.jeopardy-table .start-game').click(startGame);


$('.jeopardy-table input').on('keyup', function () {
    if ($(this)[0].value.length >= 2) {
        $('.start-game').removeClass('disabled');
    } else {
        $('.start-game').addClass('disabled');
    }
})

function startGame() {
    if (localStorage.getItem('jeopardy-game') != 'true') {
        localStorage.setItem('jeopardy-game', 'true')
        localStorage.setItem('jeopardy-rank-name-1', 'Jogador')
        localStorage.setItem('jeopardy-rank-name-2', 'Jogador')
        localStorage.setItem('jeopardy-rank-name-3', 'Jogador')
        localStorage.setItem('jeopardy-rank-points-1', 0)
        localStorage.setItem('jeopardy-rank-points-2', 0)
        localStorage.setItem('jeopardy-rank-points-3', 0)
    } else {
        $('#ranking').fadeIn()
        updateRank();
    }
    $('.tela-0').fadeOut();
    playerName = $('input')[0].value;
    $('.playerName').text(playerName)
    $('.playerPoints').text(jeopardyPoints)
};

function updatePoints() {
    $('.playerPoints').text(jeopardyPoints)
}

function updateRank() {
    $('#rank-1').text(localStorage.getItem('jeopardy-rank-name-1') + ' - ' + localStorage.getItem('jeopardy-rank-points-1'));
    $('#rank-2').text(localStorage.getItem('jeopardy-rank-name-2') + ' - ' + localStorage.getItem('jeopardy-rank-points-2'));
    $('#rank-3').text(localStorage.getItem('jeopardy-rank-name-3') + ' - ' + localStorage.getItem('jeopardy-rank-points-3'));
}