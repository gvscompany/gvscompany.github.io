$(document).ready(function () {
    /* Open/Close menu */
    $(document).on('click', '.menu-btn', function () {
        var myMenu = $('.sidebar-menu');
        var myContent = $('.content');
        var links = $('.sidebar-ul > li');

        if (myMenu.hasClass('in')) {
            myMenu.removeClass('in');
            $(this).html('<span class="glyphicon glyphicon-menu-hamburger"></span>');
        } else {
            myMenu.addClass('in');
            $(this).html('<span class="glyphicon glyphicon-remove"></span>');
        }
        if (myContent.hasClass('out')) {
            myContent.removeClass('out');
        } else {
            myContent.addClass('out');
        }
        if (links.hasClass('open')) {
            links.removeClass('open');
        } else {
            links.addClass('open');
        }
    });
    /* Open/Close menu */

    $('.langs').on('click', function () {
        $('.change-lang-text').text($(this).text());
    });

});