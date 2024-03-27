document.addEventListener('dragstart', function (event) {
  if (event.target.classList.contains('frase-encaixa')) {
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

  if (dropTarget.classList.contains('espaco-da-frase')) {
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
  $(".frase-encaixa").on("dragstart", function (event) {
    $(this).addClass('dragging');
    event.originalEvent.dataTransfer.setData("text/plain", $(this).data('resp') + '-' + $(this).text());
  });

  $(".frase-encaixa").on("dragend", function (event) {
    $(this).removeClass('dragging');
  });

  $(".espaco-da-frase").on("dragover", function (event) {
    event.preventDefault();
  });

  

  $(".espaco-da-frase").on("drop", function (event) {
    event.preventDefault();
    var partePaisData = event.originalEvent.dataTransfer.getData("text/plain").split('-');
    var partePais = partePaisData[0].trim();
    var espacoPais = $(this).data('resp').trim();
   

    if (partePais === espacoPais) {
      $(this).removeClass('bg-danger');
      $(this).addClass('bg-success');
      $("#audio-acerto")[0].play();
  
    } else {
      $(this).addClass('bg-danger');
      $(".frase-encaixa").removeClass('dragging');
      $("#audio-errado")[0].play();

    }
  });

  

});