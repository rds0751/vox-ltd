// Scroll Down
$('.scroll_down').click(function(){
    var keyword = $(this).attr('ss');
    var scrollTo = $('#' + keyword);
    $('html, body').animate({
        scrollTop: scrollTo.offset().top
    }, 100);
});

$('.kenya_webinar_banner_sec').css('min-height', $(window).outerHeight());

 $('.testimonial_slider').slick({
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  fade: false,
  mobileFirst: true,
 prevArrow: '<button class="slide-arrow prev-arrow"></button>',
 nextArrow: '<button class="slide-arrow next-arrow slick-next"></button>',
  autoplay:true,
  autoplaySpeed:1500,
  responsive: [
  {
      breakpoint: 600,
      settings: {
        dots: true
      }
    }
  ]
});



$('#ActivityForm').on('blur input', function(e) {
    e.preventDefault();
    return false;
});
$('form').attr("autocomplete", "off");
$('.input_effect').attr("autocomplete", "off");


$('#PinForm').submit(function(e) {
     e.stopPropagation();
     e.preventDefault();
});