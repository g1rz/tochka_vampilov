$(document).ready(function() {

    $('.js-open-menu').click(function() {
        $('.header-main__nav').toggleClass('is-active');
        $('body').toggleClass('is-open-menu');
    });


    let introSliderBig = new Swiper('.intro-slider-big', {
        effect: "fade",
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: ".js-intro-next",
            prevEl: ".js-intro-prev",
        },
        fadeEffect: {
            crossFade: true
          },
    });
});


$(document).mouseup(function (e) {

    if ($(window).width() <= 991) {
        let mobileMenu = $('.header-main__nav');
        let mobileBtn = $('.js-open-menu');

        if ( !mobileMenu.is(e.target) && mobileMenu.has(e.target).length === 0 && !mobileBtn.is(e.target) && mobileBtn.has(e.target).length === 0 ) {
            mobileMenu.removeClass('is-active');
            $('body').removeClass('is-open-menu');
        }
    }
    
});