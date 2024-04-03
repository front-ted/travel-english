document.addEventListener('dragstart', function (event) {
  if (event.target.classList.contains('mercado-item')) {
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

  if (dropTarget.classList.contains('espaco-mercado')) {
    if (!dropTarget.innerHTML) {
      dropTarget.appendChild(draggedElement);
    } else {

      dropTarget.appendChild(draggedElement);

    }
  }
});


$(document).ready(function () {
  $(".mercado-item").on("dragstart", function (event) {
    $(this).addClass('dragging');
    event.originalEvent.dataTransfer.setData("text/plain", $(this).data('resp') + '-' + $(this).text());
  });

  $(".mercado-item").on("dragend", function (event) {
    $(this).removeClass('dragging');
  });

  $(".espaco-mercado").on("dragover", function (event) {
    event.preventDefault();
  });


  $(".espaco-mercado").on("drop", function (event) {
    event.preventDefault();
    var parteProdutoData = event.originalEvent.dataTransfer.getData("text/plain").split('-');
    var parteProduto = parteProdutoData[0].trim();
    var espacoMercado = $(this).data('resp').trim();

    if (parteProduto === espacoMercado) {
      $(this).removeClass('bg-errado');
      $("#audio-acerto")[0].play();

    } else {
      $(this).addClass('bg-errado');
      $(".mercado-item").removeClass('dragging');
      $("#audio-errado")[0].play();
      setTimeout(() => {
        $(this).removeClass('bg-errado');
      }, 1600);
    }
  });

  $('.btn-iniciar').click(function (e) {
    e.preventDefault();

    $('#tela1').hide();
    $('#tela2').show();

  });

});