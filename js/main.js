$('document').ready(function(){

//* hover effects *//
$('#project-numbers').hover(
  function () {
  $('header').addClass('hide');
},
  function () {
  $('header').removeClass('hide');
});

  $('#one').hover(
    function () {
    $('#ICO').addClass('show');
    $('#ICO-pImage').removeClass('hide');
    },
    function () {
    $('#ICO').removeClass('show');
    $('#ICO-pImage').addClass('hide');
  });

  $('#two').hover(
    function () {
    $('#Atom').addClass('show');
    $('#Atom-pImage').removeClass('hide');
  },
    function () {
    $('#Atom').removeClass('show');
    $('#Atom-pImage').addClass('hide');
  });

  $('#three').hover(
    function () {
    $('#Bloc').addClass('show');
    $('#Bloc-pImage').removeClass('hide');
  },
    function () {
    $('#Bloc').removeClass('show');
    $('#Bloc-pImage').addClass('hide');
  });

  $('#four').hover(
    function () {
    $('#BS').addClass('show');
    $('#BS-pImage').removeClass('hide');
  },
    function () {
    $('#BS').removeClass('show');
    $('#BS-pImage').addClass('hide');
  });

  $('#five').hover(
    function () {
    $('#MIT').addClass('show');
    $('#MIT-pImage').removeClass('hide');
  },
    function () {
    $('#MIT').removeClass('show');
    $('#MIT-pImage').addClass('hide');
  });

  $('#six').hover(
    function () {
    $('#Diesel').addClass('show');
    $('#Diesel-pImage').removeClass('hide');
  },
    function () {
    $('#Diesel').removeClass('show');
    $('#Diesel-pImage').addClass('hide');
  });

  $('#seven').hover(
    function () {
    $('#ICOP').addClass('show');
    $('#ICOP-pImage').removeClass('hide');
  },
    function () {
    $('#ICOP').removeClass('show');
    $('#ICOP-pImage').addClass('hide');
  });

  $('#eight').hover(
    function () {
    $('#Noat').addClass('show');
    $('#Noat-pImage').removeClass('hide');
  },
    function () {
    $('#Noat').removeClass('show');
    $('#Noat-pImage').addClass('hide');
  });

  $('#nine').hover(
    function () {
    $('#Chiara').addClass('show');
    $('#Chiara-pImage').removeClass('hide');
  },
    function () {
    $('#Chiara').removeClass('show');
    $('#Chiara-pImage').addClass('hide');
  });

//* click *//
$('#one').click(
  function () {
  $('#ICO').addClass('show');
  $('#ICO-pImage').removeClass('hide');
},
  function () {
  $('#ICO').removeClass('show');
  $('#ICO-pImage').addClass('hide');
});
//* Fade Out *//

//* Fade Out *//

$(window).scroll(function(){
    $(".opener").css("opacity", 1 - $(window).scrollTop() / 400);
  });



});
