$(document).ready(function () {


    // button menu
    $('.menu-btn').click(function () {
        $('.menu-btn').hide();
        $('.menu-btn2').show();
    });
    $('.menu-btn2').click(function () {
        $('.menu-btn').show();
        $('.menu-btn2').hide();
    });
    // button menu


    // Плавная прокрутка
    $('.navbar-nav a[href^="#"]').on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
            var newTop = top - 76;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: newTop}, 800);
    });
    // Плавная прокрутка

    // Заполнение scrollbar
    $(window).bind('scroll', function () {
        $('.progress-bar').css({'transition':'all 1s'});
        $('#php').css({'width':'90%'});
        $('#ms').css({'width':'90%'});
        $('#js').css({'width':'70%'});
        $('#jq').css({'width':'100%'});
        $('#h5').css({'width':'65%'});
        $('#bt').css({'width':'100%'});
        $('#c3').css({'width':'100%'});
    });
    // Заполнение scrollbar

    // send Massage
    $('input, textarea').focus(function () {
        $(this).css({
            'transition':'all .3s',
            'border-bottom':'1px solid #1b242f',
        });
        $(this).prev().css({
            'transition':'all .3s',
            'top':'-3px'
        });
    })
    .blur(function () {
        $(this).css({
            'transition':'all .2s',
            'border-bottom':'1px solid #eee',
        });
        $(this).prev().css({
            'transition':'all .2s',
            'top':'5px'
        });
    });

    // Soc-icons
    $("#social").jsSocials({
        showLabel: true,
        shareIn: "popup",
        showCount: false,
        shares: ["facebook", "twitter", "googleplus", "linkedin"]
    });
    // Soc-icons

});
