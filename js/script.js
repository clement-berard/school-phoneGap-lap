var directionsService = new google.maps.DirectionsService();
var map, geocoder, marker;
var depart, arrivee, ptCheck;
/* initialise google MAP V3 */
function init() {
  afficherPositionActuelle();
  /* gestion des routes */
  directionsDisplay = new google.maps.DirectionsRenderer();
  /* emplacement par défaut de la carte (j'ai mis Villeurbanne) */
  var maison = new google.maps.LatLng(45.771944, 4.8901709);
  /* option par défaut de la carte */
  var myOptions = {
    zoom : 6,
    mapTypeId : google.maps.MapTypeId.ROADMAP,
    center : maison
  }
  /* creation de la map */
  map = new google.maps.Map(document.getElementById("divMap"), myOptions);
  /* connexion de la map */
  directionsDisplay.setMap(map);
  /* intialise le geocoder pour localiser les adresses */
  geocoder = new google.maps.Geocoder();
}

function trouveRoute() {

  var request = {
    origin : "Paris",
    destination : "villeurbanne",
    travelMode : google.maps.DirectionsTravelMode.DRIVING
  };
  var polylineOp = {
    strokeColor : "#FF0000" // la couleur de la route : rouge
  };
  var renderOptions = {
    polylineOptions : polylineOp
  };

  directionsDisplay = new google.maps.DirectionsRenderer(renderOptions);
  directionsDisplay.setMap(map);
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

function rechercher(src) {
  if (geocoder) {
    geocoder
        .geocode(
            {
              'address' : document.getElementById(src).value
            },
            function(results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                /* ajoute un marqueur à l'adresse choisie */
                map.setCenter(results[0].geometry.location);
                if (marker) {
                  marker.setMap(null);
                }
                marker = new google.maps.Marker({
                  map : map,
                  position : results[0].geometry.location
                });
                /*
                 * on remplace l'adresse par celle fournie du
                 * geocoder
                 */
                document.getElementById(src).value = results[0].formatted_address;

              } else {
                alert("Geocode n'a rien trouvé !\n raison : "
                    + status);
              }
            });
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }
  var options = {
    map : map,
    position : new google.maps.LatLng(60, 105),
    content : content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

function afficherPositionActuelle() {
  var mapOptions = {
    zoom : 15
  };
  var map = new google.maps.Map(document.getElementById('divMap'), mapOptions);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
          position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map : map,
        position : pos,
        content : 'Location found using HTML5.'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}
function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map : map,
    position : new google.maps.LatLng(60, 105),
    content : content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}