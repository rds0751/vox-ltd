$(document).ready(function(){
setTimeout(function(){
// Currency Slider
$('.lp_title_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots:false,
    prevArrow:false,
    nextArrow:false,
    pauseOnHover: false,
    pauseOnFocus: false,
});
// Global Currency Slider
$('.global_currency_silder').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,
    prevArrow:false,
    nextArrow:false,
    responsive:[
        {
            breakpoint: 1200,
            settings:{ slidesToShow: 3}
        },
        {
            breakpoint: 992,
            settings:{ slidesToShow: 2}
        },
        {
            breakpoint: 768,
            settings:{ slidesToShow: 2}
        },
        {
            breakpoint: 576,
            settings:{ slidesToShow: 1}
        },
        {
            breakpoint: 480,
            settings:{ slidesToShow: 1}
        }
    ]
});
}, 100);

// Vertically Slider
$('.grand_prize_list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots:false,
    prevArrow:false,
    nextArrow:false,
    pauseOnHover: false,
    pauseOnFocus: false,
});
if($(window).width() > 991){
    // Prize Slider
    $('.prize_win_slider_block').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        dots:true,
        prevArrow:false,
        nextArrow:false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
}
//Grand Timeing
function makeTimer(){
//var endTime = new Date("9 June 2020 9:56:00 GMT+01:00");	
    var endTime = new Date('18 November 2021 23:59:00 GMT+03:00');			
    endTime = (Date.parse(endTime) / 1000);
    var now = new Date();
    now = (Date.parse(now) / 1000);
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }
    $("#days").html('' + days + "<span>:</span>");
    $("#hours").html(hours + "<span>:</span>");
    $("#minutes").html(minutes + "<span>:</span>");
    $("#seconds").html(seconds + "<span></span>");
}
setInterval(function() { makeTimer(); }, 1000);
});

// Loyalty Rewards
// Banner Effect
document.addEventListener("mousemove", parallax);
function parallax(e){
    document.querySelectorAll(".object").forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}

// Claim more bonus
    $('.lp_claim_more_bonus_list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        vertical: true,
        focusOnSelect: true,
        asNavFor: '.claim_more_bonus_right',
    });
    $('.claim_more_bonus_right').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        asNavFor: '.lp_claim_more_bonus_list',
        dots: false,
        arrows: false,
        draggable: false,
    });