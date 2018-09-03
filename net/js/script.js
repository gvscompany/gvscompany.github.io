// PAGE SCROLL ========================
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var currentSectionId = $(this).attr('href');
    var scrollSize = $(currentSectionId).offset().top - 50;
    $('html, body').animate({
        scrollTop: scrollSize
    },1000);
});
// PAGE SCROLL END ====================

