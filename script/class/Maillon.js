class Maillon{

    constructor(valeur, suivant){

        this.val = valeur;
        this.suivant = suivant;

    }

    setSuivant(suivant){

        this.suivant = suivant;


    }

    getSuivant(){

        return this.suivant;

    }

    getValeur(){
        return this.val;
    }

    setValeur(val){
        this.val = val;
    }


}


