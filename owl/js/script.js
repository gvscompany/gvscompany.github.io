"use strict";
var owlCarouselSettings = {
    loop: true,
    center: true,
    items: 1,
    mouseDrag: false,
    nav: true,
    navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
    dots: true,
    startPosition: 0,
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 2700,
    autoplayHoverPause: true,
    autoplaySpeed: 800,
    navSpeed: 700,
    dotsSpeed: 700
};

$(document).ready(function () {
    $(".owl-carousel").owlCarousel(owlCarouselSettings);
});