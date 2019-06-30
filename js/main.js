
$(function () {
    $('[data-toggle="popover"]').popover()
  })

  $('.btn-inscripcion').click(function(){
    Swal.fire({
      title: 'REGISTRO',
      background: '#18293A',
      html: '<div class="row justify-content-around" id="popInscr">'+
              '<button class="btn col-md-5 btn-gradient btn-mxhacks">Registro Conferencias</button>'+
              '<button class="btn col-md-5 btn-gradient btn-it-show">¡Aplica al Hackaton!</button>'+
            '</div>',
      showConfirmButton: true,
    })
  });