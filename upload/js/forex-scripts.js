$('.list-group-item-action').click(function(e) {
    $('.list-group a').removeClass('active');
    $('a.' + $(this).data('class')).addClass('active');
});
    window.addEventListener("scroll", function() {
        onScrollDiv()
    });
    window.addEventListener("DOMContentLoaded", function() {
        onScrollDiv()
    });

    function onScrollDiv() {
        var images = document.querySelectorAll('.lazyload');
        for (var i = 0, nb = images.length; i < nb; i++) {
            var img = images[i]
            var rect = img.getBoundingClientRect();
            var isVisible = ((rect.top - window.innerHeight) < 500 && (rect.bottom) > -50) ? true : false;

            if (isVisible) {
                if (!img.src) {
                    img.src = img.dataset.src;
                }
            }
        }
    }
    
    $('.popularblogslider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // $(document).ready(function() {
    //     // console.log( "document ready!" );
    //     var $sticky = $('.sticky');
    //     var $stickyrStopper = $('.sticky-stopper');
    //     if (!!$sticky.offset()) { // make sure ".sticky" element exists

    //         var generalSidebarHeight = $sticky.innerHeight();
    //         var stickyTop = $sticky.offset().top;
    //         var stickOffset = 0;
    //         var stickyStopperPosition = $stickyrStopper.offset().top;
    //         var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
    //         var diff = stopPoint + stickOffset;

    //         $(window).scroll(function() { // scroll event
    //             var windowTop = $(window).scrollTop(); // returns number

    //             if (stopPoint < windowTop) {
    //                 $sticky.css({
    //                     position: 'fixed',
    //                     top: 0
    //                 });
    //             } else if (stickyTop < windowTop + stickOffset) {
    //                 $sticky.css({
    //                     position: 'fixed',
    //                     top: stickOffset
    //                 });
    //             } else {
    //                 $sticky.css({
    //                     position: 'absolute',
    //                     top: 'initial'
    //                 });
    //             }
    //         });

    //     }
    // });
    // $(document).ready(function() {
    //     $('.blogmobile_menu_toggle').click(function() {
    //         $('.blog_sidbar').toggleClass('active');
    //     })
    // })

    $('.blog_subcategory_slider').slick({
        centerMode: true,
        slidesToShow: 1,
        dots: false,
        arrows: false,
        swipe: true,
        //infinite: true,
        swipeToSlide: true,
        //adaptiveHeight: true,
        draggable: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.recentblog-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-angle-right"></i></div>',
        prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-angle-left"></i></div>',
        draggable: true,
        responsive: [{
                breakpoint: 800,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

/* detail_popularblogslider */
$('.detail_popularblogslider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});