/**
 * Ce fichier contient les ensembles de fonctions de creation d'une map google
 * @param myMapId
 */

function fonctionMap(myMapId) {


    // id de la div contenant la map
    this.mymapid = myMapId,
        // objet map Google instancié lors de l'init
        this.Mymap = null,
        // object contenant l'ensemble de markers
        this.markers = {},


    /**
     * fonction d'initialisation de la map (on appelle juste une autre fonction ici)
     */
        this.init = function () {
            this.createMap();
            // on retourne notre objet JS pour s'en servir dans notre code
            return this;
        },

    /**
     * getter pour la map Google
     */
        this.getMap = function () {
            return this.Mymap;
        },

    /**
     * pour recuperer un marker
     */
        this.getMarker = function (key) {
            return this.markers[key];
        },

    /**
     * pour recuperer l'ensemble des markers de notre map
     */
        this.getMarkers = function () {
            return this.markers;
        },

    /**
     * retourne le nombre de markers de la map
     */
        this.getSize = function () {
            return this.markers.length;
        }

    /**
     * fonction de creation de la map google
     */
    this.createMap = function () {
        // initialisation arbitraire
        init_latlng = this.getGoogleLocation('45.885379', '4.247927');
        var myOptions = {
            zoom: 9,
            center: init_latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        geocoder = geocoder = new google.maps.Geocoder();
        map = new google.maps.Map(document.getElementById(this.mymapid), myOptions);
        this.Mymap = map;
    },
    /**
     * fonction qui retourne un nombre unique. sert pour l'enregistrement de le localstorage
     */
        this.uniqid = function () {
            var n = Math.floor(Math.random() * 11);
            var k = Math.floor(Math.random() * 1000000);
            return k;
        },
    /**
     * pour modifier le centre de la map avec de nouvelles coordonnees
     */
        this.moveToLocation = function (map, lat, lng) {
            var center = new google.maps.LatLng(lat, lng);
            // using global variable:
            map.panTo(center);
        },
    /**
     * retourne un objet LatLng de google en fonction de coordonnees
     */
        this.getGoogleLocation = function (lat, lng) {
            return new google.maps.LatLng(lat, lng);
        },
    /**
     * pour ajouter un marker a la map, et le mettre avec l'ensemble des markers de cette map
     */
        this.addMarker = function (name, loc, content) {

            var m = new google.maps.Marker({
                position: loc,
                map: this.Mymap
            });
            this.markers.name = m;
            // si on veut ajouter une infobulle sur le marker, et on l'ouvre directement
            if (content != null) {
                var c = new google.maps.InfoWindow({
                    content: content
                });
                c.open(this.Mymap, m);
            }
        },
    /**
     * pour supprimer un marker de la map
     */
        this.deleteMarker = function (tab, name) {
            if (markers.name != null)
                markers.name.setMap(null);
        }
};












