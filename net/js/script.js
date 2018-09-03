// PAGE SCROLL ========================
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $('.navbar-collapse.collapse').removeClass('show');
    var currentSectionId = $(this).attr('href');
    var scrollSize = $(currentSectionId).offset().top - 80;
    $('html, body').animate({
        scrollTop: scrollSize
    },1000);
});
// PAGE SCROLL END ====================


$('[data-toggle="popover"]').popover();


// Initialize and add the map
    function initMap() {
        // The location of Uluru
        var uluru = {lat: 41.206746, lng: 45.000483};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 13, center: uluru});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});
    }

