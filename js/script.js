$(window).on("load", function(){

  $(".loader .inner").fadeOut(500, function(){
     $(".loader").fadeOut(750);
  });
})
$(document).ready(function() {
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false,
  });

  var typed = new Typed(".typed", {
    strings: ["Web Developer.", "Programmar.", "Student."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });


      $('.owl-carousel').owlCarousel({
        loop: true,
        items:4,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 4
          }
        }
      });





    $('.chart').easyPieChart({
      easing:'easeInOut',
      barColor:'#fff',
      trackColor:false,
      scaleColor:false,
      lineWidth:4,
      size:152,
      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      }
    });

   $(".counter").each(function(){
     var element =$(this);
     var endVal =parseInt(element.text());

     element.countup(endval);
   });


});
