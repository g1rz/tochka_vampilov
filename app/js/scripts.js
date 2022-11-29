$(document).ready(function() {

    $('.js-open-menu').click(function() {
        $('.header-main__nav').toggleClass('is-active');
        $('body').toggleClass('is-open-menu');
    })

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