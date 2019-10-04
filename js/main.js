
$(function () {
    $('[data-toggle="popover"]').popover()
  })

  $('.btn-inscripcion').click(function(){
    Swal.fire({
      title: 'REGISTRO',
      background: '#18293A',
      html: '<div class="row justify-content-around" id="popInscr">'+
              '<a class="btn col-md-5 btn-gradient btn-mxhacks" target="_blank" href="https://www.eventbrite.com/e/unamxhacks-conferencias-conisoft-2019-tickets-64383992254">Registro ITShowroom</a>'+
              '<a class="btn col-md-5 btn-gradient btn-conisoft" target="_blank" href="http://conisoft.org/2019/">Registro CONISOFT</a>'+
              '<a class="btn col-md-5 btn-gradient btn-it-show mt-2" target="_blank" href="https://registro.mxhacks.io/login">¡Aplica al Hackaton!</a>'+
            '</div>',
      showConfirmButton: true,
    })
  });