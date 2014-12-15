function fonctionMap(myMapId) {



    this.mymapid  =  myMapId,
    this.Mymap = null,
    markers = {},


    this.test = function(){

        alert('test');
    },


    this.init = function() {
        this.createMap();
        return this;
    },
   

    this.getMap = function(){
        return this.Mymap;
    },


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
        markers.name = m;

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












