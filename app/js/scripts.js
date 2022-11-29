$(document).ready(function() {

    $('.js-open-menu').click(function() {
        $('.header-main__nav').toggleClass('is-active');
        $('body').toggleClass('is-open-menu');
    });


    let introSliderMin = new Swiper('.intro-slider-min', {
        direction: "vertical",
        loop: true,
        speed: 500,
        allowTouchMove: false,
        on:{
            init:function(){
              setSlideHeight(this);
            },
            slideChangeTransitionEnd:function(){
              setSlideHeight(this);
            }
          }
    });

    let introSliderBig = new Swiper('.intro-slider-big', {
        effect: "fade",
        loop: true,
        speed: 500,
        navigation: {
            nextEl: ".js-intro-next",
            prevEl: ".js-intro-prev",
        },
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: ".intro-slider-dots",
            clickable: true,
        },
        thumbs: {
            swiper: introSliderMin,
        },
    });

    
});

function setSlideHeight(that){
    $('.intro-slider-min .swiper-slide').css({height:'auto'});
    var currentSlide = that.activeIndex;
    var newHeight = $(that.slides[currentSlide]).innerHeight();
    console.log(newHeight);
    $('.intro-slider-min .swiper-wrapper, .intro-slider-min .swiper-slide').css({ height : newHeight })
    that.update();
}


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