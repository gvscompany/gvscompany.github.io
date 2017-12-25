$(document).ready(function () {

    $('button[data-toggle="offcanvas"]').on('click', function () {
        $(this).toggleClass('body-open');
    });
//
//     // Work gallery
//     $('.work-gallery-block .owl-carousel').owlCarousel({
//         loop: true, //Зацикливаем слайдер
//         autoplay: true, //Автозапуск слайдера
//         smartSpeed: 1000, //Время движения слайда
//         autoplayTimeout: 2000, //Время смены слайда
//         margin: 10, //Отступ от картино если выводите больше 1
//         dots: false, // Отключаем точки
//         responsiveClass: true,
//         navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
//         responsive: {
//             0: {
//                 items: 1,
//                 nav: false
//             }, 480: {
//                 items: 2,
//                 nav: false
//             }, 768: {
//                 items: 3,
//                 nav: false
//             }, 991: {
//                 items: 4,
//                 nav: false
//             }, 1200: {
//                 items: 5,
//                 nav: true
//             }
//         }
//     });
//     // /Work gallery
//
//     // Partners logo gallery
//     $('.our-partners-gallery-block .owl-carousel').owlCarousel({
//         loop: true, //Зацикливаем слайдер
//         autoplay: true, //Автозапуск слайдера
//         smartSpeed: 1000, //Время движения слайда
//         autoplayTimeout: 4000, //Время смены слайда
//         margin: 30, //Отступ от картино если выводите больше 1
//         dots: false, // Отключаем точки
//         responsiveClass: true,
//         navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
//         responsive: {
//             0: {
//                 items: 1,
//                 nav: false
//             }, 480: {
//                 items: 2,
//                 nav: false
//             }, 768: {
//                 items: 3,
//                 nav: false
//             }, 991: {
//                 items: 4,
//                 nav: false
//             }, 1200: {
//                 items: 5,
//                 nav: true
//             }
//         }
//     });
//     // /Partners logo gallery
//
//     // Work gallery litebox OPEN
//     $('.galleryImg').on('click', function () {
//         var currentUrl = $(this).attr('src'); // Получаем URL картинки по которой кликнули
//         var currentLargeImg = $('#current-img'); // Получаем IMG тег большой картинки
//         var liteboxBlackBg = $('#myModal'); // Получаем прозрачный фон LiteBox
//         var page = $('html, body'); // Получаем страницу
//         currentLargeImg.attr('src', currentUrl); // Вставляем новый URL
//         liteboxBlackBg.css('display', 'table'); // Показываем LiteBox
//         page.css('overflow', 'hidden'); // Убираем прокрутку с BODY
//     });
//     // /Work gallery litebox OPEN
//
//     // Work gallery litebox CLOSE
//     $('.litebox-close-btn').on('click', function () {
//         $('#myModal').css('display', 'none');
//         $('html, body').css('overflow', 'auto');
//     });
//     // /Work gallery litebox CLOSE
//
//     // Scroll page up
//     $('#scroll-up').on('click', function () {
//         $('html, body').animate({scrollTop: 0}, 1000);
//     });
//     // /Scroll page up
//
//     // Tooltip
//     $('[data-toggle="tooltip"]').tooltip();
//     // Tooltip
//
//     // Page dynamic poster
//     var left = 0;
//     var top = 0;
//     var element = $('#container-fluid');
//     var offset = {
//         left: element.offset().left,
//         top: element.offset().top
//     };
//     element.on('mousemove', function (e) {
//         left = (e.pageX - offset.left);
//         top = (e.pageY - offset.top);
//         $(this).css({
//             backgroundPosition: '-' + (0.2 * left) + 'px -' + (0.15 * top) + 'px'});
//     });
//     // Page dynamic poster
//
//     // Gallery slider
//     $(document).on('click', '.bg', function () {
//         var carouselBlock = $('.cars-carousel');
//         carouselBlock.empty();
//         // Получаем все теги маленьких картинок
//         var images = $(this).next().next().find('img');
//         // Массив для путей маленьких картинок
//         var srcArr = [];
//         // Проходим по циклу по всем картинкам
//         for (var i = 0; i < images.length; i++) {
//             // Генерируем теги картинок
//             var imgTag = document.createElement('img');
//             var div = document.createElement('div');
//
//             // Получаем пути маленьких картинок и передаем в сгенерированные теги
//             if (i == 0) {
//                 div.className = 'item active';
//                 imgTag.setAttribute('src', images[i].src);
//                 div.append(imgTag);
//             } else {
//                 div.className = 'item';
//                 imgTag.setAttribute('src', images[i].src);
//                 div.append(imgTag);
//             }
//             carouselBlock.append(div);
//         }
//         // Открываем модальное окно
//         $('#myModal').modal('show');
//         return false;
//     });
//     // /Gallery slider
//     new WOW().init();
});

// // Google map
// function initMap() {
//     var uluru = {lat: 40.197930, lng: 44.567075};
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 16,
//         styles: [
//             {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
//             {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
//             {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
//             {
//                 featureType: 'administrative.locality',
//                 elementType: 'labels.text.fill',
//                 stylers: [{color: '#d59563'}]
//             }, {
//                 featureType: 'poi',
//                 elementType: 'labels.text.fill',
//                 stylers: [{color: '#d59563'}]
//             }, {
//                 featureType: 'poi.park',
//                 elementType: 'geometry',
//                 stylers: [{color: '#263c3f'}]
//             }, {
//                 featureType: 'poi.park',
//                 elementType: 'labels.text.fill',
//                 stylers: [{color: '#6b9a76'}]
//             }, {
//                 featureType: 'road',
//                 elementType: 'geometry',
//                 stylers: [{color: '#38414e'}]
//             }, {
//                 featureType: 'road',
//                 elementType: 'geometry.stroke',
//                 stylers: [{color: '#212a37'}]
//             }, {
//                 featureType: 'road',
//                 elementType: 'labels.text.fill',
//                 stylers: [{color: '#9ca5b3'}]
//             },
//             {
//                 featureType: 'road.highway',
//                 elementType: 'geometry',
//                 stylers: [{color: '#746855'}]
//             }, {
//                 featureType: 'road.highway',
//                 elementType: 'geometry.stroke',
//                 stylers: [{color: '#1f2835'}]
//             }, {
//                 featureType: 'road.highway',
//                 elementType: 'labels.text.fill',
//                 stylers: [{color: '#f3d19c'}]
//             },
//             {
//                 featureType: 'transit',
//                 elementType: 'geometry',
//                 stylers: [{color: '#2f3948'}]
//             }, {
//                 featureType: 'transit.station',
//                 elementType: 'labels.text.fill',
//                 stylers: [{color: '#d59563'}]
//             }, {
//                 featureType: 'water',
//                 elementType: 'geometry',
//                 stylers: [{color: '#17263c'}]
//             }, {
//                 featureType: 'water',
//                 elementType: 'labels.text.fill',
//                 stylers: [{color: '#515c6d'}]
//             }, {
//                 featureType: 'water',
//                 elementType: 'labels.text.stroke',
//                 stylers: [{color: '#17263c'}]
//             }
//         ],
//         center: uluru
//     });
//     var marker = new google.maps.Marker({
//         position: uluru,
//         map: map
//     });
// }
// // Google map
//
//
