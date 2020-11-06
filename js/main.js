$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 800,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


document.querySelector(".menu-icon").onclick = function() {
    document.querySelector(".menu-icon-line").classList.toggle("menu-icon-active");
}




$(function(){

    $('.fullscreen__link').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#photo').offset().top }, 1000);
      e.preventDefault();
    });
    
    });

    function backToTop() {
        let button = $('.back-to-top');
    
        $(window).on('scroll', () => {
            if ($(this).scrollTop() >= 50) {
                button.fadeIn();
            }else {
                button.fadeOut();
            }
        });
    
        button.on('click', (e) => {
            e.preventDefault();
            $('html').animate({scrollTop: 0},1000);
        })
    }
    
    backToTop();