$(document).ready(function () {

    chatUm();

    chatDois();

    controleDosAudios();
});

function chatUm() {
    $('#continuaChatUm').click(function (e) {
        setTimeout(() => {
            $('#continuaChatUm').addClass("d-none");
            $('#digitandoUm').removeClass("d-none");
        }, 1000);
        setTimeout(() => {
            $('#digitandoUm').addClass("d-none");
            $('#somMensagem')[0].play();
            $('#msgChat2').removeClass("d-none");
            $('#continuaChatDois').removeClass("d-none");
        }, 2000);
    });

    $('#continuaChatDois').click(function (e) {
        setTimeout(() => {
            $('#continuaChatDois').addClass("d-none");
            $('#digitandoDois').removeClass("d-none");
        }, 1000);
        setTimeout(() => {
            $('#digitandoDois').addClass("d-none");
            $('#somMensagem')[0].play();
            $('#msgChat3').removeClass("d-none");
            $('#continuaChatQuatro').removeClass("d-none");
        }, 2000);
    });

    $('#continuaChatTres').click(function (e) {
        setTimeout(() => {
            $('#continuaChatTres').addClass("d-none");
            $('#digitandoTres').removeClass("d-none");
        }, 1000);
        setTimeout(() => {
            $('#digitandoTres').addClass("d-none");
            $('#somMensagem')[0].play();
            $('#msgChat4').removeClass("d-none");
            $('#continuaChatQuatro').removeClass("d-none");
        }, 2000);
    });

    $('#continuaChatQuatro').click(function (e) {
        setTimeout(() => {
            $('#continuaChatQuatro').addClass("d-none");
            $('#digitandoQuatro').removeClass("d-none");
        }, 1000);
        setTimeout(() => {
            $('#digitandoQuatro').addClass("d-none");
            $('#somMensagem')[0].play();
            $('#msgChat5').removeClass("d-none");
            $('#continuaChatCinco').removeClass("d-none");
        }, 2000);
    });

    $('#continuaChatCinco').click(function (e) {
        setTimeout(() => {
            $('#continuaChatCinco').addClass("d-none");
            $('#digitandoCinco').removeClass("d-none");
        }, 1000);
        setTimeout(() => {
            $('#digitandoCinco').addClass("d-none");
            $('#somMensagem')[0].play();
            $('#msgChat6').removeClass("d-none");
            $('#continuaChatSeis').removeClass("d-none");
            setTimeout(() => {
                $('#digitandoSeis').removeClass("d-none");
            }, 2000);
            setTimeout(() => {
                $('#digitandoSeis').addClass("d-none");
                $('#somMensagem')[0].play();
                $('#msgChat7').removeClass("d-none");
            }, 3000);
        }, 2000);



    });
}



function chatDois() {

    $('#continuaChatOito').click(function (e) {
        setTimeout(() => {
            $('#continuaChatOito').addClass("d-none");
            $('#digitandoOito').removeClass("d-none");
        }, 1000);
        setTimeout(() => {
            $('#digitandoOito').addClass("d-none");
            $('#somMensagem')[0].play();
            $('#msgChat9').removeClass("d-none");
            $('#continuaChatNove').removeClass("d-none");
        }, 2000);
        console.log("passou no um");
    });

    $('#continuaChatNove').click(function (e) {
        setTimeout(() => {
            $('#continuaChatNove').addClass("d-none");
            $('#digitandoNove').removeClass("d-none");
        }, 1000);
        setTimeout(() => {
            $('#digitandoNove').addClass("d-none");
            $('#somMensagem')[0].play();
            $('#msgChat10').removeClass("d-none");
            $('#continuaChatDez').removeClass("d-none");
        }, 2000);
    });

    $('#continuaChatDez').click(function (e) {
        setTimeout(() => {
            $('#continuaChatDez').addClass("d-none");
            $('#digitandoDez').removeClass("d-none");
        }, 1000);
        setTimeout(() => {
            $('#digitandoDez').addClass("d-none");
            $('#somMensagem')[0].play();
            $('#msgChat11').removeClass("d-none");
            $('#continuaChatOnze').removeClass("d-none");
        }, 2000);
    });


    $('#continuaChatOnze').click(function (e) {
        setTimeout(() => {
            $('#continuaChatOnze').addClass("d-none");
            $('#digitandoOnze').removeClass("d-none");
        }, 1000);
        setTimeout(() => {
            $('#digitandoOnze').addClass("d-none");
            $('#somMensagem')[0].play();
            $('#msgChat12').removeClass("d-none");
            $('#continuaChatDoze').removeClass("d-none");
        }, 2000);
    });

    $('#continuaChatDoze').click(function (e) {
        setTimeout(() => {
            $('#continuaChatDoze').addClass("d-none");
            $('#digitandoDoze').removeClass("d-none");
        }, 1000);
        setTimeout(() => {
            $('#digitandoDoze').addClass("d-none");
            $('#somMensagem')[0].play();
            $('#msgChat13').removeClass("d-none");
            $('#continuaChatTreze').removeClass("d-none");
            setTimeout(() => {
                $('#digitandoTreze').removeClass("d-none");
            }, 2000);
            setTimeout(() => {
                $('#digitandoTreze').addClass("d-none");
                $('#somMensagem')[0].play();
                $('#msgChat14').removeClass("d-none");
            }, 3000);
        }, 2000);


    });
}



function controleDosAudios() {
    var currentAudio = null;

    function playAudio(audio) {
        if (currentAudio !== null && !currentAudio.paused) {
            pauseAudio(currentAudio);
        }
        audio.play();
        currentAudio = audio;
    }

    function pauseAudio(audio) {
        audio.pause();
    }

    $("#music1").click(function () {
        playAudio($("#musica1")[0]);
    });

    $("#music2").click(function () {
        playAudio($("#musica2")[0]);
    });

    $("#music3").click(function () {
        playAudio($("#musica3")[0]);
    });

    $("#music4").click(function () {
        playAudio($("#musica4")[0]);
    });

    $("#music5").click(function () {
        playAudio($("#musica5")[0]);
    });

    $("#music6").click(function () {
        playAudio($("#musica6")[0]);
    });

    $("#music7").click(function () {
        playAudio($("#musica7")[0]);
    });

    $("#music8").click(function () {
        playAudio($("#musica8")[0]);
    });

    $("#music9").click(function () {
        playAudio($("#musica9")[0]);
    });

    $("#music10").click(function () {
        playAudio($("#musica10")[0]);
    });

    $("#music11").click(function () {
        playAudio($("#musica11")[0]);
    });

    $("#music12").click(function () {
        playAudio($("#musica12")[0]);
    });

    $("#music13").click(function () {
        playAudio($("#musica13")[0]);
    });

    $("#music14").click(function () {
        playAudio($("#musica14")[0]);
    });
}