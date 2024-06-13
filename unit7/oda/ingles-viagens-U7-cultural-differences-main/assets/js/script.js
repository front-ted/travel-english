document.addEventListener('dragstart', function (event) {
  if (event.target.classList.contains('nome-pais')) {
    event.target.classList.add('dragging');
  }
});

document.addEventListener('dragend', function (event) {
  const draggingElement = document.querySelector('.dragging');
  if (draggingElement) {
    draggingElement.classList.remove('dragging');
  }
});

document.addEventListener('dragover', function (event) {
  event.preventDefault();
});

document.addEventListener('drop', function (event) {
  event.preventDefault();
  const draggedElement = document.querySelector('.dragging');
  const dropTarget = event.target;

  if (dropTarget.classList.contains('espaco-da-cultura')) {
    if (!dropTarget.innerHTML) {
      dropTarget.appendChild(draggedElement);
    } else {

      const existingElement = dropTarget.firstElementChild;
      dropTarget.appendChild(draggedElement);
      dropTarget.parentNode.appendChild(existingElement);
    }
  }
});


$(document).ready(function () {
  $(".nome-pais").on("dragstart", function (event) {
    $(this).addClass('dragging');
    event.originalEvent.dataTransfer.setData("text/plain", $(this).data('resp') + '-' + $(this).text());
  });

  $(".nome-pais").on("dragend", function (event) {
    $(this).removeClass('dragging');
  });

  $(".espaco-da-cultura").on("dragover", function (event) {
    event.preventDefault();
  });

  var feedbacks = {
    '1': "It is customary to remove shoes before entering someone's home, certain traditional accommodations, and some traditional restaurants. Slippers may be provided as an alternative.",
    '2': "Tipping is a common practice in the U.S. It is customary to tip service industry workers such as waitstaff, bartenders, and taxi drivers. The standard tip is around 15-20% of the total bill.",
    '3': "Traffic moves on the left side of the road in the UK. Pedestrians also follow a 'look right' rule when crossing the road.",
    '4': "Brazilians are generally warm and affectionate. It's common to greet friends and family with a kiss on the cheek.",
    '5': "Emiratis generally dress modestly, with women often wearing the abaya and men wearing the kandura. Modesty in dress is respected, especially in public places.",
    '6': "Dia de los Muertos is a significant cultural celebration honoring deceased loved ones. Families create altars with offerings, visit cemeteries, and participate in parades.",
    '7': "Canada embraces multiculturalism, and cultural diversity is celebrated. Many Canadians take pride in their multicultural identity, and various cultural festivals and events are held throughout the country.",
    '8': "The siesta, a short afternoon nap, is a longstanding tradition in Spain. Many businesses may close during the hottest part of the day, allowing people to rest before resuming activities.",
    '9': "Shabbat, the Jewish Sabbath, is observed from Friday evening to Saturday evening. It is a time for rest, prayer, and family gatherings. Many businesses and public services close during this period.",
    'A': "Islam plays a central role in Moroccan culture. Prayer times are observed, and during the holy month of Ramadan, fasting is practiced from sunrise to sunset."
  };

  $(".espaco-da-cultura").on("drop", function (event) {
    event.preventDefault();
    var partePaisData = event.originalEvent.dataTransfer.getData("text/plain").split('-');
    var partePais = partePaisData[0].trim();
    var espacoPais = $(this).data('resp').trim();
    var feedbackModalNegativo = $("#feedback-modal-negativo");

    if (partePais === espacoPais) {
      $(this).removeClass('bg-danger');
      $(this).addClass('bg-success');
      $("#audio-acerto")[0].play();
      fornecerFeedback(true, feedbacks[espacoPais]);
    } else {
      $(this).addClass('bg-danger');
      $(".nome-pais").removeClass('dragging');
      $("#audio-errado")[0].play();
      feedbackModalNegativo.modal("show");
    }
  });

  $(".nome-pais").on("click", function (event) {
    // event.preventDefault();
    const feedbackModalNegativo = $("#feedback-modal-negativo");
    // checa qual container esta vazio e insere a opcao nele:
    console.log($(this))
    let opcao = $(this);
    let opcoesContainer = $('.opcoes')
    let espacos = $('.espaco-da-cultura');
    let opcaoResp = opcao[0].dataset.resp;
    let containerResp;
    for (let i = 0; i < espacos.length; i++) {
      if (espacos[i].children.length == 0) {
        espacos[i].append(opcao[0]);
        containerResp = espacos[i].dataset.resp
        break;
      }
    }

    if (opcaoResp == containerResp) {
      $(this).removeClass('bg-danger');
      $(this).addClass('bg-success');
      $("#audio-acerto")[0].play();
      fornecerFeedback(true, feedbacks[containerResp.trim()]);
    } else {
      $(this).addClass('bg-danger');
      $(".nome-pais").removeClass('dragging');
      $("#audio-errado")[0].play();
      feedbackModalNegativo.modal("show");
      setTimeout(() => {
        opcoesContainer.append(opcao[0]);
        opcao[0].classList.remove('bg-danger');
      }, 1500);
    }
  });

  function fornecerFeedback(acertou, motivo) {
    if (acertou) {
      var feedbackModalPositivo = $("#feedback-modal-positivo");
      var feedbackTexto = feedbackModalPositivo.find(".modal-body");
      feedbackTexto.text("Congratulations! " + motivo);
      feedbackModalPositivo.modal("show");
    }
  }

});