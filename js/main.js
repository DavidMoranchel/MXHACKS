
$(function () {
    $('[data-toggle="popover"]').popover()
  })

  $('.btn-inscripcion').click(function(){
    Swal.fire({
      title: 'REGISTRO',
      background: '#18293A',
      html: '<div class="row justify-content-around" id="popInscr">'+
              '<button class="btn col-md-5 btn-gradient btn-mxhacks" href="https://www.eventbrite.com/e/unamxhacks-conferencias-conisoft-2019-tickets-64383992254">Registro Conferencias</button>'+
              '<button class="btn col-md-5 btn-gradient btn-it-show" href="https://registro.mxhacks.io/login">¡Aplica al Hackaton!</button>'+
            '</div>',
      showConfirmButton: true,
    })
  });