// PAGE SCROLL ========================
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $('.navbar-collapse.collapse').removeClass('show');
    var currentSectionId = $(this).attr('href');
    var scrollSize = $(currentSectionId).offset().top - 50;
    $('html, body').animate({
        scrollTop: scrollSize
    },1000);
});
// PAGE SCROLL END ====================

