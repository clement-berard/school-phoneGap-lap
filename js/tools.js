function myTimer(id) {
    if (lancementTimer == 1) {
        secondes = secondes + 1;
        if (secondes == 60) {
            secondes = 0;
            minutes = minutes + 1;
        }
        if (minutes == 60) {
            minutes = 0;
            heures = heures + 1;
        }
        //Gestion de l'affichage avec "0"
        if (secondes < 10) {
            affSecondes = "0" + secondes;
        } else {
            affSecondes = secondes;
        }
        if (minutes < 10) {
            affMinutes = "0" + minutes;
        } else {
            affMinutes = minutes;
        }
        if (heures < 10) {
            affHeures = "0" + heures;
        } else {
            affHeures = heures;
        }

        document.getElementById(id).innerHTML = affHeures + ":" + affMinutes + ":" + affSecondes;
    } else {
        //Remettre timer à 0 après avoir sauvegardé le temps du trajet
        //document.getElementById("timer").innerHTML = affHeures + ":" + affMinutes+ ":" + affSecondes ;
    }
}


function error_callback() {
    alert('Error');
}


getTotalKilometers = function (tab) {
    var taille = Object.keys(tab).length;
    var distance = 0;
    for(var i=0; i < taille ; i++){
        if(taille == 1)
            return distance;
        else{
            if((i+1)<taille){
                var coo1 = new google.maps.LatLng(tab[i].lat,tab[i].lng);
                var coo2 = new google.maps.LatLng(tab[i+1].lat,tab[i+1].lng);
                distance = distance + google.maps.geometry.spherical.computeDistanceBetween(coo1, coo2);
            }
        }
    }




    return distance

}