class ElementListe{

    constructor(valeur, suivant){
        this.valeur = valeur;
        this.suivant = suivant;
    }

    constructor(valeur){

        this.valeur = valeur;
        this.suivant = null;

    }

    getValeur(){

        return this.valeur;

    }

    setValeur(nvValeur){

        this.valeur = nvValeur;

    }

    getSuivant(){

        return this.suivant;

    }

    setSuivant(suivant){

        this.suiavnt = suivant;

    }


}