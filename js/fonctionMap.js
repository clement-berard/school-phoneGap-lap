function fonctionMap(myMapId) {



    this.mymapid  =  myMapId,
    this.Mymap = null,
    this.markers = {},



    this.init = function() {
        this.createMap();
        return this;
    },
   

    this.getMap = function(){
        return this.Mymap;
    },

    this.getMarker = function (key) {
            return this.markers[key];
        },

    this.getMarkers = function () {
            return this.markers;
        },

    this.getSize = function(){
        return this.markers.length;
    }    

    this.createMap = function() {
        init_latlng = this.getGoogleLocation('45.885379', '4.247927');
        var myOptions = {
            zoom: 9,
            center: init_latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        geocoder = geocoder = new google.maps.Geocoder();
        map = new google.maps.Map(document.getElementById(this.mymapid), myOptions);
        this.Mymap =  map;

    },

    this.uniqid = function () {
            var n = Math.floor(Math.random() * 11);
            var k = Math.floor(Math.random() * 1000000);
            return k;
        },

    this.moveToLocation = function(map,lat, lng) {
            var center = new google.maps.LatLng(lat, lng);
            // using global variable:
            map.panTo(center);
    },


    this.getGoogleLocation =  function(lat,lng){
        return  new google.maps.LatLng(lat, lng);
    },

    this.addMarker = function(name, loc, content) {

        var m = new google.maps.Marker({
            position: loc,
            map: this.Mymap
        });
        this.markers.name = m;

        if (content != null) {
            var c = new google.maps.InfoWindow({
                content: content
            });
            c.open(this.Mymap, markers.name);
        }


    },

    this.deleteMarker = function(tab,name){
        if (markers.name != null)
            markers.name.setMap(null);
    }
};












