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

    // Input label effect    
    $(".input_effect").val("");
    $(".input-effect input").focusout(function () {
        if ($(this).val() != "") {
            $(this).addClass("has-content");
        } else {
            $(this).removeClass("has-content");
        }
    });
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
    }, 2000);
});

$('#myForm a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});