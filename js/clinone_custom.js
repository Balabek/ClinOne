/* 𝙲𝚞𝚜𝚝𝚘𝚖 𝙹𝚂 */

$(document).ready(function(){

    // $(document).scroll(function() {
    //     if ($(document).scrollTop() > 100) {
    //         $('.bg-light').addClass('shrink');
    //     } else {
    //         $('.bg-light').removeClass('shrink');
    //     }
    // });

    // Fancy animation for hamburger menu
    $('.clin_nav_toggler').on('click', function(){
        $('.animated-icon1').toggleClass('open');
    });


    // Resource slider
    $('.resource_slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 400,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });



    // Partners Logo slider
    $('.partner_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 574,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // Subtle fade-in animation for the below-mentioned elements
    ScrollReveal().reveal('.solution_box_outermost', {delay: 100});
    ScrollReveal().reveal('.twophones', {delay: 500, duration: 1400});
    ScrollReveal().reveal('.circle_icon_holder', {delay: 300, duration: 800});
    ScrollReveal().reveal('.statbox', {delay: 400});
    ScrollReveal().reveal('.popbox_area', {delay: 600, duration: 600});

    ScrollReveal().reveal('.team_member', {delay: 150});

    ScrollReveal().reveal('.ipad_collage_holder', {delay: 200, duration: 600});


});