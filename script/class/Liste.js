class ListeChaine{

    premier;

    getPremier(){
        return this.premier;
    }

    estVide(){
        var res = false;
        if(premier == null){
            res = true;
        }

        return res;

    }

    AjouterDébut(valeur){

        ancienPremier = this.premier;

        premier = new ElementListe(valeur, ancienPremier);

    }

    getLongueur(){

        var longueur=0

        ref = this.getPremier()

        while(ref != null){

            longueur++;
            ref= ref.getSuivant();

        }

        return longueur;

    }





}