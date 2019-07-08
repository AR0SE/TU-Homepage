$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1700)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  1500);
