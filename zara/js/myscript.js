$(document).ready(function () {
        $(window).bind('scroll', function () {
            $('.progress-bar').css({'transition': 'all 3s'});
            $('#ux').css({'width': '75%'});
            $('#web').css({'width': '90%'});
            $('#marketing').css({'width': '65%'});

        });



    $('.menu-btn').click(function () {
        $('.menu-btn').hide();
        $('.menu-btn2').show();
    });
    $('.menu-btn2').click(function () {
        $('.menu-btn').show();
        $('.menu-btn2').hide();
    });


})

