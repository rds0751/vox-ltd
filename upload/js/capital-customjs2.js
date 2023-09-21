/* Loading Function */
$(window).on('load', function () {
    show();
});

function show() {
    $('.preloader').hide();
    $('#pageTop').fadeIn();
};

$(document).ready(function () {
    /* Scroll to Top */
    $(".totop").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.totop').fadeIn();
        } else {
            $('.totop').fadeOut();
        }
    });
    $(".totop a").click(function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    //Accordian
    $(document).ready(function () {
        $('#accordion .card').click(function () {
            $('.card').removeClass("active");
            $(this).addClass("active");
        });
    });

    // Input label effect    
    $(".input_effect").val("");
    $(".input-effect input").focusout(function () {
        if ($(this).val() != "") {
            $(this).addClass("has-content");
        } else {
            $(this).removeClass("has-content");
        }
    });

    //Sticky parent
    $(".forextrandingtabs").stick_in_parent();
    $('.tab_menu_mobile_link').click(function () {
        $('.forextrandingtabs').toggleClass('show');
    });

    //MT4/MT5 Section On Home Page
    if($(window).width() < 992){
        $('#home_mt5').removeClass('active');
        $('#home_mt5').removeClass('show');
    }else{
        $('#home_mt5').addClass('active');
        $('#home_mt5').addClass('show');
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
        $('header').addClass("fixed-top");
    } else {
        $('header').removeClass("fixed-top");
    }
});

setTimeout(function () {
    $('body,.login_signup_sec,.login_signup_bg').css('min-height', $(window).outerHeight());
    //$('.body_section,.inner_body_section').css('min-height', $(window).outerHeight());
    //$('.body_section').css('padding-top', $('header').outerHeight());
    $('.contact_data_sec,.login_signup_sec').css('padding-top', $('header').outerHeight());
    //$('.body_section,.inner_body_section').css('padding-bottom', $('footer').outerHeight());
}, 50);

$(window).resize(function () {
    $('body,.login_signup_sec').css('min-height', $(window).outerHeight());
    //$('.body_section,.inner_body_section').css('min-height', $(window).outerHeight());
    //$('.body_section').css('padding-top', $('header').outerHeight());
    $('.contact_data_sec,.login_signup_sec').css('padding-top', $('header').outerHeight());
    //$('.body_section,.inner_body_section').css('padding-bottom', $('footer').outerHeight());
});

//$('.banner_view_sec').css('padding-top' , $('header').outerHeight());

// artist_slider
$('.banner_slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 0,
    lazyLoad: 'progressive',
    arrows: false,
    dots: false,
    draggable: false,
    prevArrow: '<div class="slick-nav prev-arrow">Prev</div>',
    nextArrow: '<div class="slick-nav next-arrow">Next</div>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true,
            }
        },
    ]
}).slickAnimation();

$('.slider-nav-thumbnails').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.banner_slider',
    dots: true,
    focusOnSelect: true
});
//remove active class from all thumbnail slides
$('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

//set active class to first thumbnail slides
$('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

// On before slide change match active thumbnail to current slide
$('.banner_slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
});

// Range_Slider
$('.range_trading_slider').owlCarousel({
    loop: true,
    items: 4,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    center: false,
    //animateIn: 'fadeIn',
    //animateOut: 'fadeOut',
    thumbs: false,
    thumbsPrerendered: false,
    navText: ['<i class="cptl-arrow-prev"></i>', '<i class="cptl-arrow-next"></i>'],
    responsive: {
        320: { items: 1 },
        480: { items: 1 },
        640: { items: 2 },
        768: { items: 2 },
        992: { items: 3 },
        1200: { items: 3 },
        1366: { items: 4 }
    }
});

// Range_Slider
$('.range_trading_slider_rtl').owlCarousel({
	rtl: true,
    loop: true,
    items: 4,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    center: false,
    //animateIn: 'fadeIn',
    //animateOut: 'fadeOut',
    thumbs: false,
    thumbsPrerendered: false,
    navText: ['<i class="cptl-arrow-prev"></i>', '<i class="cptl-arrow-next"></i>'],
    responsive: {
        320: { items: 1 },
        480: { items: 1 },
        640: { items: 2 },
        768: { items: 2 },
        992: { items: 3 },
        1200: { items: 3 },
        1366: { items: 4 }
    }
});

// Daily Forex News
$('.daily_forex_news_slider').owlCarousel({
    loop: true,
    items: 2,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    center: false,
    thumbs: false,
    thumbsPrerendered: false,
    navText: ['<i class="cptl-arrow-prev"></i>', '<i class="cptl-arrow-next"></i>'],
    responsive: {
        320: { items: 1 },
        480: { items: 1 },
        640: { items: 2 },
        768: { items: 3 },
        992: { items: 2 },
        1200: { items: 2 }
    }
});

// Daily Forex News RTL
$('.daily_forex_news_slider_rtl').owlCarousel({
	rtl: true,
    loop: true,
    items: 2,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    center: false,
    thumbs: false,
    thumbsPrerendered: false,
    navText: ['<i class="cptl-arrow-prev"></i>', '<i class="cptl-arrow-next"></i>'],
    responsive: {
        320: { items: 1 },
        480: { items: 1 },
        640: { items: 2 },
        768: { items: 3 },
        992: { items: 2 },
        1200: { items: 2 }
    }
});

// Key Features
$('.key_features_slider').owlCarousel({
    mouseDrag: false,
    loop: true,
    items: 1,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    center: false,
    thumbs: true,
    thumbsPrerendered: true,
});

// Benefits Trading Slider
$('.benefits_trading_slider').owlCarousel({
    loop: true,
    items: 3,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    center: false,
    //animateIn: 'fadeIn',
    //animateOut: 'fadeOut',
    thumbs: false,
    thumbsPrerendered: false,
    navText: ['<i class="cptl-arrow-prev"></i>', '<i class="cptl-arrow-next"></i>'],
    responsive: {
        320: { items: 1 },
        480: { items: 1 },
        640: { items: 1 },
        768: { items: 2 },
        992: { items: 2 },
        1200: { items: 2 },
        1366: { items: 3 }
    }
});

// Range_Slider
$('.keep_tuned_slider').owlCarousel({
    loop: true,
    items: 4,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    center: false,
    //animateIn: 'fadeIn',
    //animateOut: 'fadeOut',
    thumbs: false,
    thumbsPrerendered: false,
    navText: ['<i class="cptl-arrow-prev"></i>', '<i class="cptl-arrow-next"></i>'],
    responsive: {
        320: { items: 1 },
        480: { items: 1 },
        640: { items: 1 },
        768: { items: 2 },
        992: { items: 2 },
        1200: { items: 3 },
        1366: { items: 4 }
    }
});

// How Use Copytrade
$('.how_use_copytrade_slider').owlCarousel({
    mouseDrag: false,
    loop: true,
    items: 1,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    center: false,
    thumbs: true,
    thumbsPrerendered: true,
});

// How Use Copytrade
$('.how_use_copytrade_slider_RTL').owlCarousel({
	rtl: true,
    mouseDrag: false,
    loop: true,
    items: 1,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    center: false,
    thumbs: true,
    thumbsPrerendered: true,
});

// Vertically Slider
$('.prd_vertically_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    arrows: false,
    dots: false,
    centerMode: false,
});

// Educational Video Slider
$('.edu_video_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    //vertical: true,
    //verticalSwiping: true,
    autoplay: false,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='cptl-arrow-prev'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='cptl-arrow-next'></i></button>",
    dots: false,
    centerMode: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.language_drop').click(function () {
    $('body').addClass('overflow_hidden');
    $('.language_popup_sec').addClass('show');
});
$('.language_select_close').click(function () {
    $('body').removeClass('overflow_hidden');
    $('.language_popup_sec').removeClass('show');
});
$(document).on('keyup', function (evt) {
    if (evt.keyCode == 27) {
        $('body').removeClass('overflow_hidden');
        $('.language_popup_sec').removeClass('show');
    }
});

//Sidebar-menu js
$('.menu_icon,.close_btn').click(function (e) {
    $('body').toggleClass('overflow_hidden');
    $(".menu_icon").toggleClass("active");
});
$('.menu_icon,.close_btn').click(function (e) {
    e.preventDefault();
    $(".sidenav_menu").toggleClass("active");
});



//Table Side Menu
$('.table_left_menu').click(function () {
    $('.contract_specifications_left').toggleClass('show')
});



/* Admin menu */
$('.admin_menu_btn').click(function () {
    $('.admin_menu_sec').toggleClass('show');
});

//nav menu click hide
if ($(window).width() < 768) {
    $('.navbar-nav a').click(function () {
        $('.navbar-collapse').removeClass('show');
    });
}

// Scroll Down
$('.scroll_down').click(function () {
    var keyword = $(this).attr('ss');
    var scrollTo = $('#' + keyword);
    $('html, body').animate({
        scrollTop: scrollTo.offset().top
    }, 100);
});

$('#myForm a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
})

// BLOG PAGE JS 
//  LazyLoad Start
window.addEventListener("scroll", function() { onScrollDiv() });
window.addEventListener("DOMContentLoaded", function() { onScrollDiv() });
function onScrollDiv(){
    var images = document.querySelectorAll('.lazyload');
    for (var i=0, nb=images.length ; i <nb ; i++) {
        var img = images[i]
        var rect = img.getBoundingClientRect();
        var isVisible = ((rect.top - window.innerHeight) < 500 && (rect.bottom) > -50 ) ? true : false ;

        if (isVisible) {
            if (!img.src) {
                img.src = img.dataset.src;
            }
        }
    }
}
//  LazyLoad End

// Latest Blog Slider Start   
$('.latestblogslider').slick({
    infinite: true,
    slidesToShow: 3, 
    slidesToScroll: 1, 
    arrows: true, 
    dots: true, 
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-angle-right"></i></div>',
    prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-angle-left"></i></div>',
    responsive:[{
        breakpoint: 1200,
        settings:{
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1
        }
    },
    {
        breakpoint: 600,
        settings:{
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
// Latest Blog Slider END

// Leverage & margin double section JS
if($(window).width() < 992){
    $('.contract_specifications_table_sec .tab-pane').addClass('active');
    $('.table_click_view_link').click(function(){
        if(!$(this).next().hasClass('show')){
            $('.table_click_view_link').removeClass('active');
            $('.table_content_view').removeClass('show');
        }
        $(this).toggleClass('active');
        $(this).next().toggleClass('show');
    });
    // Deposit Withdrawals
    $('.deposit_withdrawals_header').click(function(){
        if(!$(this).next().hasClass('show')){
            $('.deposit_withdrawals_header').removeClass('rotate');
            $('.mobile_deposit_withdrawals_data').removeClass('show');
        }
        $(this).toggleClass('rotate');
        $(this).next().toggleClass('show');
    });
}

// Sticky Sidebar Start
// var topLimit = $('#sidebar').offset().top;
// $(window).scroll(function() {
//     if (topLimit <= $(window).scrollTop()) {
//         $('#sidebar').addClass('stickIt')
//     } else {
//         $('#sidebar').removeClass('stickIt')
//     }
// })
// Sticky Sidebar END

// Christmas top strip bar remove in web
$('.christmas_top_strip_close').click(function(){
    $('.spinandwin_contesttop').hide();
});

$(".subcategory_slider_sec .sidebar_top_categories").click(function(){
  $(".subcategory_slider_sec").toggleClass("fixed_bottom");  
});


//Contract Specification
//$(window).load(function() {
//$('.collapse').removeClass('show');
//const URL = $(location).attr('href');
//let GET_ARR = URL.split('#');
//let selectd = GET_ARR[1];
//$('#' + selectd).attr('aria-expanded','true').removeClass('collapsed');
//$('div' + '#' + selectd).addClass('show');
//});


//Youtube Video Iframe

  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var players = {};
  function onYouTubeIframeAPIReady() {
    $(".slick-youtube-slider iframe").each(function(id) {
        var $iframe = $(this).get(0);
        if ($iframe) { 
          players = new YT.Player($iframe, {
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });
        }
    });
  }

  function onPlayerReady() {
    console.log('Slider is ready for autoplay');
    $('.slick-youtube-slider').slick('slickPlay');
  }
  function onPlayerStateChange(obj) {
    // -1 (unstarted) | 0 (ended) | 1 (playing) | 2 (paused) |
    if (obj.data == 1) { 
      $('.slick-youtube-slider').slick('slickPause');
    } else if (obj.data == 2) { 
      $('.slick-youtube-slider').slick('slickPlay');
    }
  }

(function($) {
  jQuery(document).ready(function($) {
    $(".slick-youtube-slider").on("beforeChange", function(event, slick) {
      var currentSlide, player, command;
      currentSlide = $(slick.$slider).find(".slick-current");
      player = currentSlide.find("iframe").get(0);
      command = {
        "event": "command",
        "func": "pauseVideo"
      };
      if ( player != undefined ) {
        player.contentWindow.postMessage(JSON.stringify(command), "*");
      }
    });

    //start the slider
    $(".slick-youtube-slider").slick({
      cssEase: 'linear',
      infinite: true,
      arrows: true,
      dots: false,
      autoplay: false,
      pauseOnFocus: false,
      pauseOnHover: true,
      pauseOnDotsHover: false,
      autoplaySpeed: 5000,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='cptl-arrow-prev'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='cptl-arrow-next'></i></i></button>"
    });
  });
})(jQuery);

//YouTube VIdeo Iframe END

//Popup in video close
  $('.modal').on('hidden.bs.modal', function(){
    var $this = $(this).find('iframe'),
      tempSrc = $this.attr('src');
    $this.attr('src', "");
    $this.attr('src', tempSrc);
  });
  //Popup in video close


//AparatVIdeo Slider Iframe
$(".slick-youtube-slider-fa").slick({
      // fade: true,
      cssEase: 'linear',
      infinite: true,
      arrows: true,
      dots: false,
      autoplay: false,
      pauseOnFocus: false,
      pauseOnHover: true,
      pauseOnDotsHover: false,
      autoplaySpeed: 2000,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='cptl-arrow-prev'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='cptl-arrow-next'></i></i></button>"
    });

   $(".slick-youtube-slider-fa").click(function(){
    var $this = $(this).find('iframe');
    tempSrc = $this.attr('src');
    $this.attr('src', "");
    $this.attr('src', tempSrc);
});

//AparatVIdeo Slider Iframe END

// mobile view nav news page
$('.slider-nav').slick({
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  //  asNavFor: '.slider-for',
                    dots: false,
                    arrows: false,
                    focusOnSelect: true,
                    centerMode: true,
                    variableWidth: true
                   
                    });

//******mobile nav****

var news_award = location.pathname.split("/");
if(news_award['2'] == "awards") {
  $('.slider-nav').slick('slickGoTo', 1);
}
else if(news_award['2'] == "press-release") { 
  $('.slider-nav').slick('slickGoTo', 2);
}
else if(news_award['2'] == "promotions") { 
  $('.slider-nav').slick('slickGoTo', 3);
}
else if(news_award['2'] == "trading-schedule") { 
  $('.slider-nav').slick('slickGoTo', 4);
}
else if(news_award['2'] == "events") { 
    $('.slider-nav').slick('slickGoTo', 5);
  }
else{
  $('.slider-nav').slick('slickGoTo', 0);
}

//company news load more
   $(document).ready(function(){
                       $(".loadmore_news").slice(0, 6).show();
                       $(".load_morebtn").on("click", function(e){
                       e.preventDefault();
                       $(".loadmore_news:hidden").slice(0, 6).fadeIn("slow");
                       if($(".loadmore_news:hidden").length == 0){
                           $(".load_morebtn").fadeOut("slow");
                       }
                       });             
          });

// MC 50 deposit
$(document).ready(function () {
if($(window).width() < 992){
 $('#counters_award1').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplay: true,
     arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
}
 });

$('#verification_code').on('blur input', function(e) {
    e.preventDefault();
    return false;
});

$('#PinForm').submit(function(e) {
     e.stopPropagation();
     e.preventDefault();
});

$("document").ready(function() {
    setTimeout(function() {
        $("#tab2b").trigger('click');
    },10);
});


// Company News FA back btn

$( ".news-back-btn" ).click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    var lng_blg = location.pathname.split("/");
    if(lng_blg[1] == 'fa'){
        window.location.href = window.location.origin+"/fa/"+'news'+"/"+lng_blg[3]
    }
    else{
        window.location.href = window.location.origin+"/"+'news'+"/"+lng_blg[2]
    }
});

$(window).on('load', function () {
var lng_blg3 = location.pathname.split("/");
if(lng_blg3[2] == 'awards' ){
$('.navigation .navbar-nav li .nav_dropdown ul.language_drop_down_web li').eq(1).hide();}
if(lng_blg3[2] == 'press-release' ){
$('.navigation .navbar-nav li .nav_dropdown ul.language_drop_down_web li').eq(1).hide();}
if(lng_blg3[2] == 'events' ){
$('.navigation .navbar-nav li .nav_dropdown ul.language_drop_down_web li').eq(1).hide();}
});

$(".neventslider").slick({
   slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
     dots: false,
    arrows: true, 
prevArrow: '<button class="slide-arrow fa fa-angle-left"></button>',
 nextArrow: '<button class="slide-arrow fa fa-angle-right slick-next"></button>',
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
     dots: true,
    arrows: false, 
        }
      },
 {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
     dots: true,
    arrows: false, 
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         dots: true,
         arrows: false, 
        }
      }
    ]
  });