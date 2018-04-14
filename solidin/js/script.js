$(document).ready(function () {

    // OWL CAROCEL
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:2,
        nav:false,
        autoplay:true,
        autoplaySpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // SEARCH BTN
    document.getElementById('search-btn').onclick = function (event) {
        document.getElementById('input-block').style.right = '0';
        return false;
    };

});