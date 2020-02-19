$(document).ready(function () {

    $('.owl-carousel.sullen_slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<img src='image/left-arrow.png'>","<img src='image/right-arrow.png'>"],
        autoplay: true,
        // animateOut: 'zoomOutDown',
        animateIn: 'zoomIn',
        smartSpeed: 450,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })



     



    


    $(".back_to_top").click(function () {

        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });


    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(".top-header-area").addClass("black");
        } else {
            $(".top-header-area").removeClass("black");
        }

    });


    $('.mobile_bars').click(function () {

        $('.overlay_mobile_nav').addClass('animated fadeInLeft faster').show();
    });


    $('.close_btn').click(function () {

        $('.overlay_mobile_nav').removeClass('animated fadeInLeft slow').hide();
    });


     $('.mobile_bars').click(function () {

        $('.main_menu_item li').addClass('animated flipInY slow');
    });


     $('.search_icon').click(function () {

        $('.search_panel_none').addClass('animated zoomIn faster').show();
    });

});