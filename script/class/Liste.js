class Liste{

    constructor(){

        this.premier = null;


    }

    estVide(){

        return this.premier == null;

    }

    setPremier(premier){

        this.premier = premier;

    }

    getPremier(){

        return this.premier;

    }

    getLongueur(){

        var m = this.premier;
        var longueur = 0;

        while(m!=null){

            longueur++;
            m = m.suivant;

        }

        return longueur;

    }

    ajouterFin(nvMaillon){

        var m = this.premier;

        while(m.getSuivant() != null){

            m = m.getSuivant();

        }

        m.setSuivant(nvMaillon);


    }

}