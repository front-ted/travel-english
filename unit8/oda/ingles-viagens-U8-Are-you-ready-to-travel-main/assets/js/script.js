$(document).ready(function () {
  const perguntas = [
    "Which of these are good recommendations for international tourists? Dress appropriately. Learn a little bit about the language. Criticize the food.",
    "Give directions to go from Senac to the nearest supermarket.",
    "Cite 3 different types of accommodation. ",
    "Where is sushi from?",
    "How do you spell your last name?",

    "What are the days of the week? ",
    "What are the months of the year? ",
    "What can you buy at a clothing store?",
    "What can you find in the beverages aisle in the supermarket? ",
    "Give 5 examples of fruits and vegetables.",

    "Make a list of 15 items to buy at a supermarket.",
    "Give two health tips for travelers.",
    "What are the symptoms of a cold? ",
    "Name 5 parts of the body. ",
    "Cite 5 different means of transportation.",

    "What meals can you have at a restaurant? ",
    "What can you buy at an electronics store? ",
    "What cultural customs do you associate with the United States?",
    "Cite 3 customs and traditions of Brazil. ",
    "Which of the following are common problems you can have at a hotel? The bathroom is dirty. The staff is very nice. The internet isn’t working. ",


    "Share ideas of podcasts and Youtube channels for travelers. ",
    "What time do you usually: Have breakfast?  Have lunch? Have dinner? ",
    "Which of the following are respectful practices? Photographing people without their permission. Waiting for your turn. Learning some phrases in the local language",
    "What are the parts of a meal? "
  ];

  const respostas = [
    "Dress appropriately. Learn a little bit about the language.",
    "Answers will vary.",
    "Hotel, hostel, apartment, inn, bed and breakfast, camping, etc.",
    "Sushi is from Japan.",
    "Answers will vary.",

    "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday.",
    "January, February, March, April, May, June, July, August, September, October, November and December. ",
    "Sweaters, pants, jackets, skirts, t-shirts, socks, underwear, etc. ",
    "Soda, beer, juice, water, iced tea, lemonade, energy drink, etc. ",
    "Examples: Fruits: Banana, apple, watermelon, mango, strawberry, raspberry, kiwi, etc. ",

    "Answers will vary. ",
    "Examples: Eat fruits and vegetables, drink water, rest, talk to a doctor, wash your hands, avoid street food, protect your skin, etc. ",
    "Headache, runny nose, fever, etc. ",
    "Examples: Hand, fingers, toes, head, legs, arms, wrist, knee, elbow, etc. ",
    "Examples: Bus, car, taxi, train, subway, motorcycle, bycicle, scooter, segway, etc. ",

    "Breakfast, brunch, lunch, dinner and snack. ",
    "Examples: Smartphones, tablets, laptops, headphones, chargers, cameras, etc. ",
    "Answers will vary.",
    "Answers will vary.",
    "The bathroom is dirty. The internet isn1t working. ",
    "Examples: Wolter’s World, Endless Adventure, Indigo Traveller, etc. ",

    "Example: I usually have breakfast at 8 am.",
    "Answer: Waiting for your turn. Learning some phrases in the local language. ",
    "Appetizer, main dish/entrée and dessert. "
  ];

  let indicePerguntaAtual = 0;
  let jogadorAtual = 1; // Começa com o jogador 1

  $('#form-tela1').submit(function (event) {
    event.preventDefault();
    $('#tela1').hide();
    $('#tela2').show();
  });

  $('#btn-continuar').click(function () {
    $('#tela2').hide();
    $('#tela3').show();
    exibirPergunta();
  });

  $('#btn-revelar').click(function () {
    $('#tela3').hide();
    $('#tela4').show();
    $('#placar-jogador1-2').text($('#placar-jogador1').text());
    $('#placar-jogador2-2').text($('#placar-jogador2').text());
    $('#pergunta-2').text(`Pergunta: ${perguntas[indicePerguntaAtual]}`);
    $('#resposta').text(`Resposta: ${respostas[indicePerguntaAtual]}`);
  });

  $('#btn-certo').click(function () {
    $('#tela4').hide();
    $('#tela3').show();
    let placarJogador1 = parseInt($('#placar-jogador1').text());
    let placarJogador2 = parseInt($('#placar-jogador2').text());
    $("#audio-acerto")[0].play();

    if (jogadorAtual === 1) {
      $('#placar-jogador1').text(placarJogador1 + 1);
    } else {
      $('#placar-jogador2').text(placarJogador2 + 1);
    }

    proximaPergunta();
  });

  $('#btn-errado').click(function () {
    $("#audio-errado")[0].play();
    $('#tela4').hide();
    $('#tela3').show();

    proximaPergunta();
  });

  $(document).on('click', '#btn-fechar-modal', function () {
    $('#modalFimJogo').modal('hide');
    reiniciarJogo();
  });

  function exibirPergunta() {
    $('#pergunta').text(`Pergunta: ${perguntas[indicePerguntaAtual]}`);
  }

  function proximaPergunta() {
    jogadorAtual = jogadorAtual === 1 ? 2 : 1;

    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
      exibirPergunta();
    } else {
      const placarJogador1 = parseInt($('#placar-jogador1').text());
      const placarJogador2 = parseInt($('#placar-jogador2').text());
      let vencedor;
      if (placarJogador1 > placarJogador2) {
        vencedor = $('#jogador1').val();
      } else if (placarJogador1 < placarJogador2) {
        vencedor = $('#jogador2').val();
      } else {
        vencedor = "Empate";
      }
      $('#corpoModal').html(`<h3 class="titulo-resultado">O vencedor é: ${vencedor}</h3><div class="body-modal-resultado"<h4>Placar Final:</h4><div class="row"><div class="col jogadores">${$('#jogador1').val()}: ${placarJogador1}</div><div class="col jogadores">${$('#jogador2').val()}: ${placarJogador2}</div></div></div><button id="btn-fechar-modal" class="btn btn-lg btn-primary som-clique w-100 .fechar-modal">Jogar novamente</button>`);
      $('#modalFimJogo').modal('show');
    }
  }

  function somClique() {
    $("body").on("click", '.som-clique', function () {
      var audio = new Audio('oda/ingles-viagens-U8-Are-you-ready-to-travel-main/assets/audio/clique.mp3');
      audio.play();
    });
  }

  $('#form-tela1').submit(function (e) {
    e.preventDefault();


    var jogador1 = $('#jogador1').val();
    var jogador2 = $('#jogador2').val();


    $('.nome-jogador-1').text(jogador1);
    $('.nome-jogador-2').text(jogador2);
  });

  function reiniciarJogo() {

    $('.nome-jogador-1').text('');
    $('.nome-jogador-2').text('');

    $('#placar-jogador1').text('0');
    $('#placar-jogador2').text('0');
    indicePerguntaAtual = 0;
    jogadorAtual = 1;

    $('#tela1').show();
    $('#tela2').hide();
    $('#tela3').hide();
    $('#tela4').hide();
  }

  somClique();
});