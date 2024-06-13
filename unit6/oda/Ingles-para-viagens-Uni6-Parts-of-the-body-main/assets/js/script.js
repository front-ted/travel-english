
document.addEventListener('dragstart', function (event) {
  if (event.target.classList.contains('parte-do-corpo')) {
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

  if (dropTarget.classList.contains('espaco-do-corpo')) {
    if (!dropTarget.innerHTML) {
      dropTarget.appendChild(draggedElement);
    } else {
      // Swap elements
      const existingElement = dropTarget.firstElementChild;
      dropTarget.appendChild(draggedElement);
      dropTarget.parentNode.appendChild(existingElement);
    }
  }
});



$(document).ready(function () {
  $(".parte-do-corpo").on("dragstart", function (event) {
    $(this).addClass('dragging');
    event.originalEvent.dataTransfer.setData("text/plain", $(this).data('resp') + '-' + $(this).text());
  });

  $(".parte-do-corpo").on("dragend", function (event) {
    $(this).removeClass('dragging');
  });

  $(".espaco-do-corpo").on("dragover", function (event) {
    event.preventDefault();
  });

  $(".espaco-do-corpo").on("drop", function (event) {
    event.preventDefault();
    var parteCorpoData = event.originalEvent.dataTransfer.getData("text/plain").split('-');
    var parteCorpo = parteCorpoData[0];
    var parteCorpoTexto = parteCorpoData[1];
    var espacoCorpo = $(this).data('resp');

    if (parteCorpo === espacoCorpo) {
      $(this).removeClass('bg-danger');
      $(this).addClass('bg-success');
      $("#audio-acerto")[0].play();

    } else {
      $(this).addClass('bg-danger');
      $(".parte-do-corpo").removeClass('dragging');
      $("#audio-errado")[0].play();
    }


  });

  $(".parte-do-corpo").on("click", function (event) {
    
    // checa qual container esta vazio e insere a opcao nele:
    console.log($(this))
    let opcao = $(this);
    let opcoesContainer = $('.opcoes')
    let espacos = $('.espaco-do-corpo');
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
      $(this).parent().removeClass('bg-danger');
      $(this).parent().addClass('bg-success');
      $("#audio-acerto")[0].play();
    } else {
      $(this).parent().addClass('bg-danger');
      $(".nome-pais").removeClass('dragging');
      $("#audio-errado")[0].play();
      setTimeout(() => {
        opcoesContainer.append(opcao[0]);
        opcao[0].classList.remove('bg-danger');
      }, 1500);
    }
  });
});