var erro = new Audio("oda/ingles-viagens-U6-smart-health-tips-for-travelers-main/assets/audio/erro.mp3");
var acerto = new Audio("oda/ingles-viagens-U6-smart-health-tips-for-travelers-main/assets/audio/acerto.mp3");
var botaoClicado = false;
var botaoRespClicado = false;


$(document).ready(function () {

    $(".resp, .item").click(function () {
        $(this).toggleClass("selecionado");

        if ($(".selecionado").length == 2) {
            var resp1 = $(".selecionado")[0].dataset.resp;
            var resp2 = $(".selecionado")[1].dataset.resp;


            if ($(".selecionado")[0].dataset.resp == $(".selecionado")[1].dataset.resp) {
                $(".selecionado .txtacao").text($(".selecionado")[0].dataset.resp)
            }

            if (resp1 == resp2) {
                $(".selecionado").prop("disabled", true).addClass("acertou");
                $(".selecionado").removeClass("selecionado");

                var question = getQuestionById(resp1);

                if (question) {
                    feedbackPositivo();
                    acerto.play();
                }


            } else {
                $(".selecionado").removeClass("selecionado");

                var question1 = getQuestionById(resp1);
                var question2 = getQuestionById(resp2);

                if (question1 && question2) {
                    feedbackNegativo();
                    erro.play();
                }
            }
        }

        function feedbackNegativo() {
            $("#feedback_errado_modal .modal-body p").text(question1.feedbacks.errado + " ");
            $("#feedback_errado_modal").modal("show");
        }

        function feedbackPositivo() {
            $("#feedback_certo_modal .modal-body p").text(question.feedbacks.certo);
            $("#feedback_certo_modal").modal("show");
        }
    });

    var questions = [{
            id: "1",
            feedbacks: {
                certo: "Congratulations, you got it right!",
                errado: "Oops, incorrect answer! Please try again."
            }
        },
        {
            id: "2",
            feedbacks: {
                certo: "Congratulations, you got it right!",
                errado: "Oops, incorrect answer! Please try again."
            }
        },
        {
            id: "3",
            feedbacks: {
                certo: "Congratulations, you got it right!",
                errado: "Oops, incorrect answer! Please try again."
            }
        },
        {
            id: "4",
            feedbacks: {
                certo: "Congratulations, you got it right!",
                errado: "Oops, incorrect answer! Please try again."
            }
        },
        {
            id: "5",
            feedbacks: {
                certo: "Congratulations, you got it right!",
                errado: "Oops, incorrect answer! Please try again."
            }
        },
        {
            id: "5",
            feedbacks: {
                certo: "Congratulations, you got it right!",
                errado: "Oops, incorrect answer! Please try again."
            }
        },
        {
            id: "6",
            feedbacks: {
                certo: "Congratulations, you got it right!",
                errado: "Oops, incorrect answer! Please try again."
            }
        },
        {
            id: "7",
            feedbacks: {
                certo: "Congratulations, you got it right!",
                errado: "Oops, incorrect answer! Please try again."
            }
        },
        {
            id: "8",
            feedbacks: {
                certo: "Congratulations, you got it right!",
                errado: "Oops, incorrect answer! Please try again."
            }
        },
        {
            id: "9",
            feedbacks: {
                certo: "Congratulations, you got it right!",
                errado: "Oops, incorrect answer! Please try again."
            }
        },
        {
            id: "10",
            feedbacks: {
                certo: "Congratulations, you got it right!",
                errado: "Oops, incorrect answer! Please try again."
            }
        },

    ];

    function getQuestionById(id) {
        return questions.find(question => question.id === id);
    }

    $('.btn.item').click(function () {
        botaoClicado = $(this).attr("data-resp");
        verificarEstadoBotoes();
    });

    $('.btn.resp').click(function () {
        botaoRespClicado = $(this).attr("data-resp");
        verificarEstadoBotoes();
    });


    function verificarEstadoBotoes() {
        console.log(botaoClicado + "," + botaoRespClicado)
        if (botaoClicado !== false && botaoRespClicado !== false) {
            if (botaoClicado === botaoRespClicado) {
                $('#linha' + botaoClicado).removeClass('d-none');
            }
            botaoClicado = false;
            botaoRespClicado = false;
        }

    }

});