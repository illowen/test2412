$(document).ready(function () {
    /* меню ***********************************/

    $(".menu_mob_btn").click(function () {
        $(this).toggleClass("active");
        $(".page_admin").toggleClass("active");
    });

    $(".menu_mob_close").click(function () {
        $(".page_admin").toggleClass("active");
    });

    $('.banner_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    $(window).scroll(function() {

        var header = $('.header').offset().top;
        if(header > 100){
            $('header').addClass('fixed');
        } else{
            $('header').removeClass('fixed');
        }

    });
})