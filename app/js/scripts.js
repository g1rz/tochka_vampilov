$(document).ready(function () {
    $('.js-open-menu').click(function () {
        $('.header-main__nav').toggleClass('is-active');
        $('body').toggleClass('is-open-menu');
    });

    let introSliderMin = new Swiper('.intro-slider-min', {
        direction: 'vertical',
        loop: true,
        speed: 500,
        allowTouchMove: false,
        on: {
            init: function () {
                setSlideHeight(this);
            },
            slideChangeTransitionEnd: function () {
                setSlideHeight(this);
            },
        },
    });

    let introSliderBig = new Swiper('.intro-slider-big', {
        effect: 'fade',
        loop: true,
        speed: 500,
        navigation: {
            nextEl: '.js-intro-next',
            prevEl: '.js-intro-prev',
        },
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: '.intro-slider-dots',
            clickable: true,
        },
        thumbs: {
            swiper: introSliderMin,
        },
    });
});

$(function () {
    // window.addEventListener('scroll', function (event) {
    //     var top = this.pageYOffset;

    //     var layers = $('.parallax');
    //     var speed, yPos;
    //     layers.each(function () {
    //         speed = $(this).attr('data-speed');
    //         var yPos = -((top * speed) / 100);
    //         $(this).attr('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
    //     });
    // });

    var paralax = document.querySelector('.parallax');
    var layers = $('.parallax');

    /* коэфициент сдвига: 1 сдвиг равный смещению по оси Y, 0 без сдвига */
    var moveCoef = 0.5;

    window.addEventListener('scroll', scroll);
    window.addEventListener('resize', scroll);
    scroll();

    function scroll() {
        /* берём огнаничивающий прямоугольник паралакса относительно окна (фрейма) */
        var r = paralax.getBoundingClientRect();

        /* центр паралакса */
        var paralaxYCenter = r.y + r.height / 2;
        /* центр экрана */
        var scrollYCenter = window.innerHeight / 2;

        /* Вычисляем смещение */
        var move = (paralaxYCenter - scrollYCenter) * moveCoef - 100;

        paralax.style.backgroundPositionY = move + 'px';
    }
});

function setSlideHeight(that) {
    $('.intro-slider-min .swiper-slide').css({ height: 'auto' });
    var currentSlide = that.activeIndex;
    var newHeight = $(that.slides[currentSlide]).innerHeight();
    console.log(newHeight);
    $('.intro-slider-min .swiper-wrapper, .intro-slider-min .swiper-slide').css({
        height: newHeight,
    });
    that.update();
}

$(document).mouseup(function (e) {
    if ($(window).width() <= 991) {
        let mobileMenu = $('.header-main__nav');
        let mobileBtn = $('.js-open-menu');

        if (
            !mobileMenu.is(e.target) &&
            mobileMenu.has(e.target).length === 0 &&
            !mobileBtn.is(e.target) &&
            mobileBtn.has(e.target).length === 0
        ) {
            mobileMenu.removeClass('is-active');
            $('body').removeClass('is-open-menu');
        }
    }
});
