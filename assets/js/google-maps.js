function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 23.037516176282157, lng: 72.55280087110602};

    var map = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Ahmedabad University,India' // Title Location
    });
}
