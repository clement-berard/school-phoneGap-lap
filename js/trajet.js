function trajet(typeTrajet) {



    this.etapes = {},
    this.titre = null,
    this.depart = {},
    this.arrivee = null,
    this.distanceTotal = null,
    this.tempsTotal = null,
    this.vitesseMoyenne = null,
    this.meteo = null,
    this.typeRoute = null,
    this.periode = null, // jour ou nuit

    this.typeTrajet = typeTrajet,



    this.setEtape = function(key,lat,lng){
        coor = {};
        coor.lat = lat;
        coor.lng = lng;
        this.etapes[key] = coor;
    },

    this.getEtape = function(key){    
       return this.etapes[key];
    },

    this.getEtapes = function(){    
       return this.etapes;
    },

    this.setTitre = function(value){
        this.titre = value;
    },

    this.setDepart = function(lat,lng){
        this.depart = {lat : lat,lng : lng};
    },

    this.setArrivee = function(lat,lng){
        this.arrivee = {lat : lat,lng : lng};
    },

    this.setDistanceTotale = function(int){
        this.distanceTotal = int;
    },

    this.setTempsTotal = function(int){
        this.tempsTotal = int;
    },

    this.setVitesseMoyenne = function(int){
        this.vitesseMoyenne = int;
    },

    this.setMeteo = function(text){
        this.meteo = text;
    },

    this.setTypeRoute = function(text){
        this.typeRoute = text;
    },
    
    this.setPeriode = function(text){
        this.periode = text;
    },

    this.save = function(){

       

        var t = {
                    depart: this.depart,
                    arrivee: this.arrivee,
                    etapes : this.etapes,
                    titre : this.titre,
                    distanceTotal : this.distanceTotal,
                    tempsTotal : this.tempsTotal,
                    vitesseMoyenne : this.vitesseMoyenne,
                    meteo : this.meteo,
                    typeRoute : this.typeRoute,
                    periode : this.periode,
                    typeTrajet : this.typeTrajet
            };

            Locstor.set('trajet_'+this.typeTrajet+'_'+this.uniqid(), t);
    },

    this.uniqid = function(){
        var n=Math.floor(Math.random()*11);
        var k = Math.floor(Math.random()* 1000000);
        return k;
    }

   


   
};












