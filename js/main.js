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
  },
    function () {
    $('#ICO').removeClass('show');
  });

  $('#two').hover(
    function () {
    $('#Atom').addClass('show');
  },
    function () {
    $('#Atom').removeClass('show');
  });

  $('#three').hover(
    function () {
    $('#Bloc').addClass('show');
  },
    function () {
    $('#Bloc').removeClass('show');
  });

  $('#four').hover(
    function () {
    $('#BS').addClass('show');
  },
    function () {
    $('#BS').removeClass('show');
  });

  $('#five').hover(
    function () {
    $('#MIT').addClass('show');
  },
    function () {
    $('#MIT').removeClass('show');
  });

//* click *//
$('#one').click(
  function () {
  $('#ICO').addClass('show');
},
  function () {
  $('#ICO').removeClass('show');
});

});
