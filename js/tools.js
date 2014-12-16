function myTimer(id) {
                if(lancementTimer == 1) {
                    secondes = secondes + 1;
                    if(secondes == 60) {
                        secondes = 0;
                        minutes = minutes +1;
                    }
                    if(minutes == 60) {
                        minutes = 0;
                        heures = heures +1;
                    }
                    //Gestion de l'affichage avec "0"
                    if(secondes < 10) {
                        affSecondes = "0" + secondes;
                    } else {
                        affSecondes = secondes;
                    }
                    if(minutes < 10) {
                        affMinutes = "0" +minutes;
                    } else {
                        affMinutes = minutes;
                    }
                    if(heures < 10) {
                        affHeures = "0" + heures;
                    } else {
                        affHeures = heures;
                    }

                    document.getElementById(id).innerHTML = affHeures + ":" + affMinutes+ ":" + affSecondes ;
                } else {
                    //Remettre timer à 0 après avoir sauvegardé le temps du trajet
                    //document.getElementById("timer").innerHTML = affHeures + ":" + affMinutes+ ":" + affSecondes ;
                }
}


   function error_callback() {
                alert('Error');
    }